'use client';

import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const PopupContainer: FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(0,0,0,0.5)',
      }}
      className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center p-4"
    >
      {children}
    </div>
  );
};

export { PopupContainer };
