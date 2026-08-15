---
title: 'Mapping multiple frameworks without duplicating work'
description: Why ISO 27001, SOC 2, NIS2, GDPR, and DORA overlap, and how one control set covers them all.
excerpt: >-
  Your second compliance framework feels like starting over, but it isn't. The
  major frameworks overlap heavily, and a common control set turns that overlap
  into reuse. This post explains crosswalks, the parallel spreadsheet trap, and
  how OptiTech maps one control library to many frameworks so adding a framework
  is mostly reuse.
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
  title: 'Mapping multiple frameworks without duplicating work - OptiTech'
  description: >-
    Why ISO 27001, SOC 2, NIS2, GDPR, and DORA overlap, and how a common control
    set and crosswalks let one control and one piece of evidence satisfy many
    frameworks at once.
  keywords: []
  noindex: false
  ogTitle: 'Mapping multiple frameworks without duplicating work - OptiTech'
  ogDescription: >-
    Why ISO 27001, SOC 2, NIS2, GDPR, and DORA overlap, and how a common control
    set and crosswalks let one control and one piece of evidence satisfy many
    frameworks at once.
  image: null
---

Adding your second compliance framework feels like starting over. You've just finished the grind of SOC 2, the evidence is finally current, and then a customer in Germany asks about ISO 27001, or a new regulation like NIS2 or DORA lands on your desk. The instinct is to open a fresh spreadsheet, list every requirement, and rebuild the whole program from scratch.

You don't have to. The major frameworks overlap far more than they differ, and the work you did for the first one carries most of the way through the second. This post explains why the overlap exists, how a common control set turns it into reuse, and how OptiTech maps one control library to many frameworks so your third framework is mostly a matter of pointing at evidence you already have.

## Where the frameworks actually overlap

Read ISO 27001, SOC 2, NIS2, GDPR, and DORA side by side and the same themes show up again and again. They're written by different bodies for different reasons, but they're all trying to answer the same question: can this organization protect the information it holds and keep operating when something goes wrong?

A few control areas appear in every one of them:

- **Access control.** Who can reach what, how you grant and remove access, and how you review it. ISO 27001 calls it one thing, SOC 2 another, but the underlying control is identical: least privilege, enforced and reviewed.
- **Risk management.** Every framework wants you to identify risks, rate them, and treat them. The methodology varies, the discipline doesn't.
- **Incident response.** Detect, respond, report, learn. GDPR puts a 72-hour clock on breach notification, NIS2 and DORA add their own reporting duties, but the incident process behind them is one process.
- **Vendor and third-party management.** Know who you rely on, assess their risk, and hold them to contracts. DORA is strict about ICT third parties, ISO 27001 has a whole supplier domain, but you're managing the same vendor list.

Once you see this, the duplication in most compliance programs looks absurd. Teams write an access control policy for SOC 2, then write a nearly identical one for ISO 27001, then answer a GDPR question about the same access controls with a third document. Same control, three descriptions, three places to keep current.

## The common control set

The fix is to stop organizing your program by framework and start organizing it by control. You build one set of controls that describes how your company actually works, then map each control to every framework requirement it satisfies. This is the common control set, and it's the single idea that makes multi-framework compliance sustainable.

### One control, many requirements

Take a single control: "User access is reviewed quarterly and removed within 24 hours of a role change." That one control speaks to ISO 27001's access management requirements, SOC 2's logical access criteria, GDPR's expectation that access to personal data is limited, and NIS2's access control duties. You write it once. You assign one owner. You map it to four frameworks.

When an auditor for any of those frameworks asks how you handle access reviews, you point at the same control. When the control changes, you update it in one place and every framework mapping stays current automatically.

### One piece of evidence, many checks

Evidence works the same way. The export from your quarterly access review isn't SOC 2 evidence or ISO 27001 evidence, it's evidence that a control operated. Attach it to the control, and it satisfies every framework requirement that control is mapped to.

