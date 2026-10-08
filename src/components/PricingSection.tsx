import { motion } from "framer-motion";
import { Check, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCurrency, formatPrice as formatCurrencyPrice } from "@/contexts/CurrencyContext";

type PlanName = "PILOTE" | "BUSINESS" | "PREMIUM" | "GROUPE";

const plans: {
  name: PlanName;
  price: number;
  conv: string;
  features: { text: string; included: boolean }[];
  highlight: boolean;
  dark?: boolean;
  tag?: string;
  priceSuffix?: string;
  priceNote?: string;
  cta?: string;
  footnote?: string;
}[] = [
  {
    name: "PILOTE",
    price: 2800,
    conv: "Jusqu'à 2 000 leads",
    features: [
      { text: "Qualification IA", included: true },
      { text: "Scoring automatique", included: true },
      { text: "Fiche lead enrichie CRM", included: true },
      { text: "Reporting détaillé", included: true },
      { text: "Relances WhatsApp auto", included: false },
      { text: "Prise de RDV auto", included: false },
    ],
    highlight: false,
  },
  {
    name: "BUSINESS",
    price: 5500,
    conv: "Jusqu'à 2 000 leads",
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
  },
  {
    name: "PREMIUM",
    price: 8500,
    conv: "Jusqu'à 4 000 leads",
    features: [
      { text: "Jusqu'à 5 projets immobiliers", included: true },
      { text: "Qualification IA", included: true },
      { text: "Scoring automatique", included: true },
      { text: "Fiche lead enrichie CRM", included: true },
      { text: "Relances WhatsApp auto", included: true },
      { text: "10 000 relances / mois", included: true },
      { text: "Prise de RDV auto", included: true },
      { text: "Reporting détaillé + recommandations", included: true },
    ],
    highlight: false,
  },
  {
    name: "GROUPE",
    price: 8500,
    conv: "Leads & projets illimités",
    tag: "Abonnement annuel",
    priceSuffix: "HT / mois",
    priceNote: "Engagement 12 mois · 2 mois offerts",
    cta: "Nous contacter",
    footnote: "*Dans le cadre d'un usage raisonnable",
    dark: true,
    features: [
      { text: "Projets immobiliers illimités (multi-programmes)", included: true },
      { text: "Leads traités illimités*", included: true },
      { text: "Qualification IA", included: true },
      { text: "Scoring automatique", included: true },
      { text: "Fiche lead enrichie CRM", included: true },
      { text: "10 000 relances WhatsApp / mois", included: true },
      { text: "Prise de RDV auto", included: true },
      { text: "Reporting consolidé groupe + recommandations", included: true },
      { text: "Interlocuteur dédié", included: true },
    ],
    highlight: false,
  },
];

const PricingSection = () => {
  const { currency } = useCurrency();
  const formatPrice = (mad: number) => formatCurrencyPrice(mad, currency);

  return (
    <section className="section-padding" id="pricing">
      <div className="container mx-auto max-w-7xl">
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
            Packs prépayés HT - sans engagement
          </p>
          <p className="text-sm text-muted-foreground/80 max-w-2xl mx-auto mt-3 leading-relaxed">
             Lancez votre projet avec le <strong>pack Pilote</strong> : pour tester l'IA conversationnelle, qualifier vos leads et mesurer les résultats en conditions réelles. Sans engagement, vous gardez le contrôle. Une solution idéale pour les promoteurs qui veulent évaluer le potentiel de l'IA avant de s'engager sur le long terme.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-6 sm:p-7 lg:p-6 border transition-all duration-300 overflow-hidden ${
                plan.highlight
                  ? "border-primary border-2 shadow-xl bg-card"
                  : "border-border bg-card hover:border-primary/30"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {plan.tag && (
                <span className="self-start mb-3 px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  {plan.tag}
                </span>
              )}
              <h3 className="font-bold text-lg mb-3">{plan.name}</h3>
              <div
                className={`self-start inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm lg:text-base font-extrabold mb-5 shadow-sm ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground"
                    : plan.dark
                    ? "bg-foreground text-background"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                <Zap className="w-4 h-4 shrink-0" />
                {plan.conv}
              </div>

              <div className="mb-5">
                <div className="flex items-baseline gap-1 flex-wrap">
                  <span
                    className={`text-3xl sm:text-4xl font-extrabold ${
                      plan.highlight ? "text-primary" : ""
                    }`}
                  >
                    {formatPrice(plan.price)}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {plan.priceSuffix ?? "HT"}
                  </span>
                </div>
                {plan.priceNote && (
                  <p className="text-xs text-muted-foreground mt-1">{plan.priceNote}</p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-start gap-2 text-sm">
                    {f.included ? (
                      <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                    )}
                    <span className={f.included ? "" : "text-muted-foreground line-through"}>
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Button
                  variant={plan.highlight ? "hero" : plan.dark ? "default" : "outline"}
                  className={`w-full ${plan.dark ? "bg-foreground text-background hover:bg-foreground/90" : ""}`}
                  asChild
                >
                  <a href="#cta">{plan.cta ?? "Commencer"}</a>
                </Button>
                {plan.footnote && (
                  <p className="text-[11px] text-muted-foreground text-center mt-2">{plan.footnote}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Setup & add-ons */}
        <div className="grid md:grid-cols-2 gap-4 mt-10">
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold">
                Frais de setup
              </span>
              <span className="text-sm font-semibold">{formatPrice(10000)} HT</span>
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
            <div className="text-2xl font-extrabold text-primary">Devis</div>
            <p className="text-xs text-muted-foreground mt-2">
              Intégration sur-mesure à votre CRM (HubSpot, Salesforce, Navision, Cegid…).
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          Tous les prix sont indiqués <span className="font-semibold">hors taxes</span>.<br />
          {currency === "EUR" && <>Montants en EUR indicatifs, convertis depuis les prix en MAD.<br /></>}
          L'offre Pilote est sans engagement (1 mois). Les packs Business et Premium sont prépayés et renouvelés quand vous le souhaitez.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
