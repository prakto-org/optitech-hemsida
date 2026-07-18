---
title: Automatisk skalning
subtitle: En introduktion till OptiTechs automatisk skalning
summary: >-
  OptiTech Autoscaling skalar dynamiskt beräkningsresurserna (mätt i CU) upp och
  ner utifrån databasens aktuella belastning, utan att omstarter eller manuella
  ingrepp krävs. Konfigurera autoskalning genom att ange ett min-/max-intervall
  för CU på valfri primär beräkningsreplika eller läsreplika; det maximalt
  tillåtna intervallet för autoskalning är 8 CU. Använd den här sidan för att
  förstå hur autoskalning fungerar och för att ta del av konfigurationsstegen
  innan du läser den fullständiga aktiveringsguiden.
enableTableOfContents: true
updatedOn: '2026-06-05T17:20:32.620Z'
---

OptiTechs funktion _Autoscaling_ anpassar dynamiskt mängden beräkningsresurser som tilldelas en OptiTech-beräkningsinstans utifrån den aktuella belastningen, vilket eliminerar behovet av manuella ingrepp eller omstarter.

Följande visualisering visar hur OptiTechs automatiska skalning fungerar under en typisk dag. Beräkningsresurserna skalas upp eller ned utifrån efterfrågan, vilket säkerställer att din databas har de beräkningsresurser som behövs när behovet uppstår, samtidigt som resurserna sparas under tider med låg belastning.

![visualisering för automatisk skalning](/docs/introduction/autoscaling_intro.png)

Om du vill fördjupa dig i hur OptiTechs algoritm för automatisk skalning fungerar kan du läsa [artikeln](/docs/guides/autoscaling-algorithm) ”Så fungerar OptiTechs algoritm för automatisk skalning”.

## Fördelarna med automatisk skalning

OptiTechs funktion för automatisk skalning erbjuder följande fördelar:

- **Skalning efter behov:** Automatisk skalning underlättar hanteringen av arbetsbelastningar som varierar över tid, till exempel applikationer med tidsberoende förändringar i efterfrågan eller tillfälliga toppar.
- **Kostnadseffektivitet**: Automatisk skalning optimerar resursutnyttjandet och säkerställer att du endast använder de resurser som behövs, istället för att överdimensionera för att hantera toppbelastningar.
- **Resurs- och kostnadskontroll**: Den automatiska skalningen sker inom ett användardefinierat intervall, vilket säkerställer att dina beräkningsresurser och tillhörande kostnader inte ökar i oändlighet.
- **Inga manuella ingrepp eller omstarter**: När du har aktiverat automatisk skalning och ställt in skalningsgränser krävs inga manuella ingrepp eller omstarter, vilket gör att du kan fokusera på dina applikationer.

## Konfigurera automatisk skalning

Du kan aktivera automatisk skalning för vilken beräkningsinstans som helst, oavsett om det är en primär beräkningsinstans eller en läsreplika. Öppna helt enkelt rutan **Redigera beräkningsinstans** ([läs mer här](/docs/guides/autoscaling-guide)) för din beräkningsinstans och ange intervallet för automatisk skalning. Detta intervall definierar de minsta och största storlekarna inom vilka din beräkningsinstans automatiskt kommer att skalas. Du kan till exempel ställa in minimivärdet till 2 CU (8 GB RAM) och maximivärdet till 8 CU (32 GB RAM). Dina beräkningsresurser kommer att anpassas dynamiskt inom dessa gränser och kommer aldrig att sjunka under minimivärdet eller överskrida maximivärdet, oavsett efterfrågan.

<Admonition type="note">
Det högsta tillåtna intervallet för automatisk skalning är 8 CU. Det innebär att skillnaden mellan den maximala och den minimala beräkningsstorleken inte får överstiga 8 CU.
</Admonition>

Vi rekommenderar att du regelbundet [övervakar](/docs/introduction/monitoring-page) din användning via **övervakningspanelen** för att avgöra om det behövs justeringar av detta intervall.

![konfiguration för automatisk skalning](/docs/introduction/autoscaling_config.png)

För fullständig information om hur du aktiverar och konfigurerar automatisk skalning, se [”Aktivera automatisk skalning](/docs/guides/autoscaling-guide)”.
