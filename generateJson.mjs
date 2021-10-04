import { readdirSync, readFileSync, writeFileSync } from 'fs';

import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const jsonPath = join(__dirname, 'plugins.json');

const json = {};

const blocklist = ['LICENSE', 'plugins.json', 'README.md', 'generateJson.mjs', '.git', 'CNAME'];
for (const host of readdirSync(__dirname).filter((x) => !blocklist.includes(x))) {
  json[host] = readdirSync(join(__dirname, host)).map((x) => {
    let meta = {};
    
    try {
      meta = JSON.parse(readFileSync(join(__dirname, host, x), 'utf8').split('\n')[0].split(/(\/\* ?)|( ?\*\/)/g)[3]);
    } catch (e) {
      meta = {
        author: {
          name: 'Ducko',
          picture: 'https://cdn.discordapp.com/avatars/506482395269169153/947860ee160227b7ff0adcd52878c278.webp?size=64'
        }
      };
    }
    
    return {
      file: x,
      ...meta
    }
  });
}

writeFileSync(jsonPath, JSON.stringify(json, null, 2));