import Image from 'next/image';

import Container from 'components/shared/container';
import LINKS from 'constants/links';
import authIcon from 'icons/pricing/features/auth.svg';
import autoscalingIcon from 'icons/pricing/features/autoscaling.svg';
import connectionsIcon from 'icons/pricing/features/connections.svg';
import extensionsIcon from 'icons/pricing/features/extensions.svg';
import monitoringIcon from 'icons/pricing/features/monitoring.svg';
import replicasIcon from 'icons/pricing/features/replicas.svg';
import securityIcon from 'icons/pricing/features/security.svg';
import storageIcon from 'icons/pricing/features/storage.svg';
import { cn } from 'utils/cn';

const FEATURES = [
  {
    icon: storageIcon,
    title: 'Five frameworks.',
    description: `NIS2, DORA, the EU AI Act, GDPR, and ISO 27001, mapped and kept up to date so you don't have to read the regulations yourself.`,
  },
  {
    icon: replicasIcon,
    title: 'Continuous evidence.',
    description: `OptiTech collects evidence automatically from your systems, so your controls stay verified between audits, not just once a year.`,
  },
  {
    icon: autoscalingIcon,
    title: 'AI documentation.',
    description: `Generate policies, risk assessments, and control documentation from your answers, drafted in minutes instead of weeks.`,
  },
  {
    icon: monitoringIcon,
    title: 'Live dashboards.',
    description: `Real-time visibility into your compliance posture, open gaps, and control status across every framework in one place.`,
  },
  {
    icon: connectionsIcon,
    title: 'Swedish integrations.',
    description: `Connect the systems you already use, including Fortnox, Visma, BankID, and Kivra, to pull evidence without manual work.`,
  },
  {
    icon: extensionsIcon,
    title: 'Authority reporting.',
    description: `Built-in incident reporting flows to Swedish authorities like MSB and IMY, with the 24-hour, 72-hour, and one-month steps handled for you.`,
  },
  {
    icon: authIcon,
    title: 'Vendor management.',
    description: `Track your suppliers and their compliance status, and send assessments to your supply chain from inside OptiTech.`,
  },
  {
    icon: securityIcon,
    title: 'EU data residency.',
    description: `Your data stays in the EU, in European regions, under European ownership. Learn more on our <a href="${LINKS.security}">Security page</a>.`,
  },
];

const Features = () => (
  <section className="features mt-[200px] scroll-mt-5 px-safe xl:mt-[184px] lg:mt-40 md:mt-[104px]">
    <Container size="1152" className="px-8">
      <h2
        className={cn(
          'indent-24 text-5xl leading-dense tracking-tighter text-pretty text-gray-new-50 lg:indent-16 md:indent-0',
          'xl:px-8 xl:text-[40px] lg:px-5 lg:text-[28px] lg:text-wrap md:text-[24px] sm:px-0',
          '[&>strong]:font-normal [&>strong]:text-white'
        )}
      >
        <strong>Included with every OptiTech plan, by default.</strong> These are
        core capabilities that come out of the box with OptiTech.
      </h2>
      <ul
        className={cn(
          'mt-16 -ml-8 grid grid-cols-3 gap-x-[85px]',
          'xl:ml-0 xl:gap-x-5 xl:pr-5',
          'lg:mt-12 lg:grid-cols-2 md:mt-10 sm:grid-cols-1 sm:gap-y-7'
        )}
      >
        {FEATURES.map(({ icon, title, description }) => (
          <li
            className={cn(
              'flex flex-col gap-[18px] border-l border-gray-new-20',
              'py-2 pl-8 nth-[n+4]:pt-14',
              'xl:px-6 xl:py-0 xl:nth-[n+4]:pt-10',
              'lg:gap-4 lg:px-[18px] lg:py-1.5 lg:nth-[n+3]:pt-[38px]',
              'md:border-0 sm:gap-3 sm:p-0!'
            )}
            key={title}
          >
            <Image
              className="size-6 lg:size-5 sm:size-4"
              src={icon}
              width={24}
              height={24}
              alt=""
              loading="lazy"
            />
            <div className="text-lg/normal tracking-extra-tight lg:text-base lg:leading-snug sm:text-[15px]">
              <h3 className="inline text-white">{title}</h3>{' '}
              <p
                className={cn(
                  'inline text-gray-new-50',
                  '[&_a]:border-b [&_a]:border-dashed [&_a]:border-white/40 [&_a]:text-gray-new-70',
                  '[&_a]:transition-colors [&_a]:duration-200',
                  '[&_a:hover]:border-gray-new-70'
                )}
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

export default Features;
