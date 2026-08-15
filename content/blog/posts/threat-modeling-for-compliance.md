---
title: 'Threat modeling for compliance: a practical approach'
description: How to find real risks before an auditor does, and turn them into controls you can prove.
excerpt: >-
  Threat modeling isn't just a security exercise. It's a fast way to find what
  could go wrong before an auditor or an attacker does, and turn each risk into a
  control you can prove. This guide covers a practical approach and how OptiTech
  links the output to your risks and controls.
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
  title: 'Threat modeling for compliance: a practical approach - OptiTech'
  description: >-
    A practical guide to threat modeling for compliance: identify assets, use
    STRIDE to name threats, decide on mitigations, and feed the output into your
    risk register and controls.
  keywords: []
  noindex: false
  ogTitle: 'Threat modeling for compliance: a practical approach - OptiTech'
  ogDescription: >-
    A practical guide to threat modeling for compliance: identify assets, use
    STRIDE to name threats, decide on mitigations, and feed the output into your
    risk register and controls.
  image: null
---

Most security programs start with a framework and work backward. You pick SOC 2 or ISO 27001, you get a list of controls, and you spend months proving you meet each one. That works, but it skips a question worth asking first: what are you actually trying to protect, and what could go wrong?

Threat modeling answers that question before you write a single control. It's a structured way to look at a system, figure out what could hurt it, and decide what to do about it. Done well, it makes your compliance program sharper, because your controls map to real risks instead of a generic checklist. This guide walks through threat modeling at a practical level and shows how OptiTech turns the output into risks and controls you can track.

## What threat modeling actually is

Threat modeling is a conversation with structure. You take a system, an application, or even a business process, and you ask a small set of questions: what are we building, what can go wrong, what are we doing about it, and did we do a good enough job. That's the whole loop, and you don't need a security PhD to run it.

The point isn't to predict every attack. It's to surface the risks you'd otherwise miss until an auditor, a customer, or an attacker finds them for you. A one-hour session with the right people in the room beats a perfect model that never happens.

## Start with your assets

You can't protect what you haven't named. So the first step is listing what matters: the data, the systems, and the processes that would cause real damage if they failed or leaked.

For most companies the crown jewels are obvious once you say them out loud:

- **Customer data**, especially personal data covered by GDPR.
- **Authentication and access**, the keys that unlock everything else.
- **Your production environment**, where an outage or a breach hits customers directly.
- **Financial and business data** that would damage your reputation if it got out.

Write these down before you think about threats. Assets give the rest of the exercise a target. When you know a system holds customer personal data in the EU, both the threats you care about and the residency rules you have to meet come into focus.

## Name the threats with STRIDE

Once you know what you're protecting, you need a way to think about what could go wrong without staring at a blank page. STRIDE is a lightweight checklist that does exactly that. It's six categories of threat, and you walk through each one asking "could this happen here?"

- **Spoofing.** Could someone pretend to be a user or a system they're not?
- **Tampering.** Could someone change data or code they shouldn't touch?
- **Repudiation.** Could someone do something and later deny it, with no record to prove otherwise?
- **Information disclosure.** Could data leak to someone who shouldn't see it?
- **Denial of service.** Could someone knock the system offline?
- **Elevation of privilege.** Could someone gain access beyond what they're allowed?

You don't need special tools. A whiteboard, a diagram of how data moves, and the six prompts will surface more real risk in an hour than most teams find in a quarter. The categories keep the conversation honest, because it's easy to obsess over one flashy attack and forget the boring one that actually gets you.

<Admonition type="tip" title="Keep the first pass small">
Don't try to model your whole company at once. Pick one system that holds sensitive data, run STRIDE against it, and finish. A small model you complete beats a big one you abandon halfway.
</Admonition>

## Decide on mitigations

A threat you've named but done nothing about is just a worry. The value shows up when each threat gets a decision. For every threat worth taking seriously, you have four honest options:

- **Mitigate.** Add a control that reduces the risk, like enforcing multi-factor authentication against spoofing.
- **Accept.** Decide the risk is low enough to live with, and write down why.
- **Transfer.** Shift the risk elsewhere, for example through insurance or a vendor's responsibility.
- **Avoid.** Stop doing the risky thing entirely.

Most threats end in "mitigate," and that's where threat modeling meets your framework. The mitigation for a tampering threat might be an integrity check. The mitigation for information disclosure might be encryption and tighter access. Each one is a control you can point to later.

## When to do it

Threat modeling isn't a one-time event, but it's also not something you do every week. The right moments are the ones where the risk picture changes:

- **When you design something new.** A new feature that touches customer data is the cheapest time to catch a design flaw.
- **When something changes materially.** A new integration, a new data flow, or a move into a new market shifts what could go wrong.
- **On a regular cadence for critical systems.** Your most sensitive systems deserve a fresh look once or twice a year, even if nothing obvious changed.

The habit matters more than the frequency. A team that threat models new features by reflex builds safer systems than one that runs a heroic annual exercise and forgets about it.

## From threat model to risk register and controls

Here's where a lot of threat modeling falls apart. The team runs a great session, fills a whiteboard, and then the output dies in a document nobody opens again. The threats never become risks anyone tracks, and the mitigations never become controls anyone verifies.

OptiTech closes that gap. Each threat you identify becomes an entry in your risk register, with an owner, a severity, and a decision. Each mitigation links to a control in your program, so the thing you promised to do is the thing you're measured against. When an auditor asks why a control exists, the answer is a specific threat, not "the framework told us to."

That connection runs both ways. When a control's evidence goes stale, you can trace it back to the risk it's supposed to cover. When a new threat appears, you can see which controls already address it and which gaps you still need to close. Your threat models stop being one-off documents and become a living input to the same program that produces your SOC 2, ISO 27001, and NIS2 evidence.

And because it's all one program, the output shows up where buyers can see it. A trust center backed by OptiTech lets customers see that you take security seriously, without walking them through your whiteboard.

## Getting started

You don't need a formal program to begin. A realistic first pass looks like this:

1. **Pick one system** that holds sensitive data, and diagram how data moves through it.
2. **Run STRIDE** against it with the people who know it best, and write down what you find.
3. **Decide on each threat**: mitigate, accept, transfer, or avoid.
4. **Push the output into OptiTech**, so threats become tracked risks and mitigations become controls with owners.

Threat modeling rewards teams that make it a habit instead of a project. Do it small, do it often, and connect the output to the risks and controls you already manage. Your auditors get clearer evidence, and your systems get genuinely safer.

Ready to connect threat modeling to your risks and controls? [Book a demo](https://optitech-sverige.se/contact-sales) and see how OptiTech turns what could go wrong into a program you can prove.
