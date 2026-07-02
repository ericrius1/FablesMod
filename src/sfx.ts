// Procedural WebAudio placeholder SFX. No assets — everything synthesized.
// Audio context unlocks on the first user gesture (pointer lock click).

let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let sprayNode: { gain: GainNode; stop: () => void } | null = null;
let humNode: { gain: GainNode; oscA: OscillatorNode; oscB: OscillatorNode } | null = null;
let thrustNode: { gain: GainNode; src: AudioBufferSourceNode; sub: OscillatorNode } | null = null;
let volume = 0.22;

function ac(): AudioContext | null {
  if (!ctx) return null;
  if (ctx.state === 'suspended') void ctx.resume();
  return ctx;
}

export function initAudio() {
  if (ctx) return;
  try {
    ctx = new AudioContext();
    master = ctx.createGain();
    master.gain.value = volume;
    master.connect(ctx.destination);
  } catch {
    ctx = null;
  }
}

export function setVolume(v: number) {
  volume = v;
  if (master && ctx) master.gain.setTargetAtTime(v, ctx.currentTime, 0.05);
}

function env(node: GainNode, t0: number, attack: number, peak: number, decay: number) {
  node.gain.setValueAtTime(0, t0);
  node.gain.linearRampToValueAtTime(peak, t0 + attack);
  node.gain.exponentialRampToValueAtTime(0.0001, t0 + attack + decay);
}

function noiseBuffer(a: AudioContext, seconds: number) {
  const buf = a.createBuffer(1, Math.ceil(a.sampleRate * seconds), a.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  return buf;
}

function playNoise(peak: number, decay: number, filterType: BiquadFilterType, freq: number, q = 0.8) {
  const a = ac();
  if (!a || !master) return;
  const src = a.createBufferSource();
  src.buffer = noiseBuffer(a, decay + 0.1);
  const filter = a.createBiquadFilter();
  filter.type = filterType;
  filter.frequency.value = freq;
  filter.Q.value = q;
  const g = a.createGain();
  env(g, a.currentTime, 0.005, peak, decay);
  src.connect(filter).connect(g).connect(master);
  src.start();
  src.stop(a.currentTime + decay + 0.15);
}

function playTone(freq: number, endFreq: number, peak: number, decay: number, type: OscillatorType = 'sine') {
  const a = ac();
  if (!a || !master) return;
  const osc = a.createOscillator();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, a.currentTime);
  osc.frequency.exponentialRampToValueAtTime(Math.max(20, endFreq), a.currentTime + decay);
  const g = a.createGain();
  env(g, a.currentTime, 0.004, peak, decay);
  osc.connect(g).connect(master);
  osc.start();
  osc.stop(a.currentTime + decay + 0.1);
}

