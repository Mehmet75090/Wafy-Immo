import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, AreaChart, Area,
} from "recharts";
import { MessageCircle, Users, CalendarCheck, Zap, TrendingUp, Clock } from "lucide-react";

/* ── Mock data ── */
const weeklyLeads = [
  { jour: "Lun", leads: 42 },
  { jour: "Mar", leads: 58 },
  { jour: "Mer", leads: 35 },
  { jour: "Jeu", leads: 67 },
  { jour: "Ven", leads: 53 },
  { jour: "Sam", leads: 89 },
  { jour: "Dim", leads: 74 },
];

const funnelData = [
  { name: "Reçus", value: 1240 },
  { name: "Qualifiés", value: 890 },
  { name: "Chauds", value: 340 },
  { name: "RDV pris", value: 185 },
];

const sourceData = [
  { name: "Meta Ads", value: 52, color: "hsl(24, 90%, 52%)" },
  { name: "Google Ads", value: 23, color: "hsl(160, 45%, 40%)" },
  { name: "Site web", value: 15, color: "hsl(30, 95%, 58%)" },
  { name: "Organique", value: 10, color: "hsl(220, 15%, 60%)" },
];

const conversionTrend = [
  { sem: "S1", taux: 12 },
  { sem: "S2", taux: 15 },
  { sem: "S3", taux: 14 },
  { sem: "S4", taux: 19 },
  { sem: "S5", taux: 22 },
  { sem: "S6", taux: 21 },
  { sem: "S7", taux: 26 },
  { sem: "S8", taux: 28 },
];

/* ── KPI cards ── */
const kpis = [
  { icon: MessageCircle, label: "Conversations", value: "1 240", change: "+18%", up: true },
  { icon: Users, label: "Leads qualifiés", value: "890", change: "+24%", up: true },
  { icon: CalendarCheck, label: "RDV confirmés", value: "185", change: "+31%", up: true },
  { icon: Zap, label: "Temps de réponse", value: "< 30s", change: "-85%", up: true },
  { icon: TrendingUp, label: "Taux de conversion", value: "28%", change: "+9pts", up: true },
  { icon: Clock, label: "Disponibilité", value: "24/7", change: "100%", up: true },
];

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

      {/* Dashboard container */}
      <motion.div
        className="rounded-2xl border border-border bg-background shadow-xl overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-border bg-card">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-secondary" />
            <span className="text-sm font-semibold">WAFY Dashboard</span>
          </div>
          <span className="text-xs text-muted-foreground">Dernière mise à jour : il y a 2 min</span>
        </div>

        <div className="p-4 sm:p-6 space-y-6">
          {/* KPI cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {kpis.map((kpi, i) => (
              <motion.div
                key={kpi.label}
                className="p-3 sm:p-4 rounded-xl bg-card border border-border"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <kpi.icon className="w-4 h-4 text-primary mb-2" />
                <div className="text-lg sm:text-xl font-extrabold leading-tight">{kpi.value}</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">{kpi.label}</div>
                <div className="text-[11px] font-semibold text-secondary mt-1">{kpi.change}</div>
              </motion.div>
            ))}
          </div>

          {/* Charts row */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Weekly leads bar chart */}
            <div className="p-4 sm:p-5 rounded-xl bg-card border border-border">
              <h4 className="text-sm font-semibold mb-4">Leads qualifiés / jour</h4>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={weeklyLeads}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(30, 15%, 88%)" />
                  <XAxis dataKey="jour" tick={{ fontSize: 11, fill: "hsl(220, 10%, 46%)" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: "hsl(220, 10%, 46%)" }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "8px",
                      border: "1px solid hsl(30, 15%, 88%)",
                      fontSize: "12px",
                    }}
                  />
                  <Bar dataKey="leads" fill="hsl(24, 90%, 52%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Conversion trend */}
            <div className="p-4 sm:p-5 rounded-xl bg-card border border-border">
              <h4 className="text-sm font-semibold mb-4">Taux de conversion (8 sem.)</h4>
              <ResponsiveContainer width="100%" height={180}>
                <AreaChart data={conversionTrend}>
                  <defs>
                    <linearGradient id="convGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(160, 45%, 40%)" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="hsl(160, 45%, 40%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(30, 15%, 88%)" />
                  <XAxis dataKey="sem" tick={{ fontSize: 11, fill: "hsl(220, 10%, 46%)" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: "hsl(220, 10%, 46%)" }} axisLine={false} tickLine={false} unit="%" />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "8px",
                      border: "1px solid hsl(30, 15%, 88%)",
                      fontSize: "12px",
                    }}
                  />
                  <Area type="monotone" dataKey="taux" stroke="hsl(160, 45%, 40%)" strokeWidth={2} fill="url(#convGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Bottom row */}
          <div className="grid md:grid-cols-3 gap-4">
            {/* Funnel */}
            <div className="md:col-span-1 p-4 sm:p-5 rounded-xl bg-card border border-border">
              <h4 className="text-sm font-semibold mb-4">Funnel de conversion</h4>
              <div className="space-y-2.5">
                {funnelData.map((step, i) => {
                  const maxVal = funnelData[0].value;
                  const pct = Math.round((step.value / maxVal) * 100);
                  return (
                    <div key={step.name}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-muted-foreground">{step.name}</span>
                        <span className="font-semibold">{step.value}</span>
                      </div>
                      <div className="h-2.5 rounded-full bg-muted overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            background: i === 0
                              ? "hsl(24, 90%, 52%)"
                              : i === 1
                              ? "hsl(30, 95%, 58%)"
                              : i === 2
                              ? "hsl(24, 100%, 65%)"
                              : "hsl(160, 45%, 40%)",
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: i * 0.1 }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Source breakdown */}
            <div className="md:col-span-1 p-4 sm:p-5 rounded-xl bg-card border border-border">
              <h4 className="text-sm font-semibold mb-4">Sources des leads</h4>
              <div className="flex items-center justify-center">
                <ResponsiveContainer width="100%" height={140}>
                  <PieChart>
                    <Pie
                      data={sourceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={35}
                      outerRadius={60}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {sourceData.map((entry) => (
                        <Cell key={entry.name} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        borderRadius: "8px",
                        border: "1px solid hsl(30, 15%, 88%)",
                        fontSize: "12px",
                      }}
                      formatter={(value: number) => [`${value}%`, ""]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 mt-2">
                {sourceData.map((s) => (
                  <div key={s.name} className="flex items-center gap-1.5 text-[11px]">
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ background: s.color }} />
                    <span className="text-muted-foreground">{s.name}</span>
                    <span className="font-semibold ml-auto">{s.value}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top programs */}
            <div className="md:col-span-1 p-4 sm:p-5 rounded-xl bg-card border border-border">
              <h4 className="text-sm font-semibold mb-4">Top programmes</h4>
              <div className="space-y-3">
                {[
                  { name: "Résidence Azure — Casablanca", leads: 312, rdv: 48 },
                  { name: "Les Jardins de Rabat", leads: 245, rdv: 37 },
                  { name: "Marina Bay — Tanger", leads: 198, rdv: 29 },
                  { name: "Palmeraie Résidences", leads: 135, rdv: 21 },
                ].map((prog, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                    <div>
                      <div className="text-xs font-medium leading-tight">{prog.name}</div>
                      <div className="text-[11px] text-muted-foreground">{prog.leads} leads</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-primary">{prog.rdv} RDV</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default DashboardSection;
