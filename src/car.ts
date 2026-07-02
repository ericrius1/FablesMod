import * as THREE from 'three';
import { BodyType, type PhysicsWorld } from './physics';
import { domeHeightAt, type Dome, type StaticBox } from './world';
import { keys, type Player } from './player';
import type { Params } from './params';
import { glowTexture, type ExtraBody } from './gadgets';
import { sfx } from './sfx';
import type { Transform, BodyVelocity } from 'box3d-wasm';

// Drivable buggy: one dynamic chassis box in the physics world (so it plows
// through props and gets tossed by explosions) + hand-rolled spring suspension
// sampled against the analytic ground (floor slabs, statics, hill domes).
// No wheel joints in the engine — wheels are visual, forces are applied at
// the four suspension anchors.

const HALF = new THREE.Vector3(1.0, 0.35, 2.1);
const WHEEL_R = 0.42;
const SUSP_TRAVEL = 0.62;
const MAX_LEN = SUSP_TRAVEL + WHEEL_R; // anchor→ground at full droop
const SPRING = 46; // accel per wheel at full compression (m/s²)
const DAMP = 8.5;

// suspension anchors in chassis space (FL, FR, RL, RR)
const ANCHORS = [
  new THREE.Vector3(-0.85, -0.2, -1.45),
  new THREE.Vector3(0.85, -0.2, -1.45),
  new THREE.Vector3(-0.85, -0.2, 1.45),
  new THREE.Vector3(0.85, -0.2, 1.45),
];

type WheelVis = { steer: THREE.Group; spin: THREE.Group; anchor: THREE.Vector3; front: boolean };

export class Car {
  driving = false;
  boosting = false;
  readonly handle: number;
  readonly mass: number;
  readonly pos = new THREE.Vector3();
  readonly quat = new THREE.Quaternion();
  readonly vel = new THREE.Vector3();
  /** Live AABB the player controller collides against. */
  readonly solid = { min: new THREE.Vector3(), max: new THREE.Vector3() };
  /** Registration for the vortex pull. */
  readonly extraBody: ExtraBody;

  private world: PhysicsWorld;
  private statics: StaticBox[];
  private domes: Dome[];
  private group = new THREE.Group();
  private wheels: WheelVis[] = [];
  private brakeMat: THREE.MeshStandardMaterial;
  private flames: THREE.Sprite[] = [];
  private angVel = new THREE.Vector3();
  private steerInput = 0;
  private steerVis = 0;
  private spin = 0;
  private groundedWheels = 0;
  private flipCooldown = 0;

  private tmpT: Transform = { position: [0, 0, 0], rotation: [0, 0, 0, 1] };
  private tmpVel: BodyVelocity = { linear: [0, 0, 0], angular: [0, 0, 0] };
  private up = new THREE.Vector3();
  private fwd = new THREE.Vector3();
  private right = new THREE.Vector3();
  private v1 = new THREE.Vector3();
  private v2 = new THREE.Vector3();
  private v3 = new THREE.Vector3();
  private rotMat = new THREE.Matrix4();

