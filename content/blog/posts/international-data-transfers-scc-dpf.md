---
title: 'International data transfers under GDPR: adequacy, SCCs, and the Data Privacy Framework'
description: How to move personal data outside the EU under GDPR and prove every transfer is safe.
excerpt: >-
  International data transfers are one of the trickiest parts of GDPR, and
  buyers now treat them as a gate. This guide covers when a transfer happens,
  the safeguards the law recognizes, and how OptiTech records each one as living
  evidence you can show on demand.
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
  title: 'International data transfers under GDPR: adequacy, SCCs, and the Data Privacy Framework - OptiTech'
  description: >-
    When a transfer outside the EU happens, how adequacy, SCCs, and the Data
    Privacy Framework protect it, and how OptiTech records each transfer as
    living evidence.
  keywords: []
  noindex: false
  ogTitle: 'International data transfers under GDPR: adequacy, SCCs, and the Data Privacy Framework - OptiTech'
  ogDescription: >-
    When a transfer outside the EU happens, how adequacy, SCCs, and the Data
    Privacy Framework protect it, and how OptiTech records each transfer as
    living evidence.
  image: null
---

Most companies transfer personal data outside the EU without ever deciding to. You sign up for a support tool, connect an analytics service, or route email through a provider with servers in another country, and personal data crosses a border. Nobody signed off on it, and nobody wrote it down. Then a customer's security review asks where their data goes, and you can't answer without a week of research.

International data transfers are one of the touchiest parts of GDPR, and they're getting more attention, not less. Chapter V of the regulation sets strict rules for moving personal data outside the EU and EES, and buyers now treat those rules as a gate. This guide walks through when a transfer happens, the safeguards the law recognizes, and how OptiTech records each one as living evidence you can show on demand.

## When a transfer actually happens

A transfer to a "third country" happens whenever personal data becomes accessible from outside the EU or EES. That's broader than most teams expect. Shipping a backup abroad counts, but so does giving a support agent in another country a login, or using a vendor whose staff can view your data from outside the bloc. Remote access is a transfer.

This matters because the moment a transfer happens, Chapter V kicks in. You can't move personal data to a third country unless you have a lawful basis for the processing and a valid transfer mechanism on top of it. The mechanism is the extra safeguard that protects the data once it leaves the EU's legal reach. Get the basis right but skip the mechanism, and the transfer is still unlawful.

## Adequacy decisions: the easy path

The simplest safeguard is one you don't have to build. The European Commission can decide that a country outside the EU offers an "adequate" level of data protection, essentially equivalent to what GDPR requires. When that adequacy decision exists, you can transfer personal data there as freely as you would within the EU, with no extra contract required.

The list is short and it changes. Countries like Switzerland, the United Kingdom, and Japan hold adequacy decisions, along with a handful of others. The catch is that these decisions get reviewed, and they can be challenged or withdrawn. So "we rely on adequacy" isn't a set-and-forget answer. You need to know which decision covers each transfer, and you need to notice when one goes under review.

## Standard contractual clauses

When there's no adequacy decision, the workhorse safeguard is the standard contractual clauses, or SCCs. These are pre-approved contract templates the Commission publishes, and both sides of a transfer sign them. The clauses bind the importer to protect the data to EU standards even though they sit outside EU jurisdiction.

SCCs aren't a formality you sign once and file. Since the 2021 modules, you have to pick the right module for your relationship (controller to controller, controller to processor, and so on), fill in the annexes that describe the actual data and safeguards, and keep them current as the relationship changes. An SCC with blank annexes or the wrong module protects nobody. In OptiTech, each SCC lives attached to the vendor and the transfer it covers, so you always know which clauses apply where.

## The EU-US Data Privacy Framework

The United States is the destination that trips up the most companies, because so many popular tools are American. For years, transfers to the US lived in legal uncertainty after the Schrems II ruling struck down the previous framework.

The EU-US Data Privacy Framework, adopted in 2023, gives you a cleaner path. If a US company self-certifies under the framework and appears on the official list, transfers to that company are covered by an adequacy decision, so you don't need separate SCCs for them. But the framework only covers certified companies, and a certification can lapse. So you still have to check that each US vendor is actually on the list, and re-check it, rather than assuming every American provider qualifies.

## Transfer impact assessments

For transfers that rely on SCCs, the law expects more than a signed contract. After Schrems II, you're expected to run a transfer impact assessment, or TIA: a documented check on whether the destination country's laws, especially government access to data, would undermine the protection the SCCs promise. If they would, you have to add supplementary measures like strong encryption, or reconsider the transfer.

A TIA is exactly the kind of analysis that's easy to do once and impossible to find later. OptiTech keeps each assessment attached to the transfer it justifies, with the date, the reasoning, and the measures you added. When an auditor asks why a transfer is safe, you show the assessment instead of reconstructing it from memory.

## Why data residency is a buyer's question now

Every safeguard above is a way to make a risky transfer defensible. The other option is to avoid the transfer in the first place, and that's why data residency has become a selling point. If your data stays in the EU, most of Chapter V simply doesn't apply, and your customer's own compliance gets easier.

OptiTech keeps customer data in the EU, in Stockholm and Frankfurt, with no transfer outside the bloc for the core service. For a buyer running their own security review, that's the answer they want to hear, because it removes an entire category of questions. "Where does our data live?" has a one-word answer, and "what safeguards cover transfers out?" becomes "there aren't any."

## Record every transfer as living evidence

You can't manage transfers you can't see. The failure mode usually isn't a bad safeguard. It's a transfer nobody knew about, running through a tool someone added last quarter. The fix is a single register that treats every transfer as evidence, not a note in a spreadsheet.

In the OptiTech Console, each transfer records three things: where the data goes, why, and what safeguard covers it. The destination country, the vendor, the mechanism (adequacy, SCCs, or the Data Privacy Framework), and the transfer impact assessment all link together. When a safeguard changes, when an adequacy decision goes under review, or when a vendor drops off the framework list, the transfer that depends on it is easy to find and fix.

That same register feeds your trust center. Instead of answering the "where does our data go" question by email every time, you publish it. Buyers see your residency and your transfer posture without pulling your team into a research project, and your security reviews start to answer themselves.

<Admonition type="tip" title="Name the safeguard for every transfer">
A transfer without a named safeguard is a finding waiting to happen. For each vendor that can access personal data from outside the EU, record the destination and the mechanism (adequacy, SCCs, or the Data Privacy Framework), so a security review never catches you guessing.
</Admonition>

## Getting started

You don't need a perfect map on day one. A realistic first pass looks like this:

1. **List every vendor that can access personal data**, including ones whose staff work outside the EU. Remote access counts.
2. **Name the safeguard for each transfer**: adequacy decision, SCCs, or the Data Privacy Framework. Flag any transfer that has none.
3. **Run transfer impact assessments** for the transfers that rely on SCCs, and attach the reasoning.
4. **Publish your residency and transfer posture** to a trust center so the work starts answering security reviews for you.

International transfers reward the same habit as the rest of GDPR: record the decision once, keep it current, and show it on demand. Do that, and a question that used to stall deals becomes a link you can send.

Ready to make every data transfer defensible? [Book a demo](https://optitech-sverige.se/contact-sales) and see how OptiTech records each transfer, its destination, and its safeguard as living evidence.
