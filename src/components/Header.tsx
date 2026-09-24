import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCurrency, type CurrencyCode } from "@/contexts/CurrencyContext";

interface HeaderProps {
  onOpenForm?: () => void;
}

const Header = ({ onOpenForm }: HeaderProps) => {
  const { currency, setCurrency } = useCurrency();
  const { pathname } = useLocation();
  const profession = pathname === "/agent-immobilier" ? "Agent immobilier" : pathname === "/assureur" ? "Assureur" : "Promoteur immobilier";
  const professions = [
    { label: "Promoteur immobilier", path: "/" },
    { label: "Agent immobilier", path: "/agent-immobilier" },
    { label: "Assureur", path: "/assureur" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto flex items-center justify-between gap-2 px-3 sm:px-6 md:px-8 py-3 sm:py-4">
        <Link to={pathname === "/agent-immobilier" || pathname === "/assureur" ? pathname : "/"} className="flex flex-col items-center shrink-0">
          <img src={logo} alt="Wafy Immo" className="h-8 sm:h-10 md:h-11" />
          <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.18em] text-muted-foreground uppercase -mt-1">{profession}</span>
        </Link>
        <div className="flex items-center gap-4 sm:gap-7 md:gap-9">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="px-1 sm:px-2 font-medium text-foreground/70 hover:text-foreground hover:bg-transparent gap-1" aria-label="Choisir un métier">
                Métiers <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[220px]">
              {professions.map(({ label, path }) => (
                <DropdownMenuItem key={path} asChild className="cursor-pointer">
                  <Link to={path} className="flex items-center justify-between gap-3">
                    {label}{profession === label && <Check className="h-4 w-4 text-primary" />}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {pathname === "/" && (
            <a href="#pricing" className="hidden sm:inline-block text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              Tarifs
            </a>
          )}
          <div className="hidden sm:block h-4 w-px bg-border" aria-hidden="true" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1 px-1 sm:px-2 font-semibold text-foreground/70 hover:text-foreground hover:bg-transparent" aria-label="Choisir la devise">
                <span>{currency}</span>
                <ChevronDown className="hidden sm:block h-3 w-3 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[120px]">
              {(["MAD", "EUR"] as CurrencyCode[]).map((code) => {
                const active = code === currency;
                return (
                  <DropdownMenuItem
                    key={code}
                    onSelect={() => setCurrency(code)}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <span className="flex-1">{code}</span>
                    {active && <Check className="w-4 h-4 text-primary" />}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>

          {onOpenForm && (
            <Button variant="hero" size="lg" className="h-9 w-9 px-0 sm:h-10 sm:w-auto sm:px-6 text-sm font-semibold shadow-md shadow-primary/25" onClick={onOpenForm} aria-label="Demander une démo">
              <span className="hidden sm:inline">Demander une démo</span>
              <ArrowRight className="sm:ml-1" />
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
