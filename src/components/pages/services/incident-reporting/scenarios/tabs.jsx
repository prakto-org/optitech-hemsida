'use client';

import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';
import PropTypes from 'prop-types';
import { Fragment, useState } from 'react';

import { cn } from 'utils/cn';

const variants = {
  open: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.2,
    },
  },
  closed: {
    opacity: 0,
    translateY: 10,
    transition: {
      duration: 0.2,
    },
  },
};

const Tabs = ({ tabs, pathLabel }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mt-11 flex gap-10 md:mt-10 md:flex-col md:gap-6">
      <ul className="flex w-[280px] shrink-0 flex-col gap-y-2.5 lg:w-[216px] md:w-full">
        {tabs.map(({ title }, index) => (
          <li key={title}>
            <button
              className={cn(
                'w-full border-l-[3px] py-2.5 pl-3.5 text-left text-xl leading-snug font-medium tracking-tight text-gray-new-40 transition-all duration-200 ease-in-out focus-visible:rounded-md focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-0 lg:py-2 lg:text-lg',
                index === activeTab
                  ? 'cursor-default border-green-44 text-black-new'
                  : 'border-transparent hover:text-black-new'
              )}
              type="button"
              onClick={() => setActiveTab(index)}
            >
              {title}
            </button>
          </li>
        ))}
      </ul>
      <div className="relative min-h-[300px] w-full grow overflow-hidden rounded-[14px] border border-gray-new-90 bg-gray-new-98 p-8 lg:px-6 lg:py-5 sm:min-h-[360px]">
        <LazyMotion features={domAnimation}>
          <AnimatePresence initial={false} mode="wait">
            {tabs.map(({ question, answer, path }, index) => {
              if (index !== activeTab) {
                return null;
              }

              return (
                <m.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={variants}
                  key={index}
                >
                  <h3 className="max-w-[560px] text-xl leading-snug font-medium tracking-tight text-black-new lg:text-lg">
                    {question}
                  </h3>
                  <p className="mt-4 max-w-[560px] text-base leading-normal tracking-extra-tight text-gray-new-40">
                    {answer}
                  </p>
                  <p className="mt-8 font-mono text-[11px] tracking-wider text-gray-new-50 uppercase">
                    {pathLabel}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-y-3">
                    {path.map((node, nodeIndex) => {
                      const isLast = nodeIndex === path.length - 1;
                      return (
                        <Fragment key={node}>
                          <span
                            className={cn(
                              'rounded-md border px-3 py-1.5 font-mono text-xs leading-none tracking-tight whitespace-nowrap',
                              isLast
                                ? 'border-green-44/50 bg-white text-green-44'
                                : 'border-gray-new-80 bg-white text-gray-new-30'
                            )}
                          >
                            {node}
                          </span>
                          {!isLast && (
                            <span className="mx-2.5 h-px w-4 shrink-0 bg-gray-new-80" aria-hidden />
                          )}
                        </Fragment>
                      );
                    })}
                  </div>
                </m.div>
              );
            })}
          </AnimatePresence>
        </LazyMotion>
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
      path: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  pathLabel: PropTypes.string.isRequired,
};

export default Tabs;
