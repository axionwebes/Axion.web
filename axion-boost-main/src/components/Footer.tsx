const Footer = () => (
  <footer className="bg-primary py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          {/* CAMBIADO: Ahora usa favicon.png que es el que tienes */}
          <img
            src="/favicon.png" 
            alt="Axion"
            className="h-8 w-8 object-contain"
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
        {/* CEO con Tareq Elgharsa resaltado */}
        <div className="text-right">
          <p className="text-primary-foreground/40 text-xs">
            © {new Date().getFullYear()} Axion Web Development
          </p>
          <p className="text-primary-foreground/60 text-[10px] font-bold mt-1 uppercase tracking-widest">
            CEO Tareq Elgharsa
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
