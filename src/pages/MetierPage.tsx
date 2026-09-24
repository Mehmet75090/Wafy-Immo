// ============= Full file contents =============
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BellRing,
  CalendarCheck,
  CheckCircle2,
  Clock,
  FileCheck,
  Home,
  MessageCircle,
  ScanSearch,
} from "lucide-react";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import PricingSection from "@/components/PricingSection";
import ContactFormDialog from "@/components/ContactFormDialog";
import { Button } from "@/components/ui/button";
import agentImage from "@/assets/hero-agent-immobilier.jpg";
import insurerImage from "@/assets/hero-assureur.jpg";

const agentFeatures = [
  {
    icon: Clock,
    title: "Agent IA 24/7",
    text: "Répond instantanément à chaque prospect, en texte ou en vocal, sur WhatsApp, Messenger et Instagram, même quand l'agence est fermée.",
  },
  {
    icon: ScanSearch,
    title: "Qualification & scoring",
    text: "Collecte les critères du projet et classe les leads par priorité : vos conseillers traitent les meilleures opportunités en premier.",
  },
  {
    icon: Home,
    title: "Matching lead → bien",
    text: "Recherche dans votre catalogue les biens qui correspondent au besoin et les présente au prospect.",
  },
  {
    icon: CalendarCheck,
    title: "Agenda & visites",
    text: "Propose des créneaux, planifie les visites et se synchronise avec Google Calendar.",
  },
  {
    icon: BellRing,
    title: "Relances automatiques",
    text: "Rappels de visite, gestion des no-show, suivi après visite et relance des prospects sans réponse.",
  },
  {
    icon: FileCheck,
    title: "Dossier locataire",
    text: "Collecte les pièces justificatives et relance automatiquement celles qui manquent.",
  },
];

const agentSteps = [
  {
    title: "Wafy répond à chaque prospect",
    text: "Sur WhatsApp, Messenger et Instagram, par écrit comme en vocal, en français, darija, arabe ou anglais — même quand l'agence est fermée.",
  },
  {
    title: "Il qualifie et score chaque lead",
    text: "Budget, secteur, critères du bien : Wafy collecte les critères du projet et classe les leads par priorité.",
  },
  {
    title: "Il matche le lead avec le bon bien",
    text: "Wafy recherche dans votre catalogue les biens qui correspondent au besoin et les présente au prospect.",
  },
  {
    title: "Il planifie la visite et vous briefe",
    text: "Créneaux proposés, visites planifiées, synchronisation Google Calendar — et le résumé de chaque échange dans votre dashboard.",
  },
];

const agentProblems = [
  {
    title: "Des prospects sans réponse",
    text: "Entre les visites, les appels et les dossiers, chaque demande qui attend est un client parti chez une autre agence.",
  },
  {
    title: "Des leads qui refroidissent",
    text: "Sans relance après visite ni suivi des no-show, vos meilleures opportunités s'éteignent en silence.",
  },
  {
    title: "Le mauvais bien au mauvais prospect",
    text: "Difficile de retrouver dans votre catalogue le bien qui correspond vraiment à la demande du prospect.",
  },
  {
    title: "Des dossiers qui s'enlisent",
    text: "Pour une location, les pièces justificatives manquantes bloquent la signature pendant des jours.",
  },
];

const wafyTools = [
  {
    name: "Wafy Sejel",
    tagline: "Un vocal ou des photos suffisent.",
    text: "Envoyez un texte, un vocal, des photos ou des documents : Wafy crée la fiche du bien et rédige les annonces, déclinées pour WhatsApp, Instagram, Facebook et les portails immobiliers.",
    outcome: "Un bien en commercialisation en quelques minutes.",
  },
  {
    name: "Wafy Estim",
    tagline: "Le bon prix, preuves à l'appui.",
    text: "Wafy compare le prix souhaité par le vendeur aux références de son quartier : référentiel officiel, marché actuel et transactions du réseau Wafy. Fourchette, verdict et avis de valeur prêt à envoyer.",
    outcome: "Des mandats signés au bon prix, qui se vendent.",
  },
  {
    name: "Wafy Campagne",
    tagline: "Réveillez vos leads dormants.",
    text: "Campagnes WhatsApp ciblées vers les leads dormants, les anciens clients ou les contacts compatibles avec un nouveau bien. Chaque message est personnalisé et chaque réponse traitée jusqu'à la visite.",
    outcome: "Votre base de contacts redevient une source de visites.",
  },
  {
    name: "Wafy Connect",
    tagline: "La marketplace des agences partenaires.",
    text: "Vous n'avez pas le bien recherché ? Wafy le cherche chez les agences du réseau. Vous ne pouvez pas traiter un lead ? Transmettez-le à une agence partenaire.",
    outcome: "Aucun client perdu faute de stock.",
  },
  {
    name: "Wafy Visual",
    tagline: "Montrez le potentiel de chaque bien.",
    text: "Home staging et ameublement virtuel, désencombrement, changement de décoration ou de matériaux, amélioration des photos.",
    outcome: "Des annonces plus attractives, sans travaux ni photographe.",
  },
  {
    name: "Wafy Interactive",
    tagline: "La visite 360° générée par l'IA.",
    text: "À partir de simples photos, Wafy génère une visite virtuelle à 360° que le prospect parcourt à distance, avant de se déplacer.",
    outcome: "Moins de visites inutiles, des prospects mieux qualifiés.",
  },
];

