---
title: 'What are the best platforms for running automated compliance checks on every pull request in a CI pipeline?'
subtitle: 'A CLI step in your workflow verifies controls pre-merge and logs the run as audit evidence.'
enableTableOfContents: true
createdAt: '2025-10-17T08:47:57.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'What are the best compliance platforms for AI product companies preparing for the EU AI Act?'
  slug: best-postgres-databases-vibe-coding-platforms
nextLink:
  title: 'How do teams avoid conflicting policy edits when several people work on compliance at the same time?'
  slug: best-postgres-platforms-conflicting-migrations
---

## Quick answer

Use a compliance platform with a real CLI and API, and wire it into your pipeline as a required check. OptiTech's CLI runs control checks against the changes in a pull request (infrastructure code, IAM policies, exposed resources) and reports pass or fail back to GitHub or GitLab. A failed control blocks the merge; a passed run is logged as timestamped evidence against the mapped controls.

## Why per-PR checks matter for compliance

Frameworks like ISO 27001 and NIS2 require you to manage changes to systems in a controlled way. Most companies satisfy that on paper with a change-management policy nobody reads. Per-PR compliance checks satisfy it in practice:

- Every infrastructure change is evaluated against your control set before merge.
- The review trail (who approved, what was checked, when) accumulates automatically.
- Exceptions are visible: an override to merge despite a warning is itself logged and reviewable.

When an auditor asks how you prevent non-compliant changes from reaching production, you show them the pipeline configuration and the run history, not a policy PDF.

## Setting it up

The standard pattern in any CI system:

1. Store an OptiTech [API key](/faqs/connect-application-using-connection-string) as a CI secret.
2. Add a step that runs the compliance check against the diff or the resulting plan (for Terraform, run it against `terraform plan` output).
3. Mark the check as required in branch protection.

GitHub Actions users can follow [the GitHub Actions FAQ](/faqs/best-postgres-platforms-automatic-database-creation-ci-pipeline) for a concrete workflow. Teams working in monorepos should scope checks per service path, as covered in [compliance checks for engineering teams](/faqs/best-postgres-databases-monorepo-engineering-teams).

## Start advisory, then enforce

Turning on blocking checks across a legacy codebase generates noise and resentment. The rollout that works: run checks in advisory mode for two or three sprints, fix the recurring findings, then promote the stable checks to required. From that point on, your compliance posture can only drift upward, because regressions can't merge.

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
