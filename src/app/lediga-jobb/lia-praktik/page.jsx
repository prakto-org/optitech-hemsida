import Areas from 'components/pages/lediga-jobb/lia-praktik/areas';
import Benefits from 'components/pages/lediga-jobb/lia-praktik/benefits';
import Cta from 'components/pages/lediga-jobb/lia-praktik/cta';
import Hero from 'components/pages/lediga-jobb/lia-praktik/hero';
import Process from 'components/pages/lediga-jobb/lia-praktik/process';
import Who from 'components/pages/lediga-jobb/lia-praktik/who';
import Layout from 'components/shared/layout';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.liaPraktik);

const LiaPraktikPage = () => (
  <Layout>
    <div className="bg-[#F7F5EF]">
      <Hero />
      <Areas />
      <Benefits />
      <Who />
      <Process />
      <Cta />
    </div>
  </Layout>
);

export default LiaPraktikPage;
