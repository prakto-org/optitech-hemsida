'use client';

import Intercom from '@intercom/messenger-js-sdk';
import { useEffect } from 'react';

const INTERCOM_APP_ID = 'le5hmr8j';

const IntercomWidget = () => {
  useEffect(() => {
    // Visitors are anonymous on this site; initialize without user attributes.
    Intercom({
      app_id: INTERCOM_APP_ID,
    });
  }, []);

  return null;
};

export default IntercomWidget;
