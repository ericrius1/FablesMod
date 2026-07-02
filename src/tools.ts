import * as THREE from 'three';
import type { PhysicsWorld } from './physics';
import type { Props } from './props';
import type { Player } from './player';
import type { Fluid } from './fluid';
import type { Params } from './params';
import { Physgun } from './physgun';
import { keys } from './player';
import { sfx } from './sfx';

export type ToolId = 'physgun' | 'spawner' | 'hose' | 'boom' | 'rope';

export const TOOL_DEFS: { id: ToolId; name: string; color: string }[] = [
  { id: 'physgun', name: 'PHYSGUN', color: '#6fc3ff' },
  { id: 'spawner', name: 'SPAWNER', color: '#7dff9a' },
  { id: 'hose', name: 'HOSE', color: '#4dd7ff' },
  { id: 'boom', name: 'BOOM', color: '#ff9a4d' },
  { id: 'rope', name: 'ROPE', color: '#ffe14d' },
];

export const SPAWN_ITEMS = [
  'crate',
  'ball',
  'plank',
  'barrel',
  'ragdoll',
  'tower',
  'wall',
  'dominoes',
  'ball pit',
] as const;
export type SpawnItem = (typeof SPAWN_ITEMS)[number];

type Rope = {
  joint: number;
  a: number;
  b: number;
  localA: THREE.Vector3;
  localB: THREE.Vector3;
  line: THREE.Line;
};

type Boom = { mesh: THREE.Mesh; light: THREE.PointLight; t: number };

export class Tools {
  active: ToolId = 'physgun';
  spawnIndex = 0;
  readonly physgun: Physgun;
  shake = 0;

  onToolChanged: (id: ToolId) => void = () => {};
  onSpawnItemChanged: (item: SpawnItem) => void = () => {};
  onAction: () => void = () => {};

  private world: PhysicsWorld;
  private props: Props;
  private player: Player;
  private fluid: Fluid;
  private scene: THREE.Scene;
  private wheelAccum = 0;

  private hoseOn = false;
  private boomCooldown = 0;
  private ropes: Rope[] = [];
  private ropePickA: { handle: number; local: THREE.Vector3 } | null = null;
  private booms: Boom[] = [];

  // viewmodel
  private gun = new THREE.Group();
  private core: THREE.Mesh;
  private coreMat: THREE.MeshStandardMaterial;
  readonly muzzle = new THREE.Object3D();
  private kick = 0;
  private bobPhase = 0;

  private raycaster = new THREE.Raycaster();
  private groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  private tmpV = new THREE.Vector3();
  private tmpV2 = new THREE.Vector3();
  private tmpQ = new THREE.Quaternion();

