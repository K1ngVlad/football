import { FC } from 'react';
import { BurgerButton } from './BurgerButton';
import Image from 'next/image';

import logo from '@/assets/logo.png';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <header
      id="top"
      className="fixed top-0 left-0 h-16 bg-green-800 w-full flex justify-between items-center p-3 z-40"
    >
      <Link aria-label="Вернуться на главную" href="/">
        <Image alt="Футбол" src={logo} width={60} />
      </Link>
      <BurgerButton />
    </header>
  );
};

export { Header };
