import { FC } from 'react';
import { Accordions } from './Accordions';

const QuestAnsw: FC = () => {
  return (
    <section className="p-4 sm:p-6">
      <h2 className="text-black text-2xl sm:text-3xl font-bold">
        Ответы на популярные вопросы
      </h2>
      <Accordions />
    </section>
  );
};

export { QuestAnsw };
