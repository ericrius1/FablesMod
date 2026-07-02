import * as THREE from 'three';
import { BodyType, type PhysicsWorld } from './physics';
import { domeHeightAt, type Dome, type StaticBox, type WaterRegion } from './world';
import type { Params } from './params';
import type { Props } from './props';

// First-person controller: AABB capsule vs level + prop AABBs with step-up,
// mirrored into a kinematic physics capsule so walking into props shoves them.

export const keys = new Set<string>();
addEventListener('keydown', (e) => keys.add(e.code));
addEventListener('keyup', (e) => keys.delete(e.code));
addEventListener('blur', () => keys.clear());

const HALF_W = 0.38; // capsule radius -> AABB half width
const HALF_H = 0.9; // half height (1.8m tall)
const EYE = 0.72; // eye offset above center
const STEP_UP = 0.55;

export class Player {
  readonly pos = new THREE.Vector3(0, HALF_H + 0.1, 20); // capsule center
  readonly vel = new THREE.Vector3();
  yaw = 0; // face the arena center (-Z)
  pitch = 0;
  grounded = false;
  inWater = false;

  readonly camera: THREE.PerspectiveCamera;
  private kinHandle: number;
  private world: PhysicsWorld;
  private waters: WaterRegion[];
  private domes: Dome[];
  private statics: StaticBox[];
  private wish = new THREE.Vector3();

  constructor(world: PhysicsWorld, statics: StaticBox[], waters: WaterRegion[], domes: Dome[], aspect: number) {
    this.world = world;
    this.statics = statics;
    this.waters = waters;
    this.domes = domes;
    this.camera = new THREE.PerspectiveCamera(78, aspect, 0.08, 900);
    this.camera.rotation.order = 'YXZ';
    this.kinHandle = world.createCapsule({
      type: BodyType.Kinematic,
      position: [this.pos.x, this.pos.y, this.pos.z],
      halfHeight: HALF_H - HALF_W,
      radius: HALF_W,
      friction: 0.1,
    });
  }

  onMouseDelta(dx: number, dy: number) {
    this.yaw -= dx * 0.0022;
    this.pitch = Math.max(-1.55, Math.min(1.55, this.pitch - dy * 0.0022));
  }

  get eye(): THREE.Vector3 {
    return new THREE.Vector3(this.pos.x, this.pos.y + EYE, this.pos.z);
  }

  viewDir(target = new THREE.Vector3()): THREE.Vector3 {
    return target.set(
      -Math.sin(this.yaw) * Math.cos(this.pitch),
      Math.sin(this.pitch),
      -Math.cos(this.yaw) * Math.cos(this.pitch)
    );
  }

  private overlaps(min: THREE.Vector3, max: THREE.Vector3): boolean {
    const p = this.pos;
    return (
      p.x + HALF_W > min.x &&
      p.x - HALF_W < max.x &&
      p.y + HALF_H > min.y &&
      p.y - HALF_H < max.y &&
      p.z + HALF_W > min.z &&
      p.z - HALF_W < max.z
    );
  }

  private *solids(props: Props, skipHandle: number): Generator<{ min: THREE.Vector3; max: THREE.Vector3 }> {
    for (const s of this.statics) yield s;
    for (const prop of props.all.values()) {
      if (prop.handle === skipHandle) continue;
      yield { min: prop.aabb.min, max: prop.aabb.max };
    }
  }

  private freeAt(y: number, props: Props, skipHandle: number): boolean {
    const oldY = this.pos.y;
    this.pos.y = y;
    let free = true;
    for (const s of this.solids(props, skipHandle)) {
      if (this.overlaps(s.min, s.max)) {
        free = false;
        break;
      }
    }
    this.pos.y = oldY;
    return free;
  }

  private waterAt(x: number, z: number): WaterRegion | undefined {
    for (const w of this.waters) {
      if (x > w.minX && x < w.maxX && z > w.minZ && z < w.maxZ) return w;
    }
    return undefined;
  }

