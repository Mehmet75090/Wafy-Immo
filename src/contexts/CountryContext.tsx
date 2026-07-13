import { createContext, useContext, useState, ReactNode } from "react";

export type CountryCode = "MA" | "TN" | "CI" | "SN";

export interface CountryInfo {
  code: CountryCode;
  name: string;
  flag: string;
  currency: string;
  rate: number; // conversion from MAD
  symbolPosition: "before" | "after";
  locale: string;
  roundTo: number;
}

export const COUNTRIES: Record<CountryCode, CountryInfo> = {
  MA: { code: "MA", name: "Maroc", flag: "🇲🇦", currency: "MAD", rate: 1, symbolPosition: "after", locale: "fr-FR", roundTo: 1 },
  TN: { code: "TN", name: "Tunisie", flag: "🇹🇳", currency: "TND", rate: 0.31, symbolPosition: "after", locale: "fr-FR", roundTo: 10 },
  CI: { code: "CI", name: "Côte d'Ivoire", flag: "🇨🇮", currency: "FCFA", rate: 60, symbolPosition: "after", locale: "fr-FR", roundTo: 1000 },
  SN: { code: "SN", name: "Sénégal", flag: "🇸🇳", currency: "FCFA", rate: 60, symbolPosition: "after", locale: "fr-FR", roundTo: 1000 },
};

interface CountryContextValue {
  country: CountryInfo;
  setCountryCode: (code: CountryCode) => void;
}

const CountryContext = createContext<CountryContextValue | undefined>(undefined);

export const CountryProvider = ({ children }: { children: ReactNode }) => {
  const [code, setCode] = useState<CountryCode>(() => {
    if (typeof window === "undefined") return "MA";
    const saved = window.localStorage.getItem("wafy_country") as CountryCode | null;
    return saved && COUNTRIES[saved] ? saved : "MA";
  });

  const setCountryCode = (c: CountryCode) => {
    setCode(c);
    if (typeof window !== "undefined") window.localStorage.setItem("wafy_country", c);
  };

  return (
    <CountryContext.Provider value={{ country: COUNTRIES[code], setCountryCode }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = () => {
  const ctx = useContext(CountryContext);
  if (!ctx) throw new Error("useCountry must be used within CountryProvider");
  return ctx;
};

export const formatPriceForCountry = (madAmount: number, country: CountryInfo) => {
  const converted = madAmount * country.rate;
  const rounded = Math.round(converted / country.roundTo) * country.roundTo;
  const formatted = rounded.toLocaleString(country.locale);
  return country.symbolPosition === "before"
    ? `${country.currency} ${formatted}`
    : `${formatted} ${country.currency}`;
};
