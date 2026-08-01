import LINKS from './links';

// Bilingual content for every /frameworks/* marketing page. Each framework
// exposes `en` and `sv` objects with the same shape as the services data; the
// route resolves the active locale with getLocale() and passes the matching
// object to the shared marketing template. The secondary CTA and related cards
// link to the in-depth docs page at /docs/frameworks/<slug>.

const CONTACT = LINKS.contactSales;

export const FRAMEWORKS = {
  nis2: {
    en: {
      name: 'NIS2',
      tagline: 'The Swedish Cybersecurity Act, built from the legal text.',
      seo: {
        title: 'NIS2 compliance for Nordic businesses — OptiTech',
        description:
          'NIS2 and the Swedish Cybersecurity Act, built from the legal text and MSBFS, with the full MSB incident flow, scoping, and continuous evidence. Book a free gap analysis.',
      },
      hero: {
        eyebrow: 'Framework',
        title: 'NIS2, built from the Swedish legal text',
        description:
          'Supervision and sanctions are being enforced now. OptiTech builds NIS2 from the Cybersecurity Act and MSBFS, not a generic mapping, with scoping, controls, and the full MSB incident flow included.',
        primaryCta: { label: 'Book a free gap analysis', href: CONTACT },
        secondaryCta: { label: 'Read the NIS2 docs', href: '/docs/frameworks/nis2' },
      },
      painPoints: {
        title: 'NIS2 reaches further than most think',
        items: [
          {
            title: '10,000+ companies in scope',
            description:
              'Eighteen sectors plus their suppliers. Many are pulled in as subcontractors without realizing it.',
          },
          {
            title: 'Personal liability',
            description:
              'Management and the board carry personal responsibility, with sanctions up to 10 M€ or 2% of turnover.',
          },
          {
            title: 'Generic tools fall short',
            description:
              'Foreign platforms map NIS2 loosely. They do not follow the Swedish legal text or the MSB reporting process.',
          },
        ],
      },
      steps: {
        title: 'How OptiTech gets you compliant',
        items: [
          {
            title: 'Scope and categorize',
            description:
              'A gap analysis determines whether you are in scope and whether you are an essential or important entity.',
          },
          {
            title: 'Implement and collect evidence',
            description:
              'Controls from the legal text, with continuous evidence from your systems and Swedish policy templates.',
          },
          {
            title: 'Report incidents to MSB',
            description:
              'A guided flow for the 24-hour early warning, 72-hour notification, and one-month final report.',
          },
        ],
      },
      features: {
        title: 'What OptiTech gives you for NIS2',
        items: [
          {
            title: 'Built from MSBFS',
            description: 'Controls derived from the Swedish legal text and MSB regulations.',
          },
          {
            title: 'Scoping wizard',
            description: 'Essential or important, decided from your real profile.',
          },
          {
            title: 'MSB incident flow',
            description: 'The 24h, 72h, and one-month reporting windows, guided.',
          },
          {
            title: 'Board training',
            description: 'The management training NIS2 specifically requires.',
          },
          {
            title: 'Supply-chain security',
            description: 'Vendor risk and contracts to meet the chain obligations.',
          },
          {
            title: 'Continuous evidence',
            description: 'Live proof that your controls actually hold.',
          },
        ],
      },
      stats: [
        { value: '10 M€ / 2%', label: 'Maximum sanction under NIS2' },
        { value: '24h', label: 'Early warning to CERT-SE / MSB' },
        { value: '10,000+', label: 'Swedish companies now in scope' },
      ],
      related: {
        title: 'Put it into practice',
        items: [
          {
            title: 'Incident reporting',
            description: 'The guided MSB and IMY incident flow.',
            href: LINKS.serviceIncidentReporting,
          },
          {
            title: 'Evidence collection',
            description: 'Prove your NIS2 controls continuously.',
            href: '/services/evidence-collection',
          },
          {
            title: 'Read the NIS2 docs',
            description: 'The framework in depth.',
            href: '/docs/frameworks/nis2',
          },
        ],
      },
      quote: {
        text: 'NIS2 support that is a mapping of a foreign standard is not NIS2 support. It has to start from the Swedish legal text.',
        author: 'OptiTech',
        role: 'Product principle',
      },
      faq: {
        title: 'Questions',
        items: [
          {
            question: 'How do I know if NIS2 applies to us?',
            answer:
              'Run the free gap analysis. It determines whether you are in scope and, if so, whether you are essential or important.',
          },
          {
            question: 'Is the incident reporting really built for MSB?',
            answer:
              'Yes. The flow follows the 24-hour, 72-hour, and one-month windows and prefills the authority forms from your incident data.',
          },
          {
            question: 'Does NIS2 apply if we are only a supplier?',
            answer:
              'Often, yes. Many companies are pulled into scope through the supply chain as subcontractors to regulated sectors.',
          },
          {
            question: 'Who is responsible inside the company?',
            answer:
              'Management and the board carry personal responsibility, which is why board training is part of the framework.',
          },
        ],
      },
      cta: {
        title: 'Find out if NIS2 applies to you',
        description: 'A free gap analysis tells you your scope and category.',
        button: { label: 'Book a free gap analysis', href: CONTACT },
      },
    },
    sv: {
      name: 'NIS2',
      tagline: 'Cybersäkerhetslagen, byggd från lagtexten.',
      seo: {
        title: 'NIS2-efterlevnad för nordiska företag — OptiTech',
        description:
          'NIS2 och Cybersäkerhetslagen, byggd från lagtexten och MSBFS, med hela MSB-incidentflödet, scoping och kontinuerliga bevis. Boka en kostnadsfri gap-analys.',
      },
      hero: {
        eyebrow: 'Ramverk',
        title: 'NIS2, byggt från den svenska lagtexten',
        description:
          'Tillsyn och sanktioner verkställs nu. OptiTech bygger NIS2 från Cybersäkerhetslagen och MSBFS, inte en generisk mappning, med scoping, kontroller och hela MSB-incidentflödet inkluderat.',
        primaryCta: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
        secondaryCta: { label: 'Läs NIS2-dokumentationen', href: '/docs/frameworks/nis2' },
      },
      painPoints: {
        title: 'NIS2 når längre än de flesta tror',
        items: [
          {
            title: '10 000+ bolag omfattas',
            description:
              'Arton sektorer plus deras leverantörer. Många dras in som underleverantörer utan att inse det.',
          },
          {
            title: 'Personligt ansvar',
            description:
              'Ledning och styrelse bär personligt ansvar, med sanktioner upp till 10 M€ eller 2 % av omsättningen.',
          },
          {
            title: 'Generiska verktyg räcker inte',
            description:
              'Utländska plattformar mappar NIS2 löst. De följer inte den svenska lagtexten eller MSB:s rapportprocess.',
          },
        ],
      },
      steps: {
        title: 'Så gör OptiTech er efterlevnadsredo',
        items: [
          {
            title: 'Scoping och kategorisering',
            description:
              'En gap-analys avgör om ni omfattas och om ni är en väsentlig eller viktig enhet.',
          },
          {
            title: 'Inför och samla bevis',
            description:
              'Kontroller från lagtexten, med kontinuerliga bevis från era system och svenska policymallar.',
          },
          {
            title: 'Rapportera incidenter till MSB',
            description:
              'Ett guidat flöde för tidig varning inom 24 timmar, anmälan inom 72 timmar och slutrapport inom en månad.',
          },
        ],
      },
      features: {
        title: 'Det här ger OptiTech er för NIS2',
        items: [
          {
            title: 'Byggt från MSBFS',
            description: 'Kontroller härledda från den svenska lagtexten och MSB:s föreskrifter.',
          },
          {
            title: 'Scoping-wizard',
            description: 'Väsentlig eller viktig, avgjort från er verkliga profil.',
          },
          { title: 'MSB-incidentflöde', description: 'Fönstren 24 h, 72 h och en månad, guidat.' },
          {
            title: 'Styrelseutbildning',
            description: 'Ledningsutbildningen som NIS2 specifikt kräver.',
          },
          {
            title: 'Leverantörskedjesäkerhet',
            description: 'Leverantörsrisk och avtal för att möta kedjekraven.',
          },
          {
            title: 'Kontinuerliga bevis',
            description: 'Levande bevis på att era kontroller faktiskt håller.',
          },
        ],
      },
      stats: [
        { value: '10 M€ / 2 %', label: 'Maximal sanktion enligt NIS2' },
        { value: '24 h', label: 'Tidig varning till CERT-SE / MSB' },
        { value: '10 000+', label: 'Svenska bolag som nu omfattas' },
      ],
      related: {
        title: 'Omsätt i praktik',
        items: [
          {
            title: 'Incidentrapportering',
            description: 'Det guidade MSB- och IMY-incidentflödet.',
            href: LINKS.serviceIncidentReporting,
          },
          {
            title: 'Bevisinsamling',
            description: 'Bevisa era NIS2-kontroller kontinuerligt.',
            href: '/services/evidence-collection',
          },
          {
            title: 'Läs NIS2-dokumentationen',
            description: 'Ramverket på djupet.',
            href: '/docs/frameworks/nis2',
          },
        ],
      },
      quote: {
        text: 'NIS2-stöd som är en mappning av en utländsk standard är inte NIS2-stöd. Det måste börja i den svenska lagtexten.',
        author: 'OptiTech',
        role: 'Produktprincip',
      },
      faq: {
        title: 'Frågor',
        items: [
          {
            question: 'Hur vet jag om NIS2 gäller oss?',
            answer:
              'Kör den kostnadsfria gap-analysen. Den avgör om ni omfattas och, i så fall, om ni är väsentliga eller viktiga.',
          },
          {
            question: 'Är incidentrapporteringen verkligen byggd för MSB?',
            answer:
              'Ja. Flödet följer fönstren 24 timmar, 72 timmar och en månad och förifyller myndighetsformulären från era incidentdata.',
          },
          {
            question: 'Gäller NIS2 om vi bara är leverantör?',
            answer:
              'Ofta, ja. Många bolag dras in genom leverantörskedjan som underleverantörer till reglerade sektorer.',
          },
          {
            question: 'Vem är ansvarig inom bolaget?',
            answer:
              'Ledning och styrelse bär personligt ansvar, vilket är varför styrelseutbildning är en del av ramverket.',
          },
        ],
      },
      cta: {
        title: 'Ta reda på om NIS2 gäller er',
        description: 'En kostnadsfri gap-analys visar er omfattning och kategori.',
        button: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
      },
    },
  },

  dora: {
    en: {
      name: 'DORA',
      tagline: 'Digital operational resilience for finance and its ICT providers.',
      seo: {
        title: 'DORA compliance — OptiTech',
        description:
          'DORA for financial entities and their ICT providers, with ICT risk management, incident reporting, and a supervisor-ready ICT contract register.',
      },
      hero: {
        eyebrow: 'Framework',
        title: 'DORA, with the ICT register done for you',
        description:
          'In force since January 2025, DORA reaches every financial entity and all of their ICT providers. OptiTech covers ICT risk management, incident reporting, and produces the register of information as a supervisor-ready export.',
        primaryCta: { label: 'Book a free gap analysis', href: CONTACT },
        secondaryCta: { label: 'Read the DORA docs', href: '/docs/frameworks/dora' },
      },
      painPoints: {
        title: 'DORA pulls in the whole supply chain',
        items: [
          {
            title: 'Providers must prove it too',
            description:
              'It is not only banks. Every ICT provider to a financial entity is now asked for evidence.',
          },
          {
            title: 'The ICT register is mandatory',
            description:
              'A formal register of information for ICT contracts, in a supervisor-ready format.',
          },
          {
            title: 'Resilience must be tested',
            description:
              'Operational resilience and continuity have to be demonstrated, not assumed.',
          },
        ],
      },
      steps: {
        title: 'How OptiTech gets you compliant',
        items: [
          {
            title: 'Map ICT risk',
            description: 'Structured ICT risk management linked to controls and evidence.',
          },
          {
            title: 'Register your ICT contracts',
            description: 'Capture providers and contracts, with the fields DORA expects.',
          },
          {
            title: 'Report and export',
            description:
              'A DORA incident report flow and the register of information as a ready export.',
          },
        ],
      },
      features: {
        title: 'What OptiTech gives you for DORA',
        items: [
          {
            title: 'ICT risk management',
            description: 'Risk linked to controls, evidence, and treatment.',
          },
          {
            title: 'Register of information',
            description: 'The ICT contract register produced for supervisors.',
          },
          {
            title: 'DORA incident reports',
            description: 'Structured reporting with schema validation and export.',
          },
          {
            title: 'Third-party risk',
            description: 'Provider classification, substitutability, and exit plans.',
          },
          {
            title: 'Resilience testing',
            description: 'Business impact analysis and continuity artifacts.',
          },
          { title: 'Continuous evidence', description: 'Live proof across your ICT controls.' },
        ],
      },
      stats: [
        { value: 'Jan 2025', label: 'DORA in force' },
        { value: 'ICT register', label: 'Register of information, ready to export' },
        { value: 'All providers', label: 'ICT suppliers in scope, not just banks' },
      ],
      related: {
        title: 'Put it into practice',
        items: [
          {
            title: 'Supplier risk',
            description: 'The DORA ICT contract register and TPRM.',
            href: '/services/supplier-risk',
          },
          {
            title: 'Risk register',
            description: 'ICT risk linked to controls and evidence.',
            href: '/services/risk-register',
          },
          {
            title: 'Read the DORA docs',
            description: 'The framework in depth.',
            href: '/docs/frameworks/dora',
          },
        ],
      },
      quote: {
        text: 'DORA turned "trust your provider" into "prove your provider." The register of information is the receipt.',
        author: 'OptiTech',
        role: 'Product principle',
      },
      faq: {
        title: 'Questions',
        items: [
          {
            question: 'Does DORA apply to us if we are not a bank?',
            answer:
              'Very possibly. DORA reaches financial entities and all of their ICT providers, so many technology suppliers are in scope.',
          },
          {
            question: 'Do you produce the register of information?',
            answer:
              'Yes. The ICT contract register is generated as a supervisor-ready export from your vendor and contract data.',
          },
          {
            question: 'Is incident reporting covered?',
            answer:
              'Yes. There is a structured DORA incident report flow with schema validation and export.',
          },
          {
            question: 'How does DORA relate to NIS2?',
            answer:
              'They overlap on risk and incidents. Controls are cross-mapped, so evidence you collect for one counts toward the other.',
          },
        ],
      },
      cta: {
        title: 'Get DORA-ready, register included',
        description: 'From ICT risk to the register of information.',
        button: { label: 'Book a free gap analysis', href: CONTACT },
      },
    },
    sv: {
      name: 'DORA',
      tagline: 'Digital operativ motståndskraft för finans och dess IKT-leverantörer.',
      seo: {
        title: 'DORA-efterlevnad — OptiTech',
        description:
          'DORA för finansiella enheter och deras IKT-leverantörer, med IKT-riskhantering, incidentrapportering och ett tillsynsklart IKT-avtalsregister.',
      },
      hero: {
        eyebrow: 'Ramverk',
        title: 'DORA, med IKT-registret framtaget åt er',
        description:
          'I kraft sedan januari 2025 når DORA varje finansiell enhet och alla deras IKT-leverantörer. OptiTech täcker IKT-riskhantering, incidentrapportering och tar fram registret över information som en tillsynsklar export.',
        primaryCta: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
        secondaryCta: { label: 'Läs DORA-dokumentationen', href: '/docs/frameworks/dora' },
      },
      painPoints: {
        title: 'DORA drar in hela leverantörskedjan',
        items: [
          {
            title: 'Leverantörer måste också bevisa',
            description:
              'Det är inte bara banker. Varje IKT-leverantör till en finansiell enhet ombeds nu om bevis.',
          },
          {
            title: 'IKT-registret är obligatoriskt',
            description:
              'Ett formellt register över information för IKT-avtal, i tillsynsklart format.',
          },
          {
            title: 'Motståndskraft måste testas',
            description: 'Operativ motståndskraft och kontinuitet måste visas, inte antas.',
          },
        ],
      },
      steps: {
        title: 'Så gör OptiTech er efterlevnadsredo',
        items: [
          {
            title: 'Kartlägg IKT-risk',
            description: 'Strukturerad IKT-riskhantering kopplad till kontroller och bevis.',
          },
          {
            title: 'Registrera era IKT-avtal',
            description: 'Fånga leverantörer och avtal, med fälten DORA förväntar sig.',
          },
          {
            title: 'Rapportera och exportera',
            description:
              'Ett DORA-incidentrapportflöde och registret över information som en färdig export.',
          },
        ],
      },
      features: {
        title: 'Det här ger OptiTech er för DORA',
        items: [
          {
            title: 'IKT-riskhantering',
            description: 'Risk kopplad till kontroller, bevis och behandling.',
          },
          {
            title: 'Register över information',
            description: 'IKT-avtalsregistret framtaget för tillsyn.',
          },
          {
            title: 'DORA-incidentrapporter',
            description: 'Strukturerad rapportering med schemavalidering och export.',
          },
          {
            title: 'Tredjepartsrisk',
            description: 'Leverantörsklassning, utbytbarhet och exitplaner.',
          },
          {
            title: 'Motståndskraftstest',
            description: 'Konsekvensanalys och kontinuitetsunderlag.',
          },
          { title: 'Kontinuerliga bevis', description: 'Levande bevis över era IKT-kontroller.' },
        ],
      },
      stats: [
        { value: 'Jan 2025', label: 'DORA i kraft' },
        { value: 'IKT-register', label: 'Register över information, redo att exportera' },
        { value: 'Alla leverantörer', label: 'IKT-leverantörer omfattas, inte bara banker' },
      ],
      related: {
        title: 'Omsätt i praktik',
        items: [
          {
            title: 'Leverantörsrisk',
            description: 'DORA:s IKT-avtalsregister och TPRM.',
            href: '/services/supplier-risk',
          },
          {
            title: 'Riskregister',
            description: 'IKT-risk kopplad till kontroller och bevis.',
            href: '/services/risk-register',
          },
          {
            title: 'Läs DORA-dokumentationen',
            description: 'Ramverket på djupet.',
            href: '/docs/frameworks/dora',
          },
        ],
      },
      quote: {
        text: 'DORA gjorde "lita på er leverantör" till "bevisa er leverantör". Registret över information är kvittot.',
        author: 'OptiTech',
        role: 'Produktprincip',
      },
      faq: {
        title: 'Frågor',
        items: [
          {
            question: 'Gäller DORA oss om vi inte är en bank?',
            answer:
              'Mycket möjligt. DORA når finansiella enheter och alla deras IKT-leverantörer, så många teknikleverantörer omfattas.',
          },
          {
            question: 'Tar ni fram registret över information?',
            answer:
              'Ja. IKT-avtalsregistret genereras som en tillsynsklar export från er leverantörs- och avtalsdata.',
          },
          {
            question: 'Täcks incidentrapportering?',
            answer:
              'Ja. Det finns ett strukturerat DORA-incidentrapportflöde med schemavalidering och export.',
          },
          {
            question: 'Hur förhåller sig DORA till NIS2?',
            answer:
              'De överlappar kring risk och incidenter. Kontroller är korsmappade, så bevis ni samlar för det ena räknas mot det andra.',
          },
        ],
      },
      cta: {
        title: 'Bli DORA-redo, registret inkluderat',
        description: 'Från IKT-risk till registret över information.',
        button: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
      },
    },
  },

  gdpr: {
    en: {
      name: 'GDPR',
      tagline: 'Records of processing and the 72-hour IMY breach flow.',
      seo: {
        title: 'GDPR compliance — OptiTech',
        description:
          'GDPR with records of processing (RoPA), data protection controls, data subject requests, and the 72-hour IMY breach notification flow.',
      },
      hero: {
        eyebrow: 'Framework',
        title: 'GDPR, from records of processing to breach reporting',
        description:
          'Keep your records of processing current, manage data subject requests, and run the 72-hour IMY breach notification flow, all connected to the controls that protect the data.',
        primaryCta: { label: 'Book a free gap analysis', href: CONTACT },
        secondaryCta: { label: 'Read the GDPR docs', href: '/docs/frameworks/gdpr' },
      },
      painPoints: {
        title: 'GDPR is old, but still catches teams out',
        items: [
          {
            title: 'RoPA goes stale',
            description:
              'Records of processing kept in a spreadsheet drift out of date the moment systems change.',
          },
          {
            title: 'The 72-hour clock',
            description:
              'A personal data breach must be reported to IMY within 72 hours, and the clock is unforgiving.',
          },
          {
            title: 'Requests pile up',
            description:
              'Data subject requests arrive with a one-month deadline and no clear process.',
          },
        ],
      },
      steps: {
        title: 'How OptiTech gets you compliant',
        items: [
          {
            title: 'Build your RoPA',
            description:
              'A living record of processing activities with purposes, categories, and transfers.',
          },
          {
            title: 'Handle requests',
            description: 'Track data subject requests against the one-month deadline.',
          },
          {
            title: 'Report breaches to IMY',
            description: 'A guided 72-hour breach notification flow, prefilled from the incident.',
          },
        ],
      },
      features: {
        title: 'What OptiTech gives you for GDPR',
        items: [
          { title: 'Records of processing', description: 'RoPA under Article 30, kept current.' },
          {
            title: 'Data subject requests',
            description: 'The one-month deadline tracked per request.',
          },
          {
            title: 'IMY breach flow',
            description: 'The 72-hour notification under Article 33, guided.',
          },
          {
            title: 'Data protection controls',
            description: 'Controls linked to the processing they protect.',
          },
          {
            title: 'Third-country transfers',
            description: 'Track transfers and safeguards in one place.',
          },
          {
            title: 'Aligns with ISO 27701',
            description: 'Extend into a privacy management system.',
          },
        ],
      },
      stats: [
        { value: '20 M€ / 4%', label: 'Maximum GDPR sanction' },
        { value: '72h', label: 'Breach notification to IMY' },
        { value: '1 month', label: 'Data subject request deadline' },
      ],
      related: {
        title: 'Put it into practice',
        items: [
          {
            title: 'Incident reporting',
            description: 'The parallel IMY breach track.',
            href: LINKS.serviceIncidentReporting,
          },
          {
            title: 'ISO 27701',
            description: 'Extend GDPR into a privacy management system.',
            href: '/docs/frameworks/iso-27701',
          },
          {
            title: 'Read the GDPR docs',
            description: 'The framework in depth.',
            href: '/docs/frameworks/gdpr',
          },
        ],
      },
      quote: {
        text: 'GDPR is not hard because the rules changed. It is hard because the records stopped matching reality.',
        author: 'OptiTech',
        role: 'Product principle',
      },
      faq: {
        title: 'Questions',
        items: [
          {
            question: 'Do you cover the IMY breach flow?',
            answer:
              'Yes. A guided 72-hour notification flow prefills from the incident, in parallel with the NIS2 track.',
          },
          {
            question: 'Can we keep our RoPA current?',
            answer:
              'Yes. Records of processing are a living register linked to purposes, categories, and transfers.',
          },
          {
            question: 'How are data subject requests handled?',
            answer: 'Each request is tracked against the one-month deadline with a clear process.',
          },
          {
            question: 'Does this connect to ISO 27701?',
            answer:
              'Yes. GDPR controls extend naturally into an ISO 27701 privacy management system.',
          },
        ],
      },
      cta: {
        title: 'Keep GDPR current, not just documented',
        description: 'RoPA, data subject requests, and the IMY breach flow.',
        button: { label: 'Book a free gap analysis', href: CONTACT },
      },
    },
    sv: {
      name: 'GDPR',
      tagline: 'Register över behandlingar och 72-timmarsflödet till IMY.',
      seo: {
        title: 'GDPR-efterlevnad — OptiTech',
        description:
          'GDPR med register över behandlingar (RoPA), dataskyddskontroller, begäranden från registrerade och 72-timmarsflödet för anmälan av personuppgiftsincidenter till IMY.',
      },
      hero: {
        eyebrow: 'Ramverk',
        title: 'GDPR, från behandlingsregister till incidentanmälan',
        description:
          'Håll ert behandlingsregister aktuellt, hantera begäranden från registrerade och kör 72-timmarsflödet för anmälan till IMY, allt kopplat till kontrollerna som skyddar uppgifterna.',
        primaryCta: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
        secondaryCta: { label: 'Läs GDPR-dokumentationen', href: '/docs/frameworks/gdpr' },
      },
      painPoints: {
        title: 'GDPR är gammalt men överraskar fortfarande',
        items: [
          {
            title: 'RoPA blir gammalt',
            description:
              'Behandlingsregister i ett kalkylark blir inaktuella i samma stund systemen ändras.',
          },
          {
            title: '72-timmarsklockan',
            description:
              'En personuppgiftsincident måste anmälas till IMY inom 72 timmar, och klockan är obeveklig.',
          },
          {
            title: 'Begäranden hopar sig',
            description:
              'Begäranden från registrerade kommer med en månadsfrist och ingen tydlig process.',
          },
        ],
      },
      steps: {
        title: 'Så gör OptiTech er efterlevnadsredo',
        items: [
          {
            title: 'Bygg ert RoPA',
            description:
              'Ett levande register över behandlingar med ändamål, kategorier och överföringar.',
          },
          {
            title: 'Hantera begäranden',
            description: 'Följ begäranden från registrerade mot månadsfristen.',
          },
          {
            title: 'Anmäl incidenter till IMY',
            description:
              'Ett guidat 72-timmarsflöde för incidentanmälan, förifyllt från incidenten.',
          },
        ],
      },
      features: {
        title: 'Det här ger OptiTech er för GDPR',
        items: [
          { title: 'Behandlingsregister', description: 'RoPA enligt artikel 30, hållet aktuellt.' },
          {
            title: 'Begäranden från registrerade',
            description: 'Månadsfristen följd per begäran.',
          },
          {
            title: 'IMY-incidentflöde',
            description: '72-timmarsanmälan enligt artikel 33, guidat.',
          },
          {
            title: 'Dataskyddskontroller',
            description: 'Kontroller kopplade till behandlingen de skyddar.',
          },
          {
            title: 'Tredjelandsöverföringar',
            description: 'Följ överföringar och skyddsåtgärder på ett ställe.',
          },
          {
            title: 'Passar med ISO 27701',
            description: 'Utöka till ett integritetsledningssystem.',
          },
        ],
      },
      stats: [
        { value: '20 M€ / 4 %', label: 'Maximal GDPR-sanktion' },
        { value: '72 h', label: 'Incidentanmälan till IMY' },
        { value: '1 månad', label: 'Frist för begäran från registrerad' },
      ],
      related: {
        title: 'Omsätt i praktik',
        items: [
          {
            title: 'Incidentrapportering',
            description: 'Det parallella IMY-incidentspåret.',
            href: LINKS.serviceIncidentReporting,
          },
          {
            title: 'ISO 27701',
            description: 'Utöka GDPR till ett integritetsledningssystem.',
            href: '/docs/frameworks/iso-27701',
          },
          {
            title: 'Läs GDPR-dokumentationen',
            description: 'Ramverket på djupet.',
            href: '/docs/frameworks/gdpr',
          },
        ],
      },
      quote: {
        text: 'GDPR är inte svårt för att reglerna ändrades. Det är svårt för att registren slutade stämma med verkligheten.',
        author: 'OptiTech',
        role: 'Produktprincip',
      },
      faq: {
        title: 'Frågor',
        items: [
          {
            question: 'Täcker ni IMY-incidentflödet?',
            answer:
              'Ja. Ett guidat 72-timmarsflöde förifylls från incidenten, parallellt med NIS2-spåret.',
          },
          {
            question: 'Kan vi hålla vårt RoPA aktuellt?',
            answer:
              'Ja. Behandlingsregistret är ett levande register kopplat till ändamål, kategorier och överföringar.',
          },
          {
            question: 'Hur hanteras begäranden från registrerade?',
            answer: 'Varje begäran följs mot månadsfristen med en tydlig process.',
          },
          {
            question: 'Kopplas detta till ISO 27701?',
            answer:
              'Ja. GDPR-kontroller utökas naturligt till ett ISO 27701-integritetsledningssystem.',
          },
        ],
      },
      cta: {
        title: 'Håll GDPR aktuellt, inte bara dokumenterat',
        description: 'RoPA, begäranden från registrerade och IMY-incidentflödet.',
        button: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
      },
    },
  },

  'iso-27001': {
    en: {
      name: 'ISO 27001:2022',
      tagline: 'The full control catalog with continuous evidence and an auditor portal.',
      seo: {
        title: 'ISO 27001:2022 compliance — OptiTech',
        description:
          'ISO 27001:2022 with the full Annex A control catalog, continuous evidence collection, a Statement of Applicability, and a read-only auditor portal.',
      },
      hero: {
        eyebrow: 'Framework',
        title: 'ISO 27001, from control catalog to auditor portal',
        description:
          'Run the full ISO 27001:2022 control catalog with continuous evidence, a Statement of Applicability, and a read-only portal your auditor can work in. Certification becomes a byproduct of a program that is already running.',
        primaryCta: { label: 'Book a free gap analysis', href: CONTACT },
        secondaryCta: { label: 'Read the ISO 27001 docs', href: '/docs/frameworks/iso-27001' },
      },
      painPoints: {
        title: 'Certification should not be a yearly scramble',
        items: [
          {
            title: 'Evidence gathered late',
            description: 'Teams reconstruct a year of evidence in the weeks before the audit.',
          },
          {
            title: 'The SoA is a chore',
            description:
              'Keeping the Statement of Applicability in sync with reality is tedious by hand.',
          },
          {
            title: 'Auditor back-and-forth',
            description: 'Endless requests for screenshots and exports slow the whole audit down.',
          },
        ],
      },
      steps: {
        title: 'How OptiTech gets you certified',
        items: [
          {
            title: 'Scope your ISMS',
            description: 'Set the control set and Statement of Applicability from a gap analysis.',
          },
          {
            title: 'Collect evidence continuously',
            description: 'Controls prove themselves from your live systems, all year round.',
          },
          {
            title: 'Give the auditor a portal',
            description: 'A read-only portal with the full timestamped evidence chain.',
          },
        ],
      },
      features: {
        title: 'What OptiTech gives you for ISO 27001',
        items: [
          {
            title: 'Annex A catalog',
            description: 'The full 2022 control set, ready to activate.',
          },
          {
            title: 'Statement of Applicability',
            description: 'The SoA produced and kept current.',
          },
          {
            title: 'Continuous evidence',
            description: 'Controls proven from your live systems year-round.',
          },
          {
            title: 'Auditor portal',
            description: 'Read-only access with the whole evidence chain.',
          },
          {
            title: 'Risk-driven',
            description: 'A risk register that drives your control selection.',
          },
          {
            title: 'Cross-mapped',
            description: 'ISO controls that also satisfy NIS2, SOC 2, and more.',
          },
        ],
      },
      stats: [
        { value: '2022', label: 'The current control catalog' },
        { value: 'SoA', label: 'Statement of Applicability produced' },
        { value: 'Year-round', label: 'Continuous evidence, not a scramble' },
      ],
      related: {
        title: 'Put it into practice',
        items: [
          {
            title: 'Evidence collection',
            description: 'Prove your Annex A controls continuously.',
            href: '/services/evidence-collection',
          },
          {
            title: 'Auditor mode',
            description: 'The read-only portal and SoA.',
            href: '/services/audit-mode',
          },
          {
            title: 'Read the ISO 27001 docs',
            description: 'The framework in depth.',
            href: '/docs/frameworks/iso-27001',
          },
        ],
      },
      quote: {
        text: 'Certification is easy when the program never stopped running. The audit just reads what is already there.',
        author: 'OptiTech',
        role: 'Product principle',
      },
      faq: {
        title: 'Questions',
        items: [
          {
            question: 'Is this the 2022 version?',
            answer: 'Yes. OptiTech runs the ISO 27001:2022 Annex A control catalog.',
          },
          {
            question: 'Do you produce the Statement of Applicability?',
            answer: 'Yes. The SoA is produced per assessment and kept in sync with your controls.',
          },
          {
            question: 'Can our auditor work in the tool?',
            answer: 'Yes. A read-only auditor portal exposes the full timestamped evidence chain.',
          },
          {
            question: 'Does ISO evidence help with other frameworks?',
            answer:
              'Yes. Controls are cross-mapped, so the same evidence counts toward NIS2, SOC 2, and more.',
          },
        ],
      },
      cta: {
        title: 'Make ISO 27001 a program, not a project',
        description: 'Continuous evidence, a live SoA, and an auditor portal.',
        button: { label: 'Book a free gap analysis', href: CONTACT },
      },
    },
    sv: {
      name: 'ISO 27001:2022',
      tagline: 'Hela kontrollkatalogen med kontinuerliga bevis och en revisorsportal.',
      seo: {
        title: 'ISO 27001:2022-efterlevnad — OptiTech',
        description:
          'ISO 27001:2022 med hela Annex A-kontrollkatalogen, kontinuerlig bevisinsamling, en tillämplighetsförklaring och en läsbehörig revisorsportal.',
      },
      hero: {
        eyebrow: 'Ramverk',
        title: 'ISO 27001, från kontrollkatalog till revisorsportal',
        description:
          'Kör hela ISO 27001:2022-kontrollkatalogen med kontinuerliga bevis, en tillämplighetsförklaring och en läsbehörig portal er revisor kan arbeta i. Certifiering blir en biprodukt av ett program som redan är igång.',
        primaryCta: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
        secondaryCta: {
          label: 'Läs ISO 27001-dokumentationen',
          href: '/docs/frameworks/iso-27001',
        },
      },
      painPoints: {
        title: 'Certifiering ska inte vara en årlig stress',
        items: [
          {
            title: 'Bevis samlas för sent',
            description: 'Team rekonstruerar ett års bevis under veckorna före revisionen.',
          },
          {
            title: 'SoA är ett gnetande',
            description:
              'Att hålla tillämplighetsförklaringen i takt med verkligheten är tröttsamt för hand.',
          },
          {
            title: 'Fram och tillbaka med revisorn',
            description:
              'Ändlösa förfrågningar om skärmdumpar och exporter bromsar hela revisionen.',
          },
        ],
      },
      steps: {
        title: 'Så gör OptiTech er certifieringsredo',
        items: [
          {
            title: 'Avgränsa ert ledningssystem',
            description:
              'Sätt kontrolluppsättningen och tillämplighetsförklaringen från en gap-analys.',
          },
          {
            title: 'Samla bevis kontinuerligt',
            description: 'Kontroller bevisar sig själva från era live-system, året runt.',
          },
          {
            title: 'Ge revisorn en portal',
            description: 'En läsbehörig portal med hela den tidsstämplade beviskedjan.',
          },
        ],
      },
      features: {
        title: 'Det här ger OptiTech er för ISO 27001',
        items: [
          {
            title: 'Annex A-katalog',
            description: 'Hela 2022-kontrolluppsättningen, redo att aktivera.',
          },
          { title: 'Tillämplighetsförklaring', description: 'SoA framtagen och hållen aktuell.' },
          {
            title: 'Kontinuerliga bevis',
            description: 'Kontroller bevisade från era live-system året runt.',
          },
          { title: 'Revisorsportal', description: 'Läsbehörig åtkomst med hela beviskedjan.' },
          { title: 'Riskdriven', description: 'Ett riskregister som styr ert kontrollval.' },
          {
            title: 'Korsmappad',
            description: 'ISO-kontroller som även uppfyller NIS2, SOC 2 med flera.',
          },
        ],
      },
      stats: [
        { value: '2022', label: 'Den aktuella kontrollkatalogen' },
        { value: 'SoA', label: 'Tillämplighetsförklaring framtagen' },
        { value: 'Året runt', label: 'Kontinuerliga bevis, inte en stress' },
      ],
      related: {
        title: 'Omsätt i praktik',
        items: [
          {
            title: 'Bevisinsamling',
            description: 'Bevisa era Annex A-kontroller kontinuerligt.',
            href: '/services/evidence-collection',
          },
          {
            title: 'Revisionsläge',
            description: 'Den läsbehöriga portalen och SoA.',
            href: '/services/audit-mode',
          },
          {
            title: 'Läs ISO 27001-dokumentationen',
            description: 'Ramverket på djupet.',
            href: '/docs/frameworks/iso-27001',
          },
        ],
      },
      quote: {
        text: 'Certifiering är enkel när programmet aldrig slutade köra. Revisionen läser bara det som redan finns där.',
        author: 'OptiTech',
        role: 'Produktprincip',
      },
      faq: {
        title: 'Frågor',
        items: [
          {
            question: 'Är detta 2022-versionen?',
            answer: 'Ja. OptiTech kör ISO 27001:2022 Annex A-kontrollkatalog.',
          },
          {
            question: 'Tar ni fram tillämplighetsförklaringen?',
            answer: 'Ja. SoA tas fram per bedömning och hålls i takt med era kontroller.',
          },
          {
            question: 'Kan vår revisor arbeta i verktyget?',
            answer:
              'Ja. En läsbehörig revisorsportal exponerar hela den tidsstämplade beviskedjan.',
          },
          {
            question: 'Hjälper ISO-bevis med andra ramverk?',
            answer:
              'Ja. Kontroller är korsmappade, så samma bevis räknas mot NIS2, SOC 2 med flera.',
          },
        ],
      },
      cta: {
        title: 'Gör ISO 27001 till ett program, inte ett projekt',
        description: 'Kontinuerliga bevis, en levande SoA och en revisorsportal.',
        button: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
      },
    },
  },

  'eu-ai-act': {
    en: {
      name: 'EU AI Act',
      tagline: 'Scoping for high-risk AI and the requirements phasing in through 2027.',
      seo: {
        title: 'EU AI Act compliance — OptiTech',
        description:
          'Scope your AI systems against the EU AI Act, identify high-risk use, and prepare for the obligations phasing in through 2027, with sanctions up to 35 M€ or 7% of turnover.',
      },
      hero: {
        eyebrow: 'Framework',
        title: 'The EU AI Act, scoped before it bites',
        description:
          'High-risk obligations phase in through 2027 and sanctions reach 35 M€ or 7% of turnover. OptiTech scopes your AI systems, flags high-risk use, and maps the controls you will need, so the next wave does not catch you off guard.',
        primaryCta: { label: 'Book a free gap analysis', href: CONTACT },
        secondaryCta: { label: 'Read the AI Act docs', href: '/docs/frameworks/eu-ai-act' },
      },
      painPoints: {
        title: 'The next regulatory wave is AI',
        items: [
          {
            title: 'High-risk is broad',
            description:
              'HR, credit, and infrastructure uses can all land in the high-risk category.',
          },
          {
            title: 'The largest sanctions yet',
            description: 'Up to 35 M€ or 7% of turnover, higher than GDPR.',
          },
          {
            title: 'Phasing is confusing',
            description: 'Obligations arrive in stages through 2027, and it is easy to lose track.',
          },
        ],
      },
      steps: {
        title: 'How OptiTech gets you ready',
        items: [
          {
            title: 'Inventory your AI',
            description: 'Catalog the AI systems you build or use and their purposes.',
          },
          {
            title: 'Classify risk',
            description: 'Flag high-risk systems and the obligations that attach to them.',
          },
          {
            title: 'Map the controls',
            description: 'Prepare the documentation and controls ahead of each phase-in date.',
          },
        ],
      },
      features: {
        title: 'What OptiTech gives you for the AI Act',
        items: [
          { title: 'AI system inventory', description: 'A register of the AI you build and use.' },
          {
            title: 'High-risk scoping',
            description: 'Identify which systems fall into the high-risk tier.',
          },
          {
            title: 'Phase-in tracking',
            description: 'Stay ahead of the 2025 to 2027 obligations.',
          },
          {
            title: 'Control mapping',
            description: 'The documentation and controls each tier requires.',
          },
          {
            title: 'Cross-mapped',
            description: 'Reuse ISO 27001 and governance controls you already have.',
          },
          {
            title: 'Evidence-backed',
            description: 'Prove your AI governance, not just declare it.',
          },
        ],
      },
      stats: [
        { value: '35 M€ / 7%', label: 'Maximum AI Act sanction' },
        { value: '2025-2027', label: 'Obligations phasing in' },
        { value: 'High-risk', label: 'The tier that carries the weight' },
      ],
      related: {
        title: 'Put it into practice',
        items: [
          {
            title: 'Framework library',
            description: 'Reuse controls across the AI Act and ISO 27001.',
            href: '/services/framework-library',
          },
          {
            title: 'Risk register',
            description: 'Assess and treat AI risk.',
            href: '/services/risk-register',
          },
          {
            title: 'Read the AI Act docs',
            description: 'The framework in depth.',
            href: '/docs/frameworks/eu-ai-act',
          },
        ],
      },
      quote: {
        text: 'The AI Act is the next wave. Scoping now costs an afternoon; scrambling later costs a lot more.',
        author: 'OptiTech',
        role: 'Product principle',
      },
      faq: {
        title: 'Questions',
        items: [
          {
            question: 'When does the AI Act apply?',
            answer:
              'Obligations phase in through 2027. Scoping now tells you which apply to you and when.',
          },
          {
            question: 'What counts as high-risk?',
            answer:
              'Uses such as HR, credit scoring, and critical infrastructure often fall into the high-risk tier.',
          },
          {
            question: 'Can we reuse our ISO controls?',
            answer:
              'Yes. Governance and ISO 27001 controls are cross-mapped, so you start from what you already have.',
          },
          {
            question: 'How large are the sanctions?',
            answer: 'Up to 35 M€ or 7% of global turnover, the highest of the frameworks we cover.',
          },
        ],
      },
      cta: {
        title: 'Scope your AI before the deadlines',
        description: 'Inventory, classify, and prepare for the AI Act.',
        button: { label: 'Book a free gap analysis', href: CONTACT },
      },
    },
    sv: {
      name: 'EU:s AI Act',
      tagline: 'Scoping för högrisk-AI och kraven som fasas in fram till 2027.',
      seo: {
        title: 'EU AI Act-efterlevnad — OptiTech',
        description:
          'Avgränsa era AI-system mot EU:s AI Act, identifiera högriskanvändning och förbered er för skyldigheterna som fasas in fram till 2027, med sanktioner upp till 35 M€ eller 7 % av omsättningen.',
      },
      hero: {
        eyebrow: 'Ramverk',
        title: 'EU:s AI Act, avgränsad innan den biter',
        description:
          'Högriskskyldigheter fasas in fram till 2027 och sanktioner når 35 M€ eller 7 % av omsättningen. OptiTech avgränsar era AI-system, flaggar högriskanvändning och mappar kontrollerna ni kommer behöva, så nästa våg inte överraskar er.',
        primaryCta: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
        secondaryCta: { label: 'Läs AI Act-dokumentationen', href: '/docs/frameworks/eu-ai-act' },
      },
      painPoints: {
        title: 'Nästa regulatoriska våg är AI',
        items: [
          {
            title: 'Högrisk är brett',
            description:
              'Användning inom HR, kredit och infrastruktur kan alla hamna i högriskkategorin.',
          },
          {
            title: 'De största sanktionerna hittills',
            description: 'Upp till 35 M€ eller 7 % av omsättningen, högre än GDPR.',
          },
          {
            title: 'Infasningen är förvirrande',
            description:
              'Skyldigheter kommer i steg fram till 2027, och det är lätt att tappa räkningen.',
          },
        ],
      },
      steps: {
        title: 'Så gör OptiTech er redo',
        items: [
          {
            title: 'Inventera er AI',
            description: 'Katalogisera AI-systemen ni bygger eller använder och deras ändamål.',
          },
          {
            title: 'Klassificera risk',
            description: 'Flagga högrisksystem och skyldigheterna som följer med dem.',
          },
          {
            title: 'Mappa kontrollerna',
            description: 'Förbered dokumentationen och kontrollerna inför varje infasningsdatum.',
          },
        ],
      },
      features: {
        title: 'Det här ger OptiTech er för AI Act',
        items: [
          {
            title: 'AI-systeminventering',
            description: 'Ett register över AI:n ni bygger och använder.',
          },
          {
            title: 'Högrisk-scoping',
            description: 'Identifiera vilka system som hamnar i högrisknivån.',
          },
          {
            title: 'Infasningsspårning',
            description: 'Ligg steget före skyldigheterna 2025 till 2027.',
          },
          {
            title: 'Kontrollmappning',
            description: 'Dokumentationen och kontrollerna varje nivå kräver.',
          },
          {
            title: 'Korsmappad',
            description: 'Återanvänd ISO 27001- och styrningskontroller ni redan har.',
          },
          { title: 'Bevisbackad', description: 'Bevisa er AI-styrning, inte bara deklarera den.' },
        ],
      },
      stats: [
        { value: '35 M€ / 7 %', label: 'Maximal AI Act-sanktion' },
        { value: '2025-2027', label: 'Skyldigheter som fasas in' },
        { value: 'Högrisk', label: 'Nivån som bär tyngden' },
      ],
      related: {
        title: 'Omsätt i praktik',
        items: [
          {
            title: 'Ramverksbibliotek',
            description: 'Återanvänd kontroller över AI Act och ISO 27001.',
            href: '/services/framework-library',
          },
          {
            title: 'Riskregister',
            description: 'Bedöm och behandla AI-risk.',
            href: '/services/risk-register',
          },
          {
            title: 'Läs AI Act-dokumentationen',
            description: 'Ramverket på djupet.',
            href: '/docs/frameworks/eu-ai-act',
          },
        ],
      },
      quote: {
        text: 'AI Act är nästa våg. Att avgränsa nu kostar en eftermiddag; att stressa senare kostar mycket mer.',
        author: 'OptiTech',
        role: 'Produktprincip',
      },
      faq: {
        title: 'Frågor',
        items: [
          {
            question: 'När gäller AI Act?',
            answer:
              'Skyldigheter fasas in fram till 2027. Att avgränsa nu visar vilka som gäller er och när.',
          },
          {
            question: 'Vad räknas som högrisk?',
            answer:
              'Användning som HR, kreditbedömning och kritisk infrastruktur hamnar ofta i högrisknivån.',
          },
          {
            question: 'Kan vi återanvända våra ISO-kontroller?',
            answer:
              'Ja. Styrnings- och ISO 27001-kontroller är korsmappade, så ni börjar från det ni redan har.',
          },
          {
            question: 'Hur stora är sanktionerna?',
            answer: 'Upp till 35 M€ eller 7 % av global omsättning, högst av ramverken vi täcker.',
          },
        ],
      },
      cta: {
        title: 'Avgränsa er AI före deadlines',
        description: 'Inventera, klassificera och förbered er för AI Act.',
        button: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
      },
    },
  },

  cra: {
    en: {
      name: 'CRA',
      tagline: 'Security requirements for products with digital elements.',
      seo: {
        title: 'Cyber Resilience Act (CRA) compliance — OptiTech',
        description:
          'The EU Cyber Resilience Act sets security requirements for products with digital elements. Prepare for the next wave after NIS2, with obligations phasing in through 2027.',
      },
      hero: {
        eyebrow: 'Framework',
        title: 'CRA, the next wave for product companies',
        description:
          'The Cyber Resilience Act sets security requirements for any product with digital elements sold in the EU. OptiTech helps product companies scope the requirements and prepare the evidence before enforcement begins.',
        primaryCta: { label: 'Book a free gap analysis', href: CONTACT },
        secondaryCta: { label: 'Read the CRA docs', href: '/docs/frameworks/cra' },
      },
      painPoints: {
        title: 'If you ship a product with software, CRA is coming',
        items: [
          {
            title: 'Broad product scope',
            description: 'Almost any product with digital elements sold in the EU is caught.',
          },
          {
            title: 'Security by design',
            description:
              'Requirements cover the whole lifecycle, including vulnerability handling and updates.',
          },
          {
            title: 'Enforcement is near',
            description:
              'Obligations phase in through 2027, with sanctions up to 15 M€ or 2.5% of turnover.',
          },
        ],
      },
      steps: {
        title: 'How OptiTech gets you ready',
        items: [
          {
            title: 'Scope your products',
            description: 'Identify which products with digital elements fall under the CRA.',
          },
          {
            title: 'Map the requirements',
            description:
              'Security-by-design, vulnerability handling, and update obligations as controls.',
          },
          {
            title: 'Build the evidence',
            description: 'Prepare the documentation and proof each product needs.',
          },
        ],
      },
      features: {
        title: 'What OptiTech gives you for CRA',
        items: [
          { title: 'Product scoping', description: 'Identify which products the CRA covers.' },
          {
            title: 'Lifecycle controls',
            description: 'Security by design across the product lifecycle.',
          },
          {
            title: 'Vulnerability handling',
            description: 'Processes for reporting and remediation.',
          },
          {
            title: 'Update obligations',
            description: 'Track the ongoing security update requirements.',
          },
          { title: 'Cross-mapped', description: 'Reuse ISO 27001 controls where they apply.' },
          { title: 'Evidence-backed', description: 'Prove product security, not just claim it.' },
        ],
      },
      stats: [
        { value: '15 M€ / 2.5%', label: 'Maximum CRA sanction' },
        { value: '2026-2027', label: 'Obligations phasing in' },
        { value: 'Digital elements', label: 'Products in scope' },
      ],
      related: {
        title: 'Put it into practice',
        items: [
          {
            title: 'Framework library',
            description: 'Reuse controls across CRA and ISO 27001.',
            href: '/services/framework-library',
          },
          {
            title: 'Evidence collection',
            description: 'Prove your product security controls.',
            href: '/services/evidence-collection',
          },
          {
            title: 'Read the CRA docs',
            description: 'The framework in depth.',
            href: '/docs/frameworks/cra',
          },
        ],
      },
      quote: {
        text: 'NIS2 was for operators. CRA is for the products they run. If you make software, you are next.',
        author: 'OptiTech',
        role: 'Product principle',
      },
      faq: {
        title: 'Questions',
        items: [
          {
            question: 'Does the CRA apply to us?',
            answer:
              'If you sell a product with digital elements in the EU, very likely. A gap analysis confirms scope.',
          },
          {
            question: 'What does the CRA require?',
            answer:
              'Security by design across the lifecycle, vulnerability handling, and ongoing security updates.',
          },
          {
            question: 'When does it take effect?',
            answer: 'Obligations phase in through 2027. Preparing now avoids a scramble later.',
          },
          {
            question: 'Can we reuse ISO 27001 work?',
            answer:
              'Yes. Controls are cross-mapped, so existing ISO work counts toward the CRA where it applies.',
          },
        ],
      },
      cta: {
        title: 'Prepare your products for the CRA',
        description: 'Scope, map, and build the evidence before enforcement.',
        button: { label: 'Book a free gap analysis', href: CONTACT },
      },
    },
    sv: {
      name: 'CRA',
      tagline: 'Säkerhetskrav för produkter med digitala element.',
      seo: {
        title: 'Cyber Resilience Act (CRA)-efterlevnad — OptiTech',
        description:
          'EU:s Cyber Resilience Act ställer säkerhetskrav på produkter med digitala element. Förbered er för nästa våg efter NIS2, med skyldigheter som fasas in fram till 2027.',
      },
      hero: {
        eyebrow: 'Ramverk',
        title: 'CRA, nästa våg för produktbolag',
        description:
          'Cyber Resilience Act ställer säkerhetskrav på varje produkt med digitala element som säljs i EU. OptiTech hjälper produktbolag att avgränsa kraven och förbereda bevisen innan tillsynen börjar.',
        primaryCta: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
        secondaryCta: { label: 'Läs CRA-dokumentationen', href: '/docs/frameworks/cra' },
      },
      painPoints: {
        title: 'Säljer ni en produkt med mjukvara kommer CRA',
        items: [
          {
            title: 'Brett produktomfång',
            description: 'Nästan varje produkt med digitala element som säljs i EU omfattas.',
          },
          {
            title: 'Säkerhet inbyggd',
            description:
              'Kraven täcker hela livscykeln, inklusive sårbarhetshantering och uppdateringar.',
          },
          {
            title: 'Tillsynen är nära',
            description:
              'Skyldigheter fasas in fram till 2027, med sanktioner upp till 15 M€ eller 2,5 % av omsättningen.',
          },
        ],
      },
      steps: {
        title: 'Så gör OptiTech er redo',
        items: [
          {
            title: 'Avgränsa era produkter',
            description: 'Identifiera vilka produkter med digitala element som omfattas av CRA.',
          },
          {
            title: 'Mappa kraven',
            description:
              'Säkerhet inbyggd, sårbarhetshantering och uppdateringsskyldigheter som kontroller.',
          },
          {
            title: 'Bygg bevisen',
            description: 'Förbered dokumentationen och beviset varje produkt behöver.',
          },
        ],
      },
      features: {
        title: 'Det här ger OptiTech er för CRA',
        items: [
          { title: 'Produkt-scoping', description: 'Identifiera vilka produkter CRA omfattar.' },
          {
            title: 'Livscykelkontroller',
            description: 'Säkerhet inbyggd över produktens livscykel.',
          },
          {
            title: 'Sårbarhetshantering',
            description: 'Processer för rapportering och åtgärdande.',
          },
          {
            title: 'Uppdateringsskyldigheter',
            description: 'Följ de löpande kraven på säkerhetsuppdateringar.',
          },
          { title: 'Korsmappad', description: 'Återanvänd ISO 27001-kontroller där de gäller.' },
          { title: 'Bevisbackad', description: 'Bevisa produktsäkerhet, inte bara hävda den.' },
        ],
      },
      stats: [
        { value: '15 M€ / 2,5 %', label: 'Maximal CRA-sanktion' },
        { value: '2026-2027', label: 'Skyldigheter som fasas in' },
        { value: 'Digitala element', label: 'Produkter som omfattas' },
      ],
      related: {
        title: 'Omsätt i praktik',
        items: [
          {
            title: 'Ramverksbibliotek',
            description: 'Återanvänd kontroller över CRA och ISO 27001.',
            href: '/services/framework-library',
          },
          {
            title: 'Bevisinsamling',
            description: 'Bevisa era produktsäkerhetskontroller.',
            href: '/services/evidence-collection',
          },
          {
            title: 'Läs CRA-dokumentationen',
            description: 'Ramverket på djupet.',
            href: '/docs/frameworks/cra',
          },
        ],
      },
      quote: {
        text: 'NIS2 var för operatörer. CRA är för produkterna de kör. Gör ni mjukvara är ni näst på tur.',
        author: 'OptiTech',
        role: 'Produktprincip',
      },
      faq: {
        title: 'Frågor',
        items: [
          {
            question: 'Gäller CRA oss?',
            answer:
              'Om ni säljer en produkt med digitala element i EU, mycket troligt. En gap-analys bekräftar omfattningen.',
          },
          {
            question: 'Vad kräver CRA?',
            answer:
              'Säkerhet inbyggd över livscykeln, sårbarhetshantering och löpande säkerhetsuppdateringar.',
          },
          {
            question: 'När träder det i kraft?',
            answer:
              'Skyldigheter fasas in fram till 2027. Att förbereda nu undviker stress senare.',
          },
          {
            question: 'Kan vi återanvända ISO 27001-arbete?',
            answer:
              'Ja. Kontroller är korsmappade, så befintligt ISO-arbete räknas mot CRA där det gäller.',
          },
        ],
      },
      cta: {
        title: 'Förbered era produkter för CRA',
        description: 'Avgränsa, mappa och bygg bevisen före tillsynen.',
        button: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
      },
    },
  },

  'soc-2': {
    en: {
      name: 'SOC 2',
      tagline: 'The standard for B2B deals with US buyers.',
      seo: {
        title: 'SOC 2 compliance — OptiTech',
        description:
          'SOC 2 mapped to your existing controls, with continuous evidence and an auditor portal. Win enterprise and US deals without starting your program from scratch.',
      },
      hero: {
        eyebrow: 'Framework',
        title: 'SOC 2, mapped to controls you already have',
        description:
          'SOC 2 is the standard US buyers ask for. OptiTech maps it to the controls you run for ISO 27001 and NIS2, collects evidence continuously, and gives your auditor a portal, so a SOC 2 report stops blocking deals.',
        primaryCta: { label: 'Book a free gap analysis', href: CONTACT },
        secondaryCta: { label: 'Read the SOC 2 docs', href: '/docs/frameworks/soc-2' },
      },
      painPoints: {
        title: 'SOC 2 is a gate to enterprise revenue',
        items: [
          {
            title: 'Deals stall without it',
            description: 'US and enterprise buyers ask for a SOC 2 report before they sign.',
          },
          {
            title: 'Starting from zero is slow',
            description: 'Building a SOC 2 program from scratch takes months you may not have.',
          },
          {
            title: 'Evidence is manual',
            description: 'Type 2 needs evidence over a period, not a one-time snapshot.',
          },
        ],
      },
      steps: {
        title: 'How OptiTech gets you a report',
        items: [
          {
            title: 'Map from what you have',
            description:
              'Reuse your ISO 27001 and NIS2 controls against the Trust Services Criteria.',
          },
          {
            title: 'Collect evidence over time',
            description: 'Continuous evidence covers the observation period a Type 2 requires.',
          },
          {
            title: 'Hand off to the auditor',
            description: 'A read-only portal with the full evidence chain speeds the report.',
          },
        ],
      },
      features: {
        title: 'What OptiTech gives you for SOC 2',
        items: [
          {
            title: 'Trust Services Criteria',
            description: 'Security and the other TSC, ready to activate.',
          },
          { title: 'Cross-mapping', description: 'Reuse ISO 27001 and NIS2 controls.' },
          {
            title: 'Continuous evidence',
            description: 'Coverage across the Type 2 observation period.',
          },
          {
            title: 'Auditor portal',
            description: 'Read-only access with the full evidence chain.',
          },
          { title: 'Trust Center', description: 'Publish your posture to shorten sales cycles.' },
          {
            title: 'AI questionnaires',
            description: 'Answer buyer security reviews from your controls.',
          },
        ],
      },
      stats: [
        { value: 'Type 1 + 2', label: 'Both report types supported' },
        { value: '1×', label: 'Reuse controls from ISO and NIS2' },
        { value: 'Portal', label: 'Auditor access with full evidence' },
      ],
      related: {
        title: 'Put it into practice',
        items: [
          {
            title: 'Trust Center',
            description: 'Show your SOC 2 posture to buyers.',
            href: '/services/trust-center',
          },
          {
            title: 'Auditor mode',
            description: 'The read-only auditor portal.',
            href: '/services/audit-mode',
          },
          {
            title: 'Read the SOC 2 docs',
            description: 'The framework in depth.',
            href: '/docs/frameworks/soc-2',
          },
        ],
      },
      quote: {
        text: 'SOC 2 should not be a second program. It should be a report your existing controls already earn.',
        author: 'OptiTech',
        role: 'Product principle',
      },
      faq: {
        title: 'Questions',
        items: [
          {
            question: 'Do you support Type 1 and Type 2?',
            answer:
              'Yes. Continuous evidence covers the observation period a Type 2 report requires.',
          },
          {
            question: 'Can we reuse our ISO 27001 controls?',
            answer:
              'Yes. Controls are cross-mapped to the Trust Services Criteria, so you start from what you have.',
          },
          {
            question: 'Can our auditor work in the tool?',
            answer: 'Yes. A read-only auditor portal exposes the full evidence chain.',
          },
          {
            question: 'Does it help answer buyer questionnaires?',
            answer:
              'Yes. The AI copilot drafts answers from your controls, and the Trust Center publishes your posture.',
          },
        ],
      },
      cta: {
        title: 'Stop letting SOC 2 block deals',
        description: 'Map it to your controls and collect evidence continuously.',
        button: { label: 'Book a free gap analysis', href: CONTACT },
      },
    },
    sv: {
      name: 'SOC 2',
      tagline: 'Standarden för B2B-affärer med amerikanska köpare.',
      seo: {
        title: 'SOC 2-efterlevnad — OptiTech',
        description:
          'SOC 2 mappad till era befintliga kontroller, med kontinuerliga bevis och en revisorsportal. Vinn enterprise- och USA-affärer utan att börja om ert program från noll.',
      },
      hero: {
        eyebrow: 'Ramverk',
        title: 'SOC 2, mappad till kontroller ni redan har',
        description:
          'SOC 2 är standarden amerikanska köpare frågar efter. OptiTech mappar den till kontrollerna ni kör för ISO 27001 och NIS2, samlar bevis kontinuerligt och ger er revisor en portal, så att en SOC 2-rapport slutar blockera affärer.',
        primaryCta: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
        secondaryCta: { label: 'Läs SOC 2-dokumentationen', href: '/docs/frameworks/soc-2' },
      },
      painPoints: {
        title: 'SOC 2 är en grind till enterprise-intäkter',
        items: [
          {
            title: 'Affärer stannar utan den',
            description:
              'Amerikanska och enterprise-köpare frågar efter en SOC 2-rapport innan de skriver på.',
          },
          {
            title: 'Att börja från noll är långsamt',
            description: 'Att bygga ett SOC 2-program från grunden tar månader ni kanske inte har.',
          },
          {
            title: 'Bevis är manuella',
            description: 'Type 2 kräver bevis över en period, inte en engångsbild.',
          },
        ],
      },
      steps: {
        title: 'Så ger OptiTech er en rapport',
        items: [
          {
            title: 'Mappa från det ni har',
            description:
              'Återanvänd era ISO 27001- och NIS2-kontroller mot Trust Services Criteria.',
          },
          {
            title: 'Samla bevis över tid',
            description: 'Kontinuerliga bevis täcker observationsperioden en Type 2 kräver.',
          },
          {
            title: 'Lämna över till revisorn',
            description: 'En läsbehörig portal med hela beviskedjan snabbar på rapporten.',
          },
        ],
      },
      features: {
        title: 'Det här ger OptiTech er för SOC 2',
        items: [
          {
            title: 'Trust Services Criteria',
            description: 'Säkerhet och övriga TSC, redo att aktivera.',
          },
          { title: 'Korsmappning', description: 'Återanvänd ISO 27001- och NIS2-kontroller.' },
          {
            title: 'Kontinuerliga bevis',
            description: 'Täckning över Type 2-observationsperioden.',
          },
          { title: 'Revisorsportal', description: 'Läsbehörig åtkomst med hela beviskedjan.' },
          { title: 'Trust Center', description: 'Publicera er status för att korta säljcykler.' },
          {
            title: 'AI-enkäter',
            description: 'Besvara köpares säkerhetsgranskningar från era kontroller.',
          },
        ],
      },
      stats: [
        { value: 'Type 1 + 2', label: 'Båda rapporttyperna stöds' },
        { value: '1 gång', label: 'Återanvänd kontroller från ISO och NIS2' },
        { value: 'Portal', label: 'Revisorsåtkomst med fullständiga bevis' },
      ],
      related: {
        title: 'Omsätt i praktik',
        items: [
          {
            title: 'Trust Center',
            description: 'Visa er SOC 2-status för köpare.',
            href: '/services/trust-center',
          },
          {
            title: 'Revisionsläge',
            description: 'Den läsbehöriga revisorsportalen.',
            href: '/services/audit-mode',
          },
          {
            title: 'Läs SOC 2-dokumentationen',
            description: 'Ramverket på djupet.',
            href: '/docs/frameworks/soc-2',
          },
        ],
      },
      quote: {
        text: 'SOC 2 ska inte vara ett andra program. Det ska vara en rapport era befintliga kontroller redan förtjänar.',
        author: 'OptiTech',
        role: 'Produktprincip',
      },
      faq: {
        title: 'Frågor',
        items: [
          {
            question: 'Stödjer ni Type 1 och Type 2?',
            answer: 'Ja. Kontinuerliga bevis täcker observationsperioden en Type 2-rapport kräver.',
          },
          {
            question: 'Kan vi återanvända våra ISO 27001-kontroller?',
            answer:
              'Ja. Kontroller är korsmappade till Trust Services Criteria, så ni börjar från det ni har.',
          },
          {
            question: 'Kan vår revisor arbeta i verktyget?',
            answer: 'Ja. En läsbehörig revisorsportal exponerar hela beviskedjan.',
          },
          {
            question: 'Hjälper det att besvara köpares enkäter?',
            answer:
              'Ja. AI-copiloten utkastar svar från era kontroller, och Trust Center publicerar er status.',
          },
        ],
      },
      cta: {
        title: 'Sluta låta SOC 2 blockera affärer',
        description: 'Mappa den till era kontroller och samla bevis kontinuerligt.',
        button: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
      },
    },
  },

  'iso-27701': {
    en: {
      name: 'ISO 27701',
      tagline: 'Extend ISO 27001 with privacy controls aligned to GDPR.',
      seo: {
        title: 'ISO 27701 compliance — OptiTech',
        description:
          'ISO 27701 extends your ISO 27001 ISMS into a privacy information management system that aligns with GDPR. Reuse your controls and add the privacy layer.',
      },
      hero: {
        eyebrow: 'Framework',
        title: 'ISO 27701, privacy on top of your ISMS',
        description:
          'ISO 27701 turns your ISO 27001 management system into a privacy information management system that maps cleanly to GDPR. OptiTech reuses your existing controls and adds the privacy extension on top.',
        primaryCta: { label: 'Book a free gap analysis', href: CONTACT },
        secondaryCta: { label: 'Read the ISO 27701 docs', href: '/docs/frameworks/iso-27701' },
      },
      painPoints: {
        title: 'Privacy and security are managed apart',
        items: [
          {
            title: 'Duplicated effort',
            description:
              'GDPR and ISO 27001 are run as separate programs with overlapping controls.',
          },
          {
            title: 'No certifiable privacy',
            description: 'GDPR has no certificate. Buyers increasingly want ISO 27701 as proof.',
          },
          {
            title: 'Mapping is manual',
            description: 'Linking privacy controls to your ISMS by hand is slow and brittle.',
          },
        ],
      },
      steps: {
        title: 'How OptiTech gets you there',
        items: [
          {
            title: 'Start from ISO 27001',
            description: 'Reuse your existing ISMS and controls as the foundation.',
          },
          {
            title: 'Add the privacy extension',
            description: 'Layer on the ISO 27701 controls for controllers and processors.',
          },
          {
            title: 'Align with GDPR',
            description: 'Map the privacy controls to your GDPR records and obligations.',
          },
        ],
      },
      features: {
        title: 'What OptiTech gives you for ISO 27701',
        items: [
          { title: 'PIMS extension', description: 'The privacy layer on top of ISO 27001.' },
          { title: 'Controller and processor', description: 'Controls for both roles.' },
          {
            title: 'GDPR alignment',
            description: 'Privacy controls linked to your RoPA and obligations.',
          },
          {
            title: 'Reuse your ISMS',
            description: 'Start from the ISO 27001 controls you already run.',
          },
          { title: 'Continuous evidence', description: 'Prove the privacy controls continuously.' },
          { title: 'Auditor portal', description: 'A read-only portal for certification.' },
        ],
      },
      stats: [
        { value: '27001 + privacy', label: 'ISMS extended to a PIMS' },
        { value: 'GDPR', label: 'Privacy controls mapped to the regulation' },
        { value: '1×', label: 'Reuse the controls you already run' },
      ],
      related: {
        title: 'Put it into practice',
        items: [
          {
            title: 'GDPR',
            description: 'The regulation ISO 27701 aligns to.',
            href: '/docs/frameworks/gdpr',
          },
          {
            title: 'ISO 27001',
            description: 'The ISMS you extend.',
            href: '/docs/frameworks/iso-27001',
          },
          {
            title: 'Read the ISO 27701 docs',
            description: 'The framework in depth.',
            href: '/docs/frameworks/iso-27701',
          },
        ],
      },
      quote: {
        text: 'GDPR tells you what to do. ISO 27701 lets you prove you did it, on top of the ISMS you already run.',
        author: 'OptiTech',
        role: 'Product principle',
      },
      faq: {
        title: 'Questions',
        items: [
          {
            question: 'Do we need ISO 27001 first?',
            answer:
              'ISO 27701 extends an ISO 27001 ISMS, so it builds on that foundation. OptiTech runs both together.',
          },
          {
            question: 'Does it map to GDPR?',
            answer:
              'Yes. The privacy controls align with GDPR and link to your records of processing.',
          },
          {
            question: 'Can we reuse our ISO 27001 controls?',
            answer:
              'Yes. You start from the controls you already run and add the privacy extension.',
          },
          {
            question: 'Is it certifiable?',
            answer:
              'Yes. Unlike GDPR, ISO 27701 can be certified, which buyers increasingly ask for.',
          },
        ],
      },
      cta: {
        title: 'Turn GDPR work into a certifiable PIMS',
        description: 'Extend your ISMS with the ISO 27701 privacy layer.',
        button: { label: 'Book a free gap analysis', href: CONTACT },
      },
    },
    sv: {
      name: 'ISO 27701',
      tagline: 'Utöka ISO 27001 med integritetskontroller i linje med GDPR.',
      seo: {
        title: 'ISO 27701-efterlevnad — OptiTech',
        description:
          'ISO 27701 utökar ert ISO 27001-ledningssystem till ett integritetsledningssystem som passar med GDPR. Återanvänd era kontroller och lägg till integritetslagret.',
      },
      hero: {
        eyebrow: 'Ramverk',
        title: 'ISO 27701, integritet ovanpå ert ledningssystem',
        description:
          'ISO 27701 gör ert ISO 27001-ledningssystem till ett integritetsledningssystem som mappar rent mot GDPR. OptiTech återanvänder era befintliga kontroller och lägger integritetsutökningen ovanpå.',
        primaryCta: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
        secondaryCta: {
          label: 'Läs ISO 27701-dokumentationen',
          href: '/docs/frameworks/iso-27701',
        },
      },
      painPoints: {
        title: 'Integritet och säkerhet hanteras var för sig',
        items: [
          {
            title: 'Dubbelarbete',
            description:
              'GDPR och ISO 27001 körs som separata program med överlappande kontroller.',
          },
          {
            title: 'Ingen certifierbar integritet',
            description:
              'GDPR har inget certifikat. Köpare vill allt oftare ha ISO 27701 som bevis.',
          },
          {
            title: 'Mappning är manuell',
            description:
              'Att koppla integritetskontroller till ert ledningssystem för hand är långsamt och skört.',
          },
        ],
      },
      steps: {
        title: 'Så tar OptiTech er dit',
        items: [
          {
            title: 'Utgå från ISO 27001',
            description: 'Återanvänd ert befintliga ledningssystem och kontroller som grund.',
          },
          {
            title: 'Lägg till integritetsutökningen',
            description: 'Lägg på ISO 27701-kontrollerna för personuppgiftsansvariga och biträden.',
          },
          {
            title: 'Passa ihop med GDPR',
            description: 'Mappa integritetskontrollerna till era GDPR-register och skyldigheter.',
          },
        ],
      },
      features: {
        title: 'Det här ger OptiTech er för ISO 27701',
        items: [
          { title: 'PIMS-utökning', description: 'Integritetslagret ovanpå ISO 27001.' },
          { title: 'Ansvarig och biträde', description: 'Kontroller för båda rollerna.' },
          {
            title: 'GDPR-anpassning',
            description: 'Integritetskontroller kopplade till ert RoPA och era skyldigheter.',
          },
          {
            title: 'Återanvänd ert ledningssystem',
            description: 'Börja från ISO 27001-kontrollerna ni redan kör.',
          },
          {
            title: 'Kontinuerliga bevis',
            description: 'Bevisa integritetskontrollerna kontinuerligt.',
          },
          { title: 'Revisorsportal', description: 'En läsbehörig portal för certifiering.' },
        ],
      },
      stats: [
        { value: '27001 + integritet', label: 'Ledningssystem utökat till ett PIMS' },
        { value: 'GDPR', label: 'Integritetskontroller mappade till regleringen' },
        { value: '1 gång', label: 'Återanvänd kontrollerna ni redan kör' },
      ],
      related: {
        title: 'Omsätt i praktik',
        items: [
          {
            title: 'GDPR',
            description: 'Regleringen ISO 27701 anpassas till.',
            href: '/docs/frameworks/gdpr',
          },
          {
            title: 'ISO 27001',
            description: 'Ledningssystemet ni utökar.',
            href: '/docs/frameworks/iso-27001',
          },
          {
            title: 'Läs ISO 27701-dokumentationen',
            description: 'Ramverket på djupet.',
            href: '/docs/frameworks/iso-27701',
          },
        ],
      },
      quote: {
        text: 'GDPR säger vad ni ska göra. ISO 27701 låter er bevisa att ni gjorde det, ovanpå ledningssystemet ni redan kör.',
        author: 'OptiTech',
        role: 'Produktprincip',
      },
      faq: {
        title: 'Frågor',
        items: [
          {
            question: 'Behöver vi ISO 27001 först?',
            answer:
              'ISO 27701 utökar ett ISO 27001-ledningssystem, så det bygger på den grunden. OptiTech kör båda ihop.',
          },
          {
            question: 'Mappar det till GDPR?',
            answer:
              'Ja. Integritetskontrollerna passar med GDPR och kopplas till ert behandlingsregister.',
          },
          {
            question: 'Kan vi återanvända våra ISO 27001-kontroller?',
            answer:
              'Ja. Ni börjar från kontrollerna ni redan kör och lägger till integritetsutökningen.',
          },
          {
            question: 'Är det certifierbart?',
            answer:
              'Ja. Till skillnad från GDPR kan ISO 27701 certifieras, vilket köpare allt oftare frågar efter.',
          },
        ],
      },
      cta: {
        title: 'Gör GDPR-arbete till ett certifierbart PIMS',
        description: 'Utöka ert ledningssystem med ISO 27701-integritetslagret.',
        button: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
      },
    },
  },

  'iso-22301': {
    en: {
      name: 'ISO 22301',
      tagline: 'An auditable business continuity system.',
      seo: {
        title: 'ISO 22301 business continuity — OptiTech',
        description:
          'ISO 22301 gives you an auditable business continuity management system, covering the continuity and resilience obligations NIS2 and DORA also demand.',
      },
      hero: {
        eyebrow: 'Framework',
        title: 'ISO 22301, continuity you can actually prove',
        description:
          'Build an auditable business continuity management system with business impact analysis, recovery objectives, and tested plans, covering the continuity that NIS2 and DORA also require.',
        primaryCta: { label: 'Book a free gap analysis', href: CONTACT },
        secondaryCta: { label: 'Read the ISO 22301 docs', href: '/docs/frameworks/iso-22301' },
      },
      painPoints: {
        title: 'Continuity plans that were never tested',
        items: [
          {
            title: 'Plans on a shelf',
            description: 'A continuity plan nobody tests is a document, not a capability.',
          },
          {
            title: 'No impact analysis',
            description: 'Without a business impact analysis, recovery objectives are guesses.',
          },
          {
            title: 'Overlapping demands',
            description: 'NIS2 and DORA also ask for continuity, often managed separately.',
          },
        ],
      },
      steps: {
        title: 'How OptiTech gets you there',
        items: [
          {
            title: 'Run a business impact analysis',
            description: 'Identify critical activities and set recovery time and point objectives.',
          },
          {
            title: 'Build and test plans',
            description: 'Continuity plans linked to assets, with escalation thresholds.',
          },
          {
            title: 'Prove and improve',
            description: 'Evidence of testing and review, ready for certification.',
          },
        ],
      },
      features: {
        title: 'What OptiTech gives you for ISO 22301',
        items: [
          {
            title: 'Business impact analysis',
            description: 'Critical activities with RTO and RPO.',
          },
          { title: 'Continuity plans', description: 'Plans linked to the assets they protect.' },
          { title: 'Escalation thresholds', description: 'Clear triggers for when to act.' },
          {
            title: 'Testing evidence',
            description: 'Proof that plans were exercised, not just written.',
          },
          {
            title: 'Covers NIS2 and DORA',
            description: 'The continuity those frameworks also demand.',
          },
          { title: 'Auditor portal', description: 'A read-only portal for certification.' },
        ],
      },
      stats: [
        { value: 'BIA', label: 'Business impact analysis built in' },
        { value: 'RTO / RPO', label: 'Recovery objectives, not guesses' },
        { value: 'Tested', label: 'Evidence that plans actually work' },
      ],
      related: {
        title: 'Put it into practice',
        items: [
          {
            title: 'DORA',
            description: 'Operational resilience for finance.',
            href: '/docs/frameworks/dora',
          },
          {
            title: 'NIS2',
            description: 'The continuity NIS2 also requires.',
            href: '/docs/frameworks/nis2',
          },
          {
            title: 'Read the ISO 22301 docs',
            description: 'The framework in depth.',
            href: '/docs/frameworks/iso-22301',
          },
        ],
      },
      quote: {
        text: 'A continuity plan is only real once it has been tested. Everything before that is a hypothesis.',
        author: 'OptiTech',
        role: 'Product principle',
      },
      faq: {
        title: 'Questions',
        items: [
          {
            question: 'Does it include a business impact analysis?',
            answer:
              'Yes. The BIA identifies critical activities and sets recovery time and point objectives.',
          },
          {
            question: 'Does this help with NIS2 and DORA?',
            answer:
              'Yes. The continuity work is cross-mapped, so it covers what those frameworks also demand.',
          },
          {
            question: 'Can we show plans were tested?',
            answer: 'Yes. Evidence of testing and review is kept for certification.',
          },
          {
            question: 'Is it certifiable?',
            answer:
              'Yes. ISO 22301 is a certifiable management system, supported by an auditor portal.',
          },
        ],
      },
      cta: {
        title: 'Make continuity provable',
        description: 'From business impact analysis to tested, auditable plans.',
        button: { label: 'Book a free gap analysis', href: CONTACT },
      },
    },
    sv: {
      name: 'ISO 22301',
      tagline: 'Ett revisionsbart kontinuitetsledningssystem.',
      seo: {
        title: 'ISO 22301 kontinuitet — OptiTech',
        description:
          'ISO 22301 ger er ett revisionsbart kontinuitetsledningssystem som täcker kontinuitets- och motståndskraftskraven som NIS2 och DORA också ställer.',
      },
      hero: {
        eyebrow: 'Ramverk',
        title: 'ISO 22301, kontinuitet ni faktiskt kan bevisa',
        description:
          'Bygg ett revisionsbart kontinuitetsledningssystem med konsekvensanalys, återställningsmål och testade planer, som täcker kontinuiteten NIS2 och DORA också kräver.',
        primaryCta: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
        secondaryCta: {
          label: 'Läs ISO 22301-dokumentationen',
          href: '/docs/frameworks/iso-22301',
        },
      },
      painPoints: {
        title: 'Kontinuitetsplaner som aldrig testades',
        items: [
          {
            title: 'Planer på en hylla',
            description: 'En kontinuitetsplan ingen testar är ett dokument, inte en förmåga.',
          },
          {
            title: 'Ingen konsekvensanalys',
            description: 'Utan en konsekvensanalys är återställningsmål gissningar.',
          },
          {
            title: 'Överlappande krav',
            description: 'NIS2 och DORA kräver också kontinuitet, ofta hanterat separat.',
          },
        ],
      },
      steps: {
        title: 'Så tar OptiTech er dit',
        items: [
          {
            title: 'Gör en konsekvensanalys',
            description:
              'Identifiera kritiska aktiviteter och sätt återställningstids- och punktmål.',
          },
          {
            title: 'Bygg och testa planer',
            description: 'Kontinuitetsplaner kopplade till tillgångar, med eskaleringströsklar.',
          },
          {
            title: 'Bevisa och förbättra',
            description: 'Bevis på testning och granskning, redo för certifiering.',
          },
        ],
      },
      features: {
        title: 'Det här ger OptiTech er för ISO 22301',
        items: [
          { title: 'Konsekvensanalys', description: 'Kritiska aktiviteter med RTO och RPO.' },
          {
            title: 'Kontinuitetsplaner',
            description: 'Planer kopplade till tillgångarna de skyddar.',
          },
          { title: 'Eskaleringströsklar', description: 'Tydliga triggers för när ni ska agera.' },
          { title: 'Testbevis', description: 'Bevis att planer övats, inte bara skrivits.' },
          {
            title: 'Täcker NIS2 och DORA',
            description: 'Kontinuiteten de ramverken också kräver.',
          },
          { title: 'Revisorsportal', description: 'En läsbehörig portal för certifiering.' },
        ],
      },
      stats: [
        { value: 'BIA', label: 'Konsekvensanalys inbyggd' },
        { value: 'RTO / RPO', label: 'Återställningsmål, inte gissningar' },
        { value: 'Testat', label: 'Bevis att planer faktiskt fungerar' },
      ],
      related: {
        title: 'Omsätt i praktik',
        items: [
          {
            title: 'DORA',
            description: 'Operativ motståndskraft för finans.',
            href: '/docs/frameworks/dora',
          },
          {
            title: 'NIS2',
            description: 'Kontinuiteten NIS2 också kräver.',
            href: '/docs/frameworks/nis2',
          },
          {
            title: 'Läs ISO 22301-dokumentationen',
            description: 'Ramverket på djupet.',
            href: '/docs/frameworks/iso-22301',
          },
        ],
      },
      quote: {
        text: 'En kontinuitetsplan är verklig först när den testats. Allt dessförinnan är en hypotes.',
        author: 'OptiTech',
        role: 'Produktprincip',
      },
      faq: {
        title: 'Frågor',
        items: [
          {
            question: 'Ingår en konsekvensanalys?',
            answer:
              'Ja. Konsekvensanalysen identifierar kritiska aktiviteter och sätter återställningstids- och punktmål.',
          },
          {
            question: 'Hjälper detta med NIS2 och DORA?',
            answer:
              'Ja. Kontinuitetsarbetet är korsmappat, så det täcker vad de ramverken också kräver.',
          },
          {
            question: 'Kan vi visa att planer testats?',
            answer: 'Ja. Bevis på testning och granskning sparas för certifiering.',
          },
          {
            question: 'Är det certifierbart?',
            answer:
              'Ja. ISO 22301 är ett certifierbart ledningssystem, stött av en revisorsportal.',
          },
        ],
      },
      cta: {
        title: 'Gör kontinuitet bevisbar',
        description: 'Från konsekvensanalys till testade, revisionsbara planer.',
        button: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
      },
    },
  },

  tisax: {
    en: {
      name: 'TISAX',
      tagline: 'The automotive industry security standard.',
      seo: {
        title: 'TISAX compliance — OptiTech',
        description:
          'TISAX is the security standard required by European automotive OEMs and their supply chains. Map it to your controls and prepare for assessment.',
      },
      hero: {
        eyebrow: 'Framework',
        title: 'TISAX, for the automotive supply chain',
        description:
          'European OEMs require TISAX from their suppliers. OptiTech maps the VDA ISA catalog to controls you may already run for ISO 27001, and prepares the evidence for your assessment.',
        primaryCta: { label: 'Book a free gap analysis', href: CONTACT },
        secondaryCta: { label: 'Read the TISAX docs', href: '/docs/frameworks/tisax' },
      },
      painPoints: {
        title: 'No TISAX label, no automotive business',
        items: [
          {
            title: 'OEMs require it',
            description:
              'European car makers and their tiers will not onboard suppliers without a TISAX label.',
          },
          {
            title: 'VDA ISA is specific',
            description: 'The catalog has its own structure and maturity levels to satisfy.',
          },
          {
            title: 'Prototype and data protection',
            description:
              'Assessment objectives can include strict prototype and data handling requirements.',
          },
        ],
      },
      steps: {
        title: 'How OptiTech gets you ready',
        items: [
          {
            title: 'Scope the assessment',
            description: 'Determine the assessment objectives and levels your OEMs require.',
          },
          {
            title: 'Map from ISO 27001',
            description: 'Reuse your existing controls against the VDA ISA catalog.',
          },
          {
            title: 'Prepare the evidence',
            description: 'Collect and organize the proof your assessor will expect.',
          },
        ],
      },
      features: {
        title: 'What OptiTech gives you for TISAX',
        items: [
          {
            title: 'VDA ISA catalog',
            description: 'The automotive control set, ready to activate.',
          },
          { title: 'Maturity levels', description: 'Track the maturity the assessment requires.' },
          { title: 'ISO 27001 reuse', description: 'Start from the controls you already run.' },
          { title: 'Assessment prep', description: 'Organize evidence for your assessor.' },
          { title: 'Continuous evidence', description: 'Keep proof current between assessments.' },
          { title: 'Auditor portal', description: 'A read-only portal for the assessment.' },
        ],
      },
      stats: [
        { value: 'VDA ISA', label: 'The automotive control catalog' },
        { value: 'OEM-required', label: 'The label suppliers need' },
        { value: '1×', label: 'Reuse your ISO 27001 controls' },
      ],
      related: {
        title: 'Put it into practice',
        items: [
          {
            title: 'ISO 27001',
            description: 'The foundation TISAX builds on.',
            href: '/docs/frameworks/iso-27001',
          },
          {
            title: 'Evidence collection',
            description: 'Prove your TISAX controls continuously.',
            href: '/services/evidence-collection',
          },
          {
            title: 'Read the TISAX docs',
            description: 'The framework in depth.',
            href: '/docs/frameworks/tisax',
          },
        ],
      },
      quote: {
        text: 'In automotive, TISAX is not optional. No label, no place in the supply chain.',
        author: 'OptiTech',
        role: 'Product principle',
      },
      faq: {
        title: 'Questions',
        items: [
          {
            question: 'Who needs TISAX?',
            answer:
              'Suppliers to European automotive OEMs, who require a TISAX label before onboarding.',
          },
          {
            question: 'Can we reuse ISO 27001 work?',
            answer:
              'Yes. The VDA ISA catalog is mapped to ISO 27001, so you start from what you already run.',
          },
          {
            question: 'Does it cover prototype protection?',
            answer:
              'Assessment objectives can include prototype and data protection, which OptiTech helps you scope.',
          },
          {
            question: 'Does OptiTech run the assessment?',
            answer:
              'The assessment is done by an accredited provider; OptiTech prepares and organizes the evidence.',
          },
        ],
      },
      cta: {
        title: 'Get ready for your TISAX assessment',
        description: 'Map from ISO 27001 and prepare the evidence.',
        button: { label: 'Book a free gap analysis', href: CONTACT },
      },
    },
    sv: {
      name: 'TISAX',
      tagline: 'Bilindustrins säkerhetsstandard.',
      seo: {
        title: 'TISAX-efterlevnad — OptiTech',
        description:
          'TISAX är säkerhetsstandarden som krävs av europeiska fordons-OEM:er och deras leverantörskedjor. Mappa den till era kontroller och förbered er för bedömning.',
      },
      hero: {
        eyebrow: 'Ramverk',
        title: 'TISAX, för fordonsleverantörskedjan',
        description:
          'Europeiska OEM:er kräver TISAX av sina leverantörer. OptiTech mappar VDA ISA-katalogen till kontroller ni kanske redan kör för ISO 27001, och förbereder bevisen för er bedömning.',
        primaryCta: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
        secondaryCta: { label: 'Läs TISAX-dokumentationen', href: '/docs/frameworks/tisax' },
      },
      painPoints: {
        title: 'Ingen TISAX-märkning, ingen fordonsaffär',
        items: [
          {
            title: 'OEM:er kräver det',
            description:
              'Europeiska biltillverkare och deras led tar inte in leverantörer utan en TISAX-märkning.',
          },
          {
            title: 'VDA ISA är specifik',
            description: 'Katalogen har sin egen struktur och mognadsnivåer att uppfylla.',
          },
          {
            title: 'Prototyp- och dataskydd',
            description: 'Bedömningsmål kan omfatta strikta krav på prototyp- och datahantering.',
          },
        ],
      },
      steps: {
        title: 'Så gör OptiTech er redo',
        items: [
          {
            title: 'Avgränsa bedömningen',
            description: 'Fastställ bedömningsmålen och nivåerna era OEM:er kräver.',
          },
          {
            title: 'Mappa från ISO 27001',
            description: 'Återanvänd era befintliga kontroller mot VDA ISA-katalogen.',
          },
          {
            title: 'Förbered bevisen',
            description: 'Samla och organisera beviset er bedömare förväntar sig.',
          },
        ],
      },
      features: {
        title: 'Det här ger OptiTech er för TISAX',
        items: [
          {
            title: 'VDA ISA-katalog',
            description: 'Fordonskontrolluppsättningen, redo att aktivera.',
          },
          { title: 'Mognadsnivåer', description: 'Följ mognaden bedömningen kräver.' },
          {
            title: 'ISO 27001-återanvändning',
            description: 'Börja från kontrollerna ni redan kör.',
          },
          { title: 'Bedömningsförberedelse', description: 'Organisera bevis för er bedömare.' },
          {
            title: 'Kontinuerliga bevis',
            description: 'Håll beviset aktuellt mellan bedömningar.',
          },
          { title: 'Revisorsportal', description: 'En läsbehörig portal för bedömningen.' },
        ],
      },
      stats: [
        { value: 'VDA ISA', label: 'Fordonskontrollkatalogen' },
        { value: 'OEM-krav', label: 'Märkningen leverantörer behöver' },
        { value: '1 gång', label: 'Återanvänd era ISO 27001-kontroller' },
      ],
      related: {
        title: 'Omsätt i praktik',
        items: [
          {
            title: 'ISO 27001',
            description: 'Grunden TISAX bygger på.',
            href: '/docs/frameworks/iso-27001',
          },
          {
            title: 'Bevisinsamling',
            description: 'Bevisa era TISAX-kontroller kontinuerligt.',
            href: '/services/evidence-collection',
          },
          {
            title: 'Läs TISAX-dokumentationen',
            description: 'Ramverket på djupet.',
            href: '/docs/frameworks/tisax',
          },
        ],
      },
      quote: {
        text: 'Inom fordon är TISAX inte valfritt. Ingen märkning, ingen plats i leverantörskedjan.',
        author: 'OptiTech',
        role: 'Produktprincip',
      },
      faq: {
        title: 'Frågor',
        items: [
          {
            question: 'Vem behöver TISAX?',
            answer:
              'Leverantörer till europeiska fordons-OEM:er, som kräver en TISAX-märkning innan de tar in er.',
          },
          {
            question: 'Kan vi återanvända ISO 27001-arbete?',
            answer:
              'Ja. VDA ISA-katalogen är mappad till ISO 27001, så ni börjar från det ni redan kör.',
          },
          {
            question: 'Täcker det prototypskydd?',
            answer:
              'Bedömningsmål kan omfatta prototyp- och dataskydd, som OptiTech hjälper er att avgränsa.',
          },
          {
            question: 'Utför OptiTech bedömningen?',
            answer:
              'Bedömningen görs av en ackrediterad leverantör; OptiTech förbereder och organiserar bevisen.',
          },
        ],
      },
      cta: {
        title: 'Bli redo för er TISAX-bedömning',
        description: 'Mappa från ISO 27001 och förbered bevisen.',
        button: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
      },
    },
  },
};

export const FRAMEWORK_SLUGS = Object.keys(FRAMEWORKS);

// Product scene per framework, so no two pages open with the same visual.
const VISUALS = {
  nis2: 'timeline',
  dora: 'register',
  gdpr: 'timeline',
  'iso-27001': 'console',
  'eu-ai-act': 'mapping',
  cra: 'register',
  'soc-2': 'evidence',
  'iso-27701': 'mapping',
  'iso-22301': 'timeline',
  tisax: 'console',
};

export const getFrameworkVisual = (slug) => VISUALS[slug] || 'console';

export const getFrameworkDetailVisual = (slug) =>
  VISUALS[slug] === 'console' ? 'evidence' : 'console';

export const getFramework = (slug) => FRAMEWORKS[slug] || null;

export const getFrameworkList = (locale) =>
  FRAMEWORK_SLUGS.map((slug) => {
    const entry = FRAMEWORKS[slug][locale] || FRAMEWORKS[slug].en;
    return { slug, href: `/frameworks/${slug}`, name: entry.name, tagline: entry.tagline };
  });
