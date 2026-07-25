#!/usr/bin/env node
/**
 * Sync content/docs pages to Intercom Help Center articles.
 *
 * Reads content/docs/navigation.yaml, converts each page's markdown/MDX to
 * Intercom-safe HTML, and creates/updates collections and articles through
 * the Intercom REST API.
 *
 * Usage:
 *   node scripts/intercom-sync-docs.mjs [options]
 *
 * Options:
 *   --dry-run          Convert only; print what would be synced. No API calls.
 *   --limit <n>        Sync at most n articles (default: all).
 *   --nav <name>       Only sync pages under the given top nav group.
 *   --publish         Create/update articles as published (default: draft).
 *   --base-url <url>   Base URL for internal links (default: https://www.optitech-sverige.se).
 *   --image-base-url <url>  Base URL for images (default: raw.githubusercontent.com for this repo).
 *   --sample <slug>    Print converted HTML for one slug and exit.
 *
 * Requires INTERCOM_ACCESS_TOKEN_SECRET in .env.
 * State (slug -> article id) is stored in scripts/data/intercom-sync-state.json
 * so re-runs update existing articles instead of creating duplicates.
 */

import 'dotenv/config';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import matter from 'gray-matter';
import he from 'he';
import yaml from 'js-yaml';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import { unified } from 'unified';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DOCS_DIR = path.join(ROOT, 'content', 'docs');
const NAV_FILE = path.join(DOCS_DIR, 'navigation.yaml');
const STATE_FILE = path.join(ROOT, 'scripts', 'data', 'intercom-sync-state.json');
const API = 'https://api.intercom.io';
const API_VERSION = '2.13';

// ---------------------------------------------------------------------------
// Markdown / MDX -> HTML
// ---------------------------------------------------------------------------

