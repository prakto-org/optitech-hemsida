---
title: The cloud shared responsibility model for compliance teams
description: What your cloud provider secures, what stays your job, and how to prove your side.
excerpt: >-
  A compliant cloud doesn't make you compliant. Your provider secures the
  infrastructure, but configuration, access, and data stay on your side of the
  line. This post explains the shared responsibility model, why a provider's
  certificate isn't enough, and how OptiTech helps you own and prove your half
  with controls and evidence.
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
  title: The cloud shared responsibility model for compliance teams - OptiTech
  description: >-
    What your cloud provider secures versus what you remain responsible for, and
    how to document and prove your side with controls and evidence.
  keywords: []
  noindex: false
  ogTitle: The cloud shared responsibility model for compliance teams - OptiTech
  ogDescription: >-
    What your cloud provider secures versus what you remain responsible for, and
    how to document and prove your side with controls and evidence.
  image: null
---

Plenty of teams assume a compliant cloud makes them compliant. They choose a provider with a wall of certifications, point to the logos during a sales call, and figure the hard part is handled. Then an auditor asks how you control access to that environment, and the room goes quiet.

Here's the truth the logos hide: your cloud provider secures the cloud, and you secure what you put in it. That split has a name, the shared responsibility model, and misreading it is one of the fastest ways to fail a security review. This post breaks down who owns what, why a provider's certificate never covers your side, and how to document the split so you can prove it on demand.

## What the shared responsibility model actually means

The shared responsibility model divides security duties between your provider and you. The provider handles the parts you can't touch: the physical data centers, the server hardware, the hypervisor, and the network backbone. You handle everything you set up and run on top of that foundation.

Where the line sits depends on the service you buy:

- **Infrastructure as a service.** You own the operating system, patching, configuration, access, and data. The provider stops at the virtual machine.
- **Platform as a service.** The provider manages more of the stack, but you still own how the service is configured, who can reach it, and the data inside it.
- **Software as a service.** The provider runs the application, yet you still decide who has access, how it's set up, and what data you feed it.

One thing stays constant across every model: your data, and who can reach it, are always yours to protect. No provider takes that off your plate.

## "We use a compliant cloud" is not enough

A provider's certification tells you one thing: their layer meets a standard. It says nothing about how you run your side. When an auditor assesses your SOC 2 Type II or ISO 27001, they want evidence of your access reviews, your change management, and your configuration decisions. The provider's report proves their controls, not yours.

The classic failure makes this concrete. A storage location gets left open to the public and sensitive data leaks. The platform underneath was certified to every standard going, but the exposure came from a setting you owned. The provider's certificate won't help you explain that to a regulator or a customer.

The same logic runs through NIS2 and DORA. Both put accountability on your organization for the security and resilience of the services you deliver. You can rely on a provider, but you can't outsource the responsibility to their certificate. When the regulator asks, the answer has to be yours.

## Where your responsibility actually lives

Your side of the line comes down to three areas a provider can never own for you.

### Configuration

Misconfiguration is the leading cause of cloud incidents, and every default you accept or change is a control you own. Encryption settings, network rules, logging, and retention all sit with you. The provider gives you safe options, but choosing and maintaining them is your job.

### Access

Who can log in, with what permissions, and how you verify it over time. Multi-factor authentication, least privilege, and a clean joiner-mover-leaver process are yours to run. So are the periodic access reviews an auditor will ask to see.

### Data

Classification, residency, retention, and deletion all stay with you. If you handle EU personal data, where it lives matters, and "the provider is certified" doesn't answer the residency question. You decide what you collect, where it sits, and when it's removed.

## Document the split so you can prove it

Knowing the split isn't the same as proving it. The tool that closes that gap is a responsibility matrix. For each service you use, write down what the provider covers, what you cover, and where the duty is shared. A shared duty, like patching in some platform services, is where incidents hide, so name an owner for it explicitly.

Then connect each item on your side to a real control with an owner and evidence behind it. That's the difference between claiming you manage access and showing the last quarterly access review with a date and a signature.

<Admonition type="tip" title="Don't inherit what you have to prove">
A provider's certificate can support a shared control, but it can't replace the evidence for your own. Treat inherited controls as a starting point, then attach your own proof for everything on your side of the line.
</Admonition>

## How OptiTech helps you own your side

OptiTech runs your compliance as a single program of frameworks, controls, and evidence, which is exactly the shape the shared responsibility model needs.

You pick the frameworks that apply, whether that's SOC 2 Type II, ISO 27001, GDPR, NIS2, or DORA. Every control on your side of the line gets an owner and a place to collect evidence, so configuration, access, and data management stop being assumptions and become records you can show.

For the shared and provider-owned parts, you reflect the provider's certifications directly in the program. Attach their reports to the controls they support, and the parts you inherit are documented instead of assumed. Because OptiTech keeps EU-only data residency in Stockholm and Frankfurt, the residency question has a clear answer rather than a shrug.

Finally, your trust center publishes the result. Buyers see your certifications, the provider certifications you rely on, and your data residency in one place, without emailing your team. The shared responsibility model stops being an awkward audit moment and becomes something you show off.

## Getting started

You can put this in place without a huge project:

1. **Map the model for each cloud service you use.** Note whether it's infrastructure, platform, or software, since that moves the line.
2. **Write a responsibility matrix.** Provider, you, and shared, with an owner named for every shared duty.
3. **Turn your side into controls** in the OptiTech Console, each with an owner and a place for evidence.
4. **Attach provider certifications** to the shared controls so the inherited parts are documented.
5. **Publish the split to your trust center** so buyers and auditors see the same clear picture.

The shared responsibility model isn't a trap. It's a clear line, and the companies that thrive under it are the ones that write the line down and own their side out loud. Do that once, keep the evidence current, and "how do you secure your cloud?" turns from a stall into a strength.

Ready to own your side of the cloud? [Book a demo](https://optitech-sverige.se/contact-sales) and see how OptiTech connects your controls, evidence, and provider certifications in one program.
