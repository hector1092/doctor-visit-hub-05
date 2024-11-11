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
              نحن نقدم خدمات طبية متميزة في منزلك، مع فريق من الأطباء المتخصصين والممرضين المؤهلين. 
              هدفنا هو توفير الراحة والعناية الطبية المتكاملة لجميع المرضى في منازلهم.
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