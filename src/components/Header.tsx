import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { ArrowRight } from "lucide-react";

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
    <nav className="flex items-center justify-between px-6 md:px-12 py-4">
      <a href="#">
        <img src={logo} alt="WAFY PRO" className="h-10 md:h-12" />
      </a>
      <Button variant="hero" size="lg" asChild>
        <a href="#cta">Essai gratuit <ArrowRight className="ml-1" /></a>
      </Button>
    </nav>
  </header>
);

export default Header;
