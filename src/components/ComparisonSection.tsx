import { motion } from "framer-motion";
import { X, Minus, Check } from "lucide-react";

const rows = [
  {
    label: "Délai du 1er contact",
    classic: "24h-72h",
    human: "10min-2h (0 le soir/weekend)",
    wafy: "Instantané, 24/7",
  },
  {
    label: "Taux de leads perdus",
    classic: "30 à 50% jamais traités",
    human: "20-40% perdus hors heures",
    wafy: "100% des leads reçoivent une réponse",
  },
  {
    label: "Expérience prospect",
    classic: "Froide, formulaire, rappel intrusif",
    human: "Attente, réponses lentes",
    wafy: "Fluide, conversationnelle, au rythme du prospect",
  },
  {
    label: "Capacité en pic (300 leads/weekend)",
    classic: "Pile de rappels froids le lundi",
    human: "3-4 chargés nécessaires",
    wafy: "300 leads traités en simultané, sans renfort",
  },
  {
    label: "Ce que reçoit le promoteur",
    classic: "Nom+tél + champ libre vague",
    human: "Notes libres CRM, souvent incomplètes",
    wafy: "Fiche lead scorée : budget, timeline, intention + RDV",
  },
];

const ComparisonSection = () => (
  <section className="section-padding">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Pourquoi <span className="text-gradient">WAFY Immo</span> ?
        </h2>
        <p className="text-muted-foreground">WhatsApp sans IA = expérience dégradée</p>
      </motion.div>

      <motion.div
        className="overflow-x-auto rounded-2xl border border-border"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="p-4 text-left bg-muted font-semibold" />
              <th className="p-4 text-center bg-muted/80 font-semibold">
                <div className="flex items-center justify-center gap-1">
                  <X className="w-4 h-4 text-muted-foreground" /> Agence classique
                </div>
              </th>
              <th className="p-4 text-center bg-destructive/10 font-semibold">
                <div className="flex items-center justify-center gap-1">
                  <Minus className="w-4 h-4 text-destructive" /> WhatsApp + humain
                </div>
              </th>
              <th className="p-4 text-center bg-primary/10 font-semibold">
                <div className="flex items-center justify-center gap-1">
                  <Check className="w-4 h-4 text-primary" /> Co-pilote WAFY
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-border">
                <td className="p-4 font-medium bg-card">{r.label}</td>
                <td className="p-4 text-center text-muted-foreground">{r.classic}</td>
                <td className="p-4 text-center text-destructive/80">{r.human}</td>
                <td className="p-4 text-center font-bold text-primary">{r.wafy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  </section>
);

export default ComparisonSection;
