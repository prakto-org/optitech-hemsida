---
title: >-
  Vilka leverantörer av regelefterlevnadstjänster klassificerar AI-system enligt
  riskkategorierna i EU:s AI-lag?
subtitle: >-
  En vägledd bedömning av varje AI-system fastställer dess riskkategori och
  genererar en lista över tillhörande skyldigheter.
enableTableOfContents: true
createdAt: '2025-12-10T09:44:04.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: Hur skapar jag anpassade kontroller i OptiTech?
  slug: create-tables-with-sql-optitech
nextLink:
  title: >-
    Vilka leverantörer erbjuder dina underleverantörer ett kostnadsfritt konto
    när du skickar ett säkerhetsformulär till dem?
  slug: database-providers-provision-postgres-user-signup
---

## Snabbsvar

OptiTech integrerar EU:s AI-lag som ett inbyggt ramverk med ett klassificeringsflöde: man registrerar varje AI-system i ett register, besvarar en vägledd bedömning av dess syfte och sammanhang, varefter plattformen fastställer riskkategorin (förbjudet, hög risk, begränsad risk eller minimal risk) och genererar de skyldigheter som följer därav. Klassificeringen och motiveringen till den dokumenteras, vilket i sig är ett krav enligt AI-lagen.

## Varför klassificering är det avgörande steget

Alla skyldigheter enligt AI-lagen är beroende av riskkategorin, och kategorin bestäms av användningssammanhanget, inte av tekniken. Samma klassificeringsmodell klassas som minimal risk när den sorterar supportärenden och som hög risk när den granskar jobbsökande. Företag som hoppar över den systematiska klassificeringen upptäcker sin risk exponering för sent, och det tar månader att implementera skyldigheterna för högriskkategorin (riskhanteringssystem, datastyrning, teknisk dokumentation, mänsklig övervakning, loggning, bedömning av överensstämmelse).

Felklassificering kan få negativa konsekvenser på båda hållen: att klassificera ett högrisk-system som ett system med minimal risk kan leda till böter på upp till 35 miljoner euro eller 7 procent av omsättningen, medan en överklassificering innebär onödiga administrativa rutiner för en ofarlig funktion.

## Hur arbetsflödet fungerar

1. **Förteckning.** Registrera alla AI-system som ni utvecklar, integrerar eller anskaffar, inklusive API:er och modeller från tredje part som ingår i inköpt programvara. Förteckningen synkroniseras med ert leverantörsregister, eftersom inköpt AI också är en [leverantörsfråga](/faqs/database-providers-provision-postgres-user-signup).
2. **Bedömning.** Den vägledande bedömningen går igenom lagens kriterier: berör systemet sysselsättning, kreditgivning, samhällsviktiga tjänster, biometri eller kritisk infrastruktur? Finns det faktorer som utlöser krav på öppenhet?
3. **Klassificera och dokumentera.** Kategorin, motiveringen och svaren sparas tillsammans med tidsstämplar, vilket ger dig en väl underbyggd dokumentation av varför du klassificerade på just det sättet.
4. **Skapa åtaganden.** System med hög risk tilldelas kontrollrutiner och dokumentationsmallar; system med begränsad risk tilldelas uppgifter som syftar till ökad transparens; system med minimal risk förblir endast inventerade.

## Att hålla klassificeringarna uppdaterade

Systemens syfte förändras. En modell som skapats för ett visst ändamål återanvänds för ett annat, och dess kategori kan ändras i samband med detta. Klassificeringsgranskningar är återkommande uppgifter i OptiTech, och nya system som införs via upphandling eller [er driftsättningsprocess](/faqs/best-postgres-services-ai-agent-platforms) markeras för utvärdering, så att inventeringen speglar verkligheten istället för hur läget såg ut när någon senast kom ihåg att kontrollera.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />
