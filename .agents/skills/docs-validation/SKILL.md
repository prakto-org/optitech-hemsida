---
name: docs-validation
description: 'Pre-commit validation of changed content markdown. Use when the user asks to validate docs, check content before committing, run pre-commit checks, or verify frontmatter, headings, navigation entries, image paths, redirectFrom, or em dashes in changed files under content/docs, content/guides, or content/changelog.'
---

# Docs validation

Run before committing documentation changes. Checks the most common errors that break the build or violate style rules on changed markdown files.

## When to use

- "Validate my docs changes" / "check before I commit"
- After creating or editing files under `content/docs/`, `content/guides/`, or `content/changelog/`
- When a docs build fails on frontmatter or navigation errors

## Procedure

### 1. Find changed files

```bash
git status --short
```

Collect all added or modified `.md` files under `content/docs/`, `content/guides/`, and `content/changelog/`. If no markdown files are changed, report that and stop.

### 2. Check each file

Run these checks on every changed markdown file:

**Frontmatter title present.** Read the frontmatter. If `title` is missing, flag:
> **Error:** `[file]` is missing the required `title` field. The build will fail.

**No h1 heading in the body.** Check for any line starting with `# ` (single `#`) below the frontmatter block. If found, flag:
> **Error:** `[file]` line [N] has an h1 heading. Remove it. The page title is auto-generated from the `title` frontmatter field.

**New docs files: slug in navigation.yaml.** For newly added files under `content/docs/`, derive the slug (path relative to `content/docs/`, without `.md`) and search `content/docs/navigation.yaml` for it. If not found, flag:
> **Warning:** `[file]` slug `[slug]` is not in `navigation.yaml`. Add an entry or the page will be unreachable.

Skip this check for `content/guides/` and `content/changelog/`. Those sections do not use `navigation.yaml`.

**Image references exist.** Find all `![...](/docs/...)` image references. For each, verify the file exists under `public/`. If not, flag:
> **Warning:** `[file]` image `[path]` not found in `public/`. Add the file or fix the path.

**redirectFrom paths are well-formed.** If the frontmatter includes `redirectFrom`, check that each entry starts and ends with `/`. Flag any that do not:
> **Error:** `[file]` redirectFrom entry `[value]` must start and end with `/`.

**No em dashes in content.** Scan the file body for em dash characters. If found, flag the line numbers:
> **Warning:** `[file]` lines [N, N] contain an em dash. Rewrite using a comma, parentheses, or a new sentence.

### 3. Report

Summarize findings in three groups:

- **Errors:** must fix before committing (missing title, h1 in body, malformed redirectFrom)
- **Warnings:** should fix; will not break the build (missing nav entry, missing image, em dash)
- **Passed:** confirm which checks passed cleanly

If there are no errors or warnings, say clearly: "All checks passed. Ready to commit."

## Notes

- Prettier formatting and the `updatedOn` frontmatter timestamp are handled automatically by the pre-commit hook on staged files. Do not update them manually and do not run `npm run fix:md` as part of this workflow.
- Guides and changelog files follow the same frontmatter and heading rules but never need a `navigation.yaml` entry.
