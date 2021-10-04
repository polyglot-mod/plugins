import * as CSS from 'https://standard.polymod.dev/css.js';

export const load = async () => {
  const classRemap = {
    '.mx_LeftPanel': 'sidebar-2K8pFh',
    '.mx_GroupFilterPanel': 'wrapper-3NnKdC guilds-1SWlCJ',
    '.mx_LeftPanel_userHeader': 'container-1taM1r clickable-25tGDB',
    '.mx_RoomHeader_wrapper': 'title-3qD0b- container-1r6BKw themed-ANHk51',
    '.mx_MainSplit': 'content-yTz4x3',
    '.mx_RoomView_body': 'chatContent-a9vAAp'
    /* '.??': 'membersWrap-2h-GB4 hiddenMembers-2dcs_q', */
  };
  
  for (const [ toMap, remap ] of Object.entries(classRemap)) {
    document.querySelectorAll(`${toMap}`).forEach((x) => x.className += ' ' + remap);
  }
  
  const theme = window.document.styleSheets[1].href.split('/').pop().split('.')[0];
  document.body.parentElement.classList.add(theme);

  CSS.remap([
    ['--background-primary', '#15191e'],
    ['--background-secondary', 'rgba(33, 38, 44, 0.9)'],
    ['--background-tertiary', 'rgba(38, 39, 43, 0.82)'],
    ['--background-accent', 'rgba(141, 151, 165, 0.2)'],
    ['--text-muted', '#b9bec6'],
    ['--interactive-normal', '#a9b2bc'],
    ['--interactive-normal', '#8e99a4'],
    ['--interactive-hover', '#0dbd8b'],
    ['--background-accent', 'rgba(92, 100, 112, 0.3)'],
    ['--brand-experiment', '#238cf5'],
  ]);

  CSS.add(`
  body {
    color: var(--text-normal. #fff);
  }
  
  ::-webkit-scrollbar {
    background-color: var(--scrollbar-thin-track, transparent);
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-thin-thumb, hsla(0,0%,100%,.2));
  }`);
};

export const unload = () => {
  CSS.remove();
};