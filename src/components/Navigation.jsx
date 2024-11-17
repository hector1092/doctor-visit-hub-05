import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Navigation = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary/90 to-accent/90 backdrop-blur-sm shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-4 rtl:space-x-reverse">
            <img src="/images/log.jpg" alt="Logo" className="h-12 w-12 object-contain" />
            <span className="text-2xl font-bold text-white">Visit a doctor</span>
          </Link>
          
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <Link to="/services">
              <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20">
                خدماتنا
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20">
                اتصل بنا
              </Button>
            </Link>
            <Link to="/articles">
              <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20">
                المقالات
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;