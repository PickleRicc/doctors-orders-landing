import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Pricing from '@/components/sections/Pricing';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';
import Nav from '@/components/sections/nav';
import Howitworks from '@/components/sections/Howitworks';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-grey-50">
      <Nav />
      <Hero />
      <Features />
      <Howitworks />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
