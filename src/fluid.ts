import * as THREE from 'three';
import { GRAVITY_Y, type PhysicsWorld } from './physics';
import type { Props } from './props';
import { ARENA, type Dome, type StaticBox, type WaterRegion } from './world';
import type { Params } from './params';
import { sfx } from './sfx';

// Fluid layer: a hose that sprays instanced droplets which bounce off the
// level and shove props, plus shader ponds with ripple rings and buoyancy.

const MAX_DROPS = 2400;
const DROP_R = 0.085;
const DROP_MASS = 0.05; // effective impulse mass per droplet hit
const CELL = 2.6;
const MAX_RIPPLES = 12;

const WATER_BLUE = new THREE.Color('#5db9ff');
const FOAM_WHITE = new THREE.Color('#d9f1ff');

type Pond = {
  region: WaterRegion;
  mat: THREE.ShaderMaterial;
  ripples: Float32Array;
  rippleIdx: number;
};

function pondMaterial(ripples: Float32Array) {
  return new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    uniforms: {
      uTime: { value: 0 },
      uRipples: { value: ripples },
      uDeep: { value: new THREE.Color('#0a2c46') },
      uShallow: { value: new THREE.Color('#1c6f8f') },
      uSky: { value: new THREE.Color('#b6d2ea') },
    },
    vertexShader: /* glsl */ `
      uniform float uTime;
      uniform vec4 uRipples[${MAX_RIPPLES}];
      varying vec3 vWorld;
      varying float vWave;

      float rippleHeight(vec2 p) {
        float h = 0.0;
        for (int i = 0; i < ${MAX_RIPPLES}; i++) {
          vec4 r = uRipples[i];
          float age = uTime - r.z;
          if (age < 0.0 || age > 4.0) continue;
          float d = length(p - r.xy);
          h += sin(d * 7.0 - age * 8.0) * exp(-d * 0.75 - age * 1.6) * r.w;
        }
        return h;
      }

      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        float wave =
          0.025 * sin(wp.x * 2.1 + uTime * 1.6) +
          0.025 * sin(wp.z * 1.7 - uTime * 1.2) +
          0.015 * sin((wp.x + wp.z) * 3.3 + uTime * 2.3);
        wave += rippleHeight(wp.xz);
        // pin the surface at the pit walls so ripples never tear the edges
        vec2 edge = min(uv, 1.0 - uv);
        wave *= smoothstep(0.0, 0.05, min(edge.x, edge.y));
        wp.y += wave;
        vWave = wave;
        vWorld = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uDeep;
      uniform vec3 uShallow;
      uniform vec3 uSky;
      uniform float uTime;
      varying vec3 vWorld;
      varying float vWave;

      void main() {
        vec3 viewDir = normalize(cameraPosition - vWorld);
        float fresnel = pow(1.0 - max(viewDir.y, 0.0), 2.0);
        float sparkle = pow(max(0.0, sin(vWorld.x * 14.0 + uTime * 3.0) * sin(vWorld.z * 12.0 - uTime * 2.4)), 24.0);
        vec3 col = mix(uDeep, uShallow, 0.5 + vWave * 3.0);
        col = mix(col, uSky, fresnel * 0.65);
        col += vec3(1.0) * sparkle * 0.18;
        float foam = smoothstep(0.075, 0.16, abs(vWave));
        col = mix(col, vec3(0.85, 0.95, 1.0), foam * 0.7);
        gl_FragColor = vec4(col, 0.84);
      }
    `,
  });
}

export class Fluid {
  private world: PhysicsWorld;
  private props: Props;
  private statics: StaticBox[];
  private domes: Dome[];
  private ponds: Pond[] = [];

  // droplet SoA
  private px = new Float32Array(MAX_DROPS);
  private py = new Float32Array(MAX_DROPS);
  private pz = new Float32Array(MAX_DROPS);
  private vx = new Float32Array(MAX_DROPS);
  private vy = new Float32Array(MAX_DROPS);
  private vz = new Float32Array(MAX_DROPS);
  private life = new Float32Array(MAX_DROPS);
  private bounces = new Uint8Array(MAX_DROPS);
  private alive = 0;

  private mesh: THREE.InstancedMesh;
  private emitCarry = 0;

