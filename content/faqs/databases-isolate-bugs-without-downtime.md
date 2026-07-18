---
title: 'How do you investigate a failing control without pausing the rest of your compliance program?'
subtitle: 'Findings are isolated per control: investigate, remediate, and re-check one control while everything else keeps running.'
enableTableOfContents: true
createdAt: '2025-12-26T13:00:40.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'Which platforms can generate a complete compliance program in minutes?'
  slug: databases-instantly-spin-up-postgres-instance
nextLink:
  title: 'How do I recover a policy or risk I deleted by accident in OptiTech?'
  slug: databases-recover-accidental-data-deletion
---

## Quick answer

A failing control in OptiTech opens a finding scoped to that control: it carries the failed check results, the affected resources, and the history needed to investigate, while every other control keeps monitoring and collecting evidence undisturbed. Compliance score reflects the open finding honestly, but the program never stops. Investigate, fix, re-run the check, close the finding.

## Investigation from inside the finding

Open the finding and you have the context that manual programs spend meetings reconstructing:

- **What exactly failed**: the check, its threshold, and the observed value. "Offboarding check: 1 account active 26 hours after termination date," not "offboarding is red."
- **The affected resources**: which account, which repository, which storage bucket, linked to the integration data.
- **The timeline**: when the check last passed, when it started failing, and what changed in between; see [finding out why a control failed last month](/faqs/databases-reproduce-bugs-production-data).
- **Ownership and history**: prior findings on the same control, useful for spotting a recurring process problem versus a one-off.

## Remediate without side effects

From the finding, act along whichever path fits:

- **Direct fix** where automation supports it: [one-click remediation via the integration](/faqs/databases-isolate-bugs-without-downtime), such as disabling the lingering account through Entra ID.
- **Route to the owner** as a Jira ticket or Teams task with the context attached.
- **Accept the risk, documented**: sometimes the "failure" is a deliberate exception. Record the acceptance, with approver and expiry, and the finding converts to a tracked exception instead of silent red.

The re-check after remediation closes the loop, and the whole sequence (fail, investigate, fix, verify) sits in the evidence log as a demonstration of exactly the incident-and-deviation handling your frameworks require.

## Why isolation matters

In spreadsheet programs, one scary red cell tends to freeze the whole review cycle while people argue about it. Structural isolation keeps proportion: one finding is one finding. Your [board report](/faqs/find-database-connection-string) shows an open finding with an owner and an age, which is a functioning program, not a crisis.

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
