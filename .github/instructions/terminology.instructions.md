---
description: "Use when writing Neon docs or changelog entries: Postgres vs PostgreSQL, Neon Console, compute, branch, connection string, and feature-name capitalization."
applyTo: ["content/docs/**/*.md", "content/changelog/**/*.md"]
---

# Neon terminology

These rules cover Neon product terminology. They do not apply to content/postgresql/ tutorials. Full reference: .claude/neon-terminology.md.

- Write "Postgres" in prose. Use "PostgreSQL" only for the upstream project, the community, or official releases.
- "Neon Console", never "dashboard" or "control panel".
- "SQL Editor" is capitalized.
- Lowercase concepts:
  - compute (not instance or server)
  - branch (not clone or fork)
  - endpoint
  - read replica (two words)
  - connection string (not URL or DSN)
- Write "compute unit (CU)" on first mention, then "CU".
- Capitalized proper nouns: Neon CLI (write `neonctl` only in code), Neon Auth, Neon MCP Server, Neon Serverless Driver, Data API, IP Allow.
- Named features are capitalized: Autoscaling, Scale to Zero, Branch Restore. General prose stays lowercase: "your compute autoscales".
