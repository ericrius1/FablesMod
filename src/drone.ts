import * as THREE from 'three';
import { BodyType, type PhysicsWorld } from './physics';
import { ARENA, domeHeightAt, type Dome, type StaticBox, type WaterRegion } from './world';
import { keys, type Player } from './player';
import type { Params } from './params';
import { glowTexture, type ExtraBody } from './gadgets';
import type { Props } from './props';
import type { Fluid } from './fluid';
import { sfx } from './sfx';
import type { Transform, BodyVelocity } from 'box3d-wasm';

// Pilotable quadcopter: one dynamic chassis box in the physics world (so
// explosions toss it and it shoulders props aside) flown by a velocity servo —
// no lift model, just impulses chasing the desired velocity, plus an
// orientation servo that keeps it upright, faces the camera yaw, and banks
// into the motion. Rockets are hand-integrated points (no bodies) that
// detonate against statics/domes/props/water via world.explode.

const HALF = new THREE.Vector3(0.55, 0.14, 0.55);
const SPAWN = new THREE.Vector3(5, 1.8, 25);
const HOVER_ALT = 1.4; // idle hover height above ground
const MAX_ROCKETS = 16;

type Rocket = {
  pos: THREE.Vector3;
  vel: THREE.Vector3;
  life: number;
  heavy: boolean;
  mesh: THREE.Mesh;
  flame: THREE.Sprite;
};

type Boom = { mesh: THREE.Mesh; light: THREE.PointLight; t: number };

export class Drone {
  piloting = false;
  shake = 0;
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
  private waters: WaterRegion[];
  private props: Props;
  private fluid: Fluid;
  private scene: THREE.Scene;
  private group = new THREE.Group();
  private rotors: THREE.Group[] = [];
  private ledMat: THREE.MeshStandardMaterial;
  private rotorSpin = 0;
  private angVel = new THREE.Vector3();

  private rockets: Rocket[] = [];
  private booms: Boom[] = [];
  private fireCooldown = 0;
  private rocketGeo = new THREE.ConeGeometry(0.07, 0.3, 8);
  private rocketMat = new THREE.MeshStandardMaterial({
    color: '#3a4552',
    emissive: '#ffb36b',
    emissiveIntensity: 0.8,
    roughness: 0.4,
    metalness: 0.5,
  });
  private rocketMatHeavy = new THREE.MeshStandardMaterial({
    color: '#402028',
    emissive: '#ff4d3a',
    emissiveIntensity: 1.2,
    roughness: 0.4,
    metalness: 0.5,
  });
  private flameTex = glowTexture('rgba(255,244,200,1)', 'rgba(255,110,40,0)');

  private tmpT: Transform = { position: [0, 0, 0], rotation: [0, 0, 0, 1] };
  private tmpVel: BodyVelocity = { linear: [0, 0, 0], angular: [0, 0, 0] };
  private v1 = new THREE.Vector3();
  private v2 = new THREE.Vector3();
  private v3 = new THREE.Vector3();
  private eul = new THREE.Euler(0, 0, 0, 'YXZ');
  private qTarget = new THREE.Quaternion();
  private qErr = new THREE.Quaternion();
  private qInv = new THREE.Quaternion();
  private rotMat = new THREE.Matrix4();
  private upAxis = new THREE.Vector3(0, 1, 0);

