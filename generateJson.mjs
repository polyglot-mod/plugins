import { readdirSync, writeFileSync } from 'fs';

import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const json = {};

const blocklist = ['LICENSE', 'plugins.json', 'README.md', 'generateJson.mjs', '.git'];
for (const host of readdirSync(__dirname).filter((x) => !blocklist.includes(x))) {
  json[host] = readdirSync(join(__dirname, host)).map((x) => x.replace('.js', ''));
}

console.log(json);

writeFileSync(join(__dirname, 'plugins.json'), JSON.stringify(json, null, 2));