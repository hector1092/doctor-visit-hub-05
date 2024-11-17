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
            <h3 className="text-lg font-bold mb-4 text-primary">روابط هامة</h3>
            <ul className="space-y-2">
              {[
                { to: "/terms", text: "الشروط والأحكام" },
                { to: "/about", text: "من نحن" },
                { to: "/articles", text: "المقالات" },
                { to: "/contact", text: "تواصل معنا" }
              ].map((link) => (
                <motion.li key={link.to} whileHover="hover" variants={linkVariants}>
                  <Link to={link.to} className="hover:text-primary transition-colors">
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
            <h3 className="text-lg font-bold mb-4 text-primary">خدماتنا</h3>
            <ul className="space-y-2">
              {[
                { to: "/services/home-visit", text: "كشف منزلي" },
                { to: "/services/phone-consultation", text: "استشارة هاتفية" },
                { to: "/services/physical-therapy", text: "علاج طبيعي" },
                { to: "/services/radiology", text: "الأشعة" },
                { to: "/services/other", text: "خدمات أخرى" }
              ].map((service) => (
                <motion.li key={service.to} whileHover="hover" variants={linkVariants}>
                  <Link to={service.to} className="hover:text-primary transition-colors">
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
            <h3 className="text-lg font-bold mb-4 text-primary">تواصل معنا</h3>
            <ul className="space-y-4">
              {[
                { Icon: Phone, text: "01113939319", href: "tel:01113939319" },
                { Icon: Mail, text: "info@example.com", href: "mailto:info@example.com" },
                { Icon: MapPin, text: "القاهرة، مصر" }
              ].map((item, index) => (
                <motion.li key={index} className="flex items-center gap-2" whileHover="hover">
                  <motion.div variants={iconVariants}>
                    <item.Icon className="w-5 h-5 text-primary" />
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
            <h3 className="text-lg font-bold mb-4 text-primary">تحديثات التطبيقات</h3>
            <p className="text-gray-400 mb-4">COMING SOON</p>
            <div className="flex flex-col gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="h-12 w-auto opacity-50 cursor-not-allowed bg-gray-800 rounded-lg flex items-center justify-center"
              >
                <span className="text-gray-400">Google Play</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="h-12 w-auto opacity-50 cursor-not-allowed bg-gray-800 rounded-lg flex items-center justify-center"
              >
                <span className="text-gray-400">App Store</span>
              </motion.div>
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
            <p className="text-gray-400 text-center">
              © زيارة طبيب - جميع الحقوق محفوظة {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;