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

      {/* Desktop: Table */}
      <motion.div
        className="hidden md:block overflow-x-auto rounded-2xl border border-border"
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
                  <Check className="w-4 h-4 text-primary" /> Co-pilote WAFY IA
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

      {/* Mobile: Cards */}
      <div className="md:hidden space-y-6">
        {rows.map((r, i) => (
          <motion.div
            key={i}
            className="rounded-2xl border border-border bg-card overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="p-4 bg-muted font-semibold text-sm">{r.label}</div>
            <div className="divide-y divide-border">
              <div className="p-4 flex items-start gap-3">
                <X className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-medium text-muted-foreground mb-0.5">Agence classique</div>
                  <div className="text-sm">{r.classic}</div>
                </div>
              </div>
              <div className="p-4 flex items-start gap-3">
                <Minus className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-medium text-destructive/70 mb-0.5">WhatsApp + humain</div>
                  <div className="text-sm text-destructive/80">{r.human}</div>
                </div>
              </div>
              <div className="p-4 flex items-start gap-3 bg-primary/5">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-medium text-primary mb-0.5">Co-pilote WAFY IA</div>
                  <div className="text-sm font-bold text-primary">{r.wafy}</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ComparisonSection;
