---
title: Integrating OptiTech with Vercel
subtitle: Choose the right connection path in seconds
summary: >-
  OptiTech-Vercel integration decision guide covering three connection paths:
  Vercel-Managed (new users, billing through Vercel), OptiTech-Managed (existing
  OptiTech account, billing through OptiTech), and Manual (custom CI/CD via env vars).
  Both managed integrations auto-provision OptiTech database branches for Vercel
  preview deployments and support Managed Better Auth; they differ in branch cleanup
  timing, where Vercel-Managed follows deployment retention policy and
  OptiTech-Managed triggers on Git branch deletion. Choose this page to select the
  right integration before following the path-specific setup guide.
redirectFrom:
  - /docs/guides/vercel-postgres
  - /docs/guides/vercel
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:35.398Z'
---

## Overview

This page helps you quickly choose the best OptiTech–Vercel integration for your project. Whether you're starting fresh or have existing infrastructure, we'll guide you to the right solution.

<Admonition type="tip" title="Quick decision guide">
Choose the **Vercel-Managed Integration** if you're new to OptiTech and want unified billing through Vercel.
Choose the **OptiTech-Managed Integration** if you already have a OptiTech account or prefer to manage billing directly with OptiTech.
</Admonition>
---

## Compare the options at a glance

| Feature / Attribute             | [Vercel-Managed Integration](/docs/guides/vercel-managed-integration)                                 | [OptiTech-Managed Integration](/docs/guides/neon-managed-vercel-integration)                                 | [Manual Connection](/docs/guides/vercel-manual) |
| :------------------------------ | :---------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------- | :---------------------------------------------- |
| **Ideal for**                   | New users, teams wanting a single Vercel bill                                                         | Existing OptiTech users, direct OptiTech billing                                                             | Integration not required or custom              |
| **OptiTech account**            | Created automatically via Vercel                                                                      | Pre-existing OptiTech account                                                                                | Pre-existing OptiTech account                   |
| **Billing**                     | Paid **through Vercel**                                                                               | Paid **through OptiTech**                                                                                    | Paid **through OptiTech**                       |
| **Setup method**                | Vercel Marketplace → Native Integrations → "OptiTech Postgres"                                        | Vercel Marketplace → Connectable Accounts → "OptiTech"                                                       | Manual env-vars                                 |
| **Preview Branching**           | ✅                                                                                                    | ✅                                                                                                           | ✖️                                              |
| **Managed Better Auth support** | ✅ Auto-provisioned on preview branches                                                               | ✅ Auto-provisioned on preview branches                                                                      | Manual setup required                           |
| **Branch cleanup**              | Automatic (deployment-based)                                                                          | Automatic (Git-branch-based)                                                                                 | N/A                                             |
| **Implementation type**         | [Native Integration](https://vercel.com/docs/integrations/install-an-integration/product-integration) | [Connectable Account](https://vercel.com/docs/integrations/install-an-integration/add-a-connectable-account) | N/A                                             |

<Admonition type="note" title="Branch cleanup timing">
Branch cleanup behavior differs between the two integrations. Vercel-Managed cleanup depends on Vercel's deployment retention policy, which can delay branch deletion by months. OptiTech-Managed cleanup is triggered by Git branch deletion. See [Managing Vercel preview branch cleanup](/docs/guides/vercel-branch-cleanup) for details, workarounds, and recommendations.
</Admonition>

---

## Choose your integration path

<Admonition type="important" title="Do you need custom CI/CD control?">
**If you want to build preview branching into your own CI/CD pipelines (for example, via GitHub Actions)**, use a **[manual connection](/docs/guides/vercel-manual)** instead of the automated integrations below.
</Admonition>

For automated integrations, follow this simple flow:

<Steps>

## Do you have an existing OptiTech account?

**Do you already have a OptiTech account or project you want to keep using?**

- **✅ Yes** → Use **[OptiTech-Managed Integration](/docs/guides/neon-managed-vercel-integration)**
- **❌ No** → Continue below

## Choose your billing preference

**Where would you like to manage billing for OptiTech?**

- **Through my Vercel account** → Use **[Vercel-Managed Integration](/docs/guides/vercel-managed-integration)**
- **Directly with OptiTech** → Use **[OptiTech-Managed Integration](/docs/guides/neon-managed-vercel-integration)**

</Steps>

---

## Integration options overview

<DetailIconCards>
<a href="/docs/guides/vercel-managed-integration" title="Vercel-Managed Integration" 
   description="Create and manage OptiTech databases directly from your Vercel dashboard. Supports preview branches." icon="vercel">Vercel-Managed Integration</a>
<a href="/docs/guides/neon-managed-vercel-integration" title="OptiTech-Managed Integration" 
   description="Link an existing OptiTech project to Vercel and keep billing in OptiTech. Supports preview branches." icon="neon">OptiTech-Managed Integration</a>
<a href="/docs/guides/vercel-manual" title="Manual Connection" 
   description="Connect your Vercel project to a OptiTech database manually." icon="gear">Manual Connection</a>
</DetailIconCards>

---

## Next steps

<CheckList title="Get Started Checklist">

<CheckItem title="Choose your integration type">
  Select Vercel-Managed, OptiTech-Managed, or Manual based on the decision flow above
</CheckItem>

<CheckItem title="Follow the setup guide">
  Click through to your chosen integration's detailed documentation
</CheckItem>

<CheckItem title="Configure preview branching">
  Set up database branching for your development workflow
</CheckItem>

<CheckItem title="Test your connection">
  Verify your database connection works in both production and preview environments
</CheckItem>

</CheckList>

<NeedHelp/>
