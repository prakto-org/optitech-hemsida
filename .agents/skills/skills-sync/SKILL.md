---
name: skills-sync
description: 'Workflow for the vendored agent skills under public/docs/ai/skills. Use when asked to update skills, fix "skills out of sync", debug a failing check:skills-sync CI job, or edit files under public/docs/ai/skills. Those files are read-only vendored copies from upstream repos; never hand-edit them, always edit upstream and re-sync with npm run update:skills.'
---

# Skills sync

The agent skills served under `public/docs/ai/skills/` are vendored copies for discovery and hosted reference only. They are **not** the source of truth and must never be hand-edited.

## When to use

- "Update the skills" / "sync skills from upstream"
- "Skills out of sync" or the **Skills Read-Only** CI check is failing
- `npm run check:skills-sync` fails locally or in CI
- Any request to edit files under `public/docs/ai/skills/`

## How it works

- **Upstream sources:**
  - [neondatabase/agent-skills](https://github.com/neondatabase/agent-skills): default source for all skills
  - [neondatabase/neon-for-agent-platforms](https://github.com/neondatabase/neon-for-agent-platforms): source for `neon-postgres-agent-platforms` (a per-skill override)
- **Mapping:** `config/skills.json` maps each skill to its upstream repo and ref.
- **CI enforcement:** on any PR touching `public/docs/ai/skills/**`, `config/skills.json`, or the sync scripts, the Skills Read-Only workflow (`.github/workflows/skills-readonly.yml`) runs `npm run check:skills-sync` (`scripts/check-skills-sync.mjs`). It verifies every vendored file matches its upstream source 1:1 (same content, no missing files, no extra files) and that `SKILL.md` links resolve. Any local divergence from upstream fails CI.

## Procedure

### To change a skill's content

1. **Do not edit** anything under `public/docs/ai/skills/` in this repo.
2. Edit the skill (`SKILL.md` and reference files) in its upstream repo, per `config/skills.json`.
3. After the upstream change is merged, re-sync in this repo:

   ```bash
   npm run update:skills
   ```

   This runs `sync:skills` (pull from upstream) followed by `generate:skills` (rebuild discovery indexes).

4. Commit the synced changes and open a PR. CI will verify the 1:1 match.

### To fix a failing check:skills-sync

1. Run the check locally to see the diff:

   ```bash
   npm run check:skills-sync
   ```

2. If vendored files were hand-edited: discard those edits, make the change upstream instead, then run `npm run update:skills`.
3. If upstream moved ahead (vendored copies are stale): run `npm run update:skills` and commit the result.
4. If a skill's repo or ref mapping is wrong: fix `config/skills.json`, then run `npm run update:skills`.

### To pin or change a skill's source

Edit the skill's entry in `config/skills.json` (repo and ref), then run `npm run update:skills` and commit both together.

## Rules

- Never hand-edit files under `public/docs/ai/skills/`. The only way content changes here is by matching upstream.
- Changes to `config/skills.json` and the resync output should land in the same PR.
- Reachability of a skill's reference files from its `SKILL.md` is enforced in the source repos (the `check-skill-references` check), not here.
- This skill is about the vendored hosted skills only. Project-local agent skills live in `.agents/skills/` and are edited normally.
