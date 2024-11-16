import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ServicesCarousel from "../components/ServicesCarousel";
import { motion } from "framer-motion";
import ContactButtons from "../components/ContactButtons";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import UnionsCarousel from "../components/UnionsCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F9FF] to-[#E0F2FE]">
      <Navigation />
      <div className="pt-16">
        <Hero />
        
        {/* Static Image Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-20"
        >
          <div className="container mx-auto px-4">
            <img
              src="/images/12.png"
              alt="Medical Service"
              className="w-full max-w-4xl mx-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            />
          </div>
        </motion.section>

        {/* Elderly Care Info Section */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="w-full max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-8"
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                الحالات التي تحتاج إلى جلسات علاج طبيعي بالمنزل
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                هناك العديد من الحالات التي تحتاج إلى أخصائي علاج طبيعي في المنزل، ومن أكثر تلك الحالات شيوعاً:
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  أمراض ومشاكل العظام والعمود الفقري
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  آلام المفاصل والغضاريف والأوتار والأربطة
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  خلل الوظائف العضلية الهيكلية مثل آلام الظهر، تمزقات الكفة المدورة، واضطرابات المفصل الصدغي الفكي
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  الحالات القلبية الرئوية مثل مرض الرئة الانسدادي المزمن، والتليف الكيسي، واحتشاء ما بعد العضلة القلبية
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  متلازمة النفق الرسغي وإصبع الزناد
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  أمراض ومشاكل الجهاز العصبي مثل السكتة الدماغية، وإصابات الحبل الشوكي، والتصلب المتعدد، وحالات الشلل
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  أمراض ومشاكل المسنين مثل ضعف العضلات، والخمول الحركي
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  التأهيل قبل وبعد العمليات الجراحية مثل تأهيل الكسور، والتأهيل بعد تركيب المفاصل الصناعية، والتأهيل قبل وبعد عمليات بتر الأطراف
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  الإصابات الرياضية مثل تمزقات العضلات، وقطع الأربطة الصليبية، وخلع مفصل الكتف
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Services Carousel Section */}
        <section className="py-20 bg-[#f4faff]">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-center mb-12 text-gray-800"
            >
              خدمتنا المميزة
            </motion.h2>
            <ServicesCarousel />
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 bg-primary">
          <UnionsCarousel />
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4"
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">علاج طبيعي منزلي على أيدي متخصصين معتمدين</h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                جلسات علاج طبيعي بالمنزل تُعتبر واحدة من أبرز الخدمات التي يقدمها هوس كير للخدمات الطبية المنزلية في مختلف أنحاء القاهرة الكبرى والجيزة بأعلى جودة وأفضل أسعار جلسات العلاج الطبيعي. حيث أننا، على عكس الكثير من مراكز العلاج الطبيعي الأخرى، نختار فقط دكاترة متخصصين ونحرص على التأكد من خبراتهم العملية وحصولهم على شهادات علمية من كليات العلاج الطبيعي المعتمدة. ونسعى كفريق عمل متكامل في هوس كير إلى تحسين جودة الخدمات المقدمة بشكل مستمر لتحقيق أفضل النتائج وأعلى مستويات رضا العملاء.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsCarousel />

        <Footer />
        <ContactButtons />
      </div>
    </div>
  );
};

export default Index;