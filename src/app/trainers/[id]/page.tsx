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
      <section className="p-3 m-3 border rounded border-emerald-400 text-black">
        <div className="flex flex-col items-center">
          <Image
            className="w-60 h-60 object-cover object-center rounded-lg"
            src={image}
            alt={name}
          />
          <div className="mt-2">
            <h2 className="text-2xl font-bold">{name}</h2>
            <span className="text-slate-600">{post}</span>
          </div>
        </div>
        <div className="mt-4">
          <p className="whitespace-pre-wrap">{text}</p>
        </div>
      </section>
    );
  } else {
    return <section className="text-black p-3">Такого тренера нет</section>;
  }
}
