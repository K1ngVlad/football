import { FC } from 'react';
import { trainers } from '@/api';
import { TrainerItem } from '@/components';

const TrainersList: FC = () => {
  return (
    <section className="p-4 sm:p-8">
      <h2 className="text-black text-2xl sm:text-3xl font-bold">Тренера</h2>
      <div>
        {trainers.map((props) => (
          <TrainerItem {...props} key={props.id} />
        ))}
      </div>
    </section>
  );
};

export { TrainersList };
