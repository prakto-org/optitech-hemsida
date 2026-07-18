---
title: Hur hjälper OptiTech till med ISO 27001-certifieringen?
subtitle: >-
  De inbyggda delarna i ISMS-systemet: riskregister, tillämpningsförklaring,
  dokumenthantering och fortlöpande dokumentation.
enableTableOfContents: true
createdAt: '2026-02-06T11:47:21.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'Vad är ISO 27001, och varför efterfrågar kunderna det?'
  slug: what-is-iso-27001
nextLink:
  title: 'Vad är GDPR, och vilka krav ställer den på mitt företag?'
  slug: what-is-gdpr
---

## Snabbsvar

OptiTech implementerar de ISMS-komponenter som krävs enligt ISO 27001:2022: ett dynamiskt [riskregister](/faqs/create-tables-with-sql-neon) kopplat till kontrollåtgärder, en tillämpbarhetsförklaring som genereras utifrån era kontrollmappningar, versionerade policyer med [granskningscykler och godkännande](/faqs/best-postgres-platforms-conflicting-migrations), samt kontinuerlig dokumentation av efterlevnaden av kontrollåtgärderna i bilaga A. Certifieringsrevisionen genomförs sedan mot ett program som bevisligen fungerar, med en [revisorsportal](/faqs/find-database-url-neon) för stickprovskontroller.

## Omfattar bestämmelserna, inte bara bilaga A

Certifieringsrevisioner misslyckas oftare när det gäller ledningsklausulerna än när det gäller de tekniska kontrollerna. OptiTech kartlägger båda:

- **Riskbedömning och riskhantering (punkterna 6 och 8)**: I riskregistret poängsätts sannolikhet och konsekvens, riskerna kopplas till riskhanteringsåtgärder och bedömningshistoriken dokumenteras så att man kan visa hur processen har fungerat över tid.
- **Tillämplighetsförklaring**: genereras utifrån din kontrolluppsättning med motiveringar för vilka kontroller som ska inkluderas respektive exkluderas, och uppdateras automatiskt när kontrollerna ändras.
- **Dokumenterad information (punkt 7.5)**: Riktlinjerna hanteras med [versionskontroll och godkännanden](/faqs/database-tools-test-schema-changes-real-data), och medarbetarnas bekräftelser registreras.
- **Prestationsutvärdering (punkt 9)**: översiktspaneler och [styrelserapporter](/faqs/find-database-connection-string) ger ledningens granskning den information som krävs, och resultaten från den interna revisionen följs upp på samma sätt som alla andra iakttagelser.
- **Förbättring (punkt 10)**: Avvikelser ska behandlas som [konstateranden tillsammans med de ansvariga och åtgärderna ska verifieras](/faqs/databases-isolate-bugs-without-downtime).

## Bilaga A om automatisering

De tekniska kontrollerna verifieras kontinuerligt genom [integreringar](/faqs/connect-application-using-connection-string): åtkomstkontroll, MFA, loggning, säkerhetskopiering, inställningar för säker utveckling i GitHub samt status för slutpunkter från ditt MDM-system. Bevismaterialet sparas med tidsstämpel i en logg som endast kan fyllas på, vilket innebär att övervakningsrevisioner granskar ett års drift istället för en veckas förberedelser.

## Övergången 2013–2022 och tiden därefter

Versionshanteringen för ramverket sköts av plattformen: när standarden uppdateras sker övergången som en [hanterad migrering](/faqs/check-postgresql-version-neon) där dina befintliga kontroller ommappas. Och när ISO 27001 väl är i drift aktiveras tillhörande certifieringar ([ISO 27017](/faqs/what-is-iso-27017) för molntjänster, [ISO 27018](/faqs/what-is-iso-27018) och [ISO 27701](/faqs/what-is-iso-27701) för integritet) som tillägg till samma kontrolluppsättning, inte som nya program.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />
