'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { loadCustomerioAnalytics, cioPage } from 'lib/customerio-client';

const CONSENT_COOKIE_NAME = 'ot_cookie_consent';

const hasAnalyticsConsent = () => {
  const row = document.cookie
    .split('; ')
    .find((item) => item.startsWith(`${CONSENT_COOKIE_NAME}=`));

  if (!row) return false;

  try {
    return !!JSON.parse(decodeURIComponent(row.slice(CONSENT_COOKIE_NAME.length + 1))).analytics;
  } catch {
    return false;
  }
};

// Sends Customer.io page views, but only once the visitor accepts analytics cookies.
const CustomerioAnalytics = () => {
  const pathname = usePathname();

  // Track a page view on first load and on every client-side route change.
  useEffect(() => {
    if (hasAnalyticsConsent()) {
      loadCustomerioAnalytics();
      cioPage();
    }
  }, [pathname]);

  // Start tracking immediately if consent is granted while browsing (no reload).
  useEffect(() => {
    const handleConsentUpdate = () => {
      if (hasAnalyticsConsent()) {
        loadCustomerioAnalytics();
        cioPage();
      }
    };

    window.addEventListener('cookieConsentUpdated', handleConsentUpdate, false);

    return () => window.removeEventListener('cookieConsentUpdated', handleConsentUpdate, false);
  }, []);

  return null;
};

export default CustomerioAnalytics;
