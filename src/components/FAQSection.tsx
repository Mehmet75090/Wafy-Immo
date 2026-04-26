import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Est-ce que je dois utiliser mon propre Business Manager Facebook ?",
    a: (
      <div className="space-y-3">
        <p className="font-medium text-foreground">Vous avez le choix :</p>
        <p>
          <span className="font-semibold text-foreground">Option 1 — Vous gardez la main :</span>{" "}
          vous utilisez votre propre Business Manager Facebook. Vous restez propriétaire de vos
          campagnes, vos données et vos audiences. Recommandé si vous avez déjà une structure
          publicitaire en place.
        </p>
        <p>
          <span className="font-semibold text-foreground">Option 2 — On s'occupe de tout :</span>{" "}
          Wafy Immo gère le Business Manager pour vous. Idéal si vous démarrez ou si vous ne
          souhaitez pas gérer la partie technique.
        </p>
        <p className="text-sm italic">
          Dans les deux cas, l'assistant IA fonctionne de la même manière. C'est juste une
          question de qui tient le volant côté Meta.
        </p>
      </div>
    ),
  },
  {
    q: "Qui s'occupe de connecter WhatsApp à mon CRM ?",
    a: (
      <div className="space-y-3">
        <p>
          Notre équipe technique gère l'intégration de A à Z.{" "}
          <span className="font-semibold text-foreground">
            Vous n'avez rien à faire côté technique.
          </span>
        </p>
        <p>
          <span className="font-semibold text-foreground">Condition requise :</span> votre CRM
          doit faire partie des solutions compatibles. Nous intégrons actuellement :
        </p>
        <ul className="space-y-1 pl-1">
          <li>✅ Navision</li>
          <li>✅ Geciomo</li>
          <li>✅ Cegid</li>
          <li>✅ (et d'autres — contactez-nous pour vérifier la compatibilité de votre outil)</li>
        </ul>
        <p className="text-sm">
          💡 Vous n'avez pas encore de CRM ou le vôtre n'est pas compatible ? Parlez-en à notre
          équipe, on vous oriente vers une solution adaptée.
        </p>
      </div>
    ),
  },
  {
    q: "Est-ce que je dois avoir mon propre numéro WhatsApp Business ?",
    a: (
      <div className="space-y-3">
        <p>
          <span className="font-semibold text-foreground">Non.</span> Wafy Immo met à disposition
          le numéro WhatsApp — vous n'avez rien à créer ni à configurer de votre côté.
        </p>
        <p>
          Toutes les conversations passent par notre infrastructure, mais l'assistant répond
          entièrement <span className="font-semibold text-foreground">sous votre marque</span> :
          votre nom d'agence, votre logo, votre ton. Pour votre prospect, il parle à votre
          agence — pas à Wafy Immo.
        </p>
        <p className="text-sm">
          💡 <span className="font-semibold text-foreground">Résultat :</span> une expérience
          100% branded pour votre client, sans la complexité technique pour vous.
        </p>
      </div>
    ),
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-muted/30" id="faq">
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
          <p className="text-muted-foreground">
            Tout ce qu'il faut savoir avant de démarrer
          </p>
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
                value={`item-${idx}`}
                className="rounded-xl border border-border bg-card px-5 data-[state=open]:border-primary/40 data-[state=open]:shadow-md transition-all"
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
};

export default FAQSection;
