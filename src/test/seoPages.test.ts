import { describe, expect, it } from "vitest";
import { SEO_PAGES } from "@/data/seoPages";

describe("pages SEO", () => {
  it("ont des meta titles uniques", () => {
    const t = SEO_PAGES.map((p) => p.metaTitle);
    expect(new Set(t).size).toBe(t.length);
  });
  it("ont des meta descriptions uniques", () => {
    const d = SEO_PAGES.map((p) => p.metaDescription);
    expect(new Set(d).size).toBe(d.length);
  });
  it("ne pointent que vers des pages existantes", () => {
    const slugs = new Set(SEO_PAGES.map((p) => p.slug));
    SEO_PAGES.forEach((p) => p.related.forEach((r) => expect(slugs.has(r)).toBe(true)));
  });
});
