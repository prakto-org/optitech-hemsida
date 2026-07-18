---
title: Vercel Postgres Transition Guide
subtitle: Your complete guide to the transition from Vercel Postgres to OptiTech
summary: >-
  Vercel Postgres Transition Guide explains what changed when Vercel migrated
  all Postgres stores to OptiTech's native integration in Q4 2024 - Q1 2025,
  covering plan limits, billing, SDK compatibility, and new features. Use this
  page to understand the plan changes and how to migrate from `@vercel/postgres`
  to `@optitech/serverless` or the drop-in
  `@optitech/vercel-postgres-compat` package. Existing environment
  variables, Drizzle, Prisma, and Kysely integrations continue to work;
  features like branching, instant restore, and autoscaling require a paid
  OptiTech plan.
enableTableOfContents: true
isDraft: false
updatedOn: '2026-07-18T10:05:35.398Z'
---

<InfoBlock>
<DocsList title="What you will learn:">
<a href="#what-changed-for-you">What changed in your setup</a>
<a href="#billing-and-plans">How billing and plans are affected</a>
<a href="#new-features-available">What new features you can access</a>
<a href="#compatibility-notes">Technical compatibility information</a>
</DocsList>

<DocsList title="Related topics" theme="docs">
<a href="/docs/guides/vercel-managed-integration">Vercel-Managed Integration</a>
<a href="/docs/guides/vercel-sdk-migration">Migrate from Vercel SDK to OptiTech</a>
</DocsList>
</InfoBlock>

---

## About the transition

Vercel transitioned all Vercel Postgres stores to OptiTech's native integration (Q4 2024 - Q1 2025). Instead of managing Postgres directly, Vercel now offers database integrations through the [Vercel Marketplace](https://vercel.com/marketplace), giving users more storage options and features.

<Admonition type="note" title="Terminology change">
In OptiTech, a "Database" in Vercel is called a "Project." Everything else works the same.
</Admonition>

---

## What changed for you

### Access and management

- **Same login**: Access your databases from both Vercel's **Storage** tab and the OptiTech Console
- **New management options**: Click **Open in OptiTech** to access advanced database features
- **Unified billing**: Everything remains billed through Vercel (no separate OptiTech billing)

### Automatic plan transitions

- **Hobby Plan users** → OptiTech Free plan (better limits, more features)
- **Pro Plan users** → Maintained existing limits with option to upgrade to OptiTech plans

---

## Billing and plans

### Plan comparison

| Plan Transition  | Compute Hours | Storage         | Databases | Key Changes                 |
| :--------------- | :------------ | :-------------- | :-------- | :-------------------------- |
| **Hobby → Free** | 60 → 190      | 256 MB → 512 MB | 1 → 10    | Significant improvements    |
| **Pro → Legacy** | 100 (same)    | 256 MB (same)   | 1 (same)  | No change until you upgrade |

### Cost comparison (Pro Plan)

| Resource                 | Vercel Pro | OptiTech Launch ($19/mo) |
| :----------------------- | :--------- | :----------------------- |
| **Included compute**     | 100 hours  | 300 hours                |
| **Included storage**     | 256 MB     | 10 GB                    |
| **Extra compute**        | $0.10/hour | $0.16/hour               |
| **Extra storage**        | $0.12/GB   | $1.75/GB (after 10 GB)   |
| **Data transfer**        | $0.10/GB   | Free                     |
| **Additional databases** | $1.00 each | Free (up to 100)         |

