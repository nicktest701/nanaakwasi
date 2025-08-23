// MorePortfolio.tsx
import BottomFade from "@/components/bottom-fade";
import PortFolioCard from "@/components/portfolio/PortFolioCard";
import projects from "@/mocks/projects.json";
import personal from "@/mocks/personal.json";
import { motion } from "framer-motion";

function MorePortfolio() {
  return (
    <section className="relative min-h-screen mx-auto bg-secondary-900 text-white pt-20 md:pt-24 pb-12">
      <div className="container mx-auto py-10 px-4 flex flex-col gap-2 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold"
        >
          Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="py-4 text-gray-300 max-w-2xl mx-auto"
        >
          A showcase of my professional and personal projects that blend
          <span className="text-primary-500"> innovation</span> and{" "}
          <span className="text-primary-500">design</span> to deliver impactful
          digital experiences.
        </motion.p>
        <div className="border-b border-white/20 w-2/3 mx-auto"></div>
      </div>

      {/* Professional Projects */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Professional Work</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <PortFolioCard
              index={index}
              key={project.title}
              image={project.image}
              name={project.title}
              type={project.category}
              description={project.description}
              technologies={project.technologies}
              link={project.liveUrl}
            />
          ))}
        </div>
      </div>

      <div className="border-b border-white/20 my-8 w-2/3 mx-auto"></div>

      {/* Personal Projects */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Personal Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {personal.map((project, index) => (
            <PortFolioCard
              index={index}
              key={project.id}
              image={project.image}
              name={project.name}
              type={project.type}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </div>
      </div>

      <BottomFade />
    </section>
  );
}

export default MorePortfolio;
