import 'styles/globals.css';
import { Analytics } from '@vercel/analytics/next';
import { GeistMono } from 'geist/font/mono';
import Script from 'next/script';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';

import IntercomWidget from 'components/shared/intercom-widget';
import RiveWasm from 'components/shared/rive-wasm';
import LINKS from 'constants/links';
import { CodeTabsProvider } from 'contexts/code-tabs-context';
import { TabsProvider } from 'contexts/tabs-context';
import { TopbarProvider } from 'contexts/topbar-context';

import { inter, esbuild } from './fonts';
import { HomepageVisitProvider } from './homepage-visit-context';
import ThemeProvider from './theme-provider';

export const preferredRegion = 'edge';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

// Theme class set client-side by next-themes; suppressHydrationWarning avoids server/client mismatch.
// eslint-disable-next-line react/prop-types
const RootLayout = async ({ children }) => {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${esbuild.variable} ${GeistMono.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        {process.env.NODE_ENV === 'production' && (
          <Script strategy="afterInteractive" src="https://neonapi.io/cb.js" />
        )}
        <link rel="preconnect" href={LINKS.console} />
        <RiveWasm />
      </head>
      <body>
        <NextIntlClientProvider>
          <ThemeProvider>
            <HomepageVisitProvider>
              <TopbarProvider>
                <TabsProvider>
                  <CodeTabsProvider>{children}</CodeTabsProvider>
                </TabsProvider>
              </TopbarProvider>
            </HomepageVisitProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
        <Analytics />
        <IntercomWidget />
      </body>
    </html>
  );
};

export default RootLayout;
