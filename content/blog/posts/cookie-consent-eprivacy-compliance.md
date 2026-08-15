---
title: 'Cookie consent and ePrivacy: what compliant tracking looks like'
description: When cookie consent is required, what valid consent looks like, and how to prove your practice.
excerpt: >-
  Cookie consent sits where the ePrivacy Directive and GDPR meet, and getting it
  right takes more than a banner template. This guide covers when consent is
  required, what valid consent looks like, and how OptiTech turns your cookie
  practice into evidence you can prove.
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
  title: 'Cookie consent and ePrivacy: what compliant tracking looks like - OptiTech'
  description: >-
    When cookie consent is required, what valid consent looks like under GDPR and
    ePrivacy, and how to document your practice as evidence.
  keywords: []
  noindex: false
  ogTitle: 'Cookie consent and ePrivacy: what compliant tracking looks like - OptiTech'
  ogDescription: >-
    When cookie consent is required, what valid consent looks like under GDPR and
    ePrivacy, and how to document your practice as evidence.
  image: null
---

Most teams bolt a cookie banner onto their site, pick a template, and assume they're done. Then a customer's security review asks how you capture consent, or a regulator points at your pre-ticked boxes, and the banner turns out to be the easy part. Consent is a practice you have to run and prove, not a widget you install once.

Cookie consent sits at the meeting point of two rules people often confuse. Getting it right means treating both as one program of decisions, banners, and records you keep current. This guide walks through when consent is required, what valid consent looks like, and how you document the whole practice as evidence in OptiTech.

## GDPR and the ePrivacy Directive, together

People talk about "GDPR cookie consent," but cookies are governed first by the ePrivacy Directive, sometimes called the cookie law. In Sweden it lands in the Electronic Communications Act, and every EU country has its own transposition. The directive says you generally can't store or read information on someone's device unless they've consented, with a narrow exception for what's strictly necessary to deliver a service the user asked for.

GDPR comes in on top. When a cookie or tracker processes personal data, and most analytics and advertising cookies do, GDPR defines what counts as valid consent and what rights the person keeps afterward. So the two work together: ePrivacy decides *whether* you need consent to place the cookie, and GDPR sets the *standard* that consent has to meet. You can't satisfy one and ignore the other.

## When you actually need consent

Not every cookie needs a banner click. The line is purpose, not technology.

- **Strictly necessary cookies** don't need consent. Think session cookies that keep a user logged in, a shopping cart that remembers items, or a load balancer that routes traffic. These are essential to a service the user actively requested.
- **Everything else needs prior consent.** Analytics, advertising, A/B testing, social media pixels, heatmaps, and most third-party embeds all require consent before they run.

"Prior" is the word that trips teams up. Consent has to come *before* the cookie is set, not after. If your analytics fires on page load and the banner appears a beat later, you've already broken the rule. The same goes for legitimate interest: you can't fall back on it for cookies that ePrivacy says need consent. For tracking cookies, consent is the bar, full stop.

## What valid consent looks like

GDPR sets a high standard, and regulators enforce it literally. Valid consent is:

- **Freely given.** The user can say no as easily as yes. A "reject all" option has to sit right next to "accept all," with the same prominence. Burying rejection two menus deep isn't a real choice.
- **Specific and granular.** Users consent per purpose, not to one lump. Analytics, marketing, and personalization are separate decisions, and someone can accept one and refuse the others.
- **Informed.** Before they choose, people see what each category does, who the recipients are, and how long the cookies last.
- **Unambiguous.** Consent needs a clear affirmative action. A click, a toggle switched on, a box the user ticks themselves.

That last point rules out the most common mistake: pre-ticked boxes and "consent by continuing to browse." Silence, inactivity, and pre-selected toggles are not consent. Neither is a cookie wall that says accept or leave, in most cases, because that isn't freely given.

## Consent banners done right

A compliant banner is less about design and more about the choices it offers. Get these right:

- **Equal buttons.** "Accept all" and "reject all" appear together, styled with equal weight. No greyed-out reject, no hidden link.
- **Granular controls one layer down.** A "manage preferences" view lets users toggle each category on or off, all off by default except strictly necessary.
- **No cookies before the click.** Non-essential scripts stay blocked until the user opts in. This is the technical half people skip.
- **Easy withdrawal.** Withdrawing consent has to be as easy as giving it. A persistent link or icon that reopens the preferences panel does the job.
- **Symmetry over time.** Don't nag users who declined with a banner on every visit. Respect the choice for a reasonable period.

<Admonition type="tip" title="Withdrawal is a requirement, not a nicety">
If a user can accept in one click but has to email you to withdraw, your consent isn't valid. Build the "change your choices" path before you launch the banner, and treat it as part of the same control.
</Admonition>

## Keep records of consent

GDPR's accountability principle applies to consent like everything else: you have to be able to demonstrate that a user consented, not just assert it. That means keeping a record of *who* consented, *when*, to *what*, and *how the choice was presented*.

In practice you want to capture the consent version, the categories accepted and refused, a timestamp, and a reference to the banner text and configuration in force at that moment. When your banner changes, the old records still reflect what the user actually agreed to. If a regulator or a customer asks you to prove consent for a given date, you can show exactly what was on screen and what the person chose.

## Common enforcement mistakes

Regulators across the EU have been active here, and the pattern of fines is consistent. The mistakes that draw penalties are rarely exotic:

- **Cookies set before consent.** Scripts firing on load, before the user has chosen anything.
- **No "reject all" at the first layer.** Accept is one click, rejecting takes five. Regulators read that as nudging.
- **Pre-ticked boxes or default-on toggles.** Still common, still a clear violation.
- **Bundled consent.** One button for analytics, ads, and personalization with no way to separate them.
- **Consent you can't withdraw.** No visible path to change a choice after the fact.
- **No records.** A banner that captures a click but stores nothing to prove it later.

None of these need a lawyer to spot. They need someone to own the practice and check it against the standard.

## Document your consent practice as evidence

This is where consent stops being a website chore and becomes part of your compliance program. In OptiTech, your cookie and ePrivacy practice lives as a set of controls with evidence attached, not a claim in a policy nobody reads.

You can hold your banner configuration, your cookie inventory, and your consent records as evidence against the relevant controls, and link them to the GDPR and ePrivacy requirements they satisfy. When your banner or your cookie list changes, you update the evidence in the OptiTech Console and the control shows its current state. Reviewers see a practice that's maintained, dated, and owned.

The same evidence does double duty on the sales side. When an enterprise buyer's security review asks how you handle tracking consent, you point to your trust center instead of writing a fresh answer. Your data residency in Stockholm and Frankfurt, your certifications, and your consent posture all show up in one place, and the review starts answering itself.

## Getting started

You don't need a rebuild to get this right. A realistic first pass looks like this:

1. **Inventory your cookies and trackers.** List every one, its purpose, its provider, and its lifetime. You can't consent to what you haven't mapped.
2. **Fix the banner.** Equal accept and reject, granular controls, nothing firing before the click, an easy way to withdraw.
3. **Turn on consent records.** Capture who, when, what, and which banner version, and keep the history.
4. **Attach it to your program.** Hold the configuration, inventory, and records as evidence in OptiTech, linked to the GDPR and ePrivacy controls, and publish the posture to your trust center.

Cookie consent rewards the same habit as the rest of compliance: decide once, do it properly, and keep the proof current. Get the banner and the records right, and both your regulators and your buyers get the same clean answer.

Ready to turn cookie consent into evidence you can prove? [Book a demo](https://optitech-sverige.se/contact-sales) and see how OptiTech connects your controls, records, and trust center.
