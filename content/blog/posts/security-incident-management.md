---
title: 'Security incident management: from detection to lessons learned'
description: How to run a repeatable incident process from preparation to lessons learned, and hit every notification deadline.
excerpt: >-
  When a security incident hits, improvised responses miss deadlines and lose
  evidence. This guide walks through the full incident lifecycle, from
  preparation to the post-incident review, and shows how OptiTech keeps the
  timeline, owners, and notification clocks in one place.
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
  title: 'Security incident management: from detection to lessons learned - OptiTech'
  description: >-
    How to run a repeatable security incident process from preparation to
    lessons learned, with owners, timelines, and notification clocks you can
    prove.
  keywords: []
  noindex: false
  ogTitle: 'Security incident management: from detection to lessons learned - OptiTech'
  ogDescription: >-
    How to run a repeatable security incident process from preparation to
    lessons learned, with owners, timelines, and notification clocks you can
    prove.
  image: null
---

When a security incident hits, the difference between a controlled response and a chaotic one is almost always decided beforehand. Teams that improvise miss deadlines, lose evidence, and end up explaining to a regulator why the timeline has gaps. Teams that prepared follow a process they've rehearsed, and the paperwork mostly writes itself.

Incident management isn't a single moment of heroics. It's a lifecycle that runs from preparation through detection, containment, recovery, notification, and a review that makes you better next time. Regulators and auditors expect that lifecycle to be documented and repeatable, with a timeline they can inspect. This post walks through each stage and shows how OptiTech keeps the whole thing on the rails.

## Prepare before anything breaks

You can't design your response while the alarm is ringing. Preparation is the stage that decides whether everything after it goes smoothly, and it's the part auditors probe first when they ask how you'd handle a breach.

### Assign roles and an incident commander

Every incident needs one person who owns it. The incident commander makes decisions, keeps the timeline, and decides when to escalate. Around them you need a small, named team: someone technical to investigate and contain, someone to handle communications, and someone who understands your legal and regulatory obligations. Write these roles down before you need them, with names and backups, so no one wastes the first hour asking who's in charge.

### Write runbooks for the incidents you expect

You already know the shape of the incidents most likely to hit you: a lost laptop, a phishing compromise, a leaked credential, a ransomware attempt, a vendor breach. Write a short runbook for each. A good runbook lists the first steps, who to call, what to preserve, and what "contained" actually looks like. It turns a stressful judgment call into a checklist you can follow at 2 a.m.

### Agree on severity levels

Not every incident deserves the same response. Define a small set of severity levels, three or four is plenty, with clear criteria for each. A single spam email is not a sev-1. Customer data exposed to the internet is. Severity drives everything downstream: who gets paged, how fast you move, and which notification clocks start running. In the OptiTech Console you set severity when you open the incident, and it shapes the workflow from there.

## Detect and triage

Detection is where the lifecycle actually starts for most incidents. Alerts arrive from monitoring, a customer emails support, an employee reports a suspicious message. The job at this stage is to decide fast whether this is a real incident and how bad it is.

Triage means confirming what happened, assigning a severity, and naming an owner. Speed matters, but so does capturing the facts. The moment you open an incident in OptiTech, the clock starts and the timeline begins recording: who reported it, when, what they saw, and what you decided. That first entry is often the most important one you'll make, because it anchors everything the auditor reads later.

## Contain the damage

Containment stops the bleeding. Before you clean anything up, you limit the blast radius so the incident can't spread. That might mean isolating a machine, disabling an account, rotating a credential, or blocking an address.

Containment is also where you make hard trade-offs under pressure. Pulling a system offline stops the attacker but may take a service down for customers. Those decisions belong in the timeline with the reasoning attached, because you'll be asked to justify them. Linking the incident to the affected assets in OptiTech makes the blast radius concrete: you can see exactly which systems, and which controls, are in scope.

## Eradicate and recover

Once the incident is contained, you remove the root cause and get back to normal. Eradication means closing the hole the attacker used: patching the vulnerability, removing the malware, revoking the access. Recovery means restoring service and confirming everything is clean before you call it done.

Don't rush the handoff between these two. Recovering a system that's still compromised just restarts the incident. Verify that eradication worked, watch for the attacker coming back, and record each step as you go. The timeline you're building isn't busywork. It's the evidence that shows you handled the incident properly, and it feeds directly into the review at the end.

## Decide who to notify, and when

Notification is where incident management meets regulation, and where improvised responses fall apart. Several frameworks put a hard clock on you, and the clocks start whether or not you're ready.

- **GDPR** gives you 72 hours to report a qualifying personal data breach to the supervisory authority, counted from when you become aware of it.
- **NIS2** sets tight reporting duties for essential and important entities, including an early warning within 24 hours for significant incidents.
- **DORA** requires financial entities to classify and report major ICT-related incidents on strict timelines.

The trap is deciding notification ad hoc, one incident at a time, while the clock runs. OptiTech makes the obligation visible: when you set severity and mark that personal data or a regulated service is affected, the relevant notification clock appears on the incident with its deadline. You can see at a glance whether the 72-hour window applies and how much of it is left.

<Admonition type="tip" title="Start the clock at awareness, not at resolution">
The GDPR 72-hour window begins when you become aware of the breach, not when you finish investigating. Record the moment of awareness explicitly in the timeline, because that timestamp is the one the regulator counts from.
</Admonition>

## Run the post-incident review

The incident isn't over when service is restored. The review is what turns a bad day into a better program. Within a week, while memory is fresh, the team walks the timeline and asks what happened, why, and what would stop it next time.

Keep the review blameless. You want honest answers, not defensive ones, and you get honest answers by focusing on the process rather than the person. The output is a short set of corrective actions with owners and due dates: fix the gap that let the incident happen, and fix the gap in your response that slowed you down.

This is also where incident management connects to the rest of your compliance program. A corrective action often maps to a control that needs strengthening. In OptiTech you link the review to the affected controls, so the lesson becomes evidence that your program improves over time. Auditors love that link, because it proves the process is real and not just a document.

## Getting started

You don't need a security operations center to run incident management well. A realistic first pass looks like this:

1. **Name your incident roles** and pick an incident commander, with backups.
2. **Write runbooks** for the three or four incidents most likely to hit you.
3. **Define severity levels** and tie them to who gets paged and which clocks start.
4. **Track every incident in one place** with an owner, a severity, a live timeline, and links to the affected assets and controls.

The companies that handle incidents well aren't the ones that never have them. They're the ones who prepared, followed a repeatable process, and can show the timeline on demand. Build that habit once, and both your regulators and your customers get the same clear answer.

Ready to make incident response a repeatable process instead of a scramble? [Book a demo](https://optitech-sverige.se/contact-sales) and see how OptiTech tracks incidents with owners, timelines, and notification clocks linked to your controls.
