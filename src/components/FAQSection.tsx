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
          Dans les deux cas, Wafy Immo fonctionne de la même manière. C'est juste une
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
  {
    q: "Comment choisir mon plan ?",
    a: (
      <div className="space-y-4">
        <p>
          Le bon plan dépend du volume de conversations entrantes que vous gérez chaque mois
          (formulaires, WhatsApp, Messenger, etc.).
        </p>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted/60">
              <tr className="text-left text-foreground">
                <th className="px-3 py-2 font-semibold">Plan</th>
                <th className="px-3 py-2 font-semibold">Volume</th>
                <th className="px-3 py-2 font-semibold">Mensuel</th>
                <th className="px-3 py-2 font-semibold">Annuel /mois</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-3 py-2 font-semibold text-foreground">Essentiel</td>
                <td className="px-3 py-2">≤ 300 conv./mois</td>
                <td className="px-3 py-2">5 500 MAD</td>
                <td className="px-3 py-2 text-primary font-semibold">3 600 MAD</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-semibold text-foreground">Business</td>
                <td className="px-3 py-2">≤ 1 500 conv./mois</td>
                <td className="px-3 py-2">10 500 MAD</td>
                <td className="px-3 py-2 text-primary font-semibold">6 750 MAD</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-semibold text-foreground">Premium</td>
                <td className="px-3 py-2">≤ 3 000 conv./mois</td>
                <td className="px-3 py-2">15 000 MAD</td>
                <td className="px-3 py-2 text-primary font-semibold">9 900 MAD</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="space-y-1.5 text-sm">
          <li>
            👉 <span className="font-semibold text-foreground">Essentiel</span> — agence en
            démarrage ou petit volume de leads.
          </li>
          <li>
            👉 <span className="font-semibold text-foreground">Business</span> — choix le plus
            courant : qualification + relances WhatsApp + RDV automatique.
          </li>
          <li>
            👉 <span className="font-semibold text-foreground">Premium</span> — gros volume,
            multi-programmes, reporting avancé avec recommandations.
          </li>
        </ul>
        <p className="text-sm italic">
          Pas sûr ? Notre équipe vous aide à dimensionner en 15 minutes — sans engagement.
        </p>
      </div>
    ),
  },
  {
    q: "Que se passe-t-il si je dépasse mon quota de conversations ?",
    a: (
      <div className="space-y-4">
        <p>
          Votre service ne s'arrête pas. Vous recevez une alerte et vous pouvez acheter un pack
          supplémentaire à la volée :
        </p>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted/60">
              <tr className="text-left text-foreground">
                <th className="px-3 py-2 font-semibold">Pack</th>
                <th className="px-3 py-2 font-semibold">Conversations</th>
                <th className="px-3 py-2 font-semibold">Prix</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-3 py-2 font-semibold text-foreground">Pack S</td>
                <td className="px-3 py-2">+100 conv.</td>
                <td className="px-3 py-2">1 400 MAD</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-semibold text-foreground">Pack M</td>
                <td className="px-3 py-2">+300 conv.</td>
                <td className="px-3 py-2">3 600 MAD</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-semibold text-foreground">Pack L</td>
                <td className="px-3 py-2">+500 conv.</td>
                <td className="px-3 py-2">5 500 MAD</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-semibold text-foreground">Pack XL</td>
                <td className="px-3 py-2">+1 000 conv.</td>
                <td className="px-3 py-2">9 000 MAD</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm">
          💡 <span className="font-semibold text-foreground">Bon à savoir :</span> si vous
          achetez un pack M ou L deux mois consécutifs, l'upgrade vers le plan supérieur est
          souvent plus économique. Notre équipe vous préviendra avant que vous surpayiez.
        </p>
      </div>
    ),
  },
  {
    q: "Puis-je changer de plan en cours d'année ?",
    a: (
      <div className="space-y-3">
        <p>
          <span className="font-semibold text-foreground">
            Vous pouvez upgrader à tout moment.
          </span>{" "}
          Voici ce que ça coûte selon votre plan actuel :
        </p>
        <ul className="space-y-2">
          <li>
            <span className="font-semibold text-foreground">Essentiel → Business :</span>{" "}
            différence de 3 150 MAD/mois, proratisée sur les mois restants.
          </li>
          <li>
            <span className="font-semibold text-foreground">Business → Premium :</span>{" "}
            différence de 3 150 MAD/mois, proratisée sur les mois restants.
          </li>
          <li>
            <span className="font-semibold text-foreground">Essentiel → Premium :</span>{" "}
            différence de 6 300 MAD/mois, proratisée sur les mois restants.
          </li>
        </ul>
        <p className="text-sm italic">
          Le downgrade s'applique uniquement au renouvellement annuel.
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
