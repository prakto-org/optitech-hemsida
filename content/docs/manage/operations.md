---
title: Audit log
subtitle: A tamper-evident record of every action in your program
summary: >-
  The OptiTech audit log is an append-only, hash-chained record of every action
  in your compliance program: control changes, evidence, document approvals,
  member and permission changes, integration changes, and authority
  submissions. Use this page to understand what's recorded, how to view and
  filter the log in the Console, and how to export it for an audit or a
  regulator.
enableTableOfContents: true
updatedOn: '2026-08-15T13:33:31.893Z'
---

The audit log is a complete, tamper-evident record of what happened in your program, and who did it. Every action in the OptiTech Console and through the API is written to an append-only log, with each entry hash-chained to the one before it, so the record can't be altered after the fact. For how this fits into OptiTech's security model, see [Security overview](/docs/security/security-overview#protected-records).

## What gets recorded

The audit log captures the events an auditor or supervisory authority cares about, including:

- **Controls**: when a control's status, owner, or framework mapping changes.
- **Evidence**: when evidence is collected, added, or updated, whether automatically through an integration or manually.
- **Documents and policies**: approvals, new versions, and publication. Approved versions are immutable, so a change creates a new version rather than overwriting the old one.
- **People and access**: sign-ins, member invitations, role changes, and auditor portal access.
- **Integrations**: connecting, reconfiguring, or removing an integration.
- **Incidents**: authority submissions, including the confirmation of a report to MSB or IMY, with who confirmed it and when.

## View the audit log

Open the audit log from the **Monitoring** area of the OptiTech Console. Each entry shows:

- The action that was taken.
- Who performed it: a person, an integration worker, or an automated check.
- The object it affected, such as a control, document, or vendor.
- The date and time.

Filter by actor, action type, object, or date range to narrow a long history down to the events you need, for example every change to a single control in the year before a certification audit.

## Export the audit log

When an auditor or regulator asks for evidence of activity, export the relevant slice of the log. Because the underlying record is always current, an export is a complete, point-in-time picture rather than something you assemble by hand. You can attach an export to an audit package or a board report.

## Retention and integrity

Audit log entries cannot be edited or deleted, and historical states can be reconstructed exactly for any point in time. Entries are retained for the period set by your plan and any applicable framework or agreement. Before you close a program or remove data, export anything you need to keep.

<NeedHelp/>
