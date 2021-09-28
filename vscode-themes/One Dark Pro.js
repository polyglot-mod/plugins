/* { "author": { "name": "binaryify", "picture": "https://avatars.githubusercontent.com/u/12221718?v=4"} } */

let VSCode;

export const load = async () => {
  VSCode = await import(`https://polyglot-mod.github.io/standard/src/theme-compat/vscode.js?_${Date.now()}`);
  
  VSCode.add(`https://raw.githubusercontent.com/Binaryify/OneDark-Pro/master/themes/OneDark-Pro.json`);
};

export const unload = () => {
  VSCode.remove();
};