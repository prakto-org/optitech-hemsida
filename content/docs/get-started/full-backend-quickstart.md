---
title: Get audit-ready with OptiTech
subtitle: From sign-up to a running compliance program, one step at a time
summary: >-
  End-to-end tutorial that takes a company from sign-up to audit-ready:
  run the gap analysis, activate a framework, connect integrations for
  automatic evidence collection, assign control owners, generate policies,
  run a risk assessment, drill the MSB incident flow, and produce a board
  report. Choose this page when rolling OptiTech out for real, not just
  exploring the Console.
enableTableOfContents: true
redirectFrom:
  - /docs/get-started/backend-overview
layout: wide
---

## Before you start

You'll need an OptiTech account ([sign up here](/signup)) and about an afternoon. Have this at hand:

- Your organization number, industry, and employee count
- A list of the systems you run (identity provider, cloud, code hosting, HR)
- The customer sectors you supply (energy, healthcare, municipalities, finance, transport)

<Admonition type="important" title="Which plan do you need?">
Everything through the incident drill works on the **Start** plan. Vendor management and the AI copilot require **Professional**. See [plans](/docs/introduction/plans) for the full comparison.
</Admonition>

<TwoColumnLayout>

<TwoColumnLayout.Step title="Create your organization">
<TwoColumnLayout.Block>

Sign up and create your organization. The organization is the top-level container that holds your frameworks, controls, evidence, documents, and team.

If your company is part of a group, create one organization per legal entity. Group-level oversight across entities is available on the Enterprise plan.

</TwoColumnLayout.Block>
<TwoColumnLayout.Block>

What gets created for you:

- An empty **organization** with you as owner
- The **audit log**, capturing every action from this point on
- A **dashboard** that will fill up as you complete the steps below

For a guided look around the Console first, take the [Console tour](/docs/get-started/signing-up).

</TwoColumnLayout.Block>
</TwoColumnLayout.Step>

<TwoColumnLayout.Step title="Run the gap analysis">
<TwoColumnLayout.Block>

The onboarding wizard asks about 20 questions about your business. Answer honestly rather than aspirationally: the point is to find gaps now, not during an audit.

The wizard does your legal scoping: which laws apply, which NIS2 entity category you fall into, and why. Many companies are covered by NIS2 through their customers rather than their own sector.

</TwoColumnLayout.Block>
<TwoColumnLayout.Block>

Your gap report contains:

- **Applicable laws**, with the reasoning per law
- **Your NIS2 category**: essential or important entity
- **A prioritized action list**: what to fix first, and which controls you can already prove

Keep the action list open. The rest of this tutorial works through it.

</TwoColumnLayout.Block>
</TwoColumnLayout.Step>

<TwoColumnLayout.Step title="Activate your first framework">
<TwoColumnLayout.Block>

From **Frameworks**, activate the framework your gap analysis flagged as most urgent. For most Swedish companies that's **NIS2**, built in OptiTech from the Swedish legal text and MSB regulations (MSBFS).

On the Start plan you activate one framework. When you add more later, cross-mapping means the controls you set up now carry over.

</TwoColumnLayout.Block>
<TwoColumnLayout.Block>

Activating a framework creates:

- Every **requirement** from the legal text, in plain language
- The **controls** that satisfy each requirement
- **Tasks** for the controls that can't be verified automatically

Requirements and controls are many-to-many: one control can satisfy several requirements, in several frameworks.

</TwoColumnLayout.Block>
</TwoColumnLayout.Step>

<TwoColumnLayout.Step title="Connect your integrations">
<TwoColumnLayout.Block>

From **Integrations**, connect the systems you listed before you started. Start with your identity provider; it feeds the most controls.

Within minutes, controls flip from gray to green or red as the first checks land. Red controls come with a suggested fix or a ready-made ticket.

On Professional and Enterprise, also connect the Swedish systems: Fortnox or Visma so onboarding and offboarding checks run against your real employee register, plus Kivra for document distribution.

</TwoColumnLayout.Block>
<TwoColumnLayout.Block>

What the first checks verify:

- **Microsoft 365 / Entra ID or Google Workspace**: MFA coverage, admin roles, offboarding within 24 hours, logging
- **AWS / Azure**: encryption at rest, public storage exposure, backup configuration
- **GitHub / GitLab**: branch protection, access reviews, secret scanning
- **Intune / Jamf**: device encryption and patch levels
- **CrowdStrike / Defender**: endpoint protection coverage

</TwoColumnLayout.Block>
</TwoColumnLayout.Step>

<TwoColumnLayout.Step title="Assign control owners">
<TwoColumnLayout.Block>

Every control needs a person who gets the alert when it drifts. From **Controls**, assign owners for the controls your gap analysis prioritized.

Invite the owners from **People** as you go. There's no per-seat pricing, so invite everyone who owns something.

</TwoColumnLayout.Block>
<TwoColumnLayout.Block>

A typical starting split for a 30-person company:

- **IT manager**: identity, endpoints, backups, cloud configuration
- **HR**: onboarding, offboarding, training completion
- **CEO or COO**: risk register, policies, vendor decisions
- **CFO**: contract monitoring, insurance

Ownership shows up on the dashboard, in reminders, and in the audit log.

