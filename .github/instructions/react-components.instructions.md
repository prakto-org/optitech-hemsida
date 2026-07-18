---
description: "Use when creating or editing React components in src/components/: folder structure, PropTypes, Tailwind cn utility, themes pattern, and import conventions."
applyTo: ["src/components/**/*.jsx", "src/components/**/*.js"]
---

# React components

- This codebase is JavaScript with PropTypes, not TypeScript. Every component needs PropTypes validation.
- Structure: kebab-case component folder containing `component-name.jsx` plus an `index.js` barrel re-export.
- Placement: page-specific components in src/components/pages/<route>/, reusable components in src/components/shared/.
- Merge Tailwind classes with the `cn` utility from `utils/cn`.
- Use the themes object pattern for variants, including dark-mode classes.
- Imports use bare specifiers resolved via jsconfig `baseUrl=src`: `components/...`, `utils/...`, `icons/...`.
- Import SVGs inline from `icons/`.
- Run `npm run fix:js` after changes and before committing.
- Do not restructure src/, CSS, or site structure without explicit instruction; a web team actively maintains the frontend.
- Follow WCAG accessibility guidelines.