/** Strip code fence meta ("```sql {1,3} filename=..." -> "```sql"). */
export function cleanCodeFences(md) {
  return md.replace(/^(\s*```)([\w-]*)[^\n]*$/gm, '$1$2');
}

/**
 * Replace MDX components with plain-markdown/HTML equivalents so the page
 * can be rendered outside the site.
 */
export function stripMdxComponents(md) {
  let out = md;

  // HTML comments
  out = out.replace(/<!--[\s\S]*?-->/g, '');

  // Admonition / Callout -> blockquote with a bold label
  out = out.replace(
    /<(Admonition|Callout)([^>]*)>/g,
    (m, name, attrs) => {
      const title = /title="([^"]*)"/.exec(attrs)?.[1];
      const type = /type="([^"]*)"/.exec(attrs)?.[1];
      const label = title || (type ? type[0].toUpperCase() + type.slice(1) : 'Note');
      return `<blockquote>\n\n**${label}:**\n`;
    }
  );
  out = out.replace(/<\/(Admonition|Callout)>/g, '\n</blockquote>');

  // CTA -> link paragraph
  out = out.replace(/<CTA([^>]*)\/>/g, (m, attrs) => {
    const url = /buttonUrl="([^"]*)"/.exec(attrs)?.[1];
    const text = /buttonText="([^"]*)"/.exec(attrs)?.[1] || 'Learn more';
    const title = /title="([^"]*)"/.exec(attrs)?.[1];
    if (!url) return '';
    return `${title ? `**${title}** ` : ''}[${text}](${url})`;
  });

  // YoutubeIframe -> link
  out = out.replace(
    /<YoutubeIframe[^>]*embedId="([^"]*)"[^>]*\/?>/g,
    'Watch the video: https://www.youtube.com/watch?v=$1'
  );

  // ExternalCode -> link
  out = out.replace(/<ExternalCode[^>]*url="([^"]*)"[^>]*\/?>/g, 'Code example: $1');

  // DocsList / CheckItem titles -> bold text
  out = out.replace(/<DocsList[^>]*title="([^"]*)"[^>]*>/g, '**$1**\n');
  out = out.replace(
    /<CheckItem[^>]*title="([^"]*)"[^>]*>/g,
    (m, title) => `**${title}**\n`
  );

  // Card links with a description attribute -> list items
  out = out.replace(
    /^\s*<a\s+([^>]*description="[^"]*"[^>]*)>([\s\S]*?)<\/a>\s*$/gm,
    (m, attrs, text) => {
      const href = /href="([^"]*)"/.exec(attrs)?.[1] || '';
      const desc = /description="([^"]*)"/.exec(attrs)?.[1] || '';
      const label = text.trim() || /title="([^"]*)"/.exec(attrs)?.[1] || href;
      return `- [${label}](${href})${desc ? `: ${desc}` : ''}`;
    }
  );

  // Self-closing components with no content equivalent
  out = out.replace(/<(NeedHelp|CopyPrompt|LatencyCalculator|RegionRequest)[^>]*\/>/g, '');

  // Any remaining capitalized JSX tags (Steps, Tabs, CodeTabs, InfoBlock,
  // FeatureList, TwoColumnLayout.Step, ...) -> drop tag, keep content
  out = out.replace(/<\/?[A-Z][\w.]*(\s[^>]*)?\/?>/g, '');

  return out;
}

/** Serialize an mdast tree (remark-parse + remark-gfm) to simple HTML. */
export function mdastToHtml(tree, opts) {
  const esc = (s) => he.escape(String(s));
  const fixUrl = (url, base) => {
    if (!url) return url;
    if (url.startsWith('/')) return `${base}${url}`;
    return url;
  };

  function children(node) {
    return (node.children || []).map(walk).join('');
  }

  function walk(node) {
    switch (node.type) {
      case 'root':
        return (node.children || []).map(walk).join('\n');
      case 'heading': {
        const level = Math.min(Math.max(node.depth, 1), 6);
        return `<h${level}>${children(node)}</h${level}>`;
      }
      case 'paragraph': {
        const inner = children(node).trim();
        return inner ? `<p>${inner}</p>` : '';
      }
      case 'text':
        return esc(node.value);
      case 'strong':
        return `<b>${children(node)}</b>`;
      case 'emphasis':
        return `<i>${children(node)}</i>`;
      case 'delete':
        return `<s>${children(node)}</s>`;
      case 'inlineCode':
        return `<code>${esc(node.value)}</code>`;
      case 'code':
        return `<pre><code>${esc(node.value)}</code></pre>`;
      case 'link':
        return `<a href="${esc(fixUrl(node.url, opts.baseUrl))}">${children(node)}</a>`;
      case 'image':
        return `<img src="${esc(fixUrl(node.url, opts.imageBaseUrl))}" alt="${esc(node.alt || '')}"/>`;
      case 'list': {
        const tag = node.ordered ? 'ol' : 'ul';
        return `<${tag}>${children(node)}</${tag}>`;
      }
      case 'listItem': {
        const inner = (node.children || [])
          .map((child) => (child.type === 'paragraph' ? children(child) : walk(child)))
          .join('');
        return `<li>${inner}</li>`;
      }
      case 'blockquote':
        return `<blockquote>${children(node)}</blockquote>`;
      case 'thematicBreak':
        return '<hr/>';
      case 'break':
        return '<br/>';
      case 'table': {
        const [head, ...rows] = node.children || [];
        const renderRow = (row, cellTag) =>
          `<tr>${(row.children || [])
            .map((cell) => `<${cellTag}>${children(cell)}</${cellTag}>`)
            .join('')}</tr>`;
        const thead = head ? `<thead>${renderRow(head, 'th')}</thead>` : '';
        const tbody = rows.length
          ? `<tbody>${rows.map((row) => renderRow(row, 'td')).join('')}</tbody>`
          : '';
        return `<table>${thead}${tbody}</table>`;
      }
      case 'html':
        return node.value;
      default:
        return children(node);
    }
  }

  return walk(tree);
}

const processor = unified().use(remarkParse).use(remarkGfm);

/**
 * Intercom rejects tables nested inside list items. Move any table found
 * inside a list to just after that list at the top level.
 */
export function hoistTablesOutOfLists(tree) {
  const pullTables = (node) => {
    const tables = [];
    for (const child of node.children || []) {
      if (child.type === 'table') {
        tables.push(child);
      } else if (child.children) {
        tables.push(...pullTables(child));
      }
    }
    if (node.children) node.children = node.children.filter((c) => c.type !== 'table');
    return tables;
  };

  const out = [];
  for (const node of tree.children || []) {
    out.push(node);
    if (node.type === 'list') out.push(...pullTables(node));
  }
  tree.children = out;
  return tree;
}

/** Convert one docs markdown file body to Intercom-ready HTML. */
export function convertMarkdown(mdBody, { baseUrl, imageBaseUrl }) {
  const cleaned = cleanCodeFences(stripMdxComponents(mdBody));
  const tree = hoistTablesOutOfLists(processor.parse(cleaned));
  return mdastToHtml(tree, { baseUrl, imageBaseUrl })
    .replace(/href="\//g, `href="${baseUrl}/`)
    .replace(/src="\//g, `src="${imageBaseUrl}/`)
    .replace(/\n{2,}/g, '\n');
}

// ---------------------------------------------------------------------------
// navigation.yaml -> ordered page list with collection paths
// ---------------------------------------------------------------------------

/** Flatten navigation.yaml into [{ slug, group, section }] in nav order. */
export function collectNavPages(nav) {
  const pages = [];
  const seen = new Set();

  function addPage(slug, group, section) {
    if (!slug || seen.has(slug)) return;
    seen.add(slug);
    pages.push({ slug, group, section });
  }

  function walkItems(items, group, section) {
    for (const item of items || []) {
      if (item.section) {
        walkItems(item.items, group, section || item.section);
        continue;
      }
      if (item.slug) addPage(item.slug, group, section);
      if (item.items) walkItems(item.items, group, section);
    }
  }

  for (const entry of nav) {
    const group = entry.nav;
    if (!group) continue;
    if (entry.slug) addPage(entry.slug, group, null);
    walkItems(entry.items, group, null);
    for (const sub of entry.subnav || []) {
      if (sub.slug) addPage(sub.slug, group, sub.title || null);
      walkItems(sub.items, group, sub.title || null);
    }
  }

  return pages;
}

// ---------------------------------------------------------------------------
// Intercom API helpers
// ---------------------------------------------------------------------------

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function intercom(method, endpoint, body, token) {
  for (let attempt = 0; attempt < 5; attempt += 1) {
    const res = await fetch(`${API}${endpoint}`, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        'Intercom-Version': API_VERSION,
        Accept: 'application/json',
        ...(body ? { 'Content-Type': 'application/json' } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
    });
    if (res.status === 429) {
      await sleep(5000);
      continue;
    }
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      const message = data?.errors?.[0]?.message || res.statusText;
      throw new Error(`${method} ${endpoint} -> ${res.status} ${message}`);
    }
    return data;
  }
  throw new Error(`${method} ${endpoint} -> rate limited after retries`);
}

async function listAllCollections(token) {
  const collections = [];
  let page = 1;
  for (;;) {
    const data = await intercom('GET', `/help_center/collections?per_page=200&page=${page}`, null, token);
    collections.push(...(data.data || []));
    if (!data.pages || page >= data.pages.total_pages) break;
    page += 1;
  }
  return collections;
}

async function ensureCollection(name, parentId, existing, token, dryRun) {
  // Intercom returns collection names HTML-escaped ("Manage &amp; operate").
  const found = existing.find(
    (c) => he.decode(c.name) === name && String(c.parent_id || '') === String(parentId || '')
  );
  if (found) return found.id;
  if (dryRun) return `dry-${name}`;
  const body = { name };
  if (parentId) body.parent_id = String(parentId);
  const created = await intercom('POST', '/help_center/collections', body, token);
  existing.push(created);
  await sleep(200);
  return created.id;
}

// ---------------------------------------------------------------------------
// Sync state
// ---------------------------------------------------------------------------

function loadState() {
  try {
    return JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'));
  } catch {
    return { articles: {} };
  }
}

function saveState(state) {
  fs.mkdirSync(path.dirname(STATE_FILE), { recursive: true });
  fs.writeFileSync(STATE_FILE, `${JSON.stringify(state, null, 2)}\n`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function parseArgs(argv) {
  const args = {
    dryRun: false,
    limit: Infinity,
    nav: null,
    publish: false,
    baseUrl: 'https://www.optitech-sverige.se',
    imageBaseUrl: 'https://raw.githubusercontent.com/optitech-admin/ny-optitech/main/public',
    sample: null,
  };
  for (let i = 0; i < argv.length; i += 1) {
    switch (argv[i]) {
      case '--dry-run':
        args.dryRun = true;
        break;
      case '--limit':
        args.limit = Number(argv[++i]);
        break;
      case '--nav':
        args.nav = argv[++i];
        break;
      case '--publish':
        args.publish = true;
        break;
      case '--base-url':
        args.baseUrl = argv[++i].replace(/\/$/, '');
        break;
      case '--image-base-url':
        args.imageBaseUrl = argv[++i].replace(/\/$/, '');
        break;
      case '--sample':
        args.sample = argv[++i];
        break;
      default:
        throw new Error(`Unknown option: ${argv[i]}`);
    }
  }
  return args;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const token = process.env.INTERCOM_ACCESS_TOKEN_SECRET;
  if (!token && !args.dryRun && !args.sample) {
    console.error('INTERCOM_ACCESS_TOKEN_SECRET is not set.');
    process.exit(1);
  }

  const nav = yaml.load(fs.readFileSync(NAV_FILE, 'utf8'));
  let pages = collectNavPages(nav);
  if (args.nav) pages = pages.filter((p) => p.group.toLowerCase() === args.nav.toLowerCase());

  // Read + convert
  const converted = [];
  const skipped = [];
  for (const page of pages) {
    const file = path.join(DOCS_DIR, `${page.slug}.md`);
    if (!fs.existsSync(file)) {
      skipped.push(`${page.slug} (file missing)`);
      continue;
    }
    const { data: fm, content } = matter(fs.readFileSync(file, 'utf8'));
    if (fm.isDraft) {
      skipped.push(`${page.slug} (isDraft)`);
      continue;
    }
    converted.push({
      ...page,
      title: fm.title || page.slug,
      description: (fm.summary || '').replace(/\s+/g, ' ').trim().slice(0, 140),
      html: convertMarkdown(content, { baseUrl: args.baseUrl, imageBaseUrl: args.imageBaseUrl }),
    });
  }

  if (args.sample) {
    const hit = converted.find((p) => p.slug === args.sample);
    if (!hit) {
      console.error(`Slug not found: ${args.sample}`);
      process.exit(1);
    }
    console.log(hit.html);
    return;
  }

  const toSync = converted.slice(0, args.limit);
  console.log(
    `Pages in nav: ${pages.length}, converted: ${converted.length}, skipped: ${skipped.length}, syncing: ${toSync.length}${args.dryRun ? ' (dry run)' : ''}`
  );
  if (skipped.length) console.log(`Skipped:\n  ${skipped.join('\n  ')}`);

  if (args.dryRun) {
    for (const page of toSync) {
      console.log(
        `- [${page.group}${page.section ? ` > ${page.section}` : ''}] ${page.title} (${page.slug}, ${page.html.length} chars)`
      );
    }
    return;
  }

  const me = await intercom('GET', '/me', null, token);
  const authorId = Number(me.id);
  const state = loadState();
  const collections = await listAllCollections(token);
  const stats = { created: 0, updated: 0, unchanged: 0, failed: 0 };

  for (const page of toSync) {
    try {
      const groupId = await ensureCollection(page.group, null, collections, token, false);
      const parentId = page.section
        ? await ensureCollection(page.section, groupId, collections, token, false)
        : groupId;

      const payload = {
        title: page.title,
        description: page.description,
        body: page.html,
        author_id: authorId,
        state: args.publish ? 'published' : 'draft',
        parent_id: Number(parentId),
        parent_type: 'collection',
      };
      const hash = crypto.createHash('sha256').update(JSON.stringify(payload)).digest('hex');
      const known = state.articles[page.slug];

      if (known && known.hash === hash) {
        stats.unchanged += 1;
        continue;
      }
      if (known) {
        await intercom('PUT', `/articles/${known.id}`, payload, token);
        state.articles[page.slug] = { id: known.id, hash };
        stats.updated += 1;
        console.log(`updated  ${page.slug}`);
      } else {
        const created = await intercom('POST', '/articles', payload, token);
        state.articles[page.slug] = { id: created.id, hash };
        stats.created += 1;
        console.log(`created  ${page.slug}`);
      }
      saveState(state);
      await sleep(250);
    } catch (err) {
      stats.failed += 1;
      console.error(`FAILED   ${page.slug}: ${err.message}`);
    }
  }

  console.log(
    `Done. created=${stats.created} updated=${stats.updated} unchanged=${stats.unchanged} failed=${stats.failed}`
  );
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
