import { describe, expect, it } from 'vitest';

import {
  maskBody,
  unmaskBody,
  splitLine,
  isTranslatable,
  collectFrontmatter,
  prepareFile,
} from './translate-content.mjs';

describe('maskBody/unmaskBody', () => {
  it('roundtrips untouched text back to the original', () => {
    const src = [
      '## Quick answer',
      '',
      'Use `psql` to connect. See [the guide](/docs/connect/query-with-psql-editor) for details.',
      '',
      '```bash filename="Terminal"',
      'neon projects list',
      '```',
      '',
      '<CTA title="See OptiTech in action" description="No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />',
      '',
      '<!-- keep me -->',
      'Visit https://optitech.com/pricing today.',
    ].join('\n');
    const masked = maskBody(src);
    expect(unmaskBody(masked.text, masked)).toBe(src);
  });

  it('protects code, urls, link targets and JSX from the API payload', () => {
    const src =
      'Use `psql` via [guide](/docs/guide) at https://x.com\n```js\nconst a = 1;\n```\n<CTA buttonUrl="/x" title="Hello world" />';
    const { text } = maskBody(src);
    expect(text).not.toContain('psql');
    expect(text).not.toContain('/docs/guide');
    expect(text).not.toContain('https://x.com');
    expect(text).not.toContain('const a');
    expect(text).not.toContain('buttonUrl');
    expect(text).toContain('<l id="0">guide</l>'); // link label stays translatable
  });

  it('handles link labels that are bare urls', () => {
    const src =
      'located at [https://example.com/legal/mcsa](https://example.com/legal/mcsa) (the "Agreement")';
    const masked = maskBody(src);
    expect(masked.text).toMatch(/<l id="0"><x id="\d+"\/><\/l>/);
    expect(unmaskBody(masked.text, masked)).toBe(src);
  });

  it('masks raw html tags but keeps their inner text translatable', () => {
    const src =
      '<blockquote>\nQuoted prose here\n</blockquote>\nLine with <sup>note</sup> and <br/> break';
    const masked = maskBody(src);
    expect(masked.text).not.toContain('<blockquote>');
    expect(masked.text).not.toContain('<sup>');
    expect(masked.text).toContain('Quoted prose here');
    expect(masked.text).toContain('note');
    expect(unmaskBody(masked.text, masked)).toBe(src);
  });

  it('masks deeply nested JSX expressions (arrays of objects)', () => {
    const src = [
      '<ComputeCalculator',
      'className="mt-10"',
      'databases={[',
      "{ type: 'Dev databases', usage: 'Used interminently' },",
      "{ type: 'Test databases', usage: 'Used interminently' },",
      ']}',
      '/>',
      '',
      'Prose after.',
    ].join('\n');
    const masked = maskBody(src);
    expect(masked.text).toBe('<x id="0"/>\n\nProse after.');
    expect(unmaskBody(masked.text, masked)).toBe(src);
  });

  it('masks multi-line JSX with nested brace expressions', () => {
    const src = [
      '<QuoteBlock',
      'quote="We manage 300,000+ projects."',
      'author={{',
      "name: 'Himanshu Bandoth',",
      "company: 'Software Engineer at Retool',",
      '}}',
      '/>',
    ].join('\n');
    const masked = maskBody(src);
    expect(masked.text).toBe('<x id="0"/>');
    expect(masked.attrTexts).toEqual(['We manage 300,000+ projects.']);
    expect(unmaskBody(masked.text, masked)).toBe(src);
  });

  it('exposes visible JSX attributes for translation', () => {
    const src = '<CTA title="Hello world" buttonUrl="/contact-sales" count={3} />';
    const masked = maskBody(src);
    expect(masked.attrTexts).toEqual(['Hello world']);
    const out = unmaskBody(masked.text, { ...masked, attrTexts: ['Hej världen'] });
    expect(out).toBe('<CTA title="Hej världen" buttonUrl="/contact-sales" count={3} />');
  });

  it('keeps translated link labels attached to their targets', () => {
    const masked = maskBody('See [the guide](/docs/g) and ![alt text](/img.png)');
    const translated = masked.text.replace('the guide', 'guiden').replace('alt text', 'alt-text');
    const out = unmaskBody(translated, masked);
    expect(out).toBe('See [guiden](/docs/g) and ![alt-text](/img.png)');
  });

  it('folds compound-word fragments back into the link label', () => {
    const masked = maskBody(
      'the [incident flow](/faqs/x) carries it and the [supplier register](/faqs/y) runs'
    );
    const translated = masked.text
      .replace('the <l id="0">incident flow</l> carries it', '<l id="0">Inc</l>identflödet bär den')
      .replace(
        'the <l id="1">supplier register</l> runs',
        'lever<l id="1">antörsregistret</l> körs'
      );
    const out = unmaskBody(translated, masked);
    expect(out).toBe('[Incidentflödet](/faqs/x) bär den and [leverantörsregistret](/faqs/y) körs');
  });
});

describe('splitLine/isTranslatable', () => {
  it('separates markdown syntax from prose', () => {
    expect(splitLine('## Quick answer')).toEqual({ prefix: '## ', rest: 'Quick answer' });
    expect(splitLine('- **MFA**: coverage')).toEqual({ prefix: '- ', rest: '**MFA**: coverage' });
    expect(splitLine('3. Item three').prefix).toBe('3. ');
    expect(splitLine('> quoted text').prefix).toBe('> ');
  });

  it('skips lines with no prose', () => {
    expect(isTranslatable('<x id="0"/>')).toBe(false);
    expect(isTranslatable('| --- | --- |')).toBe(false);
    expect(isTranslatable('Some words <x id="1"/>')).toBe(true);
  });
});

describe('collectFrontmatter', () => {
  it('collects only whitelisted string fields, recursively', () => {
    const data = {
      title: 'How does OptiTech help?',
      slug: 'how-does-optitech-help',
      updatedOn: '2026-07-18T07:07:45.262Z',
      seo: { title: 'SEO title', metaRobotsNoindex: true },
      previousLink: { title: 'Previous question', slug: 'prev' },
      redirectFrom: [],
    };
    const found = collectFrontmatter(data);
    const values = found.map(({ node, key }) => node[key]);
    expect(values).toEqual(['How does OptiTech help?', 'SEO title', 'Previous question']);
  });
});

describe('prepareFile', () => {
  it('reassembles a translated file with frontmatter, prose, and attrs replaced', () => {
    const raw = [
      '---',
      "title: 'Hello title'",
      'slug: hello',
      '---',
      '',
      '## Heading text',
      '',
      'Body [link](/target) here.',
      '',
      '<CTA title="Attr text" buttonUrl="/x" />',
    ].join('\n');
    const { pool, assemble } = prepareFile(raw);
    expect(pool).toEqual([
      'Hello title',
      'Heading text',
      'Body <l id="0">link</l> here.',
      'Attr text',
    ]);
    const out = assemble([
      'Hej titel',
      'Rubriktext',
      'Brödtext <l id="0">länk</l> här.',
      'Attributtext',
    ]);
    expect(out).toContain('title: Hej titel');
    expect(out).toContain('slug: hello');
    expect(out).toContain('## Rubriktext');
    expect(out).toContain('Brödtext [länk](/target) här.');
    expect(out).toContain('<CTA title="Attributtext" buttonUrl="/x" />');
  });
});
