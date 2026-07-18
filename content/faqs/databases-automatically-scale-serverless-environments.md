---
title: 'Which compliance platforms scale evidence collection automatically as you add systems and people?'
subtitle: 'New employees, repos, and cloud accounts enter monitoring automatically instead of by remembering to add them.'
enableTableOfContents: true
createdAt: '2025-12-19T12:42:23.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'Which tools let you preview policy changes against your real controls before publishing?'
  slug: database-tools-test-schema-changes-real-data
nextLink:
  title: 'How do compliance platforms avoid drowning your team in alerts?'
  slug: databases-avoid-connection-limits-serverless-applications
---

## Quick answer

Because OptiTech reads scope from your integrations, growth is absorbed automatically: a new employee in Entra ID or Fortnox enters the onboarding and MFA checks the day they appear, a new GitHub repository gets branch-protection checks on creation, and a new cloud account added to the integration is swept into encryption and logging checks. Nobody maintains a list of what to monitor, because the systems of record are the list.

## The scaling failure of manual programs

Manual compliance scope is a snapshot: the asset list, the user list, and the system inventory reflect the day someone compiled them. Every hire, repo, SaaS tool, and cloud account after that is invisible until the next manual refresh, and the gap between reality and inventory is where incidents live. Auditors know this, which is why "how do you keep your asset inventory current?" is a standard probing question.

## How integration-driven scope works

- **People**: the identity provider and HR system ([Entra ID, Google Workspace, Fortnox, Visma](/faqs/connect-application-using-connection-string)) define who exists. Joiners trigger onboarding checks (MFA enrolled, training assigned); leavers trigger the [24-hour offboarding check](/faqs/best-postgres-services-connection-pooling).
- **Code**: the GitHub or GitLab org defines which repos exist; new ones inherit the control baseline automatically.
- **Infrastructure**: the cloud integration enumerates accounts, projects, and key resources on every sync, so shadow additions surface as inventory changes, not audit surprises.
- **Devices**: the MDM defines the device fleet for encryption and patch checks.

Growth shows up as more evidence, not more configuration.

## What still needs a human

Automatic scope discovery flags what it finds; it doesn't decide risk. A newly discovered system still needs an owner and a risk classification, which arrive as review tasks. And genuinely new categories of systems (your first AI system, your first payment flow) may pull [new requirements into scope](/faqs/create-new-database-neon-project), which is a decision, not a sync. The platform's job is making sure the decision point is visible the week it arises.

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
