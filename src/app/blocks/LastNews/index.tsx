import { FC } from 'react';
import { news } from '@/api';
import { NewItem } from '@/components';
import Link from 'next/link';

const LastNews: FC = () => {
  return (
    <section className="p-4 sm:p-8 flex flex-col items-center">
      <h2 className="text-black font-bold text-2xl sm:text-3xl self-start">
        Последние новости
      </h2>
      <div className="text-black mt-4 sm:mt-6">
        {news.slice(0, 3).map((props) => (
          <NewItem key={props.id} {...props} />
        ))}
      </div>
      <Link
        href="./news"
        className="text-green-700 mt-4 sm:mt-6 underline text-xl sm:text-2xl"
      >
        Все новости
      </Link>
    </section>
  );
};

export { LastNews };
