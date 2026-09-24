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
  PenLine,
  ScanSearch,
  Target,
} from "lucide-react";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import ContactFormDialog from "@/components/ContactFormDialog";
import { Button } from "@/components/ui/button";
import agentImage from "@/assets/hero-agent-immobilier.jpg";
import wafyAssistPhone from "@/assets/wafy-assist-phone.png.asset.json";
import problemRepondAsset from "@/assets/problem-repond-agent.png.asset.json";
const problemRepondImg = problemRepondAsset.url;
import problemLeadsImg from "@/assets/problem-leads.jpg";
import problemBienAsset from "@/assets/problem-bien-agent.png.asset.json";
const problemBienImg = problemBienAsset.url;
import problemSeulImg from "@/assets/problem-seul.jpg";

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
    text: "Trouve les biens qui correspondent au besoin dans votre catalogue et les présente au prospect. S'il n'y en a pas, Wafy cherche parmi les biens que les agences partenaires ont choisi de partager sur le réseau, et vous met en relation avec l'agence concernée pour collaborer.",
  },
  {
    icon: CalendarCheck,
    title: "Agenda & visites",
    text: "Propose des créneaux, planifie les visites et se synchronise avec votre Google Calendar.",
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
    title: "Connectez Wafy à vos canaux. On s’occupe du reste.",
    text: "Sur WhatsApp, Messenger et Instagram, par écrit comme en vocal, en français, darija, arabe ou anglais — même quand l'agence est fermée.",
  },
  {
    title: "Wafy qualifie et score chaque lead",
    text: "Budget, secteur, critères du bien : Wafy collecte les critères du projet et classe les leads par priorité.",
  },
  {
    title: "Wafy matche le lead avec le bon bien",
    text: "Wafy recherche dans votre catalogue les biens qui correspondent au besoin et les présente au prospect.",
  },
  {
    title: "Wafy planifie la visite et vous briefe",
    text: "Créneaux proposés, visites planifiées, synchronisation Google Calendar — et le résumé de chaque échange dans votre dashboard.",
  },
];

const agentProblems = [
  {
    title: "Le premier qui répond remporte l'affaire",
    text: "Pendant que vous êtes en visite ou au téléphone, les messages s'accumulent. L'acheteur passe à une autre agence, et le propriétaire confie son mandat à celui qui l'a rappelé le premier.",
    image: problemRepondImg,
    alt: "Visite en cours alors que le téléphone sonne sans réponse sur le comptoir",
  },
  {
    title: "Des leads qui s'éteignent sans bruit",
    text: "Pas de relance après une visite, pas de suivi quand un prospect ne vient pas au rendez-vous. Vos meilleures opportunités refroidissent sans que vous le voyiez.",
    image: problemLeadsImg,
    alt: "Smartphone avec de nombreux messages et appels sans réponse",
  },
  {
    title: "Pas le bon bien ? Pas de vente.",
    text: "Le prospect veut un 3 pièces à Maârif et vous n'en avez aucun en portefeuille. Sans réseau d'agents pour partager vos biens, vous perdez le lead, et c'est un confrère qui conclut la vente.",
    image: problemBienImg,
    alt: "Agent montrant un catalogue de biens sur tablette à une cliente dubitative",
  },
  {
    title: "Seul à bord, jamais vraiment en pause",
    text: "Le soir, le week-end ou en vacances, personne ne répond à vos prospects. Wafy devient l'assistant que vous n'avez pas eu à recruter : il répond, qualifie et planifie vos visites, 24h/24.",
    image: problemSeulImg,
    alt: "Bureau d'agence vide le soir, personne pour répondre",
  },
];


