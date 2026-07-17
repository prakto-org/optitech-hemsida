import Image from 'next/image';

import Container from 'components/shared/container/container';
import checkIcon from 'icons/report/check-icon.svg';

const DATA = [
  {
    percentage: '59%',
    title:
      'of companies are not ready for NIS2, DORA, or the EU AI Act, despite the deadlines already being in effect. Many have no documented controls or evidence in place.',
    description:
      'Regulatory readiness gaps are not rare edge cases. More than half of Nordic SMBs preparing for the new EU rules have not closed the basics.',
  },
  {
    percentage: '30%',
    title:
      'of teams spend 3+ hours a week collecting evidence by hand, and some push past half a day. Only 21% have any part of it automated.',
    description:
      'Manual, spreadsheet-driven evidence collection drags on and only gets worse as the number of controls and suppliers climbs.',
  },
  {
    percentage: '40%',
    title:
      'reported significant business interruption caused by an audit or assessment. Only 8% reported little to no stress or disruption to their operations.',
    description:
      'Audit scrambles affect everything from customer deals to internal deliverables, a headache for both compliance teams and the broader business.',
  },
  {
    percentage: '52%',
    title:
      'of companies lost or delayed a deal because they could not show the right certifications. 48% reported a spike in security questionnaires. 26% faced penalties or contract breaches.',
    description:
      "Missing certifications are more than a paperwork problem. They're a direct threat to revenue and customer trust.",
  },
  {
    percentage: '72%',
    title:
      'of teams are merely somewhat confident in their ability to pass an audit on short notice. Even among teams that recently passed one, only 21% feel very confident.',
    description:
      'Confidence in current manual compliance processes is shaky. There’s room for improvement in how evidence is gathered and kept current. ',
  },
];

const KeyInsights = () => (
  <section className="key-insights mt-[134px] safe-paddings xl:mt-28 lg:mt-[100px] sm:mt-[88px]">
    <Container
      className="relative z-10 flex max-w-xl! flex-col items-start lg:max-w-[642px]!"
      size="xxs"
    >
      <h2 className="font-title text-5xl leading-tight font-medium tracking-tight xl:text-[44px] lg:text-4xl sm:text-[32px]">
        Key insights
      </h2>
      <ul className="mt-12 flex flex-col gap-y-[42px] xl:mt-10 xl:gap-y-[38px] sm:mt-8 sm:gap-y-8">
        {DATA.map(({ percentage, title, description }, index) => (
          <li className="flex flex-col" key={index}>
            <span className="bg-[linear-gradient(180deg,#00E599_24.85%,#007F55_68.32%)] bg-clip-text text-[36px] leading-none font-medium tracking-tighter text-transparent lg:text-[32px]">
              {percentage}
            </span>
            <h3 className="mt-2 text-xl leading-snug font-medium tracking-tight text-gray-new-90 lg:text-[18px] sm:text-[16px]">
              {title}
            </h3>
            <div className="relative mt-5 max-w-[536px] rounded-lg border border-gray-new-20 py-3 pr-5 pl-11">
              <Image
                className="absolute top-4 left-4"
                src={checkIcon}
                width={16}
                height={16}
                alt=""
              />
              <p className="relative text-sm leading-snug tracking-tight text-gray-new-60">
                {description}
              </p>
              <span className="pointer-events-none absolute -top-1.5 left-[18px] inline-block h-[11px] w-[11px] rotate-45 border-t border-l border-solid border-gray-new-20 bg-black-pure" />
            </div>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

export default KeyInsights;