  constructor(
    world: PhysicsWorld,
    scene: THREE.Scene,
    statics: StaticBox[],
    domes: Dome[],
    waters: WaterRegion[],
    props: Props,
    fluid: Fluid
  ) {
    this.world = world;
    this.statics = statics;
    this.domes = domes;
    this.waters = waters;
    this.props = props;
    this.fluid = fluid;
    this.scene = scene;

    this.handle = world.createBox({
      type: BodyType.Dynamic,
      position: [SPAWN.x, SPAWN.y, SPAWN.z],
      halfExtents: [HALF.x, HALF.y, HALF.z],
      density: 0.9,
      friction: 0.4,
      restitution: 0.2,
    });
    world.setBodyGravityScale(this.handle, 0); // hover servo owns vertical motion
    world.setBodyHitEvents(this.handle, true);
    this.mass = world.getBodyMass(this.handle);
    this.pos.copy(SPAWN);
    this.extraBody = { handle: this.handle, mass: this.mass, pos: this.pos };

    // ── body meshes ─────────────────────────────────────────────────────────
    const shell = new THREE.MeshStandardMaterial({ color: '#2b333d', metalness: 0.5, roughness: 0.42 });
    const accent = new THREE.MeshStandardMaterial({ color: '#ffb536', metalness: 0.35, roughness: 0.5 });
    const dark = new THREE.MeshStandardMaterial({ color: '#12161c', metalness: 0.4, roughness: 0.6 });
    this.ledMat = new THREE.MeshStandardMaterial({ color: '#0c1116', emissive: '#6bffb0', emissiveIntensity: 1.8 });
    const lens = new THREE.MeshStandardMaterial({ color: '#0a0f16', metalness: 0.3, roughness: 0.1 });

    const add = (geo: THREE.BufferGeometry, mat: THREE.Material, x: number, y: number, z: number) => {
      const m = new THREE.Mesh(geo, mat);
      m.position.set(x, y, z);
      m.castShadow = true;
      this.group.add(m);
      return m;
    };

    add(new THREE.BoxGeometry(0.62, 0.2, 0.62), shell, 0, 0, 0); // core
    add(new THREE.BoxGeometry(0.5, 0.08, 0.5), accent, 0, 0.14, 0); // top plate
    add(new THREE.SphereGeometry(0.09, 12, 8), lens, 0, -0.04, -0.34); // camera ball
    add(new THREE.BoxGeometry(0.16, 0.05, 0.05), this.ledMat, 0, 0.06, -0.32); // front LED
    const tail = new THREE.MeshStandardMaterial({ color: '#40080a', emissive: '#ff2a2a', emissiveIntensity: 1.4 });
    add(new THREE.BoxGeometry(0.16, 0.05, 0.05), tail, 0, 0.06, 0.32); // rear LED
    // skids
    add(new THREE.BoxGeometry(0.06, 0.05, 0.7), dark, -0.24, -0.16, 0);
    add(new THREE.BoxGeometry(0.06, 0.05, 0.7), dark, 0.24, -0.16, 0);

    // arms + rotor pods + blades at the four corners
    const armGeo = new THREE.BoxGeometry(0.5, 0.06, 0.09);
    const podGeo = new THREE.CylinderGeometry(0.09, 0.11, 0.1, 10);
    const bladeGeo = new THREE.BoxGeometry(0.62, 0.015, 0.06);
    const bladeMat = new THREE.MeshStandardMaterial({
      color: '#1a2028',
      roughness: 0.5,
      transparent: true,
      opacity: 0.85,
    });
    for (const [sx, sz] of [
      [-1, -1],
      [1, -1],
      [-1, 1],
      [1, 1],
    ]) {
      const arm = add(armGeo, dark, sx * 0.42, 0.02, sz * 0.42);
      arm.rotation.y = Math.atan2(-sz, sx);
      add(podGeo, shell, sx * 0.62, 0.05, sz * 0.62);
      const rotor = new THREE.Group();
      rotor.position.set(sx * 0.62, 0.12, sz * 0.62);
      const b1 = new THREE.Mesh(bladeGeo, bladeMat);
      const b2 = new THREE.Mesh(bladeGeo, bladeMat);
      b2.rotation.y = Math.PI / 2;
      rotor.add(b1, b2);
      this.group.add(rotor);
      this.rotors.push(rotor);
    }

    this.group.position.copy(SPAWN);
    scene.add(this.group);
    this.syncSolid();
  }

  get speed() {
    return this.vel.length();
  }

  get yaw() {
    const f = this.v1.set(0, 0, -1).applyQuaternion(this.quat);
    return Math.atan2(-f.x, -f.z);
  }

  playerNear(p: THREE.Vector3) {
    return p.distanceTo(this.pos) < 3.4;
  }

  enter(player: Player) {
    this.piloting = true;
    player.parkBody(0, -120, 0); // park the walk capsule out of the way
    player.yaw = this.yaw;
    player.pitch = -0.12;
    sfx.toolSwitch();
  }

