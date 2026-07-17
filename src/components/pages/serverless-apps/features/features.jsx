import Image from 'next/image';

import TagCloud from 'components/pages/use-case/tag-cloud';
import Container from 'components/shared/container/container';
import aiIcon from 'icons/serverless-apps/features/ai.svg';
import autoScalingIcon from 'icons/serverless-apps/features/auto-scaling.svg';
import checkIcon from 'icons/serverless-apps/features/check.svg';
import costIcon from 'icons/serverless-apps/features/cost.svg';
import handIcon from 'icons/serverless-apps/features/hand.svg';
import maintenanceIcon from 'icons/serverless-apps/features/maintenance.svg';
import peakIcon from 'icons/serverless-apps/features/peak.svg';
import performanceIcon from 'icons/serverless-apps/features/performance.svg';
import scalingIcon from 'icons/serverless-apps/features/scaling.svg';
import speedIcon from 'icons/serverless-apps/features/speed.svg';
import storageIcon from 'icons/serverless-apps/features/storage.svg';
import timerIcon from 'icons/serverless-apps/features/timer.svg';
import noServer from 'images/pages/serverless-apps/features/no-server.jpg';
import paySm from 'images/pages/serverless-apps/features/pay-sm.jpg';
import pay from 'images/pages/serverless-apps/features/pay.jpg';
import provisioning from 'images/pages/serverless-apps/features/provisioning.jpg';
import separation from 'images/pages/serverless-apps/features/separation.jpg';
import { cn } from 'utils/cn';

const items = [
  {
    title: 'AI-driven gap analysis',
    desctiprion:
      '<a href="/blog/architecture-decisions-in-neon">OptiTech’s gap analysis</a> maps your organization against NIS2, DORA, GDPR, and ISO 27001. It shows exactly where you fall short and what to fix first.',
    features: [
      {
        title: 'Framework coverage',
        icon: scalingIcon,
      },
      {
        title: 'Prioritized gaps',
        icon: storageIcon,
      },
      {
        title: 'Clear remediation',
        icon: performanceIcon,
      },
    ],
    image: {
      src: separation,
      height: 304,
    },
  },
  {
    title: 'AI-generated documentation',
    desctiprion:
      'You can generate policies, procedures, and evidence in minutes, a big win for Nordic SMBs and their supply chains that have no dedicated compliance team.',
    features: [
      {
        title: 'Minutes, not weeks',
        icon: speedIcon,
      },
      {
        title: 'Ready to review',
        icon: timerIcon,
      },
      {
        title: 'AI-generated',
        icon: aiIcon,
      },
    ],
    image: {
      src: provisioning,
      height: 326,
    },
  },
  {
    title: 'No manual annual projects',
    desctiprion:
      'With OptiTech there is <a href="/docs/introduction/serverless">no annual scramble or manual evidence gathering</a>. The platform collects proof continuously, keeping you audit-ready every day, not just before a review.',
    features: [
      {
        title: 'Hands-free evidence',
        icon: handIcon,
      },
      {
        title: 'Continuous monitoring',
        icon: autoScalingIcon,
      },
      {
        title: 'Always up to date',
        icon: maintenanceIcon,
      },
    ],
    image: {
      src: noServer,
      height: 304,
    },
  },
  {
    title: 'Pricing built for SMBs',
    desctiprion:
      'Your cost matches your size, not an enterprise budget. There is no need to hire a consultancy or pay for tooling designed for large corporations.',
    features: [
      {
        title: 'SMB pricing',
        icon: costIcon,
      },
      {
        title: 'No consultants',
        icon: peakIcon,
      },
      {
        title: 'Onboarding under a week',
        icon: checkIcon,
      },
    ],
    image: {
      src: pay,
      height: 326,
    },
    imageSm: {
      src: paySm,
      height: 244,
    },
    imageText:
      'Typical compliance readiness without automation. Teams rush to gather evidence once a year before an audit, then let it lapse. OptiTech keeps evidence current every day. Based on a real use case.',
  },
];

const Features = () => (
  <section className="features pt-40 safe-paddings xl:pt-[136px] lg:pt-[104px] md:pt-20">
    <Container size="960">
      <h2 className="text-center font-title text-[52px] leading-none font-medium tracking-tighter xl:text-[48px] lg:text-[44px] md:text-4xl">
        Compliance that runs itself
      </h2>
      <ul className="mt-20 flex flex-col gap-[120px] lg:mx-auto lg:mt-16 lg:max-w-3xl lg:gap-[104px] md:mt-14 md:max-w-sm md:gap-14">
        {items.map(({ title, desctiprion, features, image, imageSm, imageText }, index) => (
          <li
            className="grid grid-cols-2 items-center gap-16 lg:gap-8 md:grid-cols-1 md:gap-[18px]"
            key={title}
          >
            <div className="relative overflow-hidden rounded-[10px] lg:rounded-lg">
              <Image
                className={cn('rounded-[inherit]', imageSm && 'lg:hidden')}
                src={image.src}
                width="448"
                height={image.height}
                alt={title}
                quality={99}
              />
              {imageSm && (
                <Image
                  className={cn('hidden rounded-[inherit] lg:block')}
                  src={imageSm.src}
                  width="448"
                  height={imageSm.height}
                  alt={title}
                  quality={99}
                />
              )}
              {imageText && (
                <p className="absolute inset-x-0 bottom-0 p-4 text-sm leading-snug font-light tracking-extra-tight text-pretty text-gray-new-50 lg:px-3 lg:py-2.5 lg:text-[13px] sm:px-2.5 sm:py-2 xs:text-[3.6vw]">
                  {imageText}
                </p>
              )}
              <span className="pointer-events-none absolute inset-0 rounded-[inherit] border border-gray-new-20/30" />
            </div>
            <div className={cn('relative', index % 2 === 1 && '-order-1 md:order-none')}>
              <h3 className="text-2xl leading-snug font-medium tracking-extra-tight lg:text-xl md:text-lg">
                {title}
              </h3>
              <p
                className={cn(
                  'mt-2 text-lg leading-snug font-light tracking-extra-tight text-gray-new-70 lg:text-base',
                  '[&_a]:border-b [&_a]:border-gray-new-70/40 [&_a]:font-normal [&_a]:transition-colors [&_a]:duration-300 [&_a:hover]:border-gray-new-70'
                )}
                dangerouslySetInnerHTML={{ __html: desctiprion }}
              />
              {/* // add tag cloud here */}
              <TagCloud
                items={features}
                className="gap-3 lg:gap-x-2"
                titleClassName="text-[15px]"
              />
            </div>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

export default Features;
