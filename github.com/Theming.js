import Plugin from 'https://standard.polymod.dev/plugin.js';

export default new (class PluginWrapper extends Plugin {
  load() {
    document.body.parentElement.classList.add('theme-' + (document.body.parentElement.getAttribute('data-color-mode') === 'dark' ? 'dark' : 'light'));
    
    this.CSS.add(`body {
      --color-canvas-default: var(--background-primary);
      --color-canvas-overlay: var(--background-secondary);
      --color-canvas-subtle: var(--background-secondary);
      --color-canvas-inset: var(--background-secondary-alt, var(--background-accent));
      
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
      
      --color-page-header-bg: var(--background-primary);
      
      --color-header-bg: var(--background-secondary);
      --color-header-text: var(--interactive-hover);
      --color-header-logo: var(--interactive-normal);
      
      --color-header-search-bg: var(--background-primary);
      --color-header-search-border: var(--background-accent);
      
      --color-btn-text: var(--interactive-normal);
      --color-btn-bg: var(--background-floating);
      --color-btn-border: var(--background-accent);
      
      --color-btn-primary-bg: var(--text-link);
      --color-btn-primary-text: #fff;
      --color-btn-primary-border: var(--color-btn-border);
      
      --color-btn-primary-focus-bg: var(--color-btn-primary-bg);
      --color-btn-primary-focus-border: var(--color-btn-primary-border);
      
      --color-btn-primary-hover-bg: var(--color-btn-primary-bg);
      --color-btn-primary-hover-border: var(--color-btn-primary-border);
      
      
      --color-primer-border-active: var(--text-link);
    }
    
    .notification-indicator .mail-status {
      background: var(--text-link);
    }
    
    .header-search-input::placeholder {
      color: var(--text-muted) !important;
    }`);
  }
});