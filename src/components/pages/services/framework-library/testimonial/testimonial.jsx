import { useTranslations } from 'next-intl';

import Container from 'components/shared/container';
import Link from 'components/shared/link';
import LINKS from 'constants/links';

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

const Testimonial = () => {
  const t = useTranslations('services.frameworkLibrary.testimonial');

  return (
    <section className="testimonial bg-tc-sand py-28 safe-paddings lg:py-20 md:py-14">
      <Container size="960">
        <figure>
          <blockquote>
            <p className="font-serif text-[40px] leading-[1.2] font-normal tracking-extra-tight text-tc-ink xl:text-[34px] lg:text-[30px] md:text-[24px]">
              &ldquo;{t('text')}&rdquo;
            </p>
          </blockquote>
          <figcaption className="mt-9 flex items-center gap-x-4 md:mt-6">
            <span
              className="flex size-12 items-center justify-center rounded-full bg-tc-forest text-sm font-semibold text-white"
              aria-hidden
            >
              {t('initials')}
            </span>
            <span className="flex flex-col">
              <span className="text-base font-semibold tracking-extra-tight text-tc-ink">
                {t('name')}
              </span>
              <span className="text-sm tracking-extra-tight text-tc-muted">{t('position')}</span>
            </span>
          </figcaption>
        </figure>
        <Link
          className="mt-10 inline-flex h-11 items-center gap-x-2.5 border border-tc-sand-border px-6 text-sm font-medium text-tc-ink transition-colors duration-200 hover:border-tc-ink md:mt-7"
          to={LINKS.caseStudies}
        >
          {t('cta')}
          <ArrowIcon />
        </Link>
      </Container>
    </section>
  );
};

export default Testimonial;
