import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ServicesCarousel from "../components/ServicesCarousel";
import { motion } from "framer-motion";
import ParallaxSection from "../components/ParallaxSection";
import UnionsCarousel from "../components/UnionsCarousel";
import ContactButtons from "../components/ContactButtons";
import TestimonialsCarousel from "../components/TestimonialsCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F9FF] to-[#E0F2FE]">
      <Navigation />
      <div className="pt-16">
        <Hero />
        
        {/* Services Carousel Section */}
        <ServicesCarousel />

        {/* Unions Carousel Section */}
        <ParallaxSection className="py-20">
          <UnionsCarousel />
        </ParallaxSection>

        {/* About Us Section */}
        <section id="about" className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4"
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">من نحن</h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                نحن نقدم خدمات طبية متميزة في منزلك، مع فريق من الأطباء المتخصصين والممرضين المؤهلين. 
                هدفنا هو توفير الراحة والعناية الطبية المتكاملة لجميع المرضى في منازلهم.
              </p>
            </div>
          </motion.div>
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