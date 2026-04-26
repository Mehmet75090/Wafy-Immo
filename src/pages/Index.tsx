import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ComparisonSection from "@/components/ComparisonSection";
import DashboardSection from "@/components/DashboardSection";
import SimulatorSection from "@/components/SimulatorSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import ContactFormDialog from "@/components/ContactFormDialog";

const Index = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <main>
      <Header onOpenForm={() => setFormOpen(true)} />
      <HeroSection onOpenForm={() => setFormOpen(true)} />
      <ProblemSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ComparisonSection />
      <DashboardSection />
      <SimulatorSection />
      <PricingSection />
      <FAQSection />
      <CTASection onOpenForm={() => setFormOpen(true)} />
      <FooterSection />
      <ContactFormDialog open={formOpen} onOpenChange={setFormOpen} />
    </main>
  );
};

export default Index;