</TwoColumnLayout.Block>
</TwoColumnLayout.Step>

<TwoColumnLayout.Step title="Generate your policies">
<TwoColumnLayout.Block>

From **Documents**, work through the core document set. Start from the Swedish templates; on Professional, the AI copilot pre-fills them from your connected systems so they describe how you actually operate.

Review each draft, approve it, and send it for employee e-signing with read receipts. Each document gets an annual review cycle with reminders.

</TwoColumnLayout.Block>
<TwoColumnLayout.Block>

The core set for NIS2:

- **Information security policy**: the top-level document your board approves
- **Incident response plan**: roles, contacts, and the MSB reporting steps
- **Continuity plan**: how you keep operating during disruption
- **Access control policy**: who gets access to what, and how it's revoked

All 50+ templates follow MSB methodology and the language authorities expect.

</TwoColumnLayout.Block>
</TwoColumnLayout.Step>

<TwoColumnLayout.Step title="Run the risk assessment">
<TwoColumnLayout.Block>

From **Risks**, run your first structured risk assessment. Score each risk on likelihood times impact, link it to the controls that mitigate it, and set a treatment plan for anything above your threshold.

NIS2 requires a documented, recurring risk process. OptiTech schedules the recurrence and keeps the history, so next quarter is an update rather than a restart.

</TwoColumnLayout.Block>
<TwoColumnLayout.Block>

Common first risks to assess:

- Ransomware via phishing
- Loss of a critical supplier
- Unauthorized access from stale accounts
- Data center or cloud region outage
- Key person dependency in IT

Each risk links to controls, and controls link to evidence, so your risk register is backed by proof rather than opinion.

</TwoColumnLayout.Block>
</TwoColumnLayout.Step>

<TwoColumnLayout.Step title="Set up vendor management">
<TwoColumnLayout.Block>

On **Professional** and **Enterprise**, open **Vendors** and register your critical suppliers. NIS2 makes you responsible for your supply chain, and DORA requires financial institutions to keep a register of every ICT contract.

Send each critical vendor a security questionnaire from the platform. Their answers land as risk classifications in your register, and contract renewal dates get monitored.

<Admonition type="note" title="On the Start plan?">
Skip this step for now. Your gap analysis flags it as an open item, so it stays visible on your action list until you upgrade or handle it manually.
</Admonition>

</TwoColumnLayout.Block>
<TwoColumnLayout.Block>

Register at minimum:

- Your IT operations partner or MSP
- Your cloud and hosting providers
- Your payroll and HR system providers
- Anyone with access to your systems or data

When a vendor answers a questionnaire, they get a free OptiTech account with their own status, so the next customer who asks them doesn't start from zero.

</TwoColumnLayout.Block>
</TwoColumnLayout.Step>

<TwoColumnLayout.Step title="Run an incident drill">
<TwoColumnLayout.Block>

From **Incidents**, run a test drill before you need the real thing. The drill walks through the full NIS2 sequence without submitting anything to MSB.

Run it with the people on your on-call list. The goal is that when a real incident happens, everyone has seen the flow once and the 24-hour deadline doesn't cause panic.

</TwoColumnLayout.Block>
<TwoColumnLayout.Block>

The drill covers the three deadlines:

1. **24 hours**: early warning to MSB, pre-filled from your incident data, with the countdown running
2. **72 hours**: the incident report, with your contact list and communication templates for customers, press, and internal teams
3. **One month**: the final report

The IMY flow for personal data breaches (GDPR, 72 hours) works the same way.

</TwoColumnLayout.Block>
</TwoColumnLayout.Step>

<TwoColumnLayout.Step title="Generate your board report">
<TwoColumnLayout.Block>

Finish by generating your first board report from the **Dashboard**. NIS2 places personal liability on boards and management; the report is how they show active governance.

Put it on the agenda for your next board meeting. From now on, generating an updated one takes one click.

</TwoColumnLayout.Block>
<TwoColumnLayout.Block>

The report includes:

- Compliance score per framework, with trend
- Open gaps and their owners
- Incidents and drills in the period
- Risk register status and treatment plans
- Vendor risk summary

Boards that need the background can take the [NIS2 board training](/docs/introduction/plans#add-ons) add-on.

</TwoColumnLayout.Block>
</TwoColumnLayout.Step>

</TwoColumnLayout>

## What you built

You now have a running compliance program where:

- Your legal scope is documented, with a prioritized action list from the gap analysis
- Evidence collects automatically from your connected systems, timestamped and hash-chained
- Every control has an owner who's alerted on drift, with a one-click fix or ready-made ticket
- Your core policies are approved, e-signed, and on a review cycle
- Your team has drilled the MSB incident flow before ever needing it
- Your board gets governance proof in one click

## Next steps

- **Add a framework:** activating ISO 27001 or DORA starts from the controls you already have, thanks to cross-mapping. See [plans](/docs/introduction/plans#frameworks).
- **Publish a Trust Center:** give customers a public security page that shortens their reviews and your sales cycles (Professional and up).
- **Compliance as code:** on Enterprise, wire the API and CLI into CI/CD so deploys that break controls are blocked before they ship.
- **Talk it through:** [book a free gap analysis](/contact-sales) and walk through your results with our team.

<NeedHelp/>
