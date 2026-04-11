import { motion } from "framer-motion";
import { Bot, Plug, Workflow, BarChart3, MessageCircle } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "WhatsApp natif",
    desc: "WAFY converse directement avec vos leads sur WhatsApp — le canal préféré de vos prospects immobiliers.",
  },
  {
    icon: Bot,
    title: "Qualification automatique",
    desc: "IA conversationnelle qui qualifie chaque lead en temps réel (budget, projet, délai, localisation).",
  },
  {
    icon: Plug,
    title: "Connecté à vos outils",
    desc: "Votre CRM, agenda, emailing, ERP : WAFY s'y branche automatiquement. Vos leads qualifiés arrivent directement là où vos équipes travaillent déjà.",
  },
  {
    icon: Workflow,
    title: "Workflows automatisés",
    desc: "Rappels, relances, scoring et priorisation sans intervention manuelle.",
  },
  {
    icon: BarChart3,
    title: "Dashboard & Analytics",
    desc: "Suivi des performances, taux de conversion et ROI en temps réel.",
  },
];

const FeaturesSection = () => (
  <section className="section-padding">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          WAFY : votre agent IA de <span className="text-gradient">qualification</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className="flex gap-5 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="w-14 h-14 rounded-xl bg-wafy-gradient flex items-center justify-center shrink-0">
              <f.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
