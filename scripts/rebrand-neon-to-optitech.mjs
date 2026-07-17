#!/usr/bin/env node
/**
 * Rebrand visible "Neon" copy to "OptiTech".
 *
 * Uses only Node built-ins, so it runs with an empty node_modules:
 *   node scripts/rebrand-neon-to-optitech.mjs            # dry run (default) on content/ + src/
 *   node scripts/rebrand-neon-to-optitech.mjs --write    # apply changes
 *   node scripts/rebrand-neon-to-optitech.mjs content src --write
 *   node scripts/rebrand-neon-to-optitech.mjs --ext=md,mdx --write
 *
 * It replaces the standalone word "Neon" (case preserved) with "OptiTech",
 * but SKIPS functional references so it never breaks code:
 *   - URLs / domains: neon.tech, neon.com, mcp.neon.tech, console.neon.tech, fyi.neon.tech
 *   - CLI / packages: neonctl, @neondatabase, neondatabase, neon_local
 *   - Code identifiers: NEON_STATUS, getNeonStatus, neon_* / *_neon
 *   - Asset & import paths: neon-logo, /neon/, images/.../neon...
 *
 * ALWAYS review the git diff after running with --write.
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname, relative } from 'node:path';

// ---- config -------------------------------------------------------------

const DEFAULT_DIRS = ['content', 'src'];
const DEFAULT_EXTS = ['md', 'mdx', 'jsx', 'js', 'ts', 'tsx', 'yaml', 'yml'];

// Directories never descended into.
const IGNORED_DIRS = new Set([
  'node_modules',
  '.git',
  '.next',
  'dist',
  'build',
  'coverage',
  'public',
]);

// Reference trees that document Neon CLI/API command names as bare prose
// (headings like `## neon branches list`) rather than only inside code fences.
// These are functional command/API references, so skip them entirely.
// Compared against the file path relative to root, using forward slashes.
const EXCLUDED_PATHS = ['content/docs/cli', 'content/api-docs', 'content/changelog'];

// Explicit whole-string replacements applied FIRST (before word replacement).
const DIRECT_REPLACEMENTS = [
  ['atli@neon.tech', 'contact@optitech.com'],
  ['hi@neon.tech', 'contact@optitech.com'],
];

// If a "neon" match is part of any of these, it is a functional token: skip it.
// Matched case-insensitively against the surrounding text window.
const PROTECTED = [
  /neon\.tech/i,
  /neon\.com/i,
  /neon\.dev/i,
  /neon\.new/i,
  /\.neon\./i,
  /neonctl/i,
  /neondatabase/i,
  /@neon/i,
  /neon@/i, // neon@latest and other npm package specifiers
  /icon=["']?neon/i, // component icon="neon" attribute (maps to a registered SVG name)
  /neon\.[a-z]/i, // SDK/driver namespaces: neon.projects, neon.postgres, neon.tech, ...
  // Neon CLI invocations in prose: `neon branches`, `neon auth`, etc.
  /neon\s+(auth|branches|projects|databases|roles|connection-string|connection|me|cli|set-context|orgs|operations|ip-allow|vpc|completion|create-app|snapshots|local|init)\b/i,
  /neon[-_/]/i, // neon-logo, neon_local, neon/foo
  /[-_/]neon/i, // get-neon, /neon
  /neon[a-z]/i, // neonstatus etc. (word boundary handles most, this is belt-and-suspenders)
];

// Extensions where a bare lowercase `neon` is almost always an identifier /
// import / object key / config value / icon name: only rebrand capitalized Neon/NEON.
const SKIP_LOWERCASE_EXTS = new Set(['.js', '.jsx', '.ts', '.tsx', '.yaml', '.yml']);

// Markdown/MDX: mask code so CLI commands, npm packages, connection strings,
// and driver calls inside fenced blocks or inline code are never rebranded.
const MARKDOWN_EXTS = new Set(['.md', '.mdx']);

// ---- args ---------------------------------------------------------------

const argv = process.argv.slice(2);
let write = false;
let exts = DEFAULT_EXTS;
const dirs = [];

for (const arg of argv) {
  if (arg === '--write') write = true;
  else if (arg === '--dry-run') write = false;
  else if (arg.startsWith('--ext=')) {
    exts = arg
      .slice('--ext='.length)
      .split(',')
      .map((e) => e.trim().replace(/^\./, ''))
      .filter(Boolean);
  } else if (arg.startsWith('--')) {
    console.error(`Unknown flag: ${arg}`);
    process.exit(1);
  } else {
    dirs.push(arg);
  }
}

const targetDirs = dirs.length ? dirs : DEFAULT_DIRS;
const extSet = new Set(exts.map((e) => `.${e}`));

// ---- helpers ------------------------------------------------------------

function preserveCase(match) {
  if (match === match.toUpperCase()) return 'OPTITECH';
  if (match === match.toLowerCase()) return 'optitech';
  return 'OptiTech';
}

/** Return true if the "neon" match at [start,end) is a functional token to skip. */
function isProtected(text, start, end) {
  // Look at a small window around the match for functional patterns.
  const window = text.slice(Math.max(0, start - 20), Math.min(text.length, end + 20));
  return PROTECTED.some((re) => re.test(window));
}

