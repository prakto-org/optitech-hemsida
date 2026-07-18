import { cookies } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';

export const LOCALES = ['en', 'sv'];
export const DEFAULT_LOCALE = 'en';
export const LOCALE_COOKIE = 'NEXT_LOCALE';

// Cookie-based locale, no [locale] routing: every route stays as-is and the
// language switcher sets the cookie and refreshes.
export default getRequestConfig(async () => {
  const store = await cookies();
  const candidate = store.get(LOCALE_COOKIE)?.value;
  const locale = LOCALES.includes(candidate) ? candidate : DEFAULT_LOCALE;

  return {
    locale,
    messages: (await import(`../locales/${locale}.json`)).default,
  };
});
