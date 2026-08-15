import { useTranslations } from 'next-intl';

import Container from 'components/shared/container';
import Link from 'components/shared/link';
import LINKS from 'constants/links';
import { cn } from 'utils/cn';

// Own seal artwork per badge, matching the hero dashboard seals.
// Order follows the badges array: SOC 2 Type II, ISO 27001, GDPR, NIS2.
const BADGE_THEMES = [
  { tint: 'bg-tc-lavender', ring: 'text-tc-purple', text: 'text-tc-purple-text' },
  { tint: 'bg-tc-mint', ring: 'text-tc-green-ring', text: 'text-tc-green-text' },
  { tint: 'bg-tc-sky', ring: 'text-tc-blue', text: 'text-tc-blue-text' },
  { tint: 'bg-tc-cream', ring: 'text-tc-amber', text: 'text-tc-amber-text' },
];

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

const Cta = () => {
  const t = useTranslations('services.frameworkLibrary.cta');
  const badges = t.raw('badges');

  return (
    <section className="cta bg-white pt-8 safe-paddings pb-32 lg:pb-24 md:pb-16">
      <Container size="960">
        <div className="border-t border-tc-border pt-20 text-center lg:pt-14 md:pt-10">
          <h2 className="mx-auto max-w-[640px] font-serif text-[52px] leading-[1.08] font-normal tracking-extra-tight text-tc-ink xl:text-[44px] lg:text-[38px] md:text-[32px]">
            {t('title')}
          </h2>
          <p className="mx-auto mt-5 max-w-[520px] text-lg tracking-extra-tight text-tc-body md:text-base">
            {t('description')}
          </p>
          <div className="mt-9 flex items-center justify-center gap-x-4 md:mt-7 md:flex-col md:gap-y-3">
            <Link
              className="inline-flex h-12 items-center gap-x-2.5 bg-primary-1 px-7 text-base font-semibold text-black transition-colors duration-200 hover:bg-tc-teal md:h-11"
              to={LINKS.contactSales}
            >
              {t('primaryCta')}
              <ArrowIcon />
            </Link>
            <Link
              className="inline-flex h-12 items-center gap-x-2.5 border border-tc-border-dark px-7 text-base font-medium text-tc-ink transition-colors duration-200 hover:border-tc-ink md:h-11"
              to={LINKS.pricing}
            >
              {t('secondaryCta')}
            </Link>
          </div>

          <ul className="mt-16 flex items-start justify-center gap-x-12 lg:mt-12 md:mt-9 md:gap-x-6">
            {badges.map((badge, index) => {
              const theme = BADGE_THEMES[index % BADGE_THEMES.length];

              return (
                <li className="flex flex-col items-center" key={badge.name}>
                  <div className="relative pb-3.5">
                    {/* Ribbon tails */}
                    <svg
                      className={cn('absolute bottom-0 left-1/2 -translate-x-1/2', theme.ring)}
                      width="58"
                      height="32"
                      viewBox="0 0 58 32"
                      fill="none"
                      aria-hidden
                    >
                      <path d="M22 0 8 22l7.5-2.5L20 28 33 5Z" fill="currentColor" opacity="0.85" />
                      <path
                        d="M22 0 8 22l7.5-2.5L20 28 33 5Z"
                        fill="currentColor"
                        opacity="0.85"
                        transform="scale(-1,1) translate(-58,0)"
                      />
                    </svg>
                    {/* Seal */}
                    <div
                      className={cn(
                        'relative flex size-[92px] flex-col items-center justify-center gap-y-1 rounded-full px-3 md:size-20 md:px-2.5',
                        theme.tint
                      )}
                    >
                      <svg
                        className={cn('absolute inset-0 size-full', theme.ring)}
                        viewBox="0 0 92 92"
                        fill="none"
                        aria-hidden
                      >
                        <circle cx="46" cy="46" r="45.5" fill="white" fillOpacity="0.001" />
                        <circle cx="46" cy="46" r="45" stroke="currentColor" strokeOpacity="0.4" />
                        <circle
                          cx="46"
                          cy="46"
                          r="40"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeDasharray="2.6 3.4"
                        />
                      </svg>
                      <svg
                        className={cn('md:h-[15px] md:w-[13px]', theme.ring)}
                        width="15"
                        height="17"
                        viewBox="0 0 20 22"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M10 1.5 18 4.4v5.2c0 5-3.3 8.6-8 10.4-4.7-1.8-8-5.4-8-10.4V4.4L10 1.5Z"
                          fill="currentColor"
                        />
                        <path
                          d="m6.6 10.6 2.3 2.4 4.5-5"
                          stroke="#fff"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        className={cn(
                          'text-center text-[11px] leading-[1.15] font-bold tracking-tight text-balance md:text-[9.5px]',
                          theme.text
                        )}
                      >
                        {badge.name}
                      </span>
                    </div>
                  </div>
                  <span className="mt-2.5 text-xs tracking-extra-tight text-tc-faint">
                    {badge.meta}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Cta;
