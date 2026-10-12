const fs = require('fs');

const { glob } = require('glob');
const matter = require('gray-matter');

const getExcerpt = require('./get-excerpt');

const postCache = new Map();
const slugCache = new Map();

const shouldUseCache = () => process.env.NODE_ENV !== 'development';

const getPostSlugs = async (pathname) => {
  if (shouldUseCache() && slugCache.has(pathname)) {
    return slugCache.get(pathname);
  }

  let files = [];
  try {
    files = glob.sync(`${pathname}/**/*.md`, {
      ignore: ['**/README.md', '**/unused/**', '**/shared-content/**', '**/GUIDE_TEMPLATE.md'],
    });
  } catch (_e) {
    files = [];
  }

  // On Cloudflare Workers (OpenNext) glob either returns nothing (fall back
  // to the build-time generated slug manifest, see
  // scripts/generate-content-manifest.mjs) or returns absolute paths rooted
  // at the worker bundle dir — normalize both to slugs relative to the
  // content dir, with the leading '/' preserved.
  let slugs;
  if (files.length > 0) {
    slugs = files.map((file) => {
      const normalized = file.replaceAll('\\', '/');
      const idx = normalized.lastIndexOf(pathname);
      const rel = idx >= 0 ? normalized.slice(idx + pathname.length) : normalized;
      return rel.replace(/\.md$/, '');
    });
  } else {
    try {
      const manifest = require('../data/content-manifest.json');
      slugs = manifest[pathname] || [];
    } catch (_e) {
      slugs = [];
    }
  }

  if (shouldUseCache()) {
    slugCache.set(pathname, slugs);
  }

  return slugs;
};

const getPostBySlug = (slug, pathname) => {
  const cacheKey = `${pathname}:${slug}`;

  if (shouldUseCache() && postCache.has(cacheKey)) {
    return postCache.get(cacheKey);
  }

  try {
    // Slugs from getPostSlugs() start with '/'. Strip it so the path never
    // contains '//' — Node tolerates double slashes, but the Cloudflare
    // Workers in-memory filesystem does not.
    const source = fs.readFileSync(
      `${process.cwd()}/${pathname}/${slug.replace(/^\/+/, '')}.md`,
      'utf-8'
    );
    const { data, content } = matter(source);
    const excerpt = getExcerpt(content, 200);
    const post = { data, content, excerpt };

    if (shouldUseCache()) {
      postCache.set(cacheKey, post);
    }

    return post;
  } catch (_e) {
    return null;
  }
};

module.exports = {
  getPostSlugs,
  getPostBySlug,
};
