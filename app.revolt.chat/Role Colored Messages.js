function rgb2hsl(r, g, b) {
  r /= 255, g /= 255, b /= 255;
  
  let max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }

    h /= 6;
  }

  return [h * 360, s * 100, l * 100];
}

const perform = () => {
  const messages = document.querySelectorAll(`.sc-bqyKOL`);

  let lastColor = '';
  for (const message of messages) {
    const author = message.querySelector('.author');
    let roleColor = author && (author.style.color || 'var(--foreground)');

    if (roleColor) {
      let rgb = roleColor.replace('rgb(', '').replace(')', '').split(', ').map((x) => parseFloat(x));

      let [h, s, l] = rgb2hsl(rgb[0], rgb[1], rgb[2]);

      roleColor = `hsl(${h}, ${85}%, ${75}%)`;
    }

    const content = message.querySelector('._markdown_8b8eo_2');
    if (content) content.style.color = roleColor || lastColor;
    
    if (roleColor) lastColor = roleColor;
  }
};

let interval;

export const load = () => {
  interval = setInterval(perform, 100);
};

export const unload = () => {
  clearInterval(interval);
};