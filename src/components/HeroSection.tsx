import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import { MessageCircle, Zap, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/55 to-transparent" />
      </div>

      {/* Spacer for fixed nav */}
      <div className="h-[72px]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/30 px-5 py-2 text-sm font-semibold text-primary-foreground mb-6">
              <MessageCircle className="w-4 h-4 text-primary" /> Agent IA sur WhatsApp · 24/7
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-primary-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            L'agent IA{" "}
            <span className="text-gradient">WhatsApp</span> qui{" "}
            qualifie vos leads immobiliers 24h/24
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted mb-8 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            WAFY qualifie, score et transmet vos leads automatiquement via WhatsApp. 
            Connectez aussi vos outils favoris grâce au protocole MCP.
            Zéro lead perdu, zéro temps perdu.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <Button variant="hero" size="lg" className="px-8 py-6" asChild>
              <a href="#cta">
                <MessageCircle className="mr-2" /> Tester gratuitement
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" className="px-8 py-6" asChild>
              <a href="#simulator">Simuler mon économie</a>
            </Button>
          </motion.div>

          <motion.div
            className="mt-10 flex gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {[
              { val: "70%", label: "temps commercial économisé" },
              { val: "100%", label: "leads traités" },
              { val: "<5min", label: "temps de réponse" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-primary">{s.val}</div>
                <div className="text-xs text-white/70 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
