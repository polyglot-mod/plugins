const importHost = 'https://polyglot-mod.github.io/plugins';
const host = location.host;

const plugins = {
  'generic': [], // [ 'DTCompat', 'alert' ],
  'app.revolt.chat': [ 'DTCompat' ]
};

const loadPlugin = async (host, name) => {
  console.log('loadPlugin', host, name);
  eval(await (await fetch(`${importHost}/${host}/${name}.js?_${Date.now()}`)).text());
}

for (const plugin of plugins.generic) {
  loadPlugin('generic', plugin);
}

for (const plugin of plugins[host]) {
  loadPlugin(host, plugin);
}