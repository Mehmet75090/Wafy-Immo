import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { ArrowDown } from "lucide-react";

const SimulatorSection = () => {
  const [totalLeads, setTotalLeads] = useState(100);
  const [hotPercent, setHotPercent] = useState(30);

  const results = useMemo(() => {
    const hotLeads = Math.round((totalLeads * hotPercent) / 100);
    const warmLeads = totalLeads - hotLeads;

    // Abonnement Business = 15 000 MAD/mois (up to 1500 conv)
    const abonnement = 15000;
    const costPerLeadAbo = totalLeads > 0 ? Math.round(abonnement / totalLeads) : 0;

    // Par lead: warm 150 MAD, hot 350 MAD
    const parLead = warmLeads * 150 + hotLeads * 350;
    const costPerLeadPar = totalLeads > 0 ? Math.round(parLead / totalLeads) : 0;

    const savings = parLead - abonnement;
    const savingsPercent = parLead > 0 ? Math.round((savings / parLead) * 100) : 0;

    return { hotLeads, warmLeads, abonnement, costPerLeadAbo, parLead, costPerLeadPar, savings, savingsPercent };
  }, [totalLeads, hotPercent]);

  const bestOption = results.abonnement <= results.parLead ? "abonnement" : "parlead";

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
            Simulateur : <span className="text-gradient">abonnement vs paiement par lead</span>
          </h2>
          <p className="text-muted-foreground">Jouez avec les curseurs pour voir le point de bascule</p>
        </motion.div>

        <motion.div
          className="p-8 rounded-2xl bg-card border border-border shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Sliders */}
          <div className="space-y-8 mb-10">
            <div>
              <div className="flex justify-between mb-3">
                <span className="text-sm font-medium">Leads qualifiés / mois</span>
                <span className="text-sm font-bold">{totalLeads}</span>
              </div>
              <Slider
                value={[totalLeads]}
                onValueChange={([v]) => setTotalLeads(v)}
                min={10}
                max={500}
                step={10}
                className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary [&_.relative>div]:bg-primary"
              />
            </div>
            <div>
              <div className="flex justify-between mb-3">
                <span className="text-sm font-medium">% leads chauds (avec RDV)</span>
                <span className="text-sm font-bold">{hotPercent}%</span>
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
          </div>

          {/* Results */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className={`p-6 rounded-xl border-2 transition-all ${
              bestOption === "abonnement" ? "border-secondary bg-wafy-green-light" : "border-border bg-background"
            }`}>
              <div className="text-sm text-muted-foreground mb-1">Option 1 — Abonnement</div>
              <div className="text-3xl font-extrabold mb-1">
                {results.abonnement.toLocaleString("fr-FR")} MAD
              </div>
              <div className="text-sm text-muted-foreground">Plan Business</div>
              <div className="text-sm font-medium mt-1">→ {results.costPerLeadAbo} MAD/lead</div>
            </div>

            <div className={`p-6 rounded-xl border-2 transition-all ${
              bestOption === "parlead" ? "border-secondary bg-wafy-green-light" : "border-border bg-background"
            }`}>
              <div className="text-sm text-muted-foreground mb-1">Option 2 — Par lead</div>
              <div className="text-3xl font-extrabold mb-1">
                {results.parLead.toLocaleString("fr-FR")} MAD
              </div>
              <div className="text-sm text-muted-foreground">
                {results.warmLeads} tièdes × 150 + {results.hotLeads} chauds × 350
              </div>
              <div className="text-sm font-medium mt-1">→ {results.costPerLeadPar} MAD/lead</div>
            </div>
          </div>

          {/* Savings */}
          {results.savings > 0 && (
            <div className="p-5 rounded-xl border border-border bg-background text-center">
              <div className="text-sm text-muted-foreground mb-1">Économie avec l'abonnement</div>
              <div className="text-3xl font-extrabold text-secondary">
                {results.savings.toLocaleString("fr-FR")} MAD
              </div>
              <div className="text-sm text-muted-foreground">soit {results.savingsPercent}% d'économie</div>
            </div>
          )}
          {results.savings <= 0 && (
            <div className="p-5 rounded-xl border border-border bg-background text-center">
              <div className="text-sm text-muted-foreground mb-1">Économie avec le paiement par lead</div>
              <div className="text-3xl font-extrabold text-secondary">
                {Math.abs(results.savings).toLocaleString("fr-FR")} MAD
              </div>
              <div className="text-sm text-muted-foreground">Le paiement par lead est plus avantageux pour ce volume</div>
            </div>
          )}

          <div className="flex justify-center mt-6">
            <ArrowDown className="w-5 h-5 text-muted-foreground animate-bounce" />
          </div>

          <div className="flex gap-6 justify-center text-xs text-muted-foreground mt-2">
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-wafy-green-light border border-secondary" /> Abonnement</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-background border border-border" /> Par lead</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SimulatorSection;
