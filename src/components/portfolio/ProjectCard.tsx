import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface PortfolioItem {
  id?: string;
  title: string;
  description: string;
  image: string;
  dataAiHint?: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
}

const ProjectCard: React.FC<PortfolioItem> = ({
  image,
  title,
  category,
  description,
  technologies,
  liveUrl,
  sourceUrl,
}) => {
  return (
    <motion.a
      href={liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="relative group w-full overflow-hidden rounded-2xl shadow-lg bg-(--color-secondary-900)/30 backdrop-blur-md border border-white/10"
    >
      {/* Project Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110 group-hover:backdrop-blur-xl group-hover:bg-white"
        />

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-black/90 md:bg-(--color-secondary-500)/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl font-bold text-white"
        >
          {title}
        </motion.h3>

        <p className="text-sm text-white mb-2">{category}</p>
        <p className="text-sm text-white mb-3 line-clamp-3">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies?.map((tech, index) => (
            <span
              key={index}
              className="text-xs md:text-sm px-3 py-1 bg-white/10 text-primary-400 rounded-full backdrop-blur-sm border border-white/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-black rounded-lg font-medium hover:bg-primary-600 transition"
            >
              <ExternalLink size={16} /> Live
            </a>
          )}
          {sourceUrl && (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-lg font-medium hover:bg-white/30 transition"
            >
              Code
            </a>
          )}
        </div>
      </div>

      {/* Title always visible (for mobile / no hover) */}

      <div className="p-4 md:hidden group-hover:hidden">
        <h3 className="text-lg font-semibold text-primary-400">{title}</h3>
        <p className="text-xs text-gray-400">{category}</p>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
