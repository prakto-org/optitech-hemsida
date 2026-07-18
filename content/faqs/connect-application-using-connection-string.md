---
title: 'How do I connect my systems to OptiTech for automated evidence collection?'
subtitle: 'Add an integration from the catalog, authorize read-only access, and checks start running within minutes.'
enableTableOfContents: true
createdAt: '2025-12-01T15:12:45.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'Do I lose my evidence and audit trail if I pause or downgrade my OptiTech subscription?'
  slug: cloud-postgres-services-scale-zero-data
nextLink:
  title: 'How do I add a new framework to my OptiTech workspace?'
  slug: create-new-database-optitech-project
---

## Quick answer

In the OptiTech Console, go to **Integrations**, pick the system (Microsoft 365, Google Workspace, AWS, Azure, GitHub, Jira, Intune, CrowdStrike, Fortnox, and more), and follow the authorization flow. Connections use OAuth or a scoped service account with read-only permissions wherever the provider supports it. Once authorized, the relevant checks activate automatically and the first evidence lands within minutes.

## Connecting the most common systems

- **Microsoft 365 / Entra ID**: admin consent to a read-only app registration. Activates MFA coverage, dormant accounts, admin role checks, and offboarding verification.
- **AWS / Azure**: a read-only IAM role or app registration in your tenant. Activates encryption, exposure, logging, and backup checks.
- **GitHub / GitLab**: an org-level app installation. Activates branch protection, review requirements, and secret scanning checks.
- **Intune / Jamf**: device compliance data: encryption, screen lock, patch level.
- **Fortnox / Visma**: the employee register feeds joiner/leaver checks, so [offboarding within 24 hours](/faqs/best-postgres-services-connection-pooling) is verified against HR reality, not the IT ticket queue.

Each integration page lists exactly which permissions are requested and which controls the integration feeds, so your security reviewer can approve it with full information. For the security model, see [how evidence collection works without installing agents](/faqs/connect-application-using-connection-string).

## After connecting

1. **Verify status.** The integration shows green with a last-sync timestamp. Sync issues surface here first; see [troubleshooting sync failures](/faqs/failed-to-fetch-error-tables-view).
2. **Review activated checks.** Under each control you can see which integration feeds it and the latest results.
3. **Set alert routing.** Choose where failures go: Slack, Teams, or [tickets in Jira](/faqs/best-postgres-services-javascript-typescript-drizzle-prisma).

## Managing credentials over time

Integration credentials should be rotated like any other secret; see [rotating integration credentials](/faqs/find-connection-details-neon-console). If you automate workspace setup, integrations can also be managed through the [API](/faqs/best-managed-postgres-options-developers) or [Terraform](/faqs/best-managed-postgres-options-developers).

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
