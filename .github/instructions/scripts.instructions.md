---
description: "Use when editing build or tooling scripts in scripts/ or src/scripts/: co-located vitest tests, generated outputs checked by CI, and regeneration commands."
applyTo: ["scripts/**/*.mjs", "scripts/**/*.js", "src/scripts/**/*.js"]
---

# Build and tooling scripts

- Scripts target Node 20+.
- Many scripts have co-located vitest tests (`*.test.js` with `__snapshots__/` and `fixtures/`). Update the tests when you change behavior.
- Generated outputs are verified by CI checks: `check:api-ref-generated`, `check:skills-sync`, and `check:docs-api-consistency`. Never hand-edit generated files.
- Regenerate instead: `npm run generate:api-ref` for the API reference, `npm run update:skills` for vendored skills.
- Blog content is managed through scripts/blog-content-cli.js via the `npm run blog:*` commands.
- Never hardcode local absolute paths; team members clone the repo to different locations.
