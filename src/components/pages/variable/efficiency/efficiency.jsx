import { PropTypes } from 'prop-types';

import Testimonial from 'components/pages/use-case/testimonial';
import LINKS from 'constants/links';
import autoscaleIcon from 'icons/variable/autoscale.svg';
import performanceIcon from 'icons/variable/performance.svg';
import resizeIcon from 'icons/variable/resize.svg';
import pieralbertoColonboAvatar from 'images/pages/variable-load/testimonials/pieralberto-colonbo.jpg';

import List from '../list';
import Section from '../section';

const items = [
  {
    icon: autoscaleIcon.src,
    text: 'OptiTech runs on continuous automation. Instead of committing a fixed amount of manual effort, you set the frameworks and vendors in scope. ',
  },
  {
    icon: performanceIcon.src,
    text: 'Your compliance coverage expands and adjusts automatically across those frameworks, matching how your business grows.',
  },
  {
    icon: resizeIcon.src,
    text: 'Coverage updates are nearly instantaneous, without gaps. Read about <a href="/docs/guides/autoscaling-algorithm">how our automation works</a> and how it compares to manual compliance.',
  },
];

const Efficiency = ({ title }) => (
  <Section className="efficiency" title={title}>
    <div className="prose-variable">
      <List items={items} />
    </div>
    <Testimonial
      text="When we handled compliance manually, we had to scramble to gather evidence during audit&nbsp;season and then let it go stale afterward, which&nbsp;caused gaps and a huge waste of&nbsp;time for the team."
      author={{
        name: 'Pieralberto Colombo',
        company: 'Recrowd',
        avatar: pieralbertoColonboAvatar,
      }}
      url={`${LINKS.blog}/how-recrowd-uses-neon-autoscaling-to-meet-fluctuating-demand`}
    />
  </Section>
);

Efficiency.propTypes = {
  title: PropTypes.shape({}),
};

export default Efficiency;
