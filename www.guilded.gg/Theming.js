import Plugin from 'https://standard.polymod.dev/plugin.js';

export default new (class PluginWrapper extends Plugin {
  load() {
    document.body.parentElement.classList.add('theme-dark');
    
    this.CSS.remap([
      ['--background-primary', '#373943'],
      ['--background-secondary', '#292b32'],
      ['--background-secondary', '#32343d'],
      ['--background-secondary-alt', 'rgba(60, 62, 72, 0.7)', 'var(--background-secondary-alt, var(--background-accent, rgba(60, 62, 72, 0.7)))'],
      ['--background-tertiary', '#1e2025'],
      ['--background-secondary-alt', '#191b1f', 'var(--background-secondary-alt, var(--background-accent, #191b1f))'],
      ['--background-floating', '#4f515d'],
      ['--background-floating', '#4e505c'],
      ['--channeltextarea-background', '#4e4f59', 'var(--channeltextarea-background, var(--background-tertiary, #4e4f59))'],
      ['--channeltextarea-background', 'rgba(163, 163, 172, 0.2)', 'var(--channeltextarea-background, var(--background-tertiary, rgba(163, 163, 172, 0.2)))'],
      ['--text-normal', 'var(--body-text-color)'],
      ['--interactive-hover', '#fff'],
      ['--text-normal', '#a3a3ac'],
      ['--interactive-normal', '#a3a3ac']
    ]);
  }
});