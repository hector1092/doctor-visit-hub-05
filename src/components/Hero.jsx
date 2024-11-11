import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Phone, MessageCircle, Stethoscope } from "lucide-react";
import { useState } from "react";
import BookingDialog from "./BookingDialog";

const Hero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80')",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <motion.div 
            className="flex items-center gap-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Stethoscope className="w-10 h-10 text-primary" />
            <h1 className="text-2xl font-bold text-white">زيارة طبيب</h1>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-white to-secondary bg-clip-text text-transparent drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            جلسات العلاج الطبيعي في منزلك،
            <br />
            <span className="text-white">راحتك وسلامتك بين أيدينا.</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            أفضل خدمة طبية في المنزل بين يديك
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white gap-2 text-lg px-8"
              onClick={() => setIsDialogOpen(true)}
            >
              <Phone className="w-5 h-5" />
              احجز الآن
            </Button>
            
            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2 text-lg px-8"
              onClick={() => window.open("https://wa.me/01113939319", "_blank")}
            >
              <MessageCircle className="w-5 h-5" />
              واتساب
            </Button>
          </motion.div>

          <motion.div
            className="mt-16 text-white text-right max-w-2xl mx-auto space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-lg">- أفضل أخصائيين معتمدين من وزارة الصحة</p>
            <p className="text-lg">- الأخصائي المناسب حسب الحالة الصحية والعلاج المطلوب</p>
            <p className="text-lg">- خطة علاجية منذ أول جلسة، ومتابعة دائمة لتطور الحالة</p>
          </motion.div>
        </div>
      </div>

      <BookingDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </div>
  );
};

export default Hero;