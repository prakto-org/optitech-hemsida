'use client';

import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { cn } from 'utils/cn';

import AnimatedPosition from './animated-position';
import AnimatedText from './animated-text';

const FADE_DURATION = 0.2; // Duration for fade in/out animations in seconds

// Catalog quotes carry <mark>highlight</mark>; split into [before, highlight, after]
// segments as AnimatedText expects.
const parseQuotes = (rawQuotes) =>
  rawQuotes.map(({ text, author, post }) => {
    const [before = '', highlight = '', after = ''] = text.split(/<\/?mark>/);
    return { text: [before, highlight, after], highlight, author, post };
  });

const Quotes = () => {
  const t = useTranslations('home.backedBy');
  const QUOTES = parseQuotes(t.raw('quotes'));
  const quotesCount = QUOTES.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useRef(0);
  const startTimeRef = useRef(null);
  const pausedIndexRef = useRef(0);
  const frameRef = useRef(null);

  // Sync currentIndex to ref for use in effects
  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  const [ref, isVisible] = useInView({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  });

  useEffect(() => {
    if (!isVisible) {
      return undefined;
    }

    // Initialize or restore start time based on saved index
    if (startTimeRef.current === null) {
      startTimeRef.current = Date.now();
    } else {
      const elapsedForSavedIndex = pausedIndexRef.current * 5000;
      startTimeRef.current = Date.now() - elapsedForSavedIndex;
    }

    const updateIndex = () => {
      const elapsedTime = Date.now() - startTimeRef.current;
      const newIndex = Math.floor(elapsedTime / 5000) % quotesCount;
      setCurrentIndex(newIndex);
      frameRef.current = requestAnimationFrame(updateIndex);
    };

    frameRef.current = requestAnimationFrame(updateIndex);

    return () => {
      pausedIndexRef.current = currentIndexRef.current;

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };
  }, [isVisible, quotesCount]);

  return (
    <div ref={ref} className="relative w-full md:h-40">
      {QUOTES.map(({ text, highlight, author, post }, index) => {
        const isActive = index === currentIndex;

        return (
          <LazyMotion features={domAnimation} key={index}>
            <AnimatePresence>
              {isActive && (
                <m.figure
                  className={cn(
                    'absolute inset-x-0 bottom-0 -mx-1 mt-auto overflow-hidden px-1',
                    'font-mono tracking-extra-tight',
                    !isActive && 'pointer-events-none'
                  )}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: FADE_DURATION, duration: 0 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: FADE_DURATION, ease: [0.17, 0.17, 0.83, 0.83] },
                  }}
                >
                  <blockquote className="text-xl leading-snug text-pretty xl:text-lg lg:text-[15px]">
                    <AnimatedText text={text} highlight={highlight} />
                  </blockquote>
                  <figcaption className="mt-5 block text-base leading-normal text-gray-new-15 not-italic xl:text-sm md:text-[13px]">
                    <AnimatedPosition author={author} position={post} />
                  </figcaption>
                </m.figure>
              )}
            </AnimatePresence>
          </LazyMotion>
        );
      })}
    </div>
  );
};

export default Quotes;
