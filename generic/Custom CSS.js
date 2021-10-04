import * as CSS from 'https://standard.polymod.dev/css.js';

export const load = async () => {
  document.body.addEventListener('click', async () => { // wait for click event as needs user gesture to open files
    const cssFileContent = await (await (await showOpenFilePicker())[0].getFile()).text();

    CSS.add(cssFileContent);
  }, { once: true });
};

export const unload = () => {
  CSS.remove();
};