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
      ['--background-secondary', '#292b32'],
      ['--background-tertiary', '#1e2025'],
      ['--background-secondary-alt', '#191b1f'],
      ['--background-secondary-alt', '#1e2025'],
      ['--channeltextarea-background', '#4e4f59'],
      ['--text-normal', 'var(--body-text-color)'],
      ['--interactive-hover', '#fff'],
      ['--text-normal', '#a3a3ac'],
      ['--interactive-normal', '#a3a3ac']
    ].map((v) => {
      if (v[1][0] === '#') {
        v[1] = `rgb(${parseInt(v[1].substring(1, 3), 16)}, ${parseInt(v[1].substring(3, 5), 16)}, ${parseInt(v[1].substring(5, 7), 16)})`;
      }
      
      return v;
    });
    
    for (let rule of sheet.cssRules) {
      if (!rule.selectorText) continue;
      
      for (let v of themeVars) {
        rule.style.cssText = rule.style.cssText.replaceAll(v[1], `var(${v[0]}, ${v[1]})`);
      }
    }
  }
  
  CSS.add(`
  ::-webkit-scrollbar {
    background-color: var(--scrollbar-thin-track, transparent);
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-thin-thumb, hsla(0,0%,100%,.2));
  }`);
  
  
  // CSS.add(`@import "${prompt('Theme Link')}";`);
  // CSS.add(await (await fetch(prompt('Theme Link:'))).text());
};

export const unload = () => {
  
};