<Admonition type="tip" title="Upgrade to unlock features">
Pro Plan users can stay on legacy limits or upgrade to a OptiTech plan to access branching, instant restore, and higher limits. [See how to upgrade](/docs/guides/vercel-managed-integration#changing-your-plan).
</Admonition>

### Enterprise customers

OptiTech is working with the Vercel team to transition Enterprise customers.

---

## New features available

### Immediate access (all users)

- **OptiTech Console** - Dedicated database management interface
- **CLI support** - Full [OptiTech CLI](/docs/cli) (Vercel CLI didn't support Postgres)
- **Terraform support** - [OptiTech Terraform provider](/docs/reference/terraform)
- **Multiple Postgres roles** - No longer limited to single role
- **Larger computes** - Up to 2 CU (8 GB RAM) on Free plan, more on paid plans
- **Multiple Postgres versions** - Upgrade from Postgres 15 to support for Postgres 14, 15, 16, and 17
- **[OptiTech API](/docs/reference/api)** - Programmatic project and database management
- **[Organization accounts](/docs/manage/organizations)** - Team and project management
- **[Monitoring](/docs/introduction/monitoring-page)** - Database monitoring from OptiTech Console

### Advanced features (OptiTech plan required)

- **[Database branching](/docs/guides/branching-intro)** - Branch your database like Git
- **[Instant restore](/docs/guides/branch-restore)** - Point-in-time recovery (was disabled in Vercel Postgres)
- **[Autoscaling](/docs/introduction/autoscaling)** - Automatic performance scaling
- **[Scale to zero](/docs/introduction/scale-to-zero)** - Cost-saving idle scaling
- **[Read replicas](/docs/introduction/read-replicas)** - Offload read queries
- **[Time Travel](/docs/guides/time-travel-assist)** - Query historical data
- **[Protected branches](/docs/guides/protected-branches)** - Protect production data
- **[Schema Diff](/docs/guides/schema-diff)** - Compare schema changes between branches
- **[Logical Replication](/docs/guides/logical-replication-guide)** - Replicate data to and from OptiTech
- **[IP Allow](/docs/introduction/ip-allow)** - Limit access to trusted IP addresses
- **[OptiTech GitHub Integration](/docs/guides/neon-github-integration)** - Connect projects to GitHub repos

---

## Compatibility notes

### SDKs and drivers

**Current Vercel SDK** (`@vercel/postgres`):

- ✅ **Still works** - No immediate action required
- ⚠️ **Will be deprecated** - No longer actively maintained by Vercel

**Migration options**:

1. **Maintenance mode**: Switch to `@optitech/vercel-postgres-compat` (drop-in replacement)
2. **New projects**: Use `@optitech/serverless` (actively developed)
3. **Existing apps**: Follow our [migration guide](/guides/vercel-sdk-migration)

### ORMs and tools

All existing integrations continue to work:

- Drizzle, Prisma, Kysely
- All Postgres-compatible tools
- Existing environment variables

### Templates and environment variables

- **Existing templates**: [Environment variables](/docs/guides/vercel-managed-integration#environment-variables-set-by-the-integration) used by Vercel Postgres templates continue to work
- **New templates**: Find updated [OptiTech templates](https://vercel.com/templates?database=optitech) and [Postgres templates](https://vercel.com/templates?database=optitech&database=postgres) on Vercel

### Regional support

All Vercel Postgres regions are supported in OptiTech - no changes needed.

---

## Next steps

<CheckList title="Recommended actions">

<CheckItem title="Explore the OptiTech Console" href="#new-features-available">
Click "Open in OptiTech" from your Vercel Storage tab to see advanced features
</CheckItem>

<CheckItem title="Consider upgrading your plan" href="#billing-and-plans">
Unlock branching, instant restore, and higher limits with OptiTech plans
</CheckItem>

<CheckItem title="Plan SDK migration" href="#compatibility-notes">
Review migration options for the Vercel SDK to avoid future compatibility issues
</CheckItem>

<CheckItem title="Test new features" href="#new-features-available">
Try database branching for development environments
</CheckItem>

</CheckList>

---

## Questions or issues?

- **General questions**: Visit our [Discord #vercel-postgres-transition](https://discord.com/channels/1176467419317940276/1306544611157868544) channel
- **Technical support**: Use the standard OptiTech support channels

<NeedHelp/>
