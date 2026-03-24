import { LanguageProvider } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <LanguageProvider>
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <TestimonialsSection />
    <ContactSection />
    <Footer />
  </LanguageProvider>
);

export default Index;
