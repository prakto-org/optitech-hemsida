---
title: 'How frameworks, controls, and evidence fit together'
description: The difference between a framework, a control, and evidence, and why one control can satisfy requirements across several frameworks at once.
excerpt: >-
  Framework, control, and evidence describe three different things, but the
  words get used interchangeably all the time. This post defines each one
  plainly, shows how a single control can satisfy requirements across several
  frameworks, and explains how OptiTech connects them so one piece of evidence
  supports many requirements at once.
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
  title: 'How frameworks, controls, and evidence fit together - OptiTech'
  description: >-
    A plain-language explainer of frameworks, controls, and evidence, the
    many-to-many mapping between them, and how OptiTech connects them as linked
    records so one piece of evidence supports many requirements.
  keywords: []
  noindex: false
  ogTitle: 'How frameworks, controls, and evidence fit together - OptiTech'
  ogDescription: >-
    A plain-language explainer of frameworks, controls, and evidence, the
    many-to-many mapping between them, and how OptiTech connects them as linked
    records so one piece of evidence supports many requirements.
  image: null
---

Ask three people what a control is and you'll get three answers. One calls the whole framework a control, another means the tool that enforces a policy, and a third points at a screenshot. That confusion is the reason so many compliance programs stall. The words framework, control, and evidence describe three different things, and once you see how they connect, the whole program gets easier to run.

This post defines each term plainly and shows how they fit together. If you're standing up your first program, or you inherited one built on spreadsheets, this is the mental model that keeps it from collapsing under its own weight.

## A framework is a set of requirements

A framework is a published set of requirements you agree to meet. SOC 2 Type II, ISO 27001, GDPR, NIS2, and DORA are all frameworks. Each one breaks down into individual requirements: ISO 27001 has its Annex A controls, SOC 2 has its trust services criteria, NIS2 has its risk management measures.

A framework tells you what good looks like. It doesn't tell you how to get there, and it doesn't do any of the work. Think of it as the exam syllabus. It sets the questions you'll be asked, but passing is on you.

Most growing companies end up carrying more than one framework at once. You start with SOC 2 because your customers ask for it, add ISO 27001 for European buyers, and then NIS2 or DORA lands on you because of the sector you sell into. Each framework arrives with its own language and its own auditor, which is where the overlap problem begins.

## A control is something you do

A control is an action or a safeguard you put in place to meet one or more requirements. Controls are the actual work of your program:

- reviewing who has access to production every quarter
- encrypting data at rest and in transit
- running background checks and security training during onboarding
- backing up systems and testing that the backups restore
- requiring code review before anything ships

A control is a habit, not a document. The policy that says "we review access quarterly" is not the control. The control is the review actually happening, on schedule, with someone accountable for it. Frameworks describe outcomes; controls are how you produce them.

## Evidence is proof the control ran

Evidence is the record that shows a control actually happened. It's the difference between saying you review access and being able to prove you did it last quarter.

Evidence takes many shapes:

- an export of the access review, showing who checked what and when
- a ticket that documents an offboarding, with timestamps
- a screenshot of an encryption setting
- a signed and dated policy
- a log entry, a training completion report, a change record

Auditors don't grade intentions. They ask for evidence, and they check that it covers the audit period and lines up with the control it's supposed to support. No evidence means the control effectively didn't happen, no matter how real it felt at the time.

## One control, many frameworks

Here's the insight that changes how you run a program: the relationship between controls and requirements is many-to-many. One control usually satisfies requirements across several frameworks at once.

Take quarterly access reviews. That single control maps to a SOC 2 logical access criterion, an ISO 27001 Annex A control on access rights, and a NIS2 requirement on access management. Same review, three frameworks, three requirements satisfied. Encryption at rest maps to requirements in nearly every framework you'll touch. Security awareness training does too.

Teams that miss this end up building parallel programs, one per framework, each with its own spreadsheet and its own evidence folder. They do the same access review three times, or worse, they do it once and copy the evidence into three places by hand, where it drifts out of sync. The overlap that should save you work turns into duplicated effort and inconsistency instead.

The fix is to manage controls once and map each one to every requirement it satisfies, across every framework. Then you do the work a single time and it counts everywhere it applies.

<Admonition type="tip" title="Map controls to requirements, not frameworks to folders">
When you add a new framework, don't rebuild your program. Map the new requirements to the controls you already run. Most of them are already covered, and the gaps that remain are your real work.
</Admonition>

## Why evidence is where programs fail

Frameworks are stable. Controls, once designed, mostly hold. Evidence is where programs quietly fall apart, and it's worth understanding why.

Evidence is perishable. A control that ran last quarter needs fresh proof this quarter. An access review from January doesn't cover an audit period that ends in December. So evidence isn't something you collect once; it's something you have to keep collecting, on the cadence each control demands, forever.

That's a lot of small, recurring tasks, and they're easy to drop. Someone does the access review but forgets to save the export. The offboarding happens in a chat thread that nobody can find six months later. The screenshot proves the setting was right in March but says nothing about today. When the auditor arrives, the control was real but the proof is missing, and a missing proof reads exactly like a missing control.

Spreadsheets make this worse. They track that a control exists, but they can't hold the evidence, remind anyone to refresh it, or show which requirements would fail if a piece of evidence went stale. So the program looks healthy right up until the audit, when the gaps all surface at once.

## How OptiTech connects the three

OptiTech models frameworks, controls, and evidence as connected records instead of separate documents. In the OptiTech Console, each framework's requirements are structured items, each control is a record you own, and each piece of evidence attaches to the control it supports.

Because those records are linked, the many-to-many mapping becomes real instead of theoretical. You define a control once, map it to every requirement it satisfies across SOC 2, ISO 27001, GDPR, NIS2, and DORA, and attach evidence to it in one place. That one piece of evidence then supports every requirement the control covers. Refresh the access review once and every framework that depends on it updates at the same time.

The Console tracks the cadence too. Each control knows how often its evidence needs refreshing, and it flags what's coming due before it goes stale, so evidence collection becomes a routine instead of a pre-audit scramble. When a framework's requirement has no control mapped to it, or a control has no current evidence, you see the gap immediately rather than discovering it in the audit room.

The same connected records feed your trust center. Because your controls and their evidence are already current and mapped, the security posture you publish for buyers is the same one your auditor sees. You maintain one program and it answers two audiences at once.

## Getting started

You don't need every framework mapped on day one. A realistic first pass:

1. **List your controls first, not your frameworks.** Write down what you actually do to stay secure. Most companies already run more controls than they realize.
2. **Map each control to the requirements it satisfies** across the frameworks you carry. Watch the overlap do your work for you.
3. **Attach evidence to each control** and set the cadence it needs. This is the step that survives an audit.
4. **Surface the gaps.** Requirements with no control, and controls with no current evidence, are your real backlog.

Frameworks tell you what to prove. Controls are how you do the work. Evidence is what turns the work into something an auditor and a buyer will both accept. Get the three connected once, keep the evidence current, and the program stops being a fire drill.

Want to see your frameworks, controls, and evidence in one connected program? [Book a demo](https://optitech-sverige.se/contact-sales) and we'll show you how OptiTech maps one control to every requirement it satisfies.
