import coverAgentIA from "@/assets/blog-agent-ia-commercial.jpg";
import imgFunnel from "@/assets/blog-qualification-funnel.jpg";
import imgHybride from "@/assets/blog-equipe-hybride.jpg";
import coverForcesVente from "@/assets/blog-ia-forces-vente.jpg";
import imgManagerCoach from "@/assets/blog-manager-coach.jpg";
import coverImmo2026 from "@/assets/blog-immobilier-2026.jpg";
import coverHumain from "@/assets/blog-ia-humain-immobilier.jpg";
import coverCopilote from "@/assets/blog-ia-copilote-agence.jpg";
import coverLeadsCallCenter from "@/assets/blog-leads-call-center.jpg";
import portraitClemenceGrille from "@/assets/clemence-grille.png";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  readingMinutes: number;
  cover: string;
  coverAlt: string;
  keywords: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ia-promoteur-copilote-agence",
    title: "L'IA en promoteur : Votre nouveau copilote pour booster votre agence",
    description:
      "Estimation, marketing, gestion locative, relation client 24/7 : comment l'IA devient le copilote indispensable des agences de promoteur.",
    date: "2025-04-21",
    readingMinutes: 5,
    cover: coverCopilote,
    coverAlt:
      "Agente de promoteur utilisant un dashboard IA dans une agence moderne avec overlays de données",
    keywords: [
      "IA agence de promoteur",
      "copilote IA",
      "estimation de promoteur IA",
      "home staging virtuel",
      "chatbot promoteur",
      "gestion locative IA",
    ],
  },
  {
    slug: "ia-promoteur-humain-pilier-confiance",
    title: "IA et promoteur : Pourquoi l'humain reste le pilier de la confiance",
    description:
      "Adoption de l'IA chez les Français, rôle du notaire, complémentarité humain-machine : analyse d'une enquête Immonot sur l'IA dans le promoteur.",
    date: "2025-04-16",
    readingMinutes: 5,
    cover: coverHumain,
    coverAlt:
      "Professionnelle du promoteur serrant la main de sa cliente dans un bureau chaleureux",
    keywords: [
      "IA promoteur",
      "notaire IA",
      "confiance promoteur",
      "Immonot",
      "transformation digitale promoteur",
      "expertise humaine",
    ],
  },
  {
    slug: "promoteur-2026-agent-sans-ia",
    title: "promoteur 2026 : Pourquoi l'agent « sans IA » perdra la course au mandat",
    description:
      "Réactivité, data et contenu : pourquoi l'IA est devenue indispensable aux agents de promoteur en 2026 — analyse inspirée de la chronique de Clémence Grille (Orisha Real Estate).",
    date: "2025-04-11",
    readingMinutes: 6,
    cover: coverImmo2026,
    coverAlt:
      "Agent de promoteur présentant un dashboard IA sur tablette à un couple devant une maison moderne",
    keywords: [
      "IA promoteur",
      "agent de promoteur 2026",
      "transformation digitale promoteur",
      "Clémence Grille",
      "Orisha Real Estate",
      "prise de mandat",
      "CRM promoteur",
    ],
  },
  {
    slug: "ia-forces-de-vente-etude-de-cas",
    title:
      "Étude de cas : Comment l'IA transforme concrètement la performance des forces de vente",
    description:
      "Comment l'IA augmente — sans remplacer — les commerciaux, avec un retour d'expérience réel chez Forvis Mazars et un plan d'action pour vos équipes.",
    date: "2025-04-06",
    readingMinutes: 7,
    cover: coverForcesVente,
    coverAlt:
      "Équipe commerciale collaborant autour d'un dashboard analytique dans un open-space moderne",
    keywords: [
      "IA forces de vente",
      "performance commerciale",
      "étude de cas IA",
      "Forvis Mazars",
      "automatisation commerciale",
      "productivity commerciale",
      "transformation digitale",
    ],
  },
  {
    slug: "agent-ia-commercial-qualification-leads",
    title: "Wafy Immo Commercial : Transformez vos prospects en opportunités qualifiées",
    description:
      "Comment Wafy Immo commercial qualifie vos leads, structure les données et booste votre taux de conversion sans déshumaniser la vente.",
    date: "2025-04-01",
    readingMinutes: 6,
    cover: coverAgentIA,
    coverAlt: "Commerciale avec casque audio en appel avec un prospect devant son CRM",
    keywords: [
      "Wafy Immo commercial",
      "qualification de leads",
      "scoring de leads",
      "automatisation commerciale",
      "IA B2B",
      "CRM",
      "tunnel de vente",
    ],
  },
];

export const blogAssets = {
  funnel: imgFunnel,
  hybride: imgHybride,
  managerCoach: imgManagerCoach,
  clemenceGrille: portraitClemenceGrille,
};