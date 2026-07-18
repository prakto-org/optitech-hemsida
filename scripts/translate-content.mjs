#!/usr/bin/env node
/**
 * Translate content markdown with the DeepL API into a mirrored tree under content/sv/.
 *
 * Usage:
 *   node scripts/translate-content.mjs [dirs...] [--write] [--lang=sv] [--limit=N] [--force]
 *
 * Defaults to a dry run (no API calls, no writes) that reports how many characters
 * would be sent. Requires deepl_auth_key in .env for --write.
 *
 * What gets translated: prose lines, whitelisted frontmatter fields (title, subtitle,
 * summary, ...), and visible JSX attributes (title, description, buttonText, quote, ...).
 * What is protected: code fences, inline code, JSX/MDX tags, link and image targets,
 * bare URLs, HTML comments, and all other frontmatter fields.
 */

import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

import matter from 'gray-matter';

const DEFAULT_SOURCES = ['content/pages', 'content/faqs'];
const OUT_ROOT = path.join('content', 'sv');
const MANIFEST_PATH = path.join('scripts', 'data', 'translation-manifest.json');
const BATCH_MAX_TEXTS = 40;
const BATCH_MAX_CHARS = 60000;

export const FM_KEYS = new Set([
  'title',
  'subtitle',
  'summary',
  'description',
  'metaDesc',
  'opengraphTitle',
  'opengraphDescription',
  'twitterTitle',
  'twitterDescription',
  'question',
]);

export const ATTR_KEYS = new Set([
  'title',
  'subtitle',
  'description',
  'buttonText',
  'quote',
  'role',
  'label',
  'caption',
  'displayText',
]);

export const hasLetters = (s) => /[A-Za-z]{2,}/.test(s);

const ATTR_TOKEN = (i) => `\u27EAA${i}\u27EB`;

/**
 * Find complete JSX/MDX tags (any brace nesting depth) starting at `<` + capital
 * letter or `</` + capital letter. Returns [start, end) index pairs.
 */
export function findJsxTags(text) {
  const spans = [];
  const re = /<\/?[A-Z]/g;
  let m = re.exec(text);
  while (m) {
    let depth = 0;
    let quote = null;
    let end = -1;
    for (let i = m.index + 1; i < text.length; i += 1) {
      const ch = text[i];
      if (quote) {
        if (ch === quote) quote = null;
      } else if (ch === '"' || ch === "'") {
        quote = ch;
      } else if (ch === '{') {
        depth += 1;
      } else if (ch === '}') {
        depth -= 1;
      } else if (ch === '>' && depth === 0) {
        end = i + 1;
        break;
      } else if (ch === '<' && depth === 0 && i > m.index) {
        break; // stray < in prose, not a tag
      }
    }
    if (end > 0) {
      spans.push([m.index, end]);
      re.lastIndex = end;
    }
    m = re.exec(text);
  }
  return spans;
}

/**
 * Mask everything that must not reach the API. Returns masked text plus lookup
 * tables. Protected spans become self-closing <x id="n"/> tags; markdown links
 * and images become <l id="n">label</l> so DeepL keeps label and target together.
 */
