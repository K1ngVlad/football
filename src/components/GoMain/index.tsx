import Link from 'next/link';
import { FC } from 'react';

const GoMain: FC = () => {
  return (
    <Link
      className="bg-emerald-700 flex w-fit px-4 sm:px-6 h-10 sm:h-12 sm:text-lg items-center justify-center rounded m-4 sm:mt-6"
      href="/"
    >
      На главную
    </Link>
  );
};

export { GoMain };
