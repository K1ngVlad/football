import { FC } from 'react';
import { news } from '@/api';
import { NewItem } from '@/components';
import Link from 'next/link';

const LastNews: FC = () => {
  return (
    <section className="p-4 flex flex-col items-center">
      <h2 className="text-black font-bold text-2xl self-start">
        Последние новости
      </h2>
      <div className="text-black mt-4">
        {news.slice(0, 3).map((props) => (
          <NewItem key={props.id} {...props} />
        ))}
      </div>
      <Link href="./news" className="text-green-700 mt-4 underline text-xl">
        Все новости
      </Link>
    </section>
  );
};

export { LastNews };
