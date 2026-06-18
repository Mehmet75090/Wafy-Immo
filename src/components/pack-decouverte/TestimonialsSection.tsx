import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Karim Bennani",
    role: "Directeur Commercial, Promotions Casablanca",
    text: "Wafy Immo a transformé notre approche des leads. En 3 semaines, notre taux de conversion a augmenté de 25%. L'IA qualifie mieux que nos meilleurs commerciaux.",
    rating: 5,
  },
  {
    name: "Laila Essaadi",
    role: "Fondatrice, Essaadi Immobilier",
    text: "Je pensais que l'IA serait froide. Résultat : nos prospects adorent discuter avec Wafy. Ils s'engagent plus, et nos commerciaux reçoivent des fiches parfaites.",
    rating: 5,
  },
  {
    name: "Youssef Alaoui",
    role: "Responsable Marketing, Atlas Promotions",
    text: "Le Pack Découverte était exactement ce qu'il nous fallait. Un mois pour tester, zéro risque. Aujourd'hui, Wafy est indispensable à notre funnel.",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="section-padding">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Ils nous <span className="text-gradient">font confiance</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Des promoteurs marocains qui ont transformé leur acquisition avec Wafy Immo.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <Quote className="w-8 h-8 text-primary/30 mb-4" />
            <p className="text-foreground text-sm leading-relaxed mb-6">{t.text}</p>
            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <div className="font-semibold text-sm">{t.name}</div>
            <div className="text-xs text-muted-foreground">{t.role}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
