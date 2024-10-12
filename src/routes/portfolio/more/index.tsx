import BottomFade from "@/components/bottom-fade";
import PortFolioCard from "@/components/portfolio/PortFolioCard";
import projects from "@/mocks/projects.json";
import personal from "@/mocks/personal.json";
// import Contact from "@/routes/contact";

function MorePortfolio() {
  return (
    <section className="relative min-h-screen mx-auto bg-secondary-500  text-white pt-20 md:pt-24 pb-12">
      <div className="container mx-auto py-10 px-4  flex flex-col gap-2">
        <div className="container mx-auto flex justify-between items-center gap-2">
          <h1 className="text-4xl md:text-6xl">Projects</h1>
        </div>
        <p className="py-4">
          A showcase of my professional and personal projects that blend
          innovation and design to deliver impactful digital experiences.
        </p>
        <div className="border-b border-white/20"></div>
      </div>
      <div className="container mx-auto">
        <div className="columns-1 sm:columns-2 md:columns-3  gap-4 p-4">
          {projects.map((project, index) => (
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
      <div className="border-b border-white/20"></div>
      <div className="container mx-auto">
        <div className="columns-1 sm:columns-2 md:columns-3  gap-4 p-4">
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

      {/* <Contact /> */}
      <BottomFade />
    </section>
  );
}

export default MorePortfolio;
