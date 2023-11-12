import { StaticImageData } from 'next/image';

import firstSlideImg from '@/assets/swiper/first.jpg';
import secondSlideImg from '@/assets/swiper/second.jpg';
import thirdSlideImg from '@/assets/swiper/third.jpg';

interface Slide {
  image: StaticImageData;
  title: string;
  text: string;
}

type Slides = Array<Slide>;

const slides: Slides = [
  {
    image: firstSlideImg,
    title: 'Больше чем спорт',
    text: 'Футбол – это страсть!',
  },
  {
    image: secondSlideImg,
    title: 'Тренировки',
    text: 'Для настоящих тренировок нужна свобода, а не ограничения!',
  },
  {
    image: thirdSlideImg,
    title: 'Командный вид спорта',
    text: 'Награды выигрываются благодаря командной работе!',
  },
];

export { slides };
