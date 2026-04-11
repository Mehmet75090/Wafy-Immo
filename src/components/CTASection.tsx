import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle2, ArrowRight } from "lucide-react";

const benefits = [
  "Qualifiez 100% de vos leads automatiquement",
  "Connectez votre CRM en quelques clics",
  "Créez des rappels et relances sans effort",
  "Concentrez-vous sur les leads qui convertissent",
];

const CTASection = () => (
  <section className="section-padding bg-wafy-dark-gradient relative overflow-hidden" id="cta">
    {/* Decorative */}
    <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl -translate-y-1/2 translate-x-1/2" />

    <div className="container mx-auto max-w-4xl relative z-10">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
          Qualification Leads 24/7
        </span>

        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-primary-foreground leading-tight">
          Prêt à transformer<br />votre <span className="text-gradient">prospection</span> ?
        </h2>

        <ul className="space-y-3 mb-10 inline-block text-left">
          {benefits.map((b) => (
            <li key={b} className="flex items-center gap-3 text-primary-foreground/80">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="cta" size="lg" className="px-10 py-7" asChild>
            <a href="https://wa.me/212600000000" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2" /> Démarrer le pilote
            </a>
          </Button>
          <Button variant="hero-outline" size="lg" className="px-10 py-7" asChild>
            <a href="mailto:contact@wafypro.com">
              Demander une démo <ArrowRight className="ml-2" />
            </a>
          </Button>
        </div>

        <p className="text-primary-foreground/40 text-sm mt-6">
          Setup offert pour les 10 premiers promoteurs. Sans engagement.
        </p>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
