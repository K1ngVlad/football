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
    <footer className="flex flex-col items-center bg-slate-800 p-4">
      <hr className="border border-slate-600 w-full" />
      <Link aria-label="Вернуться на главную" href="/">
        <div className="bg-white rounded-full  mt-4">
          <Image src={logoImage} alt="Футбол" width={80} height={80} />
        </div>
      </Link>

      <address>
        <ul className="mt-4">
          <li className="flex" aria-label="Номер телефона">
            <Image
              src={phoneIcon}
              alt="Номер телефона"
              width={30}
              height={30}
            />
            <Link className="ml-2" href="tel: +79879837901">
              +7 987 983 79 01
            </Link>
          </li>
          <li className="flex" aria-label="Адресс почты">
            <Image src={mailIcon} alt="Адресс почты" width={30} height={30} />
            <Link className="ml-2" href="mailto: kingvlad3008@gmail.com">
              kingvlad3008@gmail.com
            </Link>
          </li>
        </ul>
      </address>
      <ul className="flex mt-4">
        {socLinks.map((props, i) => (
          <SocLink key={props.text} i={i} {...props} />
        ))}
      </ul>
      <Link href="#top" className="text-xl underline mt-4">
        Наверх 🠕
      </Link>
    </footer>
  );
};

export { Footer };