  exit(player: Player) {
    this.piloting = false;
    const right = this.v1.set(1, 0, 0).applyQuaternion(this.quat);
    const out = this.v2.copy(this.pos).addScaledVector(right, 1.8);
    out.y = this.groundYUnder(out.x, out.z, this.pos.y + 2) + 1.0;
    player.pos.copy(out);
    player.vel.set(this.vel.x * 0.3, 0, this.vel.z * 0.3);
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

  /** LMB rocket / RMB mega rocket, aimed along the camera view. */
  fire(dir: THREE.Vector3, heavy: boolean, params: Params): boolean {
    if (this.fireCooldown > 0) return false;
    this.fireCooldown = heavy ? 1.1 : 0.24;
    const origin = this.v1.copy(this.pos).addScaledVector(dir, 1.1);
    const vel = dir.clone().multiplyScalar(params.drone.rocketSpeed).addScaledVector(this.vel, 0.5);

    const mesh = new THREE.Mesh(this.rocketGeo, heavy ? this.rocketMatHeavy : this.rocketMat);
    mesh.scale.setScalar(heavy ? 1.8 : 1);
    mesh.castShadow = true;
    mesh.position.copy(origin);
    const flame = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: this.flameTex,
        color: heavy ? '#ff7b4d' : '#ffb36b',
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    flame.scale.setScalar(heavy ? 0.6 : 0.35);
    this.scene.add(mesh, flame);
    if (this.rockets.length >= MAX_ROCKETS) {
      this.despawnRocket(this.rockets[0]);
      this.rockets.shift();
    }
    this.rockets.push({ pos: origin.clone(), vel, life: 4, heavy, mesh, flame });
    if (heavy) sfx.slug();
    else sfx.shoot();
    this.shake = Math.min(1, this.shake + (heavy ? 0.3 : 0.12));
    return true;
  }

  private despawnRocket(r: Rocket) {
    this.scene.remove(r.mesh, r.flame);
    (r.flame.material as THREE.Material).dispose();
  }

  /** Point collision against the world: statics, hills, props, ragdoll bones, water. */
  private rocketHits(p: THREE.Vector3): boolean {
    if (p.y <= domeHeightAt(this.domes, p.x, p.z)) return true;
    for (const s of this.statics) {
      if (
        p.x > s.min.x &&
        p.x < s.max.x &&
        p.y > s.min.y &&
        p.y < s.max.y &&
        p.z > s.min.z &&
        p.z < s.max.z
      ) {
        return true;
      }
    }
    for (const prop of this.props.all.values()) {
      const a = prop.aabb;
      if (
        p.x > a.min.x - 0.06 &&
        p.x < a.max.x + 0.06 &&
        p.y > a.min.y - 0.06 &&
        p.y < a.max.y + 0.06 &&
        p.z > a.min.z - 0.06 &&
        p.z < a.max.z + 0.06
      ) {
        return true;
      }
    }
    for (const rag of this.props.ragdolls) {
      for (const bone of rag.bones) {
        if (bone.pos.distanceToSquared(p) < 0.25) return true;
      }
    }
    for (const w of this.waters) {
      if (p.x > w.minX && p.x < w.maxX && p.z > w.minZ && p.z < w.maxZ && p.y < w.surfaceY) return true;
    }
    return false;
  }

  private detonate(p: THREE.Vector3, scale: number, params: Params) {
    const radius = params.drone.boomRadius * scale;
    this.world.explode([p.x, p.y, p.z], radius, 1.3, params.drone.boomImpulse * scale);

    // up-bias so stacks pop skyward, plus wake everything nearby
    for (const prop of this.props.all.values()) {
      const d = prop.pos.distanceTo(p);
      if (d < radius) {
        const f = 1 - d / radius;
        this.world.applyImpulse(prop.handle, [0, prop.mass * params.drone.boomImpulse * 0.06 * f * scale, 0]);
        this.world.setBodyAwake(prop.handle, true);
      }
    }
    for (const rag of this.props.ragdolls) {
      for (const bone of rag.bones) {
        if (bone.pos.distanceTo(p) < radius) this.world.setBodyAwake(bone.handle, true);
      }
    }

    if (p.y < 1) {
      this.fluid.splash(p.x, p.z, 1.6 * scale);
      this.fluid.splash(p.x + 0.8, p.z + 0.5, 1.1 * scale);
    }

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

    this.shake = Math.min(1.4, this.shake + 0.5 * scale);
    sfx.boom();
  }

  prePhysics(step: number, params: Params, controlsOn: boolean) {
    this.world.getBodyTransform(this.handle, this.tmpT);
    this.pos.set(this.tmpT.position[0], this.tmpT.position[1], this.tmpT.position[2]);
    this.quat.set(this.tmpT.rotation[0], this.tmpT.rotation[1], this.tmpT.rotation[2], this.tmpT.rotation[3]);
    this.world.getBodyVelocity(this.handle, this.tmpVel);
    this.vel.set(this.tmpVel.linear[0], this.tmpVel.linear[1], this.tmpVel.linear[2]);
    this.angVel.set(this.tmpVel.angular[0], this.tmpVel.angular[1], this.tmpVel.angular[2]);

    // ── desired velocity ────────────────────────────────────────────────────
    const curYaw = this.yaw; // reads via v1 — take it before desired borrows the register
    const desired = this.v1.set(0, 0, 0);
    let targetYaw = curYaw;
    if (this.piloting && controlsOn) {
      targetYaw = this.pilotYaw;
      const fx = -Math.sin(targetYaw);
      const fz = -Math.cos(targetYaw);
      const fwd = (keys.has('KeyW') ? 1 : 0) - (keys.has('KeyS') ? 1 : 0);
      const strafe = (keys.has('KeyD') ? 1 : 0) - (keys.has('KeyA') ? 1 : 0);
      const rise =
        (keys.has('Space') ? 1 : 0) - (keys.has('ShiftLeft') || keys.has('ShiftRight') ? 1 : 0);
      desired.set(fx * fwd - fz * strafe, 0, fz * fwd + fx * strafe);
      if (desired.lengthSq() > 1) desired.normalize();
      desired.multiplyScalar(params.drone.speed);
      desired.y = rise * params.drone.speed * 0.7;
    } else {
      // idle: hold a gentle hover above whatever is below
      const g = this.groundYUnder(this.pos.x, this.pos.z, this.pos.y);
      desired.y = THREE.MathUtils.clamp((g + HOVER_ALT - this.pos.y) * 2, -3, 3);
    }
    // soft cage: arena walls are only 4m tall, ceiling keeps the map in view
    const lim = ARENA - 1.2;
    if (this.pos.x > lim && desired.x > 0) desired.x = -4;
    if (this.pos.x < -lim && desired.x < 0) desired.x = 4;
    if (this.pos.z > lim && desired.z > 0) desired.z = -4;
    if (this.pos.z < -lim && desired.z < 0) desired.z = 4;
    if (this.pos.y > 55 && desired.y > 0) desired.y = -2;

    // velocity servo
    const k = Math.min(1, params.drone.agility * step);
    this.world.applyImpulse(this.handle, [
      (desired.x - this.vel.x) * this.mass * k,
      (desired.y - this.vel.y) * this.mass * k,
      (desired.z - this.vel.z) * this.mass * k,
    ]);
    this.world.setBodyAwake(this.handle, true);

    // ── orientation servo: upright + face yaw + bank into motion ───────────
    const sin = Math.sin(targetYaw);
    const cos = Math.cos(targetYaw);
    const vF = -desired.x * sin - desired.z * cos; // forward speed in yaw frame
    const vR = desired.x * cos - desired.z * sin; // rightward
    const tiltPitch = THREE.MathUtils.clamp(-vF / Math.max(1, params.drone.speed), -1, 1) * 0.34;
    const tiltRoll = THREE.MathUtils.clamp(-vR / Math.max(1, params.drone.speed), -1, 1) * 0.3;
    this.qTarget.setFromEuler(this.eul.set(tiltPitch, targetYaw, tiltRoll));
    this.qErr.copy(this.qTarget).multiply(this.qInv.copy(this.quat).invert());
    if (this.qErr.w < 0) {
      this.qErr.set(-this.qErr.x, -this.qErr.y, -this.qErr.z, -this.qErr.w);
    }
    // small-angle axis*angle ≈ 2 * vector part
    const kOri = 10 * this.mass * step;
    const kDamp = 2.2 * this.mass * step;
    this.world.applyAngularImpulse(this.handle, [
      this.qErr.x * 2 * kOri - this.angVel.x * kDamp,
      this.qErr.y * 2 * kOri - this.angVel.y * kDamp,
      this.qErr.z * 2 * kOri - this.angVel.z * kDamp,
    ]);

    // ── rockets: hand-integrated, detonate on contact or fuse ──────────────
    for (let i = this.rockets.length - 1; i >= 0; i--) {
      const r = this.rockets[i];
      r.life -= step;
      r.vel.y -= 3 * step; // lazy ballistic droop
      r.pos.addScaledVector(r.vel, step);
      if (r.life <= 0 || this.rocketHits(r.pos)) {
        this.detonate(r.pos, r.heavy ? 1.7 : 0.85, params);
        this.despawnRocket(r);
        this.rockets.splice(i, 1);
      }
    }
  }

  /** Camera yaw fed from the player's mouselook while piloting (set by main). */
  pilotYaw = 0;

  private syncSolid() {
    // world AABB: |R| * halfExtents, padded a touch for the rotors
    this.rotMat.makeRotationFromQuaternion(this.quat);
    const e = this.rotMat.elements;
    const wx = Math.abs(e[0]) * HALF.x + Math.abs(e[4]) * HALF.y + Math.abs(e[8]) * HALF.z;
    const wy = Math.abs(e[1]) * HALF.x + Math.abs(e[5]) * HALF.y + Math.abs(e[9]) * HALF.z;
    const wz = Math.abs(e[2]) * HALF.x + Math.abs(e[6]) * HALF.y + Math.abs(e[10]) * HALF.z;
    this.solid.min.set(this.pos.x - wx - 0.35, this.pos.y - wy - 0.12, this.pos.z - wz - 0.35);
    this.solid.max.set(this.pos.x + wx + 0.35, this.pos.y + wy + 0.1, this.pos.z + wz + 0.35);
  }

  /** Render-side sync. Runs after the physics step; owns the camera while piloting. */
  update(dt: number, rawDt: number, player: Player) {
    this.pilotYaw = player.yaw;
    this.world.getBodyTransform(this.handle, this.tmpT);
    this.pos.set(this.tmpT.position[0], this.tmpT.position[1], this.tmpT.position[2]);
    this.quat.set(this.tmpT.rotation[0], this.tmpT.rotation[1], this.tmpT.rotation[2], this.tmpT.rotation[3]);
    this.group.position.copy(this.pos);
    this.group.quaternion.copy(this.quat);
    this.syncSolid();

    // fell out of the world: respawn hovering at the pad
    if (this.pos.y < -30) {
      this.world.setBodyTransform(this.handle, [SPAWN.x, SPAWN.y, SPAWN.z], [0, 0, 0, 1]);
      this.world.setBodyVelocity(this.handle, [0, 0, 0], [0, 0, 0]);
    }

    // rotors spin faster the harder the drone works
    this.rotorSpin += dt * (16 + this.speed * 2.4 + (this.piloting ? 34 : 0));
    for (let i = 0; i < this.rotors.length; i++) {
      this.rotors[i].rotation.y = i % 2 === 0 ? this.rotorSpin : -this.rotorSpin;
    }
    this.ledMat.emissiveIntensity = this.piloting ? 2.4 + Math.sin(performance.now() * 0.02) * 0.6 : 1.2;

    // rocket visuals ride the integrated points
    this.fireCooldown -= rawDt;
    for (const r of this.rockets) {
      r.mesh.position.copy(r.pos);
      if (r.vel.lengthSq() > 1e-4) {
        r.mesh.quaternion.setFromUnitVectors(this.upAxis, this.v1.copy(r.vel).normalize());
      }
      r.flame.position.copy(r.pos).addScaledVector(this.v1, -(r.heavy ? 0.34 : 0.2));
      r.flame.scale.setScalar((r.heavy ? 0.5 : 0.3) + Math.random() * 0.18);
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

    this.shake = Math.max(0, this.shake - rawDt * 2.2);
    sfx.droneLoop(this.piloting, this.speed);

    // ── chase camera while piloting ─────────────────────────────────────────
    if (this.piloting) {
      player.pos.copy(this.pos);
      player.pos.y += 0.4;
      player.vel.copy(this.vel);
      const dir = player.viewDir(this.v1);
      const target = this.v2.copy(this.pos);
      target.y += 1.1;
      const camPos = this.v3.copy(target).addScaledVector(dir, -7.4);
      const camG = this.groundYUnder(camPos.x, camPos.z, camPos.y + 2);
      if (camPos.y < camG + 0.35) camPos.y = camG + 0.35;
      player.camera.position.copy(camPos);
      player.camera.rotation.set(player.pitch, player.yaw, 0);
    }
  }
}
