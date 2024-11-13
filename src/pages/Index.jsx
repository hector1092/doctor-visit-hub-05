import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ServicesCarousel from "../components/ServicesCarousel";
import ServiceCard from "../components/ServiceCard";
import { Stethoscope, Phone, Activity, Heart, UserRound, FileHeart, TestTubes, Syringe } from "lucide-react";
import ParallaxSection from "../components/ParallaxSection";
import UnionsCarousel from "../components/UnionsCarousel";
import ContactButtons from "../components/ContactButtons";
import { motion } from "framer-motion";
import TestimonialsCarousel from "../components/TestimonialsCarousel";

const services = [
  {
    title: "زيارة طبيب منزلية",
    description: "خدمة زيارة الطبيب للمنزل متوفرة على مدار الساعة",
    icon: Stethoscope,
  },
  {
    title: "استشارات طبية هاتفية",
    description: "استشر طبيبك عن بعد بكل سهولة",
    icon: Phone,
  },
  {
    title: "العلاج الطبيعي",
    description: "جلسات علاج طبيعي متخصصة في منزلك",
    icon: Activity,
  },
  {
    title: "التمريض المنزلي",
    description: "رعاية تمريضية متكاملة في منزلك",
    icon: Heart,
  },
  {
    title: "رعاية المسنين",
    description: "عناية خاصة وشاملة لكبار السن",
    icon: UserRound,
  },
  {
    title: "الأشعة المنزلية",
    description: "خدمات الأشعة والتصوير الطبي في منزلك",
    icon: FileHeart,
  },
  {
    title: "التحاليل المنزلية",
    description: "سحب عينات وإجراء التحاليل في منزلك",
    icon: TestTubes,
  },
  {
    title: "الحقن والمحاليل",
    description: "خدمات الحقن والمحاليل الوريدية في منزلك",
    icon: Syringe,
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F9FF] to-[#E0F2FE]">
      <Navigation />
      <div className="pt-16">
        <Hero />
        
        {/* Services Section */}
        <section className="py-20 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-center mb-12 text-gray-800"
            >
              خدماتنا
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                  />
                </motion.div>
              ))}
            </motion.div>
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

        {/* Unions Carousel Section */}
        <ParallaxSection className="py-20">
          <UnionsCarousel />
        </ParallaxSection>

        {/* Services Carousel Section */}
        <section className="py-20 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">خدمات متميزة</h2>
            <ServicesCarousel />
          </div>
        </section>

        <Footer />
        <ContactButtons />
      </div>
    </div>
  );
};

export default Index;