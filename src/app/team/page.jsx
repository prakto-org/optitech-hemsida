import Hero from 'components/pages/team/hero';
import Join from 'components/pages/team/join';
import People from 'components/pages/team/people';
import Layout from 'components/shared/layout';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.team);

const TeamPage = () => (
  <Layout headerClassName="absolute!">
    <Hero />
    <People />
    <Join />
  </Layout>
);

export default TeamPage;
