'use client';

import { m, AnimatePresence, domAnimation, LazyMotion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

import Container from 'components/shared/container/container';
import ArrowDownIcon from 'icons/report/arrow-down.inline.svg';
import quoteIcon from 'icons/report/quote.svg';
import usersIcon from 'icons/report/users-icon.svg';

const storyVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.025,
      duration: 0.2,
    },
  }),
  exit: { opacity: 0, y: -10, transition: { duration: 0.22 } },
};

const DATA = [
  {
    description:
      'An auditor asked for evidence of our access reviews and we had none ready. It took us two weeks of scrambling through spreadsheets and screenshots to put together something we could hand over.',
    role: 'Staff Software Engineer from a',
    company: 'SaaS company',
    team: '5k-10k',
  },
  {
    description:
      'We found out we were in scope for NIS2 only a few months before the deadline. With no documentation and no evidence process in place, getting ready pulled the whole team off their work for weeks.',
    role: 'Senior Software Developer from a',
    company: 'SaaS company',
    team: '51–200',
  },
  {
    description:
      'A large customer sent us a security questionnaire with a hard deadline. We had no central place for our controls or evidence, so answering it accurately took 16 to 20 hours across several people, under mounting pressure and with real stress on the whole team.',
    role: 'DevOps Engineer from a',
    company: 'Semiconductors company ',
    team: '10k+',
  },
  {
    description:
      'A supplier assessment revealed that one of our key vendors had let their certification lapse. Because we had no ongoing view of our supply chain, we only found out during the review, and getting IT and others to help chase it down was difficult.',
    role: 'Software Engineer from a',
    company: 'Healthcare company',
    team: '51–200',
  },
  {
    description:
      'Our biggest problem was that our policies were completely out of date, so when the audit came, nothing we had written matched how we actually worked. On top of that, collecting the evidence was entirely manual, which slowed everything down and showed how badly we needed a repeatable process.',
    role: 'CEO of a',
    company: 'SaaS startup',
    team: '<10',
  },
  {
    description:
      'We had cases where evidence for a control simply went missing, because it lived in one person’s inbox and they had left. Our fallback was to reconstruct it by hand from old tickets and emails, since there was no single source of truth to fall back on.',
    role: 'Senior Staff Software Engineer from a',
    company: 'Saas company',
    team: '51–200',
  },
  {
    description:
      'Preparing for our first ISO 27001 audit reminded me of every all-hands fire drill I have ever been part of. Because everyone on the team was pulled in to dig up evidence and rewrite documentation at the same time.',
    role: 'Cloud  Administrator from a',
    company: 'Food and Beverage company',
    team: '1k–5k',
  },
  {
    description:
      'A data breach exposed customer records and we had to report it to the authority within 72 hours. About 30 minutes after we confirmed it, the questions started coming in. We had no incident process ready, and this was a financial application, so real trust was on the line. The incident affected over 50,000 users in a two-hour window.',
    role: 'Lead automation Engineer at a',
    company: 'Saas company',
    team: '10k+',
  },
  {
    description:
      'A failed vendor review slipped through and a non-compliant supplier ended up processing customer data, which eventually forced us to rebuild our whole vendor list and re-collect assessments from scratch.',
    role: 'Full-stack Developer at a',
    company: 'Saas company',
    team: '2–10',
  },
  {
    description:
      'We recently had an incident where an internal change broke the integration that was collecting our evidence, and nobody noticed for weeks. This left a gap in our audit trail and pulled me away from other important tasks while we backfilled everything by hand.',
    role: 'Principal Software Engineer from a',
    company: 'Fintech company',
    team: '10k+',
  },
  {
    description:
      "A newer team member updated a process without realizing it was tied to a documented control. Unfortunately the change wasn't reviewed against our compliance requirements and made it into production. When the auditor asked about that control, we could not show it was still being followed, and closing the gap took us several stressful days.",
    role: 'Software Engineer at a',
    company: 'Manufacturing company',
    team: '501–1k',
  },
  {
    description:
      'Our team faced a major compliance scramble when an audit found that a whole set of controls had no evidence behind them. Because the tracking was manual and scattered, gaps had gone unnoticed for months. As findings piled up, deadlines slipped, reviews dragged on, and leadership pressure grew. Customers waiting on our certification experienced significant delays, and critical deals were put at risk.',
    role: 'Sr. Software Engineer from an',
    company: 'Insurance company',
    team: '10k+',
  },
  {
    description:
      'The most recent compliance incident was due to a lapsed certification that our manual reminders failed to flag in time. We had to rush a re-certification once the gap was identified, which delayed a major contract and left several customers unhappy.',
    role: 'Lead Software Engineer from a',
    company: 'Financial services company',
    team: '10k+',
  },
  {
    description:
      'Our compliance suddenly fell apart before an audit, severely impacting our operations. The issue affected multiple teams, our support desk was flooded with customer questions, and staff scrambled to respond. As we investigated, we discovered that months of evidence had never been collected because a spreadsheet had quietly gone stale. Our manual process could not keep up, extending the delay. We had to rebuild the evidence from old records to restore trust and get the audit back on track.',
    role: 'System Administrator from the',
    company: 'IT industry',
    team: '2–10',
  },
  {
    description:
      "We saw a wave of overdue tasks and missing evidence pile up. In a matter of days, alarms began going off, our compliance dashboard was almost entirely red. Before we could respond, the audit window opened. We pulled people off their normal work to become a makeshift compliance team and manually gathered whatever evidence we could find. Our last full review turned out to be incomplete and untested. Thankfully older records were intact, and we managed to reconstruct enough to get through with just days to spare.",
    role: 'Security Software Developer from an',
    company: 'Electronic company',
    team: '10k+',
  },
];

