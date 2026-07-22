import Hero from 'components/pages/contact-sales/hero';
import Layout from 'components/shared/layout';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.contactSales);

const ContactSales = () => (
  <Layout headerClassName="absolute!">
    <Hero />
  </Layout>
);

export default ContactSales;
