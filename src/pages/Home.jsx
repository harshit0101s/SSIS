import Hero from '../components/Hero';
import MarketGraph from '../components/MarketGraph';
import PricingSection from '../components/PricingSection';
import Partners from '../components/Partners';
import Disclaimer from '../components/Disclaimer';

export default function Home() {
  return (
    <>
      <Hero />
      <MarketGraph />
      <PricingSection />
      <Partners />
      <Disclaimer />
    </>
  );
}
