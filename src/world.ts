import * as THREE from 'three';
import { BodyType, type PhysicsWorld } from './physics';

// Static level geometry. Every walkable/blocking static is an axis-aligned box
// so the player controller can use plain AABB resolution — except hills, which
// are buried static spheres (smooth domes) with an analytic height function.

export type StaticBox = { min: THREE.Vector3; max: THREE.Vector3 };

export type WaterRegion = {
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
  surfaceY: number;
  floorY: number;
};

export type Dome = { cx: number; cz: number; cy: number; r: number };

export type World = {
  scene: THREE.Scene;
  statics: StaticBox[];
  waters: WaterRegion[];
  domes: Dome[];
  sun: THREE.DirectionalLight;
  sunTarget: THREE.Object3D;
};

export const ARENA = 90; // half extent of the arena
const WALL_H = 4;
const TILE = 15;
const SLAB_HY = 1.1; // slabs span y in [-2.2, 0] so pit sides are solid

const SURFACE_Y = -0.5;
const FLOOR_Y = -2.2;

// Pond rects snapped to the tile grid (tiles fully inside get skipped).
const PONDS: WaterRegion[] = [
  { minX: 15, maxX: 30, minZ: -30, maxZ: -15, surfaceY: SURFACE_Y, floorY: FLOOR_Y }, // spawn pond
  { minX: -60, maxX: -30, minZ: 15, maxZ: 45, surfaceY: SURFACE_Y, floorY: FLOOR_Y }, // big lake
  { minX: 45, maxX: 60, minZ: 30, maxZ: 45, surfaceY: SURFACE_Y, floorY: FLOOR_Y }, // far pool
];

// Buried spheres → smooth grassy hills. cy = capHeight - r.
const DOMES: Dome[] = [
  { cx: -20, cz: -55, r: 26, cy: 5 - 26 },
  { cx: 40, cz: -45, r: 18, cy: 3.5 - 18 },
  { cx: 68, cz: 0, r: 14, cy: 2.8 - 14 },
  { cx: 0, cz: 58, r: 30, cy: 6 - 30 },
  { cx: -60, cz: -25, r: 12, cy: 2.5 - 12 },
];

function gridTexture(size: number, line: string, base: string, accent: string) {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d')!;
  g.fillStyle = base;
  g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 900; i++) {
    g.fillStyle = `rgba(255,255,255,${Math.random() * 0.03})`;
    g.fillRect(Math.random() * 256, Math.random() * 256, 2, 2);
  }
  g.strokeStyle = line;
  g.lineWidth = 2;
  g.strokeRect(0, 0, 256, 256);
  g.strokeStyle = accent;
  g.lineWidth = 1;
  g.beginPath();
  g.moveTo(128, 0);
  g.lineTo(128, 256);
  g.moveTo(0, 128);
  g.lineTo(256, 128);
  g.stroke();
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(size, size);
  tex.anisotropy = 4;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function skyDome() {
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: {
      topColor: { value: new THREE.Color('#141f38') },
      midColor: { value: new THREE.Color('#3d5a86') },
      horizonColor: { value: new THREE.Color('#e08a52') },
      sunDir: { value: new THREE.Vector3(0.55, 0.28, 0.35).normalize() },
    },
    vertexShader: /* glsl */ `
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        vec4 pos = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * pos;
        gl_Position.z = gl_Position.w; // pin to far plane
      }
    `,
    fragmentShader: /* glsl */ `
      varying vec3 vDir;
      uniform vec3 topColor;
      uniform vec3 midColor;
      uniform vec3 horizonColor;
      uniform vec3 sunDir;
      void main() {
        float h = clamp(vDir.y, 0.0, 1.0);
        vec3 sky = mix(midColor, topColor, pow(h, 0.75));
        sky = mix(horizonColor, sky, smoothstep(0.0, 0.28, h));
        float sun = pow(max(dot(normalize(vDir), sunDir), 0.0), 260.0);
        float glow = pow(max(dot(normalize(vDir), sunDir), 0.0), 8.0);
        sky += vec3(1.0, 0.82, 0.55) * sun * 1.6 + vec3(1.0, 0.6, 0.3) * glow * 0.35;
        sky = mix(sky, horizonColor * 0.55, smoothstep(0.0, -0.25, vDir.y));
        gl_FragColor = vec4(sky, 1.0);
      }
    `,
  });
  const dome = new THREE.Mesh(new THREE.SphereGeometry(520, 32, 18), mat);
  dome.frustumCulled = false;
  return dome;
}

/** Height of the tallest hill dome at (x, z), or -Infinity when off every dome. */
export function domeHeightAt(domes: Dome[], x: number, z: number): number {
  let h = -Infinity;
  for (const d of domes) {
    const dx = x - d.cx;
    const dz = z - d.cz;
    const q = d.r * d.r - dx * dx - dz * dz;
    if (q > 0) {
      const y = d.cy + Math.sqrt(q);
      if (y > h) h = y;
    }
  }
  return h;
}

