import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { User, Bot, Clock, Zap, FileCheck, TrendingDown } from "lucide-react";

const wafyPlans = [
  { name: "Pilote", price: 0, perLeadTiede: 150, perLeadChaud: 350, isPerLead: true, maxConv: 200 },
  { name: "Essentiel", price: 8000, perLeadTiede: 0, perLeadChaud: 0, isPerLead: false, maxConv: 300 },
  { name: "Business", price: 15000, perLeadTiede: 0, perLeadChaud: 0, isPerLead: false, maxConv: 1500 },
  { name: "Premium", price: 22000, perLeadTiede: 0, perLeadChaud: 0, isPerLead: false, maxConv: 3000 },
];

const AGENT_COST = 7700;
const LEADS_PER_AGENT = 375;

const SimulatorSection = () => {
  const [totalLeads, setTotalLeads] = useState(500);
  const [selectedPlan, setSelectedPlan] = useState(2); // Business by default
  const [hotPercent, setHotPercent] = useState(30);

  const results = useMemo(() => {
    const plan = wafyPlans[selectedPlan];
    const hotLeads = Math.round((totalLeads * hotPercent) / 100);
    const warmLeads = totalLeads - hotLeads;

    // Human cost
    const agentsNeeded = Math.max(1, Math.ceil(totalLeads / LEADS_PER_AGENT));
    const humanCost = agentsNeeded * AGENT_COST;
    const humanCostPerLead = totalLeads > 0 ? Math.round(humanCost / totalLeads) : 0;
    const humanLeadsPerDay = agentsNeeded * 25;

    // WAFY cost
    let wafyCost: number;
    if (plan.isPerLead) {
      wafyCost = warmLeads * plan.perLeadTiede + hotLeads * plan.perLeadChaud;
    } else {
      wafyCost = plan.price;
    }
    const wafyCostPerLead = totalLeads > 0 ? Math.round(wafyCost / totalLeads) : 0;

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
  }, [totalLeads, selectedPlan, hotPercent]);

  const comparisonRows = [
    {
      label: "Coût mensuel",
      human: `${results.humanCost.toLocaleString("fr-FR")} MAD`,
      wafy: `${results.wafyCost.toLocaleString("fr-FR")} MAD`,
      icon: TrendingDown,
    },
    {
      label: "Coût / lead",
      human: `${results.humanCostPerLead} MAD`,
      wafy: `${results.wafyCostPerLead} MAD`,
      icon: FileCheck,
    },
    {
      label: "Leads traités / jour",
      human: `~${results.humanLeadsPerDay} / ${results.agentsNeeded} agent${results.agentsNeeded > 1 ? "s" : ""}`,
      wafy: "Illimité",
      icon: Zap,
    },
    {
      label: "Disponibilité",
      human: "Lun-Ven, 9h-18h",
      wafy: "24h/24, 7j/7",
      icon: Clock,
    },
    {
      label: "Temps de réponse",
      human: "10 min à 24h",
      wafy: "Instantané",
      icon: Zap,
    },
    {
      label: "Qualité fiche lead",
      human: "Variable",
      wafy: "Standardisée + scorée",
      icon: FileCheck,
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
            Simulateur : <span className="text-gradient">humain vs WAFY</span>
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
                <span className="text-sm font-medium">Leads qualifiés / mois</span>
                <span className="text-sm font-bold text-primary">{totalLeads}</span>
              </div>
              <Slider
                value={[totalLeads]}
                onValueChange={([v]) => setTotalLeads(v)}
                min={50}
                max={3000}
                step={50}
                className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary [&_.relative>div]:bg-primary"
              />
            </div>

            {wafyPlans[selectedPlan].isPerLead && (
              <div>
                <div className="flex justify-between mb-3">
                  <span className="text-sm font-medium">% leads chauds (avec RDV)</span>
                  <span className="text-sm font-bold text-primary">{hotPercent}%</span>
                </div>
                <Slider
                  value={[hotPercent]}
                  onValueChange={([v]) => setHotPercent(v)}
                  min={0}
                  max={100}
                  step={5}
                  className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary [&_.relative>div]:bg-primary"
                />
              </div>
            )}

            <div>
              <span className="text-sm font-medium block mb-3">Formule WAFY</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {wafyPlans.map((plan, i) => (
                  <button
                    key={plan.name}
                    onClick={() => setSelectedPlan(i)}
                    className={`px-3 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all ${
                      selectedPlan === i
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-background text-muted-foreground hover:border-primary/30"
                    }`}
                  >
                    {plan.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-muted text-sm text-muted-foreground">
              <User className="w-4 h-4 shrink-0" />
              <span>
                Agents nécessaires pour {totalLeads} leads : <strong className="text-foreground">{results.agentsNeeded} agent{results.agentsNeeded > 1 ? "s" : ""}</strong> (base ~375 leads/agent)
              </span>
            </div>
          </div>

          {/* Comparison table */}
          <div className="rounded-xl border border-border overflow-hidden mb-8">
            {/* Header */}
            <div className="grid grid-cols-3 text-sm font-semibold">
              <div className="p-3 sm:p-4 bg-muted" />
              <div className="p-3 sm:p-4 bg-muted/80 text-center flex items-center justify-center gap-1.5">
                <User className="w-4 h-4 text-muted-foreground" /> <span className="hidden sm:inline">Agent</span> humain
              </div>
              <div className="p-3 sm:p-4 bg-primary/10 text-center flex items-center justify-center gap-1.5">
                <Bot className="w-4 h-4 text-primary" /> WAFY
              </div>
            </div>
            {/* Rows */}
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
              <div className="text-sm text-muted-foreground mb-1">Économie avec WAFY</div>
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
                Pour ce volume, le coût est similaire — mais WAFY répond instantanément, 24h/24.
              </div>
            </div>
          )}

          {/* Punchline */}
          <p className="text-center mt-8 text-sm sm:text-base font-semibold text-foreground leading-relaxed">
            Avec WAFY, <span className="text-primary">divisez votre coût de qualification par 2</span> — et vos leads sont traités en <span className="text-primary">30 secondes</span> au lieu de 24h.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SimulatorSection;
