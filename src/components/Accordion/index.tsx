'use client';

import { FC, ReactNode, Dispatch, SetStateAction } from 'react';

interface Props {
  header: string;
  content: ReactNode;
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
}

const Accordion: FC<Props> = ({ header, content, active, setActive }) => {
  const onClickHeandler = () => {
    if (header === active) {
      setActive('');
    } else {
      setActive(header);
    }
  };

  return (
    <article className="mt-2 sm:mt-4">
      <button
        onClick={onClickHeandler}
        aria-label={`Открыть ответ на вопрос: ${header}`}
        className="flex w-full justify-between bg-slate-100 h-16 sm:h-24 items-center p-3 sm:p-6 rounded-t-lg"
      >
        <h3 className="text-lg sm:text-xl text-black ">{header}</h3>
        <span
          className={`${
            header === active ? 'rotate-90' : ''
          } duration-300 text-lg sm:text-xl font-bold text-black`}
          aria-label={`Открыть ответ на вопрос: ${header}`}
        >
          X
        </span>
      </button>
      <div
        className={`${
          header === active
            ? 'h-40 sm:h-60 opacity-100'
            : 'h-0 sm:h-0 opacity-0'
        } overflow-hidden duration-300 ease-in-out sm:text-lg text-black flex items-center justify-center w-full bg-slate-100  border-t-2 border-t-slate-200`}
      >
        <p className="text-center">{content}</p>
      </div>
    </article>
  );
};

export { Accordion };
