---
title: 'Business continuity and disaster recovery: a plan you actually test'
description: How to build a continuity plan you actually test, instead of a document that gathers dust.
excerpt: >-
  Business continuity and disaster recovery answer different questions, and both
  are only as good as the last time you tested them. This guide covers the
  difference between the two, how a business impact analysis drives your recovery
  strategies, and why testing is the part auditors and DORA care about most.
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
  title: 'Business continuity and disaster recovery: a plan you actually test - OptiTech'
  description: >-
    The difference between business continuity and disaster recovery, how a
    business impact analysis drives your plan, and why testing is what auditors
    and DORA actually want to see.
  keywords: []
  noindex: false
  ogTitle: 'Business continuity and disaster recovery: a plan you actually test - OptiTech'
  ogDescription: >-
    The difference between business continuity and disaster recovery, how a
    business impact analysis drives your plan, and why testing is what auditors
    and DORA actually want to see.
  image: null
---

Most teams write a business continuity plan once, usually because a customer or an auditor asked for one. It goes into a shared drive, gets a version number, and sits there. Then a supplier goes down or a building loses power, and the plan turns out to describe a company that no longer exists: wrong people, wrong systems, wrong phone numbers.

A plan you never test isn't a plan. It's a document. Real continuity comes from knowing what matters, deciding in advance how you'll keep it running, and rehearsing that decision until the team can make it under pressure. This guide covers the difference between continuity and recovery, how to build both on a business impact analysis, and why testing is the part that actually counts.

## Business continuity and disaster recovery aren't the same thing

People use the two terms interchangeably, but they answer different questions.

Business continuity is about keeping the whole business running when something goes wrong. It covers people, processes, facilities, suppliers, and communication. If your office is unreachable, how does staff keep serving customers? If a key supplier fails, what's the workaround? A business continuity plan (BCP) answers those questions.

Disaster recovery is narrower. It's about restoring the technical services your business depends on after an outage: the systems, the platforms, the connectivity. A disaster recovery plan (DR) answers how you get those services back and how fast.

Recovery sits inside continuity, not beside it. You can't keep the business running if the services it relies on are down, and restoring services is pointless if nobody's defined what the business needs first. Treat disaster recovery as one strategy inside your wider continuity program, not a separate binder.

## Everything starts with a business impact analysis

You can't protect everything equally, and trying to is how continuity plans become 90-page documents nobody reads. A business impact analysis (BIA) tells you where to focus.

A BIA looks at each business process and asks what happens if it stops. Which processes are critical? What do they depend on? How long can each one be down before the damage becomes serious? That last question gives you two numbers that drive the whole plan:

- **Recovery time objective (RTO):** how quickly a process or service needs to be back.
- **Recovery point objective (RPO):** how much recent work you can afford to lose.

A payroll run might tolerate a day of downtime. A customer-facing service might tolerate minutes. The BIA makes those trade-offs explicit instead of leaving them to whoever shouts loudest during the incident. Every recovery strategy, budget decision, and test scenario should trace back to it.

## Define recovery strategies that match the priorities

Once the BIA tells you what matters and how fast it needs to come back, you design strategies to hit those targets. A strategy isn't a wish. It's a concrete answer to "when X fails, we do Y."

Strategies vary by process. Some need a standby capability ready to take over. Some need a manual workaround the team can run for a day or two. Some need an alternate supplier already contracted so you're not negotiating during a crisis. The right choice depends on the RTO and RPO the BIA set, balanced against what the strategy costs to maintain.

Write each strategy down in enough detail that someone who didn't design it could follow it. The person who knows the workaround is often the person who's on holiday when you need it.

## Roles and a communication plan

An incident is a bad time to figure out who's in charge. Continuity plans assign roles in advance: who has authority to declare an incident, who leads the response, who owns each recovery task, and who steps in if the first person is unreachable.

