import Newsletter from './Newsletter';
import Landing from './Landing';
import Features from './Features';
import Blogs from './Blogs';
import Trial from './Trial';

export default function HomePage() {
  return (
    <div>
      <Landing />
      <Features />
      <Blogs />
      <Trial />
      <Newsletter />
    </div>
  );
}
