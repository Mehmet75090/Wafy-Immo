import { motion } from "framer-motion";
import dashboardAsset from "@/assets/wafy-dashboard.png.asset.json";

const DashboardSection = () => (
  <section className="section-padding bg-card">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Dashboard <span className="text-gradient">KPI's</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Suivez vos performances en temps réel : leads, qualification, conversion, et ROI.
        </p>
      </motion.div>

      {/* Dashboard visual */}
      <motion.div
        className="rounded-2xl border border-border bg-background shadow-xl overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <img
          src={dashboardAsset.url}
          alt="Tableau de bord Wafy Immo : KPI's de qualification, funnel complet, tendance RDV honorés et performance de l'équipe"
          className="w-full h-auto block"
          loading="lazy"
        />
      </motion.div>
    </div>
  </section>
);

export default DashboardSection;
