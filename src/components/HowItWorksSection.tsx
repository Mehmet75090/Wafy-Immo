import { motion } from "framer-motion";
import leadDetailAsset from "@/assets/lead-detail.png.asset.json";

const steps = [
  {
    num: "1",
    title: "La campagne Meta Ads est lancée",
    desc: "Ciblage acquéreurs par ville, budget, type de bien et profil.",
  },
  {
    num: "2",
    title: "Le prospect clique et arrive sur WhatsApp",
    desc: "Instantanément le bot Wafy Immo prend en charge la conversation.",
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
  <section className="section-padding bg-card" id="how-it-works">
    <div className="container mx-auto max-w-6xl">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left: heading + steps */}
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-3 block">
            Processus intelligent
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Comment ça <span className="text-gradient">marche</span> ?
          </h2>
          <p className="text-muted-foreground mb-10">
            Wafy Immo transforme vos visiteurs en opportunités d'achat qualifiées —
            et remet au promoteur une fiche lead prête à l'emploi.
          </p>

          <div className="relative space-y-8">
            <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-border" />
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                className="relative flex gap-6 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div
                  className={`z-10 shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                    i === steps.length - 1
                      ? "bg-wafy-gradient text-primary-foreground ring-4 ring-primary/15 shadow-lg"
                      : "bg-card border-2 border-border text-muted-foreground group-hover:border-primary group-hover:text-primary"
                  }`}
                >
                  {s.num}
                </div>
                <div>
                  <h3 className="font-bold mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: real lead fiche screenshot */}
        <motion.div
          className="lg:col-span-7 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
          <motion.div
            className="relative bg-card rounded-2xl shadow-2xl border border-border overflow-hidden lg:rotate-[-1deg] hover:rotate-0 transition-transform duration-500"
            whileHover={{ scale: 1.01 }}
          >
            <img
              src={leadDetailAsset.url}
              alt="Fiche lead Wafy Immo : critères de qualification, score 55 % et historique du lead"
              className="w-full h-auto block"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -right-4 bg-card rounded-2xl shadow-xl border border-primary/20 px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-wafy-gradient flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xs font-bold text-foreground pr-1 whitespace-nowrap">
                Lead scoré automatiquement
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
