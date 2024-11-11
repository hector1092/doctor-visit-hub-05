import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import BookingDialog from "./BookingDialog";

const ContactButton = ({ icon: Icon, onClick, label, color }) => (
  <motion.button
    onClick={onClick}
    className={`${color} text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-colors duration-300 hover:opacity-90`}
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    whileHover={{ scale: 1.05 }}
  >
    <Icon className="w-5 h-5" />
    <span className="text-lg font-semibold font-arabic">{label}</span>
  </motion.button>
);

const ContactButtons = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const buttons = [
    {
      icon: MessageCircle,
      onClick: () => window.open("https://wa.me/01113939319", "_blank"),
      label: "واتساب",
      color: "bg-[#25D366]"
    },
    {
      icon: Phone,
      onClick: () => window.location.href = "tel:01113939319",
      label: "اتصل الآن",
      color: "bg-[#0CC6B7]"
    },
    {
      icon: MessageCircle,
      onClick: () => setIsDialogOpen(true),
      label: "اتصل بنا",
      color: "bg-primary"
    }
  ];

  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
          {buttons.map((button, index) => (
            <ContactButton
              key={button.label}
              {...button}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            />
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="fixed bottom-0 left-0 right-0 flex z-50">
          {buttons.map((button) => (
            <button
              key={button.label}
              onClick={button.onClick}
              className={`${button.color} flex-1 text-white py-4 flex items-center justify-center gap-2 font-arabic`}
            >
              <button.icon className="w-5 h-5" />
              <span className="text-base font-semibold">{button.label}</span>
            </button>
          ))}
        </div>
      </div>

      <BookingDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  );
};

export default ContactButtons;