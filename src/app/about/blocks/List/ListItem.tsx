import { FC } from 'react';

interface Props {
  text: string;
}

const ListItem: FC<Props> = ({ text }) => {
  return (
    <li className="flex mt-3">
      <div
        style={{
          minWidth: '12px',
        }}
        className="w-3 h-3 bg-green-600 rounded-full relative top-1"
      ></div>
      <span className="ml-4 break-words">{text}</span>
    </li>
  );
};

export { ListItem };
