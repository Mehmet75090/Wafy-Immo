import { useEffect } from "react";

const SITE_URL = "https://immo.wafypro.ma";

interface PageSeo {
  title: string;
  description: string;
  path: string;
  jsonLd?: object[];
}

const setMeta = (attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

/** Sets per-page title, description, canonical, Open Graph and JSON-LD; restores defaults on unmount. */
export const usePageSeo = ({ title, description, path, jsonLd = [] }: PageSeo) => {
  useEffect(() => {
    const prev = {
      title: document.title,
      description: document.head.querySelector('meta[name="description"]')?.getAttribute("content") ?? "",
      canonical: document.head.querySelector('link[rel="canonical"]')?.getAttribute("href") ?? `${SITE_URL}/`,
    };
    const url = `${SITE_URL}${path}`;
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
    const scripts = jsonLd.map((data) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.dataset.pageSeo = "true";
      s.text = JSON.stringify(data);
      document.head.appendChild(s);
      return s;
    });
    return () => {
      document.title = prev.title;
      setMeta("name", "description", prev.description);
      setMeta("property", "og:title", prev.title);
      setMeta("property", "og:description", prev.description);
      setMeta("property", "og:url", prev.canonical);
      canonical?.setAttribute("href", prev.canonical);
      scripts.forEach((s) => s.remove());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path]);
};

export { SITE_URL };
