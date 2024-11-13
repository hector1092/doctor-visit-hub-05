import { motion } from "framer-motion";
import { Stethoscope, Phone, Activity, Heart, UserRound, FileHeart, TestTubes, Syringe } from "lucide-react";
import { Button } from "./ui/button";

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

const ServicesCarousel = () => {
  return (
    <div className="bg-gradient-to-b from-[#f4faff] to-white min-h-screen py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-[#333]">خدمتنا المميزة</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-[#28a745]/10 rounded-full flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-[#28a745]" />
                </div>
                <h3 className="text-xl font-semibold text-[#333]">{service.title}</h3>
                <p className="text-[#555] leading-relaxed">{service.description}</p>
                <Button 
                  className="mt-4 bg-[#28a745] hover:bg-[#218838] transition-colors duration-300"
                >
                  احجز الآن
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesCarousel;