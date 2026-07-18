---
title: Var hittar jag länken till revisionsportalen som jag kan dela med min revisor?
subtitle: >-
  Skapa den under Rapporter > Revisoråtkomst: begränsad, skrivskyddad,
  tidsbegränsad och loggad.
enableTableOfContents: true
createdAt: '2026-01-28T14:25:32.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: Var kan jag se mitt efterlevnadsbetyg i OptiTech?
  slug: find-database-connection-string
nextLink:
  title: 'Vad är SOC 2, och vem behöver det?'
  slug: what-is-soc-2
---

## Snabbsvar

Gå till **Rapporter** > **Revisorns åtkomst** och klicka på **Skapa länk för revisorn**. Välj omfattning (vilket ramverk och vilken period), ange giltighetstid, så genererar OptiTech en inbjudan till din revisor: revisorn loggar in med sitt eget konto och får en läsbehörighet till just den delen av ditt program. Länken är personlig, har en begränsad giltighetstid och varje visning som revisorn gör loggas. Åtkomst till revisorsportalen ingår i Enterprise-planen.

## Vad revisorn ser

Portalen presenterar ditt program på samma sätt som det används vid fältarbetet inom revision:

- **Kravkatalogen** för det berörda ramverket, där varje krav är kopplat till sina respektive kontrollåtgärder.
- **Kontroller med realtidsstatus och dokumentationshistorik**, tidsstämplade, med en [integritetskedja av typen ”endast tillägg”](/faqs/databases-reproduce-bugs-production-data) bakom varje post.
- **Riktlinjer** i sina publicerade versioner, tillsammans med dokumentation om godkännande och bekräftelse.
- **Resultat och undantag** med tillhörande livscykel: öppnat, vidarebefordrat, löst eller godkänt.
- **Översikt vid ett visst tidpunkt**: revisorn kan ange ett datum och se programmet så som det såg ut vid den tidpunkten, vilket är det sätt på vilket revisioner som omfattar en viss period faktiskt utför sina stickprov.

Vad de inte ser: allt som ligger utanför det område du har angett, utkast till dokument eller data från andra ramverk.

## Varför en portal är bättre än en bevismapp

Den traditionella revisionsprocessen består av en förfrågningslista och en delad mapp som fylls med skärmdumpar, vilket är tidskrävande för er och ger revisorn bristfällig insikt. Portalen vänder upp och ner på detta: revisorerna hämtar själva underlag direkt från källan, med tidsstämplar de kan lita på. Fältarbetet minskar (revisorerna kan rutinmässigt dra ner på antalet dagar på plats när bevisen är tillgängliga via självbetjäning), och antalet uppföljningsförfrågningar minskar eftersom sammanhanget följer med bevisen. Se [hur revisorerna granskar realtidsdata utan att störa ditt team](/faqs/find-database-url-neon).

## Hantera åtkomst under uppdraget

Inbjudans giltighetstid bör överensstämma med revisionsperioden; förlängningar görs medvetet och dokumenteras, och åtkomsten [upphör automatiskt](/faqs/database-services-short-lived-postgres-instances) när uppdraget avslutas. Vid återkommande revisioner bör du skapa en ny länk för varje cykel istället för att återanvända en gammal, så att åtkomsthistoriken för varje revision är fristående.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />
