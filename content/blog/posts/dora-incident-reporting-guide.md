---
title: 'DORA incident reporting: how to classify and report a major ICT incident'
description: How to classify a major ICT incident under DORA and report it on time, without scrambling.
excerpt: >-
  Under DORA the clock starts before anyone has agreed what happened. You have
  hours to send the first notification, and the report follows a fixed structure
  you can't leave blank. This guide covers how to classify a major ICT-related
  incident, the reporting timeline, and how OptiTech keeps every field and
  deadline on the rails.
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
  title: 'DORA incident reporting: how to classify and report a major ICT incident - OptiTech'
  description: >-
    How to classify a major ICT-related incident under DORA, follow the
    three-stage reporting timeline, and keep every required field and deadline
    on track with OptiTech.
  keywords: []
  noindex: false
  ogTitle: 'DORA incident reporting: how to classify and report a major ICT incident - OptiTech'
  ogDescription: >-
    How to classify a major ICT-related incident under DORA, follow the
    three-stage reporting timeline, and keep every required field and deadline
    on track with OptiTech.
  image: null
---

When a major ICT incident hits a financial entity, the clock starts before anyone has agreed what actually happened. Under the EU Digital Operational Resilience Act (DORA), you have hours, not days, to send your first notification, and the report has to follow a fixed structure with fields you can't leave blank. Teams that treat incident reporting as something they'll write up afterward find out too late that the deadline already passed.

DORA reframes incident reporting as an operational process you run under pressure. You need to classify the incident against defined criteria, notify the right authority on a tight timeline, and follow through with intermediate and final reports as the picture sharpens. This guide covers how DORA wants you to classify and report a major ICT-related incident, how it differs from NIS2 and GDPR, and how OptiTech keeps the whole thing on the rails.

## What DORA asks of you

DORA is the EU Digital Operational Resilience Act. It applies to financial entities (banks, insurers, investment firms, payment institutions, crypto-asset service providers, and more) and to the critical ICT third-party providers they depend on. The regulation pulls operational resilience into one framework: ICT risk management, incident reporting, resilience testing, third-party risk, and information sharing.

Incident reporting is the part with the sharpest edges. When an ICT-related incident crosses the threshold from minor to major, you owe your competent authority a structured report on a defined schedule. The threshold isn't a judgment call you make in the moment. It's a set of criteria, and you have to assess your incident against them.

## What counts as a major ICT-related incident

An ICT-related incident is any event that harms the security of your network and information systems and has an adverse impact on the services you provide. Most incidents are minor and stay internal. A major incident is one that clears the reporting threshold, and that's decided by weighing a set of classification criteria together.

The criteria you assess:

- **Clients and financial counterparts affected.** How many clients, counterparts, or transactions the incident touched, and whether any of them are critical. A small number of critical clients can matter as much as a large number of ordinary ones.
- **Data losses.** Whether the incident caused loss of availability, authenticity, integrity, or confidentiality of data. Any impact on data integrity or confidentiality weighs heavily.
- **Duration and service downtime.** How long the incident lasted and how long your service was unavailable. The clock runs from detection, not from when you finished responding.
- **Geographic spread.** Whether the impact crossed borders into other member states, which raises the stakes and can pull in more authorities.
- **Economic impact.** The direct and indirect costs and losses, measured in absolute terms and against your size.
- **Reputational impact and criticality of services.** Whether critical or important functions were affected and how visible the disruption was.

No single criterion decides it alone. You weigh them together against the thresholds set out in the regulation and its technical standards. That's why a repeatable method matters more than any one person's judgment: the same incident should classify the same way no matter who's on call.

## The reporting timeline

Once an incident is major, DORA runs a three-stage reporting cadence. Each stage has its own deadline and its own purpose, and you don't get to skip ahead.

### Initial notification

The first notification goes out shortly after you classify the incident as major, within hours of that decision. It's deliberately short. It tells your authority that a major incident has happened, what you know so far, and that a fuller picture is coming. The point is speed, so nobody's waiting on a complete root-cause analysis before sending it.

