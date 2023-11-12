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
    <li className={i ? 'ml-6' : ''} aria-label={text}>
      <Link href={href}>
        <Image src={image} alt={text} width={50} height={50} />
      </Link>
    </li>
  );
};

export { SocLink };