Communication deserves its own plan. During a disruption you may need to reach staff, customers, suppliers, and in regulated sectors, supervisory authorities, often on short deadlines. Decide in advance what you'll say, who approves it, and how you'll send it if your normal channels are the thing that's down. A pre-written holding statement beats a blank page at 2 a.m.

Keep contact details current. Out-of-date phone numbers are the single most common reason a well-written plan fails in practice.

## Testing is the plan

Here's the part most teams skip, and it's the part that matters most. An untested plan is a hypothesis. Testing turns it into a capability.

There are two levels worth running:

A **tabletop exercise** gathers the response team around a scenario and walks through it out loud. Nobody touches a live system. You describe a disruption, and the team explains what they'd do, step by step. Tabletops are cheap, low-risk, and brilliant at exposing gaps: the missing owner, the dependency nobody mapped, the assumption that turns out to be wrong.

A **full exercise**, sometimes called a functional or live test, actually invokes the recovery strategy. You switch to the standby, run the manual workaround for real, or simulate the outage end to end. It's more disruptive and more revealing, because it shows whether your RTO is realistic or aspirational.

Both kinds produce the same valuable output: lessons learned. Every gap you find in a test is a gap you didn't find during a real incident. Feed those findings back into the plan, fix the weak points, and test again. Continuity is a loop, not a milestone.

<Admonition type="tip" title="Test before you need to, not after">
Schedule at least one tabletop a year and a full exercise for your most critical processes. Book the next test the day you finish the last one, so it never quietly falls off the calendar.
</Admonition>

## What auditors and DORA expect

Continuity isn't just good practice, it's a requirement across the frameworks you're likely to be measured against.

- **ISO 27001** expects information security continuity and ICT readiness (controls A.5.29 and A.5.30), and its companion standard **ISO 22301** is dedicated to business continuity management.
- **SOC 2** covers recovery and testing under the availability criterion, and auditors will ask for evidence that you actually ran the tests.
- **DORA**, the EU's Digital Operational Resilience Act, goes furthest. For financial entities it mandates response and recovery plans, tested regularly, plus a formal digital operational resilience testing program with scenario-based exercises. DORA doesn't accept a plan on paper. It wants proof you've tested it and acted on the results.

The common thread is evidence. None of these frameworks take your word for it. They want to see the plan, the test records, the findings, and the follow-up. If you can't produce those on demand, you don't have continuity you can prove, whatever the document says.

## How OptiTech keeps continuity connected

This is where a scattered approach falls apart. The plan lives in one place, the asset list in another, the test notes in someone's inbox, and by audit time nothing lines up.

OptiTech keeps them together. You link each continuity plan to the critical assets it protects, so the plan reflects what you actually run, and a change to your asset inventory flags the plans that need review. When you run a tabletop or full exercise, you record it as evidence against the relevant controls, with the date, the scenario, the participants, and the lessons learned attached. The controls that require continuity testing stay satisfied because the proof is right there, not reconstructed the week before an audit.

And because it's all one program, your trust center can show customers that you take resilience seriously without exposing the sensitive detail. A security reviewer sees that your continuity plans are tested and current. The evidence behind that claim stays in the OptiTech Console where it belongs.

## Getting started

You don't need a perfect plan on day one. You need a real one you'll keep exercising.

1. **Run a business impact analysis** on your most important processes and set an RTO and RPO for each.
2. **Write recovery strategies** that meet those targets, in enough detail that someone else could follow them.
3. **Assign roles and a communication plan,** with named owners and current contact details.
4. **Schedule your first tabletop,** then a full exercise for your most critical process.
5. **Record every test as evidence** and link your plans to the assets they protect.

A continuity plan earns its keep the day something goes wrong. The work you do now, and the tests you run before you need them, are what turn a document into a plan the business can rely on.

Ready to connect your continuity plans, critical assets, and test records in one place? [Book a demo](https://optitech-sverige.se/contact-sales) and see how OptiTech turns resilience into evidence you can prove.
