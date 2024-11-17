import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import useSound from 'use-sound';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [playClick] = useSound('/sounds/click.mp3', { volume: 0.5 });

  const menuItems = [
    { title: "الصفحة الرئيسية", to: "/" },
    { title: "المقالات", to: "/articles" },
  ];

  const handleClick = () => {
    playClick();
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
            <motion.img 
              src="/images/log.jpg" 
              alt="Visit a doctor" 
              className="h-12 w-12 rounded-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span 
              className="font-bold text-2xl text-primary"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Visit a doctor
            </motion.span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item.to}
                  onClick={playClick}
                  className="text-gray-600 hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-gray-50"
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-gray-100"
            onClick={handleClick}
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </Button>
        </div>

        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 space-y-1 bg-white/95 backdrop-blur-sm"
          >
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => {
                  playClick();
                  setIsOpen(false);
                }}
                className="block px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors rounded-md"
              >
                {item.title}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;