'use client';

import Image from 'next/image';
import InputMask from 'react-input-mask';
import { FC, FormEvent, useState } from 'react';

import checkIcon from '@/assets/svg/check.svg';

const Form: FC = () => {
  const [state, setState] = useState({
    name: '',
    phone: '',
    email: '',
    check: false,
  });

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="mt-4 flex flex-col items-center"
    >
      <label className="w-full flex flex-col">
        <span className="text-lg">* Имя</span>
        <input
          className="mt-2 p-3 rounded text-black"
          placeholder="Ваше имя"
          name="name"
          type="text"
          required
          value={state.name}
          onChange={(e) =>
            setState((state) => ({ ...state, name: e.target.value }))
          }
        />
      </label>
      <label className="w-full flex flex-col mt-3">
        <span className="text-lg">* Почта</span>
        <input
          className="mt-2 p-3 rounded text-black"
          placeholder="example@example.com"
          name="email"
          type="email"
          required
          value={state.email}
          onChange={(e) =>
            setState((state) => ({ ...state, email: e.target.value }))
          }
        />
      </label>
      <label className="w-full flex flex-col mt-3">
        <span className="text-lg">Телефон</span>
        <InputMask
          mask="+7 (999) 999-99-99"
          className="mt-2 p-3 rounded text-black"
          placeholder="+7 (999) 999-99-99"
          name="phone"
          type="tel"
          value={state.phone}
          onChange={(e) =>
            setState((state) => ({ ...state, phone: e.target.value }))
          }
        />
      </label>
      <label className="w-full flex mt-3 items-center">
        <div className="w-6 h-6 relative">
          <input
            className="w-full h-full absolute top-0 left-0"
            name="agree"
            type="checkbox"
            required
            checked={state.check}
            onChange={(e) =>
              setState((state) => ({ ...state, check: e.target.checked }))
            }
          />
          <div className="w-full h-full bg-white rounded-sm fakeCheck relative">
            <Image
              src={checkIcon}
              alt="Согласиться на обработку персональных данных"
            />
          </div>
        </div>

        <span className="text-sm block w-60 ml-3">
          * Согласен на обработку персональных данных
        </span>
      </label>
      <span className="self-start text-slate-300 text-sm mt-2">
        * - обязательные поля
      </span>
      <button className="mt-4 h-12 w-full bg-sky-600 text-xl flex items-center justify-center rounded-lg">
        Отправить
      </button>
    </form>
  );
};

export { Form };
