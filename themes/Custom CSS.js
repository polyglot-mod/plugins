let CSS;

export const load = async () => {
  CSS = await import(`https://polyglot-mod.github.io/standard/src/css.js?_${Date.now()}`);

  const cssFileContent = await (await (await showOpenFilePicker())[0].getFile()).text();

  CSS.add(cssFileContent);
};

export const unload = () => {
  CSS.remove();
};