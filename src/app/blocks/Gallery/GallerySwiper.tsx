'use client';

import { FC } from 'react';

import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { items } from './items';
import Image from 'next/image';

const GallerySwiper: FC = () => {
  return (
    <div className="h-60 mt-4 rounded-lg overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        className="h-full"
        loop
      >
        {items.map((img, i) => (
          <SwiperSlide key={i}>
            <Image
              className="object-cover object-center w-full h-full"
              alt="Фотография"
              src={img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export { GallerySwiper };
