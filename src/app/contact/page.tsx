import { GoMain } from '@/components';
import { FormContainer, LocationMap } from '../blocks';
import { ContactList } from './blocks';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Контакты | Футбол',
};

export default function Contact() {
  return (
    <main className="pt-16 sm:pt-20">
      <GoMain />
      <ContactList />
      <LocationMap />
      <FormContainer />
    </main>
  );
}
