import Newsletter from './Newsletter';
import Landing from './Landing';
import Features from './Features';
import Trial from './Trial';

export default function HomePage() {
  return (
    <div>
      <Landing />
      <Features />
      <Trial />
      <Newsletter />
    </div>
  );
}
