import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/logo.png";
import FooterSection from "@/components/FooterSection";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-bold text-foreground mb-4">{title}</h2>
    <div className="space-y-3 text-muted-foreground leading-relaxed">{children}</div>
  </section>
);

const Row = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 py-2 border-b border-border/50">
    <dt className="font-semibold text-foreground">{label}</dt>
    <dd className="md:col-span-2 text-muted-foreground">{value}</dd>
  </div>
);

const MentionsLegales = () => {
  return (
    <main className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <nav className="flex items-center justify-between px-6 md:px-12 py-4">
          <Link to="/" className="flex flex-col items-center">
            <img src={logo} alt="WAFY PRO" className="h-10 md:h-12" />
            <span className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase -mt-1">
              Immobilier
            </span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Retour
          </Link>
        </nav>
      </header>

      <article className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Mentions légales</h1>
          <p className="text-muted-foreground mb-12">
            Informations légales relatives à l'éditeur et à l'hébergeur du site WafyPro.
          </p>

          <Section title="Éditeur du site">
            <dl>
              <Row label="Raison sociale" value="BIRDEV" />
              <Row label="Marque" value="WafyPro" />
              <Row label="Forme juridique" value="SARL à Associé Unique (SARL AU)" />
              <Row label="Capital social" value="10 000 MAD" />
              <Row label="Numéro RC" value="486725 — Tribunal de Commerce de Casablanca" />
              <Row label="ICE" value="002673969000034" />
              <Row
                label="Téléphone"
                value={
                  <a href="tel:+212708231845" className="hover:text-primary transition-colors">
                    +212 708 231 845
                  </a>
                }
              />
              <Row
                label="Email"
                value={
                  <a href="mailto:hello@wafypro.ma" className="hover:text-primary transition-colors">
                    hello@wafypro.ma
                  </a>
                }
              />
              <Row
                label="Siège social"
                value={
                  <address className="not-italic">
                    67 Rue Aziz Bellal<br />
                    2ème Étage, Bureau N°3<br />
                    Maarif, Casablanca<br />
                    Maroc
                  </address>
                }
              />
            </dl>
          </Section>

          <Section title="Hébergement">
            <p>Le site WAFY est hébergé par :</p>
            <div className="bg-card border border-border rounded-lg p-6 mt-2">
              <p className="font-semibold text-foreground mb-2">Nindohost</p>
              <address className="not-italic">
                66, Avenue Mohamed V, 4ème étage, N° 25<br />
                Tanger, Maroc<br />
                Tél : 0802 08 08 08<br />
                Email :{" "}
                <a href="mailto:support@nindohost.ma" className="hover:text-primary transition-colors">
                  support@nindohost.ma
                </a>
              </address>
            </div>
          </Section>

          <Section title="Propriété intellectuelle">
            <p>
              L'ensemble du contenu de ce site (textes, images, logos, graphismes, icônes, etc.) est la
              propriété exclusive de BIRDEV ou de ses partenaires et est protégé par les lois marocaines
              et internationales relatives à la propriété intellectuelle.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie
              des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf
              autorisation écrite préalable de BIRDEV.
            </p>
            <p>
              La marque WafyPro et son logo sont des marques déposées de BIRDEV. Toute utilisation non
              autorisée de ces marques est strictement interdite.
            </p>
          </Section>

          <Section title="Protection des données personnelles">
            <p>
              Conformément à la loi n° 09-08 relative à la protection des personnes physiques à l'égard du
              traitement des données à caractère personnel, vous disposez d'un droit d'accès, de
              rectification et de suppression des données vous concernant.
            </p>
            <p>
              Pour exercer ces droits ou pour toute question relative à la protection de vos données
              personnelles, vous pouvez nous contacter via le formulaire de contact disponible sur notre
              site.
            </p>
            <p>
              Les données collectées sont traitées de manière confidentielle et ne sont jamais cédées à
              des tiers sans votre consentement explicite.
            </p>
          </Section>

          <Section title="Limitation de responsabilité">
            <p>
              BIRDEV s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce
              site. Toutefois, BIRDEV ne peut garantir l'exactitude, la précision ou l'exhaustivité des
              informations mises à disposition sur ce site.
            </p>
            <p>
              En conséquence, BIRDEV décline toute responsabilité pour toute imprécision, inexactitude ou
              omission portant sur des informations disponibles sur ce site.
            </p>
          </Section>

          <Section title="Droit applicable">
            <p>
              Les présentes mentions légales sont régies par le droit marocain. En cas de litige, les
              tribunaux de Casablanca seront seuls compétents.
            </p>
          </Section>
        </div>
      </article>

      <FooterSection />
    </main>
  );
};

export default MentionsLegales;
