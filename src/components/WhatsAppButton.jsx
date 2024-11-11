import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <motion.a
          href="https://wa.me/01113939319"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 left-8 bg-[#25D366] text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-colors duration-300 hover:opacity-90 z-50"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
        >
          <MessageCircle className="w-5 h-5" />
          <span>واتساب</span>
        </motion.a>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <a
          href="https://wa.me/01113939319"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-20 left-4 bg-[#25D366] text-white p-3 rounded-full shadow-lg z-50"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </>
  );
};

export default WhatsAppButton;