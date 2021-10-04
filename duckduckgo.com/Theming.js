import Plugin from 'https://standard.polymod.dev/plugin.js';

export default new (class PluginWrapper extends Plugin {
  load() {
    document.body.parentElement.classList.add('theme-' + (document.body.parentElement.classList.contains('dark-bg') ? 'dark' : 'light'));
    
    this.CSS.remap([
      ['--background-primary', '#1c1c1c'],
      ['--background-secondary', '#161616'],
      ['--background-floating', '#333333'],
      ['--interactive-normal', '#eeeeee'],
      ['--brand-experiment', '#769DFF'],
      ['--brand-experiment', '#66abff'],
      ['--brand-experiment', '#3969EF'],
      ['--text-normal', '#cccccc'],
      ['--text-muted', '#aaaaaa'],
      ['--background-floating', '#282828'],
      ['--text-muted', '#999999'],
      ['--interactive-muted', '#666666'],
      ['--background-accent', '#282828']
    ]);
    
    this.CSS.add(``);
  }
});