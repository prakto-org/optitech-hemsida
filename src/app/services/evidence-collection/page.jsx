import { getLocale } from 'next-intl/server';

import FeatureGrid from 'components/pages/services/evidence-collection/feature-grid';
import Features from 'components/pages/services/evidence-collection/features';
import Hero from 'components/pages/services/evidence-collection/hero';
import Network from 'components/pages/services/evidence-collection/network';
import Plans from 'components/pages/services/evidence-collection/plans';
import Proof from 'components/pages/services/evidence-collection/proof';
import Resources from 'components/pages/services/evidence-collection/resources';
import Testimonial from 'components/pages/services/evidence-collection/testimonial';
import CTANew from 'components/shared/cta-new';
import Layout from 'components/shared/layout';
import LINKS from 'constants/links';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.serviceEvidenceCollection);

const CTA_COPY = {
  en: {
    label: 'Service',
    title: 'Stop chasing evidence',
    description:
      'Connect your systems and let OptiTech collect the proof continuously, so every audit starts with the work already done.',
    button: { label: 'Book a free gap analysis', href: LINKS.contactSales },
  },
  sv: {
    label: 'Tjänst',
    title: 'Sluta jaga bevis',
    description:
      'Koppla era system och låt OptiTech samla in beviset kontinuerligt, så att varje revision börjar med arbetet redan gjort.',
    button: { label: 'Boka en kostnadsfri gap-analys', href: LINKS.contactSales },
  },
};

const EvidenceCollectionPage = async () => {
  const locale = await getLocale();
  const cta = CTA_COPY[locale] || CTA_COPY.en;

  return (
    <Layout className="bg-white">
      <Hero />
      <Proof />
      <Features />
      <Network />
      <FeatureGrid />
      <Testimonial />
      <Plans />
      <Resources />
      <CTANew
        className="mt-44 xl:mt-36 lg:mt-28 md:mt-20"
        label={cta.label}
        title={cta.title}
        description={cta.description}
        buttonText={cta.button.label}
        buttonUrl={cta.button.href}
      />
    </Layout>
  );
};

export default EvidenceCollectionPage;