  update(dt: number, params: Params, props: Props, heldHandle: number, locked: boolean) {
    // ── water state ─────────────────────────────────────────────────────────
    const feet = this.pos.y - HALF_H;
    const w = this.waterAt(this.pos.x, this.pos.z);
    this.inWater = w !== undefined && feet < w.surfaceY;

    // ── input → wish velocity ───────────────────────────────────────────────
    this.wish.set(0, 0, 0);
    if (locked) {
      if (keys.has('KeyW')) this.wish.z -= 1;
      if (keys.has('KeyS')) this.wish.z += 1;
      if (keys.has('KeyA')) this.wish.x -= 1;
      if (keys.has('KeyD')) this.wish.x += 1;
    }
    if (this.wish.lengthSq() > 0) {
      this.wish.normalize();
      // rotate local (x, z) into world by yaw (three.js Y-rotation convention)
      const sin = Math.sin(this.yaw);
      const cos = Math.cos(this.yaw);
      const wx = this.wish.x * cos + this.wish.z * sin;
      const wz = -this.wish.x * sin + this.wish.z * cos;
      this.wish.set(wx, 0, wz);
    }
    let speed = params.player.speed * (keys.has('ShiftLeft') || keys.has('ShiftRight') ? params.player.sprintMult : 1);
    if (this.inWater) speed *= 0.55;

    // horizontal accel/friction (quake-lite)
    const accel = this.grounded || this.inWater ? 14 : 4;
    this.vel.x += (this.wish.x * speed - this.vel.x) * Math.min(1, accel * dt);
    this.vel.z += (this.wish.z * speed - this.vel.z) * Math.min(1, accel * dt);

    // gravity / swim
    const gravity = params.player.gravity * (this.inWater ? 0.35 : 1);
    this.vel.y -= gravity * dt;
    if (this.inWater && w) {
      const depth = w.surfaceY - (this.pos.y - HALF_H * 0.4);
      if (depth > 0) this.vel.y += Math.min(1.4, depth) * 26 * dt; // buoyant bob
      this.vel.y *= 1 - Math.min(1, 3.2 * dt); // water drag
      if (locked && keys.has('Space')) this.vel.y += 30 * dt; // paddle up
    } else if (locked && keys.has('Space') && this.grounded) {
      this.vel.y = params.player.jumpSpeed;
      this.grounded = false;
    }

    // ── integrate + resolve, axis by axis ───────────────────────────────────
    this.grounded = false;

    // Y
    this.pos.y += this.vel.y * dt;
    for (const s of this.solids(props, heldHandle)) {
      if (!this.overlaps(s.min, s.max)) continue;
      if (this.vel.y <= 0 && this.pos.y > (s.min.y + s.max.y) / 2) {
        this.pos.y = s.max.y + HALF_H;
        this.vel.y = 0;
        this.grounded = true;
      } else if (this.vel.y > 0) {
        this.pos.y = s.min.y - HALF_H;
        this.vel.y = 0;
      }
    }
    // hills: smooth analytic ground (buried spheres)
    const hillY = domeHeightAt(this.domes, this.pos.x, this.pos.z);
    if (hillY > -Infinity && this.pos.y - HALF_H < hillY && this.vel.y <= 0.01) {
      this.pos.y = hillY + HALF_H;
      this.vel.y = 0;
      this.grounded = true;
    }

    // X then Z with step-up
    for (const axis of ['x', 'z'] as const) {
      this.pos[axis] += this.vel[axis] * dt;
      for (const s of this.solids(props, heldHandle)) {
        if (!this.overlaps(s.min, s.max)) continue;
        const stepTo = s.max.y + HALF_H + 0.002;
        const rise = s.max.y - (this.pos.y - HALF_H);
        if (rise > 0 && rise <= STEP_UP && this.freeAt(stepTo, props, heldHandle)) {
          this.pos.y = stepTo;
          this.grounded = true;
          continue;
        }
        if (this.vel[axis] > 0) this.pos[axis] = s.min[axis] - HALF_W;
        else if (this.vel[axis] < 0) this.pos[axis] = s.max[axis] + HALF_W;
        else {
          // resting overlap (prop pushed into us): shove player out the near side
          const mid = (s.min[axis] + s.max[axis]) / 2;
          this.pos[axis] = this.pos[axis] < mid ? s.min[axis] - HALF_W : s.max[axis] + HALF_W;
        }
        this.vel[axis] = 0;
      }
    }

    // hard floor safety net
    if (this.pos.y < -30) {
      this.pos.set(0, HALF_H + 0.2, 20);
      this.vel.set(0, 0, 0);
    }

    // ── mirror into physics + camera ────────────────────────────────────────
    this.world.setBodyTransform(this.kinHandle, [this.pos.x, this.pos.y, this.pos.z]);
    this.camera.position.set(this.pos.x, this.pos.y + EYE, this.pos.z);
    this.camera.rotation.set(this.pitch, this.yaw, 0);
  }
}
