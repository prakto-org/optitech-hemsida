'use client';

import { show as showIntercom } from '@intercom/messenger-js-sdk';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { getInkeepBaseSettings } from 'lib/inkeep-settings';
import sendGtagEvent from 'utils/send-gtag-event';
import suppressScriptTagWarning from 'utils/suppress-script-tag-warning';

import InkeepAIButton from './inkeep-ai-button';
import InkeepSearch from './inkeep-search';

// Installed at module load, before the Inkeep modals render, so it also catches
// the warning emitted during the first client render.
suppressScriptTagWarning();

const InkeepModalSearch = dynamic(
  () => import('@inkeep/cxkit-react').then((mod) => mod.InkeepModalSearch),
  { ssr: false }
);

const INTERCOM_APP_ID = process.env.NEXT_PUBLIC_INTERCOM_APP_ID;

const InkeepTrigger = ({ className = null, isNotFoundPage = false }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { theme, systemTheme } = useTheme();

  let themeMode;
  switch (true) {
    case theme === 'system':
      themeMode = systemTheme;
      break;
    default:
      themeMode = theme;
  }

  const handleKeyDown = (event) => {
    if (event.key === 'k' && event.metaKey) {
      setIsSearchOpen(true);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleInkeepEvent = (event) => {
    const { eventName, properties = {} } = event;

    if (eventName === 'search_query_submitted') {
      sendGtagEvent('Search Query Submitted', { text: properties.searchQuery });
    }
  };

  const baseSettings = getInkeepBaseSettings({
    onEvent: handleInkeepEvent,
    themeMode,
  });

  const searchModalProps = {
    baseSettings,
    modalSettings: {
      isOpen: isSearchOpen,
      onOpenChange: setIsSearchOpen,
    },
  };

  return (
    <div className="flex items-center gap-x-2">
      <InkeepSearch
        className={className}
        handleClick={() => setIsSearchOpen(true)}
        isNotFoundPage={isNotFoundPage}
      />
      {!isNotFoundPage && INTERCOM_APP_ID && (
        <InkeepAIButton className="shrink-0" handleClick={() => showIntercom()} />
      )}
      <InkeepModalSearch {...searchModalProps} />
    </div>
  );
};

InkeepTrigger.propTypes = {
  className: PropTypes.string,
  topOffset: PropTypes.number,
  isNotFoundPage: PropTypes.bool,
  docPageType: PropTypes.string,
};

export default InkeepTrigger;
