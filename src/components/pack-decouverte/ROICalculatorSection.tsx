import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { TrendingUp, Calculator } from "lucide-react";

const ROICalculatorSection = () => {
  const [leadsPerMonth, setLeadsPerMonth] = useState(200);
  const [conversionRate, setConversionRate] = useState(3);
  const [avgPropertyValue, setAvgPropertyValue] = useState(1200000);
  const [commissionRate, setCommissionRate] = useState(3);

  const results = useMemo(() => {
    const currentConversions = Math.round((leadsPerMonth * conversionRate) / 100);
    const wafyConversionRate = Math.min(conversionRate * 1.3, 15); // +30% with Wafy, capped at 15%
    const wafyConversions = Math.round((leadsPerMonth * wafyConversionRate) / 100);

    const currentRevenue = currentConversions * avgPropertyValue * (commissionRate / 100);
    const wafyRevenue = wafyConversions * avgPropertyValue * (commissionRate / 100);
    const additionalRevenue = wafyRevenue - currentRevenue;
    const roi = additionalRevenue > 0 ? Math.round((additionalRevenue / 2800) * 100) : 0;

    return {
      currentConversions,
      wafyConversions,
      currentRevenue,
      wafyRevenue,
      additionalRevenue,
      roi,
      wafyConversionRate: Math.round(wafyConversionRate * 10) / 10,
    };
  }, [leadsPerMonth, conversionRate, avgPropertyValue, commissionRate]);

  const formatMAD = (n: number) =>
    n >= 1000000
      ? `${(n / 1000000).toFixed(1)}M MAD`
      : `${Math.round(n).toLocaleString("fr-FR")} MAD`;

  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
            <Calculator className="w-3.5 h-3.5" />
            Calculateur interactif
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Calculez votre <span className="text-gradient">ROI</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez combien Wafy Immo peut générer de revenus additionnels pour votre promoteur.
          </p>
        </motion.div>

        <motion.div
          className="p-6 sm:p-8 rounded-2xl bg-background border border-border shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Sliders */}
            <div className="space-y-7">
              <div>
                <div className="flex justify-between mb-3">
                  <span className="text-sm font-medium">Leads entrants / mois</span>
                  <span className="text-sm font-bold text-primary">{leadsPerMonth}</span>
                </div>
                <Slider
                  value={[leadsPerMonth]}
                  onValueChange={([v]) => setLeadsPerMonth(v)}
                  min={50}
                  max={1000}
                  step={10}
                  className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary [&_.relative>div]:bg-primary"
                />
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <span className="text-sm font-medium">Taux de conversion actuel (%)</span>
                  <span className="text-sm font-bold text-primary">{conversionRate}%</span>
                </div>
                <Slider
                  value={[conversionRate]}
                  onValueChange={([v]) => setConversionRate(v)}
                  min={0.5}
                  max={10}
                  step={0.5}
                  className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary [&_.relative>div]:bg-primary"
                />
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <span className="text-sm font-medium">Prix moyen du bien</span>
                  <span className="text-sm font-bold text-primary">{formatMAD(avgPropertyValue)}</span>
                </div>
                <Slider
                  value={[avgPropertyValue]}
                  onValueChange={([v]) => setAvgPropertyValue(v)}
                  min={500000}
                  max={5000000}
                  step={100000}
                  className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary [&_.relative>div]:bg-primary"
                />
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <span className="text-sm font-medium">Commission (%)</span>
                  <span className="text-sm font-bold text-primary">{commissionRate}%</span>
                </div>
                <Slider
                  value={[commissionRate]}
                  onValueChange={([v]) => setCommissionRate(v)}
                  min={1}
                  max={5}
                  step={0.5}
                  className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary [&_.relative>div]:bg-primary"
                />
              </div>
            </div>

            {/* Results */}
            <div className="flex flex-col justify-center gap-5">
              <div className="p-5 rounded-xl border border-border bg-muted/50">
                <div className="text-xs text-muted-foreground mb-1">Conversions actuelles / mois</div>
                <div className="text-2xl font-extrabold text-foreground">{results.currentConversions} ventes</div>
                <div className="text-sm text-muted-foreground mt-1">Chiffre : {formatMAD(results.currentRevenue)}</div>
              </div>

              <div className="p-5 rounded-xl border-2 border-secondary bg-secondary/5">
                <div className="text-xs text-secondary font-semibold mb-1">Avec Wafy Immo (+30% de conversion)</div>
                <div className="text-2xl font-extrabold text-secondary">{results.wafyConversions} ventes</div>
                <div className="text-sm text-muted-foreground mt-1">Chiffre : {formatMAD(results.wafyRevenue)}</div>
                <div className="text-xs text-secondary font-medium mt-1">Taux de conversion : {results.wafyConversionRate}%</div>
              </div>

              <div className="p-5 rounded-xl bg-wafy-gradient text-primary-foreground text-center">
                <div className="text-sm font-medium opacity-90 mb-1">Revenus additionnels / mois</div>
                <div className="text-3xl font-extrabold">{formatMAD(results.additionalRevenue)}</div>
                <div className="text-sm mt-1 opacity-90">Pour un investissement de 2 800 MAD/mois</div>
              </div>

              <div className="flex items-center justify-center gap-2 text-sm font-semibold text-primary">
                <TrendingUp className="w-4 h-4" />
                ROI estimé : {results.roi}%
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ROICalculatorSection;
