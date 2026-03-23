import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    role: "Propietaria — Restaurante La Brasa",
    text: "Desde que Axion rediseñó nuestra web y nos instaló el menú QR, las reservas online han aumentado un 40%. El equipo es muy profesional y siempre disponible.",
    stars: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "CEO — FitZone Gimnasio",
    text: "Necesitábamos una web moderna que reflejara nuestra marca. Axion entendió perfectamente lo que buscábamos y el resultado superó nuestras expectativas.",
    stars: 5,
  },
  {
    name: "Laura Martínez",
    role: "Fundadora — Boutique Luna",
    text: "Montar nuestra tienda online con Axion fue la mejor decisión. En solo 3 meses las ventas online ya representan el 30% de nuestra facturación.",
    stars: 5,
  },
];

const TestimonialsSection = () => (
  <section id="testimonios" className="py-24 lg:py-32">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">
          Testimonios
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
          Lo que dicen nuestros clientes
        </h2>
        <p className="text-muted-foreground text-lg">
          La satisfacción de nuestros clientes es nuestra mejor carta de
          presentación.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border/50"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.stars }).map((_, j) => (
                <Star key={j} size={16} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground leading-relaxed mb-6 text-sm italic">
              "{t.text}"
            </p>
            <div>
              <p className="font-heading font-semibold text-foreground">{t.name}</p>
              <p className="text-muted-foreground text-xs mt-0.5">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
