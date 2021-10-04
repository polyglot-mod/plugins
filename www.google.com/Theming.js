import Plugin from 'https://standard.polymod.dev/plugin.js';

export default new (class PluginWrapper extends Plugin {
  load() {
    document.body.parentElement.classList.add('theme-dark');
    
    this.CSS.remap([
      ['--background-secondary', '#ffffff'],
      ['--background-floating', '#f8f9fa'],
      ['--background-secondary', '#f2f2f2'],
      ['--background-accent', '#dadce0'],
      ['--background-accent', '#ebebeb'],
      ['--background-accent', '#ecedef'],
      ['--background-accent', '#e8eaed'],
      ['--interactive-normal', '#202124'],
      ['--interactive-normal', 'rgba(0, 0, 0, 0.87)'],
      ['--interactive-normal', '#222222'],
      ['--text-muted', 'rgba(0, 0, 0, 0.54)'],
      ['--text-muted', '#3c4043'],    ['--interactive-normal', '#212121'],
      ['--text-muted', '#4d5156'],
      ['--brand-experiment', '#1a73e8'],
      ['--text-muted', '#5f6368'],
      ['--background-accent', '#dfe1e5'],
      ['--interactive-normal', '#70757a'],
      ['--text-muted', '#9aa0a6'],
      ['--header-primary', '#000000'],
      ['--text-link', '#1a0dab'],
      ['--background-accent', 'rgb(241, 243, 244)']
    ]);
    
    this.CSS.add(`body, .appbar {
      background: var(--background-primary);
    }
    
    .goxjub > :nth-child(1) {
      fill: var(--brand-experiment) !important;
    }
    
    .goxjub > * {
      fill: var(--interactive-muted);
    }
    
    .lJ9FBc input[type="submit"], .gbqfba,
    a.pHiOh {
      color: var(--interactive-normal) !important;
    }
    
    input {
      background: var(--background-secondary-alt);
    }
    
    .dw-sb-cont .dw-sb-btn {
      background: var(--background-accent);
    }`);
  }
});