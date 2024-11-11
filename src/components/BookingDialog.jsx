import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { toast } from "sonner";

const FormField = ({ label, id, type = "text", value, onChange, required = false }) => (
  <div className="grid gap-2">
    <label htmlFor={id} className="text-right">
      {label}
    </label>
    {type === "textarea" ? (
      <Textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="text-right"
        rows={4}
        required={required}
      />
    ) : (
      <Input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        className="text-right"
        required={required}
      />
    )}
  </div>
);

const BookingDialog = ({ open, onOpenChange }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    inquiry: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
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
          <FormField
            label="الاسم"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <FormField
            label="رقم الهاتف"
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <FormField
            label="البريد الإلكتروني"
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <FormField
            label="الاستفسار"
            id="inquiry"
            type="textarea"
            value={formData.inquiry}
            onChange={handleChange}
            required
          />
          <Button
            onClick={handleWhatsApp}
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

export default BookingDialog;