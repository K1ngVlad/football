import { FC } from 'react';
import { HeroSwiper } from './HeroSwiper';

const Hero: FC = () => {
  return (
    <section className="h-80 sm:h-120">
      <HeroSwiper />
    </section>
  );
};

export { Hero };
