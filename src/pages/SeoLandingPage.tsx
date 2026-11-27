import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ContactFormDialog from "@/components/ContactFormDialog";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SEO_FEATURES, SEO_PAGES, type SeoPage } from "@/data/seoPages";
import { AGENT_PRICING } from "@/data/agentPricing";
import { SITE_URL, usePageSeo } from "@/hooks/usePageSeo";
import agentImage from "@/assets/hero-agent-immobilier.jpg";

const AGENT_ACCOUNT_URL = "https://admin.wafypro.ma/wafy-agent-immo";

const SeoLandingPage = ({ page }: { page: SeoPage }) => {
  const [formOpen, setFormOpen] = useState(false);
  const path = `/${page.slug}`;

  usePageSeo({
    title: page.metaTitle,
    description: page.metaDescription,
    path,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Wafy Immo",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: `${SITE_URL}${path}`,
        description: page.metaDescription,
        offers: { "@type": "Offer", price: String(AGENT_PRICING.trial.priceMad), priceCurrency: "MAD", description: `Essai gratuit de ${AGENT_PRICING.trial.durationDays} jours` },
        publisher: { "@type": "Organization", name: "Wafy Immo", url: `${SITE_URL}/` },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: page.breadcrumb, item: `${SITE_URL}${path}` },
        ],
      },
    ],
  });

  useEffect(() => window.scrollTo(0, 0), [page.slug]);

  const related = page.related.map((s) => SEO_PAGES.find((p) => p.slug === s)).filter(Boolean) as SeoPage[];

  const ctas = (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button variant="hero" size="lg" asChild>
        <a href={AGENT_ACCOUNT_URL}>Essayer gratuitement pendant 30 jours</a>
      </Button>
      <Button variant="outline" size="lg" onClick={() => setFormOpen(true)}>
        Demander une démo
      </Button>
    </div>
  );

  return (
    <main>
      <Header />
      <section className="bg-card pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="container mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
          <div>
            <nav aria-label="Fil d’Ariane" className="mb-5 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary">Accueil</Link>
              <span className="mx-2">/</span>
              <span>{page.breadcrumb}</span>
            </nav>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{page.eyebrow}</p>
            <h1 className="text-3xl font-extrabold leading-tight text-balance md:text-5xl">{page.h1}</h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">{page.intro}</p>
            <div className="mt-8">{ctas}</div>
          </div>
          <img
            src={agentImage}
            alt={`Professionnel de l’immobilier utilisant Wafy Immo — ${page.breadcrumb}`}
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
            width={800}
            height={600}
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-extrabold md:text-3xl">{page.problemsTitle}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {page.problems.map((p) => (
              <article key={p.title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="mt-3 text-muted-foreground">{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-extrabold md:text-3xl">{page.solutionsTitle}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {page.solutions.map((s) => (
              <article key={s.title} className="rounded-2xl border border-border bg-background p-6">
                <CheckCircle2 className="h-6 w-6 text-secondary" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                <p className="mt-3 text-muted-foreground">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-extrabold md:text-3xl">{page.examplesTitle}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {page.examples.map((e) => (
              <article key={e.title} className="rounded-2xl border-l-4 border-primary bg-muted/40 p-6">
                <h3 className="text-lg font-bold">{e.title}</h3>
                <p className="mt-3 text-muted-foreground">{e.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-extrabold md:text-3xl">Les fonctionnalités de Wafy Immo</h2>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {page.features.map((key) => (
              <div key={key}>
                <h3 className="font-bold">{SEO_FEATURES[key].title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{SEO_FEATURES[key].text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-border bg-background p-6 md:p-8">
            <h3 className="text-xl font-bold">Commencez gratuitement</h3>
            <p className="mt-2 text-muted-foreground">
              Essai gratuit de {AGENT_PRICING.trial.durationDays} jours ou {AGENT_PRICING.trial.prospectLimit} prospects, jusqu’à {AGENT_PRICING.trial.propertyLimit} biens. Ensuite, abonnement à partir de {AGENT_PRICING.subscription.startingPriceMad} DH HT/mois.
            </p>
            <div className="mt-6">{ctas}</div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-extrabold md:text-3xl">Questions fréquentes</h2>
          <Accordion type="single" collapsible className="mt-6">
            {page.faq.map((f, i) => (
              <AccordionItem key={f.q} value={`q${i}`}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent forceMount className="text-muted-foreground data-[state=closed]:hidden">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-extrabold md:text-3xl">À découvrir aussi</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <li key={r.slug}>
                <Link to={`/${r.slug}`} className="group flex h-full items-center justify-between gap-3 rounded-xl border border-border bg-background p-4 font-semibold hover:border-primary">
                  {r.breadcrumb}
                  <ArrowRight className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FooterSection onOpenForm={() => setFormOpen(true)} />
      <ContactFormDialog open={formOpen} onOpenChange={setFormOpen} />
    </main>
  );
};

export default SeoLandingPage;
