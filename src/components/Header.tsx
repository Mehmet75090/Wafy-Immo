import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onOpenForm?: () => void;
}

const Header = ({ onOpenForm }: HeaderProps) => {
  const { pathname } = useLocation();
  const isPromoteur = pathname === "/promoteur-immobilier";
  const profession = isPromoteur ? "Promoteur immobilier" : "Agent immobilier";
  const professions = [
    { label: "Agent immobilier", path: "/" },
    { label: "Promoteur immobilier", path: "/promoteur-immobilier" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto flex items-center justify-between gap-2 px-3 sm:px-6 md:px-8 py-3 sm:py-4">
        <Link to="/" className="flex flex-col items-center shrink-0">
          <img src={logo} alt="Wafy Immo" className="h-8 sm:h-10 md:h-11" />
          <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.18em] text-muted-foreground uppercase -mt-1">{profession}</span>
        </Link>
        <div className="flex items-center gap-4 sm:gap-7 md:gap-9">
          {[
            { label: "Votre quotidien", href: "#problem" },
            { label: "Comment ça marche", href: "#how-it-works" },
            { label: "Fonctionnalités", href: "#features" },
            { label: "Tarifs", href: "#pricing" },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="hidden md:inline-block text-sm font-medium text-foreground/70 hover:text-foreground transition-colors whitespace-nowrap"
            >
              {label}
            </a>
          ))}
          <div className="hidden md:block h-4 w-px bg-border" aria-hidden="true" />
          <div className="flex items-center rounded-full border border-border bg-muted/60 p-0.5 sm:p-1" role="group" aria-label="Choisir votre profil">
            {professions.map(({ label, path }) => {
              const active = profession === label;
              const short = label === "Agent immobilier" ? "Agent" : "Promoteur";
              return (
                <Link
                  key={path}
                  to={path}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-full px-2.5 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap",
                    active
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span className="sm:hidden">{short}</span>
                  <span className="hidden sm:inline">{label}</span>
                </Link>
              );
            })}
          </div>
          {onOpenForm ? (
            <Button variant="hero" size="lg" className="h-9 w-9 px-0 sm:h-10 sm:w-auto sm:px-6 text-sm font-semibold shadow-md shadow-primary/25" onClick={onOpenForm} aria-label="Demander une démo">
              <span className="hidden sm:inline">Demander une démo</span>
              <ArrowRight className="sm:ml-1" />
            </Button>
          ) : null}
        </div>
      </nav>
    </header>
  );
};

export default Header;
