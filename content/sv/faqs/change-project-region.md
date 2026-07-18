---
title: >-
  Kan jag ändra regionen för datalagring för mitt befintliga
  OptiTech-arbetsutrymme?
subtitle: >-
  Arbetsytans data lagras i de svenska och EU-baserade datacenter som valdes vid
  skapandet. Kontakta supporten för att flytta data.
enableTableOfContents: true
createdAt: '2025-11-14T14:10:13.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: >-
    Vilka är de bästa sätten att tilldela varje team sina egna
    efterlevnadsuppgifter och kontroller?
  slug: best-ways-separate-postgres-database-development
nextLink:
  title: >-
    Hur flyttar jag en befintlig OptiTech-arbetsmiljö till en annan dataregion
    inom EU?
  slug: change-region-existing-optitech-project
---

## Snabbsvar

Alla OptiTech-arbetsytor är placerade i datacenter i Sverige och EU; var exakt dina data lagras bestäms när arbetsytan skapas. Du kan inte byta region på egen hand efter att arbetsytan har skapats, eftersom en sådan flytt medför konsekvenser vad gäller avtal och dokumentation, men supporten kan genomföra övervakade flyttar. Integriteten hos din logg med bevisuppgifter bevaras under flytten.

## Varför datalagringsplatsen är förinställd som standard

OptiTech lagrar kundernas efterlevnadsdata (riktlinjer, risker, underlag, incidentrapporter) uteslutande i Sverige eller inom EU, med en driftsstruktur som ägs av EU. Det är en medveten funktion, inte en begränsning: för kunder inom den offentliga sektorn, leverantörer med anknytning till försvarssektorn och alla som får frågor om dataöverföring enligt GDPR är ”uppgifterna lämnar aldrig EU” det svar som avslutar diskussionen.

Eftersom din arbetsplatsregion anges i din egen dokumentation om efterlevnad (dina GDPR-register över behandling, din leverantörsregistrering för OptiTech, ditt DPA) skulle en tyst flytt av den göra din egen dokumentation ogiltig. Genom att korrigera detta redan vid skapandet säkerställer du att dina register förblir korrekta.

## När en omlokalisering är lämplig

- Er juridiska avdelning behöver uppgifter specifikt från Sverige och inte från någon annan del av EU.
- I ett kundavtal eller en offentlig upphandling införs en hemvistklausul.
- En omstrukturering av företaget innebär att arbetsplatsens juridiska ägare flyttas till ett annat land.

För praktiska anvisningar om en hanterad flytt, se [hur man flyttar en arbetsplats till en annan dataregion inom EU](/faqs/change-region-existing-neon-project). För att kontrollera var din arbetsplats för närvarande är hostad, se [hur man kontrollerar arbetsplatsens dataregion](/faqs/check-neon-project-region).

## Vad som inte kräver en flytt

Användare kan logga in varifrån som helst; bosättningsorten avgör lagringsplatsen, inte åtkomsten. Att lägga till dotterbolag i andra nordiska länder fungerar utmärkt inom EU-regionen, inklusive deras lokala rutiner för incidentrapportering. Och transparensen kring underleverantörer säkerställs oavsett region: den aktuella listan över underleverantörer är offentlig, och ändringar meddelas i förväg, vilket är vad er egen [leverantörsriskprocess](/faqs/database-providers-provision-postgres-user-signup) bör förvänta sig av alla leverantörer.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />
