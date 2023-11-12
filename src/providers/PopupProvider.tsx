'use client';

import { FC, ReactNode, createContext, useState, useContext } from 'react';
import { PopupContainer } from '@/components';

interface PopupContextType {
  popup: ReactNode | null;
  openPopup: (component?: ReactNode) => void;
  closePopup: () => void;
}

const PopupContext = createContext<PopupContextType>({
  popup: null,
  openPopup: () => {},
  closePopup: () => {},
});

interface Props {
  children: ReactNode;
}

interface State {
  openedPopup: boolean;
  element: ReactNode | null;
}

const PopupProvider: FC<Props> = ({ children }) => {
  const [popup, setPopup] = useState<State>({
    openedPopup: false,
    element: null,
  });

  const openPopup = (component: ReactNode) => {
    const { clientWidth, scrollWidth } = document.documentElement;
    const width = scrollWidth - clientWidth;

    if (width > 0) {
      document.body.style.paddingRight = `${width}px`;
    }

    document.body.style.overflow = 'hidden';

    setPopup({
      openedPopup: true,
      element: component,
    });
  };

  const closePopup = () => {
    document.body.style.paddingRight = '';
    document.body.style.overflow = '';

    setPopup((state) => ({ ...state, openedPopup: false }));

    setTimeout(() => {
      setPopup((state) => ({ ...state, element: null }));
    }, 1000);
  };

  return (
    <PopupContext.Provider
      value={{
        popup: popup.openedPopup,
        openPopup,
        closePopup,
      }}
    >
      {children}
      {popup.openedPopup && <PopupContainer>{popup.element}</PopupContainer>}
    </PopupContext.Provider>
  );
};

const usePopup = () => useContext(PopupContext);

export { PopupProvider, usePopup };
