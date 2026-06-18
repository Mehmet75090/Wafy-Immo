import { motion } from "framer-motion";
import { Clock, Users, Zap } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    stat: "70%",
    title: "des leads ne sont jamais recontactés",
    desc: "Vos prospects s'évanouissent faute de suivi rapide. Chaque minute compte.",
  },
  {
    icon: Users,
    stat: "40%",
    title: "de temps perdu par vos commerciaux",
    desc: "Qualification manuelle, relances répétitives, saisie CRM... du temps perdu en masse.",
  },
  {
    icon: Zap,
    stat: "2h30",
    title: "délai moyen de réponse",
    desc: "Pendant ce temps, votre concurrent a déjà répondu et converti votre prospect.",
  },
];

const PainPointsSection = () => (
  <section className="section-padding bg-card">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Le problème, c'est <span className="text-gradient">le temps qui s'échappe</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Chaque seconde d'attente est une opportunité perdue. Voici ce que subissent les promoteurs marocains aujourd'hui.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {painPoints.map((p, i) => (
          <motion.div
            key={p.title}
            className="relative p-8 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-wafy-gradient transition-colors">
              <p.icon className="w-6 h-6 text-accent-foreground group-hover:text-primary-foreground" />
            </div>
            <div className="text-4xl font-extrabold text-primary mb-2">{p.stat}</div>
            <div className="font-semibold text-foreground mb-2">{p.title}</div>
            <div className="text-sm text-muted-foreground">{p.desc}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PainPointsSection;
