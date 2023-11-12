import { New } from '@/api';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const NewItem: FC<New> = ({ image, title, text, time, id }) => {
  return (
    <article className="border border-slate-300 p-3 mt-3 rounded">
      <div className="h-40">
        <Image
          src={image}
          alt={title}
          className="object-cover object-center w-full h-full rounded-lg"
        />
      </div>
      <time className="text-sm text-slate-500 sm mt-3 block" dateTime={time}>
        {time}
      </time>
      <h2 className="text-lg font-bold mt-3 text-black">{title}</h2>
      <p className="text-sm mt-3 text-black">
        {text.length > 153 ? `${text.slice(0, 150)}...` : text}
      </p>
      <Link href={`/news/${id}`} className="text-green-700 mt-3 block">
        Читать дальше...
      </Link>
    </article>
  );
};

export { NewItem };
