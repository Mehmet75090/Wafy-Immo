import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ContactFormDialog from "@/components/ContactFormDialog";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import {
  AgentIABody,
  ForcesVenteBody,
  Immo2026Body,
  HumainPilierBody,
  CopiloteAgenceBody,
  LeadsCallCenterBody,
} from "@/components/blog/articleBodies";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    if (!post) return;
    document.title = `${post.title} | Wafy Immo`;
    const url = `${window.location.origin}/blog/${post.slug}`;

    const setMeta = (selector: string, attr: string, name: string, content: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta('meta[name="description"]', "name", "description", post.description);
    setMeta('meta[name="keywords"]', "name", "keywords", post.keywords.join(", "));
    setMeta('meta[property="og:title"]', "property", "og:title", post.title);
    setMeta('meta[property="og:description"]', "property", "og:description", post.description);
    setMeta('meta[property="og:type"]', "property", "og:type", "article");
    setMeta('meta[property="og:url"]', "property", "og:url", url);
    setMeta('meta[property="og:image"]', "property", "og:image", `${window.location.origin}${post.cover}`);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    // JSON-LD
    const ldId = "blog-jsonld";
    document.getElementById(ldId)?.remove();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = ldId;
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      image: `${window.location.origin}${post.cover}`,
      datePublished: post.date,
      dateModified: post.date,
      author: { "@type": "Organization", name: "Wafy Immo" },
      publisher: {
        "@type": "Organization",
        name: "Wafy Immo",
        logo: { "@type": "ImageObject", url: `${window.location.origin}/favicon.png` },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      keywords: post.keywords.join(", "),
    });
    document.head.appendChild(script);

    window.scrollTo(0, 0);
    return () => {
      document.getElementById(ldId)?.remove();
    };
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <>
      <Header onOpenForm={() => setFormOpen(true)} />
      <main className="pt-28 pb-20 px-6 bg-background">
        <article className="container mx-auto max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Tous les articles
          </Link>

          <header className="mb-8">
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.date).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readingMinutes} min de lecture
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground">{post.description}</p>
          </header>

          <figure className="rounded-2xl overflow-hidden border border-border mb-10">
            <img
              src={post.cover}
              alt={post.coverAlt}
              width={1280}
              height={720}
              className="w-full h-auto"
            />
          </figure>

          <div className="prose prose-lg max-w-none text-foreground/90 space-y-6 leading-relaxed">
            {post.slug === "agent-ia-commercial-qualification-leads" && <AgentIABody />}
            {post.slug === "ia-forces-de-vente-etude-de-cas" && <ForcesVenteBody />}
            {post.slug === "promoteur-2026-agent-sans-ia" && <Immo2026Body />}
            {post.slug === "ia-promoteur-humain-pilier-confiance" && <HumainPilierBody />}
            {post.slug === "ia-promoteur-copilote-agence" && <CopiloteAgenceBody />}
          </div>

          <aside className="mt-16 rounded-2xl border border-primary/30 bg-accent/40 p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">
              Prêt à tester Wafy Immo sur vos leads ?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              On vous montre, en 20 minutes, comment Wafy Immo qualifie vos prospects 24/7 et
              les transmet directement à vos équipes.
            </p>
            <Button variant="cta" size="lg" onClick={() => setFormOpen(true)}>
              Demander une démo <ArrowRight className="ml-1" />
            </Button>
          </aside>
        </article>
      </main>
      <FooterSection />
      <ContactFormDialog open={formOpen} onOpenChange={setFormOpen} />
    </>
  );
};

export default BlogPost;