export const sfx = {
  spawn() {
    // soft low pop, easy on the ears even when spamming
    playTone(240, 165, 0.32, 0.12, 'sine');
  },
  tick() {
    // barely-there scroll tick for cycling spawner items
    playTone(330, 300, 0.07, 0.04, 'sine');
  },
  del() {
    playTone(380, 140, 0.3, 0.14, 'sine');
  },
  grab() {
    // airy two-note chime
    playTone(392, 523, 0.16, 0.28, 'sine');
    playTone(784, 880, 0.07, 0.34, 'sine');
  },
  release() {
    playTone(523, 392, 0.14, 0.26, 'sine');
  },
  launch() {
    playTone(120, 60, 0.5, 0.3, 'sine');
    playNoise(0.22, 0.2, 'bandpass', 700, 0.5);
  },
  snip() {
    // rope cut: quick pluck + fizz of the severed line
    playTone(880, 220, 0.35, 0.09, 'triangle');
    playNoise(0.18, 0.12, 'highpass', 2200);
  },
  boom() {
    playNoise(1.1, 0.7, 'lowpass', 320, 0.4);
    playTone(120, 34, 0.9, 0.55, 'sine');
  },
  splash(intensity = 1) {
    playNoise(0.35 * intensity, 0.3, 'bandpass', 2400, 0.6);
    playNoise(0.25 * intensity, 0.42, 'lowpass', 800);
  },
  impact(speed: number) {
    const s = Math.min(1, speed / 14);
    playNoise(0.16 + 0.4 * s, 0.07 + 0.08 * s, 'lowpass', 500 + 900 * s);
  },
  rope() {
    playTone(700, 1200, 0.35, 0.09, 'square');
  },
  toolSwitch() {
    playTone(523, 392, 0.12, 0.07, 'sine');
  },
  sprayStart() {
    const a = ac();
    if (!a || !master || sprayNode) return;
    const src = a.createBufferSource();
    src.buffer = noiseBuffer(a, 1);
    src.loop = true;
    const filter = a.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 2800;
    filter.Q.value = 0.5;
    const g = a.createGain();
    g.gain.setValueAtTime(0, a.currentTime);
    g.gain.linearRampToValueAtTime(0.3, a.currentTime + 0.08);
    src.connect(filter).connect(g).connect(master);
    src.start();
    sprayNode = {
      gain: g,
      stop: () => {
        g.gain.setTargetAtTime(0, a.currentTime, 0.06);
        src.stop(a.currentTime + 0.4);
      },
    };
  },
  sprayStop() {
    sprayNode?.stop();
    sprayNode = null;
  },
  humStart() {
    // ethereal hold pad: two soft detuned sines a fifth apart, slow bloom
    const a = ac();
    if (!a || !master || humNode) return;
    const oscA = a.createOscillator();
    oscA.type = 'sine';
    oscA.frequency.value = 98;
    const oscB = a.createOscillator();
    oscB.type = 'sine';
    oscB.frequency.value = 148; // ~fifth, slightly sharp -> gentle beating shimmer
    const gB = a.createGain();
    gB.gain.value = 0.45;
    const g = a.createGain();
    g.gain.setValueAtTime(0, a.currentTime);
    g.gain.linearRampToValueAtTime(0.055, a.currentTime + 0.45);
    oscA.connect(g);
    oscB.connect(gB).connect(g);
    g.connect(master);
    oscA.start();
    oscB.start();
    humNode = { gain: g, oscA, oscB };
  },
  humPitch(speed: number) {
    const a = ac();
    if (!a || !humNode) return;
    const lift = Math.min(26, speed * 1.4);
    humNode.oscA.frequency.setTargetAtTime(98 + lift, a.currentTime, 0.25);
    humNode.oscB.frequency.setTargetAtTime(148 + lift * 1.5, a.currentTime, 0.25);
  },
  humStop() {
    const a = ac();
    if (!a || !humNode) return;
    humNode.gain.gain.setTargetAtTime(0, a.currentTime, 0.18);
    humNode.oscA.stop(a.currentTime + 0.9);
    humNode.oscB.stop(a.currentTime + 0.9);
    humNode = null;
  },
  /** Shared rumble for all active thrusters; call every frame with the count. */
  thrustLoop(count: number) {
    const a = ac();
    if (!a || !master) return;
    if (count > 0 && !thrustNode) {
      const src = a.createBufferSource();
      src.buffer = noiseBuffer(a, 1);
      src.loop = true;
      const filter = a.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 240;
      const sub = a.createOscillator();
      sub.type = 'sine';
      sub.frequency.value = 52;
      const subGain = a.createGain();
      subGain.gain.value = 0.5;
      const g = a.createGain();
      g.gain.value = 0;
      src.connect(filter).connect(g);
      sub.connect(subGain).connect(g);
      g.connect(master);
      src.start();
      sub.start();
      thrustNode = { gain: g, src, sub };
    }
    if (thrustNode) {
      const target = count > 0 ? Math.min(0.18, 0.06 + count * 0.015) : 0;
      thrustNode.gain.gain.setTargetAtTime(target, a.currentTime, 0.1);
      if (count === 0) {
        const node = thrustNode;
        thrustNode = null;
        node.src.stop(a.currentTime + 0.5);
        node.sub.stop(a.currentTime + 0.5);
      }
    }
  },
};
