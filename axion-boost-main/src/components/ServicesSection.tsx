import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  QrCode,
  Shield,
  BarChart3,
  Smartphone,
} from "lucide-react";
import securityImg from "@/assets/security-cameras.jpg";

const services = [
  {
    icon: Globe,
    title: "Páginas Web Profesionales",
    desc: "Creamos webs modernas, rápidas y optimizadas para SEO que transmiten confianza y convierten visitantes en clientes reales.",
  },
  {
    icon: ShoppingCart,
    title: "Tiendas Online",
    desc: "E-commerce completo con carrito de compra, pasarela de pagos segura y gestión de productos para vender las 24 horas.",
  },
  {
    icon: QrCode,
    title: "Menús Digitales con QR",
    desc: "Menús interactivos accesibles desde cualquier móvil. Perfectos para restaurantes, bares y cafeterías que quieren modernizarse.",
  },
  {
    icon: BarChart3,
    title: "Marketing Digital",
    desc: "Estrategias de posicionamiento SEO, campañas de publicidad y gestión de redes sociales para atraer más clientes.",
  },
  {
    icon: Smartphone,
    title: "Aplicaciones Web",
    desc: "Soluciones web a medida con funcionalidades avanzadas: reservas, dashboards, automatización y más.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const ServicesSection = () => (
  <section id="servicios" className="py-24 lg:py-32">
    <div className="container mx-auto px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">
          Nuestros Servicios
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
          Todo lo que tu negocio necesita para crecer online
        </h2>
        <p className="text-muted-foreground text-lg">
          Ofrecemos soluciones digitales integrales adaptadas a cada tipo de
          negocio. Desde una web corporativa hasta una tienda online completa.
        </p>
      </motion.div>

      {/* Service cards grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="group rounded-2xl bg-card p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
              <s.icon size={24} />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
              {s.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {s.desc}
            </p>
          </motion.div>
        ))}

        {/* Security cameras — special card */}
        <motion.div
          custom={5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="group rounded-2xl bg-primary p-8 shadow-elevated text-primary-foreground border border-primary/50 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <img
              src={securityImg}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/20 text-accent mb-5">
              <Shield size={24} />
            </div>
            <span className="inline-block rounded-full bg-accent/20 text-accent text-xs font-semibold px-3 py-1 mb-4 uppercase tracking-wider">
              Nuevo
            </span>
            <h3 className="font-heading text-xl font-semibold mb-3">
              Cámaras de Seguridad
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed text-sm">
              Instalación profesional de sistemas de videovigilancia para
              interiores y exteriores. Protege tu negocio y tu hogar con
              cámaras de alta definición, visión nocturna y acceso remoto
              desde tu móvil. Seguridad, control y tranquilidad las 24 horas.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Pricing note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center bg-secondary rounded-2xl p-8 max-w-3xl mx-auto"
      >
        <p className="text-muted-foreground text-sm leading-relaxed">
          <strong className="text-foreground">Sobre nuestros precios:</strong>{" "}
          Todos los precios son orientativos y se ofrecen bajo consulta, ya que
          cada proyecto se adapta a las necesidades del cliente mediante un plan
          personalizado.{" "}
          <a href="#contacto" className="text-accent font-semibold hover:underline">
            Solicita tu presupuesto sin compromiso →
          </a>
        </p>
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
