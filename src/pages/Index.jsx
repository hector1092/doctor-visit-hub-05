import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ServicesCarousel from "../components/ServicesCarousel";
import { motion } from "framer-motion";
import ContactButtons from "../components/ContactButtons";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import TextCarousel from "../components/TextCarousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#B7E4F9]">
      <Navigation />
      <div className="pt-16">
        <Hero />
        
        {/* Text Carousel Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-20 relative bg-[#B7E4F9]/50"
        >
          <div className="container mx-auto px-4">
            <div className="relative">
              <TextCarousel />
            </div>
          </div>
        </motion.section>

        {/* Services Carousel Section */}
        <section className="py-20 bg-[#B7E4F9]/30">
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

        {/* Q&A Section */}
        <section className="py-20 bg-[#B7E4F9]/20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-center mb-12 text-gray-800"
            >
              الأسئلة الشائعة
            </motion.h2>
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-right text-lg font-semibold">
                    ما هي الحالات التي تحتاج إلى جلسات علاج طبيعي بالمنزل؟
                  </AccordionTrigger>
                  <AccordionContent className="text-right">
                    <p className="mb-4">هناك العديد من الحالات التي تحتاج إلى أخصائي علاج طبيعي في المنزل، ومن أكثر تلك الحالات شيوعاً:</p>
                    <ul className="space-y-2 list-disc list-inside mr-4">
                      <li>أمراض ومشاكل العظام والعمود الفقري</li>
                      <li>آلام المفاصل والغضاريف والأوتار والأربطة</li>
                      <li>خلل الوظائف العضلية الهيكلية مثل آلام الظهر، تمزقات الكفة المدورة، واضطرابات المفصل الصدغي الفكي</li>
                      <li>الحالات القلبية الرئوية مثل مرض الرئة الانسدادي المزمن، والتليف الكيسي، واحتشاء ما بعد العضلة القلبية</li>
                      <li>متلازمة النفق الرسغي وإصبع الزناد</li>
                      <li>أمراض ومشاكل الجهاز العصبي مثل السكتة الدماغية، وإصابات الحبل الشوكي، والتصلب المتعدد، وحالات الشلل</li>
                      <li>أمراض ومشاكل المسنين مثل ضعف العضلات، والخمول الحركي</li>
                      <li>التأهيل قبل وبعد العمليات الجراحية مثل تأهيل الكسور، والتأهيل بعد تركيب المفاصل الصناعية، والتأهيل قبل وبعد عمليات بتر الأطراف</li>
                      <li>الإصابات الرياضية مثل تمزقات العضلات، وقطع الأربطة الصليبية، وخلع مفصل الكتف</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
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