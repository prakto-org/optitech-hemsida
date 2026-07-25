'use client';

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import Link from 'components/shared/link';
import LINKS from 'constants/links';
import { cn } from 'utils/cn';
import sendGtagEvent from 'utils/send-gtag-event';

import Button from '../button';

const CONSENT_COOKIE_NAME = 'ot_cookie_consent';
const CONSENT_COOKIE_MAX_AGE = 60 * 60 * 24 * 180; // 180 days

const COOKIE_CATEGORIES = [
  {
    id: 'necessary',
    title: 'Strictly necessary',
    description: 'Required for core site features and saving your cookie choices. Always on.',
    locked: true,
  },
  {
    id: 'analytics',
    title: 'Analytics',
    description: 'Help us understand how the site is used so we can improve it.',
  },
  {
    id: 'marketing',
    title: 'Marketing',
    description: 'Used to measure campaigns and show more relevant content.',
  },
];

const readStoredConsent = () => {
  const row = document.cookie
    .split('; ')
    .find((item) => item.startsWith(`${CONSENT_COOKIE_NAME}=`));

  if (!row) return null;

  try {
    return JSON.parse(decodeURIComponent(row.slice(CONSENT_COOKIE_NAME.length + 1)));
  } catch {
    return null;
  }
};

const storeConsent = (categories) => {
  const value = encodeURIComponent(
    JSON.stringify({ version: 1, updatedAt: new Date().toISOString(), ...categories })
  );
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';

  document.cookie = `${CONSENT_COOKIE_NAME}=${value}; Max-Age=${CONSENT_COOKIE_MAX_AGE}; Path=/; SameSite=Lax${secure}`;
};

const applyZarazConsent = ({ analytics, marketing }) => {
  if (!window.zaraz || !window.zaraz.consent) return;

  if (analytics && marketing) {
    window.zaraz.consent.setAll(true);
    window.zaraz.consent.sendQueuedEvents();
    return;
  }

  if (!analytics && !marketing) {
    window.zaraz.consent.setAll(false);
    return;
  }

  try {
    window.zaraz.consent.set({ analytics, marketing });
    window.zaraz.consent.sendQueuedEvents();
  } catch {
    window.zaraz.consent.setAll(false);
  }
};

const Toggle = ({ checked, label, disabled = false, onChange = null }) => (
  <button
    className={cn(
      'relative h-5 w-9 shrink-0 rounded-full transition-colors duration-200',
      checked ? 'bg-primary-1' : 'bg-gray-new-80 dark:bg-gray-new-20',
      disabled && 'cursor-not-allowed opacity-60'
    )}
    type="button"
    role="switch"
    aria-checked={checked}
    aria-label={label}
    disabled={disabled}
    onClick={onChange}
  >
    <span
      className={cn(
        'absolute top-0.5 left-0.5 size-4 rounded-full bg-white shadow-sm transition-transform duration-200',
        checked && 'translate-x-4'
      )}
      aria-hidden
    />
  </button>
);

