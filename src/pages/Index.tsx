import { useEffect, useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ComparisonSection from "@/components/ComparisonSection";
import VoiceSection from "@/components/VoiceSection";
import DashboardSection from "@/components/DashboardSection";
import JpoCampaignSection from "@/components/JpoCampaignSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import FooterSection from "@/components/FooterSection";
import ContactFormDialog from "@/components/ContactFormDialog";

const Index = () => {
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    document.title = "Wafy Immo — Co-pilote IA pour promoteurs";
    window.scrollTo(0, 0);
    return () => { document.title = "Wafy Immo — Copilote IA des agents immobiliers"; };
  }, []);

  return (
    <main>
      <Header />
      <HeroSection onOpenForm={() => setFormOpen(true)} />
      <ProblemSection />
      <ComparisonSection />
      <FeaturesSection />
      <HowItWorksSection />
      <IntegrationsSection />
      <VoiceSection />
      <DashboardSection />
      <JpoCampaignSection />
      <PricingSection />
      <BlogPreviewSection />
      <FAQSection />
      <CTASection onOpenForm={() => setFormOpen(true)} />
      <FooterSection />
      <ContactFormDialog open={formOpen} onOpenChange={setFormOpen} />
    </main>
  );
};

export default Index;
