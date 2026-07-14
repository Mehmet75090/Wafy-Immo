import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { User, Bot, Clock, Zap, FileCheck, TrendingDown } from "lucide-react";
import { useCountry, formatPriceForCountry } from "@/contexts/CountryContext";

const wafyPlans = [
  { name: "Pilote", price: 2800, isPerLead: false, maxConv: 2000 },
  { name: "Business", price: 5500, isPerLead: false, maxConv: 2000 },
  { name: "Premium", price: 7500, isPerLead: false, maxConv: 5000 },
];

// Capacité d'un agent en qualitatif : 2 000 leads/mois est le point de rupture
// soit ~91 leads/jour ouvré (22 j/mois)
const LEADS_PER_AGENT = 2000;
const LEADS_PER_DAY_PER_AGENT = 91;
const LEAD_STEPS = [600, 1500, 2500, 3500, 4500, 5000];

function getBestPlan(leads: number) {
  // Find cheapest plan that fits the volume
  for (let i = 0; i < wafyPlans.length; i++) {
    if (leads <= wafyPlans[i].maxConv) return i;
  }
  return wafyPlans.length - 1; // Premium if exceeds all
}

const SimulatorSection = () => {
  const { country } = useCountry();
  const [totalLeads, setTotalLeads] = useState(600);
  const [agentSalary, setAgentSalary] = useState(6000);

  const selectedPlan = useMemo(() => getBestPlan(totalLeads), [totalLeads]);

  const fmt = (madAmount: number) => formatPriceForCountry(madAmount, country);
  const fmtPerLead = (madAmount: number) => {
    // per-lead: convert then round to nearest sensible unit (roundTo/10 min 1)
    const converted = madAmount * country.rate;
    const unit = Math.max(1, Math.round(country.roundTo / 10));
    const rounded = Math.round(converted / unit) * unit;
    const formatted = rounded.toLocaleString(country.locale);
    return country.symbolPosition === "before"
      ? `${country.currency} ${formatted}`
      : `${formatted} ${country.currency}`;
  };

  const results = useMemo(() => {
    const plan = wafyPlans[selectedPlan];

    // Human cost
    const agentsNeeded = Math.max(1, Math.ceil(totalLeads / LEADS_PER_AGENT));
    const humanCost = agentsNeeded * agentSalary;
    const humanCostPerLead = totalLeads > 0 ? humanCost / totalLeads : 0;
    const humanLeadsPerDay = agentsNeeded * LEADS_PER_DAY_PER_AGENT;

    // WAFY cost
    const wafyCost = plan.price;
    const wafyCostPerLead = totalLeads > 0 ? wafyCost / totalLeads : 0;

    const savings = humanCost - wafyCost;
    const savingsPercent = humanCost > 0 ? Math.round((savings / humanCost) * 100) : 0;

    return {
      agentsNeeded,
      humanCost,
      humanCostPerLead,
      humanLeadsPerDay,
      wafyCost,
      wafyCostPerLead,
      savings,
      savingsPercent,
      planName: plan.name,
    };
  }, [totalLeads, selectedPlan, agentSalary]);

  const comparisonRows = [
    {
      label: "Coût mensuel",
      human: fmt(results.humanCost),
      wafy: fmt(results.wafyCost),
    },
    {
      label: "Coût / lead",
      human: fmtPerLead(results.humanCostPerLead),
      wafy: fmtPerLead(results.wafyCostPerLead),
    },
    {
      label: "Leads traités / jour",
      human: `~${results.humanLeadsPerDay} / ${results.agentsNeeded} agent${results.agentsNeeded > 1 ? "s" : ""}`,
      wafy: "Illimité",
    },
    {
      label: "Disponibilité",
      human: "Lun-Ven, 9h-18h",
      wafy: "24h/24, 7j/7",
    },
    {
      label: "Temps de réponse",
      human: "10 min à 24h",
      wafy: "Instantané",
    },
    {
      label: "Qualité fiche lead",
      human: "Variable",
      wafy: "Standardisée + scorée",
    },
  ];

  return (
    <section className="section-padding" id="simulator">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Simulateur : <span className="text-gradient">humain vs Wafy Immo</span>
          </h2>
          <p className="text-muted-foreground">Jouez avec les curseurs pour voir le point de bascule</p>
        </motion.div>

        <motion.div
          className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Inputs */}
          <div className="space-y-7 mb-10">
            <div>
              <div className="flex justify-between mb-3">
                <span className="text-sm font-medium">Leads à qualifier / mois</span>
                <span className="text-sm font-bold text-primary">{totalLeads}</span>
              </div>
              <Slider
                value={[LEAD_STEPS.indexOf(totalLeads)]}
                onValueChange={([v]) => setTotalLeads(LEAD_STEPS[v])}
                min={0}
                max={LEAD_STEPS.length - 1}
                step={1}
                className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary [&_.relative>div]:bg-primary"
              />
            </div>

            <div>
              <div className="flex justify-between mb-3">
                <span className="text-sm font-medium">Coût employeur d'un agent humain recruté (brut chargé)</span>
                <span className="text-sm font-bold text-primary">{agentSalary.toLocaleString("fr-FR")} MAD</span>
              </div>
              <Slider
                value={[agentSalary]}
                onValueChange={([v]) => setAgentSalary(v)}
                min={4000}
                max={8000}
                step={500}
                className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary [&_.relative>div]:bg-primary"
              />
            </div>


            {/* Auto-selected plan + agents info */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/20 text-sm">
                <Bot className="w-4 h-4 text-primary shrink-0" />
                <span>
                  Formule recommandée : <strong className="text-primary">{results.planName}</strong>
                </span>
              </div>
              <div className="flex-1 flex items-center gap-3 p-3 rounded-xl bg-muted text-sm text-muted-foreground">
                <User className="w-4 h-4 shrink-0" />
                <span>
                  <strong className="text-foreground">{results.agentsNeeded} agent{results.agentsNeeded > 1 ? "s" : ""}</strong> nécessaire{results.agentsNeeded > 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </div>

          {/* Comparison table */}
          <div className="rounded-xl border border-border overflow-hidden mb-8">
            <div className="grid grid-cols-3 text-sm font-semibold">
              <div className="p-3 sm:p-4 bg-muted" />
              <div className="p-3 sm:p-4 bg-muted/80 text-center flex items-center justify-center gap-1.5">
                <User className="w-4 h-4 text-muted-foreground" /> <span className="hidden sm:inline">Agent humain</span> recruté
              </div>
              <div className="p-3 sm:p-4 bg-primary/10 text-center flex items-center justify-center gap-1.5">
                <Bot className="w-4 h-4 text-primary" /> Wafy Immo <span className="hidden sm:inline">{results.planName}</span>
              </div>
            </div>
            {comparisonRows.map((row, i) => (
              <div key={i} className="grid grid-cols-3 text-sm border-t border-border">
                <div className="p-3 sm:p-4 font-medium bg-card">{row.label}</div>
                <div className="p-3 sm:p-4 text-center text-muted-foreground">{row.human}</div>
                <div className="p-3 sm:p-4 text-center font-bold text-primary">{row.wafy}</div>
              </div>
            ))}
          </div>

          {/* Savings */}
          {results.savings > 0 ? (
            <div className="p-5 rounded-xl border-2 border-secondary bg-secondary/5 text-center">
              <div className="text-sm text-muted-foreground mb-1">Économie avec Wafy Immo</div>
              <div className="text-3xl sm:text-4xl font-extrabold text-secondary">
                {results.savings.toLocaleString("fr-FR")} MAD<span className="text-lg font-bold"> / mois</span>
              </div>
              <div className="text-sm font-semibold text-secondary mt-1">
                soit -{results.savingsPercent}%
              </div>
            </div>
          ) : (
            <div className="p-5 rounded-xl border border-border bg-background text-center">
              <div className="text-sm text-muted-foreground">
                Pour ce volume, le coût est similaire — mais Wafy Immo répond instantanément, 24h/24.
              </div>
            </div>
          )}

          {/* Punchline */}
          <p className="text-center mt-8 text-sm sm:text-base font-semibold text-foreground leading-relaxed">
            Avec Wafy Immo, vos leads sont traités en <span className="text-primary">30 secondes</span> au lieu de 24h.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SimulatorSection;