Toggle.propTypes = {
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="m1 1 12 12M13 1 1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [view, setView] = useState('main');
  const [hasStoredConsent, setHasStoredConsent] = useState(false);
  const [preferences, setPreferences] = useState({ analytics: false, marketing: false });

  const finishConsent = (categories, action) => {
    storeConsent(categories);
    applyZarazConsent(categories);
    sendGtagEvent('cookie_consent', { action });
    setPreferences({ analytics: categories.analytics, marketing: categories.marketing });
    setHasStoredConsent(true);
    setVisible(false);
    setView('main');
  };

  const consentAll = () =>
    finishConsent({ necessary: true, analytics: true, marketing: true }, 'accept_all');

  const rejectAll = () =>
    finishConsent({ necessary: true, analytics: false, marketing: false }, 'reject_all');

  const savePreferences = () =>
    finishConsent({ necessary: true, ...preferences }, 'save_preferences');

  useEffect(() => {
    const stored = readStoredConsent();

    if (stored) {
      setPreferences({ analytics: !!stored.analytics, marketing: !!stored.marketing });
      setHasStoredConsent(true);
    } else {
      setVisible(true);
    }

    const handleShow = () => {
      const current = readStoredConsent();

      if (current) {
        setPreferences({ analytics: !!current.analytics, marketing: !!current.marketing });
        setHasStoredConsent(true);
      }

      setVisible(true);
    };

    window.addEventListener('showCookieConsentDialog', handleShow, false);

    return () => window.removeEventListener('showCookieConsentDialog', handleShow, false);
  }, []);

  // Lock page scroll while the dialog is open
  useEffect(() => {
    if (!visible) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [visible]);

  // Allow closing without changes only when a choice already exists
  useEffect(() => {
    if (!visible || !hasStoredConsent) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setVisible(false);
        setView('main');
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [visible, hasStoredConsent]);

  return visible ? (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
    >
      <div
        className="absolute inset-0 animate-fade-in-overlay bg-black-pure/60 backdrop-blur-sm"
        aria-hidden
      />
      <div className="relative w-full max-w-[480px] animate-dialog-show border border-gray-new-90 bg-white p-7 shadow-[0px_14px_40px_0px_rgba(0,0,0,.2)] dark:border-gray-new-15 dark:bg-black-new dark:shadow-[0px_14px_40px_0px_rgba(0,0,0,.6)] sm:p-5">
        <div className="flex items-center gap-x-2.5">
          <span className="size-2 rounded-full bg-primary-1" aria-hidden />
          <h2
            className="text-lg font-semibold tracking-extra-tight text-black-new dark:text-white"
            id="cookie-consent-title"
          >
            Cookies at OptiTech
          </h2>
          {hasStoredConsent && (
            <button
              className="ml-auto p-1 text-gray-new-50 transition-colors duration-200 hover:text-black-new dark:hover:text-white"
              type="button"
              aria-label="Close cookie settings"
              onClick={() => {
                setVisible(false);
                setView('main');
              }}
            >
              <CloseIcon />
            </button>
          )}
        </div>

        {view === 'main' ? (
          <>
            <p className="mt-3 text-sm leading-snug font-light tracking-extra-tight text-gray-new-40 dark:text-gray-new-70">
              OptiTech uses cookies to improve our services. Accept all cookies, reject the optional
              ones, or customize your choices per category. Learn more in our{' '}
              <Link
                className="font-normal whitespace-nowrap text-green-44 underline decoration-green-44/40 underline-offset-4 transition-colors duration-300 hover:decoration-green-44 dark:text-primary-1 dark:decoration-primary-1/40 dark:hover:decoration-primary-1"
                to={LINKS.cookiePolicy}
              >
                Cookie Policy
              </Link>
              .
            </p>
            <div className="mt-6 flex items-center gap-x-3 sm:flex-col sm:items-stretch sm:gap-y-2.5">
              <Button className="font-semibold" size="xxs" theme="primary" onClick={consentAll}>
                Accept all
              </Button>
              <Button
                className="border border-gray-new-80 bg-transparent font-medium text-black-new hover:border-gray-new-40 dark:border-gray-new-20 dark:text-white dark:hover:border-gray-new-50"
                size="xxs"
                onClick={rejectAll}
              >
                Reject all
              </Button>
              <Button
                className="ml-auto bg-transparent font-medium text-gray-new-40 underline decoration-gray-new-40/40 underline-offset-4 hover:text-black-new dark:text-gray-new-70 dark:decoration-gray-new-70/40 dark:hover:text-white sm:ml-0"
                size="xxs"
                onClick={() => setView('customize')}
              >
                Customize
              </Button>
            </div>
          </>
        ) : (
          <>
            <ul className="mt-4 divide-y divide-gray-new-94 dark:divide-gray-new-15">
              {COOKIE_CATEGORIES.map(({ id, title, description, locked }) => (
                <li className="flex items-start justify-between gap-x-6 py-4" key={id}>
                  <div>
                    <p className="text-sm font-medium tracking-extra-tight text-black-new dark:text-white">
                      {title}
                    </p>
                    <p className="mt-1 text-[13px] leading-snug font-light tracking-extra-tight text-gray-new-40 dark:text-gray-new-70">
                      {description}
                    </p>
                  </div>
                  <Toggle
                    checked={locked ? true : preferences[id]}
                    label={`Allow ${title.toLowerCase()} cookies`}
                    disabled={locked}
                    onChange={
                      locked
                        ? null
                        : () => setPreferences((current) => ({ ...current, [id]: !current[id] }))
                    }
                  />
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-x-3 sm:flex-col sm:items-stretch sm:gap-y-2.5">
              <Button
                className="font-semibold"
                size="xxs"
                theme="primary"
                onClick={savePreferences}
              >
                Save preferences
              </Button>
              <Button
                className="border border-gray-new-80 bg-transparent font-medium text-black-new hover:border-gray-new-40 dark:border-gray-new-20 dark:text-white dark:hover:border-gray-new-50"
                size="xxs"
                onClick={() => setView('main')}
              >
                Back
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  ) : null;
};

export default CookieConsent;
