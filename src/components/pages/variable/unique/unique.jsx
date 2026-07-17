import { PropTypes } from 'prop-types';

import Testimonial from 'components/pages/use-case/testimonial';
import LINKS from 'constants/links';

import List from '../list';
import Section from '../section';

const items = [
  {
    text: 'OptiTech cuts compliance costs by up to 80% versus manual consultants and one-off audits.',
  },
  {
    text: 'OptiTech gets you audit ready in under one week, compared to traditional compliance programs that can take several&nbsp;months.',
  },
  {
    text: 'OptiTech uses transparent, framework-mapped evidence, vs the guesswork of manual spreadsheets.',
  },
  {
    text: 'OptiTech maps a single control to multiple frameworks at once, so evidence you collect for NIS2 also counts toward ISO 27001 and GDPR.',
  },
  {
    text: 'OptiTech&apos;s continuous evidence collection doesn&apos;t require duplicate manual work, differently than traditional audit prep.',
  },
  {
    text: 'Incident reporting to MSB and IMY is built-in in OptiTech, unlike manual processes that require separate tools.',
  },
];

const Unique = ({ title }) => (
  <Section className="unique" title={title}>
    <div className="prose-variable">
      <p>The OptiTech platform is unique in the following ways:</p>
      <List items={items} />
    </div>
    <Testimonial
      text="OptiTech worked out of the box, handling NIS2, GDPR, and ISO 27001 without any of the manual overhead we saw with outside consultants. On top of that, OptiTech costs us a fraction of what we were paying for audit prep."
      author={{
        name: 'Cody Jenkins',
        company: 'Head of Engineering at Invenco',
      }}
      url={`${LINKS.blog}/why-invenco-migrated-from-aurora-serverless-v2-to-neon`}
    />
  </Section>
);

Unique.propTypes = {
  title: PropTypes.shape({}),
};

export default Unique;
