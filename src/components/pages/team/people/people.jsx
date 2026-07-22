import Image from 'next/image';
import NextLink from 'next/link';
import { useTranslations } from 'next-intl';

import Container from 'components/shared/container';
import LINKS from 'constants/links';
import adamHill from 'images/pages/team/adam-hill.jpg';
import corneliaJakobsson from 'images/pages/team/cornelia-jakobsson.png';
import khakedDarwish from 'images/pages/team/khaked-darwish.jpg';
import linneaSjoholm from 'images/pages/team/linnea-sjoholm.jpg';
import malinVonEngman from 'images/pages/team/malin-von-engman.png';
import marwanAtme from 'images/pages/team/marwan-atme.jpg';
import oscarHedqvist from 'images/pages/team/oscar-hedqvist.jpg';
import yazanGhayad from 'images/pages/team/yazan-ghayad.jpg';
import { cn } from 'utils/cn';

// Order must match team.people.items in the locale files.
const PORTRAITS = [
  { photo: yazanGhayad, position: 'object-[50%_25%]', href: LINKS.teamYazanGhayad },
  { photo: corneliaJakobsson, position: 'object-[55%_25%]' },
  { photo: adamHill, position: 'object-[50%_20%]' },
  { photo: linneaSjoholm, position: 'object-[45%_25%]' },
  { photo: khakedDarwish, position: 'object-[53%_25%]' },
  { photo: oscarHedqvist, position: 'object-[50%_22%]' },
  { photo: malinVonEngman, position: 'object-[38%_30%]' },
  { photo: marwanAtme, position: 'object-[45%_30%]' },
];

const People = () => {
  const t = useTranslations('team.people');
  const items = t.raw('items');

  return (
    <section className="people mt-20 safe-paddings lg:mt-16 md:mt-12">
      <Container size="1152">
        <ul className="grid grid-cols-4 gap-x-8 gap-y-14 xl:gap-x-6 lg:grid-cols-2 lg:gap-y-12 sm:gap-x-4 sm:gap-y-10">
          {items.map(({ name, role }, index) => {
            const { photo, position, href } = PORTRAITS[index] ?? {};

            const card = (
              <>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] bg-gray-new-94">
                  <Image
                    className={cn('object-cover grayscale', position)}
                    src={photo}
                    alt={name}
                    sizes="(max-width: 1024px) 50vw, 270px"
                    quality={90}
                    fill
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-x-2 border-t border-gray-new-20 pt-4 sm:mt-3 sm:pt-3">
                  <h2
                    className={cn(
                      'text-[17px] leading-tight font-medium tracking-tight text-black-new sm:text-base',
                      href && 'decoration-gray-new-70 underline-offset-4 group-hover:underline'
                    )}
                  >
                    {name}
                  </h2>
                  <span className="font-mono text-xs leading-none text-gray-new-60">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="mt-1.5 text-sm leading-normal tracking-extra-tight text-gray-new-40">
                  {role}
                </p>
              </>
            );

            return (
              <li key={name}>
                {href ? (
                  <NextLink className="group block" href={href}>
                    {card}
                  </NextLink>
                ) : (
                  card
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default People;
