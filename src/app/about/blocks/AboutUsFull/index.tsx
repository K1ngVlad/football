import { FC } from 'react';
import { items } from './items';
import { TextBlock } from '@/components';

const AboutUsFull: FC = () => {
  return (
    <section className="p-4 text-black">
      <h2 className="text-2xl font-bold">О нас</h2>
      {items.map((props, i) => (
        <TextBlock key={i} {...props} />
      ))}
    </section>
  );
};

export { AboutUsFull };
