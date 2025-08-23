import { ReactNode } from "react";
import { motion } from "framer-motion";

type ServiceCardProps = {
  title: string;
  content: string;
  icon: ReactNode;
  delay: number;
};

function ServiceCard({ title, content, icon, delay }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      whileHover={{ y: -8, scale: 1.03 }}
      className="relative bg-white/5 backdrop-blur-md rounded-2xl p-8 text-white border border-white/10 hover:border-primary-500/50 shadow-md hover:shadow-primary-500/20 transition-all duration-500 group"
    >
      {/* Icon circle */}
      <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full bg-secondary-800 border border-white/10 group-hover:border-primary-500 transition-all duration-500 mb-6">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold text-center mb-4 group-hover:text-primary-500 transition-colors duration-500">
        {title}
      </h3>

      {/* Description */}
      <p className="text-center text-gray-300 leading-relaxed sm:line-clamp-none line-clamp-5">
        {content}
      </p>

      {/* Accent underline */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-primary-500 to-cyan-400 group-hover:w-2/3 transition-all duration-500"></div>
    </motion.div>
  );
}

export default ServiceCard;
