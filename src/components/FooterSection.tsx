import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const FooterSection = () => (
  <footer className="py-10 px-6 bg-card border-t border-border">
    <div className="container mx-auto max-w-6xl flex flex-col items-center gap-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
        <img src={logo} alt="Wafy Immo" className="h-8" />
        <div className="flex items-center gap-6">
          <Link
            to="/blog"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Blog
          </Link>
          <Link
            to="/mentions-legales"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Mentions légales
          </Link>
        </div>
      </div>
      <p className="text-xs md:text-sm text-muted-foreground text-center leading-relaxed max-w-4xl">
        © 2026 WaFy Immo — Une marque de BIRDEV | SARL AU
      </p>
    </div>
  </footer>
);

export default FooterSection;
