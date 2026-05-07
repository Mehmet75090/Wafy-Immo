import coverAgentIA from "@/assets/blog-agent-ia-commercial.jpg";
import imgFunnel from "@/assets/blog-qualification-funnel.jpg";
import imgHybride from "@/assets/blog-equipe-hybride.jpg";

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
    slug: "agent-ia-commercial-qualification-leads",
    title: "L'Agent IA Commercial : Transformez vos prospects en opportunités qualifiées",
    description:
      "Comment un agent IA commercial qualifie vos leads, structure les données et booste votre taux de conversion sans déshumaniser la vente.",
    date: "2026-05-07",
    readingMinutes: 6,
    cover: coverAgentIA,
    coverAlt:
      "Illustration d'un commercial assisté par un agent IA qualifiant des leads sur un dashboard",
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
};
