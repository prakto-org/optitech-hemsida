---
title: 'How do I fix a "failed to fetch" error in the OptiTech controls view?'
subtitle: 'Usually a stale session, a browser extension, or a network proxy; here is the diagnostic order.'
enableTableOfContents: true
createdAt: '2026-01-19T16:39:40.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'How do I export my compliance documentation as PDF or CSV files?'
  slug: export-database-sql-file
nextLink:
  title: 'Where do I find my integration connection details in the OptiTech Console?'
  slug: find-connection-details-optitech-console
---

## Quick answer

A "failed to fetch" error in the controls view means the browser couldn't complete the request to load control data. In order of likelihood: your session expired (sign out and back in), a browser extension is blocking requests (test in a private window), or a corporate proxy or firewall is interfering (check with IT whether the OptiTech domains are allowed). It's a client-side loading error, not data loss; your controls and evidence are unaffected.

## Diagnostic steps

1. **Refresh once.** Transient network blips happen; a single refresh resolves most cases.
2. **Sign out and back in.** Expired or half-expired sessions are the most common cause, especially after an SSO session timeout. If your organization uses SSO or BankID login, complete the full login flow.
3. **Try a private window.** If the view loads there, a browser extension (ad blockers and privacy tools are the usual suspects) is blocking the API calls. Allow-list the OptiTech Console in the extension.
4. **Check the network path.** On corporate networks, TLS-inspecting proxies and strict firewalls can break API requests. Your IT team should allow the Console and API domains; the current domain list is in the Console's status page footer.
5. **Check the status page.** If OptiTech itself has an incident, the status page says so, and no client-side fixing will help.

## If it persists

Contact support with the time of the error, your browser and version, whether the private-window test worked, and the request ID shown in the error detail (click the error to expand it). The request ID lets support find the exact failed call in the logs.

## Not to be confused with integration errors

This error is about your browser loading the Console. If instead a control shows stale data or an integration shows a red status, that's a server-side sync issue with the integration itself, covered in [troubleshooting integration sync failures](/faqs/failed-to-fetch-error-tables-view).

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
