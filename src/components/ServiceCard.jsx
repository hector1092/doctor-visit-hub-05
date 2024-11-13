import { motion } from "framer-motion";

const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-gradient-to-br from-white to-primary/5 p-8 rounded-xl text-right flex flex-col items-end h-full shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-base">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;