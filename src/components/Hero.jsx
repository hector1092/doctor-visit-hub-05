import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Phone, Stethoscope } from "lucide-react";
import { useState, useEffect } from "react";
import BookingDialog from "./BookingDialog";

const images = [
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b"
];

const Hero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollY } = useScroll();
  
  const backgroundY = useTransform(scrollY, [0, 500], ['0%', '20%']);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-cover bg-center z-0"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={images[currentImageIndex]}
              alt={`صورة ${currentImageIndex + 1}`}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </AnimatePresence>
        
        <motion.div 
          style={{ opacity }}
          className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40" 
        />
      </motion.div>

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
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-white">جلسات العلاج الطبيعي في منزلك،</span>
            <br />
            <span className="text-primary">راحتك وسلامتك بين أيدينا.</span>
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