const content = {
  agent: {
    name: "Agent immobilier",
    image: agentImage,
    headline: "Wafy Immo, le copilote IA des agents immobiliers",
    description:
      "Wafy Immo répond à vos prospects sur WhatsApp, Messenger et Instagram, en français, darija, arabe ou anglais, par écrit comme en vocal. Il les qualifie, leur propose les bons biens et planifie les visites. Si le bien n'est pas dans votre catalogue, Wafy vous met en relation avec une agence partenaire qui en a un. Et vous pilotez tout depuis WhatsApp.",
    nextTitle: "",
    nextCopy: "",
    points: [],
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
              <motion.div
                className="text-center max-w-4xl mx-auto mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
                  Vous ne pouvez pas tout gérer. Et chaque pause coûte des <span className="text-gradient">ventes</span>.
                </h2>
                <div className="mt-6 w-24 h-1 bg-primary mx-auto rounded-full" />
                <p className="text-muted-foreground max-w-2xl mt-6 mx-auto">
                  Votre valeur, c'est le mandat et la signature. Wafy Immo s'occupe de tout le reste : la réponse aux prospects, la qualification, le bon bien et la visite planifiée.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {agentProblems.map((problem, i) => (
                  <motion.div
                    key={problem.title}
                    className="flex flex-col group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="relative mb-6 rounded-2xl overflow-hidden shadow-sm border border-border/70">
                      <img
                        src={problem.image}
                        alt={problem.alt}
                        loading="lazy"
                        width={912}
                        height={736}
                        className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold leading-snug mb-3 transition-colors group-hover:text-primary">
                      {problem.title}
                    </h3>
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
                    Aucune application à installer, aucun logiciel à apprendre. Vous pilotez toute votre activité depuis WhatsApp : posez votre question à Wafy Assist, par écrit ou en vocal, et recevez la réponse sur WhatsApp.
                  </p>
                </div>
                <img
                  src={wafyAssistPhone.url}
                  alt="Conversation WhatsApp avec Wafy Assist : visites de demain et leads à relancer"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
                  loading="lazy"
                  width={1024}
                  height={1024}
                />
              </motion.div>

              <motion.div
                className="mt-12 rounded-2xl border border-border bg-background p-8 md:p-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">Wafy Sender · Réactivation</p>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Vos anciens contacts valent de l'or. Réveillez-les.</h3>
                <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
                  Importez votre fichier Excel de contacts. Wafy Sender recontacte vos prospects dormants, vos anciens clients et ceux qui cherchaient un bien que vous venez de rentrer.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: Target,
                      title: "Des campagnes ciblées",
                      text: "Leads dormants, anciens clients, contacts qui correspondent à un nouveau bien : chaque message part vers la bonne personne.",
                    },
                    {
                      icon: PenLine,
                       title: "Un message personnalisé",
                      text: "Wafy reprend le projet et les critères de chaque contact. Rien à voir avec un envoi en masse générique.",
                    },
                    {
                      icon: CalendarCheck,
                      title: "Les réponses traitées jusqu'à la visite",
                      text: "Dès qu'un contact répond, l'agent IA prend le relais : il qualifie, propose les biens et planifie la visite.",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      className="rounded-xl border border-border bg-card p-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <span className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary mb-4">
                        <item.icon className="h-5 w-5" />
                      </span>
                      <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
                <p className="mt-8 text-lg font-semibold flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0" />
                  Votre base de contacts redevient une source de visites.
                </p>
              </motion.div>

            </div>
          </section>

          <section id="pricing" className="section-padding bg-background">
            <div className="container mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">Tarifs</p>
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
                Une offre adaptée à votre <span className="text-gradient">activité</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Nos tarifs dépendent de votre volume de leads et de vos besoins. Demandez une démo : nous vous présentons Wafy Immo et vous remettons une offre sur mesure.
              </p>
              <Button variant="hero" size="lg" onClick={() => setFormOpen(true)}>
                Contactez-nous pour une démo <ArrowRight className="ml-1" />
              </Button>
            </div>
          </section>
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

      <BlogPreviewSection />
      <FooterSection />
      <ContactFormDialog open={formOpen} onOpenChange={setFormOpen} />
    </main>
  );
};

export default MetierPage;
