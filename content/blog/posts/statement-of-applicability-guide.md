---
title: 'The ISO 27001 Statement of Applicability: what it is and how to keep it honest'
description: What the Statement of Applicability is, why auditors check it first, and how to keep it current instead of letting it drift.
excerpt: >-
  The Statement of Applicability is the map between your risks, your controls,
  and the evidence that proves they work. This guide covers what the SoA is, why
  auditors reach for it first, and how OptiTech generates it straight from your
  control set so it never drifts from reality.
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
  title: 'The ISO 27001 Statement of Applicability: what it is and how to keep it honest - OptiTech'
  description: >-
    What the Statement of Applicability is, why auditors check it first, and how
    to keep it current with OptiTech instead of letting it drift.
  keywords: []
  noindex: false
  ogTitle: 'The ISO 27001 Statement of Applicability: what it is and how to keep it honest - OptiTech'
  ogDescription: >-
    What the Statement of Applicability is, why auditors check it first, and how
    to keep it current with OptiTech instead of letting it drift.
  image: null
---

Most teams meet the Statement of Applicability the week before their first ISO 27001 audit. Someone exports a template, pastes in the Annex A control list, marks almost everything "applicable," writes a one-line justification for each, and files it. It passes the eye test the first time. Then the surveillance audit comes around, the auditor opens it, and the questions start.

The Statement of Applicability isn't a checkbox you tick once. It's the map between your risks, your controls, and the evidence that proves those controls work. Get it right and it becomes the spine of your whole information security program. Get it wrong and it's the first thing that unravels an audit. This guide covers what the SoA actually is, why auditors reach for it first, and how to keep it current instead of letting it drift.

## What the Statement of Applicability is

The Statement of Applicability, usually shortened to SoA, lists every control in ISO 27001 Annex A, states whether you've applied it, and explains why. For each control it answers three questions: is it included or excluded, what's the justification, and how do you know it's working. That's the whole job. The structure is simple. The discipline behind it is not, because the SoA is where your risk assessment, your control set, and your evidence all have to agree.

Think of it as the index to your ISMS. Your risk assessment says what could go wrong. Your risk treatment plan says what you'll do about it. The SoA records which Annex A controls you chose, ties each one back to the risks it addresses, and points to the evidence that shows it's real. It's the single place someone can stand and see your entire program at a glance, which is exactly why it carries so much weight.

## Why auditors reach for it first

When an auditor sits down with your ISMS, the SoA is the document they open first. It tells them what you claim to have in place, and it gives them a checklist to test you against. Every other part of the audit flows from it. They pick controls from your SoA, ask you to show the evidence, and compare what you wrote against what you actually do.

That's why the SoA is less a form and more a promise. Each line says "we do this, here's why, and here's proof." An auditor's job is to find the lines where the promise and the reality don't match. If your SoA says you run quarterly access reviews and you can't produce the last three, that gap is now on the record. The SoA doesn't just describe your program. It sets the terms of your audit.

## The 93 controls and the four themes

ISO 27001:2022 reorganized Annex A into 93 controls grouped under four themes. The 2013 version had 114 controls across 14 domains, so if you're moving from the older standard, the mapping matters. The four themes are:

- **Organizational (37 controls).** Policies, roles, supplier relationships, incident management, and the governance that ties the program together.
- **People (8 controls).** Screening, terms of employment, awareness training, and what happens when someone joins, moves, or leaves.
- **Physical (14 controls).** Secure areas, equipment, clear desk and clear screen, and protection against physical and environmental threats.
- **Technological (34 controls).** Access control, cryptography, logging, secure development, and the technical measures most people picture when they think "security."

You don't apply all 93 by default. You apply the ones your risks call for, and you document why the rest don't fit. That decision is the heart of the SoA, and it's where inclusion and exclusion come in.

## Justifying inclusion and exclusion

Every control on the list is either in or out, and neither answer is free. If you include a control, you're committing to run it and to hold evidence that it works. If you exclude one, you owe a reason that stands up to scrutiny.

Good inclusion justifications tie the control back to your risk assessment. You don't include access control "because ISO says so." You include it because your risk assessment flagged unauthorized access to customer data as a real threat, and this control treats that risk. The line from risk to control to evidence should be visible, because that's the line an auditor follows.

Exclusions are where teams get into trouble. "Not applicable" is a valid answer, but only with a defensible reason. Excluding physical controls for a data center you don't operate is fine, as long as you name the cloud provider that does and point to their certification. Excluding a control because it's inconvenient is not fine, and an auditor will spot the difference. Write exclusions as if the person reading them is looking for the gap, because they are.

<Admonition type="tip" title="Write for the skeptic">
Every justification, included or excluded, should make sense to someone who wasn't in the room when you decided. If a line only holds up because you can explain it out loud, it won't hold up in an audit. Write the reason down and link it to the risk.
</Admonition>

## Why a stale SoA is a red flag

The fastest way to lose an auditor's trust is a SoA that hasn't changed in a year while your company has. You added a product, moved to a new office, onboarded ten vendors, and rolled out a new identity system, and the SoA still describes the company you were last spring. That mismatch tells the auditor your document and your reality have drifted apart, and now they'll dig into everything.

A stale SoA is rarely a single wrong line. It's a signal. It suggests the SoA is a document you produce for audits rather than a description of how you actually operate. Once an auditor believes that, every green checkmark becomes a question. The SoA is supposed to reflect the current state of your controls, so when it lags, it stops being evidence and starts being a liability.

The fix isn't to update it harder once a year. It's to stop treating the SoA as a separate document at all.

## How OptiTech keeps your SoA honest

The reason SoAs drift is that most teams maintain them by hand, in a spreadsheet that lives apart from the controls it describes. You change a control in one place and forget to update the SoA in another. The two fall out of sync the moment real work happens.

OptiTech takes a different approach. Your SoA is generated directly from your control set and the evidence attached to it, so it reflects the actual state of your program instead of a snapshot someone typed months ago. When you map a control to a risk, that link shows up in the SoA. When evidence expires or a control changes owner, the SoA moves with it. There's no separate document to keep in step, because the SoA is a view of the work you're already doing in the OptiTech Console.

That also means your inclusion and exclusion decisions live next to the risks that justify them. An auditor reviewing your SoA can follow each control to its risk and its evidence without leaving the page, and you can publish your posture to a trust center so buyers see the same current picture. The SoA stops being the thing you scramble to fix before an audit and becomes the thing that proves you were ready all along.

## Getting started

You don't have to rebuild everything at once. A realistic first pass looks like this:

1. **Anchor the SoA to your risk assessment.** Every included control should trace to a risk it treats.
2. **Justify every exclusion in writing.** Name the reason and the evidence that backs it, especially for controls covered by a provider.
3. **Attach evidence to each control** so the SoA reflects reality instead of intent.
4. **Connect it to your trust center** so the same current posture answers buyer security reviews on demand.

A good SoA rewards the companies that treat it as a living view of their controls rather than a document they assemble under deadline. Build the links once, keep the evidence current, and your SoA tells the same true story to every auditor and every buyer who asks.

Ready to keep your Statement of Applicability honest? [Book a demo](https://optitech-sverige.se/contact-sales) and see how OptiTech generates your SoA straight from your controls and evidence.
