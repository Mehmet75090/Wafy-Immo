// ============= Grille tarifaire Promoteur (source de vérité) =============
// Les packs sont prépayés, sans abonnement ni engagement annuel. Le module
// Wafy Event (campagnes JPO WhatsApp) est inclus dans les packs Business et
// Premium : c'est une règle business, elle est testée dans
// src/test/promoteurPricing.test.ts.

export type PlanName = "PILOTE" | "BUSINESS" | "PREMIUM";

export type PlanFeature = { text: string; included: boolean };

export type Plan = {
  name: PlanName;
  price: number;
  conv: string;
  features: PlanFeature[];
  highlight: boolean;
  dark?: boolean;
  tag?: string;
  priceSuffix?: string;
  priceNote?: string;
  cta?: string;
  footnote?: string;
};

export const WAFY_EVENT_FEATURE = "Wafy Event : campagnes JPO";

export const plans: Plan[] = [
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
      { text: WAFY_EVENT_FEATURE, included: true },
      { text: "Reporting détaillé", included: true },
    ],
    highlight: true,
  },
  {
    name: "PREMIUM",
    price: 8500,
    conv: "Jusqu'à 5 000 leads",
    features: [
      { text: "Jusqu'à 5 projets immobiliers*", included: true },
      { text: "Qualification IA", included: true },
      { text: "Scoring automatique", included: true },
      { text: "Fiche lead enrichie CRM", included: true },
      { text: "Relances WhatsApp auto", included: true },
      { text: "10 000 relances / mois", included: true },
      { text: "Prise de RDV auto", included: true },
      { text: WAFY_EVENT_FEATURE, included: true },
      { text: "Reporting détaillé + recommandations", included: true },
    ],
    highlight: false,
  },
];
