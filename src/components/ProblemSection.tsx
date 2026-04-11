import { motion } from "framer-motion";
import { Clock, PhoneOff, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "70%",
    label: "du temps commercial perdu",
    desc: "sur des leads non qualifiés",
  },
  {
    icon: PhoneOff,
    value: "45%",
    label: "des leads jamais rappelés",
    desc: "dans les 24h — potentiellement PERDUS",
  },
  {
    icon: TrendingUp,
    value: "3x",
    label: "plus de chances de convertir",
    desc: "avec un rappel sous 5 minutes",
  },
];

const ProblemSection = () => (
  <section className="section-padding bg-card">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Le problème dans <span className="text-gradient">l'immobilier</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Vos commerciaux perdent du temps, vos leads s'évaporent. WAFY change la donne.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.value}
            className="relative p-8 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-wafy-gradient transition-colors">
              <s.icon className="w-6 h-6 text-accent-foreground group-hover:text-primary-foreground" />
            </div>
            <div className="text-4xl font-extrabold text-primary mb-2">{s.value}</div>
            <div className="font-semibold text-foreground mb-1">{s.label}</div>
            <div className="text-sm text-muted-foreground">{s.desc}</div>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-center mt-12 text-lg font-semibold text-secondary"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        → WAFY résout ces problèmes en automatisant la qualification et le suivi.
      </motion.p>
    </div>
  </section>
);

export default ProblemSection;
