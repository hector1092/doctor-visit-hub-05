import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const unions = [
  {
    name: "نقابة العلميين",
    description: "نقابة العلميين المصرية - خدمات طبية متميزة",
    image: "/images/union1.png"
  },
  {
    name: "نقابة المهن السينمائية",
    description: "نقابة المهن السينمائية - رعاية صحية شاملة",
    image: "/images/union2.png"
  },
  {
    name: "نقابة التجاريين",
    description: "نقابة التجاريين - خدمات صحية متكاملة",
    image: "/images/union3.png"
  },
  {
    name: "نقابة المعلمين",
    description: "نقابة المعلمين - رعاية طبية متميزة",
    image: "/images/union4.png"
  }
];

const UnionsCarousel = () => {
  const plugin = Autoplay({ delay: 4000, stopOnInteraction: true });

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">شركاؤنا</h2>
      <Carousel
        plugins={[plugin]}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {unions.map((union, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 h-full flex flex-col items-center justify-center gap-4"
              >
                <div className="relative w-32 h-32">
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    src={union.image}
                    alt={union.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">{union.name}</h3>
                <p className="text-white/80 text-center">{union.description}</p>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};

export default UnionsCarousel;