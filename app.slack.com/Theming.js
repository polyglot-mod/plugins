import Plugin from 'https://standard.polymod.dev/plugin.js';

export default new (class PluginWrapper extends Plugin {
  load() {
    document.body.parentElement.classList.add('theme-dark');
    
    this.CSS.remap([
      ['--background-primary', '#373943'],
      ['--background-tertiary', '#350d36'],
      ['--header-primary', '#1D1C1D'],
      ['--background-secondary', '#3F0E40'],
      ['--background-primary', 'rgba(var(--sk_primary_background,255,255,255),1)'],
      ['--text-normal', 'rgba(var(--sk_primary_foreground,29,28,29),1)'],
      ['--header-primary', '#FFFFFF'],
      ['--text-muted', 'rgb(207, 195, 207)'],
      ['--text-muted', 'rgba(var(--sk_foreground_max_solid,97,96,97),1)'],
      ['--header-secondary', 'rgba(var(--sk_foreground_max,29,28,29),0.7)'],
      ['--background-accent', '#1164A3'],
      ['--text-link', 'rgba(var(--sk_highlight,18,100,163),1)'],
      ['--background-floating', 'rgba(var(--sk_foreground_min_solid,248,248,248),1)'],
      ['--null, transparent', 'rgba(var(--sk_foreground_min,29,28,29),.04)']
    ]);
    
    this.CSS.add(`body {
      --p-channel_sidebar__column-bg: var(--background-secondary);
      --p-channel_sidebar__top-nav-text--opacity-20: var(--background-floating);
      --p-channel_sidebar__top-nav-text: var(--interactive-active);
      --p-channel_sidebar__computed-text-color: var(--text-muted);
    }
    
    .c-wysiwyg_container__button.c-wysiwyg_container__button--send, .c-wysiwyg_container__button.c-wysiwyg_container__button--send_options {
      color: var(--background-secondary);
      background-color: var(--header-primary);
    }`);
  }
});