#!/usr/bin/env node
/**
 * Translate a locale message catalog (src/locales/en.json) with the DeepL API.
 *
 * Usage:
 *   node scripts/translate-messages.mjs [--lang=sv] [--write]
 *
 * Walks every string leaf, translates EN → target, and writes
 * src/locales/<lang>.json with identical structure. Placeholder tags like
 * <mark>, <a>, <a1>, <strong>, <span> are preserved by DeepL's XML handling.
 */

import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

import { deeplRequest, readEnvKey, translatePool } from './translate-content.mjs';

const LOCALES_DIR = path.join('src', 'locales');

/** Collect string leaves depth-first; returns setters aligned with the pool. */
export function collectLeaves(node, pool = [], setters = []) {
  if (Array.isArray(node)) {
    node.forEach((val, i) => {
      if (typeof val === 'string') {
        pool.push(val);
        setters.push((s) => {
          node[i] = s;
        });
      } else {
        collectLeaves(val, pool, setters);
      }
    });
  } else if (node && typeof node === 'object') {
    for (const key of Object.keys(node)) {
      const val = node[key];
      if (typeof val === 'string') {
        pool.push(val);
        setters.push((s) => {
          node[key] = s;
        });
      } else {
        collectLeaves(val, pool, setters);
      }
    }
  }
  return { pool, setters };
}

async function main() {
  const args = process.argv.slice(2);
  const write = args.includes('--write');
  const lang = args.find((a) => a.startsWith('--lang='))?.split('=')[1] ?? 'sv';

  const source = JSON.parse(fs.readFileSync(path.join(LOCALES_DIR, 'en.json'), 'utf8'));
  const { pool, setters } = collectLeaves(source);
  const totalChars = pool.reduce((n, s) => n + s.length, 0);
  console.log(`${pool.length} strängar, ~${totalChars.toLocaleString('sv-SE')} tecken till DeepL`);
  if (!write) {
    console.log(`Dry run. Kör med --write för att skriva ${LOCALES_DIR}/${lang}.json`);
    return;
  }

  const key = readEnvKey();
  const results = await translatePool(key, pool, lang);
  results.forEach((translated, i) => setters[i](translated));
  const outPath = path.join(LOCALES_DIR, `${lang}.json`);
  fs.writeFileSync(outPath, `${JSON.stringify(source, null, 2)}\n`);

  const usage = await deeplRequest(key, 'usage');
  console.log(
    `Skrev ${outPath}. Kvot: ${usage.character_count.toLocaleString('sv-SE')}/${usage.character_limit.toLocaleString('sv-SE')}`
  );
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
}
