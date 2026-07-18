'use client';

import { usePathname } from 'next/navigation';
import { ThemeProvider as PreferredProvider, useTheme } from 'next-themes';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

import suppressScriptTagWarning from 'utils/suppress-script-tag-warning';

// Installed at module load (client only), before the next-themes provider renders,
// so it catches the benign <script> warning emitted during the first client render.
suppressScriptTagWarning();

const themesSupportPages = ['/docs', '/guides', '/postgresql', '/faqs'];

const ThemeColorUpdater = () => {
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    const currentTheme = resolvedTheme || theme;
    const themeColor = currentTheme === 'light' ? '#FFFFFF' : '#000000';

    let metaThemeColor = document.querySelector('meta[name="theme-color"]');

    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.name = 'theme-color';
      document.head.appendChild(metaThemeColor);
    }

    metaThemeColor.content = themeColor;
  }, [theme, resolvedTheme]);

  return null;
};

const ThemeProvider = ({ children }) => {
  const pathname = usePathname();
  const hasThemesSupport = themesSupportPages.some((page) => pathname.startsWith(page));

  return (
    <PreferredProvider
      attribute="class"
      forcedTheme={hasThemesSupport ? null : 'dark'}
      storageKey="neon-theme"
      disableTransitionOnChange
    >
      <ThemeColorUpdater />
      {children}
    </PreferredProvider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
