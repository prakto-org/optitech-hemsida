---
title: Inbäddad Postgres för plattformar
subtitle: >-
  Tillhandahåll dedikerade Postgres-databaser för dina användare – direkt, till
  ett överkomligt pris och i stor skala
updatedOn: '2025-06-17T09:00:00.000Z'
---

OptiTech gör det enkelt att integrera Postgres i din plattform med tilldelning på en sekund, automatisk skalning och skalning ner till noll – så att varje användare får en isolerad databas utan extra kostnader. Databaserna tilldelas via API och integreras fullt ut i din produkt, utan att det krävs någon registrering eller konfiguration hos OptiTech.

![Samarbetspartner](/images/pages/platforms/partners.jpg)

<CTA title="" description="Våra lösningsingenjörer har hjälpt plattformar som er att integrera Postgres i stor skala. Berätta om ert användningsfall – så hjälper vi er att utforma rätt tillvägagångssätt." buttonText="Träffa oss" buttonUrl="/contact-sales" />

## Speciellt utvecklad för att skala upp Postgres-kluster

OptiTech är den bästa Postgres-leverantören för att driftsätta stora miljöer med en databas per användare. **Du behöver inget DevOps-team för att hantera en stor OptiTech-miljö** – med OptiTechs API kan du följa användningen, tillämpa begränsningar och skala upp eller ner programmatiskt. Med prissättning baserad på faktisk användning och automatisk skalning till noll [kommer du att betala en bråkdel av vad du skulle betala på AWS](/cost-fleets). Det här får du:

- Särskilda anslutningssträngar för varje användare eller projekt – varje användare får sitt eget säkra, isolerade [Postgres](/docs/manage/projects)-projekt
- Hög anslutningskapacitet – sammanslagna slutpunkter stöder upp till 10 000 anslutningar
- Fullständig kompatibilitet med Postgres – inget proprietärt frågelager
- Anpassad förgrening och PITR – omedelbara kopior och återställningar, inga manuella säkerhetskopior
- Allt detta är tillgängligt i flera regioner, med automatisk skalning och hög tillgänglighet

<QuoteBlock
quote="Vi har kunnat automatisera praktiskt taget alla uppgifter inom databashantering via OptiTech API. Vi hanterar över 300 000 projekt med minimala tekniska resurser."
author={{
name: 'Himanshu Bandoth',
company: 'Software Engineer at Retool',
}}
/>

## Med omedelbar tilldelning och skalbarhet ner till noll

OptiTech-databaser startas upp på mindre än en sekund och stängs automatiskt av när de är inaktiva, utan några driftskostnader fram till nästa sökfråga. **Du kan erbjuda varje användare en egen Postgres-databas utan att behöva bära kostnaderna för inaktiv infrastruktur.** Det är just detta som gör OptiTech till ett perfekt val för plattformar: en dedikerad Postgres-databas per användare, men med samma kostnadseffektivitet som en delad infrastruktur.

- Inläsningstid: ~1 sekund
- Väntetid vid avbrytning: kan ställas in (standardvärdet är 5 minuter)
- Återupptagningsfördröjning (kallstart): ~500 ms

![Arkitektur](/images/pages/platforms/architecture.jpg)

