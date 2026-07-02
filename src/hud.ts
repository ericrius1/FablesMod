import { TOOL_DEFS, type ToolId, type SpawnItem } from './tools';

export class Hud {
  private toolbar = document.getElementById('toolbar')!;
  private hint = document.getElementById('tool-hint')!;
  private status = document.getElementById('status-line')!;
  private help = document.getElementById('help-card')!;
  private crosshair = document.getElementById('crosshair')!;
  private overlay = document.getElementById('lock-overlay')!;
  private slots = new Map<ToolId, HTMLElement>();
  private helpTimer = 0;

  constructor() {
    for (let i = 0; i < TOOL_DEFS.length; i++) {
      const def = TOOL_DEFS[i];
      const el = document.createElement('div');
      el.className = 'tool-slot';
      el.style.setProperty('--tool-color', def.color);
      el.innerHTML = `<span class="key">${i + 1}</span><span class="name">${def.name}</span><span class="sub"></span>`;
      this.toolbar.appendChild(el);
      this.slots.set(def.id, el);
    }
    // auto-fade help after a while; `h` brings it back
    this.helpTimer = window.setTimeout(() => this.help.classList.add('hidden'), 14000);
  }

  bindPlay(onClick: () => void) {
    document.getElementById('play-btn')!.addEventListener('click', onClick);
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) onClick();
    });
  }

  setLocked(locked: boolean) {
    this.overlay.classList.toggle('hidden', locked);
  }

  setActiveTool(id: ToolId, hint: string) {
    for (const [tid, el] of this.slots) el.classList.toggle('active', tid === id);
    this.hint.textContent = hint;
  }

  setSpawnItem(item: SpawnItem) {
    const el = this.slots.get('spawner');
    if (el) el.querySelector('.sub')!.textContent = `◂ ${item.toUpperCase()} ▸`;
  }

  setHint(text: string) {
    this.hint.textContent = text;
  }

  setStatus(text: string) {
    this.status.textContent = text;
  }

  toggleHelp() {
    window.clearTimeout(this.helpTimer);
    this.help.classList.toggle('hidden');
  }

  pulse() {
    this.crosshair.classList.remove('pulse');
    void this.crosshair.offsetWidth; // restart animation
    this.crosshair.classList.add('pulse');
    window.setTimeout(() => this.crosshair.classList.remove('pulse'), 90);
  }
}
