---
title: 'AI governance and the EU AI Act: where to start'
description: How to build an AI governance program that maps to the EU AI Act, with controls and evidence you can prove.
excerpt: >-
  The EU AI Act sorts AI systems by risk and scales the rules to match. This
  guide walks through the four risk tiers, what high-risk systems owe, how the
  Act overlaps with GDPR, and how OptiTech helps you inventory AI systems,
  assign risk, and keep controls and evidence current.
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
  title: 'AI governance and the EU AI Act: where to start - OptiTech'
  description: >-
    The EU AI Act's risk tiers, high-risk obligations, transparency duties, and
    the GDPR overlap, plus how to start an AI governance program with OptiTech.
  keywords: []
  noindex: false
  ogTitle: 'AI governance and the EU AI Act: where to start - OptiTech'
  ogDescription: >-
    The EU AI Act's risk tiers, high-risk obligations, transparency duties, and
    the GDPR overlap, plus how to start an AI governance program with OptiTech.
  image: null
---

Most teams will meet the EU AI Act the way they met GDPR: late, and in a hurry. Someone forwards a link about fines, a customer drops an AI question into a security review, and suddenly you need to know every AI system you touch and what each one actually does. The scramble is worse this time, because AI shows up in hiring tools, support chatbots, and half the SaaS you already pay for, often without anyone deciding to adopt it.

You can get ahead of it. The EU AI Act is the first broad law on artificial intelligence, and it rewards companies that treat AI oversight as a standing program rather than a one-off audit. This guide covers what the Act asks of you, how it lines up with the privacy work you've likely already started, and how to run it as a living program with OptiTech.

## What the EU AI Act actually is

The EU AI Act is a risk-based regulation. Instead of treating all AI the same, it sorts systems into tiers by the harm they could cause and scales the obligations to match. Low-stakes tools carry almost no duties, while systems that affect people's rights or safety carry a lot.

It reaches further than most teams expect. The Act applies whether you build AI, resell it, or simply use it, and it covers any company that puts an AI system on the EU market or whose output affects people in the EU. Like GDPR, it doesn't care where you're headquartered. If a Nordic customer or employee is on the receiving end, you're in scope.

## The four risk tiers

The whole framework rests on four levels of risk, and knowing where each of your systems sits is the first real task.

### Unacceptable risk

A short list of practices is banned outright. Think social scoring by public authorities, systems that manipulate people or exploit vulnerabilities, and most real-time remote biometric identification in public spaces. If a system falls here, the answer isn't a control. It's don't use it.

### High risk

This is the heart of the regulation. AI counts as high risk when it's used in areas like hiring and worker management, credit and insurance decisions, education, essential public and private services, critical infrastructure, or as a safety component in a regulated product. These systems are legal, but they carry the full set of obligations, and most of the compliance work lands here.

### Limited risk

Some systems carry transparency duties and little else. A chatbot has to tell people they're talking to a machine. AI-generated or manipulated content, including deepfakes, has to be labeled so no one is fooled. The goal is honesty, not a heavy program.

### Minimal risk

Everything else, which is most of it. Spam filters, recommendation engines, and the AI baked into ordinary business software carry no specific obligations. Voluntary codes of conduct are encouraged, but nothing is required.

Here's the catch that trips teams up: the tier isn't a fixed property of the technology. The same model can be minimal risk in one use and high risk in another. Risk follows the use case, not the tool. That's exactly why an inventory that records how each system is used beats a simple list of vendors.

## What high-risk systems have to do

If a system lands in the high-risk tier, the obligations get specific. You need a risk management process that runs across the system's life, not a single sign-off at launch. You need data governance so the data behind the system is relevant and tested for bias. You need technical documentation and automatic logging that show how the system works and what it has done.

On top of that, high-risk systems require meaningful human oversight, so a person can catch and override a bad outcome. They need to hit a reasonable bar for accuracy, robustness, and security. And before they go to market, many need a conformity assessment and registration in the EU database. If you build high-risk AI, this is a real engineering and documentation load. If you buy it, you inherit the duty to check that your provider has done the work and to use the system as intended.

## Transparency duties for everyone else

Even outside the high-risk tier, transparency rules apply broadly. People must be told when they're interacting with an AI system unless it's obvious. Emotion recognition and biometric categorization come with disclosure duties. Synthetic audio, image, and video have to be marked as artificially generated in a machine-readable way. General-purpose AI providers carry their own documentation and copyright duties on top.

The practical takeaway is simple. Even a company that builds nothing high risk still owes clear disclosure wherever AI meets a customer, and that promise is easy to make and easy to forget. Writing it down as a control keeps it real.

## Where the AI Act meets GDPR

If your AI touches personal data, and most does, the AI Act and GDPR apply at the same time. They're built to fit together, and the overlap is where a good program pays off.

GDPR already governs the personal data that trains and feeds your models, so lawful basis and data minimization still apply to training data. Article 22 already limits solely automated decisions that significantly affect people, which is precisely the terrain of high-risk AI in hiring or credit. And the data protection impact assessment you may already run for risky processing sits right next to the risk work the AI Act expects. Do them together and you write the analysis once instead of twice.

<Admonition type="tip" title="Reuse the work you've already done">
If you run GDPR as a living program, you're not starting AI governance from zero. Your record of processing activities already shows where personal data flows, and your impact assessments already document risk. Link each AI system to the processing activity behind it, and the AI Act stops feeling like a second regime and starts feeling like one more framework in the same program.
</Admonition>

## The timelines you're working against

The Act entered into force in 2024 and phases in over several years. The bans on unacceptable-risk practices came first, followed by the rules for general-purpose AI. The bulk of the high-risk obligations are landing now, with the duties tied to regulated products following later. The direction is clear: the runway is shrinking, and the systems with the heaviest duties are exactly the ones that take longest to document. Starting the inventory today is the cheapest move you'll make all year.

## How to start an AI governance program

You don't need a task force or a six-month project. A realistic first pass looks like this:

1. **Inventory every AI system.** Include what you build, what you buy, and the AI quietly bundled into tools you already use. Record what each one does and who it affects.
2. **Assign a risk tier to each use.** Rate by use case, not by vendor, since the same tool can sit in different tiers depending on how you use it.
3. **Give every high-risk and limited-risk system an owner and controls.** Human oversight, disclosure, logging, and documentation each become a control with someone accountable.
4. **Collect evidence as you go.** Attach the documentation, oversight records, and assessments to the system so you can prove the work rather than describe it.
5. **Publish what you can.** A trust center turns your governance work into an answer buyers can read without emailing your team.

## How OptiTech helps

This is the program OptiTech is built to run. You inventory your AI systems in the OptiTech Console as structured records, not a spreadsheet that goes stale, with each system linked to its purpose, its owner, and the data it uses. You assign a risk tier to each use and let the platform map the matching obligations to concrete controls, so high-risk duties like human oversight and logging become tracked work rather than good intentions.

From there, evidence stays attached to the control it proves, and the AI Act sits alongside your other frameworks in one program instead of a silo. When a customer asks how you govern AI, your trust center already has the answer, drawn from the same records and evidence that keep you compliant. Compliance stops being a cost center and starts closing deals.

The AI Act rewards the companies that treat AI oversight as an operating habit rather than an annual fire drill. Build the inventory once, keep the risk ratings and evidence current, and both your auditors and your buyers get the same clear answer.

Ready to turn AI governance into a living program? [Book a demo](https://optitech-sverige.se/contact-sales) and see how OptiTech connects your AI inventory, controls, and evidence.
