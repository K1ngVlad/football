import { New } from '@/api';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const NewItem: FC<New> = ({ image, title, text, time, id }) => {
  return (
    <article className="border border-slate-300 p-3 sm:p-6 mt-3 sm:mt-6 rounded">
      <div className="h-80 sm:h-120">
        <Image
          src={image}
          alt={title}
          className="object-cover object-center w-full h-full rounded-lg"
        />
      </div>
      <time
        className="text-sm sm:text-base text-slate-500 mt-3 sm:mt-6 block"
        dateTime={time}
      >
        {time}
      </time>
      <h2 className="text-lg sm:text-xl font-bold mt-3 sm:mt-6 text-black">
        {title}
      </h2>
      <p className="text-sm sm:text-base mt-3 sm:mt-6 text-black">
        {text.length > 153 ? `${text.slice(0, 150)}...` : text}
      </p>
      <Link
        href={`/news/${id}`}
        className="text-green-700 mt-3 sm:mt-6 sm:text-lg block"
      >
        Читать дальше...
      </Link>
    </article>
  );
};

export { NewItem };
