import { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

interface Props {
  text: string;
  href: string;
  image: string;
  i: number;
}

const SocLink: FC<Props> = ({ text, href, image, i }) => {
  return (
    <li className={i ? 'ml-6 sm:ml-8' : ''} aria-label={text}>
      <Link href={href}>
        <Image className="w-12 sm:w-16" src={image} alt={text} />
      </Link>
    </li>
  );
};

export { SocLink };
