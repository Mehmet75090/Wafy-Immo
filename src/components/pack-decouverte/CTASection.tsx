import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface CTASectionProps {
  onOpenForm?: () => void;
}

const CTASection = ({ onOpenForm }: CTASectionProps) => (
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
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-primary-foreground leading-tight">
          Prêt à transformer votre <span className="text-gradient">acquisition</span> ?
        </h2>

        <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
          Rejoignez les promoteurs marocains qui ont déjà fait le choix de l'IA conversationnelle.
          Votre premier mois sans engagement commence maintenant.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <Button variant="cta" size="lg" className="px-10 py-7 text-lg" onClick={onOpenForm}>
            <ArrowRight className="mr-2" /> Activer mon offre découverte
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/60">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-secondary" />
            <span>1 mois sans engagement</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-secondary" />
            <span>Mise en place en 48h</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-secondary" />
            <span>Support technique 7j/7</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