  // grid: cell key -> prop handles whose AABB overlaps the cell (XZ plane)
  private grid = new Map<number, number[]>();
  private staticBoxes: StaticBox[] = [];

  // impulses accumulated from droplet hits, applied to bodies once per frame
  private impulses = new Map<number, THREE.Vector3>();

  private time = 0;
  private splashSfxCooldown = 0;

  private tmpMat = new THREE.Matrix4();
  private tmpPos = new THREE.Vector3();
  private tmpQuat = new THREE.Quaternion();
  private tmpScale = new THREE.Vector3();
  private tmpVel = new THREE.Vector3();
  private up = new THREE.Vector3(0, 1, 0);
  private tmpColor = new THREE.Color();

  constructor(
    scene: THREE.Scene,
    world: PhysicsWorld,
    props: Props,
    statics: StaticBox[],
    waters: WaterRegion[],
    domes: Dome[]
  ) {
    this.world = world;
    this.props = props;
    this.statics = statics;
    this.domes = domes;

    const geo = new THREE.SphereGeometry(DROP_R, 7, 5);
    const mat = new THREE.MeshBasicMaterial({
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.mesh = new THREE.InstancedMesh(geo, mat, MAX_DROPS);
    this.mesh.count = 0;
    this.mesh.frustumCulled = false;
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    scene.add(this.mesh);

    for (const region of waters) {
      const ripples = new Float32Array(MAX_RIPPLES * 4).fill(-1000);
      const mat = pondMaterial(ripples);
      const w = region.maxX - region.minX;
      const d = region.maxZ - region.minZ;
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, d, Math.round(w * 3.4), Math.round(d * 3.4)), mat);
      mesh.rotation.x = -Math.PI / 2;
      mesh.position.set((region.minX + region.maxX) / 2, region.surfaceY, (region.minZ + region.maxZ) / 2);
      scene.add(mesh);
      this.ponds.push({ region, mat, ripples, rippleIdx: 0 });
    }
  }

  get dropletCount() {
    return this.alive;
  }

  private pondAt(x: number, z: number): Pond | undefined {
    for (const p of this.ponds) {
      const r = p.region;
      if (x > r.minX && x < r.maxX && z > r.minZ && z < r.maxZ) return p;
    }
    return undefined;
  }

  private addRipple(pond: Pond, x: number, z: number, amp: number) {
    const i = pond.rippleIdx;
    pond.ripples[i * 4] = x;
    pond.ripples[i * 4 + 1] = z;
    pond.ripples[i * 4 + 2] = this.time;
    pond.ripples[i * 4 + 3] = amp;
    pond.rippleIdx = (i + 1) % MAX_RIPPLES;
  }

  splash(x: number, z: number, strength: number) {
    const pond = this.pondAt(x, z);
    if (!pond) return;
    this.addRipple(pond, x, z, Math.min(0.35, 0.06 + strength * 0.12));

    // foam burst
    const n = Math.min(26, Math.floor(6 + strength * 14));
    for (let k = 0; k < n; k++) {
      const a = Math.random() * Math.PI * 2;
      const r = Math.random() * 0.5;
      this.spawnDrop(
        x + Math.cos(a) * r,
        pond.region.surfaceY + 0.05,
        z + Math.sin(a) * r,
        Math.cos(a) * (1 + Math.random() * 2) * strength,
        (2.2 + Math.random() * 3.2) * Math.min(1.6, 0.5 + strength),
        Math.sin(a) * (1 + Math.random() * 2) * strength,
        true
      );
    }
    if (this.splashSfxCooldown <= 0) {
      sfx.splash(Math.min(1.2, 0.3 + strength * 0.5));
      this.splashSfxCooldown = 0.09;
    }
  }

  private spawnDrop(x: number, y: number, z: number, vx: number, vy: number, vz: number, foam = false) {
    if (this.alive >= MAX_DROPS) return;
    const i = this.alive++;
    this.px[i] = x;
    this.py[i] = y;
    this.pz[i] = z;
    this.vx[i] = vx;
    this.vy[i] = vy;
    this.vz[i] = vz;
    this.life[i] = foam ? 0.55 + Math.random() * 0.4 : 2 + Math.random();
    this.bounces[i] = foam ? 2 : 0;
    this.mesh.setColorAt(i, foam ? FOAM_WHITE : WATER_BLUE);
  }

