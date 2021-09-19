const importHost = 'http://127.0.0.1:1337/plugins';
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