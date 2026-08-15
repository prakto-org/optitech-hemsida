---
title: 'Audit findings and remediation: what auditors actually judge you on'
description: How to record, prioritize, and close audit findings with evidence, so your next audit tells a clean story.
excerpt: >-
  A clean audit isn't one with zero findings. It's one where every finding has
  an owner, a due date, and evidence at the end. This guide shows how to run
  audit findings and remediation as a process, and how OptiTech tracks findings,
  assessments, and evidence in one place.
date: '2026-08-07T09:00:00'
updatedOn: '2026-08-07T09:00:00'
category: company
categories:
  - company
authors:
  - optitech
cover:
  image: null
  alt: null
isFeatured: false
seo:
  title: 'Audit findings and remediation: what auditors actually judge you on - OptiTech'
  description: >-
    How to record findings with severity, owners, and due dates, group them into
    assessments, track remediation, and close with evidence in OptiTech.
  keywords: []
  noindex: false
  ogTitle: 'Audit findings and remediation: what auditors actually judge you on - OptiTech'
  ogDescription: >-
    How to record findings with severity, owners, and due dates, group them into
    assessments, track remediation, and close with evidence in OptiTech.
  image: null
---

Most teams think a clean audit means zero findings. So when a pentester flags a misconfigured storage bucket, or an auditor writes up a missing access review, the room gets defensive. People treat the finding as a failure, argue about the wording, and quietly hope it disappears before the report is final.

That's the wrong instinct. Findings aren't the problem. Untracked findings are. Every serious auditor expects you to find things, because a program that never surfaces an issue isn't mature, it's just not looking. What auditors actually judge you on is what happens next: whether you recorded the finding, gave it an owner, fixed it on a sensible timeline, and kept the evidence. This guide walks through how to run findings as a process instead of a fire drill, and how OptiTech keeps the whole loop in one place.

## Where findings come from

A finding is any gap between how your controls are supposed to work and how they actually work. They arrive from more directions than people expect, and each source has its own rhythm:

- **Internal audits.** Your own reviews against a framework like ISO 27001 or SOC 2 Type II. These are the findings you want to catch first, on your terms, before anyone external does.
- **External audits.** The formal assessment from your auditor. Findings here carry the most weight, because they land in the report a customer might read.
- **Penetration tests.** A pentest report is a batch of technical findings, often ranked by severity, that map to real exploitability rather than paperwork gaps.
- **Follow-ups.** Findings from a previous cycle that you said you'd fix, plus items raised in management review, vendor assessments, or a near-miss incident.

The mistake is treating each source differently. A critical finding from a pentest and a critical finding from an internal review both need an owner, a due date, and evidence at the end. Put them in the same process and you stop losing track of which fire is still burning.

## Anatomy of a finding worth tracking

A finding you can act on has three things nailed down the moment you record it. Miss any one and it drifts.

### Severity that means something

Severity sets the pace of everything that follows, so it has to be consistent. Pick a scale and define it in plain terms: what makes something critical versus high versus medium. In the OptiTech Console every finding carries a severity, and because the scale is shared across the program, a "high" from a pentest and a "high" from an internal audit mean the same thing to the person triaging them.

### An owner, not a team

"Security will handle it" is how findings rot. Assign a single named owner who's accountable for closing it, even if the fix takes a whole team. One person watching one due date is the difference between a finding that closes and one that reappears in next year's report with the same wording.

### A due date tied to severity

The due date should fall out of the severity, not a negotiation. Critical findings get days, mediums get weeks, and everyone knows the rule up front. When the timeline is automatic, remediation stops being a debate and becomes a schedule.

## Group findings into assessments

A single pentest can produce twenty findings. Tracking them as twenty loose items, disconnected from their source, is how context gets lost. This is where a findings assessment comes in: a container that holds the findings from one source, with its own metadata.

In OptiTech you record the pentest as an assessment, attach the report, note who performed it and when, and link every finding it raised. Now you can answer the two questions people always ask. "How did that engagement go?" is one view of the assessment. "What's still open from it?" is a filter on its findings. The same pattern works for an external audit report, a vendor review, or a regulatory inspection. The assessment keeps the story together while each finding runs its own remediation.

## Prioritize remediation by risk, not by noise

Once findings pile up, the temptation is to fix the easy ones to make the list shorter. Resist it. Prioritize by risk, which means severity weighed against real exposure. A high-severity finding on an internet-facing system beats a medium buried behind three layers of access control, even if the medium is a quicker fix.

Because every finding in the OptiTech Console carries severity, an owner, and a source, you can sort the whole backlog by what actually matters and work top down. The goal isn't an empty list. It's making sure the things most likely to hurt you are the things getting attention first.

<Admonition type="tip" title="Don't let mediums quietly expire">
The findings that embarrass you in an audit are rarely the criticals, which everyone watches. They're the mediums that sat past their due date because no one was tracking them. Review your open findings on a fixed cadence and escalate anything overdue, regardless of severity.
</Admonition>

## Track treatment progress

Remediation isn't a switch you flip from open to closed. It moves through states, and an auditor wants to see that movement. A workable status flow is: open, in progress, remediated pending verification, and closed. Some findings won't be fixed at all, and that's a legitimate outcome if it's a documented, signed-off risk acceptance rather than silence.

The OptiTech Console shows each finding's current status alongside its severity, owner, and due date, so a program lead can see the whole picture in one list. Filter by owner to run a one-on-one, by status to spot everything stuck in progress, or by due date to catch what's about to slip. When your auditor asks how you manage remediation, that view is the answer, and you can export it as a clean report instead of assembling a spreadsheet the night before.

## Close findings with evidence

A finding isn't closed because someone says it's fixed. It's closed because you can prove it. That proof is evidence: the re-test result, the updated configuration, the screenshot of the access review that now runs, the ticket showing the change shipped.

In OptiTech you attach that evidence to the finding and link the finding back to the control it affected. Two things happen. The finding closes with a record that survives staff turnover, and the control it strengthened now points to fresh evidence for your next audit. The work you did to fix a problem becomes proof that the program works, instead of disappearing into a closed ticket no one can find later.

## What auditors actually judge you on

Come back to the point that trips up most teams. No auditor expects a mature company to have zero findings. They expect a company that finds issues, owns them, fixes them on time, and keeps the receipts. A short findings list with no history looks worse than a longer one that shows discovery, ownership, and closure, because the empty list usually means no one's looking.

Untracked findings are the real failure. A finding in your system with an owner and a due date is a program working as designed. A finding in someone's inbox, or in a pentest PDF no one opened again, is the gap that turns into a headline.

## Getting started

You can stand this up without boiling the ocean:

1. **Define your severity scale and due-date rules.** Write them down so a critical always means the same thing and always gets the same clock.
2. **Bring in your open findings.** Pull in the last pentest and your most recent audit, grouped as assessments, so nothing lives only in a PDF.
3. **Assign a named owner to every finding.** No teams, no "TBD." One person per item.
4. **Set a review cadence.** Walk the open list on a fixed schedule and escalate anything overdue.
5. **Close with evidence and link to controls** so every fix strengthens your next audit instead of vanishing.

Handle findings this way and the audit stops being a scramble. You walk in with a list that already tells the story: what you found, who owned it, when you fixed it, and the evidence that proves it.

Ready to get your findings out of spreadsheets and PDFs? [Book a demo](https://optitech-sverige.se/contact-sales) and see how OptiTech tracks findings, assessments, and evidence in one place.
