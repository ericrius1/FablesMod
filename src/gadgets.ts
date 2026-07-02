import * as THREE from 'three';
import { BodyType, type PhysicsWorld } from './physics';
import type { Transform } from 'box3d-wasm';
import type { Props, Prop } from './props';
import type { Params } from './params';
import { sfx } from './sfx';

// Gadget weapons: blaster (physics bullets), vortex (throwable singularity),
// zapper (lightning beam that fries props). Tools routes input; these own the
// bodies, visuals, and per-step forces.

export type ExtraBody = { handle: number; mass: number; pos: THREE.Vector3 };

export function glowTexture(inner: string, outer: string) {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d')!;
  const grad = g.createRadialGradient(32, 32, 2, 32, 32, 30);
  grad.addColorStop(0, inner);
  grad.addColorStop(1, outer);
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

const UP = new THREE.Vector3(0, 1, 0);

/** Short-lived expanding glow + light, shared by gadget detonations. */
export class Flashes {
  private list: { mesh: THREE.Mesh; light: THREE.PointLight; t: number; life: number; size: number }[] = [];

  constructor(private scene: THREE.Scene) {}

  spawn(pos: THREE.Vector3, color: string, size: number, life = 0.35) {
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(1, 16, 10),
      new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    mesh.position.copy(pos);
    const light = new THREE.PointLight(color, 42, size * 7);
    light.position.copy(pos);
    this.scene.add(mesh, light);
    this.list.push({ mesh, light, t: 0, life, size });
  }

  update(dt: number) {
    for (let i = this.list.length - 1; i >= 0; i--) {
      const f = this.list[i];
      f.t += dt;
      const k = f.t / f.life;
      if (k >= 1) {
        this.scene.remove(f.mesh, f.light);
        f.mesh.geometry.dispose();
        (f.mesh.material as THREE.Material).dispose();
        this.list.splice(i, 1);
        continue;
      }
      f.mesh.scale.setScalar(0.3 + k * f.size);
      (f.mesh.material as THREE.MeshBasicMaterial).opacity = 0.85 * (1 - k);
      f.light.intensity = 42 * (1 - k);
    }
  }
}

// ── blaster ───────────────────────────────────────────────────────────────

type Projectile = { handle: number; mesh: THREE.Mesh; life: number };

const MAX_SHOTS = 48;

export class Blaster {
  private shots: Projectile[] = [];
  private cooldown = 0;
  private geo = new THREE.SphereGeometry(1, 10, 8);
  private mat = new THREE.MeshBasicMaterial({ color: '#ffc46b' });
  private matHeavy = new THREE.MeshBasicMaterial({ color: '#ff7b4d' });
  private tmpT: Transform = { position: [0, 0, 0], rotation: [0, 0, 0, 1] };

  constructor(
    private world: PhysicsWorld,
    private scene: THREE.Scene
  ) {}

  /** Fires one bullet if off cooldown. Bullets are real bodies — knockback is pure physics. */
  fire(origin: THREE.Vector3, dir: THREE.Vector3, heavy: boolean, params: Params): boolean {
    if (this.cooldown > 0) return false;
    this.cooldown = heavy ? 0.55 : 1 / params.blaster.fireRate;
    const radius = heavy ? 0.17 : 0.085;
    const speed = params.blaster.speed * (heavy ? 0.8 : 1);
    const handle = this.world.createSphere({
      type: BodyType.Dynamic,
      position: [origin.x, origin.y, origin.z],
      radius,
      density: heavy ? 6 : 3,
      friction: 0.5,
      restitution: 0.35,
      bullet: true,
    });
    this.world.setBodyVelocity(handle, [dir.x * speed, dir.y * speed, dir.z * speed]);
    this.world.setBodyHitEvents(handle, true);
    const mesh = new THREE.Mesh(this.geo, heavy ? this.matHeavy : this.mat);
    mesh.scale.setScalar(radius * (heavy ? 1.15 : 1.5)); // slight oversize so tracers read
    mesh.position.copy(origin);
    this.scene.add(mesh);
    if (this.shots.length >= MAX_SHOTS) {
      this.despawn(this.shots[0]);
      this.shots.shift();
    }
    this.shots.push({ handle, mesh, life: heavy ? 5 : 3.2 });
    if (heavy) sfx.slug();
    else sfx.shoot();
    return true;
  }

  private despawn(p: Projectile) {
    this.world.destroyBody(p.handle);
    this.scene.remove(p.mesh);
  }

  update(dt: number) {
    this.cooldown -= dt;
    for (let i = this.shots.length - 1; i >= 0; i--) {
      const p = this.shots[i];
      p.life -= dt;
      this.world.getBodyTransform(p.handle, this.tmpT);
      p.mesh.position.set(this.tmpT.position[0], this.tmpT.position[1], this.tmpT.position[2]);
      if (p.life <= 0 || this.tmpT.position[1] < -35) {
        this.despawn(p);
        this.shots.splice(i, 1);
      }
    }
  }
}

// ── vortex ────────────────────────────────────────────────────────────────

type Orb = { handle: number; mesh: THREE.Group; fuse: number };
type Singularity = {
  pos: THREE.Vector3;
  t: number;
  core: THREE.Mesh;
  swirl: THREE.Sprite;
  light: THREE.PointLight;
};

const SING_LIFE = 2.8;

export class Vortex {
  /** Extra pullable bodies beyond props/ragdolls (the car hooks in here). */
  extraBodies: () => ExtraBody[] = () => [];

  private orbs: Orb[] = [];
  private sings: Singularity[] = [];
  private throwCooldown = 0;
  private collapseCooldown = 0;
  private orbGeo = new THREE.SphereGeometry(0.2, 12, 10);
  private orbMat = new THREE.MeshStandardMaterial({
    color: '#241436',
    emissive: '#b06bff',
    emissiveIntensity: 1.6,
    roughness: 0.3,
  });
  private coreMat = new THREE.MeshBasicMaterial({ color: '#07030d' });
  private swirlTex = glowTexture('rgba(220,170,255,1)', 'rgba(120,50,220,0)');
  private tmpT: Transform = { position: [0, 0, 0], rotation: [0, 0, 0, 1] };
  private tmpV = new THREE.Vector3();
  private tmpV2 = new THREE.Vector3();

  constructor(
    private world: PhysicsWorld,
    private scene: THREE.Scene,
    private props: Props,
    private flashes: Flashes
  ) {}

  get activeCount() {
    return this.sings.length;
  }

  throwOrb(origin: THREE.Vector3, dir: THREE.Vector3): boolean {
    if (this.throwCooldown > 0) return false;
    this.throwCooldown = 0.6;
    const handle = this.world.createSphere({
      type: BodyType.Dynamic,
      position: [origin.x, origin.y, origin.z],
      radius: 0.2,
      density: 1.4,
      friction: 0.6,
      restitution: 0.4,
      bullet: true,
    });
    this.world.setBodyGravityScale(handle, 0.6); // lazy lob
    this.world.setBodyVelocity(handle, [dir.x * 24, dir.y * 24 + 3.5, dir.z * 24]);
    const mesh = new THREE.Group();
    const ball = new THREE.Mesh(this.orbGeo, this.orbMat);
    const glow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: this.swirlTex,
        color: '#c99aff',
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    glow.scale.setScalar(1.1);
    mesh.add(ball, glow);
    mesh.position.copy(origin);
    this.scene.add(mesh);
    this.orbs.push({ handle, mesh, fuse: 1.15 });
    sfx.vortexThrow();
    return true;
  }

  collapseAt(point: THREE.Vector3): boolean {
    if (this.collapseCooldown > 0) return false;
    this.collapseCooldown = 1.3;
    this.spawnSingularity(point.clone().add(new THREE.Vector3(0, 0.8, 0)));
    return true;
  }

  private spawnSingularity(pos: THREE.Vector3) {
    if (this.sings.length >= 3) {
      this.detonate(this.sings[0]);
      this.sings.shift();
    }
    const core = new THREE.Mesh(new THREE.SphereGeometry(0.55, 18, 12), this.coreMat);
    core.position.copy(pos);
    const swirl = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: this.swirlTex,
        color: '#b06bff',
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    swirl.scale.setScalar(3.4);
    swirl.position.copy(pos);
    const light = new THREE.PointLight('#b06bff', 26, 24);
    light.position.copy(pos);
    this.scene.add(core, swirl, light);
    this.sings.push({ pos, t: 0, core, swirl, light });
    sfx.vortexSpawn();
  }

  private detonate(s: Singularity) {
    this.scene.remove(s.core, s.swirl, s.light);
    s.core.geometry.dispose();
    (s.swirl.material as THREE.Material).dispose();
    this.world.explode([s.pos.x, s.pos.y, s.pos.z], 8, 1.3, 42);
    this.flashes.spawn(s.pos, '#c99aff', 7, 0.4);
    sfx.boom();
  }

  private pullBody(s: Singularity, handle: number, mass: number, bodyPos: THREE.Vector3, radius: number, pull: number, step: number) {
    const to = this.tmpV.copy(s.pos).sub(bodyPos);
    const d = to.length();
    if (d > radius || d < 0.4) return;
    // linear falloff with a floor: even the rim overpowers ground friction
    const a = pull * (0.25 + 0.75 * (1 - d / radius));
    to.divideScalar(d); // normalized pull dir
    const swirl = this.tmpV2.copy(UP).cross(to).normalize();
    const mag = mass * a * step;
    // up-bias lifts bodies off the ground so they orbit instead of scraping
    this.world.applyImpulse(handle, [
      to.x * mag + swirl.x * mag * 0.45,
      to.y * mag + swirl.y * mag * 0.45 + mag * 0.3,
      to.z * mag + swirl.z * mag * 0.45,
    ]);
    this.world.setBodyAwake(handle, true);
  }

  prePhysics(step: number, params: Params) {
    // orbs: arm + convert on fuse
    for (let i = this.orbs.length - 1; i >= 0; i--) {
      const orb = this.orbs[i];
      orb.fuse -= step;
      if (orb.fuse <= 0) {
        this.world.getBodyTransform(orb.handle, this.tmpT);
        const pos = new THREE.Vector3(this.tmpT.position[0], this.tmpT.position[1], this.tmpT.position[2]);
        this.world.destroyBody(orb.handle);
        this.scene.remove(orb.mesh);
        this.orbs.splice(i, 1);
        this.spawnSingularity(pos);
      }
    }
    // singularities: pull everything in range, then burst
    for (let i = this.sings.length - 1; i >= 0; i--) {
      const s = this.sings[i];
      s.t += step;
      if (s.t >= SING_LIFE) {
        this.detonate(s);
        this.sings.splice(i, 1);
        continue;
      }
      const radius = params.vortex.radius;
      const pull = params.vortex.pull;
      for (const prop of this.props.all.values()) {
        this.pullBody(s, prop.handle, prop.mass, prop.pos, radius, pull, step);
      }
      for (const rag of this.props.ragdolls) {
        for (const bone of rag.bones) this.pullBody(s, bone.handle, bone.mass, bone.pos, radius, pull, step);
      }
      for (const extra of this.extraBodies()) {
        this.pullBody(s, extra.handle, extra.mass, extra.pos, radius, pull * 0.6, step);
      }
    }
  }

  update(dt: number) {
    this.throwCooldown -= dt;
    this.collapseCooldown -= dt;
    for (const orb of this.orbs) {
      this.world.getBodyTransform(orb.handle, this.tmpT);
      orb.mesh.position.set(this.tmpT.position[0], this.tmpT.position[1], this.tmpT.position[2]);
    }
    const now = performance.now();
    for (const s of this.sings) {
      const k = s.t / SING_LIFE;
      (s.swirl.material as THREE.SpriteMaterial).rotation += dt * 7;
      s.swirl.scale.setScalar(3.4 + Math.sin(now * 0.02) * 0.5 - k * 1.2);
      s.core.scale.setScalar(1 + Math.sin(now * 0.03) * 0.12 + k * 0.5);
      s.light.intensity = 22 + Math.sin(now * 0.05) * 8 + k * 30;
    }
  }
}

// ── zapper ────────────────────────────────────────────────────────────────

const BEAM_PTS = 16;
const FRY_TIME = 1.5; // seconds of zap before a prop disintegrates

export class Zapper {
  private lineA: THREE.Line;
  private lineB: THREE.Line;
  private impactGlow: THREE.Sprite;
  private light: THREE.PointLight;
  private charge = new Map<number, number>();
  private zappedThisFrame = new Set<number>();
  private chainCooldown = 0;
  private arcs: { line: THREE.Line; t: number }[] = [];
  private tmpV = new THREE.Vector3();
  private tmpV2 = new THREE.Vector3();
  private tmpV3 = new THREE.Vector3();

  constructor(
    private world: PhysicsWorld,
    private scene: THREE.Scene,
    private props: Props,
    private flashes: Flashes
  ) {
    const makeLine = (color: string, opacity: number) => {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(BEAM_PTS * 3), 3));
      const line = new THREE.Line(
        geo,
        new THREE.LineBasicMaterial({
          color,
          transparent: true,
          opacity,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        })
      );
      line.frustumCulled = false;
      line.visible = false;
      scene.add(line);
      return line;
    };
    this.lineA = makeLine('#dffcff', 0.95);
    this.lineB = makeLine('#6bffe8', 0.6);
    this.impactGlow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTexture('rgba(220,255,250,1)', 'rgba(60,255,220,0)'),
        color: '#9dfff0',
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    this.impactGlow.visible = false;
    scene.add(this.impactGlow);
    this.light = new THREE.PointLight('#6bffe8', 0, 12);
    scene.add(this.light);
  }

  private fillJagged(line: THREE.Line, a: THREE.Vector3, b: THREE.Vector3, amp: number) {
    const attr = line.geometry.getAttribute('position') as THREE.BufferAttribute;
    const dir = this.tmpV.copy(b).sub(a);
    const len = dir.length();
    dir.normalize();
    // any perpendicular basis
    const side = this.tmpV2.set(-dir.z, 0, dir.x);
    if (side.lengthSq() < 1e-4) side.set(1, 0, 0);
    side.normalize();
    const up = this.tmpV3.copy(dir).cross(side);
    for (let i = 0; i < BEAM_PTS; i++) {
      const t = i / (BEAM_PTS - 1);
      const env = Math.sin(t * Math.PI) * amp * Math.min(1, len * 0.12);
      const j1 = (Math.random() - 0.5) * 2 * env;
      const j2 = (Math.random() - 0.5) * 2 * env;
      attr.setXYZ(
        i,
        a.x + dir.x * len * t + side.x * j1 + up.x * j2,
        a.y + dir.y * len * t + side.y * j1 + up.y * j2,
        a.z + dir.z * len * t + side.z * j1 + up.z * j2
      );
    }
    attr.needsUpdate = true;
    line.geometry.computeBoundingSphere();
  }

  /** Called every frame while the trigger is held. */
  beam(origin: THREE.Vector3, point: THREE.Vector3, handle: number | undefined, dt: number, params: Params) {
    this.lineA.visible = true;
    this.lineB.visible = true;
    this.fillJagged(this.lineA, origin, point, 0.22);
    this.fillJagged(this.lineB, origin, point, 0.55);
    this.impactGlow.visible = true;
    this.impactGlow.position.copy(point);
    this.impactGlow.scale.setScalar(0.5 + Math.random() * 0.5);
    this.light.position.copy(point);
    this.light.intensity = 8 + Math.random() * 10;

    if (handle === undefined) return;
    const power = params.zapper.power;
    const prop = this.props.all.get(handle);
    if (prop) {
      this.zappedThisFrame.add(handle);
      // convulsive jitter + lift
      const mag = prop.mass * power * dt;
      this.world.applyImpulse(prop.handle, [
        (Math.random() - 0.5) * 1.4 * mag,
        (0.5 + Math.random() * 0.6) * mag,
        (Math.random() - 0.5) * 1.4 * mag,
      ]);
      this.world.applyAngularImpulse(prop.handle, [
        (Math.random() - 0.5) * mag * 0.25,
        (Math.random() - 0.5) * mag * 0.25,
        (Math.random() - 0.5) * mag * 0.25,
      ]);
      this.world.setBodyAwake(prop.handle, true);
      this.props.scorch(handle, dt * 0.55);
      const c = (this.charge.get(handle) ?? 0) + dt;
      if (c >= FRY_TIME) this.disintegrate(prop);
      else this.charge.set(handle, c);
      return;
    }
    const bone = this.props.boneByHandle.get(handle);
    if (bone) {
      const rag = this.props.ragdollOfBone(handle);
      if (rag) this.world.humanApplyRandomImpulse(rag.human, power * dt * 2.4);
      this.world.applyImpulse(handle, [0, bone.mass * power * dt * 0.9, 0]);
      this.world.setBodyAwake(handle, true);
    }
  }

  private disintegrate(prop: Prop) {
    this.charge.delete(prop.handle);
    this.flashes.spawn(prop.pos, '#aefcff', 2, 0.32);
    this.world.explode([prop.pos.x, prop.pos.y, prop.pos.z], 2.4, 1.2, 14);
    this.props.despawn(prop);
    sfx.disintegrate();
  }

  stop() {
    this.lineA.visible = false;
    this.lineB.visible = false;
    this.impactGlow.visible = false;
    this.light.intensity = 0;
  }

  /** RMB: chain arc — leaps across up to 5 props near the aim point. */
  chain(point: THREE.Vector3, params: Params): boolean {
    if (this.chainCooldown > 0) return false;
    const targets: Prop[] = [];
    for (const prop of this.props.all.values()) {
      if (prop.pos.distanceTo(point) < 9) targets.push(prop);
    }
    if (!targets.length) return false;
    this.chainCooldown = 0.7;
    targets.sort((a, b) => a.pos.distanceTo(point) - b.pos.distanceTo(point));
    const chain = targets.slice(0, 5);

    const pts: THREE.Vector3[] = [point.clone()];
    for (const prop of chain) {
      const mag = prop.mass * params.zapper.power * 0.55;
      const away = this.tmpV.copy(prop.pos).sub(point).normalize();
      this.world.applyImpulse(prop.handle, [away.x * mag * 0.5, mag, away.z * mag * 0.5]);
      this.world.setBodyAwake(prop.handle, true);
      this.props.scorch(prop.handle, 0.35);
      this.charge.set(prop.handle, (this.charge.get(prop.handle) ?? 0) + 0.7);
      pts.push(prop.pos.clone());
    }
    // one jagged polyline through the whole chain
    const segs = 6;
    const total = (pts.length - 1) * segs + 1;
    const arr = new Float32Array(total * 3);
    let w = 0;
    for (let s = 0; s < pts.length - 1; s++) {
      const a = pts[s];
      const b = pts[s + 1];
      for (let i = 0; i < segs; i++) {
        const t = i / segs;
        const env = Math.sin(t * Math.PI) * 0.5;
        arr[w++] = a.x + (b.x - a.x) * t + (Math.random() - 0.5) * env;
        arr[w++] = a.y + (b.y - a.y) * t + (Math.random() - 0.5) * env;
        arr[w++] = a.z + (b.z - a.z) * t + (Math.random() - 0.5) * env;
      }
    }
    const last = pts[pts.length - 1];
    arr[w++] = last.x;
    arr[w++] = last.y;
    arr[w++] = last.z;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(arr, 3));
    const line = new THREE.Line(
      geo,
      new THREE.LineBasicMaterial({
        color: '#bffff4',
        transparent: true,
        opacity: 1,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    line.frustumCulled = false;
    this.scene.add(line);
    this.arcs.push({ line, t: 0 });
    this.flashes.spawn(point, '#9dfff0', 1.2, 0.2);
    sfx.zapBurst();
    return true;
  }

  update(dt: number) {
    this.chainCooldown -= dt;
    for (let i = this.arcs.length - 1; i >= 0; i--) {
      const arc = this.arcs[i];
      arc.t += dt;
      if (arc.t > 0.16) {
        this.scene.remove(arc.line);
        arc.line.geometry.dispose();
        (arc.line.material as THREE.Material).dispose();
        this.arcs.splice(i, 1);
        continue;
      }
      (arc.line.material as THREE.LineBasicMaterial).opacity = 1 - arc.t / 0.16;
    }
    // charge cools when not actively zapped; prune dead props
    for (const [handle, c] of this.charge) {
      if (!this.props.all.has(handle)) {
        this.charge.delete(handle);
        continue;
      }
      if (!this.zappedThisFrame.has(handle)) {
        const next = c - dt * 0.4;
        if (next <= 0) this.charge.delete(handle);
        else this.charge.set(handle, next);
      }
    }
    this.zappedThisFrame.clear();
  }
}
