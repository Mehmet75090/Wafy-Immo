import { motion } from "framer-motion";
import jpoEventAsset from "@/assets/wafy-event-jpo.webp.asset.json";

const JpoCampaignSection = () => (
  <section className="section-padding">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-balance">
          Journées Portes Ouvertes en <span className="text-gradient">avant-première</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
          Invitez vos prospects en exclusivité à des JPO via des campagnes WhatsApp avec un taux
          d'ouverture de 90 % et suivez leur retour ou décision.
        </p>
      </motion.div>

      {/* Wafy Event visual */}
      <motion.div
        className="rounded-2xl border border-border bg-background shadow-xl overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <img
          src={jpoEventAsset.url}
          alt="Interface Wafy Event : campagne d'invitation WhatsApp pour des Journées Portes Ouvertes, avec message d'invitation, import de la base de contacts et lancement de la campagne"
          className="w-full h-auto block"
          loading="lazy"
        />
      </motion.div>
    </div>
  </section>
);

export default JpoCampaignSection;
