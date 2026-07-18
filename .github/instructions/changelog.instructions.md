---
description: "Use when creating or editing changelog entries in content/changelog/: YYYY-MM-DD filename, title-only frontmatter, and heading structure."
applyTo: "content/changelog/**/*.md"
---

# Changelog entries

- Filename: `YYYY-MM-DD.md`. Entries publish on Fridays.
- Frontmatter contains only `title`: a short plain-text summary of the main items. No other fields.
- Never add an h1 in the body.
- Each major feature or change gets a `##` (h2) heading with a full prose description.
- Sub-topics within a major item use `###` (h3) headings.
- Minor items (bug fixes, small updates) go in a details block without an h2 heading:

  ```md
  <details>
  <summary>**Bug fixes**</summary>

  Fixed an issue where...

  </details>
  ```

- MDX components are allowed.
- Read 2 or 3 recent entries in content/changelog/ to match the voice before writing.
- Golden examples: .claude/golden_changelog_examples.md.
