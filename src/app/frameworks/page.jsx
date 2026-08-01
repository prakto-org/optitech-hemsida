import { getLocale } from 'next-intl/server';

import { MarketingListing } from 'components/pages/marketing';
import Layout from 'components/shared/layout';
import { getFrameworkList } from 'constants/frameworks';
import LINKS from 'constants/links';
import getMetadata from 'utils/get-metadata';

const COPY = {
  en: {
    eyebrow: 'Frameworks',
    title: 'Every framework, cross-mapped',
    description:
      'The Nordic core is built from the source texts; the rest cover what customers and auditors ask for. Collect evidence once and it counts everywhere it applies.',
    seoTitle: 'Compliance frameworks — OptiTech',
    seoDescription:
      'NIS2, DORA, GDPR, ISO 27001, the EU AI Act, CRA, SOC 2, ISO 27701, ISO 22301, and TISAX. Cross-mapped so evidence you collect once counts everywhere it applies.',
    cta: {
      title: 'Not sure which frameworks apply?',
      description: 'Book a free gap analysis and we will scope it for you.',
      button: { label: 'Book a free gap analysis', href: LINKS.contactSales },
    },
  },
  sv: {
    eyebrow: 'Ramverk',
    title: 'Varje ramverk, korsmappat',
    description:
      'Den nordiska kärnan är byggd från källtexterna; resten täcker det kunder och revisorer frågar efter. Samla bevis en gång så räknas det överallt det gäller.',
    seoTitle: 'Efterlevnadsramverk — OptiTech',
    seoDescription:
      'NIS2, DORA, GDPR, ISO 27001, EU:s AI Act, CRA, SOC 2, ISO 27701, ISO 22301 och TISAX. Korsmappade så att bevis ni samlar en gång räknas överallt det gäller.',
    cta: {
      title: 'Osäkra på vilka ramverk som gäller?',
      description: 'Boka en kostnadsfri gap-analys så avgränsar vi det åt er.',
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
    pathname: '/frameworks',
  });
}

const FrameworksPage = async () => {
  const locale = await getLocale();
  const copy = COPY[locale] || COPY.en;
  const items = getFrameworkList(locale);

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

export default FrameworksPage;
