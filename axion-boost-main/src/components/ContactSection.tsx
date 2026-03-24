import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState, FormEvent } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            {t("contact.label")}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Phone size={18} className="text-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{t("contact.whatsapp")}</p>
                <a href="https://wa.me/34607019436" className="text-muted-foreground text-sm hover:text-accent transition-colors">
                  +34 607 01 94 36
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{t("contact.email")}</p>
                <a href="mailto:axionweb.es@gmail.com" className="text-muted-foreground text-sm hover:text-accent transition-colors">
                  axionweb.es@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{t("contact.location")}</p>
                <p className="text-muted-foreground text-sm">{t("contact.locationValue")}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="bg-card rounded-2xl p-12 shadow-card border border-border/50 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Send size={28} className="text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {t("contact.sent")}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t("contact.sentSub")}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-2xl p-8 shadow-card border border-border/50 flex flex-col gap-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      {t("contact.name")}
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder={t("contact.namePlaceholder")}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      {t("contact.emailLabel")}
                    </label>
                    <input
                      required
                      type="email"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder={t("contact.emailPlaceholder")}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    {t("contact.service")}
                  </label>
                  <select
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    defaultValue=""
                  >
                    <option value="" disabled>{t("contact.serviceDefault")}</option>
                    <option>{t("contact.serviceWeb")}</option>
                    <option>{t("contact.serviceShop")}</option>
                    <option>{t("contact.serviceQR")}</option>
                    <option>{t("contact.serviceMarketing")}</option>
                    <option>{t("contact.serviceSecurity")}</option>
                    <option>{t("contact.serviceOther")}</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    {t("contact.message")}
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder={t("contact.messagePlaceholder")}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-accent py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:opacity-90"
                >
                  {t("contact.submit")}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
