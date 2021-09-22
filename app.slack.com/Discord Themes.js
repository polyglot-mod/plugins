let CSS;

export const load = async () => {
  CSS = await import(`https://polyglot-mod.github.io/standard/src/css.js?_${Date.now()}`);
  
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
  
  for (const sheet of window.document.styleSheets) {
    let themeVars = [
      ['--background-primary', '#373943'],
      ['--background-tertiary', '#350d36'],
      ['--header-primary', '#1D1C1D'],
      ['--background-secondary', '#3F0E40'],
      ['--background-primary', 'rgba(var(--sk_primary_background,255,255,255),1)'],
      ['--text-normal', 'rgba(var(--sk_primary_foreground,29,28,29),1)'],
      ['--header-primary', '#FFFFFF'],
      ['--text-muted', 'rgb(207, 195, 207)'],
      ['--text-muted', 'rgba(var(--sk_foreground_max_solid,97,96,97),1)'],
      ['--header-secondary', 'rgba(var(--sk_foreground_max,29,28,29),.7)'],
      ['--background-accent', '#1164A3'],
      ['--text-link', 'rgba(var(--sk_highlight,18,100,163),1)']
    ].map((v) => {
      if (v[1][0] === '#') {
        v[1] = `rgb(${parseInt(v[1].substring(1, 3), 16)}, ${parseInt(v[1].substring(3, 5), 16)}, ${parseInt(v[1].substring(5, 7), 16)})`;
      }
      
      return v;
    });
    
    for (let rule of sheet.cssRules) {
      if (!rule.selectorText) continue;
      
      for (let v of themeVars) {
        rule.style.cssText = rule.style.cssText.replaceAll(v[1], v[2] || `var(${v[0]}, ${v[1]})`);
      }
    }
  }
  
  CSS.add(`body {
    --p-channel_sidebar__column-bg: var(--background-secondary);
    --p-channel_sidebar__top-nav-text--opacity-20: var(--background-floating);
  }`);
};

export const unload = () => {
  
};