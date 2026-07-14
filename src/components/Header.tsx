import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { ArrowRight, Check } from "lucide-react";
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <nav className="flex items-center justify-between px-6 md:px-12 py-4">
        <Link to="/" className="flex flex-col items-center">
          <img src={logo} alt="Wafy Immo" className="h-10 md:h-12" />
          <span className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase -mt-1">promoteur</span>
        </Link>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="lg" asChild className="hidden sm:inline-flex">
            <a href="#pricing">Tarifs</a>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-sm font-semibold hover:border-primary/40 transition-colors"
                aria-label="Choisir le pays"
              >
                <span className="text-lg leading-none">{country.flag}</span>
                <span className="hidden sm:inline">{country.name}</span>
              </button>
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
            <Button variant="hero" size="lg" onClick={onOpenForm}>
              <span className="hidden sm:inline">Demander une démo</span>
              <span className="sm:hidden">Démo</span>
              <ArrowRight className="ml-1" />
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
