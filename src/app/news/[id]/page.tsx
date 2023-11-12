import { news } from '@/api';
import Image from 'next/image';

interface Props {
  params: {
    id: string;
  };
}

export default function Trainer(props: Props) {
  const newItem = news.find((elem) => elem.id === Number(props.params.id));

  if (newItem) {
    const { image, text, title, time } = newItem;

    return (
      <section className="p-3 sm:p-6 m-3 sm:m-3 border rounded border-emerald-400 text-black">
        <div className="flex flex-col items-center">
          <Image
            className="h-60 sm:h-120 object-cover object-center rounded-lg"
            src={image}
            alt={title}
          />
          <div className="mt-2 sm:mt-4">
            <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
            <span className="text-slate-600 sm:text-lg sm:block sm:mt-2">
              {`Опубликовано ${time}`}
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
      <section className="text-black p-3 sm:p-6">Такой новости нет</section>
    );
  }
}
