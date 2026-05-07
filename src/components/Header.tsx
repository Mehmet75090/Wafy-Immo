import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { ArrowRight } from "lucide-react";

interface HeaderProps {
  onOpenForm?: () => void;
}

const Header = ({ onOpenForm }: HeaderProps) => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
    <nav className="flex items-center justify-between px-6 md:px-12 py-4">
      <Link to="/" className="flex flex-col items-center">
        <img src={logo} alt="Wafy Immo" className="h-10 md:h-12" />
        <span className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase -mt-1">Immobilier</span>
      </Link>
      <div className="flex items-center gap-6">
        <Link
          to="/blog"
          className="hidden md:inline text-sm font-semibold text-foreground hover:text-primary transition-colors"
        >
          Blog
        </Link>
        {onOpenForm && (
          <Button variant="hero" size="lg" className="hidden md:inline-flex" onClick={onOpenForm}>
            Demander une démo <ArrowRight className="ml-1" />
          </Button>
        )}
      </div>
    </nav>
  </header>
);

export default Header;
