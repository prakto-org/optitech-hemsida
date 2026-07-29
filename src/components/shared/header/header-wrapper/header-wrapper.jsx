import PropTypes from 'prop-types';

import { cn } from 'utils/cn';

const HeaderWrapper = ({
  className = null,
  children,
  isDocPage = false,
  isSticky = false,
  isStickyOverlay = false,
}) => (
  <>
    <header
      className={cn(
        'header sticky top-0 right-0 left-0 z-50 flex h-16 w-full items-center bg-[#F5F5F5] lg:relative lg:h-14 dark:bg-black-pure',
        !isDocPage &&
          'after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:bg-[#E4E5E7] dark:after:bg-white/10',
        // Pages designed for the old out-of-flow (absolute) header keep their
        // spacing: the header takes no flow space on desktop. lg screens were
        // already in-flow (lg:relative), so no compensation there.
        isStickyOverlay ? '-mb-16' : !isSticky && '-mb-16 lg:mb-0',
        className
      )}
    >
      {children}
    </header>
    {/* page overlay */}
    <div
      className={cn(
        'navigation-overlay',
        'pointer-events-none fixed inset-0 z-40 bg-white/80 opacity-0 transition-opacity delay-150 duration-200 dark:bg-black-pure/80'
      )}
    />
  </>
);

HeaderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isDocPage: PropTypes.bool,
  isSticky: PropTypes.bool,
  isStickyOverlay: PropTypes.bool,
};

export default HeaderWrapper;
