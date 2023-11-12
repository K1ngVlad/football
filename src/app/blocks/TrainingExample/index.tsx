import { FC } from 'react';

const TrainingExample: FC = () => {
  return (
    <section className="p-4 sm:p-6">
      <h2 className="text-black text-2xl font-bold sm:text-3xl">
        Наши тренировки
      </h2>
      <div className="mt-4 sm:mt-6 rounded-xl shadow-lg shadow-slate-400 overflow-hidden h-80 sm:h-120">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/P58VlYO0Le8?si=11j73YNiu-COZnV7"
          title="Пример нашей тренировки"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export { TrainingExample };
