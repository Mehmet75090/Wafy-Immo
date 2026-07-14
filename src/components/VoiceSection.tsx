import { motion } from "framer-motion";
import { Mic, Languages, Heart } from "lucide-react";
import { useCountry } from "@/contexts/CountryContext";
import whatsappAgentImg from "@/assets/wafy-whatsapp-agent.png.asset.json";

const COUNTRY_PREPOSITION: Record<string, string> = {
  MA: "Au Maroc",
  TN: "En Tunisie",
  CI: "En Côte d'Ivoire",
  SN: "Au Sénégal",
};

const args = [
  {
    icon: Mic,
    title: "Plus rapide, plus fluide, plus humain",
    text: "Le vocal est le réflexe naturel sur WhatsApp. Répondre en texte uniquement, c'est imposer un effort à vos prospects.",
  },
  {
    icon: Languages,
    title: "Darija, français, wolof — et plus",
    text: "Vos prospects choisissent la langue, Wafy Immo s'adapte. Des packs additionnels (anglais, espagnol ...) sont disponibles à la carte.",
  },
  {
    icon: Heart,
    title: "Une relation plus humaine",
    text: "Une voix chaleureuse inspire confiance là où un texte reste froid. Vos leads se sentent écoutés dès le premier message.",
  },
];

const VoiceSection = () => {
  const { country } = useCountry();
  const prep = COUNTRY_PREPOSITION[country.code] ?? "Au Maroc";

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Wafy Immo parle aussi <span className="text-gradient">la langue de vos prospects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {prep}, vos prospects ne tapent pas toujours — ils parlent aussi. Wafy Immo leur répond en vocal, dans leur langue.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left arg */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[args[0], args[1]].map((a, i) => {
              const Icon = a.icon;
              return (
                <div
                  key={i}
                  className={`p-6 rounded-2xl bg-card border border-border ${
                    i === 1 ? "hidden lg:block" : ""
                  }`}
                >
                  <Icon className="w-7 h-7 text-primary mb-3" />
                  <h3 className="font-bold mb-2">{a.title}</h3>
                  <p className="text-sm text-muted-foreground">{a.text}</p>
                </div>
              );
            })}
          </motion.div>

          {/* WhatsApp agent illustration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto w-full max-w-sm"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-border bg-white">
              <img
                src={whatsappAgentImg.url}
                alt="Wafy Pro Agent IA sur WhatsApp - conversation multilingue"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right arg */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[args[1], args[2]].map((a, i) => {
              const Icon = a.icon;
              return (
                <div
                  key={i}
                  className={`p-6 rounded-2xl bg-card border border-border ${
                    i === 0 ? "lg:hidden" : ""
                  }`}
                >
                  <Icon className="w-7 h-7 text-primary mb-3" />
                  <h3 className="font-bold mb-2">{a.title}</h3>
                  <p className="text-sm text-muted-foreground">{a.text}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VoiceSection;
