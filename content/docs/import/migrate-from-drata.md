---
title: Migrate from Drata
subtitle: Move your compliance program from Drata to OptiTech
summary: >-
  Move from Drata to OptiTech using Drata's API for a complete export: pull
  controls, monitors, and evidence programmatically, map monitor coverage to
  OptiTech integrations, and keep your audit period intact through the
  transition.
enableTableOfContents: true
---

Drata teams tend to be the most automation-heavy of any platform's customers, and that's exactly what makes the move straightforward: almost everything in Drata is reachable through its API, so the export is scriptable rather than a clicking exercise. What Drata can't give you is the Nordic layer: NIS2 from the Swedish legal text, MSB and IMY reporting, Fortnox and BankID, and a vendor your public sector customers can approve.

## Before you export

- **Inventory your monitors.** Drata's automated monitors are its core. List which ones actually gate your compliance (the rest are noise), so you can verify OptiTech's equivalent checks cover them at cutover.
- **Check your audit window.** If you're mid-period on a SOC 2 Type II, plan the cutover at a period boundary so one platform's evidence covers each period cleanly.

<Steps>

## Export through the Drata API

Use Drata's API to pull controls, monitor results, policies, personnel records, and evidence programmatically. A scripted export gives you complete JSON instead of piecemeal CSVs, and you can rerun it right before cutover so nothing created in the gap is lost.

## Map monitors to integrations

Upload the export through **Settings**, then **Import**. The assistant maps Drata controls to OptiTech's framework requirements, then shows a monitor-coverage view: which of your Drata monitors correspond to OptiTech's continuous checks, and which were manual in Drata but become automatic here (or the reverse, flagged as tasks).

## Keep your automation

If you had Drata wired into CI or internal dashboards through its API, the OptiTech API and CLI replace those calls on the Enterprise plan, including compliance checks that block deploys.

## Add the Nordic layer and cut over

Connect Fortnox or Visma, BankID, and Kivra alongside your existing integrations. Run both platforms until your monitors' replacements are green, rerun the API export one last time as an archive, then cancel.

</Steps>

## What changes when you switch

- **NIS2 from the source text**: Swedish law and MSBFS instead of a translated mapping, with the MSB incident flow built in
- **Monitor parity plus the Swedish checks**: employee-register verification against Fortnox that no US platform runs
- **API continuity**: your compliance-as-code setup moves over instead of dying with the subscription
- **EU data residency under EU ownership**, with pricing published in SEK

<NeedHelp/>
