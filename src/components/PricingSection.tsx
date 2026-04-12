import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "ESSENTIEL",
    price: "8 000",
    period: "/mois",
    conv: "Jusqu'à 300 conv./mois",
    estimation: {
      leads: "≈ 75 à 105 leads qualifiés",
      rdv: "≈ 30 à 45 RDV potentiels",
    },
    features: [
      { text: "Qualification IA", included: true },
      { text: "Scoring automatique", included: true },
      { text: "Fiche lead enrichie CRM", included: true },
      { text: "Reporting basique", included: true },
      { text: "Relances WhatsApp auto", included: false },
      { text: "Prise de RDV auto", included: false },
    ],
    highlight: false,
  },
  {
    name: "BUSINESS",
    price: "15 000",
    period: "/mois",
    conv: "Jusqu'à 1 500 conv./mois",
    estimation: {
      leads: "≈ 375 à 525 leads qualifiés",
      rdv: "≈ 150 à 225 RDV potentiels",
    },
    features: [
      { text: "Qualification IA", included: true },
      { text: "Scoring automatique", included: true },
      { text: "Fiche lead enrichie CRM", included: true },
      { text: "Relances WhatsApp auto", included: true },
      { text: "Prise de RDV auto", included: true },
      { text: "Reporting détaillé", included: true },
    ],
    highlight: true,
  },
  {
    name: "PREMIUM",
    price: "22 000",
    period: "/mois",
    conv: "Jusqu'à 3 000 conv./mois",
    estimation: {
      leads: "≈ 750 à 1 050 leads qualifiés",
      rdv: "≈ 300 à 450 RDV potentiels",
    },
    features: [
      { text: "Qualification IA", included: true },
      { text: "Scoring automatique", included: true },
      { text: "Fiche lead enrichie CRM", included: true },
      { text: "Relances WhatsApp auto", included: true },
      { text: "Prise de RDV auto", included: true },
      { text: "Reporting détaillé + recommandations", included: true },
    ],
    highlight: false,
  },
];

const PricingSection = () => (
  <section className="section-padding" id="pricing">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Grille <span className="text-gradient">tarifaire</span>
        </h2>
        <p className="text-muted-foreground">Abonnement mensuel</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 items-start">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            className={`relative rounded-2xl p-6 sm:p-8 border transition-all duration-300 ${
              plan.highlight
                ? "border-primary border-2 shadow-xl bg-card md:scale-[1.03]"
                : "border-border bg-card hover:border-primary/30"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            {plan.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-wafy-gradient text-primary-foreground text-xs font-bold">
                Recommandé
              </div>
            )}
            <h3 className="font-bold text-lg mb-1">{plan.name}</h3>
            <p className="text-xs text-muted-foreground mb-4">{plan.conv}</p>
            <div className="mb-4">
              <span className={`text-3xl font-extrabold ${plan.highlight ? "text-primary" : ""}`}>
                {plan.price}
              </span>
              <span className="text-muted-foreground text-sm"> MAD{plan.period}</span>
            </div>

            {/* Estimation block */}
            <div className="rounded-lg border border-accent-foreground/20 bg-accent p-3 mb-6 text-[13px] space-y-1">
              <p className="font-semibold text-accent-foreground">{plan.estimation.leads}</p>
              <p className="text-accent-foreground/80">{plan.estimation.rdv}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f.text} className="flex items-center gap-2 text-sm">
                  {f.included ? (
                    <Check className="w-4 h-4 text-secondary" />
                  ) : (
                    <X className="w-4 h-4 text-muted-foreground/40" />
                  )}
                  <span className={f.included ? "" : "text-muted-foreground/50 line-through"}>
                    {f.text}
                  </span>
                </li>
              ))}
            </ul>
            <Button
              variant={plan.highlight ? "hero" : "outline"}
              className="w-full"
              asChild
            >
              <a href="#cta">Commencer</a>
            </Button>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-xs text-muted-foreground mt-8">
        * Estimations basées sur des taux de conversion moyens constatés. Les résultats varient selon le programme, le ciblage et le marché.
      </p>
    </div>
  </section>
);

export default PricingSection;
