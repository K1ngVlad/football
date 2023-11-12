import { SocLink } from '@/components/BurgerMenu/SocLink';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { socLinks } from './constants';

import phoneIcon from '@/assets/svg/phone-green.svg';
import mailIcon from '@/assets/svg/email-green.svg';

const ContactList: FC = () => {
  return (
    <section className="p-4 sm:p-8">
      <h2 className="text-black text-2xl sm:text-3xl font-bold">Контакты</h2>
      <address>
        <ul className="mt-4 sm:mt-6 sm:flex">
          <li className="flex items-center" aria-label="Номер телефона">
            <Image
              src={phoneIcon}
              alt="Номер телефона"
              className="w-8 sm:w-10"
            />
            <Link
              className="ml-2 text-lg sm:ml-4 text-black"
              href="tel: +79879837901"
            >
              +7 987 983 79 01
            </Link>
          </li>
          <li
            className="flex items-center mt-3 sm:mt-0 sm:ml-4"
            aria-label="Адресс почты"
          >
            <Image src={mailIcon} alt="Адресс почты" className="w-8 sm:w-10" />
            <Link
              className="ml-2 text-lg text-black"
              href="mailto: kingvlad3008@gmail.com"
            >
              kingvlad3008@gmail.com
            </Link>
          </li>
        </ul>
        <h3 className=" text-slate-700 mt-3 sm:mt-6 sm:text-xl">
          Социальные сети
        </h3>
        <ul className="flex mt-3 sm:mt-6">
          {socLinks.map((props, i) => (
            <SocLink key={props.text} i={i} {...props} />
          ))}
        </ul>
      </address>
    </section>
  );
};

export { ContactList };
