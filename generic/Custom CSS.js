let CSS;

export const load = async () => {
  CSS = await import(`https://standard.polymod.dev/css.js?_${Date.now()}`);

  document.body.addEventListener('click', async () => { // wait for click event as needs user gesture to open files
    const cssFileContent = await (await (await showOpenFilePicker())[0].getFile()).text();

    CSS.add(cssFileContent);
  }, { once: true });
};

export const unload = () => {
  CSS.remove();
};