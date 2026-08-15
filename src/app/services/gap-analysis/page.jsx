import { getLocale } from 'next-intl/server';

import FeatureGrid from 'components/pages/services/gap-analysis/feature-grid';
import Features from 'components/pages/services/gap-analysis/features';
import Hero from 'components/pages/services/gap-analysis/hero';
import Network from 'components/pages/services/gap-analysis/network';
import Plans from 'components/pages/services/gap-analysis/plans';
import Proof from 'components/pages/services/gap-analysis/proof';
import Resources from 'components/pages/services/gap-analysis/resources';
import Testimonial from 'components/pages/services/gap-analysis/testimonial';
import CTANew from 'components/shared/cta-new';
import Layout from 'components/shared/layout';
import LINKS from 'constants/links';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.serviceGapAnalysis);

const CTA_COPY = {
  en: {
    label: 'Service',
    title: 'See where you stand, today',
    description:
      'Run a gap analysis against the frameworks that apply to you, and turn the result into a plan you can start the same day.',
    button: { label: 'Book a free gap analysis', href: LINKS.contactSales },
  },
  sv: {
    label: 'Tjänst',
    title: 'Se var ni står, idag',
    description:
      'Kör en gap-analys mot de ramverk som gäller er, och förvandla resultatet till en plan ni kan börja med samma dag.',
    button: { label: 'Boka en kostnadsfri gap-analys', href: LINKS.contactSales },
  },
};

const GapAnalysisPage = async () => {
  const locale = await getLocale();
  const cta = CTA_COPY[locale] || CTA_COPY.en;

  return (
    <Layout className="bg-white">
      <Hero />
      <Proof />
      <Features />
      <FeatureGrid />
      <Network />
      <Plans />
      <Testimonial />
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

export default GapAnalysisPage;
