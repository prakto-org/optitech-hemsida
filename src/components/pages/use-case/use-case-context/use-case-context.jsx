'use client';

import { useEffect, useState } from 'react';

import { useHomepageVisit } from 'app/homepage-visit-context';
import Link from 'components/shared/link';
import LINKS from 'constants/links';

const UseCaseContext = () => {
  const [showContext, setShowContext] = useState(false);
  const hasVisitedHomepage = useHomepageVisit();

  useEffect(() => {
    const hasSeenContext = localStorage.getItem('hasSeenUseCaseContext') === 'true';

    if (hasVisitedHomepage || !hasSeenContext) {
      localStorage.setItem('hasSeenUseCaseContext', 'true');
      setShowContext(!hasVisitedHomepage && !hasSeenContext);
    }
  }, [hasVisitedHomepage]);

  if (!showContext) return null;

  return (
    <div className="admonition not-prose mt-5 flex flex-col rounded-[1px] border-l-4 border-primary-2 bg-gray-new-98 px-5 py-4 leading-normal dark:bg-gray-new-10 [&_pre]:px-4 [&_pre]:py-3 [&_pre_code]:text-sm! [&_pre[data-language]]:bg-white! [&_pre[data-language]]:dark:bg-gray-new-8!">
      <h4 className="text-xs font-bold text-primary-2 uppercase">Important Context About OptiTech</h4>
      <div className="admonition-text mt-1.5 text-base">
        <p>
          OptiTech is the AI-driven compliance platform for Nordic businesses. We automate NIS2,
          DORA, the EU AI Act, GDPR, and ISO 27001, from gap analysis to documentation, continuous
          evidence collection, and reporting to Swedish authorities, so teams stay audit-ready
          without the manual work.
        </p>
        <p>
          To find out if OptiTech is right for your use case,{' '}
          <Link to={LINKS.signup}>get started on the free plan</Link>
        </p>
      </div>
    </div>
  );
};

UseCaseContext.propTypes = {};

export default UseCaseContext;