export function buildWorld(world: PhysicsWorld): World {
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(new THREE.Color('#54596b'), 70, 420);

  scene.add(skyDome());

  // ── lights ───────────────────────────────────────────────────────────────
  const sun = new THREE.DirectionalLight('#ffd9b0', 2.8);
  sun.position.set(34, 46, 22);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -55;
  sun.shadow.camera.right = 55;
  sun.shadow.camera.top = 55;
  sun.shadow.camera.bottom = -55;
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 160;
  sun.shadow.bias = -0.0004;
  const sunTarget = new THREE.Object3D();
  scene.add(sunTarget);
  sun.target = sunTarget;
  scene.add(sun);
  scene.add(new THREE.HemisphereLight('#a8c2e0', '#4a5248', 0.85));
  scene.add(new THREE.AmbientLight('#4a5668', 0.55));

  // ── static builder ───────────────────────────────────────────────────────
  const statics: StaticBox[] = [];
  const floorTex = gridTexture(1, 'rgba(120,175,225,0.3)', '#3a414c', 'rgba(120,175,225,0.12)');
  const floorMat = new THREE.MeshStandardMaterial({ map: floorTex, roughness: 0.9, metalness: 0.05 });
  const wallMat = new THREE.MeshStandardMaterial({ color: '#6d7683', roughness: 0.85, metalness: 0.1 });
  const stoneMat = new THREE.MeshStandardMaterial({ color: '#39414d', roughness: 0.95 });
  const accentMat = new THREE.MeshStandardMaterial({
    color: '#586b7e',
    roughness: 0.6,
    metalness: 0.15,
    emissive: '#12395c',
    emissiveIntensity: 0.9,
  });

  function staticBox(
    cx: number,
    cy: number,
    cz: number,
    hx: number,
    hy: number,
    hz: number,
    mat: THREE.Material,
    opts: { friction?: number; texScale?: number } = {}
  ) {
    world.createBox({
      type: BodyType.Static,
      position: [cx, cy, cz],
      halfExtents: [hx, hy, hz],
      friction: opts.friction ?? 0.7,
    });
    statics.push({
      min: new THREE.Vector3(cx - hx, cy - hy, cz - hz),
      max: new THREE.Vector3(cx + hx, cy + hy, cz + hz),
    });
    let material = mat;
    if (opts.texScale && (mat as THREE.MeshStandardMaterial).map) {
      material = (mat as THREE.MeshStandardMaterial).clone();
      const map = (material as THREE.MeshStandardMaterial).map!.clone();
      map.repeat.set((hx * 2) / opts.texScale, (hz * 2) / opts.texScale);
      (material as THREE.MeshStandardMaterial).map = map;
    }
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(hx * 2, hy * 2, hz * 2), material);
    mesh.position.set(cx, cy, cz);
    mesh.receiveShadow = true;
    mesh.castShadow = cy + hy > 0.05;
    scene.add(mesh);
  }

  // ── tiled floor with pond holes ──────────────────────────────────────────
  const tileInPond = (x0: number, z0: number) =>
    PONDS.some((p) => x0 >= p.minX - 0.01 && x0 + TILE <= p.maxX + 0.01 && z0 >= p.minZ - 0.01 && z0 + TILE <= p.maxZ + 0.01);

  for (let x0 = -ARENA; x0 < ARENA; x0 += TILE) {
    for (let z0 = -ARENA; z0 < ARENA; z0 += TILE) {
      if (tileInPond(x0, z0)) continue;
      staticBox(x0 + TILE / 2, -SLAB_HY, z0 + TILE / 2, TILE / 2, SLAB_HY, TILE / 2, floorMat, { texScale: 4 });
    }
  }
  // pond floors
  for (const p of PONDS) {
    staticBox(
      (p.minX + p.maxX) / 2,
      p.floorY - 0.5,
      (p.minZ + p.maxZ) / 2,
      (p.maxX - p.minX) / 2,
      0.5,
      (p.maxZ - p.minZ) / 2,
      stoneMat
    );
  }

  // ── hills: buried static spheres ─────────────────────────────────────────
  const hillPalette = ['#4e7a4a', '#557f4c', '#487246', '#5b8551', '#50784d'];
  DOMES.forEach((d, i) => {
    world.createSphere({
      type: BodyType.Static,
      position: [d.cx, d.cy, d.cz],
      radius: d.r,
      friction: 0.75,
    });
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(d.r, 48, 28),
      new THREE.MeshStandardMaterial({ color: hillPalette[i % hillPalette.length], roughness: 0.95, metalness: 0 })
    );
    mesh.position.set(d.cx, d.cy, d.cz);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);
  });

  // ── perimeter walls ──────────────────────────────────────────────────────
  staticBox(0, WALL_H / 2, -ARENA - 0.6, ARENA + 1.2, WALL_H / 2, 0.6, wallMat);
  staticBox(0, WALL_H / 2, ARENA + 0.6, ARENA + 1.2, WALL_H / 2, 0.6, wallMat);
  staticBox(-ARENA - 0.6, WALL_H / 2, 0, 0.6, WALL_H / 2, ARENA + 1.2, wallMat);
  staticBox(ARENA + 0.6, WALL_H / 2, 0, 0.6, WALL_H / 2, ARENA + 1.2, wallMat);

  // ── stairs + overlook platform ───────────────────────────────────────────
  const px = -18;
  const pz = 14;
  for (let i = 0; i < 4; i++) {
    staticBox(px, (0.5 * (i + 1)) / 2, pz - 4.5 + i * 1.5, 2.6, 0.25 * (i + 1), 0.75, wallMat);
  }
  staticBox(px, 1.1, pz + 4.2, 3.2, 1.1, 3.2, accentMat); // platform, top y=2.2

  // ── pillars scattered across the map ─────────────────────────────────────
  const pillarSpots: [number, number][] = [
    [8, 12],
    [-6, -16],
    [30, 8],
    [-30, -8],
    [52, -20],
    [-45, 55],
    [20, 48],
    [-70, 10],
    [70, -55],
  ];
  for (const [x, z] of pillarSpots) {
    staticBox(x, 1.6, z, 0.7, 1.6, 0.7, accentMat);
  }

  return { scene, statics, waters: PONDS, domes: DOMES, sun, sunTarget };
}
