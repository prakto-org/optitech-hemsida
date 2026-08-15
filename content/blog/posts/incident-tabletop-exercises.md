---
title: 'Incident response tabletop exercises: test your plan before you need it'
description: How to run a tabletop that finds the gaps in your incident response plan and turns them into evidence.
excerpt: >-
  An incident response plan you've never tested is a guess. A tabletop exercise
  is a low-stakes rehearsal that surfaces the gaps before a real incident does.
  This guide covers what a tabletop is, why frameworks and DORA expect one, how
  to run a useful session, and how OptiTech records the exercise and its actions
  as evidence.
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
  title: 'Incident response tabletop exercises: test your plan before you need it - OptiTech'
  description: >-
    What a tabletop exercise is, why frameworks and DORA expect tested response
    plans, and how to record the exercise and resulting actions as evidence in
    OptiTech.
  keywords: []
  noindex: false
  ogTitle: 'Incident response tabletop exercises: test your plan before you need it - OptiTech'
  ogDescription: >-
    What a tabletop exercise is, why frameworks and DORA expect tested response
    plans, and how to record the exercise and resulting actions as evidence in
    OptiTech.
  image: null
---

Most teams write an incident response plan, get it approved, and never open it again until something breaks. Then the plan turns out to assume people who left, tools nobody bought, and a chain of command nobody agreed on. The one moment you need the plan to work is the moment you discover it doesn't.

A tabletop exercise fixes that before it costs you. It's a low-stakes rehearsal where the people who'd handle a real incident walk through a realistic scenario and make the decisions they'd make for real. This guide covers what a tabletop is, why frameworks and DORA expect you to test your response plan, how to run a session that actually helps, and how OptiTech records the exercise and its follow-up as evidence tied to your incident response control.

## What a tabletop exercise is

A tabletop is a discussion-based drill. You gather the people who'd respond to a real incident, walk them through a scenario step by step, and ask what each of them would actually do. No production systems get touched, no cables get pulled, and nothing goes down. The value is in the conversation and the decisions it forces into the open.

That's the difference from a live technical test. A technical test proves your systems behave. A tabletop proves your people and your process behave. It's cheap, it's safe, and it surfaces the human gaps that technical tests miss: who has the authority to declare an incident, who talks to the customer, who decides whether a regulator gets notified, and who does that job when the obvious person is on holiday.

## Why frameworks and DORA expect tested plans

Having a plan on paper isn't the bar. Every serious framework wants proof the plan works, and several now ask you directly when you last exercised it.

- **SOC 2** expects incident response to be defined and operating, and auditors increasingly ask for evidence that you test it, not just that it exists.
- **ISO 27001** asks you to plan for incidents, learn from them, and improve your controls over time. A tabletop is the cleanest way to show that learning loop running.
- **NIS2** raises the stakes with tight reporting duties, including an early warning within 24 hours and a fuller notification within 72 hours of becoming aware of a significant incident.
- **DORA** goes furthest. It requires financial entities to run a digital operational resilience testing program and to report major ICT-related incidents inside strict windows. A plan you've never rehearsed won't survive that scrutiny.
- **GDPR** gives you 72 hours to notify the supervisory authority of a qualifying personal data breach.

The through-line is simple. A response plan you've never tested is a liability, and the people who assess you know it. Testing turns a static document into a control you can defend.

## How to run a tabletop

### Pick a realistic scenario

Choose something plausible for your business, not a movie plot. Ransomware on a shared drive, a lost laptop holding customer data, a vendor breach that exposes your users, or a phishing email that leads to an account takeover. Make it specific enough that people can't hand-wave through it.

### Get the right people in the room

You want the real responders, not their managers standing in. A good cast includes a facilitator to drive the session, an incident lead to make the call, a technical lead, someone for communications and legal, and someone to play the outside world: the regulator, the customer, or the journalist. Add a scribe whose only job is to write down what happens.

### Use injects to drive the story

An inject is a new piece of information you drop into the scenario at a set moment. Start with the first weak signal, then escalate: the scope grows, a customer notices, a reporter calls, the attacker publishes stolen data. Each inject forces a fresh decision and stops the exercise from drifting into a comfortable chat.

### Time the decisions against your notification deadlines

This is the part that separates a useful tabletop from theater. Run a clock. When does the NIS2 24-hour early warning start ticking? When would the 72-hour GDPR breach notification come due? Where do DORA's windows for a major incident land? Push the team to decide when the clock starts, whether they'd notify, and who signs off. Record the reasoning, because that reasoning is exactly what a regulator will ask about later.

<Admonition type="tip" title="Start the clock out loud">
The hardest call in a real incident is deciding the moment you "became aware," because that's when your deadlines start. Practice making that call in the exercise. When people have argued it once in a safe room, they make it faster and more honestly when it counts.
</Admonition>

### Capture decisions and gaps as you go

The scribe records every decision, every "we're not sure who owns this," and every missing tool, contact, or access right. Don't fix things mid-session. Note them and keep moving, so the exercise stays realistic and you leave with an honest list.

## Capturing the lessons

An exercise is worthless if the notes die in a document nobody reopens. Run a short debrief while it's fresh, ideally the same day. Turn the raw observations into a small number of concrete findings: what worked, what didn't, and what's missing. Keep the list short and specific. "Nobody knew who could authorize customer notification" is a finding. "Communications could be better" is not.

Every finding needs an owner and a fix. Without those two things, a debrief is just a feeling.

## Turning lessons into improvements

Findings only matter when they become changes. Update the plan to name the person who declares an incident. Add the regulator's contact details so nobody hunts for them at hour two. Buy the tool you assumed you had. Run training for the step people fumbled. Adjust the control that didn't hold. Then track each action to done. The point of a tabletop was never the meeting. It's the improvements the meeting drives.

## Recording it all as evidence in OptiTech

Here's where the loop closes. Your incident response control needs evidence of two things: that the plan exists, and that you test it. OptiTech is built to hold both.

In the OptiTech Console you record the exercise as a first-class event: the date, the scenario, who took part, and the scope. You attach the run itself, including the injects, the decisions, and the timeline you built against your notification deadlines. You log each finding and the resulting action, every one with an owner and a due date, and you track those actions to completion.

Then you link the whole thing to your incident response control, so the evidence sits exactly where an auditor looks. When a SOC 2 auditor or a DORA supervisor asks when you last tested your response plan and what you changed as a result, the answer is one link, not a week of digging. Because the actions are tracked to done, you can show the plan got better, not just that you held a meeting. Publish the right summary to your trust center, and buyers running a security review see a program that rehearses for the bad day instead of hoping it never comes.

## Getting started

You don't need a war room or a full weekend. A realistic first tabletop looks like this:

1. **Pick one plausible scenario** and block 90 minutes.
2. **Invite the real responders,** plus one person to play the outside world.
3. **Run the clock** against your actual NIS2, DORA, and GDPR deadlines.
4. **Record the exercise, findings, and actions in OptiTech,** linked to your incident response control.

Tabletops reward the teams that treat response as a practiced skill instead of a document. Rehearse once, capture what you learn, and the next real incident meets a plan that already works.

Ready to test your incident response plan and keep the evidence? [Book a demo](https://optitech-sverige.se/contact-sales) and see how OptiTech turns exercises into a control you can prove.
