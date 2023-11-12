import { FC } from 'react';

import logoImage from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

import phoneIcon from '@/assets/svg/phone.svg';
import mailIcon from '@/assets/svg/mail.svg';
import { socLinks } from './items';
import { SocLink } from './SocLink';

const Footer: FC = () => {
  return (
    <footer className="flex flex-col items-center bg-slate-800 p-4 sm:p-8">
      <hr className="border border-slate-600 w-full" />
      <Link aria-label="Вернуться на главную" href="/">
        <div className="bg-white rounded-full mt-4 sm:mt-6 w-20 sm:w-24">
          <Image src={logoImage} alt="Футбол" />
        </div>
      </Link>

      <address className="sm:w-full sm:px-8">
        <ul className="mt-4 sm:mt-6 sm:flex sm:w-full sm:justify-between sm:items-center">
          <li className="flex" aria-label="Номер телефона">
            <Image
              src={phoneIcon}
              alt="Номер телефона"
              className="w-8 sm:w-10"
            />
            <Link className="ml-2 sm:ml-4 sm:text-lg" href="tel: +79879837901">
              +7 987 983 79 01
            </Link>
          </li>
          <li className="flex" aria-label="Адресс почты">
            <Image className="w-8 sm:w-10" src={mailIcon} alt="Адресс почты" />
            <Link
              className="ml-2 sm:ml-4 sm:text-lg"
              href="mailto: kingvlad3008@gmail.com"
            >
              kingvlad3008@gmail.com
            </Link>
          </li>
        </ul>
      </address>
      <ul className="flex mt-4 sm:mt-6">
        {socLinks.map((props, i) => (
          <SocLink key={props.text} i={i} {...props} />
        ))}
      </ul>
      <Link href="#top" className="text-xl sm:text-2x underline mt-4 sm:mt-6">
        Наверх 🠕
      </Link>
    </footer>
  );
};

export { Footer };
