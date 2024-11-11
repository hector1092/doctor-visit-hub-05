import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactForm = ({ open, onOpenChange }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    inquiry: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.phone || !formData.inquiry) {
      toast.error("الرجاء ملء جميع الحقول المطلوبة");
      return;
    }
    
    const message = `الاسم: ${formData.name}%0aالهاتف: ${formData.phone}%0aالبريد: ${formData.email}%0aالاستفسار: ${formData.inquiry}`;
    window.open(`https://wa.me/01113939319?text=${message}`, "_blank");
    onOpenChange(false);
    toast.success("تم إرسال رسالتك بنجاح");
    setFormData({ name: "", phone: "", email: "", inquiry: "" });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center mb-4">اتصل بنا</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-right">الاسم</label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="text-right"
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="phone" className="text-right">رقم الهاتف</label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="text-right"
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-right">البريد الإلكتروني</label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="text-right"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="inquiry" className="text-right">الاستفسار</label>
            <Textarea
              id="inquiry"
              name="inquiry"
              value={formData.inquiry}
              onChange={handleChange}
              className="text-right"
              rows={4}
              required
            />
          </div>
          <Button
            onClick={handleSubmit}
            className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2 mt-4"
          >
            <MessageCircle className="w-5 h-5" />
            إرسال
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

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
            <motion.button
              key={button.label}
              onClick={button.onClick}
              className={`${button.color} text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-colors duration-300 hover:opacity-90`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <button.icon className="w-5 h-5" />
              <span>{button.label}</span>
            </motion.button>
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
              className={`${button.color} flex-1 text-white py-4 flex items-center justify-center gap-2`}
            >
              <button.icon className="w-5 h-5" />
              <span>{button.label}</span>
            </button>
          ))}
        </div>
      </div>

      <ContactForm open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  );
};

export default ContactButtons;