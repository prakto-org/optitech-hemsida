import Cta from 'components/pages/products/trust-center/cta';
import FeatureGrid from 'components/pages/products/trust-center/feature-grid';
import Features from 'components/pages/products/trust-center/features';
import Hero from 'components/pages/products/trust-center/hero';
import Network from 'components/pages/products/trust-center/network';
import Plans from 'components/pages/products/trust-center/plans';
import Proof from 'components/pages/products/trust-center/proof';
import Resources from 'components/pages/products/trust-center/resources';
import Testimonial from 'components/pages/products/trust-center/testimonial';
import Layout from 'components/shared/layout';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.productTrustCenter);

const TrustCenterPage = () => (
  <Layout className="bg-white">
    <Hero />
    <Proof />
    <Features />
    <Network />
    <FeatureGrid />
    <Testimonial />
    <Plans />
    <Resources />
    <Cta />
  </Layout>
);

export default TrustCenterPage;