  emitJet(origin: THREE.Vector3, dir: THREE.Vector3, dt: number, params: Params) {
    this.emitCarry += params.hose.rate * dt;
    const n = Math.floor(this.emitCarry);
    this.emitCarry -= n;
    const speed = params.hose.speed;
    for (let k = 0; k < n; k++) {
      const jx = (Math.random() - 0.5) * 1.6;
      const jy = (Math.random() - 0.5) * 1.6;
      const jz = (Math.random() - 0.5) * 1.6;
      this.spawnDrop(
        origin.x + dir.x * 0.3,
        origin.y + dir.y * 0.3,
        origin.z + dir.z * 0.3,
        dir.x * speed + jx,
        dir.y * speed + jy + 0.8,
        dir.z * speed + jz
      );
      this.life[this.alive - 1] = params.hose.life * (0.75 + Math.random() * 0.5);
    }
  }

  private kill(i: number) {
    const last = this.alive - 1;
    if (i !== last) {
      this.px[i] = this.px[last];
      this.py[i] = this.py[last];
      this.pz[i] = this.pz[last];
      this.vx[i] = this.vx[last];
      this.vy[i] = this.vy[last];
      this.vz[i] = this.vz[last];
      this.life[i] = this.life[last];
      this.bounces[i] = this.bounces[last];
      const c = this.mesh.instanceColor;
      if (c) {
        this.mesh.setColorAt(i, this.tmpColor.fromBufferAttribute(c as unknown as THREE.BufferAttribute, last));
      }
    }
    this.alive = last;
  }

  private cellKey(cx: number, cz: number) {
    return cx * 73856093 + cz * 19349663;
  }

  private rebuildGrid() {
    this.grid.clear();
    const insert = (minX: number, maxX: number, minZ: number, maxZ: number, minY: number, maxY: number, handle: number) => {
      if (minY > 30 || maxY < -3) return;
      const c0 = Math.floor((minX - DROP_R) / CELL);
      const c1 = Math.floor((maxX + DROP_R) / CELL);
      const d0 = Math.floor((minZ - DROP_R) / CELL);
      const d1 = Math.floor((maxZ + DROP_R) / CELL);
      for (let cx = c0; cx <= c1; cx++) {
        for (let cz = d0; cz <= d1; cz++) {
          const key = this.cellKey(cx, cz);
          let list = this.grid.get(key);
          if (!list) this.grid.set(key, (list = []));
          list.push(handle);
        }
      }
    };
    this.staticBoxes.length = 0;
    for (const s of this.statics) {
      // floor tiles / pond floors are handled analytically — skip anything flush with the ground
      if (s.max.y <= 0.01) continue;
      // negative handles index into staticBoxes
      this.staticBoxes.push(s);
      insert(s.min.x, s.max.x, s.min.z, s.max.z, s.min.y, s.max.y, -this.staticBoxes.length);
    }
    for (const prop of this.props.all.values()) {
      insert(prop.aabb.min.x, prop.aabb.max.x, prop.aabb.min.z, prop.aabb.max.z, prop.aabb.min.y, prop.aabb.max.y, prop.handle);
    }
  }

