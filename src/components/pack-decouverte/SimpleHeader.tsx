import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { ArrowRight } from "lucide-react";

interface SimpleHeaderProps {
  onOpenForm?: () => void;
}

const SimpleHeader = ({ onOpenForm }: SimpleHeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 max-w-7xl mx-auto">
        <a href="#" className="flex flex-col items-center">
          <img src={logo} alt="Wafy Immo" className="h-10 md:h-12" />
        </a>
        {onOpenForm && (
          <Button variant="hero" size="lg" className="hidden md:inline-flex" onClick={onOpenForm}>
            Activer mon offre <ArrowRight className="ml-1" />
          </Button>
        )}
      </nav>
    </header>
  );
};

export default SimpleHeader;
