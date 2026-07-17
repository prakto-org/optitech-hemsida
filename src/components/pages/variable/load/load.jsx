import Image from 'next/image';
import { PropTypes } from 'prop-types';

import Section from '../section';

import loadGraphicAWS from './images/load-graphic-aws.jpg';
import loadGraphicNeon from './images/load-graphic-neon.jpg';

const Load = ({ title }) => (
  <Section className="load" title={title}>
    <div className="prose-variable">
      <p>
        Growing compliance scope is common, but traditional compliance work requires committing a
        fixed amount of manual effort and staff time.
      </p>
      <p>
        To avoid gaps when a new framework or audit arrives, you’re likely carrying more manual
        overhead than you need most of the time. Adding coverage must be done by hand. Scaling back
        can leave your evidence stale.
      </p>
    </div>
    <div className="mt-7 flex items-center justify-center gap-5 xl:mt-6 lg:mt-5 lg:flex-col md:gap-3.5 sm:mt-4">
      <Image
        className="w-[470px] shrink-0 rounded-lg lg:w-full lg:max-w-xl md:rounded"
        src={loadGraphicAWS}
        width={470}
        height={338}
        alt=""
        sizes="(max-width: 768px) 340px, 100vw"
        aria-hidden
        priority
      />
      <Image
        className="w-[470px] shrink-0 rounded-lg lg:w-full lg:max-w-xl md:rounded"
        src={loadGraphicNeon}
        width={470}
        height={338}
        alt=""
        sizes="(max-width: 768px) 340px, 100vw"
        aria-hidden
        priority
      />
    </div>
  </Section>
);

Load.propTypes = {
  title: PropTypes.shape({}),
};

export default Load;
