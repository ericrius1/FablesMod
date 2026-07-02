import { Pane } from 'tweakpane';
import { SCHEMA, type Params } from './params';

const LS_KEY = 'debug-params';

type Flat = { path: string[]; leaf: Record<string, unknown> };

const isLeaf = (n: unknown): n is { value: unknown } =>
  !!n && typeof n === 'object' && Object.prototype.hasOwnProperty.call(n, 'value');

function flatten(node: any, path: string[] = [], acc: Flat[] = []): Flat[] {
  for (const k in node) {
    const child = node[k];
    if (isLeaf(child)) acc.push({ path: [...path, k], leaf: child });
    else flatten(child, [...path, k], acc);
  }
  return acc;
}

function buildParams(node: any): any {
  const out: any = {};
  for (const k in node) out[k] = isLeaf(node[k]) ? node[k].value : buildParams(node[k]);
  return out;
}

const getAt = (o: any, p: string[]) => p.reduce((a, k) => a[k], o);
function setAt(o: any, p: string[], v: unknown) {
  getAt(o, p.slice(0, -1))[p.at(-1)!] = v;
}

// signature of a leaf's source config -> changing default/range busts the key
const sigOf = (leaf: Record<string, unknown>) => JSON.stringify(leaf);

export function createDebug() {
  const params = buildParams(SCHEMA) as Params;
  const FLAT = flatten(SCHEMA);

  // ── container (fixed, top-right). Holds pane + stats. ──────────────────
  const container = document.createElement('div');
  Object.assign(container.style, {
    position: 'fixed', top: '8px', right: '8px', zIndex: '10000',
    display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end',
  });
  document.body.appendChild(container);

  const stats = new Stats();
  container.appendChild(stats.dom);
  const pane = new Pane({ container, title: 'debug ( / hide · . reset · m landmarks )' });

  // ── persistence ────────────────────────────────────────────────────────
  function load() {
    let store: Record<string, { sig: string; value: unknown }> = {};
    try { store = JSON.parse(localStorage.getItem(LS_KEY) ?? '{}'); } catch {}
    for (const { path, leaf } of FLAT) {
      const e = store[path.join('.')];
      if (e && e.sig === sigOf(leaf)) setAt(params, path, e.value); // else keep source default
    }
  }
  function save() {
    const store: Record<string, { sig: string; value: unknown }> = {};
    for (const { path, leaf } of FLAT)
      store[path.join('.')] = { sig: sigOf(leaf), value: getAt(params, path) };
    localStorage.setItem(LS_KEY, JSON.stringify(store));
  }
  load();

  // ── build pane recursively from SCHEMA ──────────────────────────────────
  function build(parent: any, paramsNode: any, schemaNode: any) {
    for (const k in schemaNode) {
      const node = schemaNode[k];
      if (isLeaf(node)) {
        const { value: _v, ...opts } = node;
        parent.addBinding(paramsNode, k, opts);
      } else {
        const folder = parent.addFolder({ title: k, expanded: false });
        build(folder, paramsNode[k], node);
      }
    }
  }
  build(pane, params, SCHEMA);

  // ── landmark overlays registry ──────────────────────────────────────────
  const handlers: Array<(on: boolean) => void> = [];
  const applyLandmarks = () => handlers.forEach((fn) => fn(params.debug.landmarks));
  function onLandmarks(fn: (on: boolean) => void) {
    handlers.push(fn);
    fn(params.debug.landmarks); // init to current state
  }

  let lastLandmarks = params.debug.landmarks;
  pane.on('change', () => {
    save();
    if (params.debug.landmarks !== lastLandmarks) {
      lastLandmarks = params.debug.landmarks;
      applyLandmarks();
    }
  });

  // ── actions ──────────────────────────────────────────────────────────────
  function reset() {
    localStorage.removeItem(LS_KEY);
    for (const { path, leaf } of FLAT) setAt(params, path, leaf.value);
    pane.refresh();
    lastLandmarks = params.debug.landmarks;
    applyLandmarks();
  }
  function toggleLandmarks() {
    params.debug.landmarks = !params.debug.landmarks;
    lastLandmarks = params.debug.landmarks;
    pane.refresh();
    save();
    applyLandmarks();
  }
  let visible = true;
  function toggleHUD() {
    visible = !visible;
    container.style.display = visible ? 'flex' : 'none';
  }

  // ── keybinds ───────────────────────────────────────────────────────────
  addEventListener('keydown', (e) => {
    const t = e.target as HTMLElement | null;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
    if (e.key === '/') { e.preventDefault(); toggleHUD(); }
    else if (e.key === '.') { reset(); }
    else if (e.key === 'm' || e.key === 'M') { toggleLandmarks(); }
  });

  applyLandmarks();
  return { params, pane, stats, onLandmarks };
}

// ── dependency-free FPS + frametime panel ──────────────────────────────────
class Stats {
  dom = document.createElement('div');
  private fps = document.createElement('span');
  private ms = document.createElement('span');
  private last = performance.now();
  private acc = 0;
  private frames = 0;
  constructor() {
    Object.assign(this.dom.style, {
      font: '11px ui-monospace, monospace', color: '#0f0', background: 'rgba(0,0,0,.6)',
      padding: '3px 6px', borderRadius: '4px', display: 'flex', gap: '10px',
      pointerEvents: 'none', userSelect: 'none',
    });
    this.dom.append(this.fps, this.ms);
  }
  update() {
    const now = performance.now();
    this.acc += now - this.last;
    this.last = now;
    this.frames++;
    if (this.acc >= 500) {
      const ms = this.acc / this.frames;
      this.fps.textContent = `${Math.round(1000 / ms)} fps`;
      this.ms.textContent = `${ms.toFixed(2)} ms`;
      this.acc = 0;
      this.frames = 0;
    }
  }
}
