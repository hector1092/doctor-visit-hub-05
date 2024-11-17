import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const textGroups = [
  {
    title: "فوائد جلسات العلاج الطبيعي المنزلية",
    items: [
      "توفير وقت وجهد الانتقال إلى المراكز والعيادات",
      "الوقاية من الاختلاط والتعرض للأمراض والعدوى",
      "الأخصائي معك وحدك، دون انشغال بمرضى آخرين"
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
    title: "برنامج علاجي للحالات التالية",
    items: [
      "الشلل بأنواعه شاملا الجلطات الدماغية",
      "كبار السن وحالات الشلل الرعاش",
      "حالات الـ (MS) وأمراض الأعصاب (Neuro)",
      "إصابات العمود الفقري والانزلاق الغضروفي",
      "ما بعد العمليات الجراحية والكسور والإصابات"
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
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="bg-black/70 p-8 rounded-xl w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-white text-center max-w-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">
              {textGroups[currentIndex].title}
            </h3>
            <ul className="space-y-3">
              {textGroups[currentIndex].items.map((item, index) => (
                <li key={index} className="text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {textGroups.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-primary w-4" : "bg-white/50"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TextCarousel;