import Plugin from 'https://standard.polymod.dev/plugin.js';

export default new (class PluginWrapper extends Plugin {
  load() {
    document.body.parentElement.classList.add('theme-dark');
    
    this.CSS.remap([
      ['--background-primary', '#ffffff'],
      ['--background-secondary', '#f6f6f6'],
      ['--background-secondary', '#fbfbfb'],
      ['--background-secondary-alt', 'rgba(255, 255, 255, 0.5)'],
      ['--background-floating', '#f8f9fa'],
      ['--background-accent', '#a2a9b1'],
      ['--interactive-active', '#000000'],
      ['--text-normal', '#202122'],
      ['--text-link', '#0645ad'],
      ['--text-link', '#3366bb'],
      ['--text-muted', '#54595d'],
      ['--brand-experiment', '#a7d7f9'],
      ['--brand-experiment', 'rgb(119, 193, 246)'],
      ['--text-muted', 'rgb(200, 204, 209)'],
      ['--background-secondary', 'rgb(232, 242, 248)']
    ]);
    
    this.CSS.add(`.mw-wiki-logo { /* Invert top left logo */
      filter: invert(1);
    }

    a { /* Fixes some links randomly being set blue color without important */
      color: var(--text-link, rgb(6, 69, 173)) !important;
    }

    /* .vector-menu-tabs li {
      background-image: linear-gradient(to top, var(--brand-experiment) 0px, var(--background-secondary) 2px, var(--background-primary, rgb(255, 255, 255)) 100%);
    } */`);
  }
});