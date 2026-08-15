---
title: 'Backups and tested restores: what compliance really asks for'
description: Why backups alone don't satisfy an auditor, and how tested restores turn a checkbox into evidence.
excerpt: >-
  A backup you've never restored is a hope, not a control. Every serious
  framework now asks the same two questions: can you recover, and can you prove
  you've tested it? This post covers backup policy that holds up under review and
  how OptiTech tracks the backup control and your restore-test evidence in one
  place.
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
  title: 'Backups and tested restores: what compliance really asks for - OptiTech'
  description: >-
    Why backups alone don't satisfy an auditor, the 3-2-1 principle as policy,
    recovery objectives, and how to prove tested restores with dated evidence.
  keywords: []
  noindex: false
  ogTitle: 'Backups and tested restores: what compliance really asks for - OptiTech'
  ogDescription: >-
    Why backups alone don't satisfy an auditor, the 3-2-1 principle as policy,
    recovery objectives, and how to prove tested restores with dated evidence.
  image: null
---

Backups are the control everyone thinks they've handled. You switch on automated copies, watch the green checkmarks, and move on. It feels done. Then something goes wrong, you reach for a restore, and you discover the copies were incomplete, silently corrupted, or impossible to bring back inside a window your business can survive.

A backup you've never restored is a hope, not a control. Auditors know this, which is why every serious framework now asks the same two questions: can you recover, and can you prove you've tested it? This post covers why backups alone don't satisfy compliance, how to set backup policy that holds up under review, and how OptiTech tracks the backup control and your restore-test evidence in one place.

## Why backups alone aren't enough

A backup is a means to an end, and the end is recovery. Copies that exist but never come back cleanly give you a false sense of safety that's worse than knowing you have a gap.

The failure modes are quiet and common. Backup jobs drift out of scope when a new system gets added and nobody updates the schedule. Files corrupt without an alert. Retention expires the exact copy you needed. Encryption keys or configuration live somewhere the backup never captured, so the data restores but the service still won't start. And ransomware increasingly targets the backups themselves, encrypting your safety net alongside your production data.

This is why frameworks don't reward the existence of copies. ISO 27001 treats backup as a control tied to availability. SOC 2 puts recovery under its availability criteria. NIS2 expects business continuity you can operate, and DORA expects demonstrable ICT resilience for financial entities. None of them accept "we have backups" as an answer. They ask you to show that you can recover, on a schedule, with proof.

## The 3-2-1 principle as policy

The 3-2-1 rule is a useful shorthand at the policy level, and you don't need to get into implementation to govern it. Keep at least three copies of important data, on two different types of storage or locations, with one copy kept off-site or otherwise isolated from your primary environment.

Written as policy, that turns into a few clear commitments. You name an owner for the backup control. You state where copies live, and for a Nordic company handling EU data, you keep them inside your residency boundary, so copies stay in Stockholm and Frankfurt rather than drifting to another region by default. You require at least one isolated or immutable copy, because a backup that ransomware can reach is not a backup. And you set a review cadence so the policy tracks reality as your systems change.

The point isn't the number three. The point is that your policy answers the questions a reviewer will ask: how many copies, where, how isolated, and who owns it.

## Set recovery objectives before an incident

You can't judge a backup schedule without knowing what recovery you actually need. That's what recovery objectives are for, and they're business decisions, not technical ones.

Your recovery point objective, or RPO, is how much data you can afford to lose, measured in time. An RPO of one hour means you accept losing at most an hour of data. Your recovery time objective, or RTO, is how long you can be down before the impact becomes unacceptable. Both come from the business, not from whatever your tooling happens to do.

Objectives make the backup control measurable. "We back up every 24 hours" means nothing until you compare it against an RPO. If the business can only tolerate one hour of data loss, a daily backup is a policy failure hiding behind a green checkmark. Different services usually carry different objectives, so set them per service and let the critical ones drive your investment.

## The part everyone skips: tested restores

Here's the step that separates a real control from a checkbox. You have to restore, on purpose, before you're forced to.

A restore test is simple to describe. You recover a backup into an isolated environment, verify the data is complete and usable, and measure how long it took against your RTO. You do it on a defined cadence, quarterly for critical systems is a common baseline, and after any major change to the systems being protected. Then you write down what happened.

The evidence is the whole point. A restore test that leaves no record might as well not have happened. Capture who ran it, the date, what was restored, how long it took, whether it met your objectives, and any issues you found along the way. If the test failed or ran long, that's not a reason to hide it. A documented failure followed by a fix is exactly the kind of maturity auditors want to see.

<Admonition type="tip" title="Test the failure, not just the success">
The most useful restore tests are the ones that surface a problem: a missing dependency, a key that wasn't captured, a restore that blew past your RTO. Record the gap and the remediation. A tested restore that found and fixed an issue is stronger evidence than a perfect run nobody can explain.
</Admonition>

## What auditors actually want to see

An auditor isn't looking for a screenshot of a backup dashboard taken the day before the review. They're looking for a chain that holds together over time.

That chain reads like this: a written backup policy exists, an owner is assigned, the schedule matches the policy, restore tests happen on the stated cadence, each test has dated evidence with a clear outcome, and any gaps were tracked to closure. The dates matter as much as the documents. Consistent, timestamped evidence across the whole audit period tells a far better story than a flurry of activity right before the deadline.

Governance is the difference between passing once and staying compliant. When the backup control lives in a system that reminds you when the next test is due, you don't rely on someone remembering.

## How OptiTech tracks the backup control

In the OptiTech Console, backup and recovery is a single control that maps across every framework you run. You define it once, and it satisfies the relevant requirements in SOC 2 Type II, ISO 27001, NIS2, and DORA at the same time, instead of maintaining four separate versions of the same evidence.

Each restore test you run attaches to that control as evidence, with the date, the owner, the outcome, and any findings recorded in place. OptiTech tracks the cadence and flags the control when the last test is going stale, so a due restore test surfaces before your auditor finds it missing. When a gap appears, you log the remediation against the same control, and the full history stays intact.

That same record feeds your trust center. Instead of answering "how do you handle backups and recovery?" by hand in every security review, you point buyers to a current, evidence-backed posture they can read for themselves.

## Getting started

You can stand this up in a focused first pass:

1. **Write the backup policy.** Capture 3-2-1 at a policy level and pin copies to your EU residency in Stockholm and Frankfurt.
2. **Set RPO and RTO per service.** Let the business define acceptable data loss and downtime, and prioritize the critical services.
3. **Schedule restore tests and assign owners.** Quarterly for critical systems, plus after major changes.
4. **Capture evidence every time.** Record who, when, what, how long, the outcome, and any remediation in OptiTech.
5. **Map the control and publish it.** Link one backup control across your frameworks and surface the posture in your trust center.

Backups feel finished the moment you turn them on, but compliance starts at the restore. Prove recovery on a schedule, keep the evidence dated, and the same work answers your auditors and your buyers at once.

Ready to turn backups into a control you can prove? [Book a demo](https://optitech-sverige.se/contact-sales) and see how OptiTech tracks your backup control and restore-test evidence in one place.
