---
name: neon-terminology
description: 'Neon terminology and capitalization rules for content/docs and content/changelog. Use when writing or reviewing docs and unsure about Postgres vs PostgreSQL, Neon Console or SQL Editor capitalization, feature name casing (Autoscaling, Scale to Zero, Branching), lowercase concepts (compute, branch, project, endpoint), or words to avoid like utilize and leverage.'
---

# Neon terminology

Preferred terms and capitalization for Neon content. Full reference: `.claude/neon-terminology.md`. Read that file for the complete tables when doing a thorough review.

**Scope:** `content/docs/` and `content/changelog/` only. Does NOT apply to `content/postgresql/` (that section has its own conventions).

## When to use

- Writing or reviewing any page under `content/docs/` or `content/changelog/`
- Deciding between Postgres and PostgreSQL, or whether a feature name is capitalized
- Checking product names, UI surface names, or banned words

## Postgres vs PostgreSQL

Use **Postgres** in almost all cases. Use **PostgreSQL** only when:

- Referring to the open source project ("the PostgreSQL project", "the PostgreSQL community")
- Citing an official version release ("PostgreSQL 17", "PostgreSQL 16.2")
- Making a formal reference to the official software product

When in doubt, use Postgres.

## Product UI surfaces

- **Neon Console** (always capitalized): never "dashboard", "admin panel", or "the UI"
- **SQL Editor** (capitalize both words): never "query editor"

## Lowercase core concepts

Always lowercase in prose: **compute** (not instance/server/container), **branch** (not copy/clone/fork), **project** (a specific Neon resource, not generic), **endpoint** (specific Neon meaning; not a loose synonym for URL), **read replica** (two words, no hyphen), **connection pooling**, **connection string** (not connection URL/DSN/URI), **compute unit** (abbreviate as CU after first mention).

## Always-capitalized proper nouns

Neon Console, Neon Auth (not "Neon Authentication"), Neon CLI (`neonctl` only in code), Neon MCP Server (full name first mention, then "the MCP Server"), Neon Serverless Driver, Data API, Import Data Assistant, IP Allow.

## Feature vs concept capitalization rule

Capitalize a feature name when explicitly referring to the named feature; lowercase when describing the concept in general prose:

| Feature name | Lowercase in prose |
| --- | --- |
| Autoscaling | "your compute autoscales automatically" |
| Scale to Zero | "the compute scales to zero after inactivity" |
| Branching | "create a branch" |
| Read Replicas | "create a read replica" |
| Logical Replication | "set up logical replication" |
| High Availability | "configure high availability" |
| Branch Restore | "restore a branch to a previous state" |
| Backup & Restore | ampersand, not "and" |
| Private Networking | "connect via private networking" |

## Postgres ecosystem casing

psql (lowercase), pgvector (lowercase one word), PgBouncer (capital P and B), pg_dump and pg_restore (lowercase with underscore). Extensions are lowercase: pgvector, pg_stat_statements, postgis.

## Connection strings

Use `postgresql://` not `postgres://`. Standard format:

```
postgresql://[user]:[password]@[neon_hostname]/[dbname]
```

Always include `?sslmode=require` unless demonstrating a non-SSL scenario.

## Words to avoid

utilize (use), leverage (use, or be specific), seamlessly/robust/powerful/comprehensive/straightforward (cut or be specific), simply/just/easy/quick before steps (cut), out of the box (by default), sanity check (verify), whitelist (allowlist), blacklist (blocklist), master as example branch name (main).

## General capitalization

- "Neon" always capitalized, never "neon"
- Generic concepts always lowercase: compute, branch, project, endpoint, database, table, role
- Third-party names follow official style: Vercel, GitHub, Prisma, Drizzle, SQLAlchemy, Next.js, PgBouncer

For anything not covered here, consult `.claude/neon-terminology.md`.
