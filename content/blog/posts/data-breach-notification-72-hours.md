---
title: 'The GDPR 72-hour breach notification: a practical guide'
description: What counts as a personal data breach, when you must notify, and how to run the 72-hour clock without panic.
excerpt: >-
  A personal data breach starts a 72-hour clock the moment you become aware of
  it. This guide covers what counts as a breach, when you notify the authority
  and the people affected, and how OptiTech keeps the timeline and decisions on
  record as they happen.
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
  title: 'The GDPR 72-hour breach notification: a practical guide - OptiTech'
  description: >-
    What counts as a personal data breach, when to notify the supervisory
    authority and affected individuals, and how to run the 72-hour clock with a
    breach runbook.
  keywords: []
  noindex: false
  ogTitle: 'The GDPR 72-hour breach notification: a practical guide - OptiTech'
  ogDescription: >-
    What counts as a personal data breach, when to notify the supervisory
    authority and affected individuals, and how to run the 72-hour clock with a
    breach runbook.
  image: null
---

When a personal data breach hits, the worst time to figure out your notification process is during the incident. The clock is already running, people are stressed, and the decisions you make in the first day shape whether you meet a legal deadline or explain to a regulator why you missed it.

GDPR gives you 72 hours to notify the supervisory authority about a qualifying breach. That sounds like plenty of time until you're living it. This guide covers what actually counts as a personal data breach, when you have to notify, what the 72-hour clock really means, and how to build a runbook so the process runs itself when you need it most.

## What counts as a personal data breach

A personal data breach isn't only a hacker stealing your customer records. GDPR Article 4 defines it broadly as a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to personal data. That covers three kinds of failure:

- **Confidentiality breach.** Someone sees personal data who shouldn't, like an email sent to the wrong recipient or a misconfigured access control.
- **Integrity breach.** Personal data is altered without authorization, so you can no longer trust that it's correct.
- **Availability breach.** You lose access to personal data, whether from ransomware, accidental deletion, or a failed backup.

That last one surprises teams. A ransomware attack that locks your own files, with no data ever leaving the building, is still a personal data breach because you've lost availability. So is a laptop left on a train if it holds unencrypted personal data.

The point is that "breach" is wider than "hack." Building your process around only the dramatic scenarios means you'll miss the ordinary ones, and the ordinary ones are far more common.

## When you have to notify

Two separate duties kick in, and they have different triggers.

### Notifying the supervisory authority (Article 33)

You must notify your supervisory authority, which in Sweden is the IMY, unless the breach is unlikely to result in a risk to people's rights and freedoms. Read that carefully: the default is that you notify. You only skip it when you can justify that there's no real risk, and you document that reasoning either way.

So a breach of a handful of business email addresses might not clear the bar. A breach exposing health data, financial details, or login credentials almost certainly does.

### Notifying affected individuals (Article 34)

There's a higher threshold for telling the people themselves. You have to inform affected individuals when the breach is likely to result in a *high* risk to their rights and freedoms. That means the risk is serious enough that people may need to act, like changing a password or watching for fraud.

You can avoid individual notification if you'd already rendered the data unintelligible, for example with strong encryption, or if you take later measures that remove the high risk. But if the authority disagrees with your call, it can order you to notify anyway.

Two duties, two thresholds: notify the authority for a *risk*, notify individuals for a *high risk*.

## What the 72-hour clock actually means

The 72 hours run from the moment you become *aware* of the breach, not from when it happened and not from when you finish investigating. Awareness means you have a reasonable degree of certainty that a security incident has compromised personal data.

Two things follow from that.

First, "aware" can arrive at an awkward moment: a Friday evening, the middle of a holiday. The clock doesn't pause for your calendar. That's exactly why the process has to be ready before the incident, not assembled during it.

Second, you don't need every answer before you notify. GDPR explicitly allows **phased notification**. You can send an initial notification with what you know, then follow up with details as your investigation continues. Regulators far prefer a prompt, incomplete notification over a late, polished one. If you notify after 72 hours, you have to explain the delay.

