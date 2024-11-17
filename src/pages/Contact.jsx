import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ContactButtons from "../components/ContactButtons";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#B7E4F9]">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-12 font-arabic">اتصل بنا</h1>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2 font-arabic">معلومات التواصل</h2>
                <p className="text-gray-600 font-arabic">
                  يمكنك التواصل معنا عبر:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="font-semibold font-arabic">الهاتف:</span>
                    <a href="tel:01113939319" className="text-primary hover:underline">
                      01113939319
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ContactButtons />
    </div>
  );
};

export default Contact;