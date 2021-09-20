const CSS = { // await import('https://polyglot-mod.github.io/standard/src/css.js');
  add: (css) => {
    const el = document.createElement('style');
  
    el.appendChild(document.createTextNode(css));
  
    document.body.appendChild(el);
  }
};

const classRemap = {
  '.mx_LeftPanel': 'sidebar-2K8pFh',
  '.mx_GroupFilterPanel': 'wrapper-3NnKdC guilds-1SWlCJ',
  '.mx_LeftPanel_userHeader': 'container-1taM1r clickable-25tGDB',
  '.mx_RoomHeader_wrapper': 'title-3qD0b- container-1r6BKw themed-ANHk51',
  '.mx_MainSplit': 'content-yTz4x3',
  '.mx_RoomView_body': 'chatContent-a9vAAp'
  /* '.??': 'membersWrap-2h-GB4 hiddenMembers-2dcs_q', */
};

for (const [ toMap, remap ] of Object.entries(classRemap)) {
  document.querySelectorAll(`${toMap}`).forEach((x) => x.className += ' ' + remap);
}

const theme = window.document.styleSheets[1].href.split('/').pop().split('.')[0];
document.body.parentElement.classList.add(theme);

const getVariablesArr = (css) => css.split(';').map((x) => x.trim()).filter((x) => x.startsWith('--'))
.map((x) => x.split(':'));

let ctx = document.createElement('canvas').getContext('2d');

const normaliseColor = (str) => { ctx.fillStyle = str; return ctx.fillStyle; };
const normaliseColors = (str) => str.replace(/rgb\(([0-9]+), ([0-9]+), ([0-9]+)\)/g, normaliseColor);

let sheet = window.document.styleSheets[1];

let themeVars = [
  ['--background-primary', '#15191e'],
  ['--background-secondary', 'rgba(33, 38, 44, 0.9)'],
  ['--background-tertiary', 'rgba(38, 39, 43, 0.82)'],
  ['--background-accent', 'rgba(141, 151, 165, 0.2)'],
  ['--text-muted', '#b9bec6'],
  ['--interactive-normal', '#a9b2bc'],
  ['--interactive-normal', '#8e99a4'],
  ['--interactive-hover', '#0dbd8b'],
  ['--background-accent', 'rgba(92, 100, 112, 0.3)'],
  ['--brand-experiment', '#238cf5'],
].map((v) => {
  if (v[1][0] === '#') {
    v[1] = `rgb(${parseInt(v[1].substring(1, 3), 16)}, ${parseInt(v[1].substring(3, 5), 16)}, ${parseInt(v[1].substring(5, 7), 16)})`;
  }

  return v;
});

for (let rule of sheet.cssRules) {
  if (!rule.selectorText) continue;

  for (let v of themeVars) {
    rule.style.cssText = rule.style.cssText.replaceAll(v[1], `var(${v[0]}, ${v[1]})`);
  }
}

CSS.add(`
body {
  color: var(--text-normal. #fff);
}

::-webkit-scrollbar {
  background-color: var(--scrollbar-thin-track, transparent);
}

::-webkit-scrollbar-thumb {
  background-color: var(--scrollbar-thin-thumb, hsla(0,0%,100%,.2));
}`);

CSS.add(`:root {
  --background-primary: #181920;
  --background-secondary: #1C1D25;
  --background-secondary-alt: #16171D;
  --background-tertiary: #1F2029;
  
  --channeltextarea-background: #1F2029;
  --background-message-hover: rgba(4, 4, 5, 0.07);
  
  --background-accent: #22232E;
  --background-floating: #1F2029;
  
  --scrollbar-thin-thumb: #9B78CC;
  --scrollbar-auto-thumb: #9B78CC;
  --scrollbar-auto-scrollbar-color-thumb: #9B78CC;
  
  --scrollbar-auto-track: #16171D;
  --scrollbar-auto-scrollbar-color-track: #16171D;
  
  --brand-experiment: #9B78CC;
}`);

// CSS.add(`@import "${prompt('Theme Link')}";`);
CSS.add(await (await fetch(prompt('Theme Link:'))).text());