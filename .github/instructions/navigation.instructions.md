---
description: "Use when editing content/docs/navigation.yaml: header and sidebar structure, page and section entries, slugs, tag badges, and redirects."
applyTo: "content/docs/navigation.yaml"
---

# Docs navigation (navigation.yaml)

- Top-level items appear in the header nav; their `items` populate the left sidebar.
- Page entry: `title` plus `slug`.

  ```yaml
  - title: My New Page
    slug: guides/my-new-page
  ```

- `slug` is the file path relative to content/docs/ without the `.md` extension and must match an existing file.
- Section entry: `section` plus `icon` plus `items`.
- The nav `title` may be shorter than the page's frontmatter title.
- Frontmatter tags (`new`, `beta`, `coming soon`, `deprecated`) must be duplicated on the nav entry for the badge to appear.
- Check for duplicate slugs before adding an entry.
- Removing a page from the nav requires handling redirects (for example, `redirectFrom` on the destination page).
