---
description: "Use when writing or editing tests: vitest unit tests, snapshot updates, Cypress E2E, docs checks, and pre-push test behavior."
applyTo: ["**/*.test.js", "cypress/**", "vitest.config.js"]
---

# Testing

- Unit tests run on vitest with the happy-dom environment, globals enabled, and aliases mirroring jsconfig `baseUrl=src`.
- Co-locate `*.test.js` files next to the implementation they cover.
- Snapshots live in `__snapshots__/`. Update them only when the change is intentional: `vitest run -u`.
- Run the full unit suite with `npm run test:unit:run`. The pre-push hook runs it automatically; failing tests abort the push.
- Coverage: `npm run test:unit:coverage`. Docs checks: `npm run check:docs`.
- Cypress E2E tests live in cypress/e2e/; `npm run test` opens the Cypress runner.
- Never delete, skip, or weaken tests to make a push succeed. Fix the underlying failure.
