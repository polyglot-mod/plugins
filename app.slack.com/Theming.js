import * as CSS from 'https://standard.polymod.dev/css.js';

export const load = async () => {
  const classRemap = {
    /* '.mx_LeftPanel': 'sidebar-2K8pFh',
    '.mx_GroupFilterPanel': 'wrapper-3NnKdC guilds-1SWlCJ',
    '.mx_LeftPanel_userHeader': 'container-1taM1r clickable-25tGDB',
    '.mx_RoomHeader_wrapper': 'title-3qD0b- container-1r6BKw themed-ANHk51',
    '.mx_MainSplit': 'content-yTz4x3',
    '.mx_RoomView_body': 'chatContent-a9vAAp' */
    /* '.??': 'membersWrap-2h-GB4 hiddenMembers-2dcs_q', */
  };
  
  for (const [ toMap, remap ] of Object.entries(classRemap)) {
    document.querySelectorAll(`${toMap}`).forEach((x) => x.className += ' ' + remap);
  }

  document.body.parentElement.classList.add('theme-dark');
  
  CSS.remap([
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
  
  CSS.add(`body {
    --p-channel_sidebar__column-bg: var(--background-secondary);
    --p-channel_sidebar__top-nav-text--opacity-20: var(--background-floating);
    --p-channel_sidebar__top-nav-text: var(--interactive-active);
    --p-channel_sidebar__computed-text-color: var(--text-muted);
  }
  
  .c-wysiwyg_container__button.c-wysiwyg_container__button--send, .c-wysiwyg_container__button.c-wysiwyg_container__button--send_options {
    color: var(--background-secondary);
    background-color: var(--header-primary);
  }`);
};

export const unload = () => {
  CSS.remove();
};