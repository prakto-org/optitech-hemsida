---
title: 'Where do I find my integration connection details in the OptiTech Console?'
subtitle: 'Each integration page shows connection status, granted permissions, last sync, and the checks it feeds.'
enableTableOfContents: true
createdAt: '2026-01-21T14:23:34.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'How do I fix a "failed to fetch" error in the OptiTech controls view?'
  slug: failed-to-fetch-error-tables-view
nextLink:
  title: 'Where can I find my public Trust Center URL in OptiTech?'
  slug: find-database-connection-string-url
---

## Quick answer

Go to **Integrations** in the OptiTech Console and select the integration. Its detail page shows everything about the connection: status and last successful sync, the account or tenant it's connected to, the exact permissions granted, the credential type and its age, and the list of checks the integration feeds. This page is both your operational view and your documentation of what the connection can access.

## What each section tells you

- **Status and last sync**: green with a recent timestamp means evidence is flowing. Errors and warnings link to [sync troubleshooting](/faqs/failed-to-fetch-error-tables-view).
- **Connected account**: which Entra tenant, AWS organization, or GitHub org the integration reads from, so multi-tenant organizations can verify they connected the right one.
- **Permissions**: the granted scopes, stated in the provider's own terms (for example, which Graph API scopes). This is the section to show a security reviewer asking what the integration can reach; the answer should be read-only scopes, per [the agentless collection model](/faqs/connect-application-using-connection-string).
- **Credential info**: type (OAuth app, service account, API key), created date, and rotation status, feeding the [credential rotation routine](/faqs/find-connection-details-neon-console).
- **Checks fed**: every automated check that depends on this integration, with links to the controls they verify. This is also your impact preview for disconnecting: you see exactly which controls would lose monitoring.

## Why these details end up in your compliance documentation

Your compliance platform's integrations are themselves access relationships that your program should account for. The integration page gives you the facts for your records: OptiTech appears in your supplier register, the granted scopes belong in your access documentation, and the connection is part of the answer when a customer asks who can read your tenant data. Convenient, then, that the page is exportable like [everything else](/faqs/export-database-sql-file).

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
