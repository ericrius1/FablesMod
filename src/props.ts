import * as THREE from 'three';
import { BodyType, TRANSFORM_STRIDE, type PhysicsWorld } from './physics';
import type { TransformBatch } from 'box3d-wasm';

// Dynamic prop management: instanced mesh pools per shape, ragdolls, and a
// single TransformBatch that mirrors every dynamic body into the render world.

export type PropShape = 'crate' | 'ball' | 'plank' | 'barrel';

export type Prop = {
  id: number;
  handle: number;
  shape: PropShape;
  slot: number;
  half: THREE.Vector3;
  minHalf: number;
  mass: number;
  pos: THREE.Vector3;
  quat: THREE.Quaternion;
  vel: THREE.Vector3;
  aabb: THREE.Box3;
  submerged: number;
  color: THREE.Color;
};

export type Bone = {
  handle: number;
  group: THREE.Group;
  radius: number;
  mass: number;
  pos: THREE.Vector3;
  vel: THREE.Vector3;
  submerged: number;
};

export type Ragdoll = {
  human: number;
  bones: Bone[];
};

type Pool = {
  shape: PropShape;
  mesh: THREE.InstancedMesh;
  props: Prop[];
  cap: number;
};

const SHAPE_DEFS: Record<
  PropShape,
  {
    half: [number, number, number];
    density: number;
    friction: number;
    restitution: number;
    rollingResistance?: number;
    palette: string[];
  }
> = {
  crate: {
    half: [0.42, 0.42, 0.42],
    density: 1,
    friction: 0.62,
    restitution: 0.12,
    palette: ['#c98d4e', '#b07a42', '#d6a05e', '#8f6236', '#caa06a'],
  },
  ball: {
    half: [0.38, 0.38, 0.38],
    density: 0.8,
    friction: 0.5,
    restitution: 0.62,
    rollingResistance: 0.015,
    palette: ['#ff5f5f', '#ffc44d', '#5fd47f', '#59b7ff', '#c78cff', '#ff8ad1'],
  },
  plank: {
    half: [1.1, 0.075, 0.3],
    density: 0.9,
    friction: 0.6,
    restitution: 0.1,
    palette: ['#d8b98a', '#c7a878', '#e0c294'],
  },
  barrel: {
    half: [0.34, 0.72, 0.34], // capsule bounding half extents (r, halfHeight + r, r)
    density: 1.1,
    friction: 0.55,
    restitution: 0.25,
    palette: ['#d64545', '#4587d6', '#45b06a', '#d6a245'],
  },
};

const CAPS: Record<PropShape, number> = { crate: 220, ball: 260, plank: 160, barrel: 120 };
const MAX_RAGDOLLS = 8;

function crateTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d')!;
  g.fillStyle = '#d9d0bf';
  g.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 7; i++) {
    g.fillStyle = i % 2 ? 'rgba(120,90,50,0.10)' : 'rgba(150,120,80,0.14)';
    g.fillRect(0, i * 18, 128, 12);
  }
  g.strokeStyle = 'rgba(70,45,20,0.55)';
  g.lineWidth = 10;
  g.strokeRect(5, 5, 118, 118);
  g.strokeStyle = 'rgba(70,45,20,0.35)';
  g.lineWidth = 6;
  g.beginPath();
  g.moveTo(8, 8);
  g.lineTo(120, 120);
  g.moveTo(120, 8);
  g.lineTo(8, 120);
  g.stroke();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export class Props {
  readonly all = new Map<number, Prop>(); // body handle -> prop
  readonly ragdolls: Ragdoll[] = [];
  readonly boneByHandle = new Map<number, Bone>();

  private pools: Record<PropShape, Pool>;
  private world: PhysicsWorld;
  private scene: THREE.Scene;
  private batch: TransformBatch | undefined;
  private batchProps: Prop[] = [];
  private batchBones: Bone[] = [];
  private batchDirty = true;
  private nextId = 1;

  /** When true, new + existing bodies get gravityScale 0 (zero-g playground). */
  zeroG = false;

  private tmpMat = new THREE.Matrix4();
  private tmpPos = new THREE.Vector3();
  private tmpScale = new THREE.Vector3(1, 1, 1);
  private rotMat = new THREE.Matrix4();

  constructor(world: PhysicsWorld, scene: THREE.Scene) {
    this.world = world;
    this.scene = scene;

    const crateTex = crateTexture();
    const mats: Record<PropShape, THREE.Material> = {
      crate: new THREE.MeshStandardMaterial({ map: crateTex, roughness: 0.75, metalness: 0.04 }),
      ball: new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.35, metalness: 0.15 }),
      plank: new THREE.MeshStandardMaterial({ map: crateTex, roughness: 0.8, metalness: 0.02 }),
      barrel: new THREE.MeshStandardMaterial({ roughness: 0.42, metalness: 0.35 }),
    };
    const geos: Record<PropShape, THREE.BufferGeometry> = {
      crate: new THREE.BoxGeometry(0.84, 0.84, 0.84),
      ball: new THREE.SphereGeometry(0.38, 22, 14),
      plank: new THREE.BoxGeometry(2.2, 0.15, 0.6),
      barrel: new THREE.CapsuleGeometry(0.34, 0.76, 5, 14),
    };

    this.pools = Object.fromEntries(
      (Object.keys(SHAPE_DEFS) as PropShape[]).map((shape) => {
        const mesh = new THREE.InstancedMesh(geos[shape], mats[shape], CAPS[shape]);
        mesh.count = 0;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        mesh.userData.propShape = shape;
        scene.add(mesh);
        return [shape, { shape, mesh, props: [], cap: CAPS[shape] }];
      })
    ) as unknown as Record<PropShape, Pool>;
  }

  get count() {
    return this.all.size;
  }

  get ragdollBoneCount() {
    return this.ragdolls.length ? this.ragdolls.length * this.ragdolls[0].bones.length : 0;
  }

  raycastTargets(): THREE.Object3D[] {
    const targets: THREE.Object3D[] = Object.values(this.pools).map((p) => p.mesh);
    for (const rag of this.ragdolls) for (const bone of rag.bones) targets.push(bone.group);
    return targets;
  }

  /** Resolve a raycast hit to a grabbable body handle. */
  handleFromHit(hit: THREE.Intersection): number | undefined {
    const obj = hit.object;
    if (obj instanceof THREE.InstancedMesh && hit.instanceId !== undefined) {
      const shape = obj.userData.propShape as PropShape | undefined;
      if (shape) return this.pools[shape].props[hit.instanceId]?.handle;
    }
    let node: THREE.Object3D | null = obj;
    while (node) {
      if (typeof node.userData.boneHandle === 'number') return node.userData.boneHandle;
      node = node.parent;
    }
    return undefined;
  }

  spawn(
    shape: PropShape,
    position: THREE.Vector3,
    opts: { velocity?: THREE.Vector3; rotation?: THREE.Quaternion; colorIndex?: number } = {}
  ): Prop | undefined {
    const pool = this.pools[shape];
    if (pool.props.length >= pool.cap) return undefined;
    const def = SHAPE_DEFS[shape];

    let handle: number;
    if (shape === 'ball') {
      handle = this.world.createSphere({
        type: BodyType.Dynamic,
        position: [position.x, position.y, position.z],
        radius: def.half[0],
        density: def.density,
        friction: def.friction,
        restitution: def.restitution,
        rollingResistance: def.rollingResistance,
      });
    } else if (shape === 'barrel') {
      handle = this.world.createCapsule({
        type: BodyType.Dynamic,
        position: [position.x, position.y, position.z],
        halfHeight: 0.38,
        radius: def.half[0],
        density: def.density,
        friction: def.friction,
        restitution: def.restitution,
      });
    } else {
      handle = this.world.createBox({
        type: BodyType.Dynamic,
        position: [position.x, position.y, position.z],
        halfExtents: def.half,
        density: def.density,
        friction: def.friction,
        restitution: def.restitution,
      });
    }

    if (opts.rotation) {
      this.world.setBodyTransform(
        handle,
        [position.x, position.y, position.z],
        [opts.rotation.x, opts.rotation.y, opts.rotation.z, opts.rotation.w]
      );
    }
    if (opts.velocity) {
      this.world.setBodyVelocity(handle, [opts.velocity.x, opts.velocity.y, opts.velocity.z]);
    }
    this.world.setBodyHitEvents(handle, true);
    if (this.zeroG) this.world.setBodyGravityScale(handle, 0);

    const palette = def.palette;
    const colorHex = palette[(opts.colorIndex ?? Math.floor(Math.random() * palette.length)) % palette.length];
    const color = new THREE.Color(colorHex);

    const prop: Prop = {
      id: this.nextId++,
      handle,
      shape,
      slot: pool.props.length,
      half: new THREE.Vector3(...def.half),
      minHalf: Math.min(...def.half),
      mass: this.world.getBodyMass(handle),
      pos: position.clone(),
      quat: opts.rotation?.clone() ?? new THREE.Quaternion(),
      vel: opts.velocity?.clone() ?? new THREE.Vector3(),
      aabb: new THREE.Box3(),
      submerged: 0,
      color,
    };
    pool.props.push(prop);
    pool.mesh.count = pool.props.length;
    this.tmpMat.compose(prop.pos, prop.quat, this.tmpScale);
    pool.mesh.setMatrixAt(prop.slot, this.tmpMat);
    pool.mesh.setColorAt(prop.slot, color);
    pool.mesh.instanceMatrix.needsUpdate = true;
    if (pool.mesh.instanceColor) pool.mesh.instanceColor.needsUpdate = true;

    this.all.set(handle, prop);
    this.batchDirty = true;
    return prop;
  }

  despawn(prop: Prop) {
    const pool = this.pools[prop.shape];
    if (!this.all.delete(prop.handle)) return;
    this.world.destroyBody(prop.handle);

    const last = pool.props[pool.props.length - 1];
    pool.props.pop();
    if (last !== prop) {
      pool.props[prop.slot] = last;
      last.slot = prop.slot;
      this.tmpMat.compose(last.pos, last.quat, this.tmpScale);
      pool.mesh.setMatrixAt(last.slot, this.tmpMat);
      pool.mesh.setColorAt(last.slot, last.color);
    }
    pool.mesh.count = pool.props.length;
    pool.mesh.instanceMatrix.needsUpdate = true;
    if (pool.mesh.instanceColor) pool.mesh.instanceColor.needsUpdate = true;
    this.batchDirty = true;
  }

  spawnRagdoll(position: THREE.Vector3, velocity?: THREE.Vector3): Ragdoll | undefined {
    if (this.ragdolls.length >= MAX_RAGDOLLS) return undefined;
    const rag = this.world.spawnHuman([position.x, position.y, position.z], {
      frictionTorque: 4,
      hertz: 2,
      dampingRatio: 0.6,
    });
    const skinTones = ['#e8b48c', '#c98f66', '#f2c9a0'];
    const shirt = ['#3f7fd1', '#d15050', '#4fae62', '#9a5fd1'][Math.floor(Math.random() * 4)];
    const skin = skinTones[Math.floor(Math.random() * skinTones.length)];

    const bones: Bone[] = [];
    for (let i = 0; i < rag.bones.length; i++) {
      const handle = rag.bones[i];
      const capsule = this.world.getBodyCapsule(handle);
      const group = new THREE.Group();
      group.userData.boneHandle = handle;
      if (capsule) {
        const from = new THREE.Vector3(...capsule.center1);
        const to = new THREE.Vector3(...capsule.center2);
        const axis = to.clone().sub(from);
        const len = axis.length();
        // Bone 5 is the head in the upstream sample ragdoll ordering.
        const color = i === 5 ? skin : i <= 1 || i > 9 ? shirt : skin;
        const mesh = new THREE.Mesh(
          new THREE.CapsuleGeometry(capsule.radius, len, 4, 10),
          new THREE.MeshStandardMaterial({ color, roughness: 0.7, metalness: 0.05 })
        );
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.position.copy(from).add(to).multiplyScalar(0.5);
        if (len > 1e-5) {
          mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), axis.normalize());
        }
        mesh.userData.boneHandle = handle;
        group.add(mesh);
      }
      this.world.setBodyHitEvents(handle, true);
      if (this.zeroG) this.world.setBodyGravityScale(handle, 0);
      const t = this.world.getBodyTransform(handle);
      group.position.set(...t.position);
      group.quaternion.set(...t.rotation);
      this.scene.add(group);
      const bone: Bone = {
        handle,
        group,
        radius: capsule?.radius ?? 0.1,
        mass: this.world.getBodyMass(handle),
        pos: new THREE.Vector3(...t.position),
        vel: new THREE.Vector3(),
        submerged: 0,
      };
      bones.push(bone);
      this.boneByHandle.set(handle, bone);
    }
    if (velocity) this.world.humanSetVelocity(rag.human, [velocity.x, velocity.y, velocity.z]);

    const doll: Ragdoll = { human: rag.human, bones };
    this.ragdolls.push(doll);
    this.batchDirty = true;
    return doll;
  }

  despawnRagdoll(rag: Ragdoll) {
    const idx = this.ragdolls.indexOf(rag);
    if (idx === -1) return;
    this.ragdolls.splice(idx, 1);
    for (const bone of rag.bones) {
      this.world.destroyBody(bone.handle);
      this.boneByHandle.delete(bone.handle);
      this.scene.remove(bone.group);
      bone.group.traverse((o) => {
        const mesh = o as THREE.Mesh;
        mesh.geometry?.dispose();
        if (mesh.material) (mesh.material as THREE.Material).dispose();
      });
    }
    this.batchDirty = true;
  }

  ragdollOfBone(handle: number): Ragdoll | undefined {
    return this.ragdolls.find((r) => r.bones.some((b) => b.handle === handle));
  }

  clearAll() {
    for (const prop of [...this.all.values()]) this.despawn(prop);
    for (const rag of [...this.ragdolls]) this.despawnRagdoll(rag);
  }

  setZeroG(on: boolean) {
    this.zeroG = on;
    const scale = on ? 0 : 1;
    for (const prop of this.all.values()) {
      this.world.setBodyGravityScale(prop.handle, scale);
      this.world.setBodyAwake(prop.handle, true);
      if (on) this.world.applyImpulse(prop.handle, [0, prop.mass * 1.2, 0]); // gentle lift-off
    }
    for (const rag of this.ragdolls) {
      for (const bone of rag.bones) {
        this.world.setBodyGravityScale(bone.handle, scale);
        this.world.setBodyAwake(bone.handle, true);
      }
    }
  }

  /** Refresh the transform batch and mirror all bodies into meshes + AABBs. */
  sync() {
    if (this.batchDirty) {
      this.batch?.dispose();
      this.batchProps = [];
      this.batchBones = [];
      const handles: number[] = [];
      for (const pool of Object.values(this.pools)) {
        for (const prop of pool.props) {
          this.batchProps.push(prop);
          handles.push(prop.handle);
        }
      }
      for (const rag of this.ragdolls) {
        for (const bone of rag.bones) {
          this.batchBones.push(bone);
          handles.push(bone.handle);
        }
      }
      this.batch = handles.length ? this.world.createTransformBatch(handles) : undefined;
      this.batchDirty = false;
    }
    if (!this.batch) return;

    const data = this.batch.read();
    let off = 0;
    for (const prop of this.batchProps) {
      const px = data[off];
      const py = data[off + 1];
      const pz = data[off + 2];
      // crude per-frame velocity estimate (used by fluid + physgun throw)
      prop.vel.set(px - prop.pos.x, py - prop.pos.y, pz - prop.pos.z).multiplyScalar(60);
      prop.pos.set(px, py, pz);
      prop.quat.set(data[off + 3], data[off + 4], data[off + 5], data[off + 6]);
      off += TRANSFORM_STRIDE;

      const pool = this.pools[prop.shape];
      this.tmpMat.compose(prop.pos, prop.quat, this.tmpScale);
      pool.mesh.setMatrixAt(prop.slot, this.tmpMat);

      // world AABB: |R| * halfExtents
      this.rotMat.makeRotationFromQuaternion(prop.quat);
      const e = this.rotMat.elements;
      const hx = prop.half.x;
      const hy = prop.half.y;
      const hz = prop.half.z;
      const wx = Math.abs(e[0]) * hx + Math.abs(e[4]) * hy + Math.abs(e[8]) * hz;
      const wy = Math.abs(e[1]) * hx + Math.abs(e[5]) * hy + Math.abs(e[9]) * hz;
      const wz = Math.abs(e[2]) * hx + Math.abs(e[6]) * hy + Math.abs(e[10]) * hz;
      prop.aabb.min.set(px - wx, py - wy, pz - wz);
      prop.aabb.max.set(px + wx, py + wy, pz + wz);
    }
    for (const pool of Object.values(this.pools)) {
      if (pool.props.length) pool.mesh.instanceMatrix.needsUpdate = true;
    }
    // cull anything blasted out of the world
    for (const prop of [...this.all.values()]) {
      if (prop.pos.y < -40) this.despawn(prop);
    }
    for (const bone of this.batchBones) {
      bone.vel.set(data[off] - bone.pos.x, data[off + 1] - bone.pos.y, data[off + 2] - bone.pos.z).multiplyScalar(60);
      bone.pos.set(data[off], data[off + 1], data[off + 2]);
      bone.group.position.copy(bone.pos);
      bone.group.quaternion.set(data[off + 3], data[off + 4], data[off + 5], data[off + 6]);
      off += TRANSFORM_STRIDE;
    }
  }

  // ── presets ────────────────────────────────────────────────────────────────

  spawnTower(center: THREE.Vector3, width = 3, height = 5) {
    const h = SHAPE_DEFS.crate.half[0];
    const size = h * 2 + 0.02;
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        for (let z = 0; z < width; z++) {
          this.spawn(
            'crate',
            this.tmpPos
              .set(
                center.x + (x - (width - 1) / 2) * size,
                h + 0.01 + y * size,
                center.z + (z - (width - 1) / 2) * size
              )
              .clone()
          );
        }
      }
    }
  }

  spawnWall(center: THREE.Vector3, dir: THREE.Vector3, width = 6, height = 4) {
    const h = SHAPE_DEFS.crate.half[0];
    const size = h * 2 + 0.02;
    const side = new THREE.Vector3(-dir.z, 0, dir.x).normalize();
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const offset = (x - (width - 1) / 2 + (y % 2 ? 0.5 : 0)) * size;
        this.spawn(
          'crate',
          new THREE.Vector3().copy(center).addScaledVector(side, offset).setY(h + 0.01 + y * size)
        );
      }
    }
  }

  spawnDominoes(start: THREE.Vector3, dir: THREE.Vector3, count = 14) {
    const d = dir.clone().setY(0).normalize();
    // Plank local X is the long axis: stand it up (Z-rotation), then yaw the
    // thin axis (now world X) into the travel direction so dominoes chain.
    const face = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.atan2(-d.z, d.x));
    const upright = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.PI / 2);
    const rot = face.multiply(upright);
    for (let i = 0; i < count; i++) {
      const pos = start.clone().addScaledVector(d, i * 1.35).setY(SHAPE_DEFS.plank.half[0] + 0.02);
      this.spawn('plank', pos, { rotation: rot.clone() });
    }
  }

  spawnBallPit(center: THREE.Vector3, count = 36) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * 2.2;
      this.spawn(
        'ball',
        new THREE.Vector3(center.x + Math.cos(angle) * r, center.y + 1 + (i % 12) * 0.85, center.z + Math.sin(angle) * r)
      );
    }
  }

  /** Starting furniture so the arena is alive on load. */
  populateInitial() {
    this.spawnTower(new THREE.Vector3(2, 0, -30), 3, 5);
    this.spawnTower(new THREE.Vector3(-42, 0, 8), 3, 4); // lake shore
    this.spawnTower(new THREE.Vector3(52, 0, -12), 2, 6);
    this.spawnWall(new THREE.Vector3(-14, 0, -34), new THREE.Vector3(0, 0, 1), 7, 4);
    this.spawnDominoes(new THREE.Vector3(-4, 0, 6), new THREE.Vector3(1, 0, 0.15), 12);
    this.spawnBallPit(new THREE.Vector3(22.5, 0.5, -22.5), 18); // straight into the spawn pond
    for (let i = 0; i < 4; i++) {
      this.spawn('barrel', new THREE.Vector3(-16 + i * 1.4, 0.75, -2));
      this.spawn('barrel', new THREE.Vector3(38 + i * 1.4, 0.75, 24));
    }
    // toys on the grand hill — they roll
    for (let i = 0; i < 8; i++) {
      this.spawn('ball', new THREE.Vector3(-6 + i * 1.7, 7.5 + Math.random(), 54 + (i % 3) * 2.5));
    }
    this.spawnRagdoll(new THREE.Vector3(4, 1.4, 8));
    this.spawnRagdoll(new THREE.Vector3(0, 8.2, 58)); // hilltop sledder
  }
}
