import Plugin from 'https://standard.polymod.dev/plugin.js';

export default new (class PluginWrapper extends Plugin {
  load() {
    document.body.addEventListener('click', async () => { // wait for click event as needs user gesture to open files
      const cssFileContent = await (await (await showOpenFilePicker())[0].getFile()).text();
      
      this.CSS.add(cssFileContent);
    }, { once: true });
  }
});