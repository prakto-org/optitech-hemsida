#!/usr/bin/env node
/**
 * Generates src/data/content-manifest.json — a static map of every content
 * directory to its post slugs.
 *
 * Why: on Cloudflare Workers (OpenNext) the bundled in-memory filesystem can
 * read individual traced files but cannot enumerate directories, so
 * `glob.sync()` in getPostSlugs() fails at runtime there. The manifest lets
 * the runtime fall back to a precomputed slug list (see src/utils/api-content.js).
 *
 * Runs automatically as part of prebuild/predev.
 */
import { writeFileSync, mkdirSync, readdirSync, statSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

import { glob } from 'glob';
import jsYaml from 'js-yaml';

const CONTENT_DIR = 'content';
const IGNORE = ['**/README.md', '**/unused/**', '**/shared-content/**', '**/GUIDE_TEMPLATE.md'];

// Top-level content sections that are enumerated at runtime.
const sections = readdirSync(CONTENT_DIR).filter((name) =>
  statSync(join(CONTENT_DIR, name)).isDirectory()
);

const manifest = {};

for (const section of sections) {
  const pathname = `${CONTENT_DIR}/${section}`;
  const files = glob.sync(`${pathname}/**/*.md`, { ignore: IGNORE, windowsPathsNoEscape: true });
  // Keep the exact same slug format as getPostSlugs() in src/utils/api-content.js
  // (leading slash preserved, .md extension stripped).
  manifest[pathname] = files
    .map((file) => file.replaceAll('\\', '/').replace(pathname, '').replace(/\.md$/, ''))
    .sort();
}

mkdirSync('src/data', { recursive: true });
writeFileSync('src/data/content-manifest.json', JSON.stringify(manifest, null, 2));

const total = Object.values(manifest).reduce((sum, slugs) => sum + slugs.length, 0);
console.log(`[content-manifest] ${sections.length} sections, ${total} slugs written to src/data/content-manifest.json`);

// YAML files under content/ are read at runtime (src/utils/*.js), but .yaml
// files are not readable from the Cloudflare Workers bundled filesystem.
// Pre-parse them all into a JSON module that src/utils/read-yaml.js can
// require() as a fallback (keyed by repo-relative posix path).
const yamlBundle = {};
const yamlFiles = glob.sync(`${CONTENT_DIR}/**/*.{yaml,yml}`, { windowsPathsNoEscape: true });
for (const file of yamlFiles) {
  const key = file.replaceAll('\\', '/');
  try {
    yamlBundle[key] = jsYaml.load(readFileSync(file, 'utf8'));
  } catch (error) {
    console.warn(`[content-manifest] could not parse ${key}: ${error.message}`);
  }
}
writeFileSync('src/data/yaml-bundle.json', JSON.stringify(yamlBundle));
console.log(`[content-manifest] ${Object.keys(yamlBundle).length} YAML files bundled to src/data/yaml-bundle.json`);
