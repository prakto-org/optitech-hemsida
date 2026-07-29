'use client';

import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

import GlobeIcon from 'icons/globe.inline.svg';
import { cn } from 'utils/cn';

const LANGUAGES = [
  { code: 'en', label: 'English', shortLabel: 'EN' },
  { code: 'sv', label: 'Svenska', shortLabel: 'SV' },
];

const LOCALE_COOKIE = 'NEXT_LOCALE';

// Earth icon + dropdown that sets the locale cookie read by src/i18n/request.js
// and re-renders the current route in the chosen language. No route changes.
const LanguageSwitcher = ({ className = null }) => {
  const locale = useLocale();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handlePointerDown = (e) => {
      if (!containerRef.current?.contains(e.target)) setIsOpen(false);
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (code) => {
    setIsOpen(false);
    if (code === locale) return;
    document.cookie = `${LOCALE_COOKIE}=${code}; path=/; max-age=31536000; samesite=lax`;
    router.refresh();
  };

  return (
    <div className={cn('relative', className)} ref={containerRef}>
      <button
        className={cn(
          'group flex items-center gap-1.5 tracking-extra-tight transition-colors duration-200',
          'rounded-sm text-black-pure hover:text-gray-new-30 dark:text-white dark:hover:text-gray-new-70'
        )}
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label={`Language: ${locale.toUpperCase()}`}
        onClick={() => setIsOpen((open) => !open)}
      >
        <GlobeIcon
          className="text-gray-new-20 transition-colors group-hover:text-gray-new-30 dark:text-white dark:group-hover:text-gray-new-80"
          width={18}
          height={18}
          aria-hidden
        />
        <span className="text-sm leading-none tracking-extra-tight uppercase">{locale}</span>
      </button>
      {isOpen && (
        <ul
          className={cn(
            'absolute top-full right-0 z-50 mt-3 min-w-[132px] border p-1',
            'border-[#E4E5E7] bg-[#F5F5F5]'
          )}
          role="menu"
        >
          {LANGUAGES.map(({ code, label, shortLabel }) => (
            <li key={code} role="none">
              <button
                className={cn(
                  'flex w-full items-center justify-between gap-x-4 px-3 py-2 text-sm leading-none tracking-extra-tight transition-colors duration-200',
                  code === locale
                    ? 'font-medium text-black-pure'
                    : 'text-gray-new-30 hover:bg-[#EBEBEB] hover:text-black-pure'
                )}
                type="button"
                role="menuitem"
                aria-current={code === locale ? 'true' : undefined}
                onClick={() => handleSelect(code)}
              >
                {label}
                <span className="text-xs text-[#8A7D66]">{shortLabel}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

LanguageSwitcher.propTypes = {
  className: PropTypes.string,
};

export default LanguageSwitcher;
