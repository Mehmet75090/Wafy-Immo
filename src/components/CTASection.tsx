import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle2 } from "lucide-react";

const benefits = [
  "Aucun abonnement, payez uniquement au résultat",
  "Frais de setup offerts",
  "Mise en place rapide, sans engagement",
];

const CTASection = () => (
  <section className="section-padding bg-wafy-dark-gradient relative overflow-hidden" id="cta">
    <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
    <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl translate-y-1/2 -translate-x-1/2" />

    <div className="container mx-auto max-w-4xl relative z-10">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
          🧪 Offre Pilote
        </span>

        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-primary-foreground leading-tight">
          Pas encore convaincu ?<br />
          <span className="text-gradient">Testez sans risque</span>
        </h2>

        <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
          Démarrez avec l'offre Pilote : zéro abonnement, vous ne payez que lorsque WAFY vous livre un lead qualifié.
        </p>

        <ul className="space-y-3 mb-10 inline-block text-left">
          {benefits.map((b) => (
            <li key={b} className="flex items-center gap-3 text-primary-foreground/80">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="flex justify-center">
          <Button variant="cta" size="lg" className="px-10 py-7" asChild>
            <a href="https://wa.me/212600000000" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2" /> Démarrer le pilote
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
