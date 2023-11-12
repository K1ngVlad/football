import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

import { SwiperSlide } from 'swiper/react';

interface Props {
  image: StaticImageData;
  title: string;
  text: string;
}

const Slide: FC<Props> = ({ image, title, text }) => {
  return (
    <div className="h-full bg-black relative -z-20">
      <div className="h-full w-full px-12 sm:px-0 pt-10 sm:flex sm:flex-col sm:items-center sm:justify-center sm:pt-0">
        <Image
          src={image}
          alt={title}
          className="absolute top-0 left-0 w-full h-full -z-10 object-cover object-center opacity-60"
        />
        <h2 className="font-bold text-3xl sm:text-4xl">{title}</h2>
        <span className="block mt-3 text-lg sm:text-center sm:text-xl">
          {text}
        </span>
      </div>
    </div>
  );
};

export { Slide };
