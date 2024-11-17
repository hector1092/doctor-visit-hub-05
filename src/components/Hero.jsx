import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Phone, Stethoscope } from "lucide-react";
import { useState, useEffect } from "react";
import BookingDialog from "./BookingDialog";

const images = [
  "/images/1.png",
  "/images/3.jpg",
  "/images/4.png"
];

const Hero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollY } = useScroll();
  
  const backgroundY = useTransform(scrollY, [0, 500], ['0%', '20%']);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <motion.div 
        style={{ y: backgroundY, scale }}
        className="absolute inset-0 bg-cover bg-center z-0"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
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
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent" 
        />
      </motion.div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <motion.div 
            className="flex items-center gap-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Stethoscope className="w-10 h-10 text-primary" />
            </motion.div>
            <motion.h1 
              className="text-2xl font-bold text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Visit a doctor
            </motion.h1>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span 
              className="text-white block"
              whileHover={{ scale: 1.02 }}
            >
              جلسات العلاج الطبيعي في منزلك،
            </motion.span>
            <motion.span 
              className="text-primary block mt-2"
              whileHover={{ scale: 1.02 }}
              animate={{ 
                textShadow: ["0 0 0px #0EA5E9", "0 0 20px #0EA5E9", "0 0 0px #0EA5E9"],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              راحتك وسلامتك بين أيدينا.
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            أفضل خدمة طبية في المنزل بين يديك
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white gap-2 text-lg px-8 shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="https://wa.me/201113939319" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5" />
                  احجز الآن
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-16 text-white text-right max-w-2xl mx-auto space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[
              "- أفضل أخصائيين معتمدين من وزارة الصحة",
              "- الأخصائي المناسب حسب الحالة الصحية والعلاج المطلوب",
              "- خطة علاجية منذ أول جلسة، ومتابعة دائمة لتطور الحالة"
            ].map((text, index) => (
              <motion.p
                key={index}
                className="text-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                whileHover={{ x: 10 }}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>

      <BookingDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </div>
  );
};

export default Hero;