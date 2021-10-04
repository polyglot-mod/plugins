import Plugin from 'https://standard.polymod.dev/plugin.js';

export default new (class PluginWrapper extends Plugin {
  load() {
    document.body.parentElement.classList.add('theme-dark');
    
    this.CSS.remap([
      ['--background-tertiary', '#0a0a0a'],
      ['--background-secondary', '#141414'],
      ['--background-primary', '#1f1f1f'],
      ['--background-floating', '#242424'],
      ['--background-accent', '#292929'],
      ['--background-accent', '#2e2e2e'],
      ['--text-normal', '#fff'],
      ['--background-floating', '#3d3d3d'],
      ['--background-tertiary', '#000000'],
      ['--background-secondary', '#1b1a19'],
      // ['--interactive-hover', '#fff'],
      ['--interactive-normal', '#adadad'],
      ['--brand-experiment', '#9ea2ff', 'var(--brand-experiment, var(--text-link, #9ea2ff))']
    ]);
    
    this.CSS.add(`#outer-shell {
      --color-bg-secondary: var(--background-secondary);
      --brand-background: var(--brand-experiment, var(--text-link, var(--brand-600)));
      --color-brand-text4: var(--text-link, var(--color-brand7));
      --color-base-white: var(--text-normal);
      --color-bg-secondary: var(--background-)
    }`); 
  }
});