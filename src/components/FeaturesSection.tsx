import { motion } from "framer-motion";
import { Bot, Plug, Workflow, BarChart3, MessageCircle } from "lucide-react";
import { WhatsAppIcon, MessengerIcon, InstagramIcon, GoogleCalendarIcon } from "./BrandIcons";

const whatsappColor = "#25D366";
const messengerGradient = "linear-gradient(135deg, #00B2FF 0%, #006AFF 50%, #A033FF 100%)";
const instagramGradient = "linear-gradient(45deg, #FEDA75 0%, #FA7E1E 25%, #D62976 55%, #962FBF 80%, #4F5BD5 100%)";
const gcalColor = "#4285F4";

const ChannelBadge = ({ name, gradient, color }: { name: string; gradient?: string; color?: string }) => (
  <span
    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-2.5 py-1 text-xs font-medium"
    title={name}
  >
    <span
      className="flex h-4 w-4 items-center justify-center rounded-[5px] text-white"
      style={{ background: gradient ?? color }}
    >
      {name === "WhatsApp" && <WhatsAppIcon className="h-3 w-3" />}
      {name === "Messenger" && <MessengerIcon className="h-3 w-3" />}
      {name === "Instagram" && <InstagramIcon className="h-3 w-3" />}
      {name === "Google Calendar" && <GoogleCalendarIcon className="h-3 w-3" />}
    </span>
    <span className="text-muted-foreground">{name}</span>
  </span>
);

const features = [
  {
    icon: MessageCircle,
    title: "Cross-canal : WhatsApp, Messenger & Instagram",
    desc: "Wafy Immo converse avec vos leads là où ils sont : WhatsApp, Facebook Messenger et Instagram DM. Même qualification, même relance, sur les trois canaux.",
    badges: (
      <div className="mt-3 flex flex-wrap gap-2">
        <ChannelBadge name="WhatsApp" color={whatsappColor} />
        <ChannelBadge name="Messenger" gradient={messengerGradient} />
        <ChannelBadge name="Instagram" gradient={instagramGradient} />
      </div>
    ),
  },
  {
    icon: Bot,
    title: "Qualification automatique",
    desc: "IA conversationnelle qui qualifie chaque lead en temps réel (budget, projet, délai, localisation).",
  },
  {
    icon: Plug,
    title: "Connecté à vos outils",
    desc: "Votre CRM, Google Calendar, emailing, ERP : Wafy Immo s'y branche automatiquement. Chaque lead qualifié arrive là où vos équipes travaillent déjà — et chaque visite qualifiée se synchronise directement dans votre agenda Google Calendar.",
    badges: (
      <div className="mt-3 flex flex-wrap gap-2">
        <ChannelBadge name="Google Calendar" color={gcalColor} />
      </div>
    ),
  },
  {
    icon: Workflow,
    title: "Workflows automatisés",
    desc: "Rappels, relances, scoring et priorisation sans intervention manuelle.",
  },
  {
    icon: BarChart3,
    title: "Dashboard & Analytics",
    desc: "Suivi des performances, taux de conversion et ROI en temps réel.",
  },
];

const FeaturesSection = () => (
  <section className="section-padding">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Wafy Immo : votre assistant de <span className="text-gradient">qualification</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className="flex gap-5 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="w-14 h-14 rounded-xl bg-wafy-gradient flex items-center justify-center shrink-0">
              <f.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
              {f.badges}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
