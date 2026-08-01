import { getLocale } from 'next-intl/server';

import { MarketingListing } from 'components/pages/marketing';
import Layout from 'components/shared/layout';
import LINKS from 'constants/links';
import { getServiceList } from 'constants/services';
import getMetadata from 'utils/get-metadata';

const COPY = {
  en: {
    eyebrow: 'Services',
    title: 'Everything you need to run compliance',
    description:
      'From gap analysis to continuous evidence, incident reporting to supplier risk. Each OptiTech service works on its own and connects into one program.',
    incident: {
      name: 'Incident reporting',
      tagline: 'The guided MSB and IMY incident flow: 24 hours, 72 hours, one month.',
      href: LINKS.serviceIncidentReporting,
    },
    seoTitle: 'Services — OptiTech',
    seoDescription:
      'Explore OptiTech services: gap analysis, continuous evidence, incident reporting, supplier risk, policy management, risk register, training, trust center, and more.',
    cta: {
      title: 'Not sure where to start?',
      description: 'Book a free gap analysis and we will map the right services to your scope.',
      button: { label: 'Book a free gap analysis', href: LINKS.contactSales },
    },
  },
  sv: {
    eyebrow: 'Tjänster',
    title: 'Allt ni behöver för att driva efterlevnad',
    description:
      'Från gap-analys till kontinuerliga bevis, incidentrapportering till leverantörsrisk. Varje OptiTech-tjänst fungerar för sig och kopplas ihop till ett program.',
    incident: {
      name: 'Incidentrapportering',
      tagline: 'Det guidade MSB- och IMY-incidentflödet: 24 timmar, 72 timmar, en månad.',
      href: LINKS.serviceIncidentReporting,
    },
    seoTitle: 'Tjänster — OptiTech',
    seoDescription:
      'Utforska OptiTechs tjänster: gap-analys, kontinuerliga bevis, incidentrapportering, leverantörsrisk, policyhantering, riskregister, utbildning, trust center med mera.',
    cta: {
      title: 'Osäkra på var ni ska börja?',
      description: 'Boka en kostnadsfri gap-analys så mappar vi rätt tjänster till er omfattning.',
      button: { label: 'Boka en kostnadsfri gap-analys', href: LINKS.contactSales },
    },
  },
};

export async function generateMetadata() {
  const locale = await getLocale();
  const copy = COPY[locale] || COPY.en;

  return getMetadata({
    title: copy.seoTitle,
    description: copy.seoDescription,
    pathname: '/services',
  });
}

const ServicesPage = async () => {
  const locale = await getLocale();
  const copy = COPY[locale] || COPY.en;
  const items = [copy.incident, ...getServiceList(locale)];

  return (
    <Layout>
      <MarketingListing
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
        items={items}
        cta={copy.cta}
        locale={locale}
      />
    </Layout>
  );
};

export default ServicesPage;
