import Title from "@/components/title";
import { cn } from "@/utils/cn";
import React from "react";
import { motion } from "framer-motion";
import Content from "@/components/layout/content";

type SkillCategoryProps = {
  title: string;
  skills: string[];
  direction?: "left" | "right";
  speed?: number; // seconds for full scroll
};

const Skills: React.FC = () => {
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

  // Function to render animated skill pills
  const renderPills = (skills: string[]) => {
    return skills.map((skill, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(59,130,246,0.6)" }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="bg-white/5 border border-primary-500 border-opacity-30 text-white 
                   font-medium px-6 py-3 rounded-full backdrop-blur-md 
                   cursor-default select-none whitespace-nowrap hover:bg-primary-500/20"
      >
        {skill}
      </motion.div>
    ));
  };

  // A reusable section component with marquee
  const SkillCategory: React.FC<SkillCategoryProps> = ({
    title,
    skills,
    direction = "left",
    speed = 25,
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative w-full overflow-hidden py-10"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-6 px-4 md:px-0">
        {title}
      </h2>

      {/* Marquee Wrapper */}
      <div className="relative w-full group">
        {/* gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-24 z-20 bg-gradient-to-r from-secondary-900 to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 z-20 bg-gradient-to-l from-secondary-900 to-transparent pointer-events-none"></div>

        {/* Marquee track */}
        <div
          className={cn(
            "flex w-max gap-6 animate-marquee group-hover:[animation-play-state:paused]",
            direction === "right" && "animate-marquee-reverse"
          )}
          style={{
            animationDuration: `${speed}s`,
          }}
        >
          {renderPills(skills)}
          {/* duplicate for infinite loop */}
          {renderPills(skills)}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section
      id="skills"
      className="relative bg-secondary-900 bg-opacity-80 text-white py-16"
    >
      <Content>
        <Title title="Skills" />

        {/* Languages */}
        <SkillCategory title="Languages" skills={languages} />

        {/* Frameworks & Libraries */}
        <SkillCategory
          title="Frameworks & Libraries"
          skills={frameworksAndLibraries}
          direction="right"
          speed={30}
        />

        {/* Databases */}
        <SkillCategory title="Databases" skills={databases} />

        {/* Tools */}
        <SkillCategory
          title="Tools"
          skills={tools}
          direction="right"
          speed={20}
        />
      </Content>
    </section>
  );
};

export default Skills;
