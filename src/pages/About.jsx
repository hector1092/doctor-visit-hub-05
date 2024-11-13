import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ContactButtons from "../components/ContactButtons";

const About = () => {
  return (
    <div className="min-h-screen bg-[#003366]">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-12">من نحن</h1>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              موقع زيارة طبيب هو المنصة الأولى في مصر التي تعمل على تنظيم وتوفير الرعاية الطبية والصحية، خاصة لكبار السن والحالات المزمنة. نحن نعمل كمنظومة رائدة لتنسيق الخدمات الصحية المتكاملة في المنزل بين العميل ومزودي الخدمة. نقدم خدماتنا من خلال زيارات طبية منزلية أو استشارات طبية عن بُعد، وننفرد بميزة متابعة عملائنا مدى الحياة. نسعى باستمرار لتحسين جودة الخدمة الصحية المقدمة، بهدف الارتقاء بجميع قطاعات الرعاية الصحية في مصر.
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