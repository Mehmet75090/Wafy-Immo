import { describe, expect, it } from "vitest";
import {
  WAFY_EVENT_FEATURE,
  plans,
} from "@/data/promoteurPricing";

const featureOf = (name: "PILOTE" | "BUSINESS" | "PREMIUM") =>
  plans.find((p) => p.name === name)!.features.find((f) => f.text === WAFY_EVENT_FEATURE);

describe("Grille tarifaire Promoteur", () => {
  it("inclus le module Wafy Event dans le pack Business", () => {
    expect(featureOf("BUSINESS")).toEqual({
      text: WAFY_EVENT_FEATURE,
      included: true,
    });
  });

  it("inclus le module Wafy Event dans le pack Premium", () => {
    expect(featureOf("PREMIUM")).toEqual({
      text: WAFY_EVENT_FEATURE,
      included: true,
    });
  });

  it("affiche les trois packs prépayés aux prix HT connus", () => {
    expect(plans.map((p) => [p.name, p.price])).toEqual([
      ["PILOTE", 2800],
      ["BUSINESS", 5500],
      ["PREMIUM", 8500],
    ]);
  });
});
