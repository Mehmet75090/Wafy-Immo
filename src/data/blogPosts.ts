import coverAgentIA from "@/assets/blog-agent-ia-commercial.jpg";
import imgFunnel from "@/assets/blog-qualification-funnel.jpg";
import imgHybride from "@/assets/blog-equipe-hybride.jpg";
import coverForcesVente from "@/assets/blog-ia-forces-vente.jpg";
import imgManagerCoach from "@/assets/blog-manager-coach.jpg";

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
    slug: "ia-forces-de-vente-etude-de-cas",
    title:
      "Étude de cas : Comment l'IA transforme concrètement la performance des forces de vente",
    description:
      "Comment l'IA augmente — sans remplacer — les commerciaux, avec un retour d'expérience réel chez Forvis Mazars et un plan d'action pour vos équipes.",
    date: "2026-05-07",
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
      "productivité commerciale",
      "transformation digitale",
    ],
  },
  {
    slug: "agent-ia-commercial-qualification-leads",
    title: "L'Agent IA Commercial : Transformez vos prospects en opportunités qualifiées",
    description:
      "Comment un agent IA commercial qualifie vos leads, structure les données et booste votre taux de conversion sans déshumaniser la vente.",
    date: "2026-05-07",
    readingMinutes: 6,
    cover: coverAgentIA,
    coverAlt:
      "Commerciale avec casque audio en appel avec un prospect devant son CRM",
    keywords: [
      "agent IA commercial",
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
};
