import * as THREE from 'three';
import type { PhysicsWorld } from './physics';
import type { Props, Prop, Bone } from './props';
import type { Player } from './player';
import type { Params } from './params';
import { sfx } from './sfx';

// Gravity-gun: velocity-servo hold, scroll distance, R spin, RMB launch.

const BEAM_POINTS = 24;

function glowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d')!;
  const grad = g.createRadialGradient(32, 32, 2, 32, 32, 30);
  grad.addColorStop(0, 'rgba(190,230,255,1)');
  grad.addColorStop(0.4, 'rgba(110,190,255,0.55)');
  grad.addColorStop(1, 'rgba(60,140,255,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

export class Physgun {
  held: { handle: number; kind: 'prop' | 'bone'; prop?: Prop; bone?: Bone } | null = null;
  holdDist = 4;

  private world: PhysicsWorld;
  private props: Props;
  private player: Player;
  private muzzle: THREE.Object3D;
  private raycaster = new THREE.Raycaster();
  private beam: THREE.Line;
  private beamGeo: THREE.BufferGeometry;
  private glow: THREE.Sprite;
  private holdLight: THREE.PointLight;
  private velHistory: THREE.Vector3[] = [];
  private tmpV = new THREE.Vector3();
  private tmpV2 = new THREE.Vector3();
  private tmpV3 = new THREE.Vector3();

  constructor(world: PhysicsWorld, props: Props, player: Player, scene: THREE.Scene, muzzle: THREE.Object3D) {
    this.world = world;
    this.props = props;
    this.player = player;
    this.muzzle = muzzle;
    this.raycaster.far = 60;

    this.beamGeo = new THREE.BufferGeometry();
    this.beamGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(BEAM_POINTS * 3), 3));
    this.beam = new THREE.Line(
      this.beamGeo,
      new THREE.LineBasicMaterial({
        color: '#7fd0ff',
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    this.beam.frustumCulled = false;
    this.beam.visible = false;
    scene.add(this.beam);

    this.glow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTexture(),
        color: '#9fdcff',
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    this.glow.scale.setScalar(1.6);
    this.glow.visible = false;
    scene.add(this.glow);

    this.holdLight = new THREE.PointLight('#66bbff', 0, 9);
    scene.add(this.holdLight);
  }

  get holding() {
    return this.held !== null;
  }

  private heldPos(): THREE.Vector3 | null {
    if (!this.held) return null;
    return this.held.kind === 'prop' ? this.held.prop!.pos : this.held.bone!.pos;
  }

  tryGrab(): boolean {
    const eye = this.player.eye;
    const dir = this.player.viewDir(this.tmpV);
    this.raycaster.set(eye, dir);
    const hits = this.raycaster.intersectObjects(this.props.raycastTargets(), true);
    for (const hit of hits) {
      const handle = this.props.handleFromHit(hit);
      if (handle === undefined) continue;
      const prop = this.props.all.get(handle);
      const bone = this.props.boneByHandle.get(handle);
      if (!prop && !bone) continue;
      this.held = prop ? { handle, kind: 'prop', prop } : { handle, kind: 'bone', bone };
      this.holdDist = Math.max(2.2, Math.min(12, hit.distance));
      this.world.setBodyGravityScale(handle, 0);
      this.world.setBodyAwake(handle, true);
      this.velHistory.length = 0;
      this.beam.visible = true;
      this.glow.visible = true;
      this.holdLight.intensity = 14;
      sfx.grab();
      sfx.humStart();
      return true;
    }
    return false;
  }

  adjustDistance(delta: number) {
    if (this.held) this.holdDist = Math.max(1.8, Math.min(14, this.holdDist + delta));
  }

  drop() {
    if (!this.held) return;
    this.world.setBodyGravityScale(this.held.handle, this.props.zeroG ? 0 : 1);
    // let it keep its servo velocity — feels like a real release
    this.endHold();
    sfx.release();
  }

  launch(params: Params) {
    if (!this.held) return;
    const dir = this.player.viewDir(this.tmpV);
    const speed = params.physgun.throwSpeed;
    const handle = this.held.handle;
    this.world.setBodyGravityScale(handle, this.props.zeroG ? 0 : 1);
    if (this.held.kind === 'bone') {
      const rag = this.props.ragdollOfBone(handle);
      if (rag) this.world.humanSetVelocity(rag.human, [dir.x * speed, dir.y * speed + 2, dir.z * speed]);
    } else {
      this.world.setBodyVelocity(
        handle,
        [dir.x * speed, dir.y * speed + 1.5, dir.z * speed],
        [Math.random() * 6 - 3, Math.random() * 6 - 3, Math.random() * 6 - 3]
      );
    }
    this.endHold();
    sfx.launch();
  }

  private endHold() {
    this.held = null;
    this.beam.visible = false;
    this.glow.visible = false;
    this.holdLight.intensity = 0;
    sfx.humStop();
  }

  /** Held body was destroyed externally — clear state without touching physics. */
  forceRelease() {
    if (this.held) this.endHold();
  }

  /** Returns the held handle (or 0) so the player collider can ignore it. */
  update(dt: number, params: Params, spinning: boolean): number {
    if (!this.held) return 0;
    const pos = this.heldPos();
    if (!pos) {
      this.endHold();
      return 0;
    }

    const eye = this.player.eye;
    const dir = this.player.viewDir(this.tmpV);
    const target = this.tmpV2.copy(eye).addScaledVector(dir, this.holdDist);
    target.y = Math.max(target.y, 0.35); // keep props from burying into the floor

    const toTarget = this.tmpV3.copy(target).sub(pos);
    const vel = toTarget.multiplyScalar(params.physgun.stiffness);
    const maxV = 42;
    if (vel.lengthSq() > maxV * maxV) vel.setLength(maxV);

    let angular: [number, number, number];
    if (spinning) {
      const s = params.physgun.spinSpeed;
      angular = [0, s, dir.x * s * 0.4];
    } else {
      const cur = this.world.getBodyVelocity(this.held.handle);
      angular = [cur.angular[0] * 0.9, cur.angular[1] * 0.9, cur.angular[2] * 0.9];
    }
    this.world.setBodyVelocity(this.held.handle, [vel.x, vel.y, vel.z], angular);
    this.world.setBodyAwake(this.held.handle, true);
    sfx.humPitch(vel.length());

    // velocity history for release inheritance (kept small on purpose)
    if (this.velHistory.length > 5) this.velHistory.shift();
    this.velHistory.push(vel.clone());

    // ── beam + glow visuals ──────────────────────────────────────────────────
    const start = this.muzzle.getWorldPosition(new THREE.Vector3());
    const attr = this.beamGeo.getAttribute('position') as THREE.BufferAttribute;
    const mid = new THREE.Vector3().lerpVectors(start, pos, 0.45).addScaledVector(dir, -0.4);
    mid.y -= 0.15;
    const sag = Math.sin(performance.now() * 0.008) * 0.06;
    for (let i = 0; i < BEAM_POINTS; i++) {
      const t = i / (BEAM_POINTS - 1);
      const a = new THREE.Vector3().lerpVectors(start, mid, t);
      const b = new THREE.Vector3().lerpVectors(mid, pos, t);
      const p = a.lerp(b, t);
      p.y += Math.sin(t * Math.PI) * sag;
      attr.setXYZ(i, p.x, p.y, p.z);
    }
    attr.needsUpdate = true;
    this.glow.position.copy(pos);
    this.glow.scale.setScalar(1.3 + Math.sin(performance.now() * 0.012) * 0.25);
    this.holdLight.position.copy(pos);

    void dt;
    return this.held.handle;
  }
}