  constructor(world: PhysicsWorld, props: Props, player: Player, fluid: Fluid, scene: THREE.Scene) {
    this.world = world;
    this.props = props;
    this.player = player;
    this.fluid = fluid;
    this.scene = scene;
    this.raycaster.far = 70;
    this.raycaster.params.Line.threshold = 0.28;

    // ── viewmodel gun ────────────────────────────────────────────────────────
    const dark = new THREE.MeshStandardMaterial({ color: '#46525f', roughness: 0.5, metalness: 0.25 });
    const mid = new THREE.MeshStandardMaterial({ color: '#5c6a78', roughness: 0.55, metalness: 0.2 });
    this.coreMat = new THREE.MeshStandardMaterial({
      color: '#0c1116',
      emissive: '#6fc3ff',
      emissiveIntensity: 2.2,
      roughness: 0.3,
    });
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.15, 0.46), dark);
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.06, 0.34, 10), mid);
    barrel.rotation.x = Math.PI / 2;
    barrel.position.set(0, 0.02, -0.36);
    this.core = new THREE.Mesh(new THREE.SphereGeometry(0.055, 14, 10), this.coreMat);
    this.core.position.set(0, 0.09, -0.12);
    const finGeo = new THREE.BoxGeometry(0.02, 0.09, 0.2);
    const fin1 = new THREE.Mesh(finGeo, mid);
    fin1.position.set(0.09, 0.04, -0.42);
    fin1.rotation.z = -0.35;
    const fin2 = fin1.clone();
    fin2.position.x = -0.09;
    fin2.rotation.z = 0.35;
    const grip = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.22, 0.12), dark);
    grip.position.set(0, -0.16, 0.12);
    grip.rotation.x = 0.35;
    this.muzzle.position.set(0, 0.02, -0.55);
    this.gun.add(body, barrel, this.core, fin1, fin2, grip, this.muzzle);
    this.gun.scale.setScalar(0.5);
    this.gun.position.set(0.3, -0.26, -0.55);
    player.camera.add(this.gun);
    // headlamp so the viewmodel (and whatever you aim at) never goes pitch black
    const lamp = new THREE.PointLight('#cfe4ff', 2.2, 7, 1.2);
    lamp.position.set(0, 0.1, -0.2);
    player.camera.add(lamp);
    scene.add(player.camera);

    this.physgun = new Physgun(world, props, player, scene, this.muzzle);
  }

  get spawnItem(): SpawnItem {
    return SPAWN_ITEMS[this.spawnIndex];
  }

  get ropeCount() {
    return this.ropes.length;
  }

  setTool(id: ToolId) {
    if (id === this.active) return;
    if (this.active === 'physgun' && this.physgun.holding) this.physgun.drop();
    if (this.active === 'hose') this.stopHose();
    this.ropePickA = null;
    this.active = id;
    const def = TOOL_DEFS.find((t) => t.id === id)!;
    this.coreMat.emissive.set(def.color);
    sfx.toolSwitch();
    this.kick = 0.5;
    this.onToolChanged(id);
  }

  private stopHose() {
    if (this.hoseOn) {
      this.hoseOn = false;
      sfx.sprayStop();
    }
  }

  private aim(): { point: THREE.Vector3; handle?: number } | null {
    const eye = this.player.eye;
    const dir = this.player.viewDir(this.tmpV);
    this.raycaster.set(eye, dir);
    const hits = this.raycaster.intersectObjects(this.props.raycastTargets(), true);
    for (const hit of hits) {
      const handle = this.props.handleFromHit(hit);
      if (handle !== undefined) return { point: hit.point.clone(), handle };
    }
    const p = new THREE.Vector3();
    if (this.raycaster.ray.intersectPlane(this.groundPlane, p) && p.distanceTo(eye) < 70) {
      return { point: p };
    }
    // fall back to a point in the air ahead
    return { point: eye.clone().addScaledVector(dir, 12) };
  }

  onMouseDown(button: number, params: Params) {
    if (button === 0) {
      switch (this.active) {
        case 'physgun':
          if (this.physgun.holding) this.physgun.drop();
          else if (!this.physgun.tryGrab()) this.kick = 0.3;
          else this.kick = 0.55;
          break;
        case 'spawner':
          this.spawnAtAim();
          break;
        case 'hose':
          this.hoseOn = true;
          sfx.sprayStart();
          break;
        case 'boom':
          this.explode(params, 1);
          break;
        case 'rope':
          this.ropeClick();
          break;
      }
      this.onAction();
    } else if (button === 2) {
      switch (this.active) {
        case 'physgun':
          if (this.physgun.holding) {
            this.physgun.launch(params);
            this.kick = 1;
          }
          break;
        case 'spawner':
          this.deleteAtAim();
          break;
        case 'boom':
          this.explode(params, 1.8);
          break;
        case 'rope':
          this.clearRopes();
          break;
        case 'hose':
          break;
      }
      this.onAction();
    }
  }

  onMouseUp(button: number) {
    if (button === 0 && this.active === 'hose') this.stopHose();
  }

  onWheel(deltaY: number) {
    if (this.active === 'physgun' && this.physgun.holding) {
      // scale by actual delta so trackpads glide instead of jumping
      this.physgun.adjustDistance(-Math.sign(deltaY) * Math.min(1.4, Math.abs(deltaY) / 90));
      return;
    }
    if (this.active === 'spawner') {
      // one item per full wheel notch — trackpad micro-deltas accumulate
      this.wheelAccum += deltaY;
      if (Math.abs(this.wheelAccum) >= 120) {
        const dir = this.wheelAccum > 0 ? -1 : 1;
        this.wheelAccum = 0;
        this.spawnIndex = (this.spawnIndex + dir + SPAWN_ITEMS.length) % SPAWN_ITEMS.length;
        this.onSpawnItemChanged(this.spawnItem);
        sfx.tick();
      }
    }
  }

  private spawnAtAim() {
    const aim = this.aim();
    if (!aim) return;
    const p = aim.point;
    const dir = this.player.viewDir(this.tmpV2).setY(0).normalize();
    const item = this.spawnItem;
    let ok: unknown = true;
    switch (item) {
      case 'crate':
        ok = this.props.spawn('crate', p.clone().add(new THREE.Vector3(0, 0.6, 0)));
        break;
      case 'ball':
        ok = this.props.spawn('ball', p.clone().add(new THREE.Vector3(0, 0.6, 0)));
        break;
      case 'plank':
        ok = this.props.spawn('plank', p.clone().add(new THREE.Vector3(0, 0.5, 0)), {
          rotation: this.tmpQ.setFromAxisAngle(new THREE.Vector3(0, 1, 0), this.player.yaw).clone(),
        });
        break;
      case 'barrel':
        ok = this.props.spawn('barrel', p.clone().add(new THREE.Vector3(0, 0.9, 0)));
        break;
      case 'ragdoll':
        ok = this.props.spawnRagdoll(p.clone().add(new THREE.Vector3(0, 1.5, 0)));
        break;
      case 'tower':
        this.props.spawnTower(p, 3, 5);
        break;
      case 'wall':
        this.props.spawnWall(p, dir, 7, 4);
        break;
      case 'dominoes':
        this.props.spawnDominoes(p.clone().addScaledVector(dir, 1), dir, 14);
        break;
      case 'ball pit':
        this.props.spawnBallPit(p.clone().add(new THREE.Vector3(0, 0.5, 0)), 30);
        break;
    }
    if (ok) {
      sfx.spawn();
      this.kick = 0.45;
    }
  }

  private deleteAtAim() {
    const aim = this.aim();
    if (!aim || aim.handle === undefined) return;
    const prop = this.props.all.get(aim.handle);
    if (prop) {
      this.props.despawn(prop);
      sfx.del();
      return;
    }
    const rag = this.props.ragdollOfBone(aim.handle);
    if (rag) {
      this.props.despawnRagdoll(rag);
      sfx.del();
    }
  }

  private explode(params: Params, scale: number) {
    if (this.boomCooldown > 0) return;
    this.boomCooldown = 0.5;
    const aim = this.aim();
    if (!aim) return;
    const p = aim.point;
    const radius = params.boom.radius * scale;
    this.world.explode([p.x, p.y, p.z], radius, 1.3, params.boom.impulse * scale);

    // up-bias so stacks pop skyward, plus wake everything nearby
    for (const prop of this.props.all.values()) {
      const d = prop.pos.distanceTo(p);
      if (d < radius) {
        const f = 1 - d / radius;
        this.world.applyImpulse(prop.handle, [0, prop.mass * params.boom.impulse * 0.06 * f * scale, 0]);
        this.world.setBodyAwake(prop.handle, true);
      }
    }
    for (const rag of this.props.ragdolls) {
      for (const bone of rag.bones) {
        if (bone.pos.distanceTo(p) < radius) this.world.setBodyAwake(bone.handle, true);
      }
    }

    // splash if it lands in water (fluid no-ops outside ponds)
    if (p.y < 1) {
      this.fluid.splash(p.x, p.z, 1.6);
      this.fluid.splash(p.x + 0.8, p.z + 0.5, 1.1);
    }

    // visuals
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(1, 20, 12),
      new THREE.MeshBasicMaterial({
        color: '#ffb56b',
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    mesh.position.copy(p);
    const light = new THREE.PointLight('#ff9a4d', 60, radius * 3);
    light.position.copy(p).y += 1;
    this.scene.add(mesh, light);
    this.booms.push({ mesh, light, t: 0 });

    this.shake = Math.min(1.2, this.shake + 0.55 * scale);
    this.kick = 1;
    sfx.boom();
  }

  private cutRope(rope: Rope) {
    this.world.destroyJoint(rope.joint);
    this.scene.remove(rope.line);
    rope.line.geometry.dispose();
    const idx = this.ropes.indexOf(rope);
    if (idx !== -1) this.ropes.splice(idx, 1);
    this.world.setBodyAwake(rope.a, true);
    this.world.setBodyAwake(rope.b, true);
    sfx.snip();
    this.kick = Math.max(this.kick, 0.35);
  }

  /** Cut the rope under the crosshair. Returns true when one was cut. */
  private cutRopeAtAim(): boolean {
    if (!this.ropes.length) return false;
    const eye = this.player.eye;
    const dir = this.player.viewDir(this.tmpV);
    this.raycaster.set(eye, dir);
    const hits = this.raycaster.intersectObjects(
      this.ropes.map((r) => r.line),
      false
    );
    const hit = hits[0];
    if (!hit) return false;
    const rope = this.ropes.find((r) => r.line === hit.object);
    if (!rope) return false;
    this.cutRope(rope);
    return true;
  }

  /**
   * `C` from any tool: cut the aimed rope; failing that, while holding a prop
   * with the physgun, sever everything tied to it (cut mid-spin).
   */
  cutRopeAction(): boolean {
    if (this.cutRopeAtAim()) return true;
    const held = this.physgun.held?.handle;
    if (held === undefined) return false;
    const attached = this.ropes.filter((r) => r.a === held || r.b === held);
    for (const rope of attached) this.cutRope(rope);
    return attached.length > 0;
  }

  private ropeClick() {
    // clicking a rope with the rope tool severs it
    if (this.cutRopeAtAim()) return;
    const aim = this.aim();
    if (!aim || aim.handle === undefined) {
      this.ropePickA = null;
      return;
    }
    const body = this.props.all.get(aim.handle) ?? this.props.boneByHandle.get(aim.handle);
    if (!body) return;
    const pos = 'pos' in body ? body.pos : new THREE.Vector3();
    const quat = 'quat' in body ? (body as { quat: THREE.Quaternion }).quat : new THREE.Quaternion();
    const local = aim.point.clone().sub(pos).applyQuaternion(quat.clone().invert());

    if (!this.ropePickA) {
      this.ropePickA = { handle: aim.handle, local };
      sfx.rope();
      return;
    }
    if (this.ropePickA.handle === aim.handle) {
      this.ropePickA = null;
      return;
    }

    const a = this.ropePickA;
    const worldA = this.anchorWorld(a.handle, a.local, new THREE.Vector3());
    const worldB = aim.point;
    if (!worldA) {
      this.ropePickA = null;
      return;
    }
    const joint = this.world.createDistanceJoint(
      a.handle,
      aim.handle,
      [worldA.x, worldA.y, worldA.z],
      [worldB.x, worldB.y, worldB.z],
      { length: worldA.distanceTo(worldB) * 0.85, hertz: 2.5, dampingRatio: 0.4 }
    );
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(12 * 3), 3));
    const line = new THREE.Line(
      geo,
      new THREE.LineBasicMaterial({ color: '#ffe14d', transparent: true, opacity: 0.9 })
    );
    line.frustumCulled = false;
    this.scene.add(line);
    this.ropes.push({ joint, a: a.handle, b: aim.handle, localA: a.local, localB: local, line });
    this.ropePickA = null;
    this.world.setBodyAwake(a.handle, true);
    this.world.setBodyAwake(aim.handle, true);
    sfx.rope();
    this.kick = 0.4;
  }

  private anchorWorld(handle: number, local: THREE.Vector3, out: THREE.Vector3): THREE.Vector3 | null {
    const prop = this.props.all.get(handle);
    if (prop) return out.copy(local).applyQuaternion(prop.quat).add(prop.pos);
    const bone = this.props.boneByHandle.get(handle);
    if (bone) return out.copy(local).applyQuaternion(bone.group.quaternion).add(bone.pos);
    return null;
  }

  clearRopes() {
    for (const rope of this.ropes) {
      this.world.destroyJoint(rope.joint);
      this.scene.remove(rope.line);
      rope.line.geometry.dispose();
    }
    if (this.ropes.length) sfx.del();
    this.ropes.length = 0;
    this.ropePickA = null;
  }

  /** Drop rope joints whose bodies were deleted (X / delete tool). */
  pruneRopes() {
    for (let i = this.ropes.length - 1; i >= 0; i--) {
      const rope = this.ropes[i];
      const aAlive = this.props.all.has(rope.a) || this.props.boneByHandle.has(rope.a);
      const bAlive = this.props.all.has(rope.b) || this.props.boneByHandle.has(rope.b);
      if (!aAlive || !bAlive) {
        // joint already destroyed with its body — just remove visuals
        this.scene.remove(rope.line);
        rope.line.geometry.dispose();
        this.ropes.splice(i, 1);
      }
    }
  }

  update(dt: number, rawDt: number, params: Params): number {
    this.boomCooldown -= rawDt;

    // held body may have been deleted out from under us (X, delete tool)
    if (this.physgun.held) {
      const h = this.physgun.held.handle;
      if (!this.props.all.has(h) && !this.props.boneByHandle.has(h)) this.physgun.forceRelease();
    }
    const heldHandle = this.physgun.update(dt, params, keys.has('KeyR'));

    if (this.hoseOn) {
      const origin = this.muzzle.getWorldPosition(this.tmpV);
      const dir = this.player.viewDir(this.tmpV2);
      this.fluid.emitJet(origin, dir, dt, params);
      this.kick = Math.max(this.kick, 0.14 + Math.random() * 0.05);
    }

    // ropes visuals
    this.pruneRopes();
    const pa = new THREE.Vector3();
    const pb = new THREE.Vector3();
    for (const rope of this.ropes) {
      if (!this.anchorWorld(rope.a, rope.localA, pa) || !this.anchorWorld(rope.b, rope.localB, pb)) continue;
      const attr = rope.line.geometry.getAttribute('position') as THREE.BufferAttribute;
      const sag = Math.min(0.8, pa.distanceTo(pb) * 0.08);
      for (let i = 0; i < 12; i++) {
        const t = i / 11;
        const x = pa.x + (pb.x - pa.x) * t;
        const y = pa.y + (pb.y - pa.y) * t - Math.sin(t * Math.PI) * sag;
        const z = pa.z + (pb.z - pa.z) * t;
        attr.setXYZ(i, x, y, z);
      }
      attr.needsUpdate = true;
    }

    // booms
    for (let i = this.booms.length - 1; i >= 0; i--) {
      const b = this.booms[i];
      b.t += rawDt;
      const k = b.t / 0.45;
      if (k >= 1) {
        this.scene.remove(b.mesh, b.light);
        b.mesh.geometry.dispose();
        (b.mesh.material as THREE.Material).dispose();
        this.booms.splice(i, 1);
        continue;
      }
      b.mesh.scale.setScalar(1 + k * k * 9);
      (b.mesh.material as THREE.MeshBasicMaterial).opacity = 0.9 * (1 - k);
      b.light.intensity = 60 * (1 - k);
    }

    // viewmodel: kick + bob + idle sway
    this.kick = Math.max(0, this.kick - rawDt * 4);
    const speed = Math.hypot(this.player.vel.x, this.player.vel.z);
    this.bobPhase += rawDt * (2 + speed * 1.1);
    const bob = Math.sin(this.bobPhase * 2.1) * 0.006 * Math.min(1, speed * 0.4);
    this.gun.position.set(
      0.3 + Math.sin(this.bobPhase) * 0.004 * Math.min(1, speed * 0.4),
      -0.26 + bob,
      -0.55 + this.kick * 0.09
    );
    this.gun.rotation.set(this.kick * 0.22, 0, Math.sin(this.bobPhase) * 0.004);
    this.coreMat.emissiveIntensity = 2 + Math.sin(performance.now() * 0.006) * 0.5 + this.kick * 3;

    this.shake = Math.max(0, this.shake - rawDt * 2.2);
    return heldHandle;
  }
}
