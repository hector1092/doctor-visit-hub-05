import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import WhatsAppButton from "../components/WhatsAppButton";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    condition: "",
    service: "زيارة طبيب منزلية",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `الاسم: ${formData.name}%0aالهاتف: ${formData.phone}%0aالبريد: ${formData.email}%0aالخدمة: ${formData.service}%0aالحالة: ${formData.condition}`;
    window.open(`https://wa.me/01113939319?text=${message}`, "_blank");
    toast.success("تم إرسال طلبك بنجاح");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const services = [
    "زيارة طبيب منزلية",
    "استشارات طبية هاتفية",
    "التمريض المنزلي",
    "العلاج الطبيعي",
    "رعاية كبار السن",
    "فحوصات مخبرية",
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8"
        >
          <h1 className="text-3xl font-bold text-center mb-8">احجز خدمتك الآن</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">الاسم</label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">رقم الهاتف</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">البريد الإلكتروني</label>
              <input
                type="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">الخدمة المطلوبة</label>
              <select
                name="service"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                value={formData.service}
                onChange={handleChange}
              >
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">وصف الحالة</label>
              <textarea
                name="condition"
                required
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                value={formData.condition}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              إرسال الطلب
            </button>
          </form>
        </motion.div>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default BookingForm;