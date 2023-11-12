import { FC } from 'react';

const TrainingExample: FC = () => {
  return (
    <section className="p-4">
      <h2 className="text-black text-2xl font-bold">Наши тренировки</h2>
      <div className="mt-4 rounded-xl shadow-lg shadow-slate-400 overflow-hidden">
        <iframe
          className=""
          width="100%"
          height="200px"
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
