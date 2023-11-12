import { StaticImageData } from 'next/image';

import firstImage from '@/assets/trainers/first.png';
import secondImage from '@/assets/trainers/second.jpg';
import thirdImage from '@/assets/trainers/third.jpg';

interface Trainer {
  image: StaticImageData;
  name: string;
  post: string;
  id: number;
}

type Trainers = Array<Trainer>;

const trainers: Trainers = [
  {
    image: firstImage,
    name: 'Звай Хитрунов',
    post: 'Доцент кафедры собачьего спорта',
    id: 0,
  },
  {
    image: secondImage,
    name: 'Райан Гослинг',
    post: 'Ментор по ментальному состоянию',
    id: 1,
  },
  {
    image: thirdImage,
    name: 'Виталий Каверзин',
    post: 'Рукоблудитель',
    id: 2,
  },
  {
    image: firstImage,
    name: 'Звай Хитрунов',
    post: 'Доцент кафедры собачьего спорта',
    id: 3,
  },
  {
    image: secondImage,
    name: 'Райан Гослинг',
    post: 'Ментор по ментальному состоянию',
    id: 4,
  },
  {
    image: thirdImage,
    name: 'Виталий Каверзин',
    post: 'Рукоблудитель',
    id: 5,
  },
];

export { trainers };
