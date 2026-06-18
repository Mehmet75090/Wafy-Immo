import { motion } from "framer-motion";
import { Megaphone, MessageCircle, Bot, FileCheck, TrendingUp } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Megaphone,
    title: "Lancez votre campagne WhatsApp",
    desc: "Ciblez vos prospects idéaux avec des messages personnalisés qui les incitent à engager la conversation.",
  },
  {
    num: "02",
    icon: MessageCircle,
    title: "L'IA engage la conversation",
    desc: "Votre agent IA conversationnel répond instantanément, 24h/24, dans la langue de votre prospect.",
  },
  {
    num: "03",
    icon: Bot,
    title: "Qualification intelligente",
    desc: "Budget, projet, délai, localisation : chaque lead est noté et priorisé automatiquement.",
  },
  {
    num: "04",
    icon: FileCheck,
    title: "Transmission au commercial",
    desc: "Votre équipe reçoit des fiches leads qualifiées, scorées et prêtes à l'action — directement dans le CRM.",
  },
  {
    num: "05",
    icon: TrendingUp,
    title: "Conversion optimisée",
    desc: "Suivez vos performances en temps réel et améliorez vos taux de conversion mois après mois.",
  },
];

const HowItWorksSection = () => (
  <section className="section-padding bg-muted/30">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Comment ça <span className="text-gradient">marche</span> ?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          De la première prise de contact à la signature, Wafy Immo travaille pour vous en 5 étapes simples.
        </p>
      </motion.div>

      <div className="relative">
        <div className="hidden md:block absolute left-[39px] top-0 bottom-0 w-0.5 bg-border" />
        <div className="space-y-10">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              className="flex gap-6 items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <div className="relative z-10 w-20 h-20 rounded-2xl bg-wafy-gradient flex flex-col items-center justify-center shrink-0 text-primary-foreground shadow-lg">
                <s.icon className="w-6 h-6 mb-0.5" />
                <span className="text-[10px] font-bold opacity-90">{s.num}</span>
              </div>
              <div className="pt-2">
                <h3 className="font-bold text-lg mb-1">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
