---
title: Sign in to OptiTech with BankID
subtitle: Use BankID for login and policy e-signing in your OptiTech workspace
summary: >-
  Enable BankID login for OptiTech: strong Swedish e-identification for
  workspace sign-in on all plans, plus BankID-backed e-signing of policies so
  acknowledgments carry identity-grade proof. Covers enabling BankID,
  combining it with SSO, and how signed acknowledgments appear in the
  evidence log.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:28.819Z'
---

BankID is the Swedish standard for strong electronic identification, and OptiTech supports it in two places: signing in to the workspace, and e-signing policies so employee [acknowledgments](/docs/reference/glossary#acknowledgment) carry identity-grade proof. BankID login is available on all plans.

## Enable BankID login

1. In the OptiTech Console, go to **Settings** > **Identity** > **Login methods**.
2. Enable **BankID**. Users with a Swedish personal identity number linked to their account can now sign in with BankID on web and mobile.
3. Optionally, set BankID as **required** for specific roles. Many organizations require it for [Owner and Admin](/docs/reference/glossary#admin) accounts while leaving email-plus-MFA for viewers.

Users link BankID to their account at first use: they sign in with their existing method, go to **My profile** > **Login methods**, and complete a BankID verification.

## Combine BankID with SSO

BankID and [SSO through your identity provider](/docs/guides/auth-okta) coexist:

- **SSO required, BankID for step-up**: your team signs in through Okta or Entra ID, and OptiTech asks for BankID on sensitive actions, like confirming an authority submission in the [incident flow](/docs/reference/glossary#incident-flow).
- **BankID as the primary method**: common in smaller organizations without a central IdP. No passwords exist at all.

Step-up rules are configured under **Settings** > **Identity** > **Sensitive actions**.

## Policy e-signing with BankID

When you publish a [policy](/docs/reference/glossary#policy) that requires acknowledgment, you can require BankID signing instead of a click-through:

1. On the policy's publish dialog, select **Require BankID signature**.
2. Employees get the standard acknowledgment task, but completion requires a BankID signature.
3. The signature record (who, when, which document version) lands in the [evidence log](/docs/reference/glossary#evidence-log).

Use BankID signing for the documents where proof matters most: the information security policy NIS2's management duties lean on, and anything your auditor samples for acknowledgment evidence. For routine documents, click-through acknowledgment keeps friction low. Documents can also be routed through [Kivra](/docs/guides/kivra) for signing outside the platform.

## What this feeds in your compliance program

- **Access control evidence**: login method policy and its enforcement are verifiable settings, exportable for your auditor.
- **Acknowledgment strength**: BankID-signed policies answer the "how do you know employees actually signed?" question conclusively.
- **Incident audit trail**: step-up authentication on authority submissions puts a strong identity behind the most consequential actions in the workspace.

## Troubleshooting

- **User can't link BankID**: the personal identity number must match an active BankID; test with the person's bank app first.
- **Step-up prompt loops**: usually a stale session; sign out fully and retry.
- **Non-Swedish employees**: they keep email-plus-MFA or SSO. BankID requirements apply per role, and you can exempt accounts without a Swedish personal identity number.

<NeedHelp/>
