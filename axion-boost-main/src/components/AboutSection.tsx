import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const valueKeys = [
  "about.value1",
  "about.value2",
  "about.value3",
  "about.value4",
  "about.value5",
  "about.value6",
];

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                alt="Equipo Axion Web Development"
                className="w-full h-auto object-cover"
                loading="lazy"
                width={1280}
                height={854}
              />
            </div>
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-card rounded-2xl p-6 shadow-elevated border border-border/50">
              <div className="text-center">
                <span className="font-heading text-3xl font-bold text-accent">+50</span>
                <p className="text-muted-foreground text-xs mt-1">
                  {t("about.projects")}<br />{t("about.projectsSub")}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              {t("about.label")}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-6">
              {t("about.title")}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              {t("about.p1")}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t("about.p2")}
            </p>

            <ul className="grid sm:grid-cols-2 gap-3">
              {valueKeys.map((key) => (
                <li key={key} className="flex items-center gap-2 text-foreground text-sm">
                  <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
                  {t(key)}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
