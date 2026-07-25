'use client';

import Image from 'next/image';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

import optitechLogo from 'images/optitech-logo-dark.png';
import { cn } from 'utils/cn';

import { CheckIcon, DocumentIcon, CHAT_RESULTS } from './ide-scene';

import './ide-scene.css';

const RESULT_DELAYS = ['3.6s', '4s', '4.4s', '4.8s'];

// Mobile counterpart of IdeScene: just the OptiTech AI chat panel, no editor
// or terminal. Reuses the ide-scene.css choreography classes.
const ChatScene = ({ className }) => {
  const [wrapperRef, isInView] = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <div
      className={cn(
        'ide-scene flex-col overflow-hidden border border-white/10 bg-[#0B0D0E]',
        isInView && 'is-active',
        className
      )}
      ref={wrapperRef}
      aria-hidden="true"
    >
      {/* Header */}
      <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-4 py-3">
        <span className="flex items-center gap-x-2">
          <Image
            className="h-3.5 w-auto"
            src={optitechLogo}
            height={14}
            alt=""
            aria-hidden="true"
          />
          <span className="text-xs font-medium tracking-extra-tight text-gray-new-90">AI</span>
        </span>
        <span className="text-xs leading-none text-gray-new-50">···</span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden px-4 pt-4">
        {/* User question */}
        <span
          className="is-in ml-auto max-w-[88%] rounded-[4px] bg-white/8 px-3 py-2 text-[13px] leading-snug tracking-extra-tight text-gray-new-90"
          style={{ '--d': '0.3s' }}
        >
          Omfattas vi av NIS2, och vad behöver vi göra?
        </span>
        {/* Working indicator */}
        <span
          className="is-in-out is-dots mt-3.5 flex h-1 items-center gap-x-1"
          style={{ '--d': '0.8s', '--do': '2.8s' }}
        >
          <span className="size-1 rounded-full bg-gray-new-60" />
          <span className="size-1 rounded-full bg-gray-new-60" />
          <span className="size-1 rounded-full bg-gray-new-60" />
        </span>
        {/* Answer */}
        <span className="is-in -mt-1 block" style={{ '--d': '3.2s' }}>
          <span className="block text-[13px] leading-snug tracking-extra-tight text-gray-new-80">
            Ja, ni klassas som väsentlig entitet. Jag har gjort grundarbetet:
          </span>
          <span className="mt-3 block space-y-2">
            {CHAT_RESULTS.map(({ text }, index) => (
              <span
                className="is-in flex items-center gap-x-2 text-xs tracking-extra-tight whitespace-nowrap text-gray-new-90"
                key={text}
                style={{ '--d': RESULT_DELAYS[index] }}
              >
                <CheckIcon />
                {text}
              </span>
            ))}
          </span>
          <span
            className="is-in mt-3.5 flex items-center justify-between rounded-[4px] border border-white/10 bg-white/3 px-3 py-2"
            style={{ '--d': '5.2s' }}
          >
            <span className="flex items-center gap-x-2 font-mono text-xs text-gray-new-90">
              <DocumentIcon />
              incident-rutin.md
            </span>
            <span className="text-[11px] tracking-extra-tight text-gray-new-50">utkast</span>
          </span>
        </span>
      </div>

      {/* Prompt input */}
      <div className="m-4 mt-0 shrink-0 rounded-[4px] border border-white/10 bg-white/3 px-3 pt-3 pb-2.5">
        <span className="flex items-center text-xs tracking-extra-tight text-gray-new-50">
          Fråga OptiTech AI
          <span className="is-caret ml-0.5 inline-block h-3 w-px bg-gray-new-60" />
        </span>
        <span className="mt-3 flex items-center justify-between">
          <span className="flex items-center gap-x-1.5 rounded-[4px] border border-white/10 px-2 py-1 text-[10px] tracking-extra-tight text-gray-new-70">
            <span className="is-dot size-1 rounded-full bg-green-44" />
            Agent
          </span>
          <span className="flex size-5 items-center justify-center rounded-[4px] bg-white/10 text-[11px] leading-none text-gray-new-90">
            ↑
          </span>
        </span>
      </div>
    </div>
  );
};

ChatScene.propTypes = {
  className: PropTypes.string,
};

export default ChatScene;
