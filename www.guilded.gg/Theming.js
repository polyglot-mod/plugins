let CSS;

export const load = async () => {
  CSS = await import(`https://standard.polymod.dev/css.js?_${Date.now()}`);
  
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
      ['--background-secondary', '#32343d'],
      ['--background-secondary-alt', 'rgba(60, 62, 72, 0.7)', 'var(--background-secondary-alt, var(--background-accent, rgba(60, 62, 72, 0.7)))'],
      ['--background-tertiary', '#1e2025'],
      ['--background-secondary-alt', '#191b1f', 'var(--background-secondary-alt, var(--background-accent, #191b1f))'],
      ['--background-floating', '#4f515d'],
      ['--background-floating', '#4e505c'],
      ['--channeltextarea-background', '#4e4f59', 'var(--channeltextarea-background, var(--background-tertiary, #4e4f59))'],
      ['--channeltextarea-background', 'rgba(163, 163, 172, 0.2)', 'var(--channeltextarea-background, var(--background-tertiary, rgba(163, 163, 172, 0.2)))'],
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
        rule.style.cssText = rule.style.cssText.replaceAll(v[1], v[2] || `var(${v[0]}, ${v[1]})`);
      }
    }
  }
  
  CSS.add(``);
  
  
  // CSS.add(`@import "${prompt('Theme Link')}";`);
  // CSS.add(await (await fetch(prompt('Theme Link:'))).text());
};

export const unload = () => {
  
};