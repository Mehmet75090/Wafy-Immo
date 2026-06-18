import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

interface HeroSectionProps {
  onOpenForm?: () => void;
}

const HeroSection = ({ onOpenForm }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background (replace with <video> for real video) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 20% 50%, hsl(24,90%,52%,0.25) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(160,45%,40%,0.2) 0%, transparent 50%), radial-gradient(circle at 50% 80%, hsl(24,90%,52%,0.15) 0%, transparent 50%)",
            animation: "meshMove 20s ease-in-out infinite alternate",
          }}
        />
      </div>
      <div className="absolute inset-0 bg-foreground/60" />

      <style>{`
        @keyframes meshMove {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -20px) scale(1.1); }
          100% { transform: translate(-20px, 30px) scale(1); }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-24 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-semibold mb-6"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
          </span>
          Pack Découverte — 1 mois sans engagement
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-primary-foreground max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          Transformez chaque conversation WhatsApp en{" "}
          <span className="text-gradient">opportunité concrète</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-primary-foreground/70 mb-10 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Votre assistant IA conversationnel qui qualifie, note et convertit vos prospects
          promoteur — 24h/24, 7j/7
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          <Button variant="cta" size="lg" className="px-10 py-7 text-lg" onClick={onOpenForm}>
            <ArrowRight className="mr-2" /> Activer mon offre découverte
          </Button>
          <Button
            variant="hero-outline"
            size="lg"
            className="px-8 py-7 text-lg border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            asChild
          >
            <a href="#demo">
              <Play className="mr-2 w-5 h-5" /> Voir la démo
            </a>
          </Button>
        </motion.div>

        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12 text-primary-foreground/60 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary" />
            Qualification IA instantanée
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary" />
            Scoring automatique
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary" />
            Intégration CRM
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
