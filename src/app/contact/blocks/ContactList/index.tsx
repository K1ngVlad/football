import { SocLink } from '@/components/BurgerMenu/SocLink';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { socLinks } from './constants';

import phoneIcon from '@/assets/svg/phone-green.svg';
import mailIcon from '@/assets/svg/email-green.svg';

const ContactList: FC = () => {
  return (
    <section className="p-4">
      <h2 className="text-black text-2xl font-bold">Контакты</h2>
      <address>
        <ul className="mt-4">
          <li className="flex" aria-label="Номер телефона">
            <Image
              src={phoneIcon}
              alt="Номер телефона"
              width={30}
              height={30}
            />
            <Link className="ml-2 text-black" href="tel: +79879837901">
              +7 987 983 79 01
            </Link>
          </li>
          <li className="flex mt-3" aria-label="Адресс почты">
            <Image src={mailIcon} alt="Адресс почты" width={30} height={30} />
            <Link
              className="ml-2 text-black"
              href="mailto: kingvlad3008@gmail.com"
            >
              kingvlad3008@gmail.com
            </Link>
          </li>
        </ul>
        <h3 className=" text-slate-700 mt-3">Социальные сети</h3>
        <ul className="flex mt-3">
          {socLinks.map((props, i) => (
            <SocLink key={props.text} i={i} {...props} />
          ))}
        </ul>
      </address>
    </section>
  );
};

export { ContactList };