<Admonition type="note" title="Awareness starts the clock">
The 72 hours begin when you have reasonable certainty personal data was affected, not when the investigation wraps up. Record the moment of awareness explicitly, because that timestamp is the anchor for everything that follows.
</Admonition>

## What the notification must contain

Article 33 spells out the minimum. Even a first, phased notification should cover as much of this as you can:

- **The nature of the breach**, including the categories and approximate number of individuals and records affected.
- **The name and contact details** of your data protection officer or other contact point.
- **The likely consequences** of the breach.
- **The measures taken or proposed** to address the breach and mitigate its effects.

Notice how much of this you can prepare in advance. Your contact point doesn't change per incident. Your standard mitigation steps are known. What you fill in live is the specific scope and impact. The more of the structure that exists beforehand, the less you invent under pressure.

## Build the runbook before you need it

A breach runbook turns a panic into a procedure. At minimum it names who does what:

1. **Detection and triage.** Someone confirms whether a personal data breach actually occurred and records the moment of awareness. This starts the clock.
2. **Assessment.** A named owner assesses the risk to individuals, which decides both duties: notify the authority (risk) and notify individuals (high risk).
3. **Notification.** A named owner drafts and sends the Article 33 notification, and prepares Article 34 communications if the threshold is met.
4. **Documentation.** Every breach gets recorded regardless of whether you notified, including the facts, the effects, and the reasoning behind your decision.

That last step is easy to skip and important to keep. Article 33 requires you to document *all* breaches, notifiable or not, so the authority can verify your judgment. "We decided not to notify, and here's exactly why" is a valid answer only if you wrote it down at the time.

Assign real names, not roles nobody remembers at 9pm. Decide the backups too, because breaches don't wait for people to be at their desks.

## How OptiTech keeps the timeline honest

The hardest part of a breach isn't the technical fix. It's proving, afterward, that you handled the deadline correctly. That's a documentation problem, and it's where a program beats a scramble.

OptiTech tracks personal data incidents with the 72-hour clock visible, so the timeline and the decisions are recorded as they happen rather than reconstructed later. In the OptiTech Console you log the moment of awareness, and the deadline sits right there in front of you. Each incident carries its owner, its risk assessment, the notification decision, and the reasoning, so nothing depends on someone's memory.

Because the incident lives in the same program as your record of processing activities, you can answer the scope question faster. When you already know which processing activities touch which personal data, working out who's affected stops being an archaeology project. And every incident, notified or not, stays on record with its justification, which is exactly what Article 33 asks you to keep.

## GDPR, NIS2, and DORA aren't the same report

If you're subject to more than one regime, don't assume one notification covers them all. They have different triggers, deadlines, and recipients.

- **GDPR** is about *personal data*. You notify the data protection authority within 72 hours of awareness.
- **NIS2** is about *significant incidents* affecting essential or important services. It runs on a faster track: an early warning within 24 hours, followed by a fuller notification, usually to a national CSIRT or competent authority.
- **DORA** covers *major ICT-related incidents* at financial entities, with its own classification thresholds and reporting timeline to the relevant financial supervisor.

One security incident can trigger two or three of these at once, each with its own clock and its own audience. Mapping which regimes apply to you, and to which systems, is work you do before an incident, not during. Tracking each obligation as a distinct control keeps you from meeting one deadline while quietly missing another.

## Getting started

You don't need a crisis to build this. A realistic first pass:

1. **Write the runbook** with named owners and their backups for detection, assessment, notification, and documentation.
2. **Prepare the notification template** with everything Article 33 lets you fill in ahead of time.
3. **Decide your risk thresholds** so the "notify or not" call is guided, not improvised.
4. **Set up incident tracking** with the 72-hour clock visible, so the timeline records itself.

A breach is stressful no matter how ready you are. But the companies that handle it well aren't the ones who react fastest. They're the ones who decided, in advance, exactly what they'd do.

Want the 72-hour clock working for you before you need it? [Book a demo](https://optitech-sverige.se/contact-sales) and see how OptiTech tracks personal data incidents with the timeline and decisions recorded as they happen.
