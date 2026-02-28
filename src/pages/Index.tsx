import { LangProvider } from '@/contexts/LangContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import HowItWorks from '@/components/HowItWorks';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';

import Footer from '@/components/Footer';
import WhatsAppFab from '@/components/WhatsAppFab';

const Index = () => {
  return (
    <LangProvider>
      <Navbar />
      <Hero />
      <StatsBar />
      <HowItWorks />
      <Services />
      <About />
      <Testimonials />
      <FAQ />
      
      <Footer />
      <WhatsAppFab />
    </LangProvider>
  );
};

export default Index;
