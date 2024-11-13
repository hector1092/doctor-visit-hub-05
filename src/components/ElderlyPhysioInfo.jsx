import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const ElderlyPhysioInfo = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 10000); // Toggle every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1.5 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              أهمية العلاج الطبيعي لكبار السن في البيت
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              عند التقدم بالعمر، تزداد حاجة كبار السن إلى العلاج الطبيعي لأسباب قد تختلف تبعاً للحالة ومدى تقدمها، ومن أهم هذه الأسباب:
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                المحافظة على حيوية الجسم بصفة عامة، خاصة إذا كان المريض مقعداً أو طريح الفراش.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                استمرار ممارسة كبار السن لأنشطتهم اليومية بصورة مستقلة لأطول فترة ممكنة.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                إعادة التأهيل سواء لبعض الأمور البسيطة، أو بعد العمليات، أو الإصابات، أو بعد انقطاع الحركة لمدة نتيجة المرض.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                العلاج الطبيعي جزء أساسي من البرنامج العلاجي للمريض في بعض الحالات مثل الزهايمر، ومرض باركنسون، والتصلب المتعدد، والسكتة الدماغية.
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ElderlyPhysioInfo;