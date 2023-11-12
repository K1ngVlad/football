import {
  AboutUs,
  FormContainer,
  Gallery,
  Hero,
  LastNews,
  LocationMap,
  QuestAnsw,
  Trainers,
  TrainingExample,
} from './blocks';

export default function Home() {
  return (
    <main className="pt-16 sm:pt-20">
      <Hero />
      <AboutUs />
      <LastNews />
      <Trainers />
      <TrainingExample />
      <LocationMap />
      <QuestAnsw />
      <Gallery />
      <FormContainer />
    </main>
  );
}
