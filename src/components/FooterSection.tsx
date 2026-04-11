import logo from "@/assets/logo.png";

const FooterSection = () => (
  <footer className="py-10 px-6 bg-card border-t border-border">
    <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
      <img src={logo} alt="WAFY PRO" className="h-8" />
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} WAFY PRO. Tous droits réservés.
      </p>
    </div>
  </footer>
);

export default FooterSection;
