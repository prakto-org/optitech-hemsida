---
name: changelog-authoring
description: 'Create and write Neon weekly changelog entries in content/changelog. Use when asked to create a changelog, draft the Friday release notes, add a changelog entry, or write up product updates. Covers YYYY-MM-DD.md naming, Friday dates, frontmatter, h2 feature sections, and details/summary dropdowns for minor fixes.'
---

# Changelog authoring

Create weekly changelog files at `content/changelog/YYYY-MM-DD.md`.

## When to use

- "Create the changelog for this week" / "draft Friday's changelog"
- Adding a new entry in `content/changelog/`
- Writing up features, fixes, and improvements for a release

## File conventions

- **Filename:** `YYYY-MM-DD.md`, dated the **next upcoming Friday** in America/New_York (if today is Friday, target next week's Friday). A user-specified date wins; validate and use it as-is.
- **Frontmatter:** only `title`, a short plain-text summary of the main items. No other fields.
- **No h1** in the body; the title comes from frontmatter.
- If the target file already exists, stop and report it. Do not overwrite.

## Structure

- Major features and changes: `##` (h2) heading with full prose description
- Sub-topics within a major item: `###` (h3) heading
- Minor items (bug fixes, small updates): wrap in `<details>` with a bolded `<summary>`, no h2 heading. Use multiple dropdowns titled by product area (for example **Neon API**, **Console**), not one generic "Fixes & improvements" block, when items group naturally.

```markdown
---
title: Feature X, improvement Y, and more
---

## Feature X

Description of the major feature...

## Improvement Y

Description of the improvement...

<details>
<summary>**Neon API**</summary>

- Short bullet describing an API change.

</details>

<details>
<summary>**Console**</summary>

- Short bullet describing a console or UI change.

</details>
```

## Voice and writing rules

Before writing, **read 2-3 recent files in `content/changelog/`** to match the current voice and structure.

- Human-to-human, developer-to-developer, benefit-focused. No marketing fluff.
- Common openings: "We've [verb]...", "You can now...", "[Feature] is now available...", "[Feature] now [capability]..."
- Avoid passive voice ("has been added"), hype words ("exciting", "game-changing"), and vague claims ("improved performance" without specifics).
- Sentence-style capitalization for headings. Feature headings communicate user value, not internal names.
- Length: opening sentence 15-25 words; h2 body 40-80 words (60-120 words total is typical).
- Be specific: include numbers ("8TB to 16TB"), versions, page or tab names, and example values.
- Dropdown bullets: 10-30 words for standalone items; 5-15 words each when grouped, using `**[Area]:**` prefixes or nested bullets.
- End major features with a docs link where relevant: "For more information, see [page](/docs/path)."

## Procedure

1. Compute the target Friday date (or use the date the user gave).
2. Check `content/changelog/` for an existing file at that date; stop if present.
3. Read a few recent changelog files for voice and structure reference.
4. Create the file. If real content is not yet known, use Lorem ipsum placeholders for feature descriptions and bracketed placeholders in dropdowns; do not invent features.
5. Report the file path and a checklist of placeholder items still needing real content.

## Notes

- `.claude/golden_changelog_examples.md` contains the full writing guide with worked patterns for Postgres version updates, extension updates, quota changes, and integration announcements.
- Prettier and `updatedOn` handling is automatic via the pre-commit hook (changelog frontmatter has no `updatedOn` anyway; only `title`).
