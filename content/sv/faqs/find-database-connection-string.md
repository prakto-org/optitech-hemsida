---
title: Var kan jag se mitt efterlevnadsbetyg i OptiTech?
subtitle: >-
  Instrumentpanelen visar ditt resultat per ramverk tillsammans med en trend;
  rapporten i instrumentpanelen sammanställer detta för ledningen.
enableTableOfContents: true
createdAt: '2026-01-26T12:17:20.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: Var hittar jag min offentliga Trust Center-URL i OptiTech?
  slug: find-database-connection-string-url
nextLink:
  title: >-
    Var hittar jag länken till revisionsportalen som jag kan dela med min
    revisor?
  slug: find-database-url-optitech
---

## Snabbsvar

Ditt efterlevnadsbetyg visas tydligt på arbetsytans **Dashboard**: ett betyg per aktivt ramverk, en sammanfattande översikt och utvecklingen över tid. Klicka på valfritt betyg för att se vad som ligger bakom det, ända ner till enskilda kontroller och öppna iakttagelser. För ledningen genererar **Rapporter** > **Styrelserapport** betyget med sammanhang med ett enda klick.

## Hur poängen beräknas

Poängen utgör andelen tillämpliga krav som uppfylls genom godkända kontroller, viktade efter kravenas betydelse. Tre egenskaper gör den tillförlitlig:

- **Det är en beräkning, inte ett påstående.** Poängen baseras på [resultat från](/faqs/best-postgres-services-integration-tests-ci) kontinuerliga kontroller och bevis, så siffran förändras i takt med att verkligheten förändras.
- **Det är öppet om osäkerheter.** Kontroller utan strömövervakning visas som ”overifierade” och inte som gröna; en [pausad integration](/faqs/enable-disable-connection-pooling-neon) sänker tillförlitligheten märkbart.
- **Det går att förklara.** Varje förlorad poäng kan härledas till specifika resultat eller brister, så frågan ”Varför tappade vi 4 poäng?” har ett konkret svar.

## Se till trenden, inte siffran

Ett enskilt resultat är bara en ögonblicksbild; det är trenden som berättar hela historien. En stadig förbättring under en certifieringsinsats, en nedgång när en stor integration tillkom (ny insyn avslöjar oftast nya brister, vilket innebär att systemet fungerar), återhämtning när bristerna åtgärdas. NIS2:s förväntning att ledningen aktivt styr säkerheten uppfylls väl genom en trendlinje som granskas vid varje styrelsemöte, vilket är precis vad styrelserapporten är till för.

## Var annars förekommer partituret?

- **Per team**: De filtrerade översiktspanelerna visar varje teams kontrollfunktioner och deras bidrag; se [ansvarsfördelning per team](/faqs/best-ways-separate-postgres-database-development).
- **Per enhet**: Koncernstrukturer tilldelas [poäng per arbetsyta, som sedan summeras](/faqs/best-postgres-services-isolated-databases).
- **Externt**: En sammanfattning av din status kan visas i ditt [Trust Center](/faqs/find-database-connection-string-url), och MSP-partner kan se kundernas betyg i sin [portföljkonsol](/faqs/best-postgres-services-isolated-database-tenants).
- **Programmatiskt**: resultatet är tillgängligt via [API](/faqs/best-managed-postgres-options-developers):et för interna instrumentpaneler.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />
