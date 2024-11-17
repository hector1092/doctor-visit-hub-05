import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ServicesCarousel from "../components/ServicesCarousel";
import { motion } from "framer-motion";
import ContactButtons from "../components/ContactButtons";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import TextCarousel from "../components/TextCarousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import useSound from 'use-sound';
import { useEffect } from "react";

const Index = () => {
  const [playSuccess] = useSound('/sounds/booking-success.mp3', { volume: 0.3 });

  useEffect(() => {
    playSuccess();
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#a7c1e6" }}>
      <Navigation />
      <div className="pt-16">
        <Hero />
        
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-20 relative bg-[#a7c1e6]/50"
        >
          <div className="container mx-auto px-4">
            <div className="relative">
              <TextCarousel />
            </div>
          </div>
        </motion.section>

        <section className="py-12 relative overflow-hidden" style={{ backgroundColor: "#a7c1e6" }}>
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-center mb-8 text-gray-900"
            >
              رعاية صحية متكاملة
            </motion.h2>
            <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              <video
                src="/videos/161.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-video object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "#a7c1e6" }}>
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-center mb-12 text-gray-900"
            >
              خدمتنا المميزة
            </motion.h2>
            <ServicesCarousel />
          </div>
        </section>

        <section className="py-20" style={{ backgroundColor: "#a7c1e6" }}>
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-center mb-12 text-gray-900"
            >
              الأسئلة الشائعة
            </motion.h2>
            <div className="max-w-3xl mx-auto bg-white/30 backdrop-blur-sm rounded-lg shadow-lg p-6">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border-b border-gray-200/30">
                  <AccordionTrigger className="text-right text-xl font-semibold text-gray-800 hover:text-primary hover:no-underline">
                    ما هي جلسات العلاج الطبيعي؟
                  </AccordionTrigger>
                  <AccordionContent className="text-right text-gray-800 text-lg leading-relaxed">
                    جلسات العلاج الطبيعي هي نوع من الخدمات الطبية التي تهدف إلى تحسين الأداء الجسدي والتخفيف من الألم وتعزيز الحركة لدى الأشخاص الذين يعانون من إصابات، أمراض، أو إعاقات جسدية. تُقدَّم هذه الجلسات بواسطة متخصصين في العلاج الطبيعي، ويُستخدم خلالها تقنيات متنوعة تتناسب مع حالة كل مريض.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-gray-200/30">
                  <AccordionTrigger className="text-right text-xl font-semibold text-gray-800 hover:text-primary hover:no-underline">
                    ما هي الحالات التي تحتاج علاج طبيعي؟
                  </AccordionTrigger>
                  <AccordionContent className="text-right text-gray-800 text-lg">
                    <p className="mb-4">هناك العديد من الحالات التي تحتاج إلى أخصائي علاج طبيعي في المنزل، ومن أكثر تلك الحالات شيوعاً:</p>
                    <ul className="space-y-2 list-disc list-inside mr-4">
                      <li>أمراض ومشاكل العظام والعمود الفقري</li>
                      <li>آلام المفاصل والغضاريف والأوتار والأربطة</li>
                      <li>خلل الوظائف العضلية الهيكلية مثل آلام الظهر، تمزقات الكفة المدورة، واضطرابات المفصل الصدغي الفكي</li>
                      <li>الحالات القلبية الرئوية مثل مرض الرئة الانسدادي المزمن، والتليف الكيسي، واحتشاء ما بعد العضلة القلبية</li>
                      <li>متلازمة النفق الرسغي وإصبع الزناد</li>
                      <li>أمراض ومشاكل الجهاز العصبي مثل السكتة الدماغية، وإصابات الحبل الشوكي، والتصلب المتعدد، وحالات الشلل</li>
                      <li>أمراض ومشاكل المسنين مثل ضعف العضلات، والخمول الحركي</li>
                      <li>التأهيل قبل وبعد العمليات الجراحية</li>
                      <li>الإصابات الرياضية مثل تمزقات العضلات، وقطع الأربطة الصليبية، وخلع مفصل الكتف</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-gray-200/30">
                  <AccordionTrigger className="text-right text-xl font-semibold text-gray-800 hover:text-primary hover:no-underline">
                    ما هي مهام دكتور العلاج الطبيعي في المنزل مع زيارة طبيب؟
                  </AccordionTrigger>
                  <AccordionContent className="text-right text-gray-800 text-lg leading-relaxed">
                    <p className="mb-4">تتركز مهام دكتور علاج طبيعي في المنزل على استعادة قدرة الإنسان البدنية والنفسية باستخدام مختلف الأساليب العلمية مثل علم الحركة والعلاج اليدوي، والعلاج بالتمرينات، والعلاج الكهربائي باستخدام الأجهزة المتنقلة الحديثة لضمان سرعة التعافي، مع مراعاة حالة المريض الصحية أو الشخص الذي يتلقى العلاج.</p>
                    <p>عادةً يحتاج المريض إلى جلسات العلاج الطبيعي بعد الخروج من عملية كبيرة أو كسر أو كعلاج للآلام المزمنة، ويكون لطبيب العظام علاقة مكملة مع طبيب العلاج الطبيعي في تحديد مدى تحسن الحالة ووضعها الصحي، كما يلعب دوراً كبيراً منذ البداية في توجيه المريض لضرورة عمل جلسات العلاج الطبيعي مع دكتور علاج طبيعي في المنزل.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <TestimonialsCarousel />
        <Footer />
        <ContactButtons />
      </div>
    </div>
  );
};

export default Index;
