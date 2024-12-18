import React from 'react';
import { Stethoscope, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const linkVariants = {
    hover: { scale: 1.05, color: "#0EA5E9", transition: { duration: 0.2 } }
  };

  const iconVariants = {
    hover: { rotate: 360, transition: { duration: 0.5 } }
  };

  return (
    <footer className="bg-gray-900 text-white pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Important Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-6 text-primary">روابط هامة</h3>
            <ul className="space-y-3">
              {[
                { to: "/terms", text: "الشروط والأحكام" },
                { to: "/about", text: "من نحن" },
                { to: "/articles", text: "المقالات" },
                { to: "/contact", text: "تواصل معنا" }
              ].map((link) => (
                <motion.li key={link.to} whileHover="hover" variants={linkVariants}>
                  <Link to={link.to} className="hover:text-primary transition-colors text-lg">
                    {link.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 text-primary">خدماتنا</h3>
            <ul className="space-y-3">
              {[
                { to: "/services/home-visit", text: "كشف منزلي" },
                { to: "/services/phone-consultation", text: "استشارة هاتفية" },
                { to: "/services/physical-therapy", text: "علاج طبيعي" },
                { to: "/services/radiology", text: "الأشعة" },
                { to: "/services/other", text: "خدمات أخرى" }
              ].map((service) => (
                <motion.li key={service.to} whileHover="hover" variants={linkVariants}>
                  <Link to={service.to} className="hover:text-primary transition-colors text-lg">
                    {service.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-6 text-primary">تواصل معنا</h3>
            <ul className="space-y-4">
              {[
                { Icon: Phone, text: "01113939319", href: "tel:01113939319" },
                { Icon: Mail, text: "info@example.com", href: "mailto:info@example.com" },
                { Icon: MapPin, text: "القاهرة الكبرى والجيزة" }
              ].map((item, index) => (
                <motion.li key={index} className="flex items-center gap-3 text-lg" whileHover="hover">
                  <motion.div variants={iconVariants}>
                    <item.Icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  {item.href ? (
                    <a href={item.href} className="hover:text-primary transition-colors">
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* App Updates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6 text-primary">تحديثات التطبيقات</h3>
            <p className="text-gray-400 mb-4 text-lg">COMING SOON</p>
            <div className="flex flex-col gap-4">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-12 w-auto opacity-50 cursor-not-allowed"
              />
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="App Store"
                className="h-12 w-auto opacity-50 cursor-not-allowed"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <motion.div 
        className="border-t border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Stethoscope className="w-6 h-6 text-primary" />
            </motion.div>
            <p className="text-gray-400 text-center text-lg">
              © Visit a doctor - جميع الحقوق محفوظة {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;