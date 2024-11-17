import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ServicesCarousel from "../components/ServicesCarousel";
import { motion } from "framer-motion";
import ContactButtons from "../components/ContactButtons";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import UnionsCarousel from "../components/UnionsCarousel";
import TextCarousel from "../components/TextCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F9FF] to-[#E0F2FE]">
      <Navigation />
      <div className="pt-16">
        <Hero />
        
        {/* Text Carousel Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-20 relative bg-gradient-to-br from-primary/5 to-secondary/5"
        >
          <div className="container mx-auto px-4">
            <div className="relative">
              <TextCarousel />
            </div>
          </div>
        </motion.section>

        {/* Services Carousel Section */}
        <section className="py-20 bg-[#f4faff]">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-center mb-12 text-gray-800"
            >
              خدمتنا المميزة
            </motion.h2>
            <ServicesCarousel />
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 bg-primary">
          <UnionsCarousel />
        </section>

        {/* Testimonials Section */}
        <TestimonialsCarousel />

        <Footer />
        <ContactButtons />
      </div>
    </div>
  );
};

export default Index;