import Image from 'next/image';
import { useTranslations } from 'next-intl';

import Container from 'components/shared/container';
import Link from 'components/shared/link';
import PauseableVideo from 'components/shared/pauseable-video';
import LINKS from 'constants/links';
import heroChat from 'images/pages/trust-center/hero-chat.png';
import heroDashboard from 'images/pages/trust-center/hero-dashboard.png';

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path
      d="M3 8h10m0 0-4-4m4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BrandMark = () => (
  <svg
    className="mx-auto size-10 text-tc-ink md:size-8"
    viewBox="0 0 180 180"
    fill="currentColor"
    aria-hidden
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M90 128c27.614 0 50-22.386 50-50S117.614 28 90 28 40 50.386 40 78s22.386 50 50 50Zm0-26c13.255 0 24-10.745 24-24S103.255 54 90 54 66 64.745 66 78s10.745 24 24 24Z"
    />
    <circle cx="90" cy="158" r="12" />
  </svg>
);

const Hero = () => {
  const t = useTranslations('products.trustCenter.hero');

  return (
    <section className="hero relative overflow-hidden bg-white pt-24 safe-paddings lg:pt-16 md:pt-12">
      <Container size="1600">
        {/* Section 1: announcement hero on video background */}
        <div className="relative isolate flex min-h-[600px] flex-col items-center justify-center overflow-hidden rounded-3xl bg-tc-sand px-8 py-20 xl:min-h-[520px] lg:min-h-[440px] md:min-h-0 md:rounded-2xl md:px-5 md:py-14">
          <div className="absolute inset-0 -z-10" aria-hidden>
            <PauseableVideo
              className="h-full w-full"
              videoClassName="h-full w-full object-cover"
              width={1920}
              height={1080}
            >
              <source src="/videos/pages/trust-center/hero.mp4" type="video/mp4" />
            </PauseableVideo>
          </div>
          <div className="mx-auto max-w-[820px] text-center">
            <BrandMark />
            <span className="mt-5 block text-xs font-medium uppercase tracking-[0.18em] text-tc-ink md:mt-4">
              {t('label')}
            </span>
            <h1 className="mt-4 font-serif text-[68px] leading-[1.05] font-normal tracking-extra-tight text-tc-ink xl:text-[56px] lg:text-[44px] md:text-[36px]">
              {t('title')}
            </h1>
            <p className="mx-auto mt-5 max-w-[560px] text-lg leading-normal tracking-extra-tight text-tc-body md:mt-4 md:text-base">
              {t('description')}
            </p>
            <Link
              className="mt-8 inline-flex h-12 items-center gap-x-2.5 rounded-lg bg-tc-ink px-7 text-base font-medium text-white transition-colors duration-200 hover:bg-tc-ink-light md:mt-6 md:h-11"
              to={LINKS.contactSales}
            >
              {t('cta')}
              <ArrowIcon />
            </Link>
          </div>
        </div>

        {/* Section 2: product dashboard mockup (unchanged) */}
        <div className="relative mx-auto mt-20 max-w-[980px] pb-24 lg:mt-14 md:mt-10 md:pb-14">
          <Image
            className="relative w-full rounded-xl drop-shadow-[0_40px_80px_rgba(23,17,46,0.4)]"
            src={heroDashboard}
            alt="OptiTech Trust Center dashboard showing passing security controls, certifications, and documents"
            width={980}
            height={700}
            quality={90}
            priority
          />

          {/* Floating AI chat widget */}
          <Image
            className="absolute top-[24%] -right-20 w-[300px] rounded-2xl drop-shadow-[0_24px_48px_rgba(23,17,46,0.35)] lg:-right-4 lg:w-[260px] md:static md:mt-5 md:w-full md:max-w-[340px]"
            src={heroChat}
            alt="OptiTech AI assistant answering a security question with cited sources"
            width={300}
            height={520}
            quality={90}
            priority
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
