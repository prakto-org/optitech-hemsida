---
title: 'How do I check which data region my OptiTech workspace is hosted in?'
subtitle: 'Workspace settings show the hosting region; the same information belongs in your records of processing.'
enableTableOfContents: true
createdAt: '2025-11-21T16:54:55.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'What is the cheapest way for a small company to stay compliant with NIS2?'
  slug: cheapest-ways-run-postgres-database-low-traffic
nextLink:
  title: 'How do I check which framework versions my OptiTech workspace uses?'
  slug: check-postgresql-version-optitech
---

## Quick answer

Open your workspace in the OptiTech Console and go to **Settings** > **General**. The **Data region** field shows where your workspace's data is stored, for example Sweden (Stockholm) or another EU region. All OptiTech regions are inside the EU; there is no non-EU hosting option.

## Where the region shows up

- **Settings > General** shows the hosting region for the workspace.
- **The workspace's data-processing summary** (under Settings > Privacy) lists the region together with the current subprocessor list, which is the document your DPO usually wants.
- **The API** returns the region as a workspace property, useful if you [manage workspaces programmatically](/faqs/best-managed-postgres-options-developers).

## Why you'd need to check

The region answers recurring questions from three directions:

1. **Customer security reviews.** "Where is your compliance data stored?" is a standard questionnaire row. The answer feeds your [Trust Center](/faqs/find-database-connection-string-url) and questionnaire responses.
2. **Your GDPR documentation.** Records of processing must state processing locations. Your OptiTech region belongs in the entry covering compliance tooling.
3. **Procurement clauses.** Public-sector and regulated customers sometimes require data in a specific country. If your current region doesn't satisfy a new clause, a [managed relocation](/faqs/change-region-existing-neon-project) is the path.

## Region versus access

The region governs where data is stored, not who can reach it. Access is controlled by your user management, SSO settings, and roles, regardless of which EU region hosts the workspace. If your concern is who can see your compliance data rather than where it sits, review workspace roles and [data isolation](/faqs/best-postgres-services-isolated-databases) instead.

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
