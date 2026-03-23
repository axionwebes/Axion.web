import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    id="inicio"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    {/* Background image */}
    <img
      src={heroBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-hero" />

    <div className="relative z-10 container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-accent-foreground/90 mb-6 uppercase">
          Desarrollo Web &middot; Marketing Digital &middot; Seguridad
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground mb-6">
          Impulsamos tu negocio con{" "}
          <span className="text-gradient">soluciones digitales</span> que
          convierten
        </h1>
        <p className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Diseñamos páginas web profesionales, tiendas online y sistemas de
          seguridad para que tu empresa destaque, atraiga clientes y crezca de
          forma real.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-all hover:opacity-90 shadow-elevated"
          >
            Solicitar Presupuesto Gratis
            <ArrowRight size={18} />
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/20 px-8 py-4 text-base font-medium text-primary-foreground/90 transition-all hover:bg-primary-foreground/10"
          >
            Ver Servicios
          </a>
        </div>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.a
      href="#servicios"
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50"
    >
      <ChevronDown size={28} />
    </motion.a>
  </section>
);

export default HeroSection;
