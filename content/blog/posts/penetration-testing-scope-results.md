---
title: 'Penetration testing that supports compliance: scope, vendors, and results'
description: How to scope a penetration test, choose a reputable vendor, and turn findings into tracked remediation.
excerpt: >-
  A penetration test earns its cost when you act on what it finds. The report is
  the start of the work, not the end of it. This guide covers how to scope a
  test, pick a vendor you can trust, meet the frequency SOC 2 and ISO 27001
  expect, and turn every finding into tracked remediation in OptiTech.
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
  title: 'Penetration testing that supports compliance: scope, vendors, and results - OptiTech'
  description: >-
    How to scope a penetration test, choose a reputable vendor, read the report,
    and turn findings into tracked remediation you can prove to auditors and
    buyers.
  keywords: []
  noindex: false
  ogTitle: 'Penetration testing that supports compliance: scope, vendors, and results - OptiTech'
  ogDescription: >-
    How to scope a penetration test, choose a reputable vendor, read the report,
    and turn findings into tracked remediation you can prove to auditors and
    buyers.
  image: null
---

Plenty of teams buy a penetration test because a customer asked for one. They pick a vendor, book a week, get a PDF, and file it away next to the last one. The test becomes a receipt instead of a security exercise, and the real risks it surfaced sit untouched until the next review.

A pentest earns its cost when you act on what it finds. The report is the start of the work, not the end of it. This guide covers how to scope a test, pick a vendor you can trust, meet the frequency your frameworks expect, and turn every finding into tracked remediation inside OptiTech.

## Why a pentest belongs in your compliance program

Auditors and enterprise buyers both want proof that you look for weaknesses before attackers do. A penetration test is a controlled attempt to break into your systems, run by people you hire, so you learn where you're exposed on your own terms.

For SOC 2 and ISO 27001, a pentest is one of the clearest pieces of evidence that your technical controls hold up under pressure. It shows you don't just write policies, you test them. And when a prospect's security team asks how you validate your defenses, a recent pentest summary is the answer that ends the conversation quickly.

## Scope the test before you shop for a vendor

The most expensive mistake is testing the wrong thing. Before you talk to a vendor, decide what's in scope and write it down. A clear scope keeps the test focused and keeps the price honest.

Work through a few questions:

- **What are you protecting?** Your customer-facing application, your internal network, your cloud environment, or all three. Rank them by the damage a breach would cause.
- **What's off limits?** Production systems that can't take load, third-party services you don't own, and anything a contract forbids you to touch.
- **What access will the tester get?** This is where the box color comes in.

### Black box, grey box, white box

The "box" describes how much the tester knows before they start.

- **Black box.** The tester gets nothing but your public footprint, the same as a real outsider. It's realistic but slow, because they spend time on discovery instead of depth.
- **Grey box.** The tester gets limited information, like a standard user account. This is the sweet spot for most SaaS companies, since it mirrors a compromised customer or a malicious user.
- **White box.** The tester gets full access, including source code and architecture. It finds the most, because nothing is hidden, and it's the best value when you want depth over realism.

Most teams building toward SOC 2 or ISO 27001 do well with a grey box test against their main application, then widen scope as they grow.

## Choose a vendor you can stand behind

Your auditor and your customers will look at who did the test, so pick a firm that stands up to scrutiny. A few signals separate a real security partner from a scan-and-invoice shop:

- **Recognized certifications.** Testers who hold credentials like OSCP or CREST have proven skills, not just a tool license.
- **A manual approach.** Automated scanning is table stakes. You're paying for humans who chain findings together the way an attacker would.
- **A sample report.** Ask to see a redacted example. A good report explains impact and gives clear remediation steps, not just a list of scanner output.
- **A retest included.** The best vendors verify your fixes after you remediate, so you get proof the issue is closed.

Cheap tests that produce a raw scanner dump cost you more later, because auditors and buyers see through them.

## How often you need to test

Frequency is where teams get nervous, so here's the plain version.

Neither SOC 2 nor ISO 27001 names a fixed calendar. Both expect testing at a sensible cadence and after significant change. In practice, the market has settled on an **annual penetration test** as the baseline for both frameworks. That's what auditors expect to see, and what buyers assume you run.

Test more often than once a year when you ship major changes to your application, move to new infrastructure, or enter a market with stricter expectations. The trigger isn't just the calendar, it's meaningful change to what you're protecting.

<Admonition type="tip" title="Tie the test to change, not just the date">
An annual test satisfies the framework, but a major release the week after your test can leave a year-long gap in real coverage. Schedule your pentest after big changes land, not before, so the report reflects what you're actually running.
</Admonition>

## Read the report like an auditor will

When the report lands, resist the urge to skim the summary and file it. Read it the way an auditor or a buyer will.

Every finding carries a severity, usually critical, high, medium, or low, and often a CVSS score. Start at the top. A single critical finding matters more than twenty low ones. For each item, look past the label to the impact: what could an attacker actually do, and what data or access is at risk?

Watch for the finding everyone ignores: informational items and accepted risks. You don't have to fix all of them, but you do have to make a decision and record why. An auditor who sees an untouched medium finding with no owner and no note will ask why, and "we didn't get to it" isn't an answer that builds trust.

## Turn findings into tracked remediation

This is where the value lives. A report you act on protects you; a report you file does nothing. The gap between the two is ownership and follow-through.

In OptiTech, you record each pentest as a set of findings assessments. Every finding becomes a tracked item with a severity, an owner, and a remediation deadline, so nothing depends on someone remembering. As your team fixes issues, the status moves and the evidence attaches, which means your next audit shows the finding and the fix side by side.

That record also feeds your controls. A finding about weak access management links back to the control it affects, so you can see whether the same gap keeps coming up. Over time, your pentests stop being isolated events and become a feedback loop that hardens your program.

## The summary buyers actually ask for

Enterprise buyers rarely ask for the full report, and you shouldn't hand it over, since it's a map of your weak points. What they want is a **pentest summary**: confirmation that a reputable firm tested you recently, the scope, and that you remediated what mattered.

A trust center backed by your OptiTech program publishes exactly that. Buyers see that you test, that you act on results, and that your findings have owners and closure dates. Security reviews move faster because the proof is already there.

## Getting started

You don't need a big program to start testing well:

1. **Write your scope** and rank what matters most.
2. **Shortlist two or three vendors** with real credentials and sample reports.
3. **Book a grey box test** against your main application.
4. **Load every finding into OptiTech** with an owner and a deadline the day the report arrives.
5. **Publish the summary** to your trust center once you've remediated.

A penetration test is only as good as what you do next. Track the findings, close them on a timeline, and both your auditors and your buyers get the same clear answer.

Ready to turn pentest findings into tracked remediation? [Book a demo](https://optitech-sverige.se/contact-sales) and see how OptiTech connects your tests, controls, and evidence.
