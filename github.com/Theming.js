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
  
  document.body.parentElement.classList.add('theme-' + (document.body.parentElement.getAttribute('data-color-mode') === 'dark' ? 'dark' : 'light'));
  
  CSS.add(`body {
    --color-canvas-default: var(--background-primary);
    --color-canvas-overlay: var(--background-secondary);
    --color-canvas-subtle: var(--background-secondary);
    --color-canvas-inset: var(--background-secondary-alt);

    --color-neutral-muted: var(--background-accent);
    --color-neutral-emphasis-plus: var(--background-accent);

    --color-fg-default: var(--text-normal);
    --color-fg-muted: var(--text-muted);
    --color-fg-subtle: var(--text-muted);
    --color-fg-on-emphasis: var(--text-normal);

    --color-accent-fg: var(--text-link);
    --color-accent-emphasis: var(--text-link);

    --color-scale-white: var(--interactive-normal);

    --color-border-default: var(--background-accent);
    --color-border-muted: var(--background-tertiary);

    --color-page-header-bg: var(--background-secondary-alt);

    --color-header-bg: var(--background-secondary);
    --color-header-text: var(--interactive-hover);
    --color-header-logo: var(--interactive-normal);

    --color-header-search-bg: var(--background-primary);
    --color-header-search-border: var(--background-accent);

    --color-btn-text: var(--interactive-normal);
    --color-btn-bg: var(--background-floating);
    --color-btn-border: var(--background-accent);

    --color-btn-primary-bg: var(--text-link);
    --color-btn-primary-text: var(--interactive-active);
    --color-btn-primary-border: var(--color-btn-border);

    --color-btn-primary-focus-bg: var(--color-btn-primary-bg);
    --color-btn-primary-focus-border: var(--color-btn-primary-border);

    --color-btn-primary-hover-bg: var(--color-btn-primary-bg);
    --color-btn-primary-hover-border: var(--color-btn-primary-border);


    --color-primer-border-active: var(--text-link);
  }

  .notification-indicator .mail-status {
    background: var(--text-link);
  }`);
};