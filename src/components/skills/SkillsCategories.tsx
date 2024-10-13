import { cn } from "@/utils/cn";
import React from "react";

type SkillCategoryProps = {
  title: string;
  skills: string[];
  direction?: "left" | "right";
};

const SkillsCategories: React.FC = () => {
  // Skill categories
  const languages: string[] = [
    "HTML",
    "CSS",
    "Java",
    "Javascript",
    "Typescript",
    "PHP",
    "Python",
  ];
  const frameworksAndLibraries: string[] = [
    "Javafx",
    "React",
    "React Native",
    "NextJS",
    "NodeJS",
    "ExpressJS",
    "TailwindCSS",
    "Bootstrap",
    "Sass",
    "Laravel",
  ];
  const databases: string[] = ["MySQL", "PostgreSQL", "MongoDB", "Firebase"];
  const tools: string[] = [
    "Git",
    "Github",
    "Adobe XD",
    "Adobe Photoshop",
    "Postman",
  ];

  // Function to render pills
  const renderPills = (skills: string[]) => {
    return skills.map((skill, index) => (
      <div
        key={index}
        className="bg-transparent border border-primary-500 border-opacity-30 text-white font-medium px-4 py-2 rounded-full m-2 whitespace-normal"
      >
        {skill}
      </div>
    ));
  };

  // A reusable section component
  const SkillCategory: React.FC<SkillCategoryProps> = ({
    title,
    skills,
    direction = "left",
  }) => (
    <div>
      <h2 className="text-2xl font-bold mb-4 mt-8 pl-8">{title}</h2>

      <div className="relative overflow-hidden w-full">
        {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-secondary-100"></div>
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-secondary-100"></div>
      </div> */}
        <div
          className={cn(
            "flex flex-wrap",
            direction === "left"
              ? "md:animate-marqueeLeft"
              : "md:animate-marqueeRight"
          )}
        >
          {renderPills(skills)}
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative bg-secondary-900 bg-opacity-70 text-white p-8">
      <div className="absolute left-0 top-0 h-full w-28 z-20 bg-gradient-to-r from-secondary-500   to-transparent"></div>
      <div className="absolute right-0 top-0 h-full w-28 z-20 bg-gradient-to-l from-secondary-500  to-transparent"></div>
      <div className="absolute  top-0 left-0 right-0 h-28 w-full z-20 bg-gradient-to-b from-secondary-500  to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0  h-28 w-full z-20 bg-gradient-to-t from-secondary-500  to-transparent"></div>

      <div className="container mx-auto">
        {/* Languages */}
        <SkillCategory title="Languages" skills={languages} />

        {/* Frameworks & Libraries */}
        <SkillCategory
          title="Frameworks & Libraries"
          skills={frameworksAndLibraries}
          direction="right"
        />

        {/* Databases */}
        <SkillCategory title="Databases" skills={databases} />

        {/* Tools */}
        <SkillCategory title="Tools" skills={tools} direction="right" />
      </div>
    </div>
  );
};

export default SkillsCategories;
