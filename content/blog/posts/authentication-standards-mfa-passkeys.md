---
title: 'Authentication standards: MFA and passkeys'
description: Why passwords alone fail and how to make strong authentication a control you can prove.
excerpt: >-
  Multi-factor authentication and passkeys have moved from nice-to-have to a
  baseline expectation across every framework and cyber insurance policy. This
  guide covers why passwords alone fail, what phishing-resistant authentication
  looks like, and how OptiTech turns your authentication policy into a control
  with evidence you can show on demand.
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
  title: 'Authentication standards: MFA and passkeys - OptiTech'
  description: >-
    Why passwords alone fail and how multi-factor authentication, passkeys, and
    SSO become a documented control with evidence you can prove.
  keywords: []
  noindex: false
  ogTitle: 'Authentication standards: MFA and passkeys - OptiTech'
  ogDescription: >-
    Why passwords alone fail and how multi-factor authentication, passkeys, and
    SSO become a documented control with evidence you can prove.
  image: null
---

Ask most teams how they handle authentication and you'll get a shrug. Everyone has a password policy somewhere, a few people use two-factor on the admin panel, and the rest is left to habit. That was fine when a leaked password meant one compromised account. It isn't fine now, when a single reused credential can hand an attacker your whole environment.

Authentication has quietly become one of the controls auditors, customers, and insurers look at first. This guide covers what strong authentication actually means today, why multi-factor and passkeys have moved from nice-to-have to baseline, and how you turn all of it into a documented control with evidence you can show on demand. It sits alongside access control rather than repeating it: access control decides who gets in and what they can touch, and authentication proves the person at the door is really them.

## Why passwords alone fail

Passwords fail for reasons that have nothing to do with how clever your rules are. People reuse them across services, so a breach anywhere becomes a breach everywhere. Phishing pages capture them in seconds, and the person typing rarely notices. Credential-stuffing tools replay stolen username and password pairs against your login by the million, at almost no cost to the attacker.

Longer passwords and forced rotation don't solve any of this. A 16-character password is just as easy to phish as an 8-character one, and mandatory 90-day changes push people toward predictable patterns and sticky notes. The security industry has largely abandoned complexity theater. What actually moves the needle is adding a second factor and, better still, using factors that can't be phished at all.

## Multi-factor authentication is the baseline now

A few years ago, multi-factor authentication (MFA) was something you enabled for administrators and hoped everyone else got around to. Today it's an explicit expectation almost everywhere you look.

- **SOC 2** examines whether logical access is protected by strong authentication, and MFA on critical systems is the default answer reviewers expect.
- **ISO 27001** treats authentication as part of access management, and your statement of applicability has to show how you handle it.
- **NIS2** raises the bar for essential and important entities, with multi-factor or continuous authentication named directly among the baseline measures.
- **DORA** expects financial entities to enforce strong authentication on access to critical functions and data.

Cyber insurance has moved even faster. Renewals now routinely require MFA on email, remote access, and privileged accounts before an insurer will quote you, and a gap can void a claim. In other words, MFA is no longer a security upgrade you choose. It's a condition of doing business, getting certified, and staying insured.

## Phishing-resistant methods and passkeys

Not all MFA is equal. A one-time code sent by SMS is better than nothing, but it can be intercepted, SIM-swapped, or phished on a fake login page along with the password. Push notifications are stronger, yet attackers wear people down with repeated prompts until someone taps approve out of fatigue.

Phishing-resistant authentication closes that gap. These methods bind the login to the real site, so a fake page can't complete it:

- **Passkeys** replace the password entirely with a cryptographic key stored on your device and unlocked by your fingerprint, face, or PIN. There's nothing to type, so there's nothing to phish.
- **Hardware security keys** built on the FIDO2 standard do the same job with a physical device, which many teams still favor for their most sensitive accounts.

You don't have to switch everything overnight. A sensible target is phishing-resistant authentication for administrators and anyone who can reach sensitive data, with strong MFA everywhere else. The point for governance is to decide the standard on purpose and record it, not to leave the choice to whatever each service happens to default to.

<Admonition type="tip" title="Set a floor, then raise it">
Pick a minimum acceptable factor for each tier of access and write it down: passkeys or hardware keys for admins, app-based MFA for everyone else, and SMS only where nothing stronger exists. Once the floor is documented, you can track exceptions and close them one by one instead of guessing where the weak spots are.
</Admonition>

## Single sign-on as a governance lever

Single sign-on (SSO) often gets sold as a convenience feature, and it is one. But its real value for compliance is control. When every application authenticates through one identity provider, you enforce your authentication standard in one place instead of app by app. Turn on MFA at the provider and every connected service inherits it.

SSO also fixes the messiest part of offboarding. Disable a leaving employee at the identity provider and their access to every downstream app drops with it, which is exactly the kind of evidence an auditor wants to see. That's where authentication and access control meet: SSO is the mechanism that makes both provable at once. It shrinks the number of separate credentials floating around, and every credential you remove is one an attacker can't steal.

## Write down your authentication policy

A control you can't describe is a control you can't prove. Your authentication policy doesn't need to be long, but it does need to state clearly:

- Which factors are acceptable for which systems and roles.
- Where MFA is mandatory and where phishing-resistant methods are required.
- How you handle shared or service accounts that can't use standard MFA.
- What happens when someone loses a factor, and how you recover access safely.
- How often you review the policy and who owns it.

Written down, this becomes the reference every audit, security review, and insurance renewal points back to. Left in people's heads, it becomes the thing that falls apart the moment someone asks you to prove it.

## How OptiTech tracks the authentication control

In the OptiTech Console, authentication isn't a paragraph buried in a policy document. It's a control in your program, linked to every framework that requires it. Map the single authentication control once and OptiTech shows it satisfying the relevant requirement in SOC 2, ISO 27001, NIS2, and DORA at the same time, so you're not maintaining four disconnected answers to the same question.

Each control carries its evidence. For authentication that usually means a configuration export from your identity provider showing MFA enforced, a coverage report listing which accounts are enrolled, and the signed authentication policy itself. OptiTech keeps that evidence attached to the control, tracks when it was last refreshed, and reminds the owner before it goes stale. When an auditor asks how you enforce strong authentication, you don't go hunting through screenshots. The control, its status, and its proof are already sitting together.

And because the same program feeds your trust center, you can show customers that you enforce MFA without exposing anything sensitive. A single line on your trust center saying strong authentication is required across the organization answers a question that would otherwise land in your inbox as a security review.

## Getting started

You can make real progress in a few focused steps:

1. **Enforce MFA on your highest-risk accounts first**, meaning email, your identity provider, and anything with administrative reach.
2. **Move admins and sensitive-data roles to phishing-resistant methods**, either passkeys or hardware keys.
3. **Consolidate apps behind SSO** so your standard is enforced in one place.
4. **Write the authentication policy down** and track it as a control in OptiTech, with evidence attached.

Strong authentication used to be the project nobody had time for. Now it's the control everyone checks first: auditors, buyers, and insurers alike. Set the standard on purpose, prove it once, and keep the evidence current instead of rebuilding it under pressure.

Ready to turn authentication into a documented, provable control? [Book a demo](https://optitech-sverige.se/contact-sales) and see how OptiTech connects your controls, frameworks, and evidence.
