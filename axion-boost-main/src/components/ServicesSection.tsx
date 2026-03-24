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
import { useLanguage } from "@/i18n/LanguageContext";

const serviceKeys = [
  { icon: Globe, titleKey: "services.web.title", descKey: "services.web.desc" },
  { icon: ShoppingCart, titleKey: "services.ecommerce.title", descKey: "services.ecommerce.desc" },
  { icon: QrCode, titleKey: "services.qr.title", descKey: "services.qr.desc" },
  { icon: BarChart3, titleKey: "services.marketing.title", descKey: "services.marketing.desc" },
  { icon: Smartphone, titleKey: "services.apps.title", descKey: "services.apps.desc" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="servicios" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            {t("services.label")}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            {t("services.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("services.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {serviceKeys.map((s, i) => (
            <motion.div
              key={s.titleKey}
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
                {t(s.titleKey)}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {t(s.descKey)}
              </p>
            </motion.div>
          ))}

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
                {t("services.security.new")}
              </span>
              <h3 className="font-heading text-xl font-semibold mb-3">
                {t("services.security.title")}
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed text-sm">
                {t("services.security.desc")}
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center bg-secondary rounded-2xl p-8 max-w-3xl mx-auto"
        >
          <p className="text-muted-foreground text-sm leading-relaxed">
            <strong className="text-foreground">{t("services.pricing.label")}</strong>{" "}
            {t("services.pricing.text")}{" "}
            <a href="#contacto" className="text-accent font-semibold hover:underline">
              {t("services.pricing.cta")}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
