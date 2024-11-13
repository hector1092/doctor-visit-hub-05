import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ServicesCarousel from "../components/ServicesCarousel";
import { motion } from "framer-motion";
import ContactButtons from "../components/ContactButtons";
import TestimonialsCarousel from "../components/TestimonialsCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F9FF] to-[#E0F2FE]">
      <Navigation />
      <div className="pt-16">
        <Hero />
        
        {/* Services Carousel Section */}
        <section className="py-20 bg-[#f4faff]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">خدمتنا المميزة</h2>
            <ServicesCarousel />
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4"
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">من نحن</h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                موقع زيارة طبيب هو المنصة الأولى في مصر التي تعمل على تنظيم وتوفير الرعاية الطبية والصحية، خاصة لكبار السن والحالات المزمنة. نحن نعمل كمنظومة رائدة لتنسيق الخدمات الصحية المتكاملة في المنزل بين العميل ومزودي الخدمة. نقدم خدماتنا من خلال زيارات طبية منزلية أو استشارات طبية عن بُعد، وننفرد بميزة متابعة عملائنا مدى الحياة. نسعى باستمرار لتحسين جودة الخدمة الصحية المقدمة، بهدف الارتقاء بجميع قطاعات الرعاية الصحية في مصر.
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