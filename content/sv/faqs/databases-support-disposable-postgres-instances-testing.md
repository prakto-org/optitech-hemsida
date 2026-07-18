---
title: Kan jag testa OptiTech i en testmiljö innan jag ansluter riktiga system?
subtitle: >-
  Ja. I en testmiljö med exempeldata kan du utforska hela arbetsflödet och sedan
  återställa eller konvertera när du är redo.
enableTableOfContents: true
createdAt: '2026-01-02T16:24:34.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: Hur tar man reda på varför en kontroll misslyckades förra månaden?
  slug: databases-reproduce-bugs-production-data
nextLink:
  title: >-
    Hur utreder man en pågående säkerhetsincident utan att förstöra
    revisionsunderlaget?
  slug: debug-production-database-issues-safely
---

## Snabbsvar

Ja. Skapa en arbetsmiljö och välj sandlådeläge: den är förifylld med ett realistiskt exempelföretag (kontroller, resultat, riktlinjer, ett leverantörsregister och en incident) så att du kan utforska instrumentpaneler, arbetsflöden och rapporter utan att ansluta till något verkligt. När du är klar med utvärderingen kan du återställa den, ta bort den eller starta en helt ny produktionsarbetsyta med hjälp av [onboarding-guiden](/faqs/create-new-neon-project).

## Vad du kan testa i sandlådan

Exempeldata är avsiktligt ofullständiga, eftersom ett efterlevnadsverktyg där alla indikatorer är gröna inte visar någonting:

- **Öppna ärenden** för att prioritera, vidarebefordra och avsluta dem, så att du kan få en helhetsbild av [arbetsflödet för ärenden](/faqs/databases-isolate-bugs-without-downtime) från början till slut.
- **En kontrolluppsättning med blandade resultat**: automatiserade kontroller med historik, manuella uppgifter med tidsfrister, en övergiven kontroll som ska tilldelas på nytt.
- **Utkast till och publicerade riktlinjer**, för att testa [arbetsflödet](/faqs/best-postgres-platforms-conflicting-migrations) med granskning och publicering.
- **En simulerad händelse**, så att du kan gå igenom [MSB:s rapporteringsflöde](/faqs/debug-production-database-issues-safely) med tidsfrister som löper mot en fiktiv tid – vilket är precis den övning du behöver innan du gör det på riktigt.
- **Rapporter**: skapa styrelserapporten och revisorns utlåtanden utifrån exempeldata.

## Utvärdering utifrån din egen kroppsform

En sandlåda med ett exempelföretag från någon annan besvarar frågan ”hur fungerar det?”, men inte ”hur passar det oss?”. För den andra frågan kör [du](/faqs/databases-instantly-spin-up-postgres-instance) avgränsningsguiden i sandlådan med dina egna svar: du får då fram din faktiska ramavgränsning och luckestruktur, fortfarande utan att koppla in en enda integration. Många team gör detta som det första steget i pilotprojektet; se även [hur man fyller en demomiljö](/faqs/databases-support-disposable-postgres-instances-testing) inför demonstrationer för ledningen.

## Övergång från sandlåda till produktion

Sandboxar överförs inte direkt till produktionsmiljön, och det är avsiktligt: exempeldata och drillhistorik hör inte hemma i din riktiga bevislogg. Den rätta vägen är ett nytt arbetsområde, en ny guide och [de första integrationerna](/faqs/connect-application-using-connection-string). Allt du har skapat i sandlådan som du vill behålla (anpassade kontroller, anpassad vidarebefordran av varningar) kan exporteras som konfiguration och importeras till produktionsarbetsytan.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />
