---
title: Övervaka loggar
subtitle: 'Visa, sök och ladda ner loggar från alla dina OptiTech-tjänster'
summary: >-
  Fliken ”Logs” på sidan ”Monitoring” visar loggar från alla tjänster på en gren
  (Functions, Object Storage eller båda) i en och samma vy. Filtrera efter nivå
  (DEBUG, INFO, NOTICE, WARN, ERROR, FATAL) eller tjänstnamn, sök i
  loggtexterna, hämta nya rader med Go live och ladda ner den aktuella vyn som
  en .log-fil. Loggarna sparas i 3 dagar.
enableTableOfContents: true
---

Fliken **Logs** på sidan Övervakning visar loggar från alla tjänster på en gren på ett och samma ställe. Vyn är densamma oavsett om du går direkt till den eller hoppar dit från en specifik funktion eller lagringsbucket.

## Visa loggar

1. I OptiTech Console väljer du ett projekt och en gren.
2. Gå till **Övervakning**.
3. Välj fliken **Logg**.

Som standard visar vyn loggar från alla tjänster i grenen. Använd entitetsflikarna **Alla**, **Funktioner** och **Lagring** för att begränsa vyn till en viss typ av tjänst, eller begränsa den ytterligare med fältet för tjänstnamn (se [Begränsa efter tjänst](#scope-by-service)).

Du kan också gå direkt till en avgränsad vy utan att först besöka Monitoring:

- Öppna menyn för en funktion i listan **Funktioner** och välj **Visa loggar**.
- Öppna menyn för en **bucket** i listan över **bucket**ar i Object Storage och välj **Visa loggar**.

Varje rad visar en tidsstämpel, en nivå och loggmeddelandet. Expandera en rad för att se hela sammanhanget: `timestamp`, `severity`, `entity_type`, `scope_name` och `service_name`. `entity_type` anger vilken typ av tjänst en rad härstammar från (`function` eller `storage`); `service_name` anger den specifika tjänsten (`optitech-function/<slug>` eller `optitech-storage/<bucket>`).

För information om vad dessa fält innebär för en viss tjänst och hur varje tjänst kopplar sin egen utdata till den gemensamma nivåuppsättningen, se [Funktionsloggar](/docs/compute/functions/logs) eller [Objektlagringsloggar](/docs/storage/logs).

## Omfattning per tjänst

Använd fältet för tjänstnamn för att begränsa visningen till en funktion eller en bucket. Som standard söks efter en delsträng; klicka på växlingsknappen ”`~`” / ”`=`” bredvid fältet för att växla till exakt matchning av hela namnet.

## Logg nivåer

Alla tjänster rapporterar loggar på samma gemensamma nivåuppsättning: `DEBUG`, `INFO`, `NOTICE`, `WARN`, `ERROR`, `FATAL`. Det är inte alla tjänster som genererar loggar på alla nivåer. Se de tjänstespecifika sidorna som länkas ovan för information om vilka nivåer varje tjänst faktiskt genererar.

## Filtrera och sök

Använd nivåfiltren för att endast visa de nivåer som är relevanta för dig, och sökrutan för att söka efter en exakt delsträng (utan hänsyn till versaler och gemener) i loggtexten. Använd tidsintervallfiltren (`5m`, `15m`, `1h`, `6h`, `24h`, `7d`) för att ändra sökintervallet. Loggfilerna sparas endast i 3 dagar (se [Lagringstid](#retention)), så alternativet ”`7d`” går att välja men kan inte returnera något som är äldre än 3 dagar.

Om en sökning ger mer än 1 000 rader visar vyn endast de 1 000 senaste raderna och visar ett meddelande där du uppmanas att begränsa tidsintervallet eller lägga till en sökning för att se resten.

Om inga loggar matchar de aktuella filtren visas i det tomma läget en knapp med texten **Utöka tidsintervallet**, som utökar sökfönstret med ett enda klick.

## Gå live

**Go live**-avfrågningar för nya logglinjer var 5:e sekund; det är inte en push-baserad live-ström. Stäng av funktionen för att avbryta avfrågningarna och visa en statisk vy.

## Ladda ner

**Hämta** sparar de loggrader som för närvarande är laddade i vyn, exakt enligt det valda filtret, till en textfil med filändelsen `.log`, med de senaste först. När du laddar ner körs inte frågan på nytt mot hela lagringsfönstret: det är en ögonblicksbild av vad som visas på skärmen, så begränsa först din sökning, nivåer och tidsintervall om du vill ha en mindre eller mer målinriktad fil.

## Kundbehållning

Loggposter sparas i **3 dagar**. När en loggpost hamnar utanför detta tidsfönster går den inte längre att söka fram i konsolen.

<NeedHelp/>
