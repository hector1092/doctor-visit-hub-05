import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ServicesCarousel from "../components/ServicesCarousel";
import { motion } from "framer-motion";
import ContactButtons from "../components/ContactButtons";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import UnionsCarousel from "../components/UnionsCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F9FF] to-[#E0F2FE]">
      <Navigation />
      <div className="pt-16">
        <Hero />
        
        {/* Static Image Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-20"
        >
          <div className="container mx-auto px-4">
            <img
              src="/images/12.png"
              alt="Medical Service"
              className="w-full max-w-4xl mx-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            />
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

        {/* About Us Section */}
        <section id="about" className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4"
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">علاج طبيعي منزلي على أيدي متخصصين معتمدين</h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                جلسات علاج طبيعي بالمنزل تُعتبر واحدة من أبرز الخدمات التي يقدمها دكتوركير للخدمات الطبية المنزلية في مختلف أنحاء القاهرة الكبرى والجيزة بأعلى جودة وأفضل أسعار جلسات العلاج الطبيعي. حيث أننا، على عكس الكثير من مراكز العلاج الطبيعي الأخرى، نختار فقط دكاترة متخصصين ونحرص على التأكد من خبراتهم العملية وحصولهم على شهادات علمية من كليات العلاج الطبيعي المعتمدة. ونسعى كفريق عمل متكامل في هوس كير إلى تحسين جودة الخدمات المقدمة بشكل مستمر لتحقيق أفضل النتائج وأعلى مستويات رضا العملاء.
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