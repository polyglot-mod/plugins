import Plugin from 'https://standard.polymod.dev/plugin.js';

export default new (class PluginWrapper extends Plugin {
  load() {
    document.body.parentElement.classList.add('theme-' + (document.documentElement.getAttribute('dark') === 'true' ? 'dark' : 'light'));
    
    this.CSS.add(`html:not(.style-scope)[dark], :not(.style-scope)[dark] {
      --yt-spec-brand-background-primary: var(--background-secondary) !important;
      
      --yt-spec-general-background-a: var(--background-primary) !important;
      --yt-spec-general-background-b: var(--background-secondary) !important;
      --yt-spec-brand-background-solid: var(--background-secondary) !important;
      
      --yt-spec-10-percent-layer: var(--background-accent) !important;
      
      --ytd-searchbox-background: var(--background-tertiary) !important;
      --ytd-searchbox-legacy-button-color: var(--background-accent) !important;
      
      --ytd-searchbox-legacy-border-color: var(--ytd-searchbox-legacy-button-color) !important;
      --ytd-searchbox-legacy-button-border-color: var(--ytd-searchbox-background) !important;
      
      --yt-spec-badge-chip-background: var(--background-secondary) !important;
      
      --yt-spec-text-primary: var(--text-normal) !important;
      --yt-spec-text-primary-inverse: var(--background-primary) !important;
      --yt-spec-text-secondary: var(--text-muted) !important;
      --yt-spec-text-disabled: var(--text-muted) !important;
      
      --yt-spec-brand-button-background: var(--brand-experiment) !important;
      --yt-spec-brand-link-text: var(--brand-experiment) !important;
      --yt-spec-static-brand-red: var(--brand-experiment) !important;
      --yt-spec-call-to-action: var(--text-link) !important;
      
      --yt-spec-icon-active-other: var(--interactive-hover) !important;
      --yt-spec-icon-inactive: var(--interactive-normal) !important;
      --yt-spec-icon-disabled: var(--text-muted) !important;
      --yt-spec-brand-icon-inactive: var(--interactive-hover) !important;
      
      --yt-live-chat-vem-background-color: var(--background-floating) !important;
      --yt-live-chat-banner-gradient-scrim: linear-gradient(var(--background-secondary), transparent); !important;
      --yt-live-chat-primary-text-color: var(--text-normal) !important;
      --yt-live-chat-secondary-text-color: var(--text-muted) !important;
      --yt-live-chat-tertiary-text-color: var(--text-muted) !important;
      --yt-live-chat-secondary-background-color: var(--background-secondary) !important;
      --yt-live-chat-toast-background-color: var(--background-floating) !important;
      --yt-live-chat-mode-change-background-color: var(--background-floating) !important;
      --yt-live-chat-author-chip-owner-background-color: var(--brand-experiment) !important;
    }
    
    html:not(.style-scope)[system-icons]:not(.style-scope)[dark], html:not(.style-scope)[system-icons] :not(.style-scope)[dark] {
      --yt-spec-icon-inactive: var(--interactive-normal) !important;
      --yt-spec-icon-disabled: var(--text-muted) !important;
      --yt-spec-brand-icon-inactive: var(--interactive-hover) !important;
    }
    
    /* Video thumbnail progress */
    ytd-thumbnail-overlay-resume-playback-renderer {
      background-color: var(--background-tertiary);
    }
    
    /* Video progress bar */
    .ytp-swatch-background-color, .ytp-live-badge[disabled]:before {
      background-color: var(--yt-spec-static-brand-red);
      /* filter: contrast(100); */
    }
    
    /* Chat fixes */
    yt-icon-button.yt-live-chat-item-list-renderer {
      background-color: var(--yt-spec-call-to-action);
    }
    
    .yt-live-interactivity-component-background {
      fill: var(--background-floating);
    }
    
    [dark] yt-live-chat-app ::-webkit-scrollbar-thumb, [dark] yt-live-chat-kevlar-container ::-webkit-scrollbar-thumb {
      background-color: var(--scrollbar-auto-thumb, var(--brand-experiment));
      border-color: var(--scrollbar-auto-track, var(--background-secondary-alt)) !important;
    }
    
    [watch-color-update] yt-live-chat-app ::-webkit-scrollbar-track, [watch-color-update] yt-live-chat-kevlar-container ::-webkit-scrollbar-track {
      background-color: var(--scrollbar-auto-track, var(--background-secondary-alt));
    }`);
  }
});