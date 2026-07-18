---
description: "Use when creating or editing Neon docs pages in content/docs/: frontmatter fields, navigation.yaml entries, image paths, MDX components, and internal links."
applyTo: "content/docs/**/*.md"
---

# Docs pages (content/docs/)

## Frontmatter

- `title` is required. The h1 is auto-generated from it; never add an h1 in the body.
- Optional fields: `subtitle`, `summary` (SEO description), `enableTableOfContents`, `isDraft` (hides the page from production), `tag`, `redirectFrom`.
- `redirectFrom` is an array; each path must start and end with `/`.
- `tag` values (`new`, `beta`, `coming soon`, `deprecated`) must also be added to the matching navigation.yaml entry for the badge to appear.
- Never set or update `updatedOn` manually; the pre-commit hook stamps it automatically.

## Navigation

- Every new page needs an entry in content/docs/navigation.yaml: `title` plus `slug` (file path relative to content/docs/, without `.md`).

## Images

- Store images in public/docs/, mirroring the content path: content/docs/guides/my-feature.md pairs with public/docs/guides/my-feature.png.
- Reference with root-relative paths: `![Alt text](/docs/guides/my-feature.png)`.
- For borderless images (annotated UI screenshots), append the title: `![Alt text](/docs/guides/my-feature.png 'no-border')`.

## MDX components

- content/docs/README.md is the authoritative reference for all components and code block syntax. Check it first.
- Essential components:
  - `Admonition` with types `note` (default), `important`, `tip`, `info`, `warning`, `comingSoon`.
  - `Steps` for numbered sequences, split by `##` headings.
  - `CodeTabs` for multi-language code examples; `Tabs` + `TabItem` for non-code tabbed content.
  - `DetailIconCards` for hub and overview pages.
  - `InfoBlock` + `DocsList` for tutorial and guide introductions.
  - `<NeedHelp/>` as the standard footer block.

## Links

- Internal links use root-relative paths (`/docs/...`), never the full domain.
