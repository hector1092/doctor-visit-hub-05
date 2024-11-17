import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ServicesCarousel from "../components/ServicesCarousel";
import { motion } from "framer-motion";
import ContactButtons from "../components/ContactButtons";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import TextCarousel from "../components/TextCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#B7E4F9]">
      <Navigation />
      <div className="pt-16">
        <Hero />
        
        {/* Text Carousel Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-20 relative bg-[#B7E4F9]/50"
        >
          <div className="container mx-auto px-4">
            <div className="relative">
              <TextCarousel />
            </div>
          </div>
        </motion.section>

        {/* Services Carousel Section */}
        <section className="py-20 bg-[#B7E4F9]/30">
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

        {/* Testimonials Section */}
        <TestimonialsCarousel />

        <Footer />
        <ContactButtons />
      </div>
    </div>
  );
};

export default Index;