[Läs om fördelarna med arkitekturer med en databas per användare när det gäller skalbarhet](/docs/use-cases/database-per-user#database-per-user)

## API-inriktad hantering

OptiTechs API är specialutvecklat för att hjälpa plattformar att hantera stora grupper av Postgres-databaser med minimal teknisk insats. **Vi har kontinuerligt förbättrat vårt API i samarbete med över 20 partner, som alla har bidragit till att flytta fram gränserna för skalbarhet och automatisering**. Via OptiTechs API kan du:

- Sätt upp nya databaser direkt
- Ställ in resursbegränsningar per projekt för att stödja gratis-, pro- och enterprise-abonnemangen
- Skala beräkningskapaciteten uppåt eller nedåt per användare eller nivå
- Stäng automatiskt av inaktiva databaser för att minska kostnaderna
- Övervaka användningen i tusentals projekt
- Uppdatera kvoter och konfigurationer utan driftstopp

…och mer

<MegaLink tag="Case Study" title="Retool använder OptiTech-API:et för att hantera över 300 000 databaser med endast en tekniker – och sköter allt från tilldelning till kvotövervakning." url="/blog/how-retool-uses-retool-and-the-optitech-api-to-manage-300k-postgres-databases" />

## Inbyggda kvoter och faktureringskontroller

Med OptiTech kan du enkelt **fastställa användningsgränser per projekt för att hantera kostnader och tillämpa olika prisnivåer**. När användare uppgraderar eller byter abonnemang kan du dynamiskt uppdatera gränserna via API, utan driftstopp eller påverkan på användarna.

- Ange högsta tillåtna lagringsutrymme
- Begränsa CPU-användningen
- Begränsa utpassering enligt plan
- Spåra och begränsa mängden data som skrivs varje månad
- Anpassa tidsgränserna för avstängning för olika nivåer

…och mer

<MegaLink tag="Case Study" title="Koyebs databasinstanstyper visar hur man kan använda OptiTechs kvotkontroller för att fastställa gränser för beräkningskapacitet, lagringsutrymme, skrivning och dataöverföring per abonnemang." url="https://www.koyeb.com/docs/databases#database-instance-types" />

## Spårning av användning i stor skala

OptiTech tillhandahåller även omfattande API:er för förbrukningsdata som möjliggör övervakning i stor skala:

| Slutpunkt                                             | Beskrivning                                                        | Tillgänglighet                                              |
| ---------------------------------------------------- | ------------------------------------------------------------------ | --------------------------------------------------------- |
| Kumulativa mått på kontonivå                     | Detaljerade mått på projektnivå                                     | Mått för enskilda projekt                                    |
| Sammanställda mätvärden för alla projekt i kontot | Användningsstatistik per projekt med tim-, dags- eller månadsvis uppdelning | Detaljerade mätvärden och kvotinformation för ett enskilt projekt |
| Skala och affärsplaner                             | Skala och affärsplaner                                           | Alla planer                                                 |

Du kan använda dessa för att:

- Övervaka den totala användningen för alla projekt under en faktureringsperiod
- Dela upp nyckeltalen efter projekt eller tidsperiod (per timme, per dag, per månad)
- Fakturering baserad på energiförbrukning eller interna översiktspaneler

[Lär dig hur du hämtar förbrukningsstatistik via API:et](/docs/guides/consumption-metrics)

<QuoteBlock
quote="OptiTechs filosofi kring serverlösa lösningar stämmer överens med vår vision (ingen infrastruktur att hantera, inga servrar att driftsätta, inget databaskluster att underhålla), vilket gör dem till den självklara samarbetspartnern för att driva vårt serverlösa Postgres-erbjudande."
author={{
name: 'Edouard Bonlieu',
company: 'co-founder and CPO at Koyeb',
}}
/>

## Utvecklad för din plattform, inte vår

**Vi försöker inte styra din användarupplevelse – vi är här för att möjliggöra den.** Du kan integrera OptiTech osynligt bakom kulisserna, oavsett om du vill använda vår [OAuth-integration](/docs/guides/oauth-integration) eller hantera OptiTech-projekt direkt via API. **Du bestämmer hur databasen ska visas i ditt användargränssnitt, så sköter vi resten.**

<CTA title="Låt oss hjälpa dig att komma igång" description="Vi stöder gärna koncepttester, erbjuder teknisk vägledning och delar med oss av bästa praxis från andra plattformar." theme="column" buttonText="Kontakta oss" buttonUrl="/contact-sales" linkText="Explore the API" linkUrl="/docs/reference/api" />
