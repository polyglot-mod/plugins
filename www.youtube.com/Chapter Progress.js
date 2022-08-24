import Plugin from 'https://standard.polymod.dev/plugin.js';

const getEl = s => [...document.querySelectorAll(s)].find(x => x.clientHeight); // get last because random old invisible ones

const update = () => {
  const activeChapterEl = getEl('ytd-macro-markers-list-item-renderer[active]');
  if (!activeChapterEl) return;

  const videoEl = [...document.querySelectorAll('video')].pop();

  const CHAPTER_HEIGHT = activeChapterEl.clientHeight;

  const getChapterTime = el => {
    if (!el) return videoEl.duration; // no el = end
    const time = el.querySelector('#time').textContent;

    return time.split(':').reduce((acc, x, i, a) => acc += 60 ** (a.length - i - 1) * parseInt(x), 0);
  };

  const activeTime = getChapterTime(activeChapterEl);
  const currentTime = videoEl.currentTime;
  const nextTime = getChapterTime(activeChapterEl.nextSibling);

  const markerEl = activeChapterEl.querySelector('#active-indicator');

  const MARKER_HEIGHT = markerEl.clientHeight;

  markerEl.style.transform = `translateY(${CHAPTER_HEIGHT * (1 - ((nextTime - currentTime) / (nextTime - activeTime)))}px)`;
  // markerEl.style.borderRadius = '0';
  // markerEl.style.transform = `scaleY(${1 + (CHAPTER_HEIGHT / MARKER_HEIGHT) * (1 - ((nextTime - currentTime) / (nextTime - activeTime)))})`;
  // markerEl.style.transformOrigin = 'top';
};

let int;
export default new (class PluginWrapper extends Plugin {
  load() {
    int = setInterval(update, 200);
  }

  unload() {
    clearInterval(int);

    document.querySelectorAll('#active-indicator').forEach(x => x.style.transform = '');
  }
});