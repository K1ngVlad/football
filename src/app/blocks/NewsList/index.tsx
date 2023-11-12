import { FC } from 'react';
import { news } from '@/api';
import { NewItem } from '@/components';

const NewsList: FC = () => {
  return (
    <section className="p-4">
      <h2 className="text-black text-2xl font-bold">Новости</h2>
      <div>
        {news.map((props) => (
          <NewItem key={props.id} {...props} />
        ))}
      </div>
    </section>
  );
};

export { NewsList };
