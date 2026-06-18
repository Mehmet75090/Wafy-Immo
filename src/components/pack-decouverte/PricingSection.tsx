import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingSectionProps {
  onOpenForm?: () => void;
}

const features = [
  "Qualification IA illimitée (2 000 conv./mois)",
  "Scoring automatique des leads",
  "Fiche lead enrichie",
  "Dashboard & KPIs en temps réel",
  "Support technique dédié",
  "Mise en place en 48h",
];

const PricingSection = ({ onOpenForm }: PricingSectionProps) => (
  <section className="section-padding bg-muted/30">
    <div className="container mx-auto max-w-4xl">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Pack <span className="text-gradient">Découverte</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Testez Wafy Immo sans risque. Un mois pour découvrir le potentiel de l'IA conversationnelle.
        </p>
      </motion.div>

      <motion.div
        className="relative rounded-2xl p-8 sm:p-10 border-2 border-primary shadow-xl bg-card max-w-xl mx-auto overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* Badge */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-wafy-gradient text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Sans engagement
          </div>
        </div>

        <div className="text-center mb-8 pt-4">
          <h3 className="font-bold text-2xl mb-2">Pilote</h3>
          <p className="text-sm text-muted-foreground mb-4">1 mois · Sans engagement · Annulable à tout moment</p>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-5xl sm:text-6xl font-extrabold text-primary">2 800</span>
            <span className="text-muted-foreground text-lg">MAD / mois HT</span>
          </div>
          <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2">
            <span className="text-sm font-semibold text-primary">Setup inclus : 10 000 MAD HT</span>
          </div>
        </div>

        <ul className="space-y-3 mb-8">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-3 text-sm">
              <Check className="w-5 h-5 text-secondary shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <Button variant="cta" size="lg" className="w-full py-7 text-lg" onClick={onOpenForm}>
          Activer mon offre découverte
        </Button>

        <p className="text-center text-xs text-muted-foreground mt-4">
          Paiement sécurisé · Annulation à tout moment · Support inclus
        </p>
      </motion.div>

      {/* Trust badges */}
      <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-secondary" />
          <span>48h de mise en place</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-secondary" />
          <span>Support technique 7j/7</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-secondary" />
          <span>Sans engagement</span>
        </div>
      </div>
    </div>
  </section>
);

export default PricingSection;
