---
title: >-
  Hur flyttar jag en befintlig OptiTech-arbetsmiljö till en annan dataregion
  inom EU?
subtitle: >-
  Begär en organiserad flytt från supporten, uppdatera dina register över
  hanteringen och kontrollera dokumentationsloggen efter flytten.
enableTableOfContents: true
createdAt: '2025-11-17T16:35:50.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: >-
    Kan jag ändra regionen för datalagring för mitt befintliga
    OptiTech-arbetsutrymme?
  slug: change-project-region
nextLink:
  title: >-
    Vad är det billigaste sättet för ett litet företag att uppfylla kraven i
    NIS2?
  slug: cheapest-ways-run-postgres-database-low-traffic
---

## Snabbsvar

Flytt av regioner sker under kontrollerade former: skicka in en supportförfrågan, kom överens om ett underhållsfönster, så flyttar OptiTech arbetsytan med hela historiken intakt. Den skrivskyddade loggen migreras med verifiering via hashkedja, vilket innebär att revisionsspårets integritet kan bevisas under hela flytten. Din del av arbetet består i att uppdatera dina egna efterlevnadsregister i efterhand.

## Flyttprocessen

1. **Skapa en supportförfrågan** från konsolen och ange målregion samt orsaken (avtalsmässig, juridisk eller organisatorisk).
2. **Läs igenom sammanfattningen av konsekvenserna.** Supporten bekräftar underhållsperioden (vanligtvis utanför kontorstid), den nya serverplatsen och de uppdaterade villkoren för databehandling.
3. **Flytten pågår.** Arbetsytans data, dokument, bevislogg och konfiguration överförs. Integrationerna återansluts automatiskt; schemalagda kontroller återupptas i den nya regionen.
4. **Kontrollera.** Bekräfta regionen i arbetsytans inställningar ([så här kontrollerar du din region](/faqs/check-neon-project-region)), gör stickprovskontroller av att loggen är sammanhängande och bekräfta att integrationerna visar grönt.

## Uppdatera din egen dokumentation

Det som teamen ofta glömmer: i ert efterlevnadsprogram anges var OptiTech behandlar era uppgifter. Uppdatera detta efter en flytt:

- Dina **GDPR-register över behandling** och bilagan till databehandlingsavtalet där behandlingsplatserna anges.
- Din post i **leverantörsregistret** för OptiTech, inklusive den nya regionen. Om du genomför leverantörsgranskningar via plattformen räcker det med att ändra ett enda fält.
- Alla **kundinriktade uttalanden** (Trust Center, säkerhetsdokumentation) där datalagringsplatser nämns.

Plattformen markerar dessa uppföljningar som uppgifter efter en omlokalisering, så att de hamnar i ditt vanliga arbetsflöde istället för att du ska behöva hålla reda på dem själv.

## Driftstopp och historik

Räkna med en kort period då data endast är läsbara under den slutliga synkroniseringen; inga data går förlorade och det uppstår inga luckor i dokumentationen. Historiska uppgifter behåller sina ursprungliga tidsstämplar, och [översikten över ditt efterlevnadsläge vid en](/faqs/databases-reproduce-bugs-production-data) viss tidpunkt fungerar även över flyttgränsen. Om en revisor någonsin ställer frågor om själva flytten, loggas flytten som en administrativ händelse med datum och ansvarig person.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />
