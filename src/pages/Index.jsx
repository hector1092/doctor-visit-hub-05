import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ServicesCarousel from "../components/ServicesCarousel";
import ServiceCard from "../components/ServiceCard";
import { Stethoscope, Phone, Activity, Heart, UserRound, FileHeart, TestTubes, Syringe } from "lucide-react";
import ParallaxSection from "../components/ParallaxSection";
import UnionsCarousel from "../components/UnionsCarousel";
import ContactButtons from "../components/ContactButtons";

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

        <Footer />
        <ContactButtons />
      </div>
    </div>
  );
};

export default Index;