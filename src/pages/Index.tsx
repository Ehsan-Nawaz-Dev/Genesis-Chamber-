import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import OverviewSection from '@/components/OverviewSection';
import TechnologySection from '@/components/TechnologySection';
import ComparisonSection from '@/components/ComparisonSection';
import SpecificationsSection from '@/components/SpecificationsSection';
import ResearchSection from '@/components/ResearchSection';
import FAQSection from '@/components/FAQSection';
import LegalSection from '@/components/LegalSection';
import ContactSection from '@/components/ContactSection';
import PurchaseSection from '@/components/PurchaseSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <OverviewSection />
      <TechnologySection />
      <ComparisonSection />
      <SpecificationsSection />
      <ResearchSection />
      <FAQSection />
      <LegalSection />
      <ContactSection />
      <PurchaseSection />
      <Footer />
    </main>
  );
};

export default Index;
