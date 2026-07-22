import Image from 'next/image';
import NextLink from 'next/link';
import { useTranslations } from 'next-intl';

import Container from 'components/shared/container';
import SectionLabel from 'components/shared/section-label';
import LINKS from 'constants/links';
import yazanGhayad from 'images/pages/team/yazan-ghayad-profile.jpg';

const LINKEDIN_URL = 'https://se.linkedin.com/in/yazan-ghayad';

const Profile = () => {
  const t = useTranslations('team.yazan');
  const meta = t.raw('meta');
  const bio = t.raw('bio');
  const focus = t.raw('focus');

  return (
    <section className="profile pt-[152px] safe-paddings xl:pt-[136px] lg:pt-28 md:pt-24">
      <Container size="1152">
        <NextLink
          className="inline-flex items-center gap-x-1.5 text-sm tracking-extra-tight text-gray-new-40 transition-colors duration-200 hover:text-black-new"
          href={LINKS.team}
        >
          <span aria-hidden>&larr;</span>
          {t('back')}
        </NextLink>
        <div className="mt-10 grid grid-cols-[1fr_400px] gap-x-20 xl:gap-x-14 lg:mt-8 lg:grid-cols-1 lg:gap-y-12">
          <div>
            <SectionLabel theme="black">{t('label')}</SectionLabel>
            <h1 className="mt-6 font-title text-[56px] leading-[1.02] font-medium tracking-extra-tight text-black-new xl:text-[48px] lg:text-[40px] md:mt-5 md:text-[32px]">
              {t('name')}
            </h1>
            <div className="mt-8 max-w-[560px] space-y-5 lg:mt-6">
              {bio.map((paragraph) => (
                <p
                  className="text-lg leading-normal tracking-extra-tight text-gray-new-40 lg:text-base"
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <h2 className="mt-12 font-mono text-xs leading-none font-normal tracking-wider text-gray-new-60 uppercase lg:mt-10">
              {t('focusTitle')}
            </h2>
            <ul className="mt-5 grid max-w-[560px] grid-cols-2 gap-x-10 gap-y-4 sm:grid-cols-1">
              {focus.map((item) => (
                <li
                  className="border-t border-gray-new-20 pt-3 text-sm leading-normal tracking-extra-tight text-black-new"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:max-w-[400px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] bg-gray-new-94">
              <Image
                className="object-cover object-[50%_18%]"
                src={yazanGhayad}
                alt={t('name')}
                sizes="(max-width: 1024px) 100vw, 400px"
                quality={90}
                priority
                fill
              />
            </div>
            <dl className="mt-6">
              {meta.map(({ label, value }) => (
                <div
                  className="flex items-baseline justify-between gap-x-4 border-t border-gray-new-20 py-3"
                  key={label}
                >
                  <dt className="font-mono text-xs leading-none tracking-wider text-gray-new-60 uppercase">
                    {label}
                  </dt>
                  <dd className="text-sm leading-none tracking-extra-tight text-black-new">
                    {value}
                  </dd>
                </div>
              ))}
              <div className="flex items-baseline justify-between gap-x-4 border-t border-gray-new-20 py-3">
                <dt className="font-mono text-xs leading-none tracking-wider text-gray-new-60 uppercase">
                  {t('linkedinLabel')}
                </dt>
                <dd className="text-sm leading-none tracking-extra-tight">
                  <a
                    className="text-black-new underline decoration-gray-new-70 underline-offset-4 transition-colors duration-200 hover:decoration-black-new"
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t('linkedinValue')}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Profile;
