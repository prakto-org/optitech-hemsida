import Image from 'next/image';
import PropTypes from 'prop-types';

import Button from 'components/shared/button';
import dashboard from 'images/pages/services/training/dashboard.jpg';
import heroBg from 'images/pages/services/training/hero-bg.png';
import squiggle from 'images/pages/services/training/hero-squiggle-illustration.avif';

const Hero = ({ hero }) => (
  <section className="hero relative isolate grid min-h-[856px] grid-cols-2 overflow-hidden xl:min-h-[761px] lg:min-h-[642px] md:min-h-0 md:grid-cols-1">
    {/* Left: white panel with heading, description, and CTA */}
    <div className="flex flex-col items-center justify-center bg-white px-16 py-24 text-center xl:px-12 lg:px-8 md:py-16">
      <div className="max-w-[560px]">
        <h1 className="font-serif text-[64px] leading-[1.04] font-normal tracking-extra-tight text-tc-ink xl:text-[52px] lg:text-[44px] md:text-[38px]">
          {hero.title}
        </h1>
        <Image
          className="mx-auto mt-8 h-auto w-full max-w-[220px] md:mt-6 md:max-w-[180px]"
          src={squiggle}
          alt=""
          priority
        />
        <p className="mx-auto mt-6 max-w-[460px] text-lg leading-normal tracking-extra-tight text-tc-body lg:text-base">
          {hero.description}
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4 md:mt-7">
          <Button theme="primary" size="md-new" to={hero.primaryCta.href}>
            {hero.primaryCta.label}
          </Button>
          {hero.secondaryCta && (
            <Button theme="outlined-new" size="md-new" to={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </Button>
          )}
        </div>
      </div>
    </div>

    {/* Right: promo image as background with the dashboard screenshot over it */}
    <div className="relative flex items-center justify-center overflow-hidden bg-[#060213] p-6 lg:p-5 md:min-h-[460px] md:p-6">
      <Image className="object-cover" src={heroBg} alt="" fill priority />
      <div className="absolute inset-0 bg-[#060213]/40" aria-hidden />
      <Image
        className="relative z-10 w-full max-w-[774px] rounded-2xl ring-1 ring-white/10 drop-shadow-[0_40px_90px_rgba(0,0,0,0.5)]"
        src={dashboard}
        alt="OptiTech security training dashboard showing five modules with signed status and completion tracking"
        width={1005}
        height={682}
        quality={90}
        priority
      />
    </div>
  </section>
);

Hero.propTypes = {
  hero: PropTypes.shape({
    eyebrow: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    primaryCta: PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }).isRequired,
    secondaryCta: PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Hero;
