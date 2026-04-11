import { motion } from "framer-motion";

const steps = [
  {
    num: "1",
    title: "La campagne Meta Ads est lancée",
    desc: "Ciblage acquéreurs par ville, budget, type de bien et profil.",
  },
  {
    num: "2",
    title: "Le prospect clique et arrive sur WhatsApp",
    desc: "Instantanément le bot WAFY prend en charge la conversation.",
  },
  {
    num: "3",
    title: "Le Bot qualifie en 5-7 messages",
    desc: "Nom, budget, type de bien, timeline, financement, motivation — tout est capté.",
  },
  {
    num: "4",
    title: "Le lead est scoré automatiquement",
    desc: "Le promoteur reçoit une fiche lead complète : scoring, besoins, budget, timeline et programme suggéré.",
  },
];

const HowItWorksSection = () => (
  <section className="section-padding bg-card">
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
      </motion.div>

      <div className="relative">
        {/* Vertical line */}
        <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

        <div className="space-y-10">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              className="flex gap-6 items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-wafy-gradient flex items-center justify-center shrink-0 text-2xl font-extrabold text-primary-foreground shadow-lg">
                {s.num}
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
