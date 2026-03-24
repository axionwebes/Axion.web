import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const testimonialKeys = [
  { nameKey: "testimonials.t1.name", roleKey: "testimonials.t1.role", textKey: "testimonials.t1.text" },
  { nameKey: "testimonials.t2.name", roleKey: "testimonials.t2.role", textKey: "testimonials.t2.text" },
  { nameKey: "testimonials.t3.name", roleKey: "testimonials.t3.role", textKey: "testimonials.t3.text" },
];

const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="testimonios" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            {t("testimonials.label")}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialKeys.map((tk, i) => (
            <motion.div
              key={tk.nameKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border/50"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 text-sm italic">
                "{t(tk.textKey)}"
              </p>
              <div>
                <p className="font-heading font-semibold text-foreground">{t(tk.nameKey)}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{t(tk.roleKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
