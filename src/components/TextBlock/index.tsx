import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

interface Props {
  title: string;
  text: string;
  image?: StaticImageData;
}

const TextBlock: FC<Props> = ({ title, text, image }) => {
  return (
    <article className="mt-4 sm-mt-6">
      <h3 className="text-xl sm:text-2xl text-green-900 font-bold ">{title}</h3>
      {image && (
        <Image
          alt={title}
          src={image}
          className="w-full object-cover object-center mt-3 sm:mt-6 rounded-lg"
        />
      )}
      <p className="mt-3 sm:mt-6 sm:text-lg text-black">{text}</p>
    </article>
  );
};

export { TextBlock };
