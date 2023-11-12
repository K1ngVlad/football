import { GoMain } from '@/components';
import { AboutUsFull, List } from './blocks';
import { Gallery, QuestAnsw, TrainingExample } from '../blocks';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'О нас | Футбол',
};

export default function About() {
  return (
    <main className="pt-16 sm:pt-20">
      <GoMain />
      <AboutUsFull />
      <List />
      <TrainingExample />
      <QuestAnsw />
      <Gallery />
    </main>
  );
}
