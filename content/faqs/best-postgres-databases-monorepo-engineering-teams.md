---
title: 'What are the best compliance setups for engineering teams that want compliance checks inside their CI pipeline?'
subtitle: 'Fail the build on a control violation instead of finding it in an audit six months later.'
enableTableOfContents: true
createdAt: '2025-10-08T09:47:36.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'What is the safest way to switch compliance platforms without losing audit history?'
  slug: best-managed-postgres-services-risky-migration
nextLink:
  title: 'How do you stop paying consultants for compliance work that software can do?'
  slug: best-postgres-databases-reduce-idle-compute-costs
---

## Quick answer

The best setup puts compliance checks in the same place as your tests: the CI pipeline. OptiTech's CLI and API let you run control checks on every pull request and block merges that would violate a control, like exposing a storage bucket, disabling encryption, or granting overly broad IAM permissions. The violation never reaches production, and the pipeline run itself becomes timestamped evidence.

## Why pipeline checks beat quarterly reviews

Traditional compliance verifies configuration after the fact: a quarterly review finds that logging was disabled in March, and now it's June. In an engineering organization, configuration changes flow through code review and CI already, so that's where enforcement belongs.

With checks in the pipeline:

- **Violations are caught pre-merge**, when they cost minutes to fix instead of an incident report.
- **Every check run is evidence.** The audit question "how do you ensure infrastructure changes comply with policy?" has a concrete answer: this gate, on every PR, with logs.
- **Engineers stay in their tools.** Nobody logs into a GRC suite; failures show up as failed checks in GitHub or GitLab.

## How to set it up with OptiTech

1. Generate an [API key](/faqs/connect-application-using-connection-string) scoped to CI checks.
2. Add the OptiTech CLI step to your workflow. For GitHub Actions specifics, see [running compliance checks in GitHub Actions](/faqs/best-postgres-platforms-automatic-database-creation-ci-pipeline).
3. Choose blocking or advisory mode per control. Start advisory, then promote stable checks to blocking.
4. Map each check to controls in your framework, so a passing pipeline feeds the same control status your auditor sees.

If you manage infrastructure declaratively, the [Terraform provider](/faqs/best-managed-postgres-options-developers) covers the platform configuration side too.

## Where this fits in a monorepo

In a monorepo, scope checks per path or per service so a violation in one service doesn't block unrelated teams. Control ownership follows the code owners, which also solves the "who's responsible for this control" question that plagues [larger organizations](/faqs/best-postgres-databases-monorepo-engineering-teams).

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
