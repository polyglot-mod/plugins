import Plugin from 'https://standard.polymod.dev/plugin.js';

let interval;

export default new (class PluginWrapper extends Plugin {
  load() {
    const update = () => {
      const el = document.querySelector('smp-toucan-player').shadowRoot.querySelector('smp-video-layout').shadowRoot.querySelector('smp-secondary-controls').shadowRoot.querySelector('style');
      if (!el._enabledSpeedControl) {
        el.innerHTML += `smp-playback-speed-button {
          display: block !important;
        }`;
        el._enabledSpeedControl = true;
      }
    };

    interval = setInterval(update, 500);
    update();
  }

  unload() {
    clearInterval(interval);
  }
});