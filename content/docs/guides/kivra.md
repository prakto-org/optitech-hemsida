---
title: Send documents for signing through Kivra
subtitle: Deliver policies and agreements to employees for signing via Kivra
summary: >-
  Connect Kivra to OptiTech to deliver policies and agreements for signing
  through the digital mailbox Swedes already use: policy acknowledgments,
  consultant agreements, and board documents signed with BankID through
  Kivra, with signature records landing in the evidence log.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:35.398Z'
---

Some documents need more ceremony than an in-app click: employment-adjacent policies, consultant confidentiality agreements, board-level approvals. The Kivra integration delivers them through the digital mailbox most Swedes already check, signed with BankID, with the signature record landing in OptiTech's [evidence log](/docs/reference/glossary#evidence-log) like any other [acknowledgment](/docs/reference/glossary#acknowledgment).

## When to use Kivra versus in-app signing

- **In-app acknowledgment** (default): routine policy sign-offs for employees who work in OptiTech-connected systems daily. Lowest friction.
- **[BankID in-app signing](/docs/guides/bankid)**: high-assurance documents for workspace users.
- **Kivra delivery**: signers who aren't daily platform users: all-staff annual policy rounds in organizations with frontline personnel, external consultants signing NDAs, and board members approving the risk framework NIS2 expects them to own.

## Prerequisites

- An OptiTech workspace with the **Admin** role, on the Professional plan or above.
- A Kivra business agreement (tenant) for sending; OptiTech guides you through linking it at connection time.

## Connect the integration

1. In the OptiTech Console, go to **Integrations** and select **Kivra**.
2. Enter your Kivra tenant credentials and verify your sender identity.
3. Map recipients: employees match on personal identity number sourced from your [HR integration](/docs/guides/fortnox), collected with consent noted in your [records of processing](/faqs/gdpr-compliance-optitech).
4. Send a test document to yourself and complete the signing flow.

## Send a document for signing

1. On a published [policy](/docs/reference/glossary#policy) or uploaded document, choose **Request signatures** > **Via Kivra**.
2. Select recipients (individuals, teams, or everyone) and a signing deadline.
3. Recipients get the document in Kivra and sign with BankID.
4. Signature status tracks in OptiTech: signed, pending, and overdue, with reminders at your configured cadence, and each completed signature lands timestamped in the evidence log with the document version.

Unsigned-past-deadline becomes a [finding](/docs/reference/glossary#finding) on the policy's acknowledgment control, so the follow-up chases itself.

## Verify the connection

1. Confirm **Status: Connected** on the integration page.
2. Send the test document and check the signature record appears in the evidence log with your name, timestamp, and document version.

## Troubleshooting

- **Recipient not reachable**: the person doesn't have a Kivra account or hasn't accepted business mail; the status view flags them so you can fall back to in-app signing.
- **Identity mismatch**: the personal identity number in your HR data doesn't match Kivra's records; correct it at the source.
- **Consultants without Swedish identity numbers**: use in-app signing with email verification instead; Kivra requires a Swedish identity.

<NeedHelp/>
