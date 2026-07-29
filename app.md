Plan: Bygg Nordsec Comply (compliance-automation SaaS)

Mål

Omvandla det remixeda projektet till en fungerande MVP av Nordsec Comply: en AI-driven compliance-plattform för nordiska SMB som automatiserar regelefterlevnad för NIS2, DORA, GDPR, ISO 27001 och AI Act.

Språk: svenska + engelska. Fokus: produktfunktionerna i affärsplanen.

Fas 1: Grund (vecka 1)





Rebrand





Uppdatera index.html med titel, beskrivning och OG-taggar för "Nordsec Comply".



Ersätt Triage-teman/färger med en nordisk, säkerhetsinriktad palett (mörkblått, isblått, vitt/silver).



Uppdatera logotypkomponenter (StackedLogo, Logo3D) till Nordsec Comply.



Ta bort bugg-spåriga sidor och komponenter som inte längre behövs.



Routing & layout





Ny routing i App.tsx:





/ – landningssida



/auth – inloggning/registrering



/dashboard – compliance-översikt



/frameworks – ramverk och krav



/gap-analysis – gap-analys-wizard



/controls – kontroller och bevis



/incidents – incidenthantering och MSB/IMY-rapportering



/risks – riskregister



/vendors – leverantörer (TPRM)



/ai-copilot – AI-copilot



/trust-center – Trust Center



/settings – inställningar



Bygg en app-layout med sidomeny anpassad för compliance-flöden.



Internationalisering (i18n)





Sätt upp en enkel översättningsmotor (t.ex. react-i18next eller ett eget context-baserat system).



Stöd för sv och en, med svenska som default.



Språkväljare i header.



Autentisering & profiler





Behåll befintlig auth men utöka profiles med organisationstillhörighet och roll.



Säkerställ att user_roles och has_role() används för admin/CSM/auditor.

Fas 2: Kärndatamodell (vecka 1–2)





Organisationer & arbetsytor





Tabell organizations (id, name, slug, sector, size, country, created_at, updated_at).



profiles får organization_id.



RLS: användare ser bara sin egen organisation.



Ramverk & krav





Tabell frameworks (NIS2, DORA, GDPR, ISO 27001, AI Act).



Tabell requirements (krav per ramverk med beskrivning, artikel, prioritet).



Tabell control_requirements (many-to-many mellan kontroller och krav).



Kontroller & bevis





Tabell controls (id, organization_id, name, description, status, owner_id, due_date, etc.).



Tabell evidence (id, control_id, source, data, timestamp, hash, file_url).



Statusmotor: not_started, in_progress, compliant, non_compliant, at_risk.



Seed-data





Fyll frameworks och requirements med innehåll för NIS2, DORA, GDPR, ISO 27001, AI Act.



Fördefinierade kontroller för vanliga områden (MFA, backup, offboarding, patchning, etc.).

Fas 3: Dashboard & compliance-score (vecka 2)





Compliance-översikt





Sammanställ compliance-score per ramverk.



Visa trender över tid.



Styrelserapport-export (PDF/CSV) – knapp i dashboard.



Widgetar





Antal gröna/gula/röda kontroller.



Kommande deadlines.



Öppna incidenter.



Högrisk-leverantörer.

Fas 4: Gap-analys-wizard (vecka 2–3)





Onboarding-wizard





10–15 steg: bransch, storlek, system, kunder, geografisk marknad.



Automatisk scoping: vilka ramverk gäller, NIS2-kategori (väsentlig/viktig), vilka kontroller som krävs.



Gap-rapport





Resultatsida med prioriterad åtgärdslista.



Knapp: "Generera policies" och "Skapa kontroller".

Fas 5: Kontroller & bevis (vecka 3)





Kontrollista





Filtrera per ramverk, status, ägare.



Redigera kontroll, tilldela ägare, sätt deadline.



Bevisinsamling





Manuell uppladdning av filer.



Placeholder för integrationer (M365/Entra, Google Workspace, AWS, etc.).



Tidsstämplad bevislogg.



Policygenerator





Mallbibliotek med 10–15 svenska policyer.



AI-genererad policy baserat på organisationens data (placeholder för AI-anrop).

Fas 6: Incidentrapportering (vecka 3–4)





Incidentflöde





Skapa incident med typ (NIS2, GDPR/IMY, annat).



Deadline-nedräkning: 24h tidig varning / 72h anmälan / 1 månad slutrapport.



Myndighetsformulär





Förifyllda fält för MSB och IMY.



Export till PDF/Word.



Kommunikationsmallar





Mallar för intern kommunikation, kunder, press.

Fas 7: Riskregister & leverantörer (vecka 4)





Riskregister





Riskbedömning (sannolikhet × konsekvens).



Koppling risk → kontroll → bevis.



Behandlingsplaner.



TPRM (leverantörsrisk)





Leverantörsregister.



Säkerhetsenkäter.



Riskklassning.



DORA IKT-avtalsregister.

Fas 8: AI-copilot & Trust Center (vecka 4–5)





AI-copilot (Complyra AI / Nordsec AI)





Chattgränssnitt.



Förberedda prompts: "Omfattas vi av NIS2?", "Vad saknas för ISO 27001?".



Placeholder för backend-integrering mot Lovable AI Gateway.



Trust Center





Publik säkerhetssida med compliance-status.



Delbar länk per organisation.

Fas 9: Landningssida & marknadsföring (vecka 5)





Landningssida (/)





Hero med problem/lösning.



Regelverksvågor (NIS2, DORA, AI Act, GDPR, ISO 27001).



Funktionsöversikt.



Prissättning (Start/Professional/Enterprise).



CTA: boka demo / gratis NIS2-test.



SEO & metadata





<title>, <meta description>, JSON-LD.



Svenska och engelska texter.

Tekniska detaljer





Frontend: React 18, Vite, TypeScript, Tailwind CSS, shadcn/ui.



Backend: Lovable Cloud (Supabase) med RLS på alla tabeller.



Auth: Befintlig Supabase-auth utökas med organisationer och roller.



AI: Lovable AI Gateway via Supabase Edge Function (fas 8).



Integrationer: Placeholders i UI; riktiga integrationer i senare faser.



Deploy: Lovable preview + publicering.

Leverabler i denna plan

En fullständig MVP med:





Nordisk design och varumärke



Svensk/engelsk UI



Organisationer, ramverk, krav, kontroller, bevis



Dashboard med compliance-score



Gap-analys-wizard



Incidentrapportering (MSB/IMY)



Riskregister och TPRM



AI-copilot och Trust Center (UI/placeholder)



Landningssida med prissättning

Rekommendation

Starta med fas 1–3 för att få en fungerande compliance-dashboard så snabbt som möjligt. Därefter fas 4 (gap-analys) och fas 6 (incidentflöde) eftersom de är de största differentierarna.