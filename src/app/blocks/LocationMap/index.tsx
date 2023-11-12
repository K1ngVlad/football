import Link from 'next/link';
import { FC } from 'react';

import phoneIcon from '@/assets/svg/phone-green.svg';
import Image from 'next/image';

const LocationMap: FC = () => {
  return (
    <section className="p-4 sm:p-6">
      <h2 className="text-black text-2xl sm:text-3xl font-bold">
        Наше местоположение
      </h2>
      <div className="mt-4 sm:mt-6 rounded-xl shadow-lg shadow-slate-400 overflow-hidden h-80 sm:h-120">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2389.718452281047!2d50.1259743771064!3d53.20496538529213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41661e5fdb924179%3A0xe65c6d22a6404b0b!2z0L_RgC3Rgi4g0JvQtdC90LjQvdCwLCAy0JAsINCh0LDQvNCw0YDQsCwg0KHQsNC80LDRgNGB0LrQsNGPINC-0LHQuy4sIDQ0MzEwMA!5e0!3m2!1sru!2sru!4v1698937039583!5m2!1sru!2sru"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <address className="mt-4 sm:mt-6">
        <ul>
          <li className="sm:mt-4">
            <span className="text-slate-700 sm:text-lg">
              Самарская обл., 443100
            </span>
          </li>
          <li className="sm:mt-4">
            <span className="text-slate-700 sm:text-lg ">
              Самара, пр-т. Ленина, 2А
            </span>
          </li>
          <li className="mt-3 sm:mt-6 text-xl sm:text-2xl flex items-center">
            <Image
              alt="Номер телефона"
              src={phoneIcon}
              className="w-8 sm:w-12"
            />
            <Link
              className="text-green-900 text-xl sm:text-2xl font-bold ml-2 sm:ml-4"
              href="tel: +79879837901"
            >
              +7 987 983 79 01
            </Link>
          </li>
        </ul>
      </address>
    </section>
  );
};

export { LocationMap };
