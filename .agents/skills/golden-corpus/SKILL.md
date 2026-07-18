---
name: golden-corpus
description: 'Curated exemplary Neon documentation files by content type for style and structure reference. Use before writing or rewriting docs when you need golden examples, few-shot style references, or templates for a tutorial, getting started guide, concept page, how-to, reference doc, integration guide, framework/ORM guide, or hub page.'
---

# Golden corpus

Curated exemplary documentation files that demonstrate Neon's preferred style, tone, and structure. Load matching examples before generating content of a similar type.

All paths are relative to the repository root.

## When to use

- Before drafting a new docs page, to match structure and tone for its content type
- When asked for "golden examples", style references, or a template for a doc type
- During review, to compare a page against best-in-class equivalents

## Procedure

1. **Identify the content type** of the task (tutorial, getting started, concept, how-to, reference, integration, framework/ORM, hub).
2. **Load the matching examples** below and analyze their structure, components, and voice.
3. **Apply similar structure and tone** to the new or revised content, keeping Neon terminology consistent and using MDX components (CodeTabs, Steps, Admonition, DetailIconCards, InfoBlock) the same way the examples do.

## Content type examples

### Tutorials (hands-on learning, progressive exercises)

- content/docs/data-api/demo.md: progressive hands-on tutorial with a real working app, screenshots, and user exercises. Schema explanation, CRUD walkthrough, a "Build Delete Functionality" exercise, code highlighting markers, security-first approach.
- content/docs/guides/rls-tutorial.md: security tutorial through experimentation. Learning by breaking things, visual proof of data leaks, before/after security narratives, hands-on code modifications.

### Getting started guides (onboarding, framework setup)

- content/docs/guides/nextjs.md: comprehensive framework integration. Multiple patterns (App Router, Pages Router, Edge), CodeTabs for driver options, clear prerequisites, progressive steps, 6+ example repos.
- content/docs/data-api/get-started.md: security fundamentals and setup. Database Permissions vs RLS separation, SQL and Drizzle options, step-by-step UI instructions with screenshots, three-language client examples.

### Concept and overview pages (feature explanation, architecture)

- content/docs/introduction/branching.md: core feature explanation. Clear definition, visual diagrams, embedded video, multiple use case workflows, plan tier comparison.
- content/docs/guides/neon-rls.md: technical security concept. JWT flow architecture diagram, before/after code comparison, provider table (15+ auth providers), limitations transparency, 8+ sample apps.

### How-to guides (task-oriented instructions)

- content/docs/guides/branching-test-queries.md: simple focused steps. Clear problem statement, example dataset, screenshot-guided UI steps, CLI and API alternatives, results verification.
- content/docs/guides/autoscaling-guide.md: configuration guide with practical tips. Default values table, monitoring section, decision guidance ("Start with a good minimum"), tip admonitions.

### Reference documentation (specs, comprehensive detail)

- content/docs/connect/connection-pooling.md: technical reference with comprehensive tables. Problem-solution structure, max_connections table, PgBouncer configuration transparency, limitations section, troubleshooting guidance.
- content/docs/guides/prisma.md: ORM reference with troubleshooting. Exact error messages users encounter, connection pool formula explanations, good and bad configuration examples, external cross-references.

### Integration guides (third-party platforms, end-to-end workflows)

- content/docs/guides/vercel-overview.md: decision framework. Comparison table for 3 integration options, quick decision guide, DetailIconCards, getting-started checklist.
- content/docs/guides/vercel-managed-integration.md: complete workflow. Steps component for 7 numbered steps, webhook diagram, environment variables table, FAQ-style operations, limitation transparency.
- content/docs/guides/logical-replication-guide.md: hub-and-spoke integration index to 20+ guides, publisher-subscriber explanation, categorized links, tech cards layout.
- content/docs/guides/neon-github-integration.md: CI/CD integration. "How it works" before setup, complete GitHub Actions YAML, commented enable-options, security warnings.

### Framework and ORM guides (language-specific, drivers)

- content/docs/guides/drizzle.md: type-safe ORM integration. Related-resources InfoBlock upfront, two connection approaches (basic + Neon serverless adapter), copy-paste ready code, prerequisite clarity.
- content/docs/guides/aws-lambda.md: serverless platform integration. Prerequisites upfront, CLI transcript, connection persistence pattern (client outside handler), error handling, env var setup.

### Index and hub pages (navigation, collections)

- content/docs/guides/branching-intro.md: topic hub. Hub-and-spoke layout, 6 sections with DetailIconCards, progression from concepts to automation to examples, links to demo repos.

## What to imitate

- **Structure:** h2 for major sections, h3 for subsections, avoid h4+; progressive disclosure; hub-and-spoke for many related guides
- **Visuals:** screenshots for UI steps, architecture diagrams for flows, `[!code highlight]` markers, before/after comparisons
- **Code:** complete copy-pasteable examples, CodeTabs for alternatives, env configuration shown, error handling included
- **Guidance:** prerequisites upfront, InfoBlock of related resources, tip/warning admonitions, limitations and troubleshooting sections
- **Voice:** developer-friendly, direct, present tense, active voice ("You create a branch", not "A branch is created")

Always load the actual example content before generating new content; do not imitate from this summary alone.
