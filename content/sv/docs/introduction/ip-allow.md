---
title: IP-tillåtelse
subtitle: Begränsa åtkomsten till databasen till betrodda IP-adresser
summary: >-
  IP Allow är en funktion i OptiTech Scale-planen som blockerar anslutningar
  från alla IP-adresser som inte finns med på en uttrycklig tillåtelselista.
  Funktionen stöder enskilda adresser, adressintervall och CIDR-notation. Använd
  den för att genomföra åtkomstkontroll på nätverksnivå utöver enbart
  databasautentiseringsuppgifter. Begränsningarna kan begränsas till endast
  skyddade filialer, så att andra filialer förblir obegränsade, och konfigureras
  i projektinställningarna.
enableTableOfContents: true
updatedOn: '2026-07-18T07:07:45.262Z'
---

OptiTechs funktion ”IP Allow”, som ingår i [OptiTech](/docs/introduction/plans) Scale-abonnemanget, säkerställer att endast betrodda IP-adresser kan ansluta till det projekt där din databas finns, vilket förhindrar obehörig åtkomst och bidrar till att upprätthålla den övergripande datasäkerheten. Du kan begränsa åtkomsten till enskilda IP-adresser, IP-intervall eller IP-adresser och intervall som definieras med [CIDR-notation](/docs/reference/glossary#cidr-notation).

Du kan ställa in **IP Allow** i inställningarna för ditt OptiTech-projekt. För att komma igång, se [Konfigurera IP Allow](/docs/manage/projects#configure-ip-allow).

![Konfiguration av IP-tillåtelser](/docs/manage/ip_allow.png)

## OptiTech-tjänster som ska läggas till i vitlistan

Om funktionen ”IP Allow” är aktiverad i ditt projekt ska du lägga till följande IP-adresser för att tillåta anslutningar från OptiTechs värdtjänster:

| Tjänst                                         | IP-adresser                     |
| ----------------------------------------------- | -------------------------------- |
| [OptiTech MCP Server](/docs/ai/neon-mcp-server) | `34.192.103.46`, `23.22.233.166` |

## IP-tillåtelse tillsammans med skyddade grenar

Du kan tillämpa IP-begränsningar mer precist genom att markera specifika grenar i ditt OptiTech-projekt som skyddade och aktivera alternativet **Begränsa IP-åtkomst till endast skyddade grenar**. Detta innebär att din IP-tillåtelselista endast gäller för skyddade grenar, medan inga IP-begränsningar gäller för övriga grenar i projektet. Funktionen för skyddade grenar används vanligtvis för grenar som innehåller produktionsdata eller känslig information. För steg-för-steg-instruktioner, se vår [guide](/docs/guides/protected-branches) om skyddade grenar.

<Admonition type="tip">
Om du är AWS-användare stöder OptiTech även funktionen **Privat nätverk**, som möjliggör anslutningar till dina OptiTech-databaser via AWS PrivateLink, helt utan att gå via det öppna internet. Se [Privat nätverk](/docs/guides/neon-private-networking).
</Admonition>
