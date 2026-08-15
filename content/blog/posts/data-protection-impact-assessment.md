---
title: 'Data protection impact assessments: when you need one and how to run it'
description: When a DPIA is legally required under GDPR and how to run one that holds up as evidence.
excerpt: >-
  A data protection impact assessment isn't paperwork you file and forget. It's
  a structured way to prove you thought through the risks before you started a
  high-risk activity. This guide covers when a DPIA is required, how to run one
  step by step, and how OptiTech keeps it attached to the processing it protects.
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
  title: 'Data protection impact assessments: when you need one and how to run it - OptiTech'
  description: >-
    When a DPIA is legally required under GDPR and how to run one that holds up
    as living evidence, with OptiTech.
  keywords: []
  noindex: false
  ogTitle: 'Data protection impact assessments: when you need one and how to run it - OptiTech'
  ogDescription: >-
    When a DPIA is legally required under GDPR and how to run one that holds up
    as living evidence, with OptiTech.
  image: null
---

Most teams meet the DPIA the same way: a lawyer mentions it late in a project, someone fills in a template the night before launch, and the document drops into a folder nobody opens again. It ticks a box, but it doesn't protect anyone, and it won't hold up if a regulator asks what you actually considered.

A data protection impact assessment is a thinking tool, not a form. It forces you to describe what you're about to do with personal data, weigh whether you really need to, and decide how you'll keep people safe before you start. This guide covers what a DPIA is, when the law requires one, how to run a good one step by step, and how OptiTech keeps the assessment tied to the processing it's meant to protect.

## What a DPIA actually is

A data protection impact assessment is a documented analysis of how a planned activity affects the privacy and rights of the people whose data you process. GDPR calls for one whenever processing is "likely to result in a high risk" to individuals. The point is to catch problems while you can still change the design, not after you've shipped and someone gets hurt.

Done well, a DPIA answers four questions in writing: what are you doing with personal data, why is it justified, what could go wrong for the people involved, and how will you reduce that risk. It's a living record. If the processing changes, the assessment changes with it.

## When a DPIA is legally required

You don't need a DPIA for every project. You need one when the processing is likely to be high risk. GDPR and the European guidance list the triggers, and several of them show up constantly in modern software:

- **Large-scale profiling or automated decisions.** Scoring, ranking, or predicting behavior at scale, especially when decisions affect someone's access to a service or their finances.
- **Systematic monitoring.** Tracking people's activity, location, or communications, including monitoring of public spaces and workplace surveillance.
- **Special-category data.** Health, biometric, genetic, religious, political, or similar sensitive data, particularly at volume.
- **Combining or matching datasets.** Merging data from different sources in ways people wouldn't expect.
- **Vulnerable data subjects.** Processing children's data or data about employees, where the power balance is uneven.
- **New technology.** Using techniques or tools whose privacy effects aren't yet well understood.

A useful rule of thumb: if the processing hits two or more of these, treat a DPIA as mandatory. If it hits one, document why you did or didn't run one. Supervisory authorities also publish their own lists of processing that always requires a DPIA, so check the guidance from your national authority, such as IMY in Sweden.

## How to run a DPIA, step by step

A good DPIA follows the same shape every time. Working through it in order keeps the analysis honest.

### 1. Describe the processing

Write down what you're doing in plain language. What personal data do you collect, from whom, and why? How does it flow through your systems, who has access, how long do you keep it, and who do you share it with? Name the purpose clearly. If you can't describe the processing simply, you don't understand it well enough to assess it.

### 2. Assess necessity and proportionality

Ask whether you actually need to process this data to achieve your purpose, and whether there's a less intrusive way to get the same result. This is where data minimization earns its keep. Confirm your lawful basis, check that people are informed, and make sure retention matches the purpose. A DPIA that skips this step tends to justify whatever the team already decided to build.

### 3. Identify and assess the risks to individuals

Focus on harm to people, not risk to the company. Think about what could go wrong: unauthorized access, loss of control over their data, discrimination from a biased model, or distress from surveillance. For each risk, judge how likely it is and how severe the impact would be. Rank them so the serious ones get real attention.

### 4. Define mitigations

For each meaningful risk, decide what you'll do to reduce it: tighter access controls, pseudonymization, shorter retention, clearer notices, a human in the loop for automated decisions, or dropping a data field you don't truly need. Record the residual risk that remains after mitigation. That residual figure is what decides your next step.

### 5. Consult your DPO

If you have a data protection officer, their sign-off belongs in the record. The DPO reviews the analysis, challenges weak assumptions, and advises on whether the residual risk is acceptable. Even if you're not required to appoint a DPO, a second set of eyes from someone independent of the project improves the outcome.

### 6. Know when to consult the supervisory authority

If, after mitigation, the residual risk is still high, GDPR requires prior consultation with your supervisory authority before you start processing. This is the exception, not the rule, but it matters. Reaching this point tells you the design still isn't safe enough, so most teams go back and add mitigations rather than file for consultation. Either way, the decision and its reasoning need to be written down.

## Common mistakes

A few patterns show up again and again:

- **Running it too late.** A DPIA you complete after launch can't change the design. Start it when the project is still a plan.
- **Treating it as a template to fill.** Copying last quarter's assessment and swapping the project name produces a document, not an analysis.
- **Confusing company risk with individual risk.** The people whose data you process are the subject of the assessment, not your legal exposure.
- **Letting it go stale.** Processing evolves. An assessment that describes last year's system is evidence of nothing.
- **No clear owner.** If nobody owns the DPIA, no one updates it, and the sign-off never happens.

<Admonition type="tip" title="Assess the design, not the demo">
Run your DPIA against how the processing will really work in production, including the data you'll collect later and the vendors you'll add. Assessing a stripped-down early version hides the risks that actually appear at scale.
</Admonition>

## How OptiTech keeps a DPIA alive

The reason most assessments rot is that they live apart from the thing they describe. OptiTech ties the two together.

When you register a processing activity in the OptiTech Console, the platform screens it against the high-risk triggers and flags when a DPIA is required, so the question never gets skipped. You run the assessment through a structured workflow that walks the steps above, from describing the processing to recording residual risk and the DPO's sign-off.

The finished assessment stays attached to the processing activity it covers, as living evidence rather than a buried file. When the processing changes, OptiTech prompts a review, so the assessment keeps pace instead of drifting out of date. And because it's part of your wider program, the assessment connects to the controls, records, and evidence auditors and buyers ask for, and can be surfaced through your trust center when it's time to prove your privacy posture.

## Getting started

You can make DPIAs routine with a short first pass:

1. **List your high-risk processing.** Start with profiling, monitoring, and any special-category data.
2. **Run one real DPIA end to end.** Pick a live activity and work the six steps to build the muscle.
3. **Set a review trigger.** Decide what change forces a reassessment, and assign an owner.
4. **Attach it to the processing activity** in OptiTech so the assessment stays current and provable.

A DPIA isn't a hurdle before launch. It's the record that proves you took people's rights seriously before you touched their data. Build the habit once, keep the assessments attached to the work they describe, and both your regulator and your customers get the same clear answer.

Ready to make DPIAs part of a living program? [Book a demo](https://optitech-sverige.se/contact-sales) and see how OptiTech flags high-risk processing and keeps every assessment attached to the activity it protects.
