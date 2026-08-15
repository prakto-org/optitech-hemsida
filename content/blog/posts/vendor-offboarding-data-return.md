---
title: 'Vendor offboarding: secure data return and destruction'
description: How to close out a vendor cleanly, revoke access, retrieve or destroy your data, and keep the evidence.
excerpt: >-
  Signing a vendor gets all the attention. Offboarding gets ignored, which is
  exactly where dormant data and failed audits come from. This post walks
  through secure vendor offboarding: revoking access, returning or destroying
  data, closing integrations, and keeping evidence, and how OptiTech tracks it
  all as part of the vendor lifecycle.
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
  title: 'Vendor offboarding: secure data return and destruction - OptiTech'
  description: >-
    How to offboard a vendor securely: revoke access, retrieve or certify
    destruction of your data, update your sub-processor list, and keep the
    evidence.
  keywords: []
  noindex: false
  ogTitle: 'Vendor offboarding: secure data return and destruction - OptiTech'
  ogDescription: >-
    How to offboard a vendor securely: revoke access, retrieve or certify
    destruction of your data, update your sub-processor list, and keep the
    evidence.
  image: null
---

Signing a vendor gets all the attention. You run the security review, negotiate the data processing agreement, check the certifications, and file the paperwork. Then, months or years later, you stop using the vendor. And most teams treat that moment like it doesn't matter.

It matters more than you'd think. When a vendor relationship ends, your data is often still sitting in their systems, your integrations are still open, and your access tokens still work. The contract is over, but the risk isn't. Offboarding is the part of the vendor lifecycle everyone forgets, and it's where quiet breaches and failed audits come from.

## The end of the lifecycle nobody plans for

Vendor management is usually built around getting a supplier approved. There's a due diligence checklist, an owner, and a clear finish line. Offboarding has none of that. When someone cancels a contract or switches tools, the work of closing things down lands on whoever remembers, if anyone does.

The result is a long tail of dormant vendors that still hold your data. A marketing tool you dropped two years ago that still has a copy of your customer list. An analytics service with an API key that never got rotated. A former processor that never confirmed it deleted anything. Each one is a live risk with no owner, and none of it shows up until a customer asks or an auditor starts pulling threads.

## What secure offboarding actually involves

Offboarding a vendor is more than clicking cancel. A complete offboarding covers a few things that are easy to skip and expensive to miss.

### Revoke every access path

Start by cutting off access. That means more than deactivating a login. Think about API keys, service accounts, SSO connections, shared folders, and any standing access the vendor's staff had into your systems. A single forgotten token is enough to keep a door open long after the relationship ends. Make a list of every way the vendor could reach your data or your environment, and close each one.

### Get your data back, or get it destroyed

Your contract should say what happens to your data when the relationship ends, and now is when you enforce it. You have two clean options: retrieve your data in a usable format, or require the vendor to destroy it. Often you want both, so export what you need, then have them delete the rest. The key word is certify. A vendor saying "we deleted it" in an email isn't the same as a signed certificate of destruction that names what was deleted and when. Ask for the certificate, and keep it.

### Close the integrations

Modern vendors don't sit alone. They're wired into your other tools through integrations, webhooks, and data feeds. When you offboard, those connections need to come down too, on both sides. An open integration to a vendor you no longer use is a data flow you're no longer watching. Trace every connection the vendor had into your stack and shut it off, then confirm the data stopped moving.

## Update your sub-processor list and your trust center

If the vendor you're dropping was a processor or sub-processor, your public records need to catch up. Your sub-processor list is a live document your customers rely on, and leaving a retired vendor on it is as misleading as leaving a current one off. Remove the vendor, note the date, and if your program feeds a trust center, let that update flow through so buyers always see an accurate picture.

This is also a courtesy to your own customers. Under most data processing agreements, you owe them notice when your sub-processors change. Offboarding a processor is exactly that kind of change, and handling it cleanly keeps you on the right side of your own commitments.

## Offboarding is a DORA exit plan requirement

For anyone in scope of DORA, offboarding stops being optional housekeeping and becomes a regulated capability. The regulation asks you to plan, before you ever need it, how you'd separate from a critical provider: where your data would go, how you'd keep operating, and how long it would take. A vendor exit you've documented and can execute is the evidence that your exit plan is real rather than a paragraph in a policy.

<Admonition type="info" title="DORA expects an exit plan">
Under DORA, financial entities must maintain documented exit strategies for critical ICT third-party providers, including how you'd retrieve your data and move off the service without disruption. Offboarding isn't just good hygiene here, it's the moment your exit plan gets tested. If you can't show how you'd leave a provider cleanly, you can't show you're prepared.
</Admonition>

## Keep the evidence of offboarding

Here's the part that ties it together. Every step above produces evidence, and that evidence is what turns a messy wind-down into something you can prove. The revoked access, the certificate of destruction, the closed integrations, the updated sub-processor list, the date each happened, all of it is proof that you handled the vendor's exit responsibly.

Without that trail, offboarding is just a memory. An auditor asks whether you retrieved your data from a former vendor and you're guessing. A customer asks whether their data was deleted when you switched tools and you can't answer. The evidence is what lets you say yes with confidence.

## How OptiTech tracks the whole lifecycle

OptiTech treats offboarding as part of the vendor lifecycle, not an afterthought. In the OptiTech Console, each vendor moves through stages from onboarding to active to offboarded, and the offboarding step comes with its own checklist: revoke access, confirm data return or destruction, close integrations, update the sub-processor list. Nothing gets marked complete until the work is done and the evidence is attached.

Because the vendor sits inside your wider program, offboarding connects to everything it touches. The certificate of destruction attaches to the vendor record as evidence. The sub-processor change flows through to your trust center automatically. The controls that depend on the vendor get reviewed. And when an auditor or a customer asks how you handle vendor exits, the answer is a complete, dated trail instead of a shrug.

Vendor offboarding is the least glamorous part of third-party risk, and that's exactly why it gets skipped. But it's where your data actually lives once a relationship ends, and it's where DORA, your auditors, and your customers will look. Handle it as a tracked, evidenced step and it stops being a liability.

Ready to close the loop on every vendor? [Book a demo](https://optitech-sverige.se/contact-sales) and see how OptiTech tracks the vendor lifecycle from onboarding to offboarding as evidence.
