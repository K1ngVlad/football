import { FC } from 'react';

interface Props {
  text: string;
}

const ListItem: FC<Props> = ({ text }) => {
  return (
    <li className="flex mt-3 sm:mt-6">
      <div className="w-3 h-3 min-w-12px sm:w-4 sm:h-4 bg-green-600 rounded-full relative top-1"></div>
      <span className="ml-4 break-words sm:ml-6 sm:text-lg">{text}</span>
    </li>
  );
};

export { ListItem };
