'use client';

import { useTranslations } from 'next-intl';

import Container from 'components/shared/container';
import Link from 'components/shared/link';
import TimelineSvg from 'images/pages/about/timeline/timeline.inline.svg';
import { cn } from 'utils/cn';

const ITEM_DATETIMES = ['2023-01', '2023-09', '2024-01', '2024-10', '2025-01', '2026-05'];

const Timeline = () => {
  const t = useTranslations('aboutUs.timeline');
  const ITEMS = t.raw('items').map((item, index) => ({ ...item, dateTime: ITEM_DATETIMES[index] }));

  return (
    <section className="timeline overflow-hidden pt-40 safe-paddings pb-[200px] xl:pt-[136px] xl:pb-[184px] lg:pt-[88px] lg:pb-[136px] md:pt-[72px] md:pb-[104px]">
      <Container size="1600">
        <h2 className="mb-20 max-w-5xl indent-24 font-sans text-5xl leading-dense font-normal tracking-tighter xl:text-4xl lg:mb-14 lg:indent-16 lg:text-[28px] md:mb-11 md:indent-0 md:text-2xl">
          {t.rich('heading', {
            span: (chunks) => <span className="text-gray-new-50">{chunks}</span>,
          })}
        </h2>
        <div className="no-scrollbars w-full sm:-mx-5 sm:-mt-2 sm:w-screen sm:overflow-x-auto sm:pb-2">
          <div className="relative h-[284px] w-full xl:h-[264px] lg:h-64 md:h-[189px] md:min-w-[545px] sm:mx-5">
            <ol className="grid h-full w-full grid-cols-[repeat(5,minmax(0,243fr))_320fr] xl:grid-cols-[repeat(5,minmax(0,152fr))_200fr] lg:grid-cols-[repeat(5,minmax(0,112fr))_147fr] md:grid-cols-[repeat(5,minmax(0,86fr))_114fr]">
              {ITEMS.map((item, index) => (
                <li
                  key={index}
                  className={cn(
                    '-ml-px border-l border-gray-new-30',
                    index % 2 === 0 ? 'self-end' : 'self-start'
                  )}
                >
                  <div
                    className={cn(
                      'relative flex h-[170px] flex-col gap-y-2.5 pl-[18px] xl:h-40 xl:gap-y-2 xl:pl-4 lg:h-[150px] md:h-[110px] md:gap-y-1.5 md:pl-3.5',
                      index % 2 === 0 && 'justify-end'
                    )}
                  >
                    <time
                      dateTime={item.dateTime}
                      className="font-mono text-base leading-none font-normal tracking-extra-tight whitespace-nowrap text-gray-new-50 xl:text-sm md:text-xs"
                    >
                      {item.date}
                    </time>
                    {item.link ? (
                      <Link
                        className={cn(
                          'relative text-xl leading-snug font-normal tracking-extra-tight text-white xl:text-lg md:text-[15px]',
                          'underline decoration-white/40 decoration-dashed decoration-1 underline-offset-[6px] transition-[text-decoration-color] duration-200 hover:decoration-white',
                          'after:absolute after:-inset-1.5',
                          index !== ITEMS.length - 1 && 'whitespace-nowrap'
                        )}
                        to={item.link}
                        isExternal={item.isExternal}
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <p
                        className={cn(
                          'text-xl leading-snug font-normal tracking-extra-tight text-white xl:text-lg md:text-[15px]',
                          index !== ITEMS.length - 1 && 'whitespace-nowrap'
                        )}
                      >
                        {item.title}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
            <TimelineSvg className="absolute bottom-[114px] -z-10 h-14 w-full object-fill xl:bottom-[104px] lg:bottom-[106px] lg:h-11 md:bottom-[79px] md:h-8" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Timeline;
