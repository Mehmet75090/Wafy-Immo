import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ContactFormDialog from "@/components/ContactFormDialog";
import { Button } from "@/components/ui/button";
import { blogPosts, blogAssets } from "@/data/blogPosts";

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
            <p>
              Dans de nombreuses entreprises, le défi n'est plus seulement de générer des
              contacts, mais de savoir les <strong>traiter</strong>. Le véritable enjeu réside
              dans la réactivité : identifier les opportunités sérieuses, structurer
              l'information et éviter que les équipes ne s'épuisent sur des demandes peu
              pertinentes. C'est ici qu'un <strong>agent IA</strong> devient un levier de
              croissance stratégique.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">
              Pourquoi la qualification est le point critique de votre performance
            </h2>
            <p>
              Beaucoup d'organisations investissent massivement dans l'acquisition (référencement,
              publicité, contenu) mais perdent de la valeur lors du traitement des leads. Les
              problèmes sont souvent les mêmes :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Temps de réponse trop long :</strong> un prospect qui attend se
                refroidit instantanément.
              </li>
              <li>
                <strong>Données incomplètes :</strong> des formulaires vagues qui obligent les
                commerciaux à refaire tout le travail de découverte.
              </li>
              <li>
                <strong>Manque de priorisation :</strong> les opportunités « chaudes » sont
                noyées dans la masse des demandes d'information générales.
              </li>
            </ul>
            <p>
              L'objectif d'un agent n'est pas de déshumaniser la vente, mais de{" "}
              <strong>supprimer les frictions</strong>. Un prospect qui obtient une réponse
              rapide et pertinente a statistiquement beaucoup plus de chances de convertir.
            </p>

            <figure className="my-10 rounded-2xl overflow-hidden border border-border">
              <img
                src={blogAssets.funnel}
                alt="Tunnel de qualification de leads avec scoring automatique"
                width={1024}
                height={576}
                loading="lazy"
                className="w-full h-auto"
              />
            </figure>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">
              Ce qu'un agent IA apporte concrètement à votre tunnel de vente
            </h2>
            <p>
              Contrairement à un simple outil d'automatisation rigide, l'agent IA utilise le
              raisonnement pour apporter une valeur ajoutée à chaque étape :
            </p>

            <h3 className="text-xl font-bold mt-8 mb-2">1. Identifier le besoin réel</h3>
            <p>
              Les messages entrants sont souvent imprécis. L'agent analyse le texte, repère les
              signaux d'intention et reformule le besoin. Ce travail de synthèse permet au
              commercial de reprendre le dossier avec une vision claire, sans repartir de zéro.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-2">
              2. Un scoring basé sur votre réalité métier
            </h3>
            <p>
              Chaque entreprise a sa propre définition d'un « bon » lead (budget, urgence,
              secteur géographique). Un agent sur mesure intègre votre propre grille de lecture.
              Il ne se contente pas de noter, il applique votre logique commerciale pour
              déterminer si un projet est mûr ou s'il nécessite une approche différente.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-2">
              3. L'enrichissement et la structuration des données
            </h3>
            <p>
              Un lead exploitable est un lead dont les données sont propres. L'agent peut
              classer les informations, harmoniser les formulations et préparer des résumés
              directement utilisables par vos outils de gestion (CRM). Il réduit ainsi
              drastiquement la saisie manuelle.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">
              Les cas d'usage au meilleur retour sur investissement (ROI)
            </h2>
            <p>
              Pour maximiser l'impact, il est conseillé de concentrer l'IA sur les étapes les
              plus chronophages :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Préqualification immédiate :</strong> dès qu'un formulaire est soumis,
                l'agent analyse la demande et prépare un brief pour l'équipe.
              </li>
              <li>
                <strong>Répartition intelligente :</strong> l'agent oriente le lead vers le bon
                interlocuteur selon la complexité du projet ou la zone géographique, sans
                intervention humaine.
              </li>
              <li>
                <strong>Assistance à la réponse :</strong> l'IA suggère une structure de
                réponse ou rappelle les arguments clés adaptés au besoin spécifique exprimé par
                le client.
              </li>
              <li>
                <strong>Nurturing des leads « froids » :</strong> pour les prospects qui ne
                sont pas encore prêts, l'agent peut suggérer des contenus adaptés pour
                maintenir le lien jusqu'à ce que le projet mûrisse.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">
              La force du sur-mesure vs les outils standards
            </h2>
            <p>
              Si les solutions prêtes à l'emploi sont utiles pour découvrir l'IA, elles montrent
              vite leurs limites face à des processus commerciaux complexes. Un agent conçu
              spécifiquement pour votre activité permet d'intégrer :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Votre ton de voix et votre culture d'entreprise.</li>
              <li>Vos étapes de vente spécifiques.</li>
              <li>Une connexion fluide avec vos outils existants.</li>
            </ul>
            <p>
              En production réelle, l'efficacité d'un agent se mesure à sa capacité à gérer les
              exceptions et à s'adapter à votre terrain. Les entreprises qui réussissent leur
              transformation sont celles qui voient l'IA non pas comme un gadget, mais comme un{" "}
              <strong>collaborateur</strong> capable de rendre aux humains leurs heures les plus
              précieuses.
            </p>

            <figure className="my-10 rounded-2xl overflow-hidden border border-border">
              <img
                src={blogAssets.hybride}
                alt="Équipe commerciale hybride : humain et agent IA collaborant"
                width={1024}
                height={576}
                loading="lazy"
                className="w-full h-auto"
              />
            </figure>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">
              Conclusion : Vers une équipe commerciale hybride
            </h2>
            <p>
              L'agent IA commercial n'est pas une promesse futuriste, c'est une{" "}
              <strong>brique de compétitivité</strong>. En automatisant le tri et la
              qualification, vous permettez à vos équipes de se concentrer sur l'essentiel : la
              relation humaine et la conclusion des ventes.
            </p>
            <p>
              Vous souhaitez passer de la théorie à la pratique ? La mise en place d'un tel
              système demande une réflexion sur vos processus actuels, mais les bénéfices en
              termes de réactivité et de taux de conversion sont immédiats.
            </p>
          </div>

          <aside className="mt-16 rounded-2xl border border-primary/30 bg-accent/40 p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">
              Prêt à tester un agent IA sur vos leads ?
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
