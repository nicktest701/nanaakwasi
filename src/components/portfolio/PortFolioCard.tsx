// PortFolioCard.tsx
import { cn } from "@/utils/cn";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

type PortfolioCardProps = {
  name: string;
  type: string;
  description: string;
  technologies?: string[];
  image?: string;
  link: string;
  index: number;
};

const PortFolioCard = ({
  name,
  type,
  description,
  technologies,
  link,
  image,
  index,
}: PortfolioCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "relative group bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 shadow-lg hover:shadow-primary-500/30 transition-all duration-500"
      )}
    >
      {/* Image */}
      {image && (
        <div className="overflow-hidden h-48">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">{name}</h3>
          <a
            target="_blank"
            title={name}
            href={link}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ExternalLink className="text-primary-500 hover:scale-110 transition-transform" />
          </a>
        </div>

        <p className="text-sm text-gray-400">{type}</p>
        <p className="text-sm text-gray-300">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies?.map((item, index) => (
            <span
              key={index}
              className="text-xs bg-primary-500/10 text-primary-400 px-3 py-1 rounded-full border border-primary-500/20"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PortFolioCard;
