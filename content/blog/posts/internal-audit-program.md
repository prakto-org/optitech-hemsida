---
title: 'Running an internal audit program for ISO 27001'
description: How internal audits catch problems before your external auditor does, and how to run one.
excerpt: >-
  ISO 27001 requires an internal audit before you can get certified, and it's
  the best chance you'll ever have to find your own gaps first. This guide covers
  how to plan an audit schedule, keep it independent, sample controls, record
  findings, close corrective actions, and run the management review, all in
  OptiTech.
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
  title: 'Running an internal audit program for ISO 27001 - OptiTech'
  description: >-
    Why ISO 27001 requires an internal audit before certification, and how to
    plan, staff, and close one with findings tracked to closure in OptiTech.
  keywords: []
  noindex: false
  ogTitle: 'Running an internal audit program for ISO 27001 - OptiTech'
  ogDescription: >-
    Why ISO 27001 requires an internal audit before certification, and how to
    plan, staff, and close one with findings tracked to closure in OptiTech.
  image: null
---

Most teams discover their internal audit requirement about a month before their ISO 27001 certification audit, right when they can least afford the surprise. They've built controls, gathered evidence, and written policies, and then the certification body asks to see the results of an internal audit that nobody ran.

An internal audit isn't busywork the standard invented to slow you down. It's the rehearsal that keeps the real performance from going wrong. Done well, it finds the gaps in your program while you still have time to fix them, instead of leaving them for an external auditor to write up. This guide walks through how to run an internal audit program and how OptiTech plans your audits and tracks every finding to closure.

## Why ISO 27001 requires an internal audit

ISO 27001 doesn't treat the internal audit as optional. Clause 9.2 requires you to audit your information security management system at planned intervals, and you can't get certified without evidence that you did. The certification body will ask for your audit plan, your findings, and proof that you acted on them.

The reason is simple. A management system is a set of promises about how you'll run security, and promises drift. Controls that worked in January quietly break by June when a tool changes or a person leaves. The internal audit is the mechanism that checks whether your program still does what your documents say it does, before anyone outside the company looks.

There's a practical benefit too. The external auditor's job is to find where you fall short. If your internal audit already found those gaps and you already fixed them, the external audit becomes a confirmation rather than a discovery. You control the story because you did the hard looking first.

## Plan an audit schedule you can actually follow

The standard asks for audits at planned intervals, not one frantic sweep before certification. That phrasing matters. A single annual audit that tries to cover everything is shallow by necessity, and it clusters all the fixing into the worst possible month.

A better approach spreads the work across the year. You group your controls into logical themes such as access management, physical security, supplier risk, and incident response, then audit a few themes each quarter. By the time your certification audit arrives, you've covered the whole scope with real depth, and the findings are already closed.

OptiTech holds your audit schedule as part of your program, so the plan lives next to the controls it covers. Each audit knows which controls are in scope, who owns them, and when the last review happened. You're not rebuilding the plan from a spreadsheet each cycle, you're following one that updates itself as your program changes.

## Independence: who audits what

Clause 9.2 also says auditors can't audit their own work. The person who configured your access reviews shouldn't be the one who signs off that access reviews are working. It's not about distrust, it's about blind spots. You can't see the gap in a process you designed, because you're too close to it.

For a small company, strict independence feels hard. You don't have a dedicated audit team. The workable answer is to cross-assign: the person who owns access controls audits incident response, and the incident owner audits access. Nobody grades their own homework, and everyone learns a bit of the neighboring area.

OptiTech lets you assign an auditor to each area who isn't the control owner, and it records that separation. When the certification body asks how you kept the audit independent, the answer is already documented instead of reconstructed after the fact.

<Admonition type="tip" title="Rotate your auditors">
If the same person audits the same area every cycle, they start to see what they expect to see. Rotating auditors across areas each year keeps the review fresh and spreads security knowledge through the team.
</Admonition>

## Sample controls without auditing everything

You can't test every instance of every control, and you don't need to. Internal audit works by sampling: you pick a representative set of cases and check whether the control held for them. If you review access for a sample of ten people who joined or left, and every one was handled correctly, you have reasonable confidence the control works.

The art is choosing samples that would actually reveal a problem. A sample of only the easy cases proves nothing. You want the edge cases, like the contractor who left mid-project or the emergency access granted at 2am, because that's where controls tend to fail.

OptiTech connects each control to the evidence behind it, so pulling a sample is quick. You see the records tied to a control, choose your sample, and note what you checked, all in one place instead of chasing screenshots across tools.

## Record findings and nonconformities

When an audit turns up a problem, how you record it matters as much as finding it. A finding written as "access reviews are messy" helps no one. A useful finding states what you expected, what you found, and which control it relates to: "control A.5.18 requires access review on departure. For 2 of 10 sampled leavers, access was removed more than 30 days late."

Not every finding is a nonconformity. A nonconformity means a requirement wasn't met, and it needs a formal response. Smaller issues might be observations or opportunities for improvement, worth noting but not requiring corrective action. Sorting findings into the right category keeps your program honest without turning every minor gap into a crisis.

OptiTech records each finding against the control it relates to, with the evidence attached and a severity you set. Nothing lives in a separate audit document that drifts out of sync with your program, because the finding is part of the program.

## Corrective actions that actually close

A finding you never fix is worse than a finding you never found, because now you have documented proof you knew and did nothing. Every nonconformity needs a corrective action: a fix, an owner, and a due date. And the standard wants more than a patch. It asks you to look at the root cause, so the same gap doesn't reappear next quarter under a different name.

The discipline is closure. A corrective action isn't done when someone says they fixed it, it's done when you verify the fix held. That often means a follow-up check a few weeks later to confirm the control now works on the cases that failed before.

OptiTech tracks each corrective action from open to verified, with the owner and due date visible. You can see at a glance which findings are still open, which are overdue, and which are closed with evidence. When the external auditor asks what you did about a gap, you show them the whole trail.

## The management review

Internal audit results don't stop at the audit team. Clause 9.3 requires a management review, where leadership looks at how the security program is performing and decides what to change. Audit findings, corrective action status, incidents, and shifting risks all feed into that conversation.

This is where compliance connects to the business. Leadership sees whether the program is improving or slipping, where resources are needed, and whether the risk picture has changed. A management review that just rubber-stamps a report is a wasted meeting. One that reads the audit trail and makes real decisions is how the program actually gets better.

OptiTech gives leadership a current view of findings, corrective actions, and control health going into the review, so the meeting works from live data instead of a slide deck someone built the night before.

## Getting started

You don't need a big audit function to run a real internal audit program. A realistic first pass looks like this:

1. **Group your controls into themes** and set a schedule that covers them across the year.
2. **Assign independent auditors** so nobody reviews their own work.
3. **Run your first audit with honest sampling**, aiming at the edge cases where controls fail.
4. **Record findings against controls** and open corrective actions with owners and dates.
5. **Bring the results to a management review** and make real decisions from them.

The companies that pass certification calmly are the ones that already found their own gaps and closed them. Internal audit is how you become that company, and it's how your external audit turns into a confirmation instead of a surprise.

Ready to run internal audits that catch problems early? [Book a demo](https://optitech-sverige.se/contact-sales) and see how OptiTech plans your audits and tracks every finding to closure.
