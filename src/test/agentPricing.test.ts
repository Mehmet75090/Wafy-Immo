import { describe, expect, it } from "vitest";
import { AGENT_PRICING } from "@/data/agentPricing";

describe("Tarifs de la page Agent", () => {
  it("propose un essai gratuit à 0 DH", () => {
    expect(AGENT_PRICING.trial.priceMad).toBe(0);
  });

  it("limite l’essai à 30 jours ou 30 prospects et 5 biens", () => {
    expect(AGENT_PRICING.trial).toMatchObject({
      durationDays: 30,
      prospectLimit: 30,
      propertyLimit: 5,
    });
  });

  it("fait démarrer l’abonnement à 250 DH HT avec 100 prospects par mois", () => {
    expect(AGENT_PRICING.subscription.startingPriceMad).toBe(250);
    expect(AGENT_PRICING.subscription.monthlyProspectLimit).toBe(100);
  });

  it("accorde 20 % d’économie avec l’abonnement annuel", () => {
    expect(AGENT_PRICING.subscription.annualDiscountPercent).toBe(20);
  });
});
