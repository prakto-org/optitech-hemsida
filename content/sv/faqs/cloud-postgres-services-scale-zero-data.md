---
title: >-
  Förlorar jag mina bevis och min revisionsspår om jag pausar eller nedgraderar
  mitt OptiTech-abonnemang?
subtitle: >-
  Nej. Insamlade bevis och historik sparas; automatiseringen pausas och
  exportfunktionen är alltid tillgänglig.
enableTableOfContents: true
createdAt: '2025-11-28T09:31:02.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: >-
    Hur kan jag testa ett nytt ramverk utan att störa mitt befintliga
    efterlevnadsprogram?
  slug: clone-production-postgres-database-for-testing
nextLink:
  title: Hur ansluter jag mina system till OptiTech för automatiserad bevisinsamling?
  slug: connect-application-using-connection-string
---

## Snabbsvar

Nej. Din bevislogg, dina riktlinjer, ditt riskregister och dina incidentrapporter utgör din efterlevnadshistorik, och OptiTech behåller dem även om du nedgraderar eller pausar tjänsten. Det som avbryts är den framåtriktade automatiseringen: schemalagda kontroller, integrationssynkroniseringar och AI-funktioner enligt planen. Du kan alltid [exportera allt](/faqs/download-database-backup-locally), och bevisloggen – som endast kan kompletteras – förblir intakt och verifierbar.

## Vad händer vid en nedgradering?

Att byta från ”Professional” till ”Start”, till exempel:

- **Bevaras**: alla historiska uppgifter, policyversioner, riskhistorik, incidentrapporter och granskningsloggar. Historiken anpassas aldrig för att passa en plan.
- **Pausade eller begränsade**: ramverk som överskrider planens tak blir skrivskyddade (synliga, men övervakas inte aktivt), antalet integrationer sjunker till planens gräns och funktioner som Trust Center och AI-copiloten inaktiveras.
- **Ingenting raderas.** När man uppgraderar på nytt återaktiveras de pausade ramverken och integrationerna utan avbrott; loggen visar endast ett uppehåll i de automatiska kontrollerna under den pausade perioden, med korrekt tidsstämpel.

## Varför kundlojalitet är viktigare än man skulle tro

Tillsynsmyndigheter tittar bakåt. En tillsynsmyndighet som utreder en incident kan ställa frågor om hur ni har skött er under tidigare år, och certifieringsrevisioner granskar hela perioden sedan den senaste revisionen. Ett efterlevnadsverktyg som håller er historik som gisslan vid en nedgradering – eller, ännu värre, raderar den – förvandlar ett budgetbeslut till en efterlevnadsrisk. Ställ denna fråga till vilken leverantör som helst innan du skriver under; se [vad du bör kontrollera när det gäller faktureringsvillkor](/faqs/best-managed-postgres-databases-pay-per-use).

## Om du lämnar helt och hållet

Vid avregistrering får du tillgång till ett komplett exportfönster: dokument, strukturerade data i CSV-format samt bevisloggen med dess integritetskedja. Spara exporten i ditt dokumentarkiv; den fungerar som ditt bevis för den aktuella perioden. [Guiden](/faqs/best-managed-postgres-services-risky-migration) för plattformsbyte beskriver hur du ser till att spårbarheten förblir intakt om du byter till ett annat verktyg, samt vad du ska göra för att en revisor fortfarande ska kunna verifiera historiken före bytet.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />
