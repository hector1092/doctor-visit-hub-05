import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ContactButtons from "../components/ContactButtons";

const About = () => {
  return (
    <div className="min-h-screen bg-[#003366]">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-12">علاج طبيعي منزلي على أيدي متخصصين معتمدين</h1>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              جلسات علاج طبيعي بالمنزل تُعتبر واحدة من أبرز الخدمات التي يقدمها هوس كير للخدمات الطبية المنزلية في مختلف أنحاء القاهرة الكبرى والجيزة بأعلى جودة وأفضل أسعار جلسات العلاج الطبيعي. حيث أننا، على عكس الكثير من مراكز العلاج الطبيعي الأخرى، نختار فقط دكاترة متخصصين ونحرص على التأكد من خبراتهم العملية وحصولهم على شهادات علمية من كليات العلاج الطبيعي المعتمدة. ونسعى كفريق عمل متكامل في هوس كير إلى تحسين جودة الخدمات المقدمة بشكل مستمر لتحقيق أفضل النتائج وأعلى مستويات رضا العملاء.
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <ContactButtons />
    </div>
  );
};

export default About;