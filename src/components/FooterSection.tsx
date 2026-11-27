import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import metaTechProvider from "@/assets/meta-tech-provider.png.asset.json";
import { SEO_PAGES } from "@/data/seoPages";

const AGENT_ACCOUNT_URL = "https://admin.wafypro.ma/wafy-agent-immo";
const hasPage = (slug: string) => SEO_PAGES.some((p) => p.slug === slug);

type FooterLink = { label: string; to?: string; href?: string; action?: "demo" };

const CITIES: [string, string][] = [
  ["Casablanca", "casablanca"], ["Marrakech", "marrakech"], ["Rabat", "rabat"], ["Tanger", "tanger"],
  ["Agadir", "agadir"], ["Fès", "fes"], ["Dar Bouazza", "dar-bouazza"], ["Mohammedia", "mohammedia"],
  ["Meknès", "meknes"], ["Kénitra", "kenitra"],
];

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Nos solutions",
    links: [
      { label: "CRM immobilier", to: "/crm-immobilier-maroc" },
      { label: "Assistant IA immobilier", to: "/assistant-ia-immobilier" },
      { label: "WhatsApp immobilier", to: "/whatsapp-immobilier" },
      { label: "Gestion des visites", to: "/gestion-visites-immobilieres" },
      { label: "Automatisation des relances", to: "/automatisation-relances-immobilieres" },
      { label: "Gestion des biens immobiliers", to: "/crm-immobilier-maroc" },
    ],
  },
  {
    title: "Pour les professionnels",
    links: [
      { label: "Agents immobiliers", to: "/" },
      { label: "Agences immobilières", to: "/crm-agence-immobiliere" },
      { label: "Promoteurs immobiliers", to: "/promoteur-immobilier" },
      { label: "Mandataires indépendants", to: "/" },
    ],
  },
  {
    title: "Wafy Immo au Maroc",
    links: CITIES.map(([name, slug]) => ({
      label: `Agents immobiliers à ${name}`,
      to: hasPage(`crm-immobilier-${slug}`) ? `/crm-immobilier-${slug}` : undefined,
    })),
  },
  {
    title: "Wafy Immo",
    links: [
      { label: "À propos", to: "/crm-immobilier-maroc" },
      { label: "Tarifs", href: "/#pricing" },
      { label: "Demander une démo", action: "demo" },
      { label: "Essai gratuit de 30 jours", href: AGENT_ACCOUNT_URL },
      { label: "Contact", href: "mailto:hello@wafypro.ma" },
      { label: "Blog", to: "/blog" },
      { label: "Mentions légales", to: "/mentions-legales" },
    ],
  },
];

const linkClass = "text-sm text-muted-foreground hover:text-primary transition-colors";

const FooterSection = ({ onOpenForm }: { onOpenForm?: () => void }) => (
  <footer className="border-t border-border bg-card px-6 pt-12 pb-8">
    <div className="container mx-auto max-w-6xl">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="mb-4 text-sm font-bold text-foreground">{col.title}</h2>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  {l.to ? (
                    <Link to={l.to} className={linkClass}>{l.label}</Link>
                  ) : l.href ? (
                    <a href={l.href} className={linkClass}>{l.label}</a>
                  ) : l.action === "demo" ? (
                    onOpenForm ? (
                      <button type="button" onClick={onOpenForm} className={linkClass}>{l.label}</button>
                    ) : (
                      <a href="mailto:hello@wafypro.ma?subject=Demande%20de%20d%C3%A9mo" className={linkClass}>{l.label}</a>
                    )
                  ) : (
                    <span className="text-sm text-muted-foreground/70">{l.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="mt-12 flex flex-col items-center gap-5 border-t border-border pt-8 md:flex-row md:justify-between">
        <img src={logo} alt="Wafy Immo" className="h-8" loading="lazy" />
        <p className="text-center text-xs text-muted-foreground md:text-sm">© 2026 WaFy Immo — Une marque de BIRDEV | SARL AU</p>
        <img src={metaTechProvider.url} alt="Meta Tech Provider" className="h-6" loading="lazy" />
      </div>
    </div>
  </footer>
);

export default FooterSection;
