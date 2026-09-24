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
import { COUNTRIES, useCountry, CountryCode } from "@/contexts/CountryContext";

interface HeaderProps {
  onOpenForm?: () => void;
}

const Header = ({ onOpenForm }: HeaderProps) => {
  const { country, setCountryCode } = useCountry();
  const { pathname } = useLocation();
  const profession = pathname === "/agent-immobilier" ? "Agent immobilier" : pathname === "/assureur" ? "Assureur" : "Promoteur immobilier";
  const professions = [
    { label: "Promoteur immobilier", path: "/" },
    { label: "Agent immobilier", path: "/agent-immobilier" },
    { label: "Assureur", path: "/assureur" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <nav className="flex items-center justify-between gap-2 px-3 sm:px-6 md:px-12 py-3 sm:py-4">
        <Link to={pathname === "/agent-immobilier" || pathname === "/assureur" ? pathname : "/"} className="flex flex-col items-center shrink-0">
          <img src={logo} alt="Wafy Immo" className="h-8 sm:h-10 md:h-12" />
          <span className="text-[9px] sm:text-[10px] font-semibold text-muted-foreground uppercase -mt-1">{profession}</span>
        </Link>
        <div className="flex items-center gap-1.5 sm:gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="px-2 sm:px-4" aria-label="Choisir un métier">
                Métiers <ChevronDown className="h-4 w-4" />
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
            <Button variant="outline" size="lg" asChild className="hidden sm:inline-flex">
              <a href="#pricing">Tarifs</a>
            </Button>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1 px-2 sm:px-3" aria-label="Choisir le pays">
                <span className="text-lg leading-none">{country.flag}</span>
                <span className="hidden sm:inline">{country.name}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[180px]">
              {(Object.keys(COUNTRIES) as CountryCode[]).map((code) => {
                const c = COUNTRIES[code];
                const active = c.code === country.code;
                return (
                  <DropdownMenuItem
                    key={code}
                    onSelect={() => setCountryCode(code)}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <span className="text-lg leading-none">{c.flag}</span>
                    <span className="flex-1">{c.name}</span>
                    {active && <Check className="w-4 h-4 text-primary" />}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>

          {onOpenForm && (
            <Button variant="hero" size="lg" className="h-9 w-9 px-0 sm:h-11 sm:w-auto sm:px-8" onClick={onOpenForm} aria-label="Demander une démo">
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
