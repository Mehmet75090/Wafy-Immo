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

const plans = [
  {
    name: "ESSENTIEL",
    price: 5500,
    annualDiscount: 1 - 3600 / 5500,
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
    price: 10500,
    annualDiscount: 1 - 6750 / 10500,
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
    price: 15000,
    annualDiscount: 1 - 9900 / 15000,
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



const PricingSection = () => {
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");
  const [currency, setCurrency] = useState<Currency>("MAD");
  const isAnnual = billing === "annual";
  const currencyList: Currency[] = ["MAD", "EUR", "USD"];

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
            Choisissez votre rythme — jusqu'à{" "}
            <span className="font-bold text-primary">-55%</span> en annuel
          </p>
        </motion.div>

        {/* Billing toggle + Currency selector */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <div className="relative inline-flex items-center p-1 rounded-full bg-muted border border-border">
            <button
              onClick={() => setBilling("monthly")}
              className={`relative z-10 px-5 py-2 text-sm font-semibold rounded-full transition-colors ${
                !isAnnual ? "text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={`relative z-10 px-5 py-2 text-sm font-semibold rounded-full transition-colors ${
                isAnnual ? "text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              Annuel
            </button>
            <div
              className={`absolute top-1 bottom-1 rounded-full bg-wafy-gradient transition-all duration-300 ${
                isAnnual ? "left-[calc(50%+2px)] right-1" : "left-1 right-[calc(50%+2px)]"
              }`}
            />
          </div>

          <div className="inline-flex items-center gap-3 text-sm">
            {currencyList.map((c, idx) => (
              <span key={c} className="flex items-center gap-3">
                <button
                  onClick={() => setCurrency(c)}
                  title={CURRENCIES[c].label}
                  aria-label={`Afficher en ${CURRENCIES[c].label}`}
                  className={`flex items-center gap-1.5 transition-all ${
                    currency === c
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground/60 hover:text-foreground"
                  }`}
                >
                  <span className={`text-base leading-none transition-all ${currency === c ? "" : "grayscale opacity-60"}`}>
                    {CURRENCIES[c].flag}
                  </span>
                  <span className="text-xs tracking-wide">{c}</span>
                </button>
                {idx < currencyList.length - 1 && (
                  <span className="text-muted-foreground/30">·</span>
                )}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => {
            const monthlyPrice = plan.price;
            const planDiscount = plan.annualDiscount;
            const discountPercent = Math.round(planDiscount * 100);
            const discountedMonthly = Math.round(plan.price * (1 - planDiscount));
            const annualSavings = (monthlyPrice - discountedMonthly) * 12;
            const displayPrice = isAnnual ? discountedMonthly : monthlyPrice;

            return (
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
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-wafy-gradient text-primary-foreground text-xs font-bold whitespace-nowrap">
                    Recommandé
                  </div>
                )}

                {isAnnual && (
                  <div className="absolute -top-3 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-extrabold shadow-md">
                    <Sparkles className="w-3 h-3" />
                    -{discountPercent}%
                  </div>
                )}

                <h3 className="font-bold text-lg mb-1">{plan.name}</h3>
                <p className="text-xs text-muted-foreground mb-4">{plan.conv}</p>

                <div className="mb-4 min-h-[80px]">
                  {isAnnual && (
                    <div className="text-sm text-muted-foreground line-through mb-1">
                      {formatPrice(monthlyPrice, currency)}
                    </div>
                  )}
                  <div className="flex items-baseline gap-1 flex-wrap">
                    <span
                      className={`text-3xl sm:text-4xl font-extrabold ${
                        plan.highlight || isAnnual ? "text-primary" : ""
                      }`}
                    >
                      {formatPrice(displayPrice, currency)}
                    </span>
                    <span className="text-muted-foreground text-sm">/mois</span>
                  </div>
                  {isAnnual && (
                    <div className="text-xs font-semibold text-secondary mt-1">
                      Économisez {formatPrice(annualSavings, currency)} / an
                    </div>
                  )}
                  {!isAnnual && (
                    <div className="text-xs text-muted-foreground mt-1">
                      Facturation mensuelle
                    </div>
                  )}
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
            );
          })}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          Tous les prix sont indiqués <span className="font-semibold">hors taxes</span>.<br />
          * Estimations basées sur des taux de conversion moyens constatés. Les résultats varient selon le programme, le ciblage et le marché.
          {isAnnual && " Tarifs annuels affichés en équivalent mensuel, facturés annuellement."}
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
