import * as THREE from 'three';
import type { PhysicsWorld } from './physics';
import type { Props } from './props';
import type { Player } from './player';
import type { Fluid } from './fluid';
import type { Params } from './params';
import { Physgun } from './physgun';
import { keys } from './player';
import { sfx } from './sfx';
import { Blaster, Vortex, Zapper, Flashes } from './gadgets';

export type ToolId =
  | 'physgun'
  | 'spawner'
  | 'hose'
  | 'boom'
  | 'rope'
  | 'thruster'
  | 'blaster'
  | 'vortex'
  | 'zapper';

export const TOOL_DEFS: { id: ToolId; name: string; color: string }[] = [
  { id: 'physgun', name: 'PHYSGUN', color: '#6fc3ff' },
  { id: 'spawner', name: 'SPAWNER', color: '#7dff9a' },
  { id: 'hose', name: 'HOSE', color: '#4dd7ff' },
  { id: 'boom', name: 'BOOM', color: '#ff9a4d' },
  { id: 'rope', name: 'ROPE', color: '#ffe14d' },
  { id: 'thruster', name: 'THRUSTER', color: '#ff5f8a' },
  { id: 'blaster', name: 'BLASTER', color: '#ff6b4d' },
  { id: 'vortex', name: 'VORTEX', color: '#b06bff' },
  { id: 'zapper', name: 'ZAPPER', color: '#6bffe8' },
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

type Thruster = {
  handle: number;
  local: THREE.Vector3; // attach point in body space
  localDir: THREE.Vector3; // thrust direction in body space (points away from the clicked face)
  mesh: THREE.Mesh;
  flame: THREE.Sprite;
};

type Boom = { mesh: THREE.Mesh; light: THREE.PointLight; t: number };

function glowSpriteTexture(inner: string, outer: string) {
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

export class Tools {
  active: ToolId = 'physgun';
  spawnIndex = 0;
  readonly physgun: Physgun;
  readonly blaster: Blaster;
  readonly vortex: Vortex;
  readonly zapper: Zapper;
  readonly flashes: Flashes;
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
  private blasterHeld = false;
  private zapOn = false;
  private boomCooldown = 0;
  private ropes: Rope[] = [];
  private ropePickA: { handle: number; local: THREE.Vector3 } | null = null;
  private pickMarker!: THREE.Sprite;
  private booms: Boom[] = [];
  private thrusters: Thruster[] = [];
  private flameTex!: THREE.CanvasTexture;
  private thrusterMat!: THREE.MeshStandardMaterial;

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
  private upAxis = new THREE.Vector3(0, 1, 0);

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
    this.flashes = new Flashes(scene);
    this.blaster = new Blaster(world, scene);
    this.vortex = new Vortex(world, scene, props, this.flashes);
    this.zapper = new Zapper(world, scene, props, this.flashes);

    // rope pick-A marker: shows which prop is waiting for its partner
    this.pickMarker = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowSpriteTexture('rgba(255,235,140,1)', 'rgba(255,190,40,0)'),
        color: '#ffe14d',
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    this.pickMarker.scale.setScalar(0.55);
    this.pickMarker.visible = false;
    scene.add(this.pickMarker);

    this.flameTex = glowSpriteTexture('rgba(255,240,200,1)', 'rgba(255,110,40,0)');
    this.thrusterMat = new THREE.MeshStandardMaterial({
      color: '#4a3f47',
      roughness: 0.45,
      metalness: 0.4,
      emissive: '#ff5f8a',
      emissiveIntensity: 0.7,
    });
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
    this.stopZap();
    this.blasterHeld = false;
    this.ropePickA = null;
    this.pickMarker.visible = false;
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

  private stopZap() {
    if (this.zapOn) {
      this.zapOn = false;
      sfx.zapStop();
    }
    this.zapper.stop();
  }

  /** Eye ray nudged forward so spawned projectiles clear the player capsule. */
  private fireRay(): { origin: THREE.Vector3; dir: THREE.Vector3 } {
    const dir = this.player.viewDir(new THREE.Vector3());
    const origin = this.player.eye.addScaledVector(dir, 0.95);
    return { origin, dir };
  }

  /** Park every held-input tool state (entering the car). */
  suspend() {
    this.physgun.forceRelease();
    this.stopHose();
    this.stopZap();
    this.blasterHeld = false;
    this.gun.visible = false;
  }

  resume() {
    this.gun.visible = true;
  }

  private aim(): { point: THREE.Vector3; handle?: number; normal?: THREE.Vector3 } | null {
    const eye = this.player.eye;
    const dir = this.player.viewDir(this.tmpV);
    this.raycaster.set(eye, dir);
    const hits = this.raycaster.intersectObjects(this.props.raycastTargets(), true);
    for (const hit of hits) {
      const handle = this.props.handleFromHit(hit);
      if (handle === undefined) continue;
      let normal: THREE.Vector3 | undefined;
      if (hit.face) {
        normal = hit.face.normal.clone();
        if (hit.object instanceof THREE.InstancedMesh) {
          const prop = this.props.all.get(handle);
          if (prop) normal.applyQuaternion(prop.quat);
        } else {
          normal.applyQuaternion(hit.object.getWorldQuaternion(this.tmpQ));
        }
        normal.normalize();
      }
      return { point: hit.point.clone(), handle, normal };
    }
    const p = new THREE.Vector3();
    if (this.raycaster.ray.intersectPlane(this.groundPlane, p) && p.distanceTo(eye) < 70) {
      return { point: p };
    }
    // fall back to a point in the air ahead
    return { point: eye.clone().addScaledVector(dir, 12) };
  }

  /** Live pos/quat/mass for any grabbable body (prop or ragdoll bone). */
  private bodyRef(handle: number): { pos: THREE.Vector3; quat: THREE.Quaternion; mass: number } | null {
    const prop = this.props.all.get(handle);
    if (prop) return { pos: prop.pos, quat: prop.quat, mass: prop.mass };
    const bone = this.props.boneByHandle.get(handle);
    if (bone) return { pos: bone.pos, quat: bone.group.quaternion, mass: bone.mass };
    return null;
  }

  onMouseDown(button: number, params: Params) {
    if (button === 0) {
      switch (this.active) {
        case 'physgun':
          if (this.physgun.holding) this.physgun.startCharge();
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
        case 'thruster':
          this.placeThruster();
          break;
        case 'blaster':
          this.blasterHeld = true;
          break;
        case 'vortex': {
          const ray = this.fireRay();
          if (this.vortex.throwOrb(ray.origin, ray.dir)) this.kick = 0.6;
          break;
        }
        case 'zapper':
          if (!this.zapOn) {
            this.zapOn = true;
            sfx.zapStart();
          }
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
        case 'thruster':
          this.clearThrusters();
          break;
        case 'blaster': {
          const ray = this.fireRay();
          if (this.blaster.fire(ray.origin, ray.dir, true, params)) this.kick = 0.9;
          break;
        }
        case 'vortex': {
          const aim = this.aim();
          if (aim && this.vortex.collapseAt(aim.point)) this.kick = 0.8;
          break;
        }
        case 'zapper': {
          const aim = this.aim();
          if (aim && this.zapper.chain(aim.point, params)) this.kick = 0.85;
          break;
        }
        case 'hose':
          break;
      }
      this.onAction();
    }
  }

  onMouseUp(button: number, params: Params) {
    if (button === 0 && this.active === 'hose') this.stopHose();
    if (button === 0 && this.active === 'blaster') this.blasterHeld = false;
    if (button === 0 && this.active === 'zapper') this.stopZap();
    if (button === 0 && this.active === 'physgun') {
      const result = this.physgun.releaseCharge(params);
      if (result === 'launched') this.kick = 1;
    }
  }

  onWheel(deltaY: number) {
    if (this.active === 'physgun' && this.physgun.holding) {
      // scale by actual delta so trackpads glide instead of jumping
      this.physgun.adjustDistance(-Math.sign(deltaY) * Math.min(1.4, Math.abs(deltaY) / 90));
      return;
    }
    if (this.active === 'spawner') this.cycleSpawnItem(deltaY);
  }

  /** Scroll through spawn items (spawner tool, or from inside a vehicle). */
  cycleSpawnItem(deltaY: number) {
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

  /** Drop the current spawn item at the aim point (spawner LMB, or Q from a vehicle). */
  spawnAtAim() {
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
    // miss: keep any pending pick — turning to find the second prop shouldn't cancel
    if (!aim || aim.handle === undefined) return;
    const ref = this.bodyRef(aim.handle);
    if (!ref) return;
    const local = aim.point.clone().sub(ref.pos).applyQuaternion(this.tmpQ.copy(ref.quat).invert());

    if (!this.ropePickA || this.ropePickA.handle === aim.handle) {
      // first pick, or re-pick a better anchor on the same prop
      this.ropePickA = { handle: aim.handle, local };
      this.pickMarker.visible = true;
      sfx.rope();
      return;
    }

    const a = this.ropePickA;
    const worldA = this.anchorWorld(a.handle, a.local, new THREE.Vector3());
    const worldB = aim.point;
    if (!worldA) {
      this.ropePickA = null;
      this.pickMarker.visible = false;
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
    this.pickMarker.visible = false;
    this.world.setBodyAwake(a.handle, true);
    this.world.setBodyAwake(aim.handle, true);
    sfx.rope();
    this.kick = 0.4;
  }

  private anchorWorld(handle: number, local: THREE.Vector3, out: THREE.Vector3): THREE.Vector3 | null {
    const ref = this.bodyRef(handle);
    if (!ref) return null;
    return out.copy(local).applyQuaternion(ref.quat).add(ref.pos);
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
    this.pickMarker.visible = false;
  }

  // ── thrusters ─────────────────────────────────────────────────────────────

  get thrusterCount() {
    return this.thrusters.length;
  }

  private placeThruster() {
    if (this.thrusters.length >= 24) return;
    const aim = this.aim();
    if (!aim || aim.handle === undefined || !aim.normal) return;
    const ref = this.bodyRef(aim.handle);
    if (!ref) return;
    const invQ = this.tmpQ.copy(ref.quat).invert();
    const local = aim.point.clone().sub(ref.pos).applyQuaternion(invQ);
    const localDir = aim.normal.clone().applyQuaternion(invQ).normalize();

    const mesh = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.26, 10), this.thrusterMat);
    mesh.castShadow = true;
    const flame = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: this.flameTex,
        color: '#ffb36b',
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    flame.scale.setScalar(0.5);
    this.scene.add(mesh, flame);
    this.thrusters.push({ handle: aim.handle, local, localDir, mesh, flame });
    this.world.setBodyAwake(aim.handle, true);
    sfx.spawn();
    this.kick = 0.45;
  }

  private removeThruster(t: Thruster) {
    this.scene.remove(t.mesh, t.flame);
    t.mesh.geometry.dispose();
    (t.flame.material as THREE.Material).dispose();
  }

  clearThrusters() {
    if (this.thrusters.length) sfx.del();
    for (const t of this.thrusters) this.removeThruster(t);
    this.thrusters.length = 0;
  }

  /**
   * Thrusters burn once per fixed physics step (impulse at point, so torque
   * comes free and step count never double-applies).
   */
  prePhysics(step: number, params: Params) {
    this.vortex.prePhysics(step, params);
    for (let i = this.thrusters.length - 1; i >= 0; i--) {
      const t = this.thrusters[i];
      const ref = this.bodyRef(t.handle);
      if (!ref) {
        this.removeThruster(t);
        this.thrusters.splice(i, 1);
        continue;
      }
      const dir = this.tmpV.copy(t.localDir).applyQuaternion(ref.quat);
      const point = this.tmpV2.copy(t.local).applyQuaternion(ref.quat).add(ref.pos);
      const mag = ref.mass * params.thruster.power * step;
      // exhaust points along `dir`; thrust pushes the body the other way
      this.world.applyImpulseAtPoint(t.handle, [-dir.x * mag, -dir.y * mag, -dir.z * mag], [point.x, point.y, point.z]);
      this.world.setBodyAwake(t.handle, true);
    }
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

    // gadget weapons
    if (this.blasterHeld && this.active === 'blaster') {
      const ray = this.fireRay();
      if (this.blaster.fire(ray.origin, ray.dir, false, params)) {
        this.kick = Math.max(this.kick, 0.35);
        this.onAction();
      }
    }
    if (this.zapOn && this.active === 'zapper') {
      const aim = this.aim();
      if (aim) {
        const origin = this.muzzle.getWorldPosition(this.tmpV);
        this.zapper.beam(origin, aim.point, aim.handle, dt, params);
        this.kick = Math.max(this.kick, 0.1 + Math.random() * 0.06);
      }
    }
    this.blaster.update(rawDt);
    this.vortex.update(rawDt);
    this.zapper.update(rawDt);
    this.flashes.update(rawDt);

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
      // keep raycast culling in sync with the moving rope, or cutting breaks
      rope.line.geometry.computeBoundingSphere();
    }

    // rope pick marker rides its anchor
    if (this.ropePickA) {
      if (this.anchorWorld(this.ropePickA.handle, this.ropePickA.local, pa)) {
        this.pickMarker.position.copy(pa);
        this.pickMarker.scale.setScalar(0.45 + Math.sin(performance.now() * 0.008) * 0.1);
      } else {
        this.ropePickA = null;
        this.pickMarker.visible = false;
      }
    }

    // thruster visuals: nozzle on the surface, flickering flame at the tip
    for (const t of this.thrusters) {
      const ref = this.bodyRef(t.handle);
      if (!ref) continue;
      const dir = this.tmpV.copy(t.localDir).applyQuaternion(ref.quat);
      const point = this.tmpV2.copy(t.local).applyQuaternion(ref.quat).add(ref.pos);
      t.mesh.position.copy(point).addScaledVector(dir, 0.1);
      t.mesh.quaternion.setFromUnitVectors(this.upAxis, dir);
      t.flame.position.copy(point).addScaledVector(dir, 0.32 + Math.random() * 0.08);
      t.flame.scale.setScalar(0.38 + Math.random() * 0.22);
    }
    sfx.thrustLoop(this.thrusters.length);

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
