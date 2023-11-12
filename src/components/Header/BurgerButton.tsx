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
        alt="Открыть бургер меню"
        src={burgerIcon}
        width={30}
        height={30}
      />
    </button>
  );
};

export { BurgerButton };
