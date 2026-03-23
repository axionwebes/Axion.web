import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";

const values = [
  "Diseño moderno y profesional",
  "Webs rápidas y optimizadas para SEO",
  "Atención personalizada y cercana",
  "Soluciones adaptadas a cada negocio",
  "Soporte técnico continuo",
  "Resultados orientados a conversión",
];

const AboutSection = () => (
  <section id="nosotros" className="py-24 lg:py-32 bg-secondary/50">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-elevated">
            <img
              src={aboutImg}
              alt="Equipo Axion Web Development trabajando en proyecto"
              className="w-full h-auto object-cover"
              loading="lazy"
              width={1280}
              height={854}
            />
          </div>
          {/* Stats badge */}
          <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-card rounded-2xl p-6 shadow-elevated border border-border/50">
            <div className="text-center">
              <span className="font-heading text-3xl font-bold text-accent">+50</span>
              <p className="text-muted-foreground text-xs mt-1">Proyectos<br />realizados</p>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Sobre Axion
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-6">
            Tu socio digital para crecer en internet
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Somos un equipo de profesionales especializados en desarrollo web,
            diseño y marketing digital. Ayudamos a negocios locales y pymes a
            construir una presencia online sólida que transmita confianza y
            genere resultados reales.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Creemos que una web debe ser mucho más que un escaparate: debe ser
            tu mejor herramienta de ventas. Por eso, cada proyecto se diseña
            con un enfoque claro en conversión, rendimiento y experiencia de
            usuario.
          </p>

          <ul className="grid sm:grid-cols-2 gap-3">
            {values.map((v) => (
              <li key={v} className="flex items-center gap-2 text-foreground text-sm">
                <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
                {v}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
