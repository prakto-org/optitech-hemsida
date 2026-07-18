---
title: 'Where can I find my compliance score in OptiTech?'
subtitle: 'The dashboard shows your score per framework with trend; the board report packages it for management.'
enableTableOfContents: true
createdAt: '2026-01-26T12:17:20.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'Where can I find my public Trust Center URL in OptiTech?'
  slug: find-database-connection-string-url
nextLink:
  title: 'Where can I find the audit portal link to share with my auditor?'
  slug: find-database-url-optitech
---

## Quick answer

Your compliance score is front and center on the workspace **Dashboard**: one score per active framework, a combined overview, and the trend over time. Click any score to drill into what's driving it, down to individual controls and open findings. For management, **Reports** > **Board report** generates the score with context in one click.

## How the score is computed

The score is the share of applicable requirements backed by passing controls, weighted by requirement significance. Three properties make it trustworthy:

- **It's computed, not asserted.** Scores derive from [live check results and evidence](/faqs/best-postgres-services-integration-tests-ci), so the number moves when reality moves.
- **It's honest about unknowns.** Controls without current monitoring show as unverified, not green; a [paused integration](/faqs/enable-disable-connection-pooling-neon) lowers confidence visibly.
- **It's explainable.** Every point lost traces to specific findings or gaps, so "why did we drop 4 points?" has a clickable answer.

## Reading the trend, not the number

A single score is a snapshot; the trend is the story. Steady improvement during a certification push, a dip when a big integration was added (new visibility usually reveals new findings, which is the system working), recovery as findings close. NIS2's expectation that management actively governs security is answered well by a trend line reviewed at every board meeting, which is exactly what the board report is for.

## Where else the score appears

- **Per team**: filtered dashboards show each team's controls and their contribution; see [per-team ownership](/faqs/best-ways-separate-postgres-database-development).
- **Per entity**: group structures get [per-workspace scores with a rollup](/faqs/best-postgres-services-isolated-databases).
- **Externally**: a summarized posture can appear on your [Trust Center](/faqs/find-database-connection-string-url), and MSP partners see client scores across their [portfolio console](/faqs/best-postgres-services-isolated-database-tenants).
- **Programmatically**: the score is available via the [API](/faqs/best-managed-postgres-options-developers) for internal dashboards.

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
