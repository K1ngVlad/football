import { Trainer } from '@/api';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const TrainerItem: FC<Trainer> = ({ image, name, post, id }) => {
  return (
    <Link href={`/trainers/${id}`}>
      <article className="flex flex-col items-center shadow-lg p-3 sm:p-6 mt-3 sm:mt-6 rounded bg-slate-100">
        <Image
          className="w-full h-80 sm:h-120 object-cover object-center rounded-lg2"
          src={image}
          alt={name}
        />
        <h3 className="text-green-900 text-xl sm:text-2xl font-bold mt-3 sm:mt-6">
          {name}
        </h3>
        <span className="text-slate-600 text-center sm:text-lg">{post}</span>
      </article>
    </Link>
  );
};

export { TrainerItem };
