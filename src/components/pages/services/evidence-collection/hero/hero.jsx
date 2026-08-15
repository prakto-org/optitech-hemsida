import Image from 'next/image';
import { useTranslations } from 'next-intl';

import Button from 'components/shared/button';
import PauseableVideo from 'components/shared/pauseable-video';
import LINKS from 'constants/links';
import dashboard from 'images/pages/services/evidence-collection/dashboard.webp';
import illustration from 'images/pages/services/evidence-collection/hero-illustration.webp';

const Hero = () => {
  const t = useTranslations('services.evidenceCollection.hero');

  return (
    <section className="hero relative isolate grid min-h-[856px] grid-cols-2 overflow-hidden xl:min-h-[761px] lg:min-h-[642px] md:min-h-0 md:grid-cols-1">
      {/* Left: white panel with heading, illustration, description, and CTA */}
      <div className="flex flex-col items-center justify-center bg-white px-16 py-24 text-center xl:px-12 lg:px-8 md:py-16">
        <div className="max-w-[560px]">
          <h1 className="font-serif text-[64px] leading-[1.04] font-normal tracking-extra-tight text-tc-ink xl:text-[52px] lg:text-[44px] md:text-[38px]">
            {t.rich('title', {
              gray: (chunks) => <span className="text-tc-muted">{chunks}</span>,
            })}
          </h1>
          <Image
            className="mx-auto mt-8 h-auto w-full max-w-[220px] md:mt-6 md:max-w-[180px]"
            src={illustration}
            alt=""
            priority
          />
          <p className="mx-auto mt-6 max-w-[460px] text-lg leading-normal tracking-extra-tight text-tc-body lg:text-base">
            {t('description')}
          </p>
          <Button className="mt-9 md:mt-7" theme="primary" size="md-new" to={LINKS.contactSales}>
            {t('cta')}
          </Button>
        </div>
      </div>

      {/* Right: product video framed over an ambient, blurred video background */}
      <div className="relative flex items-center justify-center overflow-hidden bg-[#060213] p-6 lg:p-5 md:min-h-[460px] md:p-4">
        <PauseableVideo
          className="absolute inset-0 h-full w-full"
          videoClassName="h-full w-full object-cover"
          width={1600}
          height={1200}
        >
          <source src="/videos/pages/services/evidence-collection/hero.mp4" type="video/mp4" />
        </PauseableVideo>
        <div className="absolute inset-0 bg-[#060213]/55" aria-hidden />
        <Image
          className="relative z-10 w-full max-w-[748px] rounded-2xl ring-1 ring-white/10 drop-shadow-[0_40px_90px_rgba(0,0,0,0.5)]"
          src={dashboard}
          alt="OptiTech evidence collection dashboard showing continuously verified controls and freshly collected evidence"
          width={1024}
          height={753}
          quality={90}
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
