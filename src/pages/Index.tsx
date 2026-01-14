import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import DomainsSection from '@/components/DomainsSection';
import WhyCanonixSection from '@/components/WhyCanonixSection';
import VisionSection from '@/components/VisionSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <DomainsSection />
        <WhyCanonixSection />
        <VisionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
