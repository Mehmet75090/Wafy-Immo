import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  GmailIcon,
  GoogleCalendarIcon,
  GoogleDriveIcon,
  InstagramIcon,
  MessengerIcon,
  WhatsAppIcon,
} from "./BrandIcons";

const whatsappColor = "#25D366";
const messengerColor = "#006AFF";
const instagramColor = "#D62976";
const gmailColor = "#EA4335";
const gcalColor = "#4285F4";

const integrations: { name: string; desc: string; glyph: ReactNode }[] = [
  {
    name: "Facebook Messenger",
    desc: "Reliez votre page Facebook : Wafy répond aux messages reçus dans la messagerie, même quand l'équipe est occupée.",
    glyph: <MessengerIcon className="h-7 w-7" />,
  },
  {
    name: "Instagram Direct Message",
    desc: "Reliez votre compte Instagram : Wafy prend en charge les messages privés de vos prospects et les qualifie.",
    glyph: <InstagramIcon className="h-7 w-7" />,
  },
  {
    name: "Gmail",
    desc: "Wafy envoie brochures et propositions depuis votre Gmail, et garde la trace de chaque échange dans la fiche du lead.",
    glyph: <GmailIcon className="h-7 w-7" />,
  },
  {
    name: "Google Calendar",
    desc: "Les visites proposées et confirmées par Wafy s'ajoutent directement à votre agenda Google Calendar.",
    glyph: <GoogleCalendarIcon className="h-7 w-7" />,
  },
  {
    name: "Google Drive",
    desc: "Vos brochures, plans et documents stockés sur Google Drive sont envoyés au prospect au bon moment.",
    glyph: <GoogleDriveIcon className="h-7 w-7" />,
  },
];

const colors: Record<string, string> = {
  "Facebook Messenger": messengerColor,
  "Instagram Direct Message": instagramColor,
  Gmail: gmailColor,
  "Google Calendar": gcalColor,
};

const IntegrationsSection = () => (
  <section className="section-padding bg-background border-y border-border" id="integrations">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        className="text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">Intégrations</p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Wafy Immo se branche sur <span className="text-gradient">vos outils</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Aucun nouveau logiciel à apprendre : Wafy Immo vient travailler là où vous êtes déjà, sur vos canaux de messagerie et vos outils du quotidien.
        </p>
      </motion.div>

      <motion.div
        className="rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white"
          style={{ background: whatsappColor }}
        >
          <WhatsAppIcon className="h-8 w-8" />
        </span>
        <div>
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h3 className="text-xl md:text-2xl font-bold">Votre numéro, votre WhatsApp</h3>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              WhatsApp Business compatible
            </span>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            Connectez votre numéro WhatsApp Business existant en scannant un QR code. Wafy répond à vos prospects depuis ce numéro, et vous gardez votre application et vos discussions.
          </p>
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {integrations.map((item, i) => (
          <motion.div
            key={item.name}
            className="rounded-xl border border-border bg-card p-5 flex gap-4 items-start hover:border-primary/40 hover:shadow-md transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <span
              className="shrink-0 mt-0.5"
              style={{ color: colors[item.name] }}
              aria-hidden="true"
            >
              {item.glyph}
            </span>
            <div>
              <h4 className="font-bold mb-1">{item.name}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="mt-8 text-sm text-muted-foreground text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Une intégration qui vous manque ? Wafy Immo se branche aussi sur votre CRM et vos outils existants.
      </motion.p>
    </div>
  </section>
);

export default IntegrationsSection;
