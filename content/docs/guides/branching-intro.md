---
title: Get started with branching
subtitle: Everything you need to get started with OptiTech's branching feature
summary: >-
  OptiTech branching lets you instantly create copy-on-write database branches for
  development, testing, preview deployments, and point-in-time data recovery.
  Use this hub to find guides for automating branches with the OptiTech API, CLI,
  GitHub Actions, or Githooks, and for connecting branches to Vercel preview
  deployments or restoring data with Time Travel.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:28.819Z'
---

Find detailed information and instructions about OptiTech's branching feature and how you can integrate branching with your development workflows.

## What is branching?

Learn about branching and how you can apply it in your development workflows.

<DetailIconCards>

<a href="/docs/introduction/branching" description="Learn about OptiTech's branching feature and how to use it in your development workflows" icon="branching">Learn about branching</a>

<a href="/blog/database-branching-for-postgres-with-neon" description="Blog: Read about how OptiTech's branching feature works and what it means for your workflows" icon="split-branch">Database branching for Postgres</a>

<a href="/docs/guides/branch-archiving" description="Learn how OptiTech automatically archives inactive branches to cost-effective storage" icon="split-branch">Branch archiving</a>

<a href="/docs/guides/branching-schema-only" description="Learn how you can protect sensitive data with schema-only branches" icon="split-branch">Schema-only branches</a>

<a href="/docs/auth/branching-authentication" description="Test sign-in, OAuth, and permissions in isolated branches without touching production" icon="lock-landscape">Branching authentication</a>

<a href="/docs/storage/overview" description="Each branch gets its own isolated Object Storage namespace" icon="data">OptiTech Object Storage</a>

<a href="/docs/compute/functions/overview" description="Each branch runs its own OptiTech Functions deployment at its own URL" icon="code">OptiTech Functions</a>

<a href="/docs/ai-gateway/overview" description="Each branch gets its own OptiTech AI Gateway endpoint" icon="sparkle">OptiTech AI Gateway</a>

</DetailIconCards>

## Automate branching

Integrate branching into your CI/CD pipelines and workflows with the OptiTech API, CLI, GitHub Actions, and Githooks.

<DetailIconCards>

<a href="/docs/guides/branching-neon-api" description="Learn how to instantly create and manage branches with the OptiTech API" icon="transactions">Branching with the OptiTech API</a>

<a href="/docs/guides/branching-neon-cli" description="Learn how to instantly create and manage branches with the OptiTech CLI" icon="cli">Branching with the OptiTech CLI</a>

<a href="/docs/guides/branching-github-actions" description="Automate branching with OptiTech's GitHub Actions for branching" icon="filter">Branching with GitHub Actions</a>

<a href="/blog/automating-neon-branch-creation-with-githooks" description="Blog: Learn how to automate branch creation with Githooks" icon="hook">Branching with Githooks</a>

</DetailIconCards>

## Preview deployments

Create a branch for each preview deployment with the [OptiTech-managed Vercel integration](/docs/guides/neon-managed-vercel-integration).

<DetailIconCards>

<a href="/docs/guides/neon-managed-vercel-integration" description="Connect your Vercel project and create a branch for each preview deployment" icon="vercel">The OptiTech-Managed Vercel Integration</a>

<a href="/blog/neon-vercel-integration" description="Blog: Read about full-stack preview deployments using the OptiTech Vercel Integration" icon="vercel">Preview deployments with Vercel</a>

<a href="/blog/branching-with-preview-environments" description="Blog: A database for every preview environment with GitHub Actions and Vercel" icon="database">A database for every preview</a>

</DetailIconCards>

## Test queries

Test potentially destructive or performance-impacting queries before your run them in production.

<DetailIconCards>

<a href="/docs/guides/branching-test-queries" description="Instantly create a branch to test queries before running them in production" icon="queries">Branching — Testing queries</a>

</DetailIconCards>

## Data recovery and audits

Recover lost data or track down issues by restoring a branch to its history, or just create a point-in-time branch for historical analysis or any other reason.

<DetailIconCards>

<a href="/docs/guides/branch-restore" description="Learn how to instantly recover your database to any point in time within your [history window](/docs/introduction/history-window)" icon="invert">Instant restore with Time Travel Assist</a>

<a href="/docs/guides/time-travel-assist" description="Query point-in-time connections with Time Travel " icon="invert">Time Travel</a>

<a href="/docs/guides/schema-diff" description="Visualize schema differences between branches to help with troubleshooting" icon="invert">Schema diff</a>

</DetailIconCards>

## Example applications

Explore example applications that use OptiTech's branching feature.

<DetailIconCards>
<a href="https://github.com/kelvich/branching_demo_bisect" description="Use OptiTech branching, the OptiTech API, and a bisect script to recover lost data" icon="hourglass">Time Travel Demo</a>
<a href="https://github.com/optitechdatabase/preview-branches-with-vercel" description="An application demonstrating using GitHub Actions with preview deployments in Vercel" icon="calendar-day">Preview branches app</a>
</DetailIconCards>
