'use client';

import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import arrowRightIcon from '@/assets/svg/arrow-right.svg';
import { useBurger } from '@/providers';

interface Props {
  text: string;
  href: string;
}

const PageLink: FC<Props> = ({ text, href }) => {
  const { toggleBurger } = useBurger();
  return (
    <li
      onClick={toggleBurger}
      className="text-lg flex items-center mt-3 sm:mt-6"
    >
      <Link
        className="flex items-center w-36 justify-between sm:text-xl sm:w-54"
        href={href}
      >
        <span>{text}</span>
        <Image className="ml-3 w-4 sm:w-6" src={arrowRightIcon} alt={text} />
      </Link>
    </li>
  );
};

export { PageLink };
