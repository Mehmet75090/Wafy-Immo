import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const BlogPreviewSection = () => {
  const latest = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section id="blog" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <header className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Blog
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Insights <span className="text-gradient">IA & promoteur</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Décryptages, méthodes et retours d'expérience pour transformer vos prospects en
            opportunités qualifiées.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          {latest.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl hover:border-primary/40 transition-all flex flex-col"
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
              <div className="p-6 flex flex-col flex-1">
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
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {post.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Lire l'article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/40 text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Voir tous les articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