export function maskBody(body) {
  const map = [];
  const attrTexts = [];
  const links = [];
  const put = (s) => `<x id="${map.push(s) - 1}"/>`;

  let text = body;
  // fenced code blocks
  text = text.replace(/^(```+|~~~+)[^\n]*\n[\s\S]*?\n\1[ \t]*$/gm, (m) => put(m));
  // html comments
  text = text.replace(/<!--[\s\S]*?-->/g, (m) => put(m));
  // JSX/MDX tags; visible attribute values are swapped for tokens translated separately
  let jsxOut = '';
  let cursor = 0;
  for (const [start, end] of findJsxTags(text)) {
    const tag = text.slice(start, end);
    const rebuilt = tag.replace(/([A-Za-z][\w-]*)="([^"]*)"/g, (m, name, val) =>
      ATTR_KEYS.has(name) && hasLetters(val) ? `${name}="${ATTR_TOKEN(attrTexts.push(val) - 1)}"` : m
    );
    jsxOut += text.slice(cursor, start) + put(rebuilt);
    cursor = end;
  }
  text = jsxOut + text.slice(cursor);
  // raw html tags, masked one by one so multi-line pairs can't confuse DeepL's xml parser
  text = text.replace(/<\/?(?!x[\s/>]|l[\s>])[a-z][\w-]*(?:"[^"]*"|'[^']*'|[^>"'])*\/?>/g, (m) =>
    put(m)
  );
  // inline code
  text = text.replace(/`[^`\n]+`/g, (m) => put(m));
  // links and images: keep the label translatable, protect the target
  text = text.replace(
    /(!?)\[([^[\]\n]*)\]\(([^()\s]*(?:\([^()]*\))?[^()]*?)\)/g,
    (m, bang, label, url) => `<l id="${links.push({ bang, url }) - 1}">${label}</l>`
  );
  // bare urls; < excluded so masked link labels (<l>https://…</l>) stay balanced
  text = text.replace(/https?:\/\/[^\s)<>"']+/g, (m) => put(m));

  return { text, map, attrTexts, links };
}

/** Reverse maskBody using (possibly translated) attr texts. */
export function unmaskBody(text, { map, attrTexts, links }) {
  let out = text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
  out = out.replace(
    /<l\s+id="(\d+)"\s*>([\s\S]*?)<\/l>/g,
    (m, i, label) => `${links[+i].bang}[${label}](${links[+i].url})`
  );
  // Swedish compounds: DeepL may leave word fragments outside the link label
  // ("[lever](url)antörsregistret"). Fold adjacent letters back into the label.
  const LETTER = '[A-Za-zÀ-ÖØ-öø-ÿ]';
  out = out.replace(
    new RegExp(`(^|[^!\\]])\\[([^\\]\\n]+)\\]\\(([^()\\n]+)\\)(${LETTER}+)`, 'g'),
    (m, pre, label, url, tail) => `${pre}[${label}${tail}](${url})`
  );
  out = out.replace(
    new RegExp(`(${LETTER}+)\\[([^\\]\\n]+)\\]\\(([^()\\n]+)\\)`, 'g'),
    (m, head, label, url) => `[${head}${label}](${url})`
  );
  for (let pass = 0; pass < 5 && /<x\s+id="\d+"\s*\/>/.test(out); pass += 1) {
    out = out.replace(/<x\s+id="(\d+)"\s*\/>/g, (m, i) => map[+i]);
  }
  out = out.replace(/\u27EAA(\d+)\u27EB/g, (m, i) => attrTexts[+i].replace(/"/g, '\u2019'));
  return out;
}

/** Split a line into markdown prefix (kept) and translatable rest. */
export function splitLine(line) {
  const m = line.match(/^(\s*(?:>\s*)*(?:[-*+]\s+|\d+[.)]\s+)?(?:#{1,6}\s+)?)([\s\S]*)$/);
  return { prefix: m[1], rest: m[2] };
}

/** A line is worth sending only if letters remain outside placeholders. */
export function isTranslatable(rest) {
  return hasLetters(rest.replace(/<x\s+id="\d+"\s*\/>/g, ''));
}

/** Collect translatable frontmatter string values (recursive, whitelist by key). */
export function collectFrontmatter(node, found = []) {
  if (Array.isArray(node)) {
    node.forEach((v) => collectFrontmatter(v, found));
  } else if (node && typeof node === 'object') {
    for (const [key, val] of Object.entries(node)) {
      if (typeof val === 'string' && FM_KEYS.has(key) && hasLetters(val)) {
        found.push({ node, key });
      } else {
        collectFrontmatter(val, found);
      }
    }
  }
  return found;
}

export const readEnvKey = () => {
  const env = fs.readFileSync('.env', 'utf8');
  const m = env.match(/^\s*deepl_auth_key\s*=\s*(\S+)\s*$/m);
  if (!m) throw new Error('deepl_auth_key saknas i .env');
  return m[1];
};

const apiHost = (key) => (key.endsWith(':fx') ? 'api-free.deepl.com' : 'api.deepl.com');

export async function deeplRequest(key, endpoint, options = {}) {
  const res = await fetch(`https://${apiHost(key)}/v2/${endpoint}`, {
    ...options,
    headers: { Authorization: `DeepL-Auth-Key ${key}`, ...(options.headers || {}) },
  });
  if (res.status === 429) return null; // caller retries
  if (res.status === 456) throw new Error('DeepL-kvoten är slut (456)');
  if (!res.ok) throw new Error(`DeepL ${endpoint}: HTTP ${res.status} ${await res.text()}`);
  return res.json();
}

// xml defines only these five named entities; anything else (&nbsp; etc) must be escaped
const escapeAmps = (s) => s.replace(/&(?!(?:amp|lt|gt|quot|apos);|#\d+;|#x[\da-fA-F]+;)/g, '&amp;');

const unescapeEntities = (s) =>
  s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&');

async function translateBatch(key, texts, targetLang) {
  for (let attempt = 0; attempt < 5; attempt += 1) {
    const json = await deeplRequest(key, 'translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: texts.map(escapeAmps),
        source_lang: 'EN',
        target_lang: targetLang.toUpperCase(),
        tag_handling: 'xml',
        ignore_tags: ['x'],
        non_splitting_tags: ['l'],
        preserve_formatting: true,
      }),
    });
    if (json) return json.translations.map((t) => unescapeEntities(t.text));
    await new Promise((r) => setTimeout(r, 2000 * (attempt + 1)));
  }
  throw new Error('DeepL: fortfarande 429 efter 5 försök');
}

export async function translatePool(key, pool, targetLang) {
  const results = new Array(pool.length);
  let batch = [];
  let batchChars = 0;
  let done = 0;
  const flush = async () => {
    if (!batch.length) return;
    const translated = await translateBatch(
      key,
      batch.map((b) => b.text),
      targetLang
    );
    batch.forEach((b, i) => {
      results[b.idx] = translated[i];
    });
    done += batch.length;
    process.stdout.write(`\r  översatt ${done}/${pool.length} textblock`);
    batch = [];
    batchChars = 0;
  };
  for (let idx = 0; idx < pool.length; idx += 1) {
    const text = pool[idx];
    if (batch.length >= BATCH_MAX_TEXTS || batchChars + text.length > BATCH_MAX_CHARS) await flush();
    batch.push({ idx, text });
    batchChars += text.length;
  }
  await flush();
  if (pool.length) process.stdout.write('\n');
  return results;
}

const md5 = (s) => crypto.createHash('md5').update(s).digest('hex');

const listMarkdown = (dir) =>
  dir.endsWith('.md')
    ? [dir]
    : fs
        .readdirSync(dir, { recursive: true, withFileTypes: true })
        .filter((e) => e.isFile() && e.name.endsWith('.md'))
        .map((e) => path.join(e.parentPath ?? e.path, e.name))
        .sort();

/** Prepare one file: returns pool texts plus everything needed to reassemble. */
export function prepareFile(raw) {
  const parsed = matter(raw);
  const pool = [];
  const queue = (text) => pool.push(text) - 1;

  const fmSlots = collectFrontmatter(parsed.data).map(({ node, key }) => ({
    node,
    key,
    idx: queue(node[key]),
  }));

  const masked = maskBody(parsed.content);
  const lines = masked.text.split('\n');
  const lineSlots = [];
  lines.forEach((line, lineNo) => {
    const { prefix, rest } = splitLine(line);
    if (isTranslatable(rest)) lineSlots.push({ lineNo, prefix, idx: queue(rest) });
  });
  masked.attrTexts.forEach((val, i) => {
    if (i >= 0) queue(val);
  });
  const attrBase = pool.length - masked.attrTexts.length;

  const assemble = (results) => {
    fmSlots.forEach(({ node, key, idx }) => {
      node[key] = results[idx];
    });
    lineSlots.forEach(({ lineNo, prefix, idx }) => {
      lines[lineNo] = prefix + results[idx];
    });
    const attrTexts = masked.attrTexts.map((val, i) => results[attrBase + i] ?? val);
    const body = unmaskBody(lines.join('\n'), { ...masked, attrTexts });
    return matter.stringify(body, parsed.data);
  };

  return { pool, assemble };
}

async function main() {
  const args = process.argv.slice(2);
  const flags = new Set(args.filter((a) => a.startsWith('--')).map((a) => a.split('=')[0]));
  const getFlag = (name, def) =>
    args.find((a) => a.startsWith(`--${name}=`))?.split('=')[1] ?? def;
  const sources = args.filter((a) => !a.startsWith('--'));
  const dirs = sources.length ? sources : DEFAULT_SOURCES;
  const write = flags.has('--write');
  const force = flags.has('--force');
  const lang = getFlag('lang', 'sv');
  const limit = Number(getFlag('limit', Infinity));

  const manifest = fs.existsSync(MANIFEST_PATH)
    ? JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'))
    : {};

  const files = dirs.flatMap(listMarkdown).slice(0, limit);
  const jobs = [];
  let skipped = 0;
  for (const file of files) {
    const raw = fs.readFileSync(file, 'utf8');
    const rel = file.split(path.sep).join('/');
    const outPath = path.join(OUT_ROOT, path.relative('content', file));
    const hash = md5(raw);
    if (!force && manifest[rel]?.[lang] === hash && fs.existsSync(outPath)) {
      skipped += 1;
      continue;
    }
    jobs.push({ file, rel, outPath, hash, ...prepareFile(raw) });
  }

  const totalChars = jobs.reduce((n, j) => n + j.pool.reduce((m, t) => m + t.length, 0), 0);
  console.log(
    `${files.length} filer, ${jobs.length} att översätta (${skipped} oförändrade), ~${totalChars.toLocaleString('sv-SE')} tecken till DeepL`
  );
  if (!write) {
    console.log(`Dry run. Kör med --write för att översätta till ${OUT_ROOT}/`);
    return;
  }
  if (!jobs.length) return;

  const key = readEnvKey();
  const usage = await deeplRequest(key, 'usage');
  const remaining = usage.character_limit - usage.character_count;
  console.log(
    `Kvot: ${usage.character_count.toLocaleString('sv-SE')}/${usage.character_limit.toLocaleString('sv-SE')} använda, ${remaining.toLocaleString('sv-SE')} kvar`
  );
  if (totalChars > remaining && !force) {
    throw new Error(`Uppskattat ${totalChars} tecken > ${remaining} kvar. Kör med --force för att ändå försöka.`);
  }

  for (const job of jobs) {
    console.log(`→ ${job.rel}`);
    const results = await translatePool(key, job.pool, lang);
    fs.mkdirSync(path.dirname(job.outPath), { recursive: true });
    fs.writeFileSync(job.outPath, job.assemble(results));
    manifest[job.rel] = { ...(manifest[job.rel] || {}), [lang]: job.hash };
    fs.mkdirSync(path.dirname(MANIFEST_PATH), { recursive: true });
    fs.writeFileSync(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`);
  }

  const after = await deeplRequest(key, 'usage');
  console.log(
    `Klart. Kvot nu: ${after.character_count.toLocaleString('sv-SE')}/${after.character_limit.toLocaleString('sv-SE')}`
  );
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
}
