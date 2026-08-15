import { getLocale } from 'next-intl/server';

import FeatureGrid from 'components/pages/services/framework-library/feature-grid';
import Features from 'components/pages/services/framework-library/features';
import Hero from 'components/pages/services/framework-library/hero';
import Network from 'components/pages/services/framework-library/network';
import Plans from 'components/pages/services/framework-library/plans';
import Proof from 'components/pages/services/framework-library/proof';
import Resources from 'components/pages/services/framework-library/resources';
import Testimonial from 'components/pages/services/framework-library/testimonial';
import CTANew from 'components/shared/cta-new';
import Layout from 'components/shared/layout';
import LINKS from 'constants/links';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.serviceFrameworkLibrary);

const CTA_COPY = {
  en: {
    label: 'Service',
    title: 'Do it once, prove it everywhere',
    description:
      'Map your controls across every framework you are covered by, and stop assessing the same thing twice.',
    button: { label: 'Book a free gap analysis', href: LINKS.contactSales },
  },
  sv: {
    label: 'Tjänst',
    title: 'Gör det en gång, bevisa det överallt',
    description:
      'Mappa era kontroller över alla ramverk ni omfattas av, och sluta bedöma samma sak två gånger.',
    button: { label: 'Boka en kostnadsfri gap-analys', href: LINKS.contactSales },
  },
};

const FrameworkLibraryPage = async () => {
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

export default FrameworkLibraryPage;
