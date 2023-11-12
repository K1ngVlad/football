'use client';

import { FC, useState } from 'react';
import { Accordion } from '@/components';
import { items } from './items';

const Accordions: FC = () => {
  const [active, setActive] = useState<string>('');

  return (
    <div className="mt-4 sm:mt-6">
      {items.map(({ header, content }) => (
        <Accordion
          key={header}
          header={header}
          content={content}
          active={active}
          setActive={setActive}
        />
      ))}
    </div>
  );
};

export { Accordions };
