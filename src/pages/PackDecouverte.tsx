import { useState } from "react";
import SimpleHeader from "@/components/pack-decouverte/SimpleHeader";
import HeroSection from "@/components/pack-decouverte/HeroSection";
import PainPointsSection from "@/components/pack-decouverte/PainPointsSection";
import HowItWorksSection from "@/components/pack-decouverte/HowItWorksSection";
import AIDemoSection from "@/components/pack-decouverte/AIDemoSection";
import ROICalculatorSection from "@/components/pack-decouverte/ROICalculatorSection";
import PricingSection from "@/components/pack-decouverte/PricingSection";
import TestimonialsSection from "@/components/pack-decouverte/TestimonialsSection";
import FAQSection from "@/components/pack-decouverte/FAQSection";
import CTASection from "@/components/pack-decouverte/CTASection";
import FooterSection from "@/components/pack-decouverte/FooterSection";
import ContactFormDialog from "@/components/ContactFormDialog";

const PackDecouverte = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <SimpleHeader onOpenForm={() => setFormOpen(true)} />
      <HeroSection onOpenForm={() => setFormOpen(true)} />
      <PainPointsSection />
      <HowItWorksSection />
      <AIDemoSection />
      <ROICalculatorSection />
      <PricingSection onOpenForm={() => setFormOpen(true)} />
      <TestimonialsSection />
      <FAQSection />
      <CTASection onOpenForm={() => setFormOpen(true)} />
      <FooterSection />
      <ContactFormDialog open={formOpen} onOpenChange={setFormOpen} />
    </main>
  );
};

export default PackDecouverte;
