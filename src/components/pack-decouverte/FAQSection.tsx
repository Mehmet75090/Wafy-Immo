import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Qu'est-ce que le Pack Découverte ?",
    a: "Le Pack Découverte est une offre d'essai d'un mois sans engagement. Vous accédez à toutes les fonctionnalités du plan Pilote (qualification IA, scoring, dashboard) pour 2 800 MAD HT. C'est l'occasion de tester Wafy Immo sur vos propres leads sans risque.",
  },
  {
    q: "Puis-je annuler à tout moment ?",
    a: "Absolument. Le Pack Découverte est sans engagement. Vous pouvez arrêter à tout moment sans frais supplémentaires. Si vous souhaitez continuer, nous basculons automatiquement sur un plan mensuel ou annuel selon votre préférence.",
  },
  {
    q: "Combien de temps pour la mise en place ?",
    a: "La mise en place est ultra-rapide : 48h en moyenne. Cela inclut la configuration de votre agent IA, l'intégration WhatsApp, et la connexion à votre CRM si vous en avez un. Notre équipe technique vous accompagne à chaque étape.",
  },
  {
    q: "Est-ce que l'IA parle darija et français ?",
    a: "Oui ! L'agent Wafy Immo comprend et répond en darija, français et arabe classique. Vos prospects communiquent dans la langue de leur choix, et l'IA s'adapte instantanément.",
  },
  {
    q: "Que se passe-t-il après le mois d'essai ?",
    a: "À la fin du mois, vous recevez un rapport complet de performance. Vous pouvez alors choisir de continuer avec le plan Pilote (2 800 MAD/mois), passer au Business (5 500 MAD/mois) avec relances et RDV auto, ou au Premium (7 500 MAD/mois) pour les gros volumes. Aucune obligation.",
  },
  {
    q: "Quels outils s'intègrent avec Wafy Immo ?",
    a: "Wafy Immo s'intègre à tous les CRM disposant d'une API ouverte : HubSpot, Salesforce, NetSuite, et bien d'autres. Pour les CRM propriétaires (Navision, Cegid, Gecimmo…), notre équipe réalise une intégration sur mesure incluse dans le setup.",
  },
];

const FAQSection = () => (
  <section className="section-padding bg-card">
    <div className="container mx-auto max-w-3xl">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Questions <span className="text-gradient">fréquentes</span>
        </h2>
        <p className="text-muted-foreground">Tout ce qu'il faut savoir avant de démarrer</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((item, idx) => (
            <AccordionItem
              key={idx}
              value={`faq-${idx}`}
              className="rounded-xl border border-border bg-background px-5 data-[state=open]:border-primary/40 data-[state=open]:shadow-md transition-all"
            >
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
