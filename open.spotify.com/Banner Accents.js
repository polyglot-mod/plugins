import Plugin from 'https://standard.polymod.dev/plugin.js';

let interval;

export default new (class PluginWrapper extends Plugin {
  load() {
    const update = () => {
      const el = document.querySelector('.EGbXItTF_kUHbao1jeCp') || document.querySelector('.euOnte9wvOF0D_SGxEZ9');
      if (!el) return;

      const color = el.style.backgroundColor;

      document.body.style.setProperty('--brand-experiment', color);
    };

    interval = setInterval(update, 200);
    update();
  }

  unload() {
    clearInterval(interval);
  }
});