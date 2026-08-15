'use client';

import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import PropTypes from 'prop-types';
import { useState } from 'react';

import Container from 'components/shared/container';
import networkBg from 'images/pages/services/gap-analysis/network-bg.webp';
import { cn } from 'utils/cn';

const ChevronIcon = ({ className }) => (
  <svg className={className} width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path
      d="M4 6l4 4 4-4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

ChevronIcon.propTypes = {
  className: PropTypes.string,
};

const Network = () => {
  const t = useTranslations('services.gapAnalysis.network');
  const frameworks = t.raw('frameworks');
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="network relative overflow-hidden bg-white py-28 safe-paddings lg:py-20 md:py-14">
      {/* Decorative illustration, softened so it reads as a subtle texture. */}
      <Image
        className="pointer-events-none absolute inset-0 z-0 size-full object-cover opacity-40"
        src={networkBg}
        alt=""
        fill
        sizes="100vw"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-white via-transparent to-white"
        aria-hidden
      />

      <Container className="relative z-10" size="1152">
        <div className="grid grid-cols-12 gap-x-16 lg:gap-x-10 md:block">
          {/* Left column: intro, sticky while the list scrolls */}
          <div className="col-span-5 md:mb-10">
            <div className="lg:sticky lg:top-28">
              <h2 className="font-serif text-[52px] leading-[1.08] font-normal tracking-extra-tight text-tc-ink xl:text-[44px] lg:text-[38px] md:text-[32px]">
                {t('title')}
              </h2>
              <p className="mt-5 text-lg tracking-extra-tight text-tc-body md:text-base">
                {t('description')}
              </p>
              <p className="mt-8 text-sm tracking-extra-tight text-tc-muted">{t('footnote')}</p>
            </div>
          </div>

          {/* Right column: animated accordion buttons, one open at a time */}
          <div className="col-span-6 col-start-7 md:col-span-full md:col-start-auto">
            <LazyMotion features={domAnimation}>
              <ul className="border-t border-tc-divide">
                {frameworks.map((framework, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <li className="border-b border-tc-divide" key={framework.name}>
                      <button
                        type="button"
                        className="group flex w-full items-center justify-between gap-x-4 py-5 text-left"
                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                        aria-expanded={isOpen}
                      >
                        <span
                          className={cn(
                            'font-title text-lg font-semibold tracking-extra-tight transition-colors duration-200',
                            isOpen ? 'text-tc-purple' : 'text-tc-ink group-hover:text-tc-purple'
                          )}
                        >
                          {framework.name}
                        </span>
                        <span
                          className={cn(
                            'flex size-8 shrink-0 items-center justify-center rounded-full transition-all duration-300',
                            isOpen
                              ? 'rotate-180 bg-tc-ink text-white'
                              : 'bg-tc-cloud-light text-tc-ink ring-1 ring-tc-border group-hover:bg-tc-lavender'
                          )}
                        >
                          <ChevronIcon />
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <m.div
                            className="overflow-hidden"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <p className="pr-10 pb-6 text-[15px] leading-normal tracking-extra-tight text-tc-body">
                              {framework.description}
                            </p>
                          </m.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            </LazyMotion>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Network;
