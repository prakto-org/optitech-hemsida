import Cta from 'components/pages/services/incident-reporting/cta';
import Facts from 'components/pages/services/incident-reporting/facts';
import FaqSection from 'components/pages/services/incident-reporting/faq-section';
import Frameworks from 'components/pages/services/incident-reporting/frameworks';
import Hero from 'components/pages/services/incident-reporting/hero';
import Quote from 'components/pages/services/incident-reporting/quote';
import RegulatoryMap from 'components/pages/services/incident-reporting/regulatory-map';
import Scenarios from 'components/pages/services/incident-reporting/scenarios';
import Steps from 'components/pages/services/incident-reporting/steps';
import Timeline from 'components/pages/services/incident-reporting/timeline';
import Layout from 'components/shared/layout';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.serviceIncidentReporting);

const IncidentReportingPage = () => (
  <Layout headerClassName="absolute!">
    <Hero />
    <Steps />
    <RegulatoryMap />
    <Timeline />
    <Facts />
    <Scenarios />
    <Quote />
    <Frameworks />
    <FaqSection />
    <Cta />
  </Layout>
);

export default IncidentReportingPage;
