---
title: 'Business impact analysis: how to set RTO and RPO that hold up'
description: How a business impact analysis turns recovery targets from guesswork into decisions you can defend.
excerpt: >-
  A business impact analysis tells you which functions matter, how fast you need
  them back, and how much data you can afford to lose. This guide covers what a
  BIA is, how it underpins continuity and DORA, and how OptiTech keeps it current
  against your asset register.
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
  title: 'Business impact analysis: how to set RTO and RPO that hold up - OptiTech'
  description: >-
    What a business impact analysis is, how it underpins business continuity and
    DORA, and how to set RTO and RPO you can defend.
  keywords: []
  noindex: false
  ogTitle: 'Business impact analysis: how to set RTO and RPO that hold up - OptiTech'
  ogDescription: >-
    What a business impact analysis is, how it underpins business continuity and
    DORA, and how to set RTO and RPO you can defend.
  image: null
---

Most teams write a business continuity plan the way they write a fire drill memo. They pick a recovery target that sounds responsible, put it in a document, and move on. Then a real disruption hits and the target turns out to be a guess, because nobody measured what the business actually loses when a critical function goes dark.

A business impact analysis fixes that. It's the work that tells you which functions matter most, how fast you need them back, and how much data you can afford to lose along the way. Without it, your continuity plan is built on opinion. With it, every recovery target traces back to real impact. This guide covers what a BIA is, how it underpins business continuity and DORA resilience requirements, and how to run it as a living program with OptiTech.

## What a business impact analysis really is

A business impact analysis (BIA) answers one question: if this function stops, what does it cost us and how quickly does the cost grow? It's not a risk assessment. A risk assessment asks how likely a threat is. A BIA assumes the disruption already happened and measures the damage over time.

The output is a ranked picture of your operations. For each business function you capture the financial, operational, legal, and reputational impact of an outage, and how that impact escalates the longer the function stays down. An hour offline might be an annoyance for one function and a regulatory breach for another. The BIA is what tells them apart, so you spend your recovery budget where it actually protects the business.

## Why a BIA underpins continuity and DORA

You can't plan a recovery you haven't scoped. Business continuity planning depends on knowing your priorities before an incident, and the BIA is where those priorities come from. It sets the recovery targets that the rest of the plan has to meet, and it justifies the investment in backups, failover, and standby capacity.

For financial entities in the EU, this isn't optional. The Digital Operational Resilience Act (DORA) requires firms to understand how disruptions to critical functions affect the business and to set recovery objectives grounded in that understanding. NIS2 pushes essential and important entities in the same direction. A BIA is the evidence that your recovery targets are deliberate rather than aspirational, and it's exactly what a supervisor or auditor asks for when they test your resilience.

## Finding your critical business functions

Start with functions, not systems. A critical business function is something the organization does that customers, regulators, or the business itself depend on: processing payments, onboarding clients, running payroll, keeping a service available. List them in business terms first, because that's the language impact is measured in.

Then rank them by impact, not by how much you like the team that runs them. The functions that generate revenue, carry legal obligations, or protect customers usually rise to the top. Be honest about which ones can wait a day and which ones can't wait an hour. That ranking is the spine of everything that follows.

### Map functions to the assets that support them

A function never stands alone. Behind "process payments" sits a chain of supporting assets: an application, a vendor, an integration, a team, maybe a physical location. If you set a recovery target for the function but never map what it depends on, you'll discover the gap during the incident, which is the worst possible time.

Dependency mapping is where a BIA earns its keep. For each critical function, record the assets it relies on and the order they need to come back. A recovery target on the function is only credible if every asset underneath it can meet that target too. When one dependency is slower than the function's goal, you've found a weak link worth fixing before it fails.

## Defining RTO and RPO in plain terms

Two numbers turn a BIA into an actionable plan. They sound technical, but the ideas are simple.

### Recovery time objective (RTO)

The RTO is how long a function can stay down before the impact becomes unacceptable. If payroll has an RTO of eight hours, you're committing to restore it within eight hours of an outage. It's a target for speed, and it should come straight from the impact you measured. A function whose impact spikes within an hour needs a short RTO. One that degrades slowly can tolerate a longer one.

### Recovery point objective (RPO)

The RPO is how much data or work you can afford to lose, measured as a window of time. An RPO of fifteen minutes means you can accept losing up to fifteen minutes of the most recent work if you have to fall back to your last good copy. It drives how often you protect the function's data and how much recent activity you might have to reconstruct by hand. A short RPO costs more to maintain, so you reserve it for the functions where lost work does real damage.

The trap is setting both to zero for everything because it feels safe. Near-instant recovery and zero data loss are expensive, and applying them everywhere burns budget you should be spending on the functions that truly need it. The BIA is what justifies a tighter target here and a looser one there.

## Escalation thresholds and impact over time

Impact is rarely a flat line. A function might be tolerable for two hours, painful at four, and a contractual breach at eight. Capturing that curve, not a single number, is what makes a BIA useful under pressure.

Escalation thresholds turn the curve into action. You define the point at which an outage stops being an operational issue and becomes an executive one: when to notify leadership, when to trigger the continuity plan, when to inform a regulator. During a real incident, nobody has the calm to invent those thresholds. Set them in advance and the response follows the plan instead of the loudest voice in the room.

<Admonition type="tip" title="Anchor targets to impact, not habit">
Don't copy an RTO from another function because it feels close enough. Set each target from the impact the BIA measured, so you can defend it to a customer, a regulator, or your own board without hand-waving.
</Admonition>

## Why a BIA is only useful if it stays current

A BIA is a snapshot of a business that keeps moving. You add a function, swap a vendor, retire an application, and every one of those changes can shift a recovery target or break a dependency you mapped last year. A BIA that lives in a document from eighteen months ago describes a company that no longer exists.

This is the failure mode that catches most teams. The analysis was solid when it was written, but nobody owns keeping it current, so it drifts until an incident or an audit exposes the gap. A BIA earns its value only when it tracks the business in real time, which means it has to be connected to the assets it describes rather than copied away from them.

## Running your BIA in OptiTech

OptiTech runs your BIA against the same asset register your program already maintains. Each critical function links to its supporting assets, so a change to the register shows up in the analysis instead of quietly making it wrong. RTO and RPO live on the function, tied to the impact you recorded, and escalation thresholds are set where everyone can see them.

Because the analysis sits inside your compliance program, the impact ratings, dependencies, and recovery targets are all evidence you can show. When you need to feed a continuity plan or answer a DORA question, you export the current BIA from the OptiTech Console rather than reconstructing it from memory. The work you did to understand your business becomes proof that your resilience is deliberate.

## Getting started

You don't need to analyze everything at once. A realistic first pass looks like this:

1. **List your critical business functions** in business terms, and rank them by impact.
2. **Map each function to its supporting assets** so every recovery target has dependencies behind it.
3. **Set an RTO and RPO for each function** from the impact you measured, not from habit.
4. **Define escalation thresholds** so the response is decided before the incident, not during it.
5. **Connect the BIA to your asset register** so it stays current as the business changes.

A business impact analysis rewards the companies that treat it as a living view of the business rather than a document they finish once. Measure impact, set targets you can defend, and keep them current, so your continuity plan holds up when you actually need it.

Ready to turn your BIA into a living program? [Book a demo](https://optitech-sverige.se/contact-sales) and see how OptiTech ties your recovery targets to your asset register.
