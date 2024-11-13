import React from 'react';
import { Stethoscope, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Important Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">روابط هامة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="hover:text-primary transition-colors">
                  الشروط والأحكام
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link to="/articles" className="hover:text-primary transition-colors">
                  المقالات
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">خدماتنا</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/home-visit" className="hover:text-primary transition-colors">
                  كشف منزلي
                </Link>
              </li>
              <li>
                <Link to="/services/phone-consultation" className="hover:text-primary transition-colors">
                  استشارة هاتفية
                </Link>
              </li>
              <li>
                <Link to="/services/physical-therapy" className="hover:text-primary transition-colors">
                  علاج طبيعي
                </Link>
              </li>
              <li>
                <Link to="/services/radiology" className="hover:text-primary transition-colors">
                  الأشعة
                </Link>
              </li>
              <li>
                <Link to="/services/other" className="hover:text-primary transition-colors">
                  خدمات أخرى
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:01113939319" className="hover:text-primary transition-colors">
                  01113939319
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@example.com" className="hover:text-primary transition-colors">
                  info@example.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>القاهرة، مصر</span>
              </li>
            </ul>
          </div>

          {/* App Updates */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">تحديثات التطبيقات</h3>
            <p className="text-gray-400 mb-4">COMING SOON</p>
            <div className="flex flex-col gap-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-12 w-auto opacity-50 cursor-not-allowed"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="App Store"
                className="h-12 w-auto opacity-50 cursor-not-allowed"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-2">
            <Stethoscope className="w-6 h-6 text-primary" />
            <p className="text-gray-400 text-center">
              © زيارة طبيب - جميع الحقوق محفوظة {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;