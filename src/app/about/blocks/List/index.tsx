import { FC } from 'react';
import { items } from './items';
import { ListItem } from './ListItem';

const List: FC = () => {
  return (
    <section className="p-4 text-black">
      <h2 className="text-2xl font-bold">Что мы предлагаем?</h2>
      <ul className="mt-4">
        {items.map((text, i) => (
          <ListItem text={text} key={i} />
        ))}
      </ul>
    </section>
  );
};

export { List };
