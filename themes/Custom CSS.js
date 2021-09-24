let CSS;

export const load = async () => {
  CSS = await import(`https://polyglot-mod.github.io/standard/src/css.js?_${Date.now()}`);

  document.body.addEventListener('click', () => { // wait for click event as needs user gesture to open files
    const cssFileContent = await (await (await showOpenFilePicker())[0].getFile()).text();

    CSS.add(cssFileContent);
  }, { once: true });
};

export const unload = () => {
  CSS.remove();
};