const content = {
  agent: {
    name: "Agent immobilier",
    image: agentImage,
    headline: "Wafy Immo, le copilote IA des agents immobiliers",
    description:
      "Wafy Immo répond à vos prospects sur WhatsApp, Messenger et Instagram, en français, darija, arabe ou anglais, par écrit comme en vocal. Il les qualifie, leur propose les bons biens et planifie les visites. Et vos conseillers pilotent tout depuis WhatsApp.",
    nextTitle: "",
    nextCopy: "",
    points: [],
  },
  insurer: {
    name: "Assureur",
    image: insurerImage,
    headline: "Wafy Immo pour les assureurs",
    description:
      "Une demande de devis ne devrait pas rester sans suite. Wafy Immo échange avec vos prospects sur WhatsApp, recueille leurs besoins et transmet les demandes à votre équipe.",
    nextTitle: "Ne laissez plus les demandes en attente",
    nextCopy:
      "Vos conseillers peuvent se concentrer sur l'accompagnement et la souscription pendant que Wafy Immo assure un premier échange avec chaque prospect.",
    points: [
      "Accueillir les demandes à toute heure",
      "Identifier le besoin de couverture et les coordonnées",
      "Orienter les prospects vers un conseiller",
    ],
  },
} as const;

interface MetierPageProps {
  metier: keyof typeof content;
}

const MetierPage = ({ metier }: MetierPageProps) => {
  const [formOpen, setFormOpen] = useState(false);
  const page = content[metier];
  const isAgent = metier === "agent";

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

      {isAgent ? (
        <>
          <section className="section-padding bg-card" id="problem">
            <div className="container mx-auto max-w-6xl">
              <motion.div className="text-center max-w-3xl mx-auto mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                  Combien de ventes s'arrêtent faute de <span className="text-gradient">suivi</span> ?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Votre valeur, c'est le mandat et la signature. Wafy Immo s'occupe de tout le reste : la réponse aux prospects, la qualification, le bon bien et la visite planifiée.
                </p>
              </motion.div>
              <div className="grid sm:grid-cols-2 gap-6">
                {agentProblems.map((problem, i) => (
                  <motion.div
                    key={problem.title}
                    className="rounded-xl border border-border bg-background p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <h3 className="text-lg font-bold mb-2">{problem.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{problem.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="section-padding" id="how-it-works">
            <div className="container mx-auto max-w-6xl">
              <motion.div className="text-center max-w-3xl mx-auto mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                  Comment ça marche ?
                </h2>
                <p className="text-muted-foreground">
                  De la première demande du prospect à la visite planifiée, Wafy Immo pilote chaque étape pendant que vos conseillers signent.
                </p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {agentSteps.map((step, i) => (
                  <motion.div
                    key={step.title}
                    className="rounded-xl border border-border bg-card p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4">{i + 1}</span>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="section-padding bg-card" id="features">
            <div className="container mx-auto max-w-6xl">
              <motion.div className="text-center max-w-3xl mx-auto mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                  Les fonctions <span className="text-gradient">essentielles</span>
                </h2>
                <p className="text-muted-foreground">
                  Toutes les fonctions dont votre agence a besoin pour répondre, qualifier, matcher et vendre — sans changer d'outil.
                </p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {agentFeatures.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    className="rounded-xl border border-border bg-background p-6 flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <span className="inline-flex items-center justify-center h-11 w-11 rounded-lg bg-primary/10 text-primary shrink-0">
                      <feature.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold mb-1.5">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-12 rounded-2xl border border-border bg-background p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">Wafy Assist · 100 % WhatsApp</p>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Fini les tableaux de bord. Demandez à Wafy.</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Aucune application à installer, aucun logiciel à apprendre. L'agent pilote toute son activité depuis WhatsApp : il pose sa question à Wafy Assist, par écrit ou en vocal, et reçoit la réponse sur WhatsApp.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                  <div className="max-w-[80%] ml-auto rounded-2xl rounded-br-sm bg-primary text-primary-foreground px-4 py-2.5 text-sm font-medium">
                    Mes visites de demain ?
                    <span className="block text-[10px] opacity-70 text-right">18:42</span>
                  </div>
                  <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-muted px-4 py-2.5 text-sm">
                    3 visites : 10h Maarif, 12h30 Gauthier, 16h Racine.
                    <span className="block text-[10px] text-muted-foreground">18:42</span>
                  </div>
                  <div className="max-w-[80%] ml-auto rounded-2xl rounded-br-sm bg-primary text-primary-foreground px-4 py-2.5 text-sm font-medium">
                    Quels leads relancer ?
                    <span className="block text-[10px] opacity-70 text-right">18:43</span>
                  </div>
                  <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-muted px-4 py-2.5 text-sm">
                    4 leads chauds sans réponse depuis 48 h. Je les relance ?
                    <span className="block text-[10px] text-muted-foreground">18:43</span>
                  </div>
                </div>
              </motion.div>

              <motion.div className="mt-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
                  Et pour aller plus loin : <span className="text-gradient">les outils Wafy</span>
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {wafyTools.map((tool, i) => (
                    <motion.div
                      key={tool.name}
                      className="rounded-xl border border-border bg-background p-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <h4 className="text-lg font-bold mb-1">{tool.name}</h4>
                      <p className="text-sm font-semibold text-primary mb-2">{tool.tagline}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">{tool.text}</p>
                      <p className="text-sm font-medium flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />{tool.outcome}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <PricingSection />
        </>
      ) : (
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
      )}

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
