import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import ContactButtons from "../components/ContactButtons";

const Articles = () => {
  const conditions = [
    "أمراض ومشاكل العظام والعمود الفقري",
    "آلام المفاصل والغضاريف والأوتار والأربطة",
    "خلل الوظائف العضلية الهيكلية مثل آلام الظهر، تمزقات الكفة المدورة، واضطرابات المفصل الصدغي الفكي",
    "الحالات القلبية الرئوية مثل مرض الرئة الانسدادي المزمن، والتليف الكيسي، واحتشاء ما بعد العضلة القلبية",
    "متلازمة النفق الرسغي وإصبع الزناد",
    "أمراض ومشاكل الجهاز العصبي مثل السكتة الدماغية، وإصابات الحبل الشوكي، والتصلب المتعدد، وحالات الشلل",
    "أمراض ومشاكل المسنين مثل ضعف العضلات، والخمول الحركي",
    "التأهيل قبل وبعد العمليات الجراحية مثل تأهيل الكسور، والتأهيل بعد تركيب المفاصل الصناعية، والتأهيل قبل وبعد عمليات بتر الأطراف",
    "الإصابات الرياضية مثل تمزقات العضلات، وقطع الأربطة الصليبية، وخلع مفصل الكتف"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F9FF] to-[#E0F2FE]">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              الحالات التي تحتاج إلى جلسات علاج طبيعي بالمنزل
            </h1>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                هناك العديد من الحالات التي تحتاج إلى أخصائي علاج طبيعي في المنزل، ومن أكثر تلك الحالات شيوعاً:
              </p>
              
              <ul className="space-y-4">
                {conditions.map((condition, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start text-gray-700"
                  >
                    <span className="text-primary mr-2 text-xl">•</span>
                    <span className="text-lg">{condition}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
      <ContactButtons />
    </div>
  );
};

export default Articles;