import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const textGroups = [
  {
    title: "برنامج علاجي للحالات التالية",
    items: [
      "الشلل بأنواعه شاملا الجلطات الدماغية",
      "كبار السن وحالات الشلل الرعاش",
      "حالات الـ (MS) وأمراض الأعصاب (Neuro)",
      "إصابات العمود الفقري والانزلاق الغضروفي",
      "ما بعد العمليات الجراحية والكسور والإصابات"
    ]
  },
  {
    title: "خدمة جلسات العلاج الطبيعي بالمنزل",
    items: [
      "أفضل أخصائيين معتمدين من وزارة الصحة",
      "الأخصائي المناسب حسب الحالة الصحية والعلاج المطلوب",
      "خطة علاجية منذ أول جلسة، ومتابعة دائمة لتطور الحالة"
    ]
  },
  {
    title: "فوائد جلسات العلاج الطبيعي المنزلية",
    items: [
      "توفير وقت وجهد الانتقال إلى المراكز والعيادات",
      "الوقاية من الاختلاط والتعرض للأمراض والعدوى",
      "الأخصائي معك وحدك، دون انشغال بمرضى آخرين"
    ]
  }
];

const TextCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % textGroups.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 rounded-2xl shadow-2xl w-full max-w-4xl mx-auto overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="p-8 md:p-12 lg:p-16"
          >
            <motion.h3 
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-primary text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {textGroups[currentIndex].title}
            </motion.h3>
            <ul className="space-y-4 md:space-y-6">
              {textGroups[currentIndex].items.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-base md:text-lg lg:text-xl text-white/90 hover:text-white transition-colors duration-200 flex items-center gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {textGroups.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-primary w-6" 
                : "bg-white/50 hover:bg-white/70"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`انتقل إلى المجموعة ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TextCarousel;