This is where the duplicated work really disappears. Instead of collecting the same screenshot three times for three audits, you collect it once and it counts everywhere. Multiply that across dozens of controls and several evidence cycles a year, and the saved effort is enormous.

## What a crosswalk is and why it matters

The map between your controls and the framework requirements is called a crosswalk. It's a simple idea with a big payoff: for each requirement in a framework, the crosswalk names the control or controls that satisfy it, and for each control, it names every requirement it covers.

A good crosswalk gives you two views for free. Looking at it by framework, you see your coverage: which requirements are satisfied, which have gaps, and what evidence backs each one. Looking at it by control, you see leverage: how many requirements ride on a single control, so you know which controls are worth investing in first.

The crosswalk is also how you add a framework cheaply. When DORA arrives, you don't start from zero. You lay its requirements next to your existing controls and most of them already map. What's left is a short list of genuine gaps, not a whole new program.

## The parallel spreadsheet trap

Most teams end up here without deciding to. Each framework gets its own spreadsheet because each one arrived as its own project, run by whoever owned it at the time. The SOC 2 tracker lives with one person, the ISO 27001 tracker with another, and the GDPR records somewhere else entirely.

The problem isn't the spreadsheets, it's the drift. When you tighten an access control, you have to remember to update it in three places. When evidence is refreshed, someone has to copy it into each tracker. Miss one, and your frameworks quietly disagree with each other. An auditor finds the gap before you do, and now you're explaining why your ISO 27001 control says one thing and your SOC 2 control says another.

Parallel spreadsheets also hide your leverage. Because the frameworks are separate, you can't see that one control fix would close gaps in three of them at once. You end up prioritizing by framework deadline instead of by impact.

<Admonition type="tip" title="Map to controls, not documents">
When you add a framework, resist the urge to import its requirements as a fresh checklist. Map each requirement to a control you already have, and only create a new control when there's a real gap. The goal is reuse first, new work second.
</Admonition>

## The payoff shows up on framework two and three

The first framework is always the most work, because you're building the control set for the first time. That's unavoidable. The return comes later.

By your second framework, a large share of the requirements already map to controls you've written and evidence you're already collecting. Your job shrinks to finding the delta: the handful of requirements the new framework adds that nothing yet covers. By the third framework, the overlap is so high that adding it feels less like a project and more like an extension of the program you already run.

This changes how you sell, too. When a prospect asks whether you meet a framework you haven't formally certified against, you can often show that the underlying controls are already in place and mapped. You're not starting a conversation, you're finishing one.

## How OptiTech handles it

OptiTech is built around one control library, not one library per framework. You define your controls once in the OptiTech Console, attach evidence to them, and map each control to the framework requirements it satisfies across SOC 2 Type II, ISO 27001, GDPR, NIS2, and DORA.

From there, the console gives you the framework view and the control view from the same data. You can see your SOC 2 coverage today and, with the same controls, see how close you already are to ISO 27001 or DORA. Adding a framework becomes a mapping exercise over controls you already own, with a clear list of the few real gaps to close. Your trust center then publishes the result, so buyers see which frameworks you cover without a single duplicated spreadsheet behind the scenes.

## Getting started

You don't need every framework mapped on day one. A practical first pass looks like this:

1. **Write your controls around how you actually operate.** Start with the high-leverage areas: access control, risk management, incident response, and vendor management.
2. **Attach evidence to each control**, not to a framework, so it counts everywhere the control is mapped.
3. **Crosswalk your first framework**, then lay a second one next to the same controls and mark only the genuine gaps.
4. **Publish coverage to your trust center** so the mapping you built starts answering security reviews on its own.

Frameworks reward the companies that treat compliance as one connected program instead of a stack of parallel projects. Build the control set once, map it well, and every framework you add is mostly reuse.

Ready to map many frameworks to one control library? [Book a demo](https://optitech-sverige.se/contact-sales) and see how OptiTech turns your second and third framework into reuse instead of rework.