  update(dt: number, params: Params) {
    this.time += dt;
    this.splashSfxCooldown -= dt;
    for (const pond of this.ponds) pond.mat.uniforms.uTime.value = this.time;

    if (this.alive > 0) this.rebuildGrid();

    const g = GRAVITY_Y;
    for (let i = this.alive - 1; i >= 0; i--) {
      this.life[i] -= dt;
      if (this.life[i] <= 0) {
        this.kill(i);
        continue;
      }
      this.vy[i] += g * dt;
      let x = this.px[i] + this.vx[i] * dt;
      let y = this.py[i] + this.vy[i] * dt;
      let z = this.pz[i] + this.vz[i] * dt;

      const pond = this.pondAt(x, z);

      // pond entry
      if (pond && y < pond.region.surfaceY) {
        if (Math.random() < 0.12) this.addRipple(pond, x, z, 0.1);
        this.kill(i);
        continue;
      }

      // ground plane (only exists outside pond holes)
      if (!pond && y < DROP_R) {
        y = DROP_R;
        this.vy[i] *= -0.32;
        this.vx[i] *= 0.72;
        this.vz[i] *= 0.72;
        if (++this.bounces[i] >= 3) this.life[i] = Math.min(this.life[i], 0.25);
      }

      // hills (buried spheres): reflect off the sphere surface
      for (const d of this.domes) {
        const dx = x - d.cx;
        const dy = y - d.cy;
        const dz = z - d.cz;
        const rr = d.r + DROP_R;
        const distSq = dx * dx + dy * dy + dz * dz;
        if (distSq < rr * rr && distSq > 1e-6) {
          const dist = Math.sqrt(distSq);
          const nx = dx / dist;
          const ny = dy / dist;
          const nz = dz / dist;
          x = d.cx + nx * rr;
          y = d.cy + ny * rr;
          z = d.cz + nz * rr;
          const dot = this.vx[i] * nx + this.vy[i] * ny + this.vz[i] * nz;
          if (dot < 0) {
            this.vx[i] -= 1.3 * dot * nx;
            this.vy[i] -= 1.3 * dot * ny;
            this.vz[i] -= 1.3 * dot * nz;
            this.vx[i] *= 0.8;
            this.vy[i] *= 0.8;
            this.vz[i] *= 0.8;
            if (++this.bounces[i] >= 4) this.life[i] = Math.min(this.life[i], 0.3);
          }
          break;
        }
      }

      // arena walls
      if (Math.abs(x) > ARENA - 0.6) this.vx[i] *= -0.4;
      if (Math.abs(z) > ARENA - 0.6) this.vz[i] *= -0.4;

      // props + statics via grid
      const key = this.cellKey(Math.floor(x / CELL), Math.floor(z / CELL));
      const list = this.grid.get(key);
      if (list) {
        for (const handle of list) {
          let minX: number, maxX: number, minY: number, maxY: number, minZ: number, maxZ: number;
          let isProp = false;
          if (handle < 0) {
            const s = this.staticBoxes[-handle - 1];
            minX = s.min.x;
            maxX = s.max.x;
            minY = s.min.y;
            maxY = s.max.y;
            minZ = s.min.z;
            maxZ = s.max.z;
          } else {
            const prop = this.props.all.get(handle);
            if (!prop) continue;
            minX = prop.aabb.min.x;
            maxX = prop.aabb.max.x;
            minY = prop.aabb.min.y;
            maxY = prop.aabb.max.y;
            minZ = prop.aabb.min.z;
            maxZ = prop.aabb.max.z;
            isProp = true;
          }
          if (x < minX - DROP_R || x > maxX + DROP_R || y < minY - DROP_R || y > maxY + DROP_R || z < minZ - DROP_R || z > maxZ + DROP_R)
            continue;

          // smallest push-out
          const pxr = maxX + DROP_R - x;
          const pxl = x - (minX - DROP_R);
          const pyu = maxY + DROP_R - y;
          const pyd = y - (minY - DROP_R);
          const pzr = maxZ + DROP_R - z;
          const pzl = z - (minZ - DROP_R);
          const m = Math.min(pxr, pxl, pyu, pyd, pzr, pzl);
          const oldVx = this.vx[i];
          const oldVy = this.vy[i];
          const oldVz = this.vz[i];
          if (m === pyu) {
            y = maxY + DROP_R;
            this.vy[i] *= -0.3;
          } else if (m === pyd) {
            y = minY - DROP_R;
            this.vy[i] *= -0.3;
          } else if (m === pxr) {
            x = maxX + DROP_R;
            this.vx[i] *= -0.3;
          } else if (m === pxl) {
            x = minX - DROP_R;
            this.vx[i] *= -0.3;
          } else if (m === pzr) {
            z = maxZ + DROP_R;
            this.vz[i] *= -0.3;
          } else {
            z = minZ - DROP_R;
            this.vz[i] *= -0.3;
          }
          this.vx[i] *= 0.86;
          this.vy[i] *= 0.9;
          this.vz[i] *= 0.86;
          if (++this.bounces[i] >= 4) this.life[i] = Math.min(this.life[i], 0.3);

          if (isProp) {
            let imp = this.impulses.get(handle);
            if (!imp) this.impulses.set(handle, (imp = new THREE.Vector3()));
            imp.x += (oldVx - this.vx[i]) * DROP_MASS;
            imp.y += (oldVy - this.vy[i]) * DROP_MASS;
            imp.z += (oldVz - this.vz[i]) * DROP_MASS;
          }
          break;
        }
      }

      this.px[i] = x;
      this.py[i] = y;
      this.pz[i] = z;
    }

    // shove props hit by spray
    if (this.impulses.size) {
      const push = params.hose.push;
      for (const [handle, imp] of this.impulses) {
        imp.multiplyScalar(push);
        const cap = 3.5;
        if (imp.lengthSq() > cap * cap) imp.setLength(cap);
        this.world.applyImpulse(handle, [imp.x, imp.y, imp.z]);
        this.world.setBodyAwake(handle, true);
      }
      this.impulses.clear();
    }

    // write instances (velocity-stretched)
    for (let i = 0; i < this.alive; i++) {
      this.tmpVel.set(this.vx[i], this.vy[i], this.vz[i]);
      const speed = this.tmpVel.length();
      const stretch = Math.min(2.6, 1 + speed * 0.09);
      if (speed > 0.001) {
        this.tmpQuat.setFromUnitVectors(this.up, this.tmpVel.multiplyScalar(1 / speed));
      } else {
        this.tmpQuat.identity();
      }
      const fade = Math.min(1, this.life[i] * 2.2);
      this.tmpScale.set(fade, stretch * fade, fade);
      this.tmpPos.set(this.px[i], this.py[i], this.pz[i]);
      this.tmpMat.compose(this.tmpPos, this.tmpQuat, this.tmpScale);
      this.mesh.setMatrixAt(i, this.tmpMat);
    }
    this.mesh.count = this.alive;
    this.mesh.instanceMatrix.needsUpdate = true;
    if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;
  }

