import Image from 'next/image';
import PropTypes from 'prop-types';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import AiEngineBackdrop from 'images/pages/services/policy-management/ai-engine-backdrop.inline.svg';
import dashboard from 'images/pages/services/policy-management/dashboard.jpg';

const Hero = ({ hero }) => (
  <section className="hero relative overflow-hidden bg-[#F7F5EF] pt-[152px] safe-paddings pb-24 xl:pt-[136px] lg:pt-28 md:pt-24">
    <div className="relative">
      {/* AI engine backdrop, faint watermark behind the heading */}
      <div
        className="ai-engine-fx pointer-events-none absolute top-1/2 left-[95%] -translate-x-1/2 -translate-y-1/2 rotate-90 select-none lg:hidden"
        aria-hidden
      >
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .ai-engine-fx path { animation: ai-engine-spark 4s ease-in-out infinite; }
              .ai-engine-fx path:nth-of-type(6n+1) { animation-delay: 0s; }
              .ai-engine-fx path:nth-of-type(6n+2) { animation-delay: 0.45s; }
              .ai-engine-fx path:nth-of-type(6n+3) { animation-delay: 0.9s; }
              .ai-engine-fx path:nth-of-type(6n+4) { animation-delay: 1.35s; }
              .ai-engine-fx path:nth-of-type(6n+5) { animation-delay: 1.8s; }
              .ai-engine-fx path:nth-of-type(6n) { animation-delay: 2.25s; }
              @keyframes ai-engine-spark {
                0%, 100% { stroke: #0c0d0d; stroke-opacity: 0.3; stroke-width: 0.8; }
                50% { stroke: #e0a84a; stroke-opacity: 1; stroke-width: 1.6; }
              }
              @media (prefers-reduced-motion: reduce) {
                .ai-engine-fx path { animation: none; }
              }
            `,
          }}
        />
        <AiEngineBackdrop className="h-[1320px] w-auto animate-ai-engine-breathe opacity-70 motion-reduce:animate-none xl:h-[1080px]" />
      </div>
      <Container className="relative" size="1280">
        <div className="relative z-10 max-w-[640px] pl-8 xl:pl-4 lg:max-w-none lg:pl-0">
          <h1 className="font-serif text-[64px] leading-[1.04] font-normal tracking-extra-tight text-black-new xl:text-[54px] lg:text-[44px] md:text-[34px]">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-[540px] text-lg leading-normal tracking-extra-tight text-gray-new-40 lg:mt-5 lg:text-base">
            {hero.description}
          </p>
          <div className="mt-9 flex flex-wrap gap-4 md:mt-7 sm:w-full sm:flex-col">
            <Button theme="secondary" size="new" to={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </div>

    <Container className="relative mt-20 lg:mt-14 md:mt-10" size="1152">
      <Image
        className="mx-auto w-full max-w-[1120px] rounded-2xl border border-gray-new-90 shadow-[0_28px_60px_-28px_rgba(12,13,13,0.28)]"
        src={dashboard}
        alt="OptiTech policy control detail: password management policy with evidence examples, checks, and controls"
        width={1024}
        height={723}
        quality={90}
        priority
      />
    </Container>
  </section>
);

Hero.propTypes = {
  hero: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    primaryCta: PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Hero;
