import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "محمد علي",
    text: "بجد استفدت كتير من خدمة العلاج الطبيعي في البيت، الخدمة كانت فوق الممتازة!",
  },
  {
    name: "أحمد مصطفى",
    text: "خدمة محترمة واستجابة سريعة، أنصح أي حد يجربها.",
  },
  {
    name: "سارة إبراهيم",
    text: "أحسن تجربة طبية عشتها، فريق العمل متعاون ومحترف بجد.",
  },
  {
    name: "ليلى حسن",
    text: "تجربة رائعة! الخدمة احترافية والتعامل في منتهى الذوق.",
  },
  {
    name: "خالد محمود",
    text: "حسيت براحتي فعلاً وأنا بتلقى الخدمة في بيتي.",
  },
  {
    name: "نور الدين حسن",
    text: "أفضل فريق طبي اتعاملت معاه، كفاءة ورعاية على أعلى مستوى.",
  },
  {
    name: "فاطمة عبد الله",
    text: "التنسيق كان سلس وفريق التمريض كان مهتم بكل التفاصيل.",
  },
  {
    name: "ياسين محمد",
    text: "الخدمات اللي بتقدمها الشركة مميزة جداً، أنصح أي حد بيها.",
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-[300px] py-16" style={{ backgroundColor: "#a7c1e6" }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">رأي عملائنا</h2>
        <div className="relative h-[200px] max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg h-full flex flex-col justify-center items-center text-center">
                <p className="text-lg text-gray-900 mb-6">{testimonials[currentIndex].text}</p>
                <p className="text-primary font-semibold">{testimonials[currentIndex].name}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;