  /**
   * Buoyancy + water drag, called once per fixed physics step.
   * Impulse-based so step count never double-applies forces.
   */
  prePhysics(step: number, params: Params) {
    const buoy = params.world.buoyancy;

    for (const prop of this.props.all.values()) {
      const pond = this.pondAt(prop.pos.x, prop.pos.z);
      let frac = 0;
      if (pond && prop.aabb.min.y < pond.region.surfaceY) {
        frac = Math.min(
          1,
          (pond.region.surfaceY - prop.aabb.min.y) / Math.max(0.05, prop.aabb.max.y - prop.aabb.min.y)
        );
      }
      if (frac > 0) {
        const m = prop.mass;
        const fUp = m * -GRAVITY_Y * frac * buoy;
        const drag = 2.4 * frac;
        this.world.applyImpulse(prop.handle, [
          -prop.vel.x * m * drag * step,
          (fUp - prop.vel.y * m * drag) * step,
          -prop.vel.z * m * drag * step,
        ]);
        this.world.setBodyAwake(prop.handle, true);
        if (prop.submerged < 0.02 && prop.vel.y < -2.2) {
          this.splash(prop.pos.x, prop.pos.z, Math.min(1.6, m * Math.abs(prop.vel.y) * 0.05));
        }
      }
      prop.submerged = frac;
    }

    for (const rag of this.props.ragdolls) {
      for (const bone of rag.bones) {
        const pond = this.pondAt(bone.pos.x, bone.pos.z);
        let frac = 0;
        if (pond && bone.pos.y - bone.radius < pond.region.surfaceY) {
          frac = Math.min(1, (pond.region.surfaceY - (bone.pos.y - bone.radius)) / (bone.radius * 2));
        }
        if (frac > 0) {
          const m = bone.mass;
          const fUp = m * -GRAVITY_Y * frac * buoy * 1.15;
          const drag = 3 * frac;
          this.world.applyImpulse(bone.handle, [
            -bone.vel.x * m * drag * step,
            (fUp - bone.vel.y * m * drag) * step,
            -bone.vel.z * m * drag * step,
          ]);
          if (bone.submerged < 0.02 && bone.vel.y < -2.5) {
            this.splash(bone.pos.x, bone.pos.z, 0.7);
          }
        }
        bone.submerged = frac;
      }
    }
  }
}
