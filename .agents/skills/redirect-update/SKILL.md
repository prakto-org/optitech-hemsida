---
name: redirect-update
description: 'Handle redirects when moving, renaming, or consolidating documentation files. Use when asked to move a doc, rename a docs page, add redirectFrom, fix broken links after a move, merge pages, or update cross-references and navigation.yaml for relocated content under content/docs.'
---

# Redirect update

When moving or renaming documentation files, add frontmatter redirects and update every reference so no links break.

## When to use

- Moving a file: `content/docs/old-section/page.md` to `content/docs/new-section/page.md`
- Renaming a page or consolidating multiple pages into one
- "Add a redirect" / "update links after moving this doc"

## How redirects work

Neon uses frontmatter redirects. Add old paths to the `redirectFrom` array in the file at its **new** location. The build generates Next.js redirects automatically; never edit `next.config.js` for doc redirects.

Rules:
- Always array format, even for a single redirect
- Paths are relative, start with `/docs/`, and must start and end with `/` (slash-wrapped), for example `/docs/old-section/page/`
- Keep all historical paths if the file moved before

## Procedure

1. **Move or rename the file.**
2. **Add `redirectFrom` to the destination frontmatter:**

   ```yaml
   ---
   title: 'Page Title'
   redirectFrom:
     - /docs/old-section/page/
   enableTableOfContents: true
   ---
   ```

3. **Find and update all cross-references repo-wide:**

   ```bash
   rg "old-name" content/ --type md
   rg "/old-section/page" content/ --type md
   rg "old-name" content/docs/navigation.yaml
   ```

   Update internal links to the new path. Use relative paths (`/docs/new-section/page`), not absolute URLs. Verify anchor links still exist in target files.

4. **Update `content/docs/navigation.yaml`** if the slug changed.
5. **Update hub and landing pages** that link to the moved content (DetailIconCards, DocsList, TechCards entries).

## Worked examples

**Moving a guide to a different section.** File `content/docs/connect/connection-strings.md` moves to `content/docs/guides/connection-strings.md`. Add to the new file:

```yaml
redirectFrom:
  - /docs/connect/connection-strings/
```

**Renaming a page.** `content/docs/guides/neon-authorize.md` becomes `content/docs/guides/neon-rls.md`. Add to the new file:

```yaml
redirectFrom:
  - /docs/guides/neon-authorize/
```

**Multiple moves (keep history).** A page moved several times keeps every old path:

```yaml
redirectFrom:
  - /docs/conceptual-guides/autoscaling/
  - /docs/introduction/autoscaling/
  - /docs/manage/compute-autoscaling/
```

**Consolidating pages.** When merging pages into one, add all old paths to the target, remove the old files, remove their nav entries, and update internal links:

```yaml
redirectFrom:
  - /docs/reference/neon-cli/
  - /docs/reference/cli-reference/
  - /docs/reference/cli-commands/
```

**Daisy-chained redirects.** If the file being moved already has `redirectFrom` entries, preserve them and add the path it is moving away from:

```yaml
# was: redirectFrom: [/docs/very-old-section/page/]
redirectFrom:
  - /docs/very-old-section/page/
  - /docs/old-section/page/
```

This keeps every historical URL working without redirect chains.

## Validation checklist

- [ ] `redirectFrom` added to the file at the new location
- [ ] All previous paths included (check whether the file already had redirects)
- [ ] All cross-references in `.md`/`.mdx` files updated
- [ ] `navigation.yaml` updated if needed
- [ ] Hub/landing pages updated
- [ ] Links use relative paths, not absolute URLs
- [ ] Anchor links verified in target files
