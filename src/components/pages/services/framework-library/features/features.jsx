'use client';

import { useTranslations } from 'next-intl';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

import Container from 'components/shared/container';
import Link from 'components/shared/link';
import LINKS from 'constants/links';
import { cn } from 'utils/cn';

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

const DotIcon = ({ className }) => (
  <span className={cn('inline-block size-2 rounded-full', className)} aria-hidden />
);

DotIcon.propTypes = {
  className: PropTypes.string,
};

const ChatPanel = ({ mockup }) => (
  <div className="w-full max-w-[420px] rounded-2xl bg-white p-6 shadow-[0_24px_48px_-16px_rgba(23,17,46,0.25)] ring-1 ring-black-pure/5">
    <div className="flex items-center gap-x-2">
      <DotIcon className="bg-tc-green" />
      <span className="text-xs font-semibold tracking-wide text-tc-faint uppercase">
        {mockup.label}
      </span>
    </div>
    <p className="mt-4 w-fit max-w-[85%] rounded-xl rounded-bl-sm bg-tc-cloud px-4 py-3 text-sm tracking-extra-tight text-tc-ink-light">
      {mockup.question}
    </p>
    <p className="mt-2.5 ml-auto w-fit max-w-[90%] rounded-xl rounded-br-sm bg-tc-lavender px-4 py-3 text-sm leading-relaxed tracking-extra-tight text-tc-ink-light">
      {mockup.answer}
    </p>
    <div className="mt-4 flex flex-wrap gap-2">
      {mockup.chips.map((chip) => (
        <span
          className="rounded-full bg-tc-cloud-light px-3 py-1 text-[11px] font-medium text-tc-muted ring-1 ring-tc-border"
          key={chip}
        >
          {chip}
        </span>
      ))}
    </div>
  </div>
);

ChatPanel.propTypes = {
  mockup: PropTypes.shape({
    label: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    chips: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

const DocsPanel = ({ mockup }) => (
  <div className="w-full max-w-[420px] rounded-2xl bg-white p-6 shadow-[0_24px_48px_-16px_rgba(23,17,46,0.25)] ring-1 ring-black-pure/5">
    <span className="text-xs font-semibold tracking-wide text-tc-faint uppercase">
      {mockup.label}
    </span>
    <ul className="mt-3 divide-y divide-tc-divide">
      {mockup.rows.map((row) => (
        <li className="flex items-center justify-between py-3" key={row.name}>
          <span className="text-sm tracking-extra-tight text-tc-ink-light">{row.name}</span>
          <span
            className={cn(
              'rounded-full px-2.5 py-0.5 text-xs font-medium',
              row.open ? 'bg-tc-mint text-tc-green-text' : 'bg-tc-lavender text-tc-purple-text'
            )}
          >
            {row.status}
          </span>
        </li>
      ))}
    </ul>
    <div className="mt-4 flex items-center justify-between rounded-xl bg-tc-cloud-light p-4 ring-1 ring-tc-border">
      <div>
        <p className="text-sm font-medium tracking-extra-tight text-tc-ink-light">
          {mockup.requestTitle}
        </p>
        <p className="mt-0.5 text-xs text-tc-faint">{mockup.requestMeta}</p>
      </div>
      <span className="bg-primary-1 px-4 py-1.5 text-xs font-medium text-black">
        {mockup.requestButton}
      </span>
    </div>
  </div>
);

DocsPanel.propTypes = {
  mockup: PropTypes.shape({
    label: PropTypes.string.isRequired,
    rows: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        open: PropTypes.bool,
      })
    ).isRequired,
    requestTitle: PropTypes.string.isRequired,
    requestMeta: PropTypes.string.isRequired,
    requestButton: PropTypes.string.isRequired,
  }).isRequired,
};

const BrandPanel = ({ mockup }) => (
  <div className="w-full max-w-[420px] rounded-2xl bg-white p-6 shadow-[0_24px_48px_-16px_rgba(23,17,46,0.25)] ring-1 ring-black-pure/5">
    <span className="text-xs font-semibold tracking-wide text-tc-faint uppercase">
      {mockup.label}
    </span>
    <div className="mt-4 flex items-center gap-x-3">
      <span className="text-xs text-tc-muted">{mockup.colorsLabel}</span>
      <span className="flex gap-x-2" aria-hidden>
        <span className="size-6 rounded-full bg-tc-ink ring-2 ring-tc-border" />
        <span className="size-6 rounded-full bg-tc-purple ring-2 ring-tc-border" />
        <span className="size-6 rounded-full bg-tc-green ring-2 ring-tc-border" />
        <span className="size-6 rounded-full bg-tc-sand ring-2 ring-tc-border" />
      </span>
    </div>
    <div className="mt-4">
      <span className="text-xs text-tc-muted">{mockup.domainLabel}</span>
      <span className="mt-1.5 flex h-9 items-center rounded-lg bg-tc-cloud-light px-3 font-mono text-xs text-tc-ink-light ring-1 ring-tc-border">
        {mockup.domain}
      </span>
    </div>
    <div className="mt-5 rounded-xl bg-tc-ink p-4">
      <div className="flex items-center gap-x-2.5">
        <span
          className="flex size-7 items-center justify-center rounded-md bg-tc-green font-title text-xs text-tc-ink"
          aria-hidden
        >
          N
        </span>
        <span className="text-sm font-medium tracking-extra-tight text-white">
          {mockup.previewTitle}
        </span>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-white/60">{mockup.previewText}</p>
    </div>
  </div>
);

