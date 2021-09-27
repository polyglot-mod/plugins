let CSS;

export const load = async () => {
  CSS = await import(`https://polyglot-mod.github.io/standard/src/css.js?_${Date.now()}`);

  const classRemap = {
    /* '.sc-laRQdt.eAQDAO': 'sidebar-2K8pFh',
    '.sc-nFqVA.dGrZZ': 'wrapper-3NnKdC guilds-1SWlCJ',
    '.sc-clsFYl.crRFlZ': 'container-1taM1r clickable-25tGDB',
    '.sc-clsFYl.dTEhWW': 'title-3qD0b- container-1r6BKw themed-ANHk51',
    '.sc-eGCaLh.ddHDBE': 'content-yTz4x3',
    '.sc-eGCaLh.ddHDBE > .sc-gTgzoy.VJVsA': 'membersWrap-2h-GB4 hiddenMembers-2dcs_q',
    '.sc-ctaXho.iDgXe': 'chatContent-a9vAAp' */
  };
  
  for (const [ toMap, remap ] of Object.entries(classRemap)) {
    document.querySelectorAll(`${toMap}`).forEach((x) => x.className += ' ' + remap);
  }

  document.body.parentElement.classList.add('theme-' + (document.documentElement.getAttribute('dark') === 'true' ? 'dark' : 'light'));
  
  CSS.add(`html:not(.style-scope)[dark], :not(.style-scope)[dark] {
    --yt-spec-brand-background-primary: var(--background-secondary) !important;

    --yt-spec-general-background-a: var(--background-primary) !important;
    --yt-spec-general-background-b: var(--background-secondary) !important;
    --ytd-searchbox-background: var(--background-floating) !important;
    --yt-spec-brand-background-solid: var(--background-secondary) !important;

    --ytd-searchbox-legacy-button-color: var(--background-tertiary) !important;

    --yt-spec-badge-chip-background: var(--background-secondary) !important;

    --yt-spec-text-primary: var(--text-normal) !important;
    --yt-spec-text-primary-inverse: var(--background-primary) !important;
    --yt-spec-text-secondary: var(--text-muted) !important;
    --yt-spec-text-disabled: var(--text-muted) !important;

    --yt-spec-brand-button-background: var(--brand-experiment) !important;
    --yt-spec-brand-link-text: var(--brand-experiment) !important;
    --yt-spec-call-to-action: var(--text-link) !important;

    --yt-spec-icon-active-other: var(--interactive-hover) !important;
  }
  
  html:not(.style-scope)[system-icons]:not(.style-scope)[dark], html:not(.style-scope)[system-icons] :not(.style-scope)[dark] {
    --yt-spec-icon-inactive: var(--interactive-normal) !important;
    --yt-spec-icon-disabled: var(--text-muted) !important;
    --yt-spec-brand-icon-inactive: var(--interactive-hover) !important;
  }`);
  
  
  // CSS.add(`@import "${prompt('Theme Link')}";`);
  // CSS.add(await (await fetch(prompt('Theme Link:'))).text());
};