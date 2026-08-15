---
title: 'Information security risk management: a practical guide'
description: How to run the risk process end to end and keep a living risk register with treatment plans tied to controls and evidence.
excerpt: >-
  Risk management isn't a spreadsheet you fill in once a year. It's the process
  that decides where your security budget goes: what could go wrong, how bad it
  would be, and what you're going to do about it. This guide walks through the
  process end to end and shows how OptiTech keeps a living risk register instead
  of letting it die in a spreadsheet.
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
  title: 'Information security risk management: a practical guide - OptiTech'
  description: >-
    The information security risk process end to end, aligned with ISO 27005 and
    ISO 27001 clause 6, and how to keep a living register tied to controls and
    evidence.
  keywords: []
  noindex: false
  ogTitle: 'Information security risk management: a practical guide - OptiTech'
  ogDescription: >-
    The information security risk process end to end, aligned with ISO 27005 and
    ISO 27001 clause 6, and how to keep a living register tied to controls and
    evidence.
  image: null
---

Ask ten companies to show you their risk management and nine will open a spreadsheet. It has a few dozen rows, a color-coded likelihood column, and a last-edited date from the previous audit. It looks like risk management. It's really a snapshot that stopped being true the day after someone saved it.

Information security risk management isn't a document you produce for an auditor. It's the process that decides where you spend your limited security budget: what could go wrong, how bad it would be, and what you're going to do about it. ISO 27005 lays out the process and ISO 27001 clause 6 makes it a requirement. This guide walks through that process end to end and shows how OptiTech keeps it alive instead of letting it rot in a spreadsheet.

## Start with context and criteria

Before you list a single risk, you decide what you're assessing and how you'll judge it. This is the part teams skip, and it's why their risk registers turn into apples-and-oranges lists nobody trusts.

Establishing context means naming the scope: which parts of the business, which systems, and which information the assessment covers. It also means setting your criteria up front. You define the scale you'll use for likelihood and impact, so a "high" from one person means the same thing as a "high" from another. And you set your risk acceptance criteria, the line above which a risk needs treatment and below which you're willing to live with it.

Write these criteria down once and reuse them for every assessment. When the scale lives in the OptiTech Console instead of in each analyst's head, your register becomes comparable across teams and across years. That consistency is what lets you say "these are our top five risks" and actually mean it.

## Identify the risks: assets and scenarios

There are two honest ways to find risks, and mature programs use both.

### Asset-based identification

Start from what you're protecting. List your information assets: customer data, source code, employee records, the systems that hold them, and the people and vendors who touch them. For each asset, ask what threats apply and what weakness a threat could exploit. A laptop holding customer data faces theft, malware, and a careless click. The asset makes the risk concrete.

### Scenario-based identification

Asset lists miss the risks that cross systems. So you also work from scenarios: a phishing campaign that harvests admin credentials, a key vendor that goes down for a week, a departing employee who still has access. Scenarios catch the chains of events that a flat asset list flattens out. Run both and you cover far more ground than either does alone.

## Analyze likelihood and impact

For every risk you've identified, you estimate two things: how likely it is to happen, and how much it would hurt if it did. Combine them using the criteria you set earlier, and you get a risk level you can rank.

Keep the analysis honest rather than precise. You're not calculating a probability to three decimals; you're separating the risks that could sink you from the ones that would sting. Impact isn't only money either. A breach of customer data carries regulatory, reputational, and operational cost, and a good analysis names all three. The point is a ranked list, so the next decision, what to treat first, becomes obvious.

## Evaluate against your risk appetite

A risk level on its own doesn't tell you what to do. You compare it against your risk appetite: how much risk the business is willing to accept in pursuit of its goals. A risk that sits above your appetite needs treatment. One that sits below it can be accepted, on purpose and on the record.

Risk appetite is a leadership decision, not an analyst's guess. When it's written down and applied consistently, evaluation stops being an argument. The register sorts itself into "treat this" and "accept this," and everyone can see why each risk landed where it did.

## Choose a treatment

Once a risk clears the bar for action, you pick one of four responses:

- **Mitigate.** Apply controls that reduce the likelihood, the impact, or both. This is the most common path and the one that ties risk to your framework.
- **Transfer.** Shift some of the risk to a third party, through insurance or a contractual clause with a vendor.
- **Avoid.** Stop doing the activity that creates the risk. Sometimes the feature or the vendor isn't worth it.
- **Accept.** Decide the risk is tolerable, and record who accepted it and why.

Each choice comes with a treatment plan: what you'll do, who owns it, and by when. In ISO 27001 terms, mitigation is where your statement of applicability comes from, because the controls you select to treat risks are exactly the ones you declare applicable.

## Assign an owner and track residual risk

A risk without an owner is a risk nobody manages. Every risk in your register needs a named person accountable for its treatment, not a team or a department. The owner decides whether the plan is working and when the risk can be closed or re-rated.

Treatment rarely drives a risk to zero. What's left after your controls are in place is the residual risk, and that's the number leadership actually needs. You track it alongside the original level, so you can show that a high risk is now moderate because specific controls are operating. When someone asks "is this handled," residual risk is the answer, and it should be backed by evidence that the controls are real.

## Why the spreadsheet dies, and what to do instead

A spreadsheet register fails for a predictable reason: nothing connects it to the rest of your program. The risks sit in one file, the controls in another, and the evidence in a shared drive nobody maintains. Owners change jobs, the scale drifts, and by the next audit half the rows are fiction. The register isn't wrong because people are careless. It's wrong because a spreadsheet can't stay in sync with a moving business.

OptiTech keeps the register living by wiring it into everything around it. Each risk links to the controls that treat it, and each control links to the evidence that proves it's operating. When a control's evidence goes stale, the residual risk on every risk it treats is suspect, and you see it. Risk owners get their treatment plans as tracked work, not as a cell they forgot to update. Because the risks, controls, and evidence share one program, "show me our top risks and prove they're handled" becomes a view in the OptiTech Console instead of a week of archaeology.

<Admonition type="tip" title="Rate residual risk, not just inherent risk">
Leadership doesn't need to know how bad a risk would be with no controls at all. They need to know how bad it is now, with your controls running. Always track the residual level next to the original, and link it to live evidence so the number means something.
</Admonition>

## Getting started

You don't need a perfect methodology to begin. A realistic first pass looks like this:

1. **Set your criteria.** Define your likelihood and impact scales and your risk acceptance line before you list anything.
2. **Identify a first round of risks.** Run one asset-based pass and one scenario-based pass, then rank them.
3. **Assign owners and treatments.** Give every risk above your appetite a named owner and a dated plan.
4. **Link risks to controls and evidence** so residual risk stays honest and your framework and register move together.

Risk management rewards the companies that treat it as a habit rather than an annual exercise. Build the criteria once, keep the register connected, and the same process that satisfies your auditor tells your leadership exactly where to spend next.

Ready to turn your risk register into a living program? [Book a demo](https://optitech-sverige.se/contact-sales) and see how OptiTech ties your risks, controls, and evidence together.
