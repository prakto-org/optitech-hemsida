'use client';

import Container from 'components/shared/container';
import Link from 'components/shared/link';
import TimelineSvg from 'images/pages/about/timeline/timeline.inline.svg';
import { cn } from 'utils/cn';

const ITEMS = [
  {
    date: 'JAN, 2023',
    dateTime: '2023-01',
    title: 'Founded in Stockholm',
  },
  {
    date: 'SEP, 2023',
    dateTime: '2023-09',
    title: 'First gap analysis engine',
  },
  {
    date: 'JAN, 2024',
    dateTime: '2024-01',
    title: 'Early access',
  },
  {
    date: 'OCT, 2024',
    dateTime: '2024-10',
    title: 'NIS2 goes live',
  },
  {
    date: 'JAN, 2025',
    dateTime: '2025-01',
    title: 'DORA in force',
  },
  {
    date: 'MAY, 2026',
    dateTime: '2026-05',
    title: 'MSB incident reporting shipped',
  },
];

const Timeline = () => (
  <section className="timeline overflow-hidden pt-40 safe-paddings pb-[200px] xl:pt-[136px] xl:pb-[184px] lg:pt-[88px] lg:pb-[136px] md:pt-[72px] md:pb-[104px]">
    <Container size="1600">
      <h2 className="mb-20 max-w-5xl indent-24 font-sans text-5xl leading-dense font-normal tracking-tighter xl:text-4xl lg:mb-14 lg:indent-16 lg:text-[28px] md:mb-11 md:indent-0 md:text-2xl">
        Our mission is to make compliance continuous:{' '}
        <span className="text-gray-new-50">
          gap analysis, evidence, and reporting in one platform. Designed to help Nordic teams stay
          audit-ready without spreadsheets or consultants.
        </span>
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

export default Timeline;
