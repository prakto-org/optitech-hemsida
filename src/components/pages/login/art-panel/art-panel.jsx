import Image from 'next/image';

import flamingo from 'images/pages/login/flamingo.png';

const ArtPanel = () => (
  <div
    className="relative h-[545px] w-[416px] shrink-0 overflow-hidden bg-white md:hidden"
    aria-hidden
  >
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 416 545"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* olive blob */}
      <path
        d="M162 0H332C380 10 410 45 416 95V545H98C74 512 60 468 76 424C90 384 126 352 131 310C135 272 104 246 90 208C74 162 96 42 162 0Z"
        fill="#4F5D28"
      />
      {/* sparkles */}
      <path d="M181 112l6.5 19 19 6.5-19 6.5-6.5 19-6.5-19-19-6.5 19-6.5Z" fill="#fff" />
      <path d="M225 176l4 11.5 11.5 4-11.5 4-4 11.5-4-11.5-11.5-4 11.5-4Z" fill="#fff" />
    </svg>
    <Image
      className="absolute right-6 bottom-[-8px] h-auto w-[252px]"
      src={flamingo}
      width={252}
      height={357}
      alt=""
    />
  </div>
);

export default ArtPanel;
