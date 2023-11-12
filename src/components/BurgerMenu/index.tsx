import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import phoneIcon from '@/assets/svg/phone.svg';
import mailIcon from '@/assets/svg/mail.svg';

import { pageLinks, socLinks } from './constants';
import { PageLink } from './PageLink';
import { SocLink } from './SocLink';

const BurgerMenu: FC = () => {
  return (
    <aside className="fixed top-0 left-0 flex flex-col w-screen h-screen p-5 pt-16 bg-green-800 justify-between z-30">
      <nav className="flex flex-col w-full items-center pt-3">
        <ul>
          {pageLinks.map((props) => (
            <PageLink key={props.text} {...props} />
          ))}
        </ul>
      </nav>
      <address>
        <ul className="mb-3">
          <li className="flex items-center" aria-label="Номер телефона">
            <Image
              src={phoneIcon}
              alt="Номер телефона"
              className="w-6 sm:w-10"
            />
            <Link className="ml-2 sm:ml-4 sm:text-lg" href="tel: +79879837901">
              +7 987 983 79 01
            </Link>
          </li>
          <li className="flex sm:mt-4 items-center" aria-label="Адресс почты">
            <Image src={mailIcon} alt="Адресс почты" className="w-6 sm:w-10" />
            <Link
              className="ml-2 sm:ml-4 sm:text-lg"
              href="mailto: kingvlad3008@gmail.com"
            >
              kingvlad3008@gmail.com
            </Link>
          </li>
        </ul>

        <ul className="flex sm:mt-10">
          {socLinks.map((props, i) => (
            <SocLink key={props.text} i={i} {...props} />
          ))}
        </ul>
      </address>
    </aside>
  );
};

export { BurgerMenu };
