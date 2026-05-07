import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog Wafy Immo — Insights IA, vente & immobilier";
    const desc =
      "Articles, guides et analyses sur l'IA commerciale, la qualification de leads et l'automatisation pour les promoteurs immobiliers.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${window.location.origin}/blog`);
  }, []);

  return (
    <>
      <Header />
      <main className="pt-28 pb-20 px-6 min-h-screen bg-background">
        <div className="container mx-auto max-w-5xl">
          <header className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Blog
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Insights <span className="text-gradient">IA & Vente</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Décryptages, méthodes et retours d'expérience pour transformer vos prospects en
              opportunités qualifiées.
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl hover:border-primary/40 transition-all"
              >
                <div className="aspect-[16/9] overflow-hidden bg-muted">
                  <img
                    src={post.cover}
                    alt={post.coverAlt}
                    width={1280}
                    height={720}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
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
                      {post.readingMinutes} min
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">{post.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Lire l'article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
};

export default Blog;
