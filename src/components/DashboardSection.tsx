import { motion } from "framer-motion";
import dashboardImg from "@/assets/dashboard-kpi.jpg";

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
          Suivez vos performances en temps réel : conversations, qualification, conversion, et ROI.
        </p>
      </motion.div>

      <motion.div
        className="rounded-2xl overflow-hidden shadow-2xl border border-border"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <img
          src={dashboardImg}
          alt="Dashboard KPI's WAFY PRO — Analytics, funnel de conversion, volume conversations, répartition par source et performance par commercial"
          className="w-full h-auto"
          loading="lazy"
          width={1456}
          height={816}
        />
      </motion.div>
    </div>
  </section>
);

export default DashboardSection;
