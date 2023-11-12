import { FC } from 'react';
import { trainers } from '@/api';
import { TrainerItem } from '@/components';
import Link from 'next/link';

const Trainers: FC = () => {
  return (
    <section className="p-4 sm:p-8 flex flex-col">
      <h2 className="text-black text-2xl sm:text-3xl font-bold">
        Наши тренера
      </h2>
      <div className="mt-4 sm:mt-6">
        {trainers.slice(0, 3).map((props) => (
          <TrainerItem key={props.id} {...props} />
        ))}
      </div>
      <Link
        href="./trainers"
        className="text-green-700 mt-4 sm:mt-6 underline text-xl sm:text-2xl self-center"
      >
        Все тренера
      </Link>
    </section>
  );
};

export { Trainers };
