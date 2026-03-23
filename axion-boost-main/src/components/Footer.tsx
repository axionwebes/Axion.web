const Footer = () => (
  <footer className="bg-primary py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img
            src="/images/axion-logo.png"
            alt="Axion"
            className="h-8 w-8 object-contain brightness-0 invert"
          />
          <span className="font-heading text-lg font-bold text-primary-foreground">
            AXION
          </span>
        </div>
        <nav className="flex flex-wrap justify-center gap-6">
          {["Inicio", "Servicios", "Nosotros", "Testimonios", "Contacto"].map(
            (link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors"
              >
                {link}
              </a>
            )
          )}
        </nav>
        <p className="text-primary-foreground/40 text-xs">
          © {new Date().getFullYear()} Axion Web Development
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
