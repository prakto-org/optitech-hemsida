import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

import Content from 'components/pages/blog-post/content';
import AnchorHeading from 'components/shared/anchor-heading';
import Layout from 'components/shared/layout';
import getFormattedDate from 'utils/get-formatted-date';
import getMetadata from 'utils/get-metadata';

const PATHNAME = '/kunskapsbank/it-outsourcing';
const TITLE = 'IT-outsourcing: så outsourcar du utan att tappa kontrollen';
const DESCRIPTION =
  'En praktisk guide till IT-outsourcing för nordiska företag: former, fördelar, risker och hur du behåller regelefterlevnad enligt NIS2, DORA och GDPR.';
const DATE = '2026-08-05T09:00:00';

const mdxComponents = {
  h2: AnchorHeading('h2'),
  h3: AnchorHeading('h3'),
};

const content = `IT-outsourcing kan sänka kostnader och ge tillgång till expertis du inte har internt. Men när du lägger ut drift, säkerhet eller support på en extern part flyttar du inte ansvaret för regelefterlevnad. Här är vad nordiska företag behöver tänka på.

## Vad är IT-outsourcing?

IT-outsourcing innebär att du låter en extern leverantör sköta hela eller delar av din IT-verksamhet. Det kan handla om allt från att driva servrar och nätverk till att bemanna en helpdesk eller ansvara för säkerhetsövervakning dygnet runt. Målet är oftast detsamma: få tillgång till rätt kompetens och kapacitet utan att bygga upp allt internt.

## Vanliga former av outsourcing

- **Managed services.** Löpande drift, underhåll och övervakning av din IT-miljö.
- **Moln och infrastruktur.** Servrar, lagring och plattformar som körs hos en molnleverantör i stället för i egna serverrum.
- **Säkerhetsdrift.** Ett externt säkerhetsteam (SOC) som upptäcker och hanterar incidenter åt dig.
- **Helpdesk och support.** Första och andra linjens support för dina användare.
- **Utveckling och förvaltning.** Extern utveckling och underhåll av system och applikationer.

## Fördelarna

Rätt utförd frigör outsourcing tid och pengar. De vanligaste skälen nordiska företag anger är:

- Lägre och mer förutsägbara kostnader än att anställa och utbilda själv.
- Tillgång till specialistkompetens som är svår att rekrytera.
- Skalbarhet när verksamheten växer eller kraven ändras.
- Mer fokus internt på kärnverksamheten i stället för på IT-drift.

## Riskerna du inte får missa

När din data och dina system hamnar hos en tredje part uppstår nya risker. Var lagras informationen? Vilka underleverantörer anlitar din leverantör? Hur snabbt får du veta om det sker ett intrång? Utan svar på de frågorna byter du bort intern kontroll mot en beroendeställning som kan slå tillbaka vid en incident eller en granskning.

## Outsourcing tar inte bort ditt ansvar

Det här är den viktigaste poängen. Du kan lägga ut arbetet, men inte ansvaret. Flera regelverk gör det tydligt:

- **NIS2** lägger ett personligt ansvar på ledning och styrelse, även för verksamhet som drivs av en leverantör.
- **DORA** kräver att finansiella aktörer har kontroll över sina ICT-tredjepartsleverantörer och för register över dem.
- **GDPR** gör dig till personuppgiftsansvarig medan leverantören är biträde. Det kräver ett personuppgiftsbiträdesavtal och koll på underbiträden.

## Så väljer du rätt leverantör

Gå igenom den här checklistan innan du skriver på:

- Har leverantören relevanta certifieringar, till exempel ISO 27001?
- Var lagras och behandlas din data, och stannar den inom EU och EES?
- Finns ett personuppgiftsbiträdesavtal och en lista över underbiträden?
- Hur ser rutinerna för incidentrapportering och svarstider (SLA) ut?
- Finns en exit-plan så att du kan få tillbaka din data om ni skiljs åt?
- Har du rätt att granska eller revidera leverantörens säkerhetsarbete?

## Håll koll på dina leverantörer löpande

Leverantörsgranskning är inte en engångsövning vid avtalsstart. Riskerna förändras, nya underleverantörer tillkommer och certifieringar löper ut. Klassa dina leverantörer efter risk, samla in bevis på att kraven uppfylls och håll ett register uppdaterat. För företag som omfattas av DORA är ett aktuellt ICT-register dessutom ett formellt krav.

## Så hjälper OptiTech

OptiTech gör leverantörsuppföljning och regelefterlevnad hanterbart. Du kartlägger vilka krav som gäller, samlar in bevis automatiskt från dina system och håller ett leverantörsregister som är redo för både NIS2 och DORA. Läs mer om vårt [ramverksbibliotek](/services/framework-library) eller vår [incidentrapportering](/services/incident-reporting).

Vill du se hur det fungerar för just din verksamhet? [Boka en gratis gap-analys](/contact-sales).`;

export async function generateMetadata() {
  return getMetadata({
    title: TITLE,
    description: DESCRIPTION,
    pathname: PATHNAME,
    type: 'article',
    publishedTime: DATE,
  });
}

const ITOutsourcingPage = () => (
  <Layout isHeaderSticky>
    <div className="safe-paddings">
      <article className="dark relative mx-auto grid max-w-[1536px] grid-cols-12 gap-x-10 pt-20 pb-40 2xl:px-10 xl:gap-x-6 xl:pt-12 xl:pb-32 lg:block lg:max-w-none lg:px-8 lg:pt-10 lg:pb-28 md:px-4 md:pt-8 md:pb-20">
        <div className="col-start-4 col-end-10 mx-5 xl:col-start-1 xl:col-end-9 lg:mx-0">
          <span className="inline-block py-2 font-mono text-[13px] leading-none font-medium -tracking-extra-tight text-gray-new-50 uppercase">
            Kunskapsbank
          </span>
          <h1 className="post-title mt-4 text-5xl leading-dense font-medium tracking-tighter text-white xl:text-[44px] lg:text-[40px] md:text-[36px] sm:text-[32px] xs:text-[28px]">
            {TITLE}
          </h1>
          <p className="mt-5 text-xl leading-snug tracking-tight text-gray-new-70 md:text-lg sm:text-base">
            {DESCRIPTION}
          </p>
          <div className="mt-4 flex items-center justify-between gap-x-4 border-t border-gray-new-20 py-4">
            <span className="text-[15px] leading-dense font-medium tracking-extra-tight text-gray-new-90">
              OptiTech
            </span>
            <time
              className="text-sm leading-none font-medium -tracking-extra-tight text-gray-new-60 uppercase"
              dateTime={DATE}
            >
              {getFormattedDate(DATE)}
            </time>
          </div>
        </div>
        <Content
          className="post-content col-start-4 col-end-10 mx-5 mt-4 xl:col-start-1 xl:col-end-9 lg:mx-0"
          html={
            <MDXRemote
              source={content}
              components={mdxComponents}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          }
        />
      </article>
    </div>
  </Layout>
);

export default ITOutsourcingPage;
