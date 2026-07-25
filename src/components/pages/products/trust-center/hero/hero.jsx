import Image from 'next/image';
import { useTranslations } from 'next-intl';

import Container from 'components/shared/container';
import Link from 'components/shared/link';
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

const Hero = () => {
  const t = useTranslations('products.trustCenter.hero');

  return (
    <section className="hero overflow-hidden bg-white pt-24 safe-paddings lg:pt-16 md:pt-12">
      <Container size="1152">
        <div className="mx-auto max-w-[820px] text-center">
          <h1 className="font-serif text-[68px] leading-[1.05] font-normal tracking-extra-tight text-tc-ink xl:text-[56px] lg:text-[44px] md:text-[36px]">
            {t('title')}
          </h1>
          <p className="mx-auto mt-6 max-w-[620px] text-lg leading-normal tracking-extra-tight text-tc-body md:mt-4 md:text-base">
            {t('description')}
          </p>
          <Link
            className="mt-9 inline-flex h-12 items-center gap-x-2.5 bg-primary-1 px-7 text-base font-semibold text-black transition-colors duration-200 hover:bg-tc-teal md:mt-7 md:h-11"
            to={LINKS.contactSales}
          >
            {t('cta')}
            <ArrowIcon />
          </Link>
        </div>

        {/* Product mockup on organic green blob */}
        <div className="relative mx-auto mt-20 max-w-[980px] pb-24 lg:mt-14 md:mt-10 md:pb-14">
          <div
            className="absolute top-1/2 left-1/2 h-[115%] w-[130%] -translate-x-1/2 -translate-y-[46%] rotate-[-4deg] bg-tc-green md:w-[140%]"
            style={{ borderRadius: '48% 52% 57% 43% / 51% 44% 56% 49%' }}
            aria-hidden
          />
          <div
            className="absolute top-1/2 left-1/2 h-[112%] w-[124%] -translate-x-[52%] -translate-y-[42%] rotate-[7deg] bg-tc-green-dark opacity-60 md:w-[136%]"
            style={{ borderRadius: '55% 45% 44% 56% / 46% 57% 43% 54%' }}
            aria-hidden
          />

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
