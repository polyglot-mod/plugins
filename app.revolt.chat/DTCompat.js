const CSS = await import('https://polyglot-mod.github.io/standard/src/css.js');

const classRemap = {
  '.sc-laRQdt.eAQDAO': 'sidebar-2K8pFh',
  '.sc-nFqVA.dGrZZ': 'wrapper-3NnKdC guilds-1SWlCJ',
  '.sc-clsFYl.crRFlZ': 'container-1taM1r clickable-25tGDB',
  '.sc-clsFYl.dTEhWW': 'title-3qD0b- container-1r6BKw themed-ANHk51',
  '.sc-eGCaLh.ddHDBE': 'content-yTz4x3',
  '.sc-eGCaLh.ddHDBE > .sc-gTgzoy.VJVsA': 'membersWrap-2h-GB4 hiddenMembers-2dcs_q',
  '.sc-ctaXho.iDgXe': 'chatContent-a9vAAp'
};

for (const [ toMap, remap ] of Object.entries(classRemap)) {
  document.querySelectorAll(`${toMap}`).forEach((x) => x.className += ' ' + remap);
}

const lightMode = getComputedStyle(document.body.parentElement).getPropertyValue('--light');

document.body.parentElement.classList.add('theme-' + (lightMode === 'false' ? 'dark' : 'light'));

CSS.add(`body {
  --background: var(--background-tertiary);
  --secondary-background: var(--background-secondary);
  --primary-background: var(--background-primary);
  --tertiary-background: var(--background-tertiary);
  --message-box: var(--channeltextarea-background);

  --accent: var(--brand-color);

  --primary-header: var(--background-secondary-alt);
  --secondary-header: var(--background-secondary-alt);

  --tertiary-foreground: var(--text-muted);
  --foreground: var(--text-normal);
  --secondary-foreground: var(--header-secondary);

  --mention: var(--background-mentioned);

  --success: var(--text-positive);
  --warning: var(--text-warning);
  --error: var(--text-danger);

  --hover: var(--background-modifier-hover);

  --scrollbar-thumb: var(--scrollbar-thin-thumb);
  --scrollbar-track: var(--scrollbar-thin-track);

  --font: var(--font-primary);
  --monospace-font: var(--font-code);

  /* Fix specific variables from not updating with new values */
  --sidebar-active: var(--background-secondary);
}

/* Fix html background setting */
._11Ivv > .sc-gTgzoy.VJVsA {
  background-color: var(--background);
}

/* No background on role headers */
.dlphjA, .gpDXyx {
  background: none !important;
}`);

/* CSS.add(`:root {
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

  --brand-color: #9B78CC;
  --brand-color-hover: #896BB5;
}`); */

CSS.add(`@import "${prompt('Theme Link')}";`);
// CSS.add(await (await fetch(prompt('Theme Link:'))).text());