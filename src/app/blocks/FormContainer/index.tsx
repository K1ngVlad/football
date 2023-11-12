import { FC } from 'react';
import { Form } from './Form';

const FormContainer: FC = () => {
  return (
    <section className="p-4 bg-slate-800 rounded-t-lg">
      <h2 className="text-2xl font-bold w-full text-center">
        Свяжитесь с нами
      </h2>
      <p className="text-center mt-3">
        Оставьте ваши контактные данные и мы свяжемся с вами!
      </p>
      <Form />
    </section>
  );
};

export { FormContainer };
