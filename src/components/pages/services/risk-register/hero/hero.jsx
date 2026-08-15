import Image from 'next/image';
import PropTypes from 'prop-types';

import Button from 'components/shared/button';
import dashboard from 'images/pages/services/risk-register/dashboard.webp';
import heroBg from 'images/pages/services/risk-register/hero-bg.webp';
import illustration from 'images/pages/services/risk-register/hero-illustration.webp';

// Renders a <gray>...</gray> segment in the title as a muted span.
const renderTitle = (title) => {
  const match = title.match(/^(.*?)<gray>(.*?)<\/gray>(.*)$/s);
  if (!match) return title;
  const [, before, gray, after] = match;
  return (
    <>
      {before}
      <span className="text-tc-muted">{gray}</span>
      {after}
    </>
  );
};

const Hero = ({ hero }) => (
  <section className="hero relative isolate grid min-h-[856px] grid-cols-2 overflow-hidden xl:min-h-[761px] lg:min-h-[642px] md:min-h-0 md:grid-cols-1">
    {/* Left: white panel with heading, illustration, description, and CTA */}
    <div className="flex flex-col items-center justify-center bg-white px-16 py-24 text-center xl:px-12 lg:px-8 md:py-16">
      <div className="max-w-[560px]">
        <h1 className="font-serif text-[52px] leading-[1.08] font-normal tracking-extra-tight text-balance text-tc-ink xl:text-[46px] lg:text-[40px] md:text-[34px]">
          {renderTitle(hero.title)}
        </h1>
        <Image
          className="mx-auto mt-8 h-auto w-full max-w-[220px] md:mt-6 md:max-w-[180px]"
          src={illustration}
          alt=""
          priority
        />
        <p className="mx-auto mt-6 max-w-[460px] text-lg leading-normal tracking-extra-tight text-tc-body lg:text-base">
          {hero.description}
        </p>
        <Button className="mt-9 md:mt-7" theme="primary" size="md-new" to={hero.primaryCta.href}>
          {hero.primaryCta.label}
        </Button>
      </div>
    </div>

    {/* Right: product video framed over an ambient video background */}
    <div className="relative flex items-center justify-center overflow-hidden bg-[#060213] p-6 lg:p-5 md:min-h-[460px] md:p-4">
      <Image className="object-cover" src={heroBg} alt="" fill priority />
      <div className="absolute inset-0 bg-[#060213]/55" aria-hidden />
      <Image
        className="relative z-10 w-full max-w-[680px] rounded-2xl ring-1 ring-white/10 drop-shadow-[0_40px_90px_rgba(0,0,0,0.5)]"
        src={dashboard}
        alt="OptiTech risk register showing risks scored by likelihood and impact, linked to controls and treatment plans"
        width={1024}
        height={950}
        quality={90}
        priority
      />
    </div>
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
