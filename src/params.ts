// params.ts — defaults + ranges + folder layout, colocated. Edit here only.
// `p(default, opts)` — opts are Tweakpane binding options (min/max/step/...).
function p<T>(value: T, opts: Record<string, unknown> = {}) {
  return { value, ...opts };
}

export const SCHEMA = {
  player: {
    speed: p(6.2, { min: 2, max: 16, step: 0.1 }),
    sprintMult: p(1.75, { min: 1, max: 3, step: 0.05 }),
    jumpSpeed: p(7.6, { min: 3, max: 16, step: 0.1 }),
    gravity: p(20, { min: 4, max: 40, step: 0.5 }),
    shove: p(0.65, { min: 0, max: 2, step: 0.05 }),
  },
  physgun: {
    stiffness: p(14, { min: 2, max: 40, step: 0.5 }),
    throwSpeed: p(34, { min: 5, max: 80, step: 1 }),
    launchMax: p(90, { min: 20, max: 160, step: 2 }),
    chargeTime: p(1.2, { min: 0.3, max: 3, step: 0.1 }),
    spinSpeed: p(7, { min: 1, max: 20, step: 0.5 }),
  },
  hose: {
    rate: p(700, { min: 50, max: 2000, step: 10 }),
    speed: p(20, { min: 5, max: 40, step: 0.5 }),
    push: p(2.4, { min: 0, max: 10, step: 0.1 }),
    life: p(2.8, { min: 0.5, max: 6, step: 0.1 }),
  },
  boom: {
    radius: p(6.5, { min: 1, max: 16, step: 0.25 }),
    impulse: p(46, { min: 4, max: 160, step: 1 }),
  },
  thruster: {
    power: p(30, { min: 5, max: 90, step: 1 }),
  },
  world: {
    timeScale: p(1.0, { min: 0.05, max: 1.5, step: 0.05 }),
    buoyancy: p(1.7, { min: 0, max: 4, step: 0.05 }),
  },
  rendering: {
    exposure: p(1.08, { min: 0.3, max: 2.5, step: 0.01 }),
  },
  audio: {
    volume: p(0.22, { min: 0, max: 1, step: 0.01 }),
  },
  debug: {
    landmarks: p(false), // toggled by `m` + checkbox
  },
};

// ── types derived from the schema (so params.player.speed is `number`) ──
type LeafValue<L> = L extends { value: infer V } ? V : never;
type ParamsOf<S> = {
  [K in keyof S]: S[K] extends { value: unknown } ? LeafValue<S[K]> : ParamsOf<S[K]>;
};
export type Params = ParamsOf<typeof SCHEMA>;
