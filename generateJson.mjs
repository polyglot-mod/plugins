import { readdirSync, readFileSync, writeFileSync } from 'fs';

import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import fetch from 'node-fetch';


const __dirname = dirname(fileURLToPath(import.meta.url));
const jsonPath = join(__dirname, 'plugins.json');

const json = {};

const blocklist = ['LICENSE', 'plugins.json', 'README.md', 'generateJson.mjs', '.git', 'CNAME', 'node_modules'];
for (const host of readdirSync(__dirname).filter((x) => !blocklist.includes(x))) {
  json[host] = (await Promise.all(readdirSync(join(__dirname, host)).filter((x) => x[0] !== '_').map(async (x) => {
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

    if (meta.spicetify) {
      const ini = await (await fetch(meta.spicetify)).text();

      const schemes = ini.split('[').map((x) => {
        const split = x.split('\n');
          
        return [
          split[0].replace(']', '').trim(),
          ...split.slice(1).map((y) => y.split('=').map((z) => z.trim())).filter((y) => y[0] !== '')
        ];
      }).filter((x) => x[0] !== '');

      delete meta.spicetify;

      const name = x.split('.').slice(0, -1).join('.');

      return schemes.map((scheme) => {
        const schemePretty = scheme[0].replaceAll('-', ' ').replace(/(^| )([a-z])/g, (_) => _.toUpperCase());

        const file = `_${name} - ${schemePretty}.js`;

        const schemeMeta = {
          file,

          under: name,
          under_as: schemePretty,

          ...meta
        };

        writeFileSync(join(__dirname, host, file), `/* ${JSON.stringify(schemeMeta)} */
export const spicetify = ${JSON.stringify(Object.fromEntries(scheme.slice(1)))};`)

        return schemeMeta;
      });
    }
    
    return {
      file: x,
      ...meta
    }
  }))).flat();
}

writeFileSync(jsonPath, JSON.stringify(json, null, 2));