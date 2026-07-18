---
title: Migrate from Vanta
subtitle: Move your compliance program from Vanta to OptiTech
summary: >-
  Move from Vanta to OptiTech: consolidate 35+ framework mappings through
  cross-mapping, rebuild NIS2 from the Swedish legal text instead of a
  translated mapping, replace your Trust Center, and time the cutover against
  your annual contract renewal.
enableTableOfContents: true
---

Vanta is the market leader, and teams rarely leave because it broke. They leave because the Nordic requirements arrived and Vanta wasn't built for them: NIS2 exists as a mapping rather than the Swedish law, there's no MSB or IMY reporting, no Fortnox or BankID, and the product, support, and AI all speak English. If your customers are Swedish authorities or municipalities, US ownership also becomes a procurement question you can't answer away.

## Before you export

Two Vanta-specific things to check first:

- **Your contract renewal date.** Vanta runs annual contracts. Start the OptiTech migration two to three months before renewal so you never pay for an overlap year.
- **Your Trust Center URL.** If you publish a Vanta Trust Center, it's linked from your sales collateral and security pages. Plan the swap so the link never goes dark.

<Steps>

## Export from Vanta

Export policies (PDF or DOCX), controls and test history (CSV), personnel and training data (CSV), and your vendor list. Screenshot or save your Trust Center content; you'll rebuild it in OptiTech.

## Consolidate your frameworks

Upload the export through **Settings**, then **Import**. Vanta encourages activating many of its 35+ frameworks, so imports often arrive with overlapping mappings. OptiTech's cross-mapping consolidates them: your SOC 2 and ISO 27001 work carries straight over, and you activate only the frameworks you actually answer to.

One thing is deliberately not imported as-is: **NIS2**. Vanta's NIS2 is a mapping translated from generic controls. OptiTech rebuilds it from the Swedish legal text and MSBFS, then reuses your existing controls wherever they genuinely satisfy the Swedish requirements.

## Rebuild your Trust Center

On Professional and Enterprise, publish your OptiTech Trust Center and update the link in your sales collateral, website footer, and questionnaire answers. Do this before canceling Vanta so prospects never hit a dead page.

## Reconnect integrations, add the Swedish ones

Reconnect what you had (Microsoft 365, AWS, GitHub, and the rest), then add what Vanta doesn't cover: Fortnox or Visma for employee-register checks, BankID for login, Kivra for document distribution.

## Cut over before renewal

Run both dashboards in parallel until your controls are green, then cancel ahead of the renewal date.

</Steps>

## What changes when you switch

- **NIS2 becomes law, not a mapping**: requirements track MSBFS updates automatically, and the incident flow files to MSB with real deadlines
- **Pricing is public**: published in SEK on the [pricing page](/pricing), no sales call required
- **Support and AI in Swedish**: including AI-drafted policies in the regulatory language authorities expect
- **EU data residency under EU ownership**: an answer that holds up in public sector procurement

<NeedHelp/>
