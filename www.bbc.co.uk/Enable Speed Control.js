import Plugin from 'https://standard.polymod.dev/plugin.js';

let interval;

export default new (class PluginWrapper extends Plugin {
  load() {
    let lastBarWidth = '';

    const update = () => {
      const frameDoc = document.querySelector('#smphtml5iframebbcMediaPlayer0').contentDocument;

      const barFiller = frameDoc.querySelector('.p_controlBarFiller');
      if (barFiller.style.width === lastBarWidth) return;

      barFiller.style.width = (parseFloat(barFiller.style.width.slice(0, -2)) - 40) + 'px';
      lastBarWidth = barFiller.style.width;

      const speedButton = frameDoc.querySelector('.p_speedButton');
      speedButton.style.right = '179px';
      speedButton.style.display = 'block';
    };

    interval = setInterval(update, 200);
    update();
  }

  unload() {
    clearInterval(interval);
  }
});