'use client';

import Image from 'next/image';
import { FC } from 'react';

import burgerIcon from '@/assets/svg/burger.svg';
import { useBurger } from '@/providers';

const BurgerButton: FC = () => {
  const { toggleBurger } = useBurger();

  return (
    <button onClick={toggleBurger} aria-label="Открыть бургер меню">
      <Image
        className="w-10 sm:w-12"
        alt="Открыть бургер меню"
        src={burgerIcon}
      />
    </button>
  );
};

export { BurgerButton };
