import { GoMain } from '@/components';
import { NewsList } from '../blocks';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Новости | Футбол',
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="pt-16">
        <GoMain />
        {children}
        <NewsList />
      </main>
    </>
  );
}
