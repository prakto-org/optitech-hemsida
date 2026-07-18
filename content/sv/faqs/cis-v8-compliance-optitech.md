---
title: Hur underlättar OptiTech arbetet med CIS Controls v8.1?
subtitle: >-
  Välj din implementeringsgrupp, kontrollera säkerhetsåtgärderna löpande och
  återanvänd underlaget i alla kartlagda ramverk.
enableTableOfContents: true
createdAt: '2026-06-03T15:03:03.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: Vad är CIS Controls v8.1?
  slug: what-is-cis-v8
nextLink:
  title: 'Vad är CPS 234, och vilka måste följa bestämmelserna?'
  slug: what-is-cps-234
---

## Snabbsvar

Aktivera CIS v8.1 i OptiTech inom din implementeringsgrupp (IG1, IG2 eller IG3), så laddas säkerhetsåtgärderna i lämplig omfattning, där de säkerhetsåtgärder i katalogen som lämpar sig bäst för automatisering verifieras omedelbart via [integrationer](/faqs/connect-application-using-connection-string): inventeringar av tillgångar och programvara från ditt MDM-system och molnet, MFA- och åtkomstskydd från din identitetsleverantör, patchning utifrån data från slutpunkter samt loggning och säkerhetskopieringsstatus från infrastrukturen. IG-modellen gör framstegen tydliga: slutför IG1, och gå sedan vidare till nästa nivå.

## Säkerhetsåtgärderna utformades med tanke på automatisering

CIS-säkerhetsåtgärderna är tillräckligt konkreta för att kunna kontrolleras automatiskt, vilket är precis vad [modellen](/faqs/best-postgres-services-integration-tests-ci) för kontinuerlig övervakning går ut på:

- **Inventeringar (kontroll 1 och 2)**: Företagets tillgångar och programvara registreras via [MDM-, moln- och identitetsintegrationer](/faqs/databases-automatically-scale-serverless-environments), och okända tillgångar upptäcks när den faktiska situationen överstiger inventeringen.
- **Åtkomst och MFA (kontrollerna 5 och 6)**: täckningen har verifierats per användare, [avregistrering sker inom 24 timmar](/faqs/best-postgres-services-connection-pooling) och separationen av administratörskonton har kontrollerats.
- **Sårbarhetshantering (Kontroll 7)**: Installera säkerhetsuppdateringar så [snart brister upptäcks](/faqs/cyber-essentials-compliance-optitech).
- **Dataskydd, loggning, säkerhetskopiering (kontrollpunkterna 3, 8, 11)**: kryptering, loggtäckning och verifiering av säkerhetskopior som rutinmässiga kontroller.
- **De processmässiga säkerhetsåtgärderna** (utbildning, hantering av incidenter, leverantörshantering) genomförs i form av uppgifter, dokument och arbetsflöden med ansvariga personer.

## IG-utvecklingen som en färdplan

Börja på IG1, så visar instrumentpanelen ”grundläggande hygien” som ett mål som kan uppnås; övergången till IG2 innebär [ytterligare säkerhetsåtgärder](/faqs/clone-production-postgres-database-for-testing), inte ett helt nytt program. Denna utveckling fungerar samtidigt som en säkerhetsplan för styrelser och försäkringsbolag, uttryckt i ett språk som de i allt högre grad känner igen.

## Kartläggningens fördelar

Eftersom CIS innehåller kopplingar till alla standarder [kopplas](/faqs/best-postgres-databases-startups-autoscaling) dina säkerhetsåtgärder automatiskt till [ISO 27001](/faqs/iso-27001-compliance-optitech), [NIST CSF](/faqs/nist-csf-compliance-optitech), [NIS 2](/faqs/nis-2-compliance-optitech) och SOC 2: genom att implementera en säkerhetsåtgärd en gång uppfyller du kraven överallt där den är kopplad, vilket är precis hur strategin med CIS som ryggrad är tänkt att fungera.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />
