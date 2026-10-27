import metaTechProvider from "@/assets/meta-tech-provider.png.asset.json";

const FooterSection = () => (
  <footer className="py-10 px-6 bg-card border-t border-border">
    <div className="container mx-auto max-w-6xl flex flex-col items-center gap-6">
      <p className="text-xs md:text-sm text-muted-foreground text-center leading-relaxed max-w-4xl">
        © 2026 WaFy Immo — Une marque de BIRDEV | SARL AU
      </p>
      <div className="flex items-center justify-center">
        <img
          src={metaTechProvider.url}
          alt="Meta Tech Provider"
          className="h-6"
          loading="lazy"
        />
      </div>
    </div>
  </footer>
);

export default FooterSection;
