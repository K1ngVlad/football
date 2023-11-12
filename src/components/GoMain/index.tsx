import Link from 'next/link';
import { FC } from 'react';

const GoMain: FC = () => {
  return (
    <Link
      className="bg-emerald-700 flex w-fit px-4 h-10 items-center justify-center rounded m-4"
      href="/"
    >
      На главную
    </Link>
  );
};

export { GoMain };