/** Replace the standalone word "neon" (case preserved) in a chunk of text. */
function replaceWords(text, skipLowercase) {
  let replaced = 0;
  let skipped = 0;
  const out = text.replace(/\bneon\b/gi, (match, offset, full) => {
    // Where lowercase is skipped, only touch capitalized Neon/NEON (prose / JSX text),
    // never a bare lowercase `neon` identifier / import / object key / config value.
    if (skipLowercase && match === match.toLowerCase()) {
      skipped += 1;
      return match;
    }
    if (isProtected(full, offset, offset + match.length)) {
      skipped += 1;
      return match;
    }
    replaced += 1;
    return preserveCase(match);
  });
  return { out, replaced, skipped };
}

function transform(text, ext) {
  let out = text;
  let direct = 0;

  for (const [from, to] of DIRECT_REPLACEMENTS) {
    const parts = out.split(from);
    if (parts.length > 1) {
      direct += parts.length - 1;
      out = parts.join(to);
    }
  }

  // Markdown/MDX: rebrand prose only, leaving fenced blocks and inline code untouched.
  if (MARKDOWN_EXTS.has(ext)) {
    const codeRegion = /```[\s\S]*?```|~~~[\s\S]*?~~~|`[^`\n]+`/g;
    let result = '';
    let last = 0;
    let replaced = 0;
    let skipped = 0;
    let m;
    while ((m = codeRegion.exec(out)) !== null) {
      const r = replaceWords(out.slice(last, m.index), false);
      result += r.out;
      replaced += r.replaced;
      skipped += r.skipped;
      result += m[0]; // code region left exactly as-is
      last = m.index + m[0].length;
    }
    const tail = replaceWords(out.slice(last), false);
    result += tail.out;
    replaced += tail.replaced;
    skipped += tail.skipped;
    return { out: result, replaced, skipped, direct };
  }

  const { out: finalOut, replaced, skipped } = replaceWords(out, SKIP_LOWERCASE_EXTS.has(ext));
  return { out: finalOut, replaced, skipped, direct };
}

function walk(dir, files) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return;
  }
  for (const name of entries) {
    if (IGNORED_DIRS.has(name)) continue;
    const full = join(dir, name);
    let st;
    try {
      st = statSync(full);
    } catch {
      continue;
    }
    const rel = relative(root, full).replace(/\\/g, '/');
    if (EXCLUDED_PATHS.some((p) => rel === p || rel.startsWith(`${p}/`))) continue;
    if (st.isDirectory()) walk(full, files);
    else if (extSet.has(extname(name))) files.push(full);
  }
}

// ---- run ----------------------------------------------------------------

const root = process.cwd();
const allFiles = [];
for (const d of targetDirs) walk(join(root, d), allFiles);

let filesChanged = 0;
let totalReplaced = 0;
let totalSkipped = 0;
let totalDirect = 0;
const changedList = [];

for (const file of allFiles) {
  let content;
  try {
    content = readFileSync(file, 'utf8');
  } catch {
    continue;
  }
  const { out, replaced, skipped, direct } = transform(content, extname(file));
  totalSkipped += skipped;
  if (out !== content) {
    filesChanged += 1;
    totalReplaced += replaced;
    totalDirect += direct;
    changedList.push({ file: relative(root, file), replaced: replaced + direct });
    if (write) writeFileSync(file, out, 'utf8');
  }
}

// ---- report -------------------------------------------------------------

const mode = write ? 'WRITE' : 'DRY RUN';
console.log(`\n=== Neon -> OptiTech rebrand (${mode}) ===`);
console.log(`Scanned dirs : ${targetDirs.join(', ')}`);
console.log(`Extensions   : ${[...extSet].join(', ')}`);
console.log(`Files matched: ${allFiles.length}`);
console.log(`Files changed: ${filesChanged}`);
console.log(`Replacements : ${totalReplaced + totalDirect} (word: ${totalReplaced}, direct: ${totalDirect})`);
console.log(`Protected skipped (functional tokens left intact): ${totalSkipped}`);

if (changedList.length) {
  console.log('\nChanged files:');
  for (const c of changedList.sort((a, b) => b.replaced - a.replaced)) {
    console.log(`  ${String(c.replaced).padStart(4)}  ${c.file}`);
  }
}

if (!write) {
  console.log('\nDry run only. Re-run with --write to apply, then review: git diff');
} else {
  console.log('\nDone. Review changes with: git diff');
}
