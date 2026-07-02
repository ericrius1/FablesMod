import * as THREE from 'three';
import './styles.css';
import { createDebug } from './debug';
import { initPhysics, FIXED_STEP, SUBSTEPS } from './physics';
import { buildWorld } from './world';
import { Props } from './props';
import { Player } from './player';
import { Fluid } from './fluid';
import { Tools, TOOL_DEFS, type ToolId } from './tools';
import { Hud } from './hud';
import { initAudio, setVolume, sfx } from './sfx';

const TOOL_HINTS: Record<ToolId, string> = {
  physgun: 'LMB grab · tap drop / hold to charge launch · RMB launch · scroll distance · R spin · C cut rope',
  spawner: 'LMB spawn · RMB delete · scroll item',
  hose: 'hold LMB to spray',
  boom: 'LMB boom · RMB mega boom',
  rope: 'LMB link two props · LMB a rope (or C) cuts it · RMB clear all',
  thruster: 'LMB strap a rocket to a prop · RMB clear thrusters',
};

async function boot() {
  const { params, pane, stats, onLandmarks } = createDebug();
  const { world } = await initPhysics();
  const level = buildWorld(world);
  const scene = level.scene;

  const props = new Props(world, scene);
  props.populateInitial();

  const player = new Player(world, level.statics, level.waters, level.domes, innerWidth / innerHeight);
  const fluid = new Fluid(scene, world, props, level.statics, level.waters, level.domes);
  const tools = new Tools(world, props, player, fluid, scene);
  const hud = new Hud();

  // ── renderer ───────────────────────────────────────────────────────────────
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  document.getElementById('app')!.appendChild(renderer.domElement);

  // ── landmarks ─────────────────────────────────────────────────────────────
  const axes = new THREE.AxesHelper(4);
  axes.position.y = 0.02;
  const grid = new THREE.GridHelper(84, 42, 0x5588bb, 0x27303c);
  grid.position.y = 0.015;
  scene.add(axes, grid);
  onLandmarks((on) => {
    axes.visible = on;
    grid.visible = on;
  });

  // ── pointer lock + input ──────────────────────────────────────────────────
  const canvas = renderer.domElement;
  let locked = false;
  // pointer lock can be unavailable (embedded previews, permissions policy);
  // fall back to playing with a visible cursor — movementX/Y still works
  let lockFallback = false;
  const requestLock = () => {
    initAudio();
    const req = canvas.requestPointerLock() as Promise<void> | undefined;
    req?.catch(() => {
      lockFallback = true;
      locked = true;
      hud.setLocked(true);
    });
  };
  hud.bindPlay(requestLock);
  document.addEventListener('pointerlockchange', () => {
    locked = document.pointerLockElement === canvas || lockFallback;
    hud.setLocked(locked);
    if (!locked) tools.onMouseUp(0, params);
  });
  document.addEventListener('mousemove', (e) => {
    if (locked) player.onMouseDelta(e.movementX, e.movementY);
  });
  addEventListener('mousedown', (e) => {
    if (locked) tools.onMouseDown(e.button, params);
  });
  addEventListener('mouseup', (e) => {
    if (locked) tools.onMouseUp(e.button, params);
  });
  addEventListener('contextmenu', (e) => e.preventDefault());
  addEventListener(
    'wheel',
    (e) => {
      if (locked) tools.onWheel(e.deltaY);
    },
    { passive: true }
  );

  let zeroG = false;
  let slowMo = false;
  addEventListener('keydown', (e) => {
    const t = e.target as HTMLElement | null;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
    const idx = ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6'].indexOf(e.code);
    if (idx >= 0) {
      tools.setTool(TOOL_DEFS[idx].id);
      return;
    }
    switch (e.code) {
      case 'KeyG':
        zeroG = !zeroG;
        props.setZeroG(zeroG);
        sfx.toolSwitch();
        break;
      case 'KeyF':
        slowMo = !slowMo;
        params.world.timeScale = slowMo ? 0.22 : 1;
        pane.refresh();
        sfx.toolSwitch();
        break;
      case 'KeyX':
        tools.physgun.forceRelease();
        tools.clearRopes();
        tools.clearThrusters();
        props.clearAll();
        sfx.del();
        break;
      case 'KeyH':
        hud.toggleHelp();
        break;
      case 'KeyC':
        tools.cutRopeAction();
        break;
    }
  });

  addEventListener('resize', () => {
    player.camera.aspect = innerWidth / innerHeight;
    player.camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });

  // ── HUD wiring ────────────────────────────────────────────────────────────
  tools.onToolChanged = (id) => hud.setActiveTool(id, TOOL_HINTS[id]);
  tools.onSpawnItemChanged = (item) => hud.setSpawnItem(item);
  tools.onAction = () => hud.pulse();
  hud.setActiveTool('physgun', TOOL_HINTS.physgun);
  hud.setSpawnItem(tools.spawnItem);

  // ── diagnostics ───────────────────────────────────────────────────────────
  const diag: Record<string, (...args: never[]) => unknown> & { stepFrames?: (n?: number) => void } = {
    spawn: (shape = 'crate', x = 0, y = 3, z = 10) =>
      props.spawn(shape as never, new THREE.Vector3(x, y, z)) !== undefined,
    ragdoll: (x = 0, y = 3, z = 10) => props.spawnRagdoll(new THREE.Vector3(x, y, z)) !== undefined,
    boomAt: (x: number, y: number, z: number, r = 6, imp = 46) => world.explode([x, y, z], r, 1.3, imp),
    setTool: (id: ToolId) => tools.setTool(id),
    counts: () => ({ props: props.count, ragdolls: props.ragdolls.length, droplets: fluid.dropletCount }),
    player: () => ({ pos: player.pos.toArray(), grounded: player.grounded, inWater: player.inWater }),
    renderer: () => ({ calls: renderer.info.render.calls, tris: renderer.info.render.triangles }),
    teleport: (x: number, y: number, z: number, yaw = 0, pitch = 0) => {
      player.pos.set(x, y, z);
      player.vel.set(0, 0, 0);
      player.yaw = yaw;
      player.pitch = pitch;
    },
    hoseBurst: (seconds = 0.5) => {
      const origin = player.eye;
      const dir = player.viewDir();
      fluid.emitJet(origin, dir, seconds, params);
    },
    forceLock: (on: boolean) => {
      locked = on;
    },
    ropes: () => tools.ropeCount,
    thrusters: () => tools.thrusterCount,
    grabAim: () => {
      const ok = tools.physgun.tryGrab();
      return { grabbed: ok, holding: tools.physgun.holding };
    },
    dropHeld: () => tools.physgun.drop(),
    physState: () => ({
      holding: tools.physgun.holding,
      charging: tools.physgun.charging,
      charge: tools.physgun.charge,
      holdDist: tools.physgun.holdDist,
      heldPos: tools.physgun.held
        ? (tools.physgun.held.kind === 'prop'
            ? tools.physgun.held.prop!.pos.toArray()
            : tools.physgun.held.bone!.pos.toArray()
          ).map((v) => Math.round(v * 100) / 100)
        : null,
    }),
    launchHeld: () => tools.physgun.launch(params),
    lastProps: (n = 3) => {
      const arr = [...props.all.values()].slice(-n);
      return arr.map((p) => ({ shape: p.shape, pos: p.pos.toArray().map((v) => Math.round(v * 100) / 100) }));
    },
    propYs: () => {
      const ys: Record<string, number[]> = {};
      for (const prop of props.all.values()) {
        (ys[prop.shape] ??= []).push(Math.round(prop.pos.y * 100) / 100);
      }
      for (const k of Object.keys(ys)) ys[k] = ys[k].slice(0, 8);
      return ys;
    },
  };
  (window as never as { __MOD__: typeof diag }).__MOD__ = diag;
  (window as never as { __THREE_GAME_DIAGNOSTICS__: typeof diag }).__THREE_GAME_DIAGNOSTICS__ = diag;

  // ── main loop ─────────────────────────────────────────────────────────────
  let last = performance.now();
  let accumulator = 0;
  let statusTick = 0;

  const frame = (now: number) => {
    const rawDt = Math.min((now - last) / 1000, 0.05);
    last = now;
    const dt = rawDt * params.world.timeScale; // world time (slow-mo); player stays realtime

    setVolume(params.audio.volume);
    renderer.toneMappingExposure = params.rendering.exposure;

    // tools first (physgun servo velocities), then player (kinematic mirror)
    const heldHandle = tools.update(dt, rawDt, params);
    player.update(rawDt, params, props, heldHandle, locked);

    // shadow camera follows the player across the big map
    level.sun.position.set(player.pos.x + 34, player.pos.y + 46, player.pos.z + 22);
    level.sunTarget.position.copy(player.pos);

    // fixed-step physics with per-step fluid impulses (buoyancy/drag)
    accumulator += dt;
    let steps = 0;
    while (accumulator >= FIXED_STEP && steps < 4) {
      fluid.prePhysics(FIXED_STEP, params);
      tools.prePhysics(FIXED_STEP, params);
      world.step(FIXED_STEP, SUBSTEPS);
      accumulator -= FIXED_STEP;
      steps++;
    }
    if (accumulator > FIXED_STEP * 4) accumulator = FIXED_STEP; // spiral-of-death guard

    // impact SFX from engine hit events
    if (steps > 0) {
      const hits = world.readHitEvents(32);
      let played = 0;
      for (const hit of hits) {
        if (played >= 3) break;
        if (hit.approachSpeed > 3) {
          sfx.impact(hit.approachSpeed);
          played++;
        }
      }
    }

    props.sync();
    fluid.update(dt, params);

    // camera shake after player positioned the camera
    if (tools.shake > 0.001) {
      const s = tools.shake * 0.05;
      player.camera.position.x += (Math.random() - 0.5) * s;
      player.camera.position.y += (Math.random() - 0.5) * s;
      player.camera.rotation.z += (Math.random() - 0.5) * tools.shake * 0.01;
    }

    if (++statusTick % 20 === 0) {
      const flags = [
        zeroG ? 'ZERO-G' : '',
        slowMo ? 'SLOW-MO' : '',
        player.inWater ? 'SWIMMING' : '',
        tools.ropeCount ? `${tools.ropeCount} ropes` : '',
        tools.thrusterCount ? `${tools.thrusterCount} thrusters` : '',
      ]
        .filter(Boolean)
        .join(' · ');
      hud.setStatus(
        `${props.count} props · ${props.ragdolls.length} dolls · ${fluid.dropletCount} drops${flags ? '\n' + flags : ''}`
      );
    }

    renderer.render(scene, player.camera);
    stats.update();
  };
  renderer.setAnimationLoop(frame);

  // headless/debug: advance the sim without rAF (used by automated checks)
  diag.stepFrames = (n = 60) => {
    for (let i = 0; i < n; i++) {
      last = performance.now() - 16.6;
      frame(performance.now());
    }
  };
}

void boot();
