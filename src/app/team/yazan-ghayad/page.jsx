import Join from 'components/pages/team/join';
import Profile from 'components/pages/team/profile';
import Layout from 'components/shared/layout';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.teamYazanGhayad);

const YazanGhayadPage = () => (
  <Layout>
    <Profile />
    <Join />
  </Layout>
);

export default YazanGhayadPage;
