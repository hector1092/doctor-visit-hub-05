import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "الصفحة الرئيسية", to: "/" },
    { title: "من نحن", to: "/about" },
    { title: "احجز الآن", to: "/booking" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/og-image.svg" alt="زيارة طبيب" className="h-10 w-10" />
            <span className="font-bold text-2xl text-primary">زيارة طبيب</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-gray-600 hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-gray-50"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-1 bg-white/95 backdrop-blur-sm">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;