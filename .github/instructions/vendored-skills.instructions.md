---
description: "Use when touching public/docs/ai/skills/ or config/skills.json: read-only vendored skills synced 1:1 from upstream repos, never hand-edited."
applyTo: ["public/docs/ai/skills/**", "config/skills.json"]
---

# Vendored agent skills

- public/docs/ai/skills/ is read-only vendored content for discovery and hosted reference. It is not the source of truth.
- Upstream sources per config/skills.json: neondatabase/agent-skills by default; neon-postgres-agent-platforms comes from neondatabase/neon-for-agent-platforms.
- Never hand-edit vendored files. The Skills Read-Only workflow (skills-readonly.yml, `npm run check:skills-sync`) fails CI on any divergence from upstream: changed content, missing files, or extra files.
- To change a skill: edit it in the upstream repo, then run `npm run update:skills` here to re-sync and rebuild the discovery indexes.
- After changing config/skills.json (repo or ref mappings), re-run `npm run update:skills`.
