---
title: 'PCI DSS basics for companies that handle card payments'
description: What PCI DSS is, how scope works, and how to prove card data security without slowing your business down.
excerpt: >-
  PCI DSS applies the moment you touch card data, but most SaaS companies can
  shrink what they're responsible for by outsourcing the risky parts. This guide
  covers merchant levels, SAQ types, scope reduction, and how OptiTech maps PCI
  controls alongside ISO 27001 and SOC 2.
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
  title: 'PCI DSS basics for companies that handle card payments - OptiTech'
  description: >-
    What PCI DSS asks of you, how to reduce your scope, and how to map card data
    controls alongside ISO 27001 and SOC 2 in one program.
  keywords: []
  noindex: false
  ogTitle: 'PCI DSS basics for companies that handle card payments - OptiTech'
  ogDescription: >-
    What PCI DSS asks of you, how to reduce your scope, and how to map card data
    controls alongside ISO 27001 and SOC 2 in one program.
  image: null
---

If your product takes card payments, PCI DSS applies to you. It doesn't matter whether you handle ten transactions a month or ten thousand, or whether you built the checkout yourself or dropped in a payment provider's widget. The moment card data flows through, touches, or lands near your systems, protecting it is your responsibility.

The good news is that most SaaS companies handle far less card data than they think, and the work shrinks fast once you understand scope. This guide covers what PCI DSS asks of you, how you validate at your size, how to reduce what you're responsible for, and how OptiTech keeps your PCI controls in the same program as ISO 27001 and SOC 2.

## What PCI DSS actually is

The Payment Card Industry Data Security Standard is a set of security requirements created by the major card networks (Visa, Mastercard, American Express, Discover, and JCB) to protect cardholder data. It isn't a law, but your bank and your payment provider make it contractual. Fall short and you risk fines, higher transaction fees, or losing the ability to accept cards at all.

The standard centers on cardholder data: the primary account number (the long number on the card), plus things like the cardholder name, expiry date, and the security code. The core rule is simple. If you don't need to store it, don't. And whatever you do handle, you protect it both in transit and at rest.

## Merchant levels and how you validate

How you prove compliance depends on how much card volume you handle. The card networks sort merchants into four levels.

### Merchant levels

- **Level 1.** The largest merchants, usually over six million card transactions a year. They need an annual on-site assessment by a Qualified Security Assessor and a formal Report on Compliance.
- **Level 2.** Roughly one to six million transactions a year. Usually a self-assessment plus a quarterly network scan.
- **Level 3.** Smaller e-commerce merchants, often 20,000 to one million transactions.
- **Level 4.** Everyone else, the smallest merchants. Most early-stage SaaS companies start here.

Your acquiring bank sets your exact level, so confirm it rather than guessing.

### SAQ types

If you don't need a full on-site assessment, you validate with a Self-Assessment Questionnaire (SAQ). There are several types, and the one you use depends on how card data reaches you:

- **SAQ A.** You've fully outsourced payments to a compliant provider and card data never touches your systems. This is the shortest questionnaire and where you want to be.
- **SAQ A-EP.** Your site affects how the payment happens, for example a redirect you control, but you don't store card data.
- **SAQ D.** The longest one, for merchants that store, process, or transmit card data directly, and for service providers.

The pattern is clear. The less card data you touch, the shorter your questionnaire and the smaller your risk.

## Shrink your scope before anything else

Scope is the single biggest lever in PCI DSS. Everything that stores, processes, or transmits cardholder data, plus anything connected to it, falls in scope, and every in-scope system needs controls, monitoring, and evidence.

So the smartest move is to keep card data out of your systems entirely. Use a PCI-compliant payment processor and let their hosted fields or redirect capture the card, so the number goes straight from your customer's browser to the processor. Your servers never see it. That can move you from the exhausting SAQ D down to SAQ A.

You still have responsibilities. You need to confirm your processor is compliant, keep their attestation on file, and make sure nobody quietly reintroduces card data into a log, a support ticket, or a spreadsheet. But outsourcing the storage moves the heaviest burden to a specialist built for it.

<Admonition type="tip" title="Watch for silent scope creep">
Card data has a way of sneaking back in. A full card number pasted into a support ticket, written to a debug log, or saved in a spreadsheet pulls that system straight back into scope. Set a rule that card data lands nowhere but your processor, and check that it holds.
</Admonition>

## The core requirement themes

PCI DSS has twelve requirements, but you can group them into a few themes that map cleanly to good security practice:

- **Build and maintain a secure network.** Firewalls, no vendor default passwords, segmented systems.
- **Protect cardholder data.** Encrypt it in transit, minimize what you store, and mask the account number where it's displayed.
- **Manage vulnerabilities.** Keep systems patched, run anti-malware, and scan regularly.
- **Control access.** Least privilege, unique IDs for every user, and strong authentication for anyone near card data.
- **Monitor and test.** Log access, watch for anomalies, and test your defenses on a schedule.
- **Keep a security policy.** Written, current, and actually followed.

None of this is exotic. If you're already working toward ISO 27001 or SOC 2, you've met a lot of it already.

## Where PCI overlaps with ISO 27001 and SOC 2

Here's the part that saves you time. PCI DSS, ISO 27001, and SOC 2 ask for many of the same things in different words. Access control, encryption, vulnerability management, logging, incident response, and vendor oversight show up in all three.

Treated separately, that overlap means you answer the same question three times and store three copies of the same evidence. Treated as one program, a single control (say, "we enforce least-privilege access with unique accounts") satisfies a PCI requirement, an ISO 27001 annex control, and a SOC 2 trust criterion at once. You collect the evidence once and reuse it everywhere.

## How OptiTech maps PCI alongside your other frameworks

OptiTech treats PCI DSS as one framework in a shared program, not a standalone binder. Your controls live in one place, and each one maps to every framework it satisfies. When you show that access is restricted and logged, that single piece of evidence counts toward PCI, ISO 27001, and SOC 2 together.

That gives you a few things in the OptiTech Console:

- **One control set, many frameworks.** Map a control once and see every requirement it covers, so you stop duplicating work.
- **Evidence that stays current.** Attach the evidence to the control, assign an owner, and let OptiTech track when it needs refreshing instead of discovering it's stale mid-assessment.
- **Your processor's status on file.** Keep your payment provider's attestation and renewal date tracked, so you know the moment it expires.
- **A trust center that answers buyers.** Publish your PCI posture alongside your other certifications so security reviews start answering themselves.

## Getting started

You don't need to tackle all twelve requirements at once. A realistic first pass:

1. **Confirm your level and SAQ type.** Ask your acquiring bank, and aim for the shortest questionnaire your setup allows.
2. **Reduce your scope.** Route card data straight to a compliant processor so it never lands in your systems.
3. **Map PCI controls to what you already have.** Reuse the work you've done for ISO 27001 or SOC 2 instead of starting over.
4. **Connect it to your trust center** so your PCI posture becomes a sales asset, not just a checkbox.

PCI DSS looks intimidating from the outside, but for most SaaS companies the real task is keeping card data out of scope and proving the controls around it. Do that once, keep it current, and card compliance becomes one more thing your program handles quietly.

Ready to fold PCI DSS into a single program? [Book a demo](https://optitech-sverige.se/contact-sales) and see how OptiTech maps your controls, evidence, and frameworks together.
