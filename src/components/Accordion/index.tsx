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
    <article className=" mt-2">
      <button
        onClick={onClickHeandler}
        aria-label={`Открыть ответ на вопрос: ${header}`}
        className="flex w-full justify-between bg-slate-100 h-16 items-center p-3 rounded-t-lg"
      >
        <h3 className="text-lg text-black ">{header}</h3>
        <span
          className={`${
            header === active ? 'rotate-90' : ''
          } duration-300 text-lg font-bold text-black`}
          aria-label={`Открыть ответ на вопрос: ${header}`}
        >
          X
        </span>
      </button>
      <div
        className={`${
          header === active ? 'h-40 opacity-100' : 'h-0 opacity-0'
        } overflow-hidden duration-300 ease-in-out text-black flex items-center justify-center w-full bg-slate-100  border-t-2 border-t-slate-200`}
      >
        <p className="text-center">{content}</p>
      </div>
    </article>
  );
};

export { Accordion };
