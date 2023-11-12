import { FC } from 'react';
import { items } from './items';
import { ListItem } from './ListItem';

const List: FC = () => {
  return (
    <section className="p-4 sm:p-8 text-black">
      <h2 className="text-2xl sm:text-3xl font-bold">Что мы предлагаем?</h2>
      <ul className="mt-4 sm:mt-6">
        {items.map((text, i) => (
          <ListItem text={text} key={i} />
        ))}
      </ul>
    </section>
  );
};

export { List };
