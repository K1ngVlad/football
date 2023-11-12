import { StaticImageData } from 'next/image';

import firstImage from '@/assets/gallery/first.jpg';
import secondImage from '@/assets/gallery/second.jpeg';
import thirdImage from '@/assets/gallery/third.jpg';
import fourthImage from '@/assets/gallery/fourth.jpg';
import fifthImage from '@/assets/gallery/fifth.jpg';

type Items = Array<StaticImageData>;

const items: Items = [
  firstImage,
  secondImage,
  thirdImage,
  fourthImage,
  fifthImage,
];

export { items };
