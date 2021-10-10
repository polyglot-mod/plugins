import Plugin from 'https://standard.polymod.dev/plugin.js';

export default new (class PluginWrapper extends Plugin {
  load() {
    document.body.parentElement.classList.add('theme-dark');
    
    this.CSS.remap([
      ['--background-primary', '#121212'],
      ['--background-secondary', '#000000'],
      ['--background-secondary-alt', '#282828'],
      ['--background-floating', 'rgba(0, 0, 0, 0.7)'],
      ['--background-tertiary', '#181818'],
      ['--interactive-hover', '#ffffff'],
      ['--brand-experiment', '#1db954'],
      ['--text-muted', 'rgba(255, 255, 255, 0.7)'],
      ['--interactive-hover', 'rgba(255, 255, 255, 0.9)'],
      ['--text-muted', '#b3b3b3'],
      ['--background-floating', 'rgba(255, 255, 255, 0.1)'],
      ['--background-accent', 'rgba(255, 255, 255, 0.2)'],
      ['--interactive-normal', 'rgba(255, 255, 255, 0.6)'],
      ['--background-accent', '#333333'],
      ['--background-accent', '#535353']
    ]);
    
    this.CSS.add(`.lRNLjBiX_H7SPYbkJKLp {
      --bg-color: var(--background-secondary-alt, var(--text-muted, #535353));
      --fg-color: var(--brand-experiment, var(--text-link, #b3b3b3));
    }
    
    .GenericModal__overlay {
      background-color: rgba(0, 0, 0, 0.7) !important;
    }
    
    .We1fExPHxLIRmV0rZGNo, .euOnte9wvOF0D_SGxEZ9 {
      background-image: linear-gradient(rgba(0,0,0,.6) 0,var(--background-primary) 100%),var(--background-noise) !important;
    }
    
    .BhqFVNgl0DIKCJK__71W, ._qbBHRjaGvaZoEZDZ_IY {
      color: rgba(255, 255, 255, 0.7) !important;
    }`);
  }
});