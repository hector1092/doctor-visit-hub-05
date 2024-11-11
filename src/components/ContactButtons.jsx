import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const ContactButtons = () => {
  const buttons = [
    {
      icon: MessageCircle,
      href: "https://wa.me/01113939319",
      label: "واتساب",
      color: "bg-[#25D366]",
      target: "_blank"
    },
    {
      icon: Phone,
      href: "tel:01113939319",
      label: "اتصل الآن",
      color: "bg-[#0CC6B7]"
    }
  ];

  return (
    <div className="fixed z-50">
      {/* Desktop Layout */}
      <div className="hidden md:flex md:fixed md:bottom-8 md:left-8 flex-row gap-4">
        {buttons.map((button, index) => (
          <motion.a
            key={button.label}
            href={button.href}
            target={button.target}
            rel={button.target === "_blank" ? "noopener noreferrer" : ""}
            className={`${button.color} text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-colors duration-300 hover:opacity-90`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <button.icon className="w-5 h-5" />
            <span>{button.label}</span>
          </motion.a>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 flex">
        {buttons.map((button) => (
          <a
            key={button.label}
            href={button.href}
            target={button.target}
            rel={button.target === "_blank" ? "noopener noreferrer" : ""}
            className={`${button.color} flex-1 text-white py-4 flex items-center justify-center gap-2`}
          >
            <button.icon className="w-5 h-5" />
            <span>{button.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactButtons;