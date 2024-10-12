import React from "react";

interface ProjectCardProps {
  image: string;
  name: string;
  type: string;
  description: string;
  technologies: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  name,
  type,
  description,
  technologies,
  link,
}) => {
  return (
    <div className="relative group w-full  overflow-hidden rounded-lg shadow-lg">
      {/* Project Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-125"
      />

      {/* Overlay with Tailwind CSS Animation */}
      <div
        className="absolute inset-0 bg-secondary-500 bg-opacity-0 flex flex-col justify-end p-4 text-white
          transform translate-y-full group-hover:translate-y-0 group-hover:bg-opacity-70 transition-all duration-300 "
      >
        {/* Project Name */}
        <h3 className="text-lg md:text-2xl text-white font-semibold mb-2">{name}</h3>
        {/* Project Type */}
        <p className="text-sm mb-4">{type}</p>
        {/* Project Description */}
        <p className="text-sm mb-2">{description}</p>
        <div className=" mb-6 space-x-2">
          {technologies?.map((item, index) => (
            <span
              key={index}
              className="text-sm md:text-base text-primary-500 border-l border-opacity-25 px-1"
            >
              {item}
            </span>
          ))}
        </div>
        {/* Link to Project */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start text-sm md:text-base bg-primary-500 text-black px-2 py-1 md:px-4 md:py-2 rounded-lg font-medium hover:bg-primary-600 transition-colors"
        >
          View Project
        </a>
      </div>
      {/* Project Description */}
      <h3 className="absolute left-2 bottom-0 text-lg md:text-2xl text-primary-500 font-semibold mb-2 group-hover:hidden group-hover:opacity-0">
        {name}
      </h3>
    </div>
  );
};

export default ProjectCard;
