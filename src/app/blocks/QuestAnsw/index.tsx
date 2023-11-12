import { FC } from 'react';
import { Accordions } from './Accordions';

const QuestAnsw: FC = () => {
  return (
    <section className="p-4">
      <h2 className="text-black text-2xl font-bold">
        Ответы на популярные вопросы
      </h2>
      <Accordions />
    </section>
  );
};

export { QuestAnsw };
