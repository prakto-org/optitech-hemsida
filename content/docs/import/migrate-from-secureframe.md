---
title: Migrate from Secureframe
subtitle: Move your compliance program from Secureframe to OptiTech
summary: >-
  Move from Secureframe to OptiTech: map Comply AI remediation to OptiTech
  auto-remediation, move built-in employee training without losing completion
  history, and rebuild cloud misconfiguration checks against your accounts.
enableTableOfContents: true
---

Secureframe's strengths are specific: Comply AI fixes cloud misconfigurations for you, and security awareness training is built into the platform rather than bolted on. Both have direct equivalents in OptiTech, so this guide is organized around not losing either, while adding what Secureframe lacks: NIS2 from the Swedish legal text, MSB and IMY flows, and Swedish integrations.

## Before you export

- **Training completion history matters.** If your ISO 27001 or SOC 2 audit period covers this year, your employees' completed training is audit evidence. Export it; don't plan to redo it.
- **List your remediation-enabled checks.** Note which cloud checks had Comply AI auto-remediation switched on, so you can re-enable the equivalents deliberately instead of discovering gaps later.

<Steps>

## Export from Secureframe

Export controls and test results, policies, personnel data with training completion records, and your vendor list. Include evidence exports for the current audit period.

## Import and map training history

Upload through **Settings**, then **Import**. Alongside the usual control mapping, personnel training records import with their completion dates, so your audit trail for awareness training stays unbroken. Future training runs in OptiTech's Swedish-language modules on Professional and Enterprise.

## Re-enable auto-remediation deliberately

Reconnect AWS, Azure, or GCP, and OptiTech's misconfiguration checks come online. For each check where you had Comply AI remediation active, decide per control: auto-fix via API, or route a ready-made ticket to the owner. OptiTech defaults to the ticket, so nothing changes your infrastructure without a decision.

## Add the Swedish layer and cut over

Connect Fortnox or Visma, BankID, and Kivra. When your cloud checks and training assignments are green, export a final archive and cancel.

</Steps>

## What changes when you switch

- **Remediation with a human in the loop by default**: auto-fix stays available, but it's opt-in per control
- **Training in Swedish**: including the NIS2 board training add-on that Secureframe has no equivalent for
- **NIS2, MSB, and IMY built in**: law-based requirements and real authority filing flows
- **A vendor your Nordic customers recognize**: EU data residency, EU ownership, pricing in SEK

<NeedHelp/>
