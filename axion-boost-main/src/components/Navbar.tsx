import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const navKeys = [
  { key: "nav.inicio", href: "#inicio" },
  { key: "nav.servicios", href: "#servicios" },
  { key: "nav.nosotros", href: "#nosotros" },
  { key: "nav.testimonios", href: "#testimonios" },
  { key: "nav.contacto", href: "#contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-card py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src="/images/axion-logo.png"
            alt="Axion Web Development"
            className="h-10 w-10 object-contain"
          />
          <span
            className={`font-heading text-xl font-bold transition-colors ${
              scrolled ? "text-primary" : "text-primary-foreground"
            }`}
          >
            AXION
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navKeys.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  scrolled ? "text-foreground" : "text-primary-foreground/80"
                }`}
              >
                {t(link.key)}
              </a>
            </li>
          ))}
          <li>
            <LanguageSwitcher scrolled={scrolled} />
          </li>
          <li>
            <a
              href="#contacto"
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-all hover:opacity-90"
            >
              {t("nav.cta")}
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-card border-t border-border px-6 py-6"
          >
            <ul className="flex flex-col gap-4">
              {navKeys.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-foreground font-medium text-base"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
              <li>
                <LanguageSwitcher scrolled={true} />
              </li>
              <li>
                <a
                  href="#contacto"
                  onClick={() => setOpen(false)}
                  className="inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground"
                >
                  {t("nav.cta")}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
