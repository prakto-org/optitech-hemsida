'use client';

import { show as showIntercom } from '@intercom/messenger-js-sdk';
import PropTypes from 'prop-types';

import Button from 'components/shared/button';
import sendGtagEvent from 'utils/send-gtag-event';

const ButtonAiHelper = ({ className, children }) => {
  const handleButtonClick = (e) => {
    e.preventDefault();
    sendGtagEvent('AI Chat Opened');
    showIntercom();
  };

  return (
    <Button className={className} theme="white-filled" size="new" onClick={handleButtonClick}>
      {children}
    </Button>
  );
};

ButtonAiHelper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ButtonAiHelper;