BrandPanel.propTypes = {
  mockup: PropTypes.shape({
    label: PropTypes.string.isRequired,
    colorsLabel: PropTypes.string.isRequired,
    domainLabel: PropTypes.string.isRequired,
    domain: PropTypes.string.isRequired,
    previewTitle: PropTypes.string.isRequired,
    previewText: PropTypes.string.isRequired,
  }).isRequired,
};

const SyncPanel = ({ mockup }) => (
  <div className="w-full max-w-[420px] rounded-2xl bg-white p-6 shadow-[0_24px_48px_-16px_rgba(23,17,46,0.25)] ring-1 ring-black-pure/5">
    <div className="flex items-center justify-between">
      <span className="text-xs font-semibold tracking-wide text-tc-faint uppercase">
        {mockup.label}
      </span>
      <span className="flex items-center gap-x-1.5 text-[11px] font-medium text-tc-green-text">
        <DotIcon className="animate-pulse bg-tc-green" />
        {mockup.synced}
      </span>
    </div>
    <ul className="mt-3 divide-y divide-tc-divide">
      {mockup.rows.map((row) => (
        <li className="flex items-center justify-between py-3" key={row.name}>
          <div>
            <p className="text-sm tracking-extra-tight text-tc-ink-light">{row.name}</p>
            <p className="mt-0.5 text-[11px] text-tc-faint">{row.framework}</p>
          </div>
          <span className="flex items-center gap-x-1.5 rounded-full bg-tc-mint px-2.5 py-0.5 text-xs font-medium text-tc-green-text">
            {row.status}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

SyncPanel.propTypes = {
  mockup: PropTypes.shape({
    label: PropTypes.string.isRequired,
    synced: PropTypes.string.isRequired,
    rows: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        framework: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

const PANELS = [ChatPanel, DocsPanel, BrandPanel, SyncPanel];
const PANEL_BACKGROUNDS = ['bg-tc-lavender', 'bg-tc-mint', 'bg-tc-sand', 'bg-tc-cloud'];

const Features = () => {
  const t = useTranslations('services.frameworkLibrary.features');
  const items = t.raw('items');
  const [activeIndex, setActiveIndex] = useState(0);
  const blockRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.5 }
    );

    blockRefs.current.forEach((block) => block && observer.observe(block));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="features bg-white py-24 safe-paddings lg:py-16 md:py-12">
      <Container size="1152">
        <div className="grid grid-cols-2 gap-x-16 lg:gap-x-10 md:block">
          <div>
            {items.map((item, index) => {
              const Panel = PANELS[index];

              return (
                <div
                  className="flex min-h-[75vh] flex-col justify-center py-10 md:min-h-0 md:py-8"
                  data-index={index}
                  key={item.title}
                  ref={(element) => {
                    blockRefs.current[index] = element;
                  }}
                >
                  <span className="text-sm font-medium tracking-wide text-tc-purple uppercase">
                    {t('label')}
                  </span>
                  <h2 className="mt-4 font-serif text-[40px] leading-[1.1] font-normal tracking-extra-tight text-tc-ink xl:text-[36px] lg:text-[32px] md:text-[28px]">
                    {item.title}
                  </h2>
                  <p className="mt-5 max-w-[440px] text-base leading-normal tracking-extra-tight text-tc-body">
                    {item.description}
                  </p>
                  <Link
                    className="mt-8 inline-flex h-11 w-fit items-center gap-x-2.5 border border-tc-border-dark px-6 text-sm font-medium text-tc-ink transition-colors duration-200 hover:border-tc-ink"
                    to={LINKS.contactSales}
                  >
                    {t('cta')}
                    <ArrowIcon />
                  </Link>

                  {/* Inline panel on mobile */}
                  <div
                    className={cn(
                      'mt-8 hidden justify-center rounded-3xl p-6 md:flex',
                      PANEL_BACKGROUNDS[index]
                    )}
                  >
                    <Panel mockup={item.mockup} />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative md:hidden">
            <div className="sticky top-[15vh] flex h-[70vh] items-center">
              {items.map((item, index) => {
                const Panel = PANELS[index];

                return (
                  <div
                    className={cn(
                      'absolute inset-0 flex items-center justify-center rounded-3xl p-10 transition-opacity duration-500',
                      PANEL_BACKGROUNDS[index],
                      activeIndex === index ? 'opacity-100' : 'pointer-events-none opacity-0'
                    )}
                    aria-hidden={activeIndex !== index}
                    key={item.title}
                  >
                    <Panel mockup={item.mockup} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