const RecoveryStories = () => {
  const [visibleStories, setVisibleStories] = useState(5);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleShowMore = () => {
    if (isExpanded) {
      setVisibleStories(5);
      setIsExpanded(false);
    } else {
      setVisibleStories(DATA.length);
      setIsExpanded(true);
    }
  };

  return (
    <section className="recovery-stories mt-[155px] safe-paddings xl:mt-[140px] sm:mt-[126px]">
      <Container className="flex max-w-xl! flex-col items-start lg:max-w-[642px]!" size="xxs">
        <h2 className="relative z-10 font-title text-5xl leading-tight font-medium tracking-extra-tight xl:text-[44px] lg:text-4xl sm:text-[32px]">
          Compliance horror stories
        </h2>
        <m.ul className="recovery-stories-list mt-11 flex flex-col gap-y-9 xl:mt-10 xl:gap-y-7 lg:mt-[38px] sm:mt-7">
          <LazyMotion features={domAnimation}>
            <AnimatePresence>
              {DATA.slice(0, visibleStories).map(({ description, role, company, team }, index) => (
                <m.li
                  className="border-b border-dashed border-gray-new-15 pb-9 xl:pb-7"
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={storyVariants}
                >
                  <p className="text-lg leading-normal tracking-extra-tight text-gray-new-90 sm:text-[16px]">
                    {description}
                  </p>
                  <div className="mt-3 flex items-center gap-x-2 text-sm leading-snug tracking-extra-tight sm:flex-col sm:items-start sm:gap-y-1">
                    <p className="flex items-center gap-x-1 text-gray-new-60 sm:flex-wrap">
                      <span>{role}</span>
                      <span className="text-green-45">{company}</span>
                    </p>
                    <span className="text-gray-new-15 sm:hidden" aria-hidden>
                      •
                    </span>
                    <div className="flex items-center gap-x-2 sm:gap-x-1">
                      <Image src={usersIcon} width={18} height={18} alt="" />
                      <span className="text-gray-new-60">Team:</span>
                      <span className="font-medium text-gray-new-80">{team}</span>
                    </div>
                  </div>
                </m.li>
              ))}
            </AnimatePresence>
          </LazyMotion>
        </m.ul>
        {DATA.length > 5 && (
          <button
            className="mt-5 flex items-center gap-x-2 text-[15px] font-medium text-white transition-colors hover:text-green-45 lg:mt-3 xs:mx-auto"
            type="button"
            aria-expanded={isExpanded}
            aria-controls="recovery-stories-list"
            onClick={handleShowMore}
          >
            {isExpanded ? 'Show less' : 'Show more'}
            <span className="sr-only">recovery stories</span>
            <ArrowDownIcon
              className={isExpanded ? 'mt-0.5 rotate-180' : undefined}
              width={12}
              height={7}
              alt=""
              aria-hidden
            />
          </button>
        )}
        <Image
          className="pointer-events-none absolute -top-[120px] -left-[115px] z-[1] xl:-left-[83px] lg:-left-[48px] sm:-top-[90px] sm:-left-[27px] sm:max-w-[150px]"
          src={quoteIcon}
          width={195}
          height={170}
          alt=""
        />
      </Container>
    </section>
  );
};

export default RecoveryStories;
