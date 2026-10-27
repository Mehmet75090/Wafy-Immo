import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Mes conversations WhatsApp restent-elles confidentielles ? Qui peut les lire chez Wafy ?",
    a: "Vos conversations ne sont pas publiques ni accessibles aux autres agences. L’agent IA analyse les échanges pour répondre à vos prospects. Un accès par l’équipe Wafy peut être nécessaire pour l’assistance technique, selon les autorisations et les règles de confidentialité applicables.",
  },
  {
    q: "Mon compte et les données de mes clients sont-ils sécurisés ?",
    a: "L’accès à votre espace nécessite une authentification. Les mesures de sécurité mises en place visent à protéger vos données et à limiter les accès aux personnes autorisées. Veillez également à choisir un mot de passe unique et à ne pas partager vos identifiants.",
  },
  {
    q: "L’agent IA répond-il uniquement à mes prospects immobiliers ou aussi à mes conversations personnelles ?",
    a: "Pour séparer vos échanges professionnels et personnels, nous vous recommandons de connecter un numéro dédié à votre activité immobilière. Vous pouvez également ajouter des numéros à votre liste d’exclusion pour que l’agent ne leur réponde pas.",
  },
  {
    q: "Puis-je désactiver l’agent à tout moment et reprendre moi-même une conversation ?",
    a: "Oui. Vous gardez la main : vous pouvez désactiver l’agent depuis votre tableau de bord et répondre directement à vos prospects sur WhatsApp. Vous pouvez aussi définir ses jours et horaires de fonctionnement.",
  },
  {
    q: "Si j’arrête Wafy Immo, puis-je déconnecter mon WhatsApp, récupérer mes données et demander leur suppression ?",
    a: "Vous pouvez demander la déconnexion de votre WhatsApp, la récupération de vos données et la suppression de votre compte en contactant l’équipe Wafy. Les modalités, les délais et les éventuelles obligations de conservation vous seront précisés lors de votre demande.",
  },
];

const AgentFAQSection = () => (
  <section className="section-padding scroll-mt-24 bg-muted/30 md:scroll-mt-28" id="faq">
    <div className="container mx-auto max-w-3xl">
      <motion.div
        className="mb-8 text-center md:mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          FAQ
        </p>
        <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
          Vos données, <span className="text-gradient">sous contrôle</span>
        </h2>
        <p className="text-muted-foreground">
          Confidentialité, sécurité et reprise de la main : ce qu’il faut savoir avant de démarrer.
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
              className="rounded-xl border border-border bg-card px-4 transition-all data-[state=open]:border-primary/40 data-[state=open]:shadow-md sm:px-5"
            >
              <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default AgentFAQSection;
