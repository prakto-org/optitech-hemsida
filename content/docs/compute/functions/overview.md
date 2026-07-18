---
title: Incident reporting and risk
subtitle: Guided authority flows and a risk register, next to your evidence.
summary: >-
  OptiTech's incident flows guide you through NIS2's MSB sequence and GDPR's
  IMY flow with pre-filled forms, deadline countdowns, and communication
  templates. The risk register links every risk to the controls that mitigate
  it and the evidence that proves they work.
enableTableOfContents: true
redirectFrom:
  - /docs/compute/functions/preview-access
updatedOn: '2026-07-18T10:05:28.819Z'
---

OptiTech's incident flows guide you through authority reporting with the legal deadlines wired in, so a 24-hour early warning is a checklist instead of a crisis. Use them for NIS2 incidents to MSB, personal data breaches to IMY, and the drills that make the real thing routine.

What makes OptiTech's incident handling different from an alert channel?

- **Deadlines wired in.** The countdown starts the moment you open the incident, with each authority's clock (24 hours, 72 hours, one month) visible the whole way. No spreadsheet math under pressure.
- **Pre-filled forms.** The MSB and IMY forms populate from your incident data, your on-call contact list is attached, and communication templates for customers, press, and internal channels are one click away.
- **Connected to your controls.** Incidents link to the controls that failed, feed the risk register, and land in the same evidence chain your auditor reviews.

Incidents run on the same platform as your evidence, so the post-incident report writes itself from data that already exists.

> Run a test drill before you need the real thing. Teams that have drilled once handle the 24-hour deadline as process instead of panic.

<Admonition type="important" title="Reporting duties are yours">
OptiTech pre-fills, tracks, and reminds, but the legal duty to report stays with your organization. Nothing is submitted to an authority without your explicit confirmation.
</Admonition>

## Get started

<DetailIconCards>

<a href="/docs/get-started/full-backend-quickstart" description="Run your first incident drill as part of getting audit-ready." icon="code">Run a drill</a>

<a href="/docs/frameworks/nis2" description="The MSB sequence: early warning, report, and final report." icon="openai">The MSB flow</a>

<a href="/docs/frameworks/gdpr" description="The 72-hour personal data breach flow to IMY." icon="globe">The IMY flow</a>

<a href="/docs/get-started/signing-up" description="Set owners and on-call contacts in the Console tour." icon="lock-landscape">On-call contacts</a>

<a href="/docs/introduction/plans" description="Incident flows and the risk register are included on every plan." icon="gear">Plan availability</a>

<a href="/docs/get-started/why-neon" description="How risks, controls, and evidence connect in one chain." icon="cli">The risk model</a>

<a href="/docs/introduction/plans#enterprise-features" description="Give supervisors read-only access during an inspection." icon="search">Auditor portal</a>

<a href="/docs/introduction/support" description="Severity 1 handling when the platform itself is your problem." icon="sparkle">Support severities</a>

</DetailIconCards>

## A flow, not a form

An incident in OptiTech is always a sequence (detect, assess, report, close) and always produces a record: the timeline, the decisions, who was notified, and what was filed.

That makes the flows a fit for reportable incidents, not for routine alerts. Routine drift (a failed check, a missing signature) stays in the task system with its own lifecycle. An incident starts when something meets your reporting threshold, and the assessment step exists precisely to make that call with the criteria in front of you:

```text
Early warning to MSB              due in 21h 14m
Incident report to MSB            due in 69h 14m
Final report to MSB               due in 29 days
```

The risk register works the same way in reverse: risks are scored on likelihood times impact, linked to mitigating controls, and updated by reality. When an incident closes, its lessons land as risk updates:

```text
Risk: Ransomware via phishing     score 12 -> 16
Linked controls: 3 verified, 1 drifted
Treatment plan: MFA hardening     owner: Dana Smith
```

## When to use the incident flows

- **NIS2 incidents**: significant disruptions to your services, reported to MSB on the three-step clock. See [NIS2](/docs/frameworks/nis2).
- **Personal data breaches**: the GDPR assessment and the 72-hour IMY flow, including notification templates for those affected. See [GDPR](/docs/frameworks/gdpr).
- **DORA incidents**: classification and reporting for financial-sector requirements. See [DORA](/docs/frameworks/dora).
- **Drills**: the full sequence without submitting anything, for onboarding and annual exercises.
- **Customer notifications**: incidents that trigger contractual duties to customers, with the communication templates attached.
- **Near misses**: log what almost happened, feed the risk register, skip the authority steps.

## How incidents fit with your program

Incident handling is a capability, not a silo. The flows draw on everything else the platform knows. Two common shapes:

- **The incident starts in OptiTech.** A drifted control escalates: what the check saw becomes the incident's first evidence, and the affected requirement is already linked when you open the flow.
- **The incident starts outside.** Your SOC, MSP, or an employee reports something. You open an incident, and OptiTech pulls in the relevant controls, contacts, and deadlines while you assess.

## The three deadlines

| Step                | `deadline` | What OptiTech prepares              | Where it goes | Included on |
| ------------------- | ---------- | ----------------------------------- | ------------- | ----------- |
| Early warning       | `24h`      | Pre-filled MSB form, on-call list   | MSB           | Every plan  |
| Incident report     | `72h`      | Severity and impact assessment      | MSB           | Every plan  |
| Final report        | `1 month`  | Causes, mitigation, lessons         | MSB           | Every plan  |
| Breach notification | `72h`      | Risk assessment, notification texts | IMY           | Every plan  |
| DORA classification | `per DORA` | Classification and report           | Supervisor    | Enterprise  |

<NeedHelp/>
