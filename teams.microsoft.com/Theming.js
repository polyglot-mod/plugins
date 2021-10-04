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
    ['--background-tertiary', '#0a0a0a'],
    ['--background-secondary', '#141414'],
    ['--background-primary', '#1f1f1f'],
    ['--background-floating', '#242424'],
    ['--background-accent', '#292929'],
    ['--background-accent', '#2e2e2e'],
    ['--text-normal', '#fff'],
    ['--background-floating', '#3d3d3d'],
    ['--background-tertiary', '#000000'],
    ['--background-secondary', '#1b1a19'],
    // ['--interactive-hover', '#fff'],
    ['--interactive-normal', '#adadad'],
    ['--brand-experiment', '#9ea2ff', 'var(--brand-experiment, var(--text-link, #9ea2ff))']
  ]);
  
  CSS.add(`#outer-shell {
    --color-bg-secondary: var(--background-secondary);
    --brand-background: var(--brand-experiment, var(--text-link, var(--brand-600)));
    --color-brand-text4: var(--text-link, var(--color-brand7));
    --color-base-white: var(--text-normal);
    --color-bg-secondary: var(--background-)
  }`);
};

export const unload = () => {
  CSS.remove();
};