import { FC } from 'react';
import { trainers } from '@/api';
import { TrainerItem } from '@/components';
import Link from 'next/link';

const Trainers: FC = () => {
  return (
    <section className="p-4 flex flex-col">
      <h2 className="text-black text-2xl font-bold">Наши тренера</h2>
      <div className="mt-4">
        {trainers.slice(0, 3).map((props) => (
          <TrainerItem key={props.id} {...props} />
        ))}
      </div>
      <Link
        href="./trainers"
        className="text-green-700 mt-4 underline text-xl self-center"
      >
        Все тренера
      </Link>
    </section>
  );
};

export { Trainers };
