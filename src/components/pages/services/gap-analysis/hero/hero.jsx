import Image from 'next/image';
import { useTranslations } from 'next-intl';

import Button from 'components/shared/button';
import LINKS from 'constants/links';
import ecommerceHero from 'images/pages/services/gap-analysis/ecommerce-hero.webp';
import widget from 'images/pages/services/gap-analysis/widget.jpg';

const Hero = () => {
  const t = useTranslations('services.gapAnalysis.hero');

  return (
    <section className="hero relative isolate grid min-h-[856px] grid-cols-2 overflow-hidden xl:min-h-[761px] lg:min-h-[642px] md:min-h-0 md:grid-cols-1">
      {/* Left: white panel with heading, description, and CTA */}
      <div className="flex flex-col items-center justify-center bg-white px-16 py-24 text-center xl:px-12 lg:px-8 md:py-16">
        <div className="max-w-[560px]">
          <h1 className="font-serif text-[64px] leading-[1.04] font-normal tracking-extra-tight text-tc-ink xl:text-[52px] lg:text-[44px] md:text-[38px]">
            {t.rich('title', {
              gray: (chunks) => <span className="text-tc-muted">{chunks}</span>,
            })}
          </h1>
          <Image
            className="mx-auto mt-8 h-auto w-full max-w-[220px] md:mt-6 md:max-w-[180px]"
            src={ecommerceHero}
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

      {/* Right: our GIF as background with the product screenshot over it */}
      <div className="relative flex items-center justify-center overflow-hidden bg-[#060213] p-12 lg:p-8 md:min-h-[460px] md:p-6">
        <Image
          className="object-cover"
          src="/images/pages/services/gap-analysis/hero-bg.gif"
          alt=""
          fill
          unoptimized
          priority
        />
        <div className="absolute inset-0 bg-[#060213]/40" aria-hidden />
        <Image
          className="relative z-10 w-full max-w-[644px] rounded-2xl ring-1 ring-white/10 drop-shadow-[0_40px_90px_rgba(0,0,0,0.5)]"
          src={widget}
          alt="OptiTech gap analysis dashboard: ISO 27001 readiness score, control status, and prioritized gaps"
          width={1600}
          height={1200}
          quality={90}
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
