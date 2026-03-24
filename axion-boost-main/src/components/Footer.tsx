import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const navKeys = [
    { key: "nav.inicio", href: "#inicio" },
    { key: "nav.servicios", href: "#servicios" },
    { key: "nav.nosotros", href: "#nosotros" },
    { key: "nav.testimonios", href: "#testimonios" },
    { key: "nav.contacto", href: "#contacto" },
  ];

  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/images/axion-logo.png"
              alt="Axion"
              className="h-10 w-10 object-contain"
            />
            <span className="font-heading text-lg font-bold text-primary-foreground">
              AXION
            </span>
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            {navKeys.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors"
              >
                {t(link.key)}
              </a>
            ))}
          </nav>
          <p className="text-primary-foreground/40 text-xs">
            © {new Date().getFullYear()} {t("footer.copyright")} · {t("footer.ceo")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
