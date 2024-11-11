import Hero from "../components/Hero";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ServicesCarousel from "../components/ServicesCarousel";
import ServiceCard from "../components/ServiceCard";
import { Stethoscope, Phone, Activity, Heart, UserRound, FileHeart, TestTubes, Syringe } from "lucide-react";
import ParallaxSection from "../components/ParallaxSection";
import UnionsCarousel from "../components/UnionsCarousel";

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
    <div className="min-h-screen bg-gradient-to-b from-[#003366] to-[#001630]">
      <Navigation />
      <div className="pt-16">
        <Hero />
        
        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">خدماتنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Unions Carousel Section */}
        <ParallaxSection className="py-20">
          <UnionsCarousel />
        </ParallaxSection>

        {/* Services Carousel Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">خدمات متميزة</h2>
            <ServicesCarousel />
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">تواصل معنا</h2>
            <p className="text-xl mb-8 text-gray-600">نحن هنا لمساعدتك على مدار الساعة</p>
            <div className="flex justify-center gap-4">
              <a
                href="tel:01113939319"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
              >
                اتصل بنا
              </a>
              <a
                href="https://wa.me/01113939319"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
              >
                واتساب
              </a>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default Index;
