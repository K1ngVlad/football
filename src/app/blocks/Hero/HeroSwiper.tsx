'use client';
import { FC } from 'react';

import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { slides } from './slides';
import { Slide } from './Slide';

const HeroSwiper: FC = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true, dynamicBullets: true }}
      className="h-full"
      loop
    >
      {/* <SwiperSlide>asdasdsaasd</SwiperSlide> */}
      {slides.map((props) => (
        <SwiperSlide key={props.title}>
          <Slide {...props} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export { HeroSwiper };
