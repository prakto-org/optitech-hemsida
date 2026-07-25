'use client';

import Intercom from '@intercom/messenger-js-sdk';
import { useEffect } from 'react';

const INTERCOM_APP_ID = process.env.NEXT_PUBLIC_INTERCOM_APP_ID;

const IntercomWidget = () => {
  useEffect(() => {
    if (!INTERCOM_APP_ID) return;

    // Visitors are anonymous on this site; initialize without user attributes.
    Intercom({
      app_id: INTERCOM_APP_ID,
    });
  }, []);

  return null;
};

export default IntercomWidget;
