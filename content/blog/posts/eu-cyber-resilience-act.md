---
title: 'The EU Cyber Resilience Act: what the CRA asks of you'
description: How the CRA changes the way you build and support products with digital elements, and how to prove it.
excerpt: >-
  The Cyber Resilience Act isn't just for hardware makers. It covers products
  with digital elements and turns secure design, vulnerability handling, and
  tight reporting deadlines into obligations you have to track. This guide
  covers what the CRA requires, who's in scope, and how OptiTech turns it into a
  living program of controls and evidence.
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
  title: 'The EU Cyber Resilience Act: what the CRA asks of you - OptiTech'
  description: >-
    What the EU Cyber Resilience Act requires, who's in scope, and how to track
    CRA obligations as controls and evidence with OptiTech.
  keywords: []
  noindex: false
  ogTitle: 'The EU Cyber Resilience Act: what the CRA asks of you - OptiTech'
  ogDescription: >-
    What the EU Cyber Resilience Act requires, who's in scope, and how to track
    CRA obligations as controls and evidence with OptiTech.
  image: null
---

Most teams assume the Cyber Resilience Act is someone else's problem. If you don't build firmware or ship a physical gadget, it's tempting to file the CRA under "hardware" and move on. But the regulation covers products with digital elements, and that phrase reaches wider than most people expect. If you sell software, a connected device, or a component that ends up inside one, the CRA has something to say about how you build it, how long you support it, and how you handle the vulnerabilities you find.

The reassuring part is that the CRA asks for the same discipline every other framework does: know your obligations, give each one an owner, and keep evidence you can show on demand. This guide covers what the CRA requires, who's in scope, and how you run it as a living program in OptiTech instead of a scramble before the deadline.

## What the Cyber Resilience Act covers

The Cyber Resilience Act, formally Regulation (EU) 2024/2847, sets baseline cybersecurity rules for products with digital elements sold in the EU. A product with digital elements is any software or hardware product, along with its remote data processing solutions, whose intended or reasonably foreseeable use includes a data connection to a device or network.

That sweeps in a wide range: operating systems and mobile apps, connected sensors and cameras, network equipment, and the software libraries other products depend on. A few categories sit outside the scope, such as medical devices, cars, and aviation covered by their own sector rules, but for most software and connected hardware, assume the CRA applies. The regulation also sorts products into tiers, with "important" and "critical" products like firewalls and hardware security modules facing stricter conformity assessment before they can carry the CE marking.

## Who's in scope

The CRA places duties across the supply chain, not just on the company that writes the code.

- **Manufacturers** carry the heaviest load. If you develop a product with digital elements, or have one developed and sell it under your name, you own the essential requirements, the vulnerability handling, and the reporting duties.
- **Importers** may only place products on the EU market that meet the CRA and come from a compliant manufacturer. Bring in a non-EU product and you inherit checks you can't skip.
- **Distributors** have to act with due care, verify the CE marking and documentation are present, and not pass along a product they know is non-compliant.

If you build on open source, there's nuance, but the moment you monetize a product built on a component, the manufacturer duties land on you.

## The essential cybersecurity requirements

The heart of the CRA is a set of essential requirements a product has to meet before it reaches the market. They're outcome-based rather than prescriptive, so you decide how to satisfy them based on the risk your product carries.

- **Secure by design.** Build security in from the start based on a documented risk assessment.
- **A secure default configuration.** Ship with safe settings, including a way to reset the product to its original state.
- **No known exploitable vulnerabilities.** Don't release a product with vulnerabilities you already know can be exploited.
- **Protect confidentiality, integrity, and availability.** Use encryption, access control, and integrity checks suited to the product.
- **Data minimization.** Process only the data the product needs to function.
- **A reduced attack surface.** Limit exposed interfaces and disable what isn't needed.
- **Security updates.** Deliver updates, ideally automatically, throughout the support period.

None of these is exotic. The challenge is proving you meet all of them, for every product, and keeping that proof current as the product changes.

## Vulnerability handling and reporting duties

Where the CRA gets sharp is the ongoing duty to handle vulnerabilities after a product ships. You can't build once and walk away.

Manufacturers have to identify and document the vulnerabilities and components in their products, including a software bill of materials (SBOM). You need a coordinated vulnerability disclosure policy so researchers can report issues to you, and you have to provide free security updates for the support period, which defaults to at least five years for most products.

The reporting duties come with a tight clock. When you learn of an actively exploited vulnerability or a severe security incident, you notify ENISA and the relevant national CSIRT in stages: an early warning within 24 hours, a fuller notification within 72 hours, and a final report once the issue is resolved.

<Admonition type="tip" title="Write the disclosure policy before you need it">
A coordinated vulnerability disclosure policy and a 24-hour reporting workflow are impossible to invent mid-incident. Stand them up as controls now, with named owners and a clear escalation path, so the clock never catches you improvising.
</Admonition>

## Timelines you need to plan around

The CRA entered into force in December 2024, but the obligations phase in over three years. The vulnerability and incident reporting duties apply from September 11, 2026, ahead of the rest. The full set of requirements, including the essential requirements and CE marking, applies from December 11, 2027. That staggered timeline is a gift if you use it. Stand up the reporting workflow first, since it lands earliest and takes real coordination across security, engineering, and legal.

## How the CRA relates to NIS2

It's easy to confuse the CRA with NIS2, since both are EU cybersecurity laws that landed around the same time. They cover different things and complement each other. NIS2 governs the cybersecurity of organizations, the essential and important entities that operate critical services, and asks about your risk management, governance, and incident reporting as a company. The CRA governs the cybersecurity of products, the things you place on the market. If you're a manufacturer that also runs important services, both apply. Treating them as one connected program, rather than two separate projects, saves you from duplicating controls and evidence.

## Track CRA obligations as controls and evidence

The CRA turns into a manageable set of obligations once you model it the way OptiTech models every framework: as controls you own, mapped to the evidence that proves them.

In the OptiTech Console, each essential requirement becomes a control with an owner and a current status. Your risk assessments, SBOMs, configuration baselines, and update records attach as evidence, so "we're secure by design" stops being a claim and becomes something you can show. The disclosure policy and the 24/72-hour reporting workflow live as tracked processes with the clock visible. Because controls map across frameworks, the work you do for the CRA reinforces your NIS2, ISO 27001, and SOC 2 programs, and your trust center can surface your product security posture to customers who increasingly ask about it before they buy.

## Getting started

You don't have to solve the whole regulation at once. A realistic first pass looks like this:

1. **Confirm scope.** List the products with digital elements you place on the EU market and your role for each: manufacturer, importer, or distributor.
2. **Stand up the reporting workflow.** Build the 24/72-hour process and the disclosure policy first, since those obligations land earliest.
3. **Map the essential requirements to controls.** Assign an owner to each and attach the evidence you already have.
4. **Connect it to your other frameworks and your trust center** so the work compounds instead of piling up.

The CRA rewards companies that treat product security as an operating habit, not a certification they chase once. Model the obligations as controls, keep the evidence current, and both regulators and customers get the same clear answer.

Ready to turn the CRA into a living program? [Book a demo](https://optitech-sverige.se/contact-sales) and see how OptiTech connects your controls, evidence, and reporting workflows.
