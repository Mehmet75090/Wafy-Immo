import { createContext, useContext, useState, type ReactNode } from "react";

export type CurrencyCode = "MAD" | "EUR";

// Fixed display conversion from MAD; EUR amounts are indicative.
const EUR_PER_MAD = 0.093;

interface CurrencyContextValue {
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
}

const CurrencyContext = createContext<CurrencyContextValue | undefined>(undefined);

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrencyState] = useState<CurrencyCode>(() => {
    if (typeof window === "undefined") return "MAD";
    const saved = window.localStorage.getItem("wafy_currency");
    return saved === "EUR" ? "EUR" : "MAD";
  });

  const setCurrency = (next: CurrencyCode) => {
    setCurrencyState(next);
    window.localStorage.setItem("wafy_currency", next);
  };

  return <CurrencyContext.Provider value={{ currency, setCurrency }}>{children}</CurrencyContext.Provider>;
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) throw new Error("useCurrency must be used within CurrencyProvider");
  return context;
};

export const formatPrice = (madAmount: number, currency: CurrencyCode, fractionDigits = 0) => {
  const amount = currency === "EUR" ? madAmount * EUR_PER_MAD : madAmount;
  return `${amount.toLocaleString("fr-FR", { minimumFractionDigits: fractionDigits, maximumFractionDigits: fractionDigits })} ${currency}`;
};