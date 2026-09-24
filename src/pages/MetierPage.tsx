import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ContactFormDialog from "@/components/ContactFormDialog";
import { Button } from "@/components/ui/button";
import agentImage from "@/assets/hero-agent-immobilier.jpg";
import insurerImage from "@/assets/hero-assureur.jpg";

const content = {
  agent: {
    name: "Agent immobilier",
    image: agentImage,
    headline: "Wafy Immo pour les agents immobiliers",
    description: "Vos demandes arrivent à toute heure. Wafy Immo répond sur WhatsApp, recueille les critères de recherche et prépare vos échanges avec les acheteurs et locataires.",
    nextTitle: "Chaque demande mérite une réponse rapide",
    nextCopy: "Entre les visites, les appels et les dossiers, difficile de répondre à chaque prospect au bon moment. Wafy Immo maintient le contact et vous aide à prioriser les demandes.",
    points: ["Répondre aux demandes entrantes sur WhatsApp", "Recueillir budget, secteur et critères du bien", "Relancer les prospects et préparer les rendez-vous"],
  },
  insurer: {
    name: "Assureur",
    image: insurerImage,
    headline: "Wafy Immo pour les assureurs",
    description: "Une demande de devis ne devrait pas rester sans suite. Wafy Immo échange avec vos prospects sur WhatsApp, recueille leurs besoins et transmet les demandes à votre équipe.",
    nextTitle: "Ne laissez plus les demandes en attente",
    nextCopy: "Vos conseillers peuvent se concentrer sur l'accompagnement et la souscription pendant que Wafy Immo assure un premier échange avec chaque prospect.",
    points: ["Accueillir les demandes à toute heure", "Identifier le besoin de couverture et les coordonnées", "Orienter les prospects vers un conseiller"],
  },
} as const;

interface MetierPageProps {
  metier: keyof typeof content;
}

const MetierPage = ({ metier }: MetierPageProps) => {
  const [formOpen, setFormOpen] = useState(false);
  const page = content[metier];

  useEffect(() => {
    document.title = `${page.headline} — Wafy Immo`;
    window.scrollTo(0, 0);
    return () => { document.title = "Wafy Immo — Co-pilote IA pour promoteurs"; };
  }, [page]);

  return (
    <main>
      <Header onOpenForm={() => setFormOpen(true)} />
      <section className="relative min-h-[min(78vh,760px)] flex items-center overflow-hidden pt-28 pb-20">
        <img src={page.image} alt={`${page.name} en échange avec un client`} className="absolute inset-0 h-full w-full object-cover" width={1600} height={1008} fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-transparent" />
        <div className="container mx-auto relative z-10 px-6 md:px-12">
          <motion.div className="max-w-2xl" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="font-semibold text-primary-foreground/80 mb-4">{page.name}</p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-primary-foreground mb-6">{page.headline}</h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8">{page.description}</p>
            <Button variant="hero" size="lg" onClick={() => setFormOpen(true)}>
              <MessageCircle className="mr-2" /> Demander une démo <ArrowRight className="ml-1" />
            </Button>
          </motion.div>
        </div>
      </section>
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-10 md:gap-20 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-5">{page.nextTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{page.nextCopy}</p>
          </div>
          <ul className="space-y-6 md:pt-2">
            {page.points.map((point) => (
              <li key={point} className="flex gap-4 text-lg font-medium border-b border-border pb-5">
                <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />{point}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section-padding bg-card border-t border-border text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-5">Parlons de vos besoins</h2>
        <p className="text-muted-foreground text-lg mb-8">Découvrez comment Wafy Immo peut accompagner votre équipe.</p>
        <Button variant="hero" size="lg" onClick={() => setFormOpen(true)}>Demander une démo <ArrowRight className="ml-1" /></Button>
      </section>
      <FooterSection />
      <ContactFormDialog open={formOpen} onOpenChange={setFormOpen} />
    </main>
  );
};

export default MetierPage;