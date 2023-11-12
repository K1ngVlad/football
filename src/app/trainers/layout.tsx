import { GoMain } from '@/components';
import { TrainersList } from '../blocks';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Тренера | Футбол',
};

export default function TrainersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="pt-16 sm:pt-20">
        <GoMain />
        {children}
        <TrainersList />
      </main>
    </>
  );
}
