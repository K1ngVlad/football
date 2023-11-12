import { FC } from 'react';
import { GallerySwiper } from './GallerySwiper';

const Gallery: FC = () => {
  return (
    <section className="p-4 sm:p-8">
      <h2 className="text-black text-2xl sm:text-3xl font-bold">Галлерея</h2>
      <GallerySwiper />
    </section>
  );
};

export { Gallery };
