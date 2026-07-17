import Image from 'next/image';

import Container from 'components/shared/container/container';
import dbIcon from 'icons/report/db-icon.svg';
import restoreIcon from 'icons/report/restore-icon.svg';

const DATA = [
  {
    description:
      'Collecting evidence by hand takes hours and goes stale the moment you finish. Point-in-time checklists help during an audit but not with the day-to-day drift in controls, suppliers, and data.',
    title: 'OptiTech is a compliance platform that keeps your evidence current, continuously.',
    icon: dbIcon,
  },
  {
    description:
      'The magic trick? Continuous automated evidence. OptiTech connects to your existing tools through Swedish integrations like Fortnox, Visma, BankID, and Kivra, collects proof of your controls on a schedule, and drafts the required documentation with AI. When an incident hits, it helps you report to Swedish authorities such as MSB and IMY on time, all without a spreadsheet scramble.',
    title: 'OptiTech takes a fundamentally different approach to compliance.',
    icon: restoreIcon,
  },
];

const RecoverySolution = () => (
  <section className="recovery-solution mt-[126px] safe-paddings xl:mt-28 sm:mt-24">
    <Container
      className="relative z-10 flex max-w-xl! flex-col items-start lg:max-w-[642px]!"
      size="xxs"
    >
      <h2 className="font-title text-5xl leading-dense font-medium tracking-tighter xl:text-[44px] lg:max-w-[440px] lg:text-[40px] sm:text-[32px]">
        Cut your evidence collection from weeks to minutes
      </h2>

      <ul className="mt-12 flex flex-col gap-y-12 lg:mt-10 lg:gap-y-10 sm:mt-7 sm:gap-y-6">
        {DATA.map(({ icon, title, description }, index) => (
          <li className="flex flex-col gap-y-4 lg:gap-y-[18px] sm:gap-y-4" key={index}>
            <Image src={icon} width={28} height={28} alt="" />
            <h3 className="-mt-1 text-[28px] leading-tight font-medium tracking-tighter text-gray-new-94 lg:text-[24px] sm:text-[20px]">
              {title}
            </h3>
            <p className="text-lg leading-normal tracking-extra-tight text-gray-new-60 sm:text-base">
              {description}
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-12 text-lg leading-snug tracking-extra-tight with-link-primary text-gray-new-90 lg:mt-10 sm:mt-7 sm:text-base">
        Want to see it in action?{' '}
        <a
          className="ml-2 tracking-tighter"
          href="https://fyi.neon.tech/branching"
          target="_blank"
          rel="noreferrer"
        >
          Here&apos;s a demo →
        </a>
      </p>
    </Container>
  </section>
);

export default RecoverySolution;
