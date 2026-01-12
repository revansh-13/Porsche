import ScrollContainer from '@/components/ScrollContainer';
import Navbar from '@/components/Navbar';
import SpecsGrid from '@/components/SpecsGrid';
import ModelShowcase from '@/components/ModelShowcase';
import CallToAction from '@/components/CallToAction';

export default function Home() {
  return (
    <main>
      <Navbar />
      <ScrollContainer />
      <SpecsGrid />
      <ModelShowcase />
      <CallToAction />
    </main>
  );
}
