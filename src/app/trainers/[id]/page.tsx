import { trainers } from '@/api';
import Image from 'next/image';

interface Props {
  params: {
    id: string;
  };
}

export default function Trainer(props: Props) {
  const trainer = trainers.find((elem) => elem.id === Number(props.params.id));

  if (trainer) {
    const { image, text, name, post } = trainer;

    return (
      <section className="p-3 sm:p-6 m-3 sm:m-6 sm:border-2 border rounded border-emerald-400 text-black">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center">
          <Image
            className="w-60 h-60 object-cover object-center rounded-lg"
            src={image}
            alt={name}
          />
          <div className="mt-2 sm:mt-4 sm:ml-4">
            <h2 className="text-2xl sm:text-3xl font-bold">{name}</h2>
            <span className="text-slate-600 sm:text-lg sm:block sm:mt-2">
              {post}
            </span>
          </div>
        </div>
        <div className="mt-4 sm:mt-6">
          <p className="whitespace-pre-wrap sm:text-lg">{text}</p>
        </div>
      </section>
    );
  } else {
    return (
      <section className="text-black p-3 sm:p-6 sm:text-lg">
        Такого тренера нет
      </section>
    );
  }
}
