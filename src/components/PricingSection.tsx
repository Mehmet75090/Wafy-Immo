import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const DEFAULT_ANNUAL_DISCOUNT = 0.55;

type Currency = "MAD" | "EUR" | "USD";

const CURRENCIES: Record<Currency, { rate: number; symbol: string; locale: string; position: "before" | "after"; flag: string; label: string }> = {
  MAD: { rate: 1, symbol: "MAD", locale: "fr-FR", position: "after", flag: "🇲🇦", label: "Maroc" },
  EUR: { rate: 0.092, symbol: "€", locale: "fr-FR", position: "after", flag: "🇪🇺", label: "Euro" },
  USD: { rate: 0.10, symbol: "$", locale: "en-US", position: "before", flag: "🇺🇸", label: "Dollar" },
};

const formatPrice = (madAmount: number, currency: Currency) => {
  const { rate, symbol, locale, position } = CURRENCIES[currency];
  const converted = madAmount * rate;
  // Round MAD to nearest unit, EUR/USD to nearest 10 for cleaner display
  const rounded = currency === "MAD" ? Math.round(converted) : Math.round(converted / 10) * 10;
  const formatted = rounded.toLocaleString(locale);
  return position === "before" ? `${symbol}${formatted}` : `${formatted} ${symbol}`;
};

// Annuel : 2 mois offerts => équivalent mensuel = prix × 10 / 12
const ANNUAL_FACTOR = 10 / 12;

type PlanName = "PILOTE" | "BUSINESS" | "PREMIUM";

const plans: {
  name: PlanName;
  price: number;
  annualDiscount: number;
  conv: string;
  estimation: { leads: string };
  features: { text: string; included: boolean }[];
  highlight: boolean;
  badge?: string;
}[] = [
  {
    name: "PILOTE",
    price: 2800,
    annualDiscount: 0,
    conv: "Jusqu'à 2 000 conversations / mois",
    estimation: {
      leads: "Estimation : 200 leads qualifiés",
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
    price: 5500,
    annualDiscount: 1 - ANNUAL_FACTOR,
    conv: "Jusqu'à 2 000 conversations / mois",
    estimation: {
      leads: "Estimation : 350 leads qualifiés",
    },
    features: [
      { text: "Qualification IA", included: true },
      { text: "Scoring automatique", included: true },
      { text: "Fiche lead enrichie CRM", included: true },
      { text: "Relances WhatsApp auto", included: true },
      { text: "5 000 relances / mois", included: true },
      { text: "Prise de RDV auto", included: true },
      { text: "Reporting détaillé", included: true },
    ],
    highlight: true,
    badge: "2 mois offerts",
  },
  {
    name: "PREMIUM",
    price: 7500,
    annualDiscount: 1 - ANNUAL_FACTOR,
    conv: "Jusqu'à 5 000 conversations / mois",
    estimation: {
      leads: "Estimation : 800 leads qualifiés",
    },
    features: [
      { text: "Qualification IA", included: true },
      { text: "Scoring automatique", included: true },
      { text: "Fiche lead enrichie CRM", included: true },
      { text: "Relances WhatsApp auto", included: true },
      { text: "12 500 relances / mois", included: true },
      { text: "Prise de RDV auto", included: true },
      { text: "Reporting détaillé + recommandations", included: true },
    ],
    highlight: false,
    badge: "2 mois offerts",
  },
];



const PricingSection = () => {
  const currency: Currency = "MAD";

  return (
    <section className="section-padding" id="pricing">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Grille <span className="text-gradient">tarifaire</span>
          </h2>
          <p className="text-muted-foreground">
            Tarifs mensuels HT — sans engagement
          </p>
        </motion.div>

        {/* Annual offer banner */}
        <motion.div
          className="relative mx-auto mb-12 max-w-3xl overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 p-5 sm:p-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4">
            <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold uppercase tracking-wider text-primary">
                Offre engagement annuel
              </div>
              <p className="text-base sm:text-lg font-semibold text-foreground leading-snug">
                2 mois offerts sur les plans Business et Premium
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => {
            const annualPrice = Math.round(plan.price * ANNUAL_FACTOR);
            return (
              <motion.div
                key={plan.name}
                className={`relative rounded-2xl p-6 sm:p-8 border transition-all duration-300 overflow-hidden ${
                  plan.highlight
                    ? "border-primary border-2 shadow-xl bg-card md:scale-[1.03]"
                    : "border-border bg-card hover:border-primary/30"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Annual offer ribbon on every card */}
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-primary-foreground text-[11px] font-bold px-3 py-1 rounded-bl-xl">
                    2 mois offerts en annuel
                  </div>
                </div>

                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-wafy-gradient text-primary-foreground text-xs font-bold whitespace-nowrap">
                    Recommandé
                  </div>
                )}

                <h3 className="font-bold text-lg mb-1">{plan.name}</h3>
                <p className="text-xs text-muted-foreground mb-4">{plan.conv}</p>

                <div className="mb-5">
                  <div className="flex items-baseline gap-1 flex-wrap">
                    <span
                      className={`text-3xl sm:text-4xl font-extrabold ${
                        plan.highlight ? "text-primary" : ""
                      }`}
                    >
                      {formatPrice(plan.price, currency)}
                    </span>
                    <span className="text-muted-foreground text-sm">/mois HT</span>
                  </div>
                  {/* Annual equivalent */}
                  <div className="mt-2 inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1.5">
                    <span className="text-sm font-semibold text-primary">
                      Soit {formatPrice(annualPrice, currency)}/mois
                    </span>
                    <span className="text-xs text-primary/80">en annuel</span>
                  </div>
                </div>

                {/* Estimation block */}
                <div className="rounded-lg border border-accent-foreground/20 bg-accent p-3 mb-6 text-[13px] space-y-1">
                  <p className="font-semibold text-accent-foreground">{plan.estimation.leads}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-center gap-2 text-sm">
                      {f.included ? (
                        <Check className="w-4 h-4 text-secondary" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground" />
                      )}
                      <span className={f.included ? "" : "text-muted-foreground line-through"}>
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
            );
          })}
        </div>

        {/* Setup & add-ons */}
        <div className="grid md:grid-cols-2 gap-4 mt-10">
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold">
                Setup inclus
              </span>
              <span className="text-sm font-semibold">10 000 MAD HT</span>
            </div>
            <p className="text-xs text-muted-foreground mb-3">Inclus dans tous les packs (one-shot)</p>
            <ul className="space-y-1.5 text-sm">
              <li className="flex gap-2"><Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" /> Conception du funnel de qualification sur-mesure</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" /> Paramétrage de l'agent : prompting, itérations, RAG</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" /> Dashboard & KPIs en temps réel</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 rounded-full bg-secondary/15 text-secondary text-xs font-bold">
                Add-on
              </span>
              <span className="text-sm font-semibold">Connecteur CRM client</span>
            </div>
            <p className="text-xs text-muted-foreground mb-3">À partir du plan Business — one-shot</p>
            <div className="text-2xl font-extrabold text-primary">5 000 MAD HT</div>
            <p className="text-xs text-muted-foreground mt-2">
              Intégration sur-mesure à votre CRM (HubSpot, Salesforce, Navision, Cegid…).
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          Tous les prix sont indiqués <span className="font-semibold">hors taxes</span>.<br />
          * Estimations basées sur des taux de conversion moyens constatés. Les résultats varient selon le programme, le ciblage et le marché.
          {" "}En cas d'offre engagement annuel, 2 mois sont offerts.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
