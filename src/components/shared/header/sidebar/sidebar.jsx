import PropTypes from 'prop-types';

import Button from 'components/shared/button';
import LanguageSwitcher from 'components/shared/language-switcher';
import LINKS from 'constants/links';
import { cn } from 'utils/cn';

const Sidebar = ({ isDocs, className }) => (
  <div className={cn('flex items-center lg:hidden', isDocs ? 'gap-x-6' : 'gap-x-8', className)}>
    <LanguageSwitcher />
    <div className={cn('flex', isDocs ? 'gap-x-2' : 'gap-x-3.5')}>
      <Button
        className="h-9 px-[18px]"
        to={LINKS.login}
        theme="outlined"
        size="xxs"
        tagName="Header"
      >
        Log in
      </Button>
      <Button
        className="h-9 px-[18px]"
        to={LINKS.contactSales}
        theme="white-filled-multi"
        size="xxs"
        tagName="Header"
      >
        Book a demo
      </Button>
    </div>
  </div>
);

Sidebar.propTypes = {
  isDocs: PropTypes.bool,
  className: PropTypes.string,
};

export default Sidebar;
