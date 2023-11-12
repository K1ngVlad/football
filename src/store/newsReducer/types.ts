import { StaticImageData } from 'next/image';

interface New {
  image: StaticImageData;
  title: string;
  text: string;
  time: string;
  id: number;
}

type NewsState = Array<New>;

export type { New, NewsState };
