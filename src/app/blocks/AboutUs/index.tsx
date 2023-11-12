import Link from 'next/link';
import { FC } from 'react';

const AboutUs: FC = () => {
  return (
    <section className="p-4">
      <h2 className="text-black text-2xl font-bold">О нас</h2>
      <p className="text-black mt-4">
        Футбольная секция – это организованное сообщество людей, которые
        ежедневно занимаются тренировками и развивают свои футбольные навыки.
        Она представляет собой прекрасную возможность для всех желающих, как
        юных футбольных талантов, так и взрослых людей, посвятить своё свободное
        время занятиям любимым спортом.
      </p>
      <Link
        className="bg-orange-500 flex w-fit px-4 h-10 items-center justify-center rounded mt-4"
        href="/about"
      >
        Узнать больше
      </Link>
    </section>
  );
};

export { AboutUs };