### Intermediate report

The intermediate report follows once you've moved from detection into active handling and you understand the impact better. It updates the status, refines the classification, and describes what you're doing to contain and recover. If the situation changes materially, you send updated intermediate reports rather than going quiet.

### Final report

The final report closes the loop once the incident is resolved and the root cause is understood. It sets out what happened, why, the actual impact against the classification criteria, and the remediation and lessons learned. This is the report that shows whether your resilience program actually works.

Missing any of these deadlines is itself a compliance failure, separate from the incident. That's what makes the timeline the hardest part to run manually.

## Who you report to

You report to your competent authority, which depends on your entity type and your member state. For a Swedish financial entity, that's Finansinspektionen. The authorities can then route information onward to the European Supervisory Authorities and, where relevant, to other bodies. Your job is to get the right report to the right authority in the right window, and the onward flow is theirs to manage.

## How DORA differs from NIS2 and GDPR

Financial entities often sit under more than one incident regime at once, and it's easy to assume one report covers everything. It doesn't.

- **GDPR** is about personal data breaches. You report to the data protection authority within 72 hours when personal data is compromised. The trigger is harm to individuals' data, not operational disruption.
- **NIS2** is about the security of network and information systems across essential and important entities in many sectors. It has its own early-warning and reporting steps, often on a 24-hour and 72-hour rhythm, reported to the national CSIRT or competent authority.
- **DORA** is specific to the financial sector and to ICT-related incidents. It's more prescriptive about classification criteria and the three-stage report structure, and for financial entities it's the specialized rule for operational resilience.

One incident can trigger all three at once. A ransomware attack that takes your service offline and exposes personal data could owe a DORA report to Finansinspektionen, a GDPR notification to the data protection authority, and a NIS2 report to the national CSIRT, each on its own clock. Treating them as one report is how deadlines get missed.

<Admonition type="note" title="One incident, several clocks">
Map which regimes apply to you before an incident, not during one. When something happens, you want to open every required report in parallel from the first minute, each with its own deadline running, instead of discovering a second obligation on day three.
</Admonition>

## How OptiTech structures a DORA incident report

The reason incident reporting goes wrong under pressure is that it's treated as free-text writing. Someone opens a blank document in the middle of the night and tries to remember what the regulation asks for. OptiTech replaces the blank page with structure.

When you open a DORA incident in the OptiTech Console, you get a report built around the classification criteria and the required fields for each reporting stage. You record the affected clients and counterparts, the data impact, the timeline from detection, the geographic spread, and the economic impact as structured fields, not prose you have to remember to include. The classification is calculated from those inputs, so the major-or-not decision is consistent and defensible.

Each stage of the report (initial, intermediate, final) has its own required fields and its own deadline, tracked on a visible clock. Report validation checks that every mandatory field is filled before you submit, so nothing gets left blank under time pressure. If the initial notification is missing an input the authority expects, you find out from the validation, not from the regulator.

Because the incident links back to the controls and evidence in your wider program, the final report isn't a standalone artifact. It ties to the resilience testing, the third-party risk records, and the controls that were meant to prevent or contain the incident, so your lessons learned actually feed back into the program.

## Getting started

You don't build incident reporting during an incident. A realistic first pass looks like this:

1. **Define your classification method** against the DORA criteria, so the major-or-not call is consistent no matter who's on call.
2. **Map your competent authority and any overlapping regimes** (NIS2, GDPR) before you need them.
3. **Set up the three report stages** with their required fields and deadlines, ready to open in one click.
4. **Connect incidents to your resilience program** so final reports feed lessons learned back into controls and testing.

DORA rewards the entities that treat incident reporting as a rehearsed operational process, not a scramble. Build the structure once, and the next major incident becomes a report you fill in rather than a deadline you fear.

Ready to run DORA incident reporting without the middle-of-the-night scramble? [Book a demo](https://optitech-sverige.se/contact-sales) and see how OptiTech structures your reports, validates the required fields, and keeps every deadline on the clock.
