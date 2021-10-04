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
  ]);
  
  CSS.add(`body, .appbar {
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
  }`);
};

export const unload = () => {
  CSS.remove();
};