  constructor(world: PhysicsWorld, scene: THREE.Scene, statics: StaticBox[], domes: Dome[]) {
    this.world = world;
    this.statics = statics;
    this.domes = domes;

    const spawn = new THREE.Vector3(12, 1.6, 20);
    this.handle = world.createBox({
      type: BodyType.Dynamic,
      position: [spawn.x, spawn.y, spawn.z],
      halfExtents: [HALF.x, HALF.y, HALF.z],
      density: 1.4,
      friction: 0.4,
      restitution: 0.05,
    });
    world.setBodyHitEvents(this.handle, true);
    this.mass = world.getBodyMass(this.handle);
    this.pos.copy(spawn);
    this.extraBody = { handle: this.handle, mass: this.mass, pos: this.pos };

    // ── body meshes ─────────────────────────────────────────────────────────
    const paint = new THREE.MeshStandardMaterial({ color: '#ff4f36', metalness: 0.55, roughness: 0.34 });
    const dark = new THREE.MeshStandardMaterial({ color: '#14181f', metalness: 0.4, roughness: 0.6 });
    const glass = new THREE.MeshStandardMaterial({ color: '#0d141d', metalness: 0.25, roughness: 0.12 });
    const lamp = new THREE.MeshStandardMaterial({ color: '#fff2cf', emissive: '#ffedb8', emissiveIntensity: 1.8 });
    this.brakeMat = new THREE.MeshStandardMaterial({ color: '#40080a', emissive: '#ff2a2a', emissiveIntensity: 0.35 });

    const add = (geo: THREE.BufferGeometry, mat: THREE.Material, x: number, y: number, z: number) => {
      const m = new THREE.Mesh(geo, mat);
      m.position.set(x, y, z);
      m.castShadow = true;
      m.receiveShadow = true;
      this.group.add(m);
      return m;
    };

    add(new THREE.BoxGeometry(2.0, 0.5, 4.2), paint, 0, 0, 0); // main body
    add(new THREE.BoxGeometry(2.04, 0.22, 3.6), dark, 0, -0.3, 0); // skirt
    add(new THREE.BoxGeometry(1.5, 0.44, 1.7), glass, 0, 0.45, -0.1); // cabin
    add(new THREE.BoxGeometry(0.52, 0.13, 0.62), dark, 0, 0.31, -1.4); // hood scoop
    add(new THREE.BoxGeometry(1.9, 0.06, 0.44), dark, 0, 0.66, 1.85); // spoiler wing
    add(new THREE.BoxGeometry(0.08, 0.34, 0.1), dark, -0.7, 0.46, 1.92);
    add(new THREE.BoxGeometry(0.08, 0.34, 0.1), dark, 0.7, 0.46, 1.92);
    add(new THREE.BoxGeometry(2.06, 0.2, 0.28), dark, 0, -0.14, -2.12); // bumper
    add(new THREE.BoxGeometry(0.32, 0.12, 0.06), lamp, -0.6, 0.1, -2.12); // headlights
    add(new THREE.BoxGeometry(0.32, 0.12, 0.06), lamp, 0.6, 0.1, -2.12);
    add(new THREE.BoxGeometry(0.34, 0.12, 0.06), this.brakeMat, -0.62, 0.08, 2.12); // brake lights
    add(new THREE.BoxGeometry(0.34, 0.12, 0.06), this.brakeMat, 0.62, 0.08, 2.12);
    const exhaustGeo = new THREE.CylinderGeometry(0.07, 0.08, 0.24, 10);
    for (const ex of [-0.38, 0.38]) {
      const pipe = add(exhaustGeo, dark, ex, -0.24, 2.14);
      pipe.rotation.x = Math.PI / 2;
    }

    // boost flames
    const flameTex = glowTexture('rgba(255,244,200,1)', 'rgba(255,110,40,0)');
    for (const ex of [-0.38, 0.38]) {
      const flame = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: flameTex,
          color: '#ffb36b',
          transparent: true,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        })
      );
      flame.position.set(ex, -0.24, 2.42);
      flame.scale.setScalar(0.01);
      flame.visible = false;
      this.group.add(flame);
      this.flames.push(flame);
    }

    // ── wheels ──────────────────────────────────────────────────────────────
    const tire = new THREE.MeshStandardMaterial({ color: '#101216', roughness: 0.92, metalness: 0.05 });
    const hub = new THREE.MeshStandardMaterial({ color: '#c9d0da', roughness: 0.3, metalness: 0.85 });
    const tireGeo = new THREE.CylinderGeometry(WHEEL_R, WHEEL_R, 0.3, 18);
    const hubGeo = new THREE.CylinderGeometry(0.19, 0.19, 0.32, 10);
    for (const a of ANCHORS) {
      const steer = new THREE.Group();
      const spin = new THREE.Group();
      const t = new THREE.Mesh(tireGeo, tire);
      t.rotation.z = Math.PI / 2;
      t.castShadow = true;
      const h = new THREE.Mesh(hubGeo, hub);
      h.rotation.z = Math.PI / 2;
      spin.add(t, h);
      steer.add(spin);
      steer.position.set(Math.sign(a.x) * 1.02, a.y - 0.35, a.z);
      this.group.add(steer);
      this.wheels.push({ steer, spin, anchor: a, front: a.z < 0 });
    }

    this.group.position.copy(spawn);
    scene.add(this.group);
    this.syncSolid();
  }

  get speed() {
    return this.vel.length();
  }

  get grounded() {
    return this.groundedWheels;
  }

  get yaw() {
    const f = this.v1.set(0, 0, -1).applyQuaternion(this.quat);
    return Math.atan2(-f.x, -f.z);
  }

  playerNear(p: THREE.Vector3) {
    return p.distanceTo(this.pos) < 3.9;
  }

  enter(player: Player) {
    this.driving = true;
    player.parkBody(0, -120, 0); // park the walk capsule out of the way
    player.yaw = this.yaw;
    player.pitch = -0.16;
    sfx.toolSwitch();
  }

  exit(player: Player) {
    this.driving = false;
    this.boosting = false;
    const right = this.v1.set(1, 0, 0).applyQuaternion(this.quat);
    const out = this.v2.copy(this.pos).addScaledVector(right, 2.4);
    out.y = this.groundYUnder(out.x, out.z, this.pos.y + 2) + 1.0;
    player.pos.copy(out);
    player.vel.set(this.vel.x * 0.4, 0, this.vel.z * 0.4);
    sfx.toolSwitch();
  }

  /** Tallest walkable top under (x,z) that isn't above `below` (walls don't count). */
  private groundYUnder(x: number, z: number, below: number): number {
    let g = -3;
    for (const s of this.statics) {
      if (
        x >= s.min.x &&
        x <= s.max.x &&
        z >= s.min.z &&
        z <= s.max.z &&
        s.max.y <= below + 0.1 &&
        s.max.y > g
      ) {
        g = s.max.y;
      }
    }
    const d = domeHeightAt(this.domes, x, z);
    if (d > g && d <= below + 0.1) g = d;
    return g;
  }

  prePhysics(step: number, params: Params, controlsOn: boolean) {
    this.flipCooldown -= step;

    this.world.getBodyTransform(this.handle, this.tmpT);
    this.pos.set(this.tmpT.position[0], this.tmpT.position[1], this.tmpT.position[2]);
    this.quat.set(this.tmpT.rotation[0], this.tmpT.rotation[1], this.tmpT.rotation[2], this.tmpT.rotation[3]);
    this.world.getBodyVelocity(this.handle, this.tmpVel);
    this.vel.set(this.tmpVel.linear[0], this.tmpVel.linear[1], this.tmpVel.linear[2]);
    this.angVel.set(this.tmpVel.angular[0], this.tmpVel.angular[1], this.tmpVel.angular[2]);

    const up = this.up.set(0, 1, 0).applyQuaternion(this.quat);
    const fwd = this.fwd.set(0, 0, -1).applyQuaternion(this.quat);
    const right = this.right.set(1, 0, 0).applyQuaternion(this.quat);

    // ── suspension ──────────────────────────────────────────────────────────
    this.groundedWheels = 0;
    if (up.y > 0.3) {
      for (const a of ANCHORS) {
        const anchor = this.v1.copy(a).applyQuaternion(this.quat).add(this.pos);
        const g = this.groundYUnder(anchor.x, anchor.z, anchor.y);
        const h = anchor.y - g;
        if (h >= MAX_LEN) continue;
        this.groundedWheels++;
        const x = Math.min(1.35, (MAX_LEN - h) / SUSP_TRAVEL);
        const rel = this.v2.copy(anchor).sub(this.pos);
        const pointVel = this.v3.copy(this.angVel).cross(rel).add(this.vel);
        const accel = SPRING * x - DAMP * pointVel.dot(up);
        if (accel > 0) {
          const mag = (this.mass / 4) * accel * step;
          this.world.applyImpulseAtPoint(
            this.handle,
            [up.x * mag, up.y * mag, up.z * mag],
            [anchor.x, anchor.y, anchor.z]
          );
        }
      }
    }

    // ── input ───────────────────────────────────────────────────────────────
    const active = this.driving && controlsOn;
    const throttle = active ? (keys.has('KeyW') ? 1 : 0) - (keys.has('KeyS') ? 1 : 0) : 0;
    this.steerInput = active ? (keys.has('KeyA') ? 1 : 0) - (keys.has('KeyD') ? 1 : 0) : 0;
    const handbrake = active && keys.has('Space');
    this.boosting = active && throttle > 0 && (keys.has('ShiftLeft') || keys.has('ShiftRight'));

    const fwdFlat = this.v1.set(fwd.x, 0, fwd.z);
    const rightFlat = this.v2.set(right.x, 0, right.z);
    if (fwdFlat.lengthSq() > 1e-4 && rightFlat.lengthSq() > 1e-4 && this.groundedWheels >= 2) {
      fwdFlat.normalize();
      rightFlat.normalize();
      const vf = this.vel.dot(fwdFlat);
      const gripShare = this.groundedWheels / 4;

      // drive / brake / reverse
      const boostK = this.boosting ? params.car.boostMult : 1;
      const accel = params.car.accel * boostK;
      const top = params.car.topSpeed * boostK;
      let drive = 0;
      if (throttle > 0 && vf < top) drive = accel;
      else if (throttle < 0) {
        if (vf > 0.6) drive = -accel * 1.5; // brake
        else if (vf > -top * 0.45) drive = -accel * 0.7; // reverse
      } else if (throttle === 0) {
        drive = -vf * 0.55; // engine braking / coast drag
      }
      if (drive !== 0) {
        const mag = this.mass * drive * step * gripShare;
        this.world.applyImpulse(this.handle, [fwdFlat.x * mag, fwdFlat.y * mag, fwdFlat.z * mag]);
      }

      // lateral grip (handbrake slashes it -> drift)
      const vLat = this.vel.dot(rightFlat);
      const gripK = handbrake ? params.car.grip * 0.18 : params.car.grip;
      const kill = Math.min(1, gripK * step) * vLat * this.mass * gripShare;
      this.world.applyImpulse(this.handle, [-rightFlat.x * kill, -rightFlat.y * kill, -rightFlat.z * kill]);

      // steering torque, speed-gated and yaw-rate-capped
      if (this.steerInput !== 0) {
        const speedFactor = Math.min(1, Math.abs(vf) / 5) * (vf >= 0 ? 1 : -1);
        const yawImp = this.steerInput * params.car.turnRate * this.mass * 2.0 * step * speedFactor;
        const wy = this.angVel.dot(up);
        const maxRate = handbrake ? 2.7 : 1.6;
        if (Math.abs(wy) < maxRate || Math.sign(wy) !== Math.sign(yawImp)) {
          this.world.applyAngularImpulse(this.handle, [up.x * yawImp, up.y * yawImp, up.z * yawImp]);
        }
      }
    }

    // ── stabilizers: damp roll/pitch hard, yaw lightly ──────────────────────
    const wf = this.angVel.dot(fwd);
    const wr = this.angVel.dot(right);
    const wy = this.angVel.dot(up);
    const kRoll = 1.1 * this.mass * step;
    const kYaw = (this.steerInput !== 0 ? 0.25 : 0.85) * this.mass * step;
    this.world.applyAngularImpulse(this.handle, [
      -fwd.x * wf * kRoll - right.x * wr * kRoll - up.x * wy * kYaw,
      -fwd.y * wf * kRoll - right.y * wr * kRoll - up.y * wy * kYaw,
      -fwd.z * wf * kRoll - right.z * wr * kRoll - up.z * wy * kYaw,
    ]);

    // ── R: flip back onto the wheels ────────────────────────────────────────
    if (active && keys.has('KeyR') && this.flipCooldown <= 0) {
      this.flipCooldown = 1.5;
      const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), this.yaw);
      const gy = this.groundYUnder(this.pos.x, this.pos.z, this.pos.y + 3);
      this.world.setBodyTransform(this.handle, [this.pos.x, gy + 1.6, this.pos.z], [q.x, q.y, q.z, q.w]);
      this.world.setBodyVelocity(this.handle, [this.vel.x * 0.3, 0, this.vel.z * 0.3], [0, 0, 0]);
    }
  }

  private syncSolid() {
    // world AABB: |R| * halfExtents, padded a touch for the wheels
    this.rotMat.makeRotationFromQuaternion(this.quat);
    const e = this.rotMat.elements;
    const wx = Math.abs(e[0]) * HALF.x + Math.abs(e[4]) * HALF.y + Math.abs(e[8]) * HALF.z;
    const wy = Math.abs(e[1]) * HALF.x + Math.abs(e[5]) * HALF.y + Math.abs(e[9]) * HALF.z;
    const wz = Math.abs(e[2]) * HALF.x + Math.abs(e[6]) * HALF.y + Math.abs(e[10]) * HALF.z;
    this.solid.min.set(this.pos.x - wx - 0.1, this.pos.y - wy - 0.35, this.pos.z - wz - 0.1);
    this.solid.max.set(this.pos.x + wx + 0.1, this.pos.y + wy, this.pos.z + wz + 0.1);
  }

  /** Render-side sync. Runs after the physics step; owns camera + seat while driving. */
  update(dt: number, rawDt: number, player: Player) {
    this.world.getBodyTransform(this.handle, this.tmpT);
    this.pos.set(this.tmpT.position[0], this.tmpT.position[1], this.tmpT.position[2]);
    this.quat.set(this.tmpT.rotation[0], this.tmpT.rotation[1], this.tmpT.rotation[2], this.tmpT.rotation[3]);
    this.group.position.copy(this.pos);
    this.group.quaternion.copy(this.quat);
    this.syncSolid();

    // fell out of the world (vortexed into a pond hole, etc.): respawn upright
    if (this.pos.y < -30) {
      this.world.setBodyTransform(this.handle, [12, 1.6, 20], [0, 0, 0, 1]);
      this.world.setBodyVelocity(this.handle, [0, 0, 0], [0, 0, 0]);
    }

    // wheels: ride the analytic ground, spin with forward speed, steer visually
    const fwd = this.fwd.set(0, 0, -1).applyQuaternion(this.quat);
    const vf = this.vel.dot(fwd);
    this.spin -= (vf / WHEEL_R) * dt;
    this.steerVis += (this.steerInput * 0.42 - this.steerVis) * Math.min(1, rawDt * 10);
    for (const w of this.wheels) {
      const anchor = this.v1.copy(w.anchor).applyQuaternion(this.quat).add(this.pos);
      const g = this.groundYUnder(anchor.x, anchor.z, anchor.y);
      const travel = THREE.MathUtils.clamp(anchor.y - g - WHEEL_R, 0.06, SUSP_TRAVEL);
      w.steer.position.y = w.anchor.y - travel;
      w.steer.rotation.y = w.front ? this.steerVis : 0;
      w.spin.rotation.x = this.spin;
    }

    // brake lights + boost flames
    this.brakeMat.emissiveIntensity = this.driving && keys.has('KeyS') ? 2.6 : 0.35;
    for (const flame of this.flames) {
      flame.visible = this.boosting;
      if (this.boosting) flame.scale.setScalar(0.5 + Math.random() * 0.45);
    }

    sfx.engineLoop(this.driving, this.speed);

    // ── seat + chase camera + boost FOV ─────────────────────────────────────
    const cam = player.camera;
    if (this.driving) {
      const up = this.up.set(0, 1, 0).applyQuaternion(this.quat);
      player.pos.copy(this.pos).addScaledVector(up, 0.85);
      player.vel.copy(this.vel);
      const dir = player.viewDir(this.v1);
      const target = this.v2.copy(this.pos);
      target.y += 1.7;
      const camPos = this.v3.copy(target).addScaledVector(dir, -8.4);
      const camG = this.groundYUnder(camPos.x, camPos.z, camPos.y + 2);
      if (camPos.y < camG + 0.4) camPos.y = camG + 0.4;
      cam.position.copy(camPos);
      cam.rotation.set(player.pitch, player.yaw, 0);
    }
    const targetFov = this.driving && this.boosting ? 88 : 78;
    if (Math.abs(cam.fov - targetFov) > 0.05) {
      cam.fov += (targetFov - cam.fov) * Math.min(1, rawDt * 5);
      cam.updateProjectionMatrix();
    }
  }
}
