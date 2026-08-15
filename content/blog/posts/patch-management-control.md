---
title: 'Patch management as a control: measure it and prove it'
description: Why timely patching is one of your highest-impact controls, and how to set SLAs, track coverage, handle exceptions, and prove it.
excerpt: >-
  Patching feels like a chore, but it's one of the few controls that reliably
  stops real attacks. Treat it as a control with SLAs by severity, tracked
  coverage, and honest exceptions, and it becomes something you can prove to
  auditors and insurers. Here's how, and how OptiTech keeps the control and its
  evidence in one place.
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
  title: 'Patch management as a control: measure it and prove it - OptiTech'
  description: >-
    Why timely patching is one of your highest-impact controls, and how to set
    SLAs by severity, track coverage, handle exceptions, and evidence it for
    audits and insurers.
  keywords: []
  noindex: false
  ogTitle: 'Patch management as a control: measure it and prove it - OptiTech'
  ogDescription: >-
    Why timely patching is one of your highest-impact controls, and how to set
    SLAs by severity, track coverage, handle exceptions, and evidence it for
    audits and insurers.
  image: null
---

Most teams know they should patch. The updates pile up anyway. A critical fix ships on Tuesday, someone means to roll it out, and three weeks later it's still sitting in a backlog while the vulnerability it closes gets scanned for across the internet. Patching feels like janitorial work, so it loses every fight for attention against the roadmap.

But patch management is a control, and it's one of the few that reliably stops real attacks. Treat it that way and it stops being a chore you're behind on. It becomes something you can measure, prove, and show to an auditor or an insurer without a scramble. This post covers why patching earns a place near the top of your program, how to set patch SLAs by severity, how to track coverage and handle exceptions, and how OptiTech keeps the whole control and its evidence in one place.

## Why patching is one of your highest-impact controls

Attackers rarely need a clever new exploit. They reuse known vulnerabilities because those keep working, and they keep working because someone didn't patch. The window between a fix being published and attackers weaponizing it keeps shrinking, so the value of a patch decays fast. A fix applied in days protects you. The same fix applied in months protected you against nothing.

That's what makes patching such a high-leverage control. It's cheap compared to the damage it prevents, it addresses a huge share of real incidents, and every framework you'll face expects it. SOC 2, ISO 27001, NIS2, and DORA all assume you keep systems current and can show it. The control isn't "install updates sometimes." It's "apply the right fix within a defined time, across everything you run, and prove you did."

## Set patch SLAs by severity

A single deadline for every patch either moves too slowly for the dangerous fixes or too aggressively for the trivial ones. So you set a service level by severity, and you write it down. A typical shape looks like this:

- **Critical.** Patch within 7 days, or faster for actively exploited flaws.
- **High.** Patch within 30 days.
- **Medium.** Patch within 60 to 90 days.
- **Low.** Patch on the normal maintenance cycle.

The exact numbers matter less than having them agreed, documented, and owned. Severity should reflect your context, not just the vendor's score. A high-severity flaw on an internet-facing system beats a critical one buried on an isolated internal box. Once the SLA exists, every patch has a clock, and "we'll get to it" turns into a date you either hit or miss on the record.

## Track coverage, not just intent

Knowing your SLA is worthless if you can't see how much of your estate actually meets it. Coverage is the number that matters: of all the systems in scope, what percentage are patched within their SLA right now. That single figure tells you whether the control is working.

Coverage also exposes the systems that quietly fall out of scope. The server nobody owns, the container image that stopped getting rebuilt, the laptop that's been offline for a month. Those gaps are where incidents start, and they're invisible if you only track the patches you did rather than the systems you didn't. A real coverage number forces the denominator into the light.

## Handle exceptions without blowing a hole in the control

Sometimes you can't patch on time. A fix breaks a dependency, a vendor hasn't shipped one yet, or a system can't take downtime during a critical window. That's reality, and a control that pretends otherwise just gets bypassed quietly.

The answer is a documented exception, not a silent miss. A good exception names the system, the reason, the compensating control that reduces the risk in the meantime, an owner, and an expiry date. It's approved by someone with the authority to accept the risk. That way an unpatched system is a decision you can defend rather than a gap you can't explain. The difference between a mature program and a shaky one is often just this: the mature one keeps a clean, time-boxed list of exceptions instead of a pile of surprises.

## Patch management and vulnerability management

These two work together, but they answer different questions. Vulnerability management finds and prioritizes what's wrong across your systems. Patch management is one of the main ways you fix it and keep it fixed on a schedule. A scan that surfaces a flaw is only useful if something drives the remediation to done inside your SLA, and that something is your patch process.

Keeping them linked but distinct keeps your program honest. Your scanners tell you what to worry about. Your patch control shows you're actually closing the loop within the time you promised.

<Admonition type="tip" title="Patch the boring stuff too">
Attackers don't only chase your flagship application. Libraries, base images, browsers, and admin tools get exploited constantly because teams forget they're in scope. When you define coverage, include everything that runs code, not just the systems you think about first.
</Admonition>

## Evidence auditors and insurers actually want

When an auditor tests your patch control, they're not satisfied by a policy that says you patch promptly. They want to see the policy, the SLA, and proof that reality matched it over the audit period. That means patch records, coverage over time, and the exception list with approvals and expiry dates.

Cyber insurers now ask the same questions, and they price your premium on the answers. "Do you patch critical vulnerabilities within a defined SLA, and can you show coverage?" appears on nearly every application. A vague yes gets you a worse rate or a denied claim later. A clear yes, backed by evidence, is money.

The trouble is that this evidence goes stale the moment you export it. A screenshot of coverage is out of date by the next scan. So the evidence has to be something you maintain continuously, not reconstruct once a year.

## How OptiTech tracks the patch management control

In the OptiTech Console, patch management is a control in your program, mapped to the frameworks that require it, so one control satisfies SOC 2, ISO 27001, NIS2, and DORA at once instead of being re-proved four times. The control carries its policy, its SLA by severity, and its owner in one place.

Evidence attaches to the control and stays current. You connect the systems that report patch status, coverage is tracked against your SLA, and the exception list lives alongside the control with owners and expiry dates instead of in a forgotten spreadsheet. When an exception passes its expiry, it surfaces rather than lingering.

When an audit comes, you're not rebuilding the story. The control shows the policy, the current coverage, the history over the period, and the exceptions with their approvals. And because your program feeds your trust center, you can show customers and insurers that you patch on a real schedule without handing over a pile of screenshots. All the data stays in the EU, in Stockholm or Frankfurt, so residency is one less question on the review.

## Getting started

You can stand this up in a few focused steps:

1. **Write the SLA.** Agree patch deadlines by severity and get an owner to sign off.
2. **Establish coverage.** List every system in scope and start measuring the percentage patched within SLA.
3. **Formalize exceptions.** Move every "can't patch yet" into a documented, time-boxed exception with a compensating control.
4. **Connect it to evidence.** Track the control in OptiTech so coverage and exceptions stay current for audits and insurers.

Patch management rewards teams that treat it as a measured control instead of background chores. Set the clocks, watch coverage, keep exceptions honest, and the evidence takes care of itself.

Ready to turn patching into a control you can prove? [Book a demo](https://optitech-sverige.se/contact-sales) and see how OptiTech tracks the patch management control and its evidence.
