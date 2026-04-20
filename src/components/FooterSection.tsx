import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const FooterSection = () => (
  <footer className="py-10 px-6 bg-card border-t border-border">
    <div className="container mx-auto max-w-6xl flex flex-col items-center gap-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
        <img src={logo} alt="WAFY PRO" className="h-8" />
        <Link
          to="/mentions-legales"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Mentions légales
        </Link>
      </div>
      <p className="text-xs md:text-sm text-muted-foreground text-center leading-relaxed max-w-4xl">
        © 2025 WaFy Immo — Une marque de BIRDEV | SARL AU — RC 486725 — ICE 002673969000034 — 67 Rue Aziz Bellal, 2ème Étage, Bureau N°3, Maarif, Casablanca, Maroc
      </p>
    </div>
  </footer>
);

export default FooterSection;
