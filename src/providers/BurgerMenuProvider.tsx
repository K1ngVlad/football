'use client';

import { FC, ReactNode, createContext, useContext, useState } from 'react';

interface BurgerMenuContextType {
  burger: boolean;
  toggleBurger: () => void;
}

const BurgerMenuContext = createContext<BurgerMenuContextType>({
  burger: false,
  toggleBurger: () => {},
});

interface Props {
  children: ReactNode;
  component: ReactNode;
}

const BurgerMenuProvider: FC<Props> = ({ children, component }) => {
  const [burger, setBurger] = useState(false);

  const toggleBurger = () =>
    setBurger((burger) => {
      if (burger) {
        document.body.style.overflow = '';
        return false;
      }

      document.body.style.overflow = 'hidden';
      return true;
    });

  return (
    <BurgerMenuContext.Provider value={{ burger, toggleBurger }}>
      {burger && component}
      {children}
    </BurgerMenuContext.Provider>
  );
};

const useBurger = () => useContext(BurgerMenuContext);

export { BurgerMenuProvider, useBurger };
