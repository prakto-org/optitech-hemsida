'use client';

import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

import Button from 'components/shared/button';
import LINKS from 'constants/links';
import { cn } from 'utils/cn';

import { AccessCard, AlertsCard, ChatCard, RealtimeCard } from './step-cards';

const CARDS = [ChatCard, AccessCard, AlertsCard, RealtimeCard];

const StepsScroller = ({ items, cta }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    let rafId = 0;

    const update = () => {
      rafId = 0;
      const viewportCenter = window.innerHeight / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      stepRefs.current.forEach((element, index) => {
        if (!element) return;
        const rect = element.getBoundingClientRect();
        const distance = Math.abs((rect.top + rect.bottom) / 2 - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex((previous) => (previous === closestIndex ? previous : closestIndex));
    };

    const requestUpdate = () => {
      if (!rafId) rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="grid grid-cols-2 gap-x-20 xl:gap-x-12 lg:gap-x-8 md:grid-cols-1">
      {/* text steps */}
      <div className="flex flex-col">
        {items.map(({ title, description, stats }, index) => {
          const Card = CARDS[index % CARDS.length];
          const isActive = index === activeIndex;

          return (
            <div
              className="flex min-h-[86vh] flex-col justify-center py-16 md:min-h-0 md:py-10"
              key={title}
              ref={(element) => {
                stepRefs.current[index] = element;
              }}
            >
              <div
                className={cn(
                  'max-w-[480px] pr-10 transition-opacity duration-300 md:max-w-none md:pr-0 md:opacity-100!',
                  isActive ? 'opacity-100' : 'opacity-40'
                )}
              >
                <h3 className="text-[34px] leading-[1.12] font-medium tracking-tighter text-black-new xl:text-[30px] md:text-[26px]">
                  {title}
                </h3>
                <p className="mt-5 text-base leading-normal tracking-extra-tight text-gray-new-40 lg:mt-4">
                  {description}
                </p>
                {stats && (
                  <div className="mt-9 flex gap-x-10 lg:mt-7 lg:gap-x-7 sm:flex-col sm:gap-y-5">
                    {stats.map(({ value, label }) => (
                      <div className="border-l-2 border-green-45 pl-4" key={value}>
                        <p className="text-[30px] leading-none font-medium tracking-tight text-black-new xl:text-[26px]">
                          {value}
                        </p>
                        <p className="mt-2 max-w-[190px] text-sm leading-snug tracking-extra-tight text-gray-new-40">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                <Button
                  className="mt-9 lg:mt-7"
                  theme="outlined"
                  size="new"
                  to={LINKS.contactSales}
                >
                  {cta}
                </Button>
              </div>
              {/* inline card on mobile */}
              <div
                className="mt-10 hidden md:flex md:justify-center md:rounded-2xl md:bg-[#EDF3EF] md:p-6"
                aria-hidden="true"
              >
                <Card />
              </div>
            </div>
          );
        })}
      </div>

      {/* sticky card panel on the tint */}
      <div className="relative mr-[min(-32px,calc(544px-50vw))] md:hidden" aria-hidden="true">
        <div className="sticky top-0 h-screen">
          {CARDS.map((Card, index) => (
            <div
              className={cn(
                'absolute inset-0 flex items-center justify-center px-12 transition-all duration-500 xl:px-8',
                index === activeIndex
                  ? 'scale-100 opacity-100'
                  : 'pointer-events-none scale-[0.98] opacity-0'
              )}
              key={index}
            >
              <Card />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

StepsScroller.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      stats: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
  cta: PropTypes.string.isRequired,
};

export default StepsScroller;
