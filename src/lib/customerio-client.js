// Lazy, consent-gated Customer.io CDP (Data Pipelines) browser analytics.
// The SDK is only imported after the visitor grants analytics consent, so it
// stays out of the main bundle and never loads without permission.

let analyticsPromise = null;

export const loadCustomerioAnalytics = () => {
  if (typeof window === 'undefined') return null;

  const writeKey = process.env.NEXT_PUBLIC_CUSTOMERIO_CDP_API_KEY;
  if (!writeKey) return null;

  if (!analyticsPromise) {
    // Wrap in an object so the promise doesn't unwrap the thenable AnalyticsBrowser
    // instance into a [analytics, context] tuple. cdnURL targets the EU data center.
    analyticsPromise = import('@customerio/cdp-analytics-browser').then(({ AnalyticsBrowser }) => ({
      instance: AnalyticsBrowser.load({ writeKey, cdnURL: 'https://cdp-eu.customer.io' }),
    }));
  }

  return analyticsPromise;
};

const withAnalytics = async (fn) => {
  const loaded = await loadCustomerioAnalytics();
  if (loaded) fn(loaded.instance);
};

export const cioPage = (...args) => withAnalytics((analytics) => analytics.page(...args));
export const cioTrack = (...args) => withAnalytics((analytics) => analytics.track(...args));
export const cioIdentify = (...args) => withAnalytics((analytics) => analytics.identify(...args));
