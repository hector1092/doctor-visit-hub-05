import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Stethoscope, Phone, Activity, FileHeart } from 'lucide-react';

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
    title: "الأشعة المنزلية",
    description: "خدمات الأشعة والتصوير الطبي في منزلك",
    icon: FileHeart,
  },
];

const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-[300px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center w-full max-w-md mx-auto px-4"
        >
          {(() => {
            const Service = services[currentIndex];
            const Icon = Service.icon;
            return (
              <div className="flex flex-col items-center gap-4 bg-white/20 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{Service.title}</h3>
                <p className="text-white/90 text-lg font-medium">{Service.description}</p>
              </div>
            );
          })()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ServicesCarousel;