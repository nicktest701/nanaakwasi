import PostButton from "@/components/custom/buttons/PostButton";
import Content from "@/components/layout/content";
import ProjectCard from "@/components/portfolio/ProjectCard";
import Title from "@/components/title";

function Portfolio() {
  const projects = [
    {
      id:'58b1f4f9-06b5-4e60-9e4d-b3c69cf5695d',
      image: "/images/portfolio/gpc.PNG",
      name: "GPC Pins",
      type: "Web App",
      description: "A website for selling evouchers,tickets,prepaid units,etc",
      technologies: ["ReactJs", "ExpressJs", "Nodejs", "MySQL"],
      link: "https://gpcpins.com",
    },
    {
      id:'586b5d57-0026-4895-b167-e5d51831ad14',
      image: "/images/portfolio/bamfo.PNG",
      name: "Bamfo Herbal Center",
      type: "Web App",
      description: "A herbal health care website",
      technologies: ["ReactJs", "ExpressJs", "Nodejs", "Firebase"],
      link: "https://bamfoherbalcenter.com",
    },
    {
      id:'5a9240ad-d4bd-459a-b564-bed45ae2590a',
      image: "/images/portfolio/frebbys.PNG",
      name: "Frebbys School Portal",
      type: "Web App",
      description:
        "A school portal form managing academic and administrative activities.",
      technologies: ["ReactJs", "ExpressJs", "Nodejs", "Mongo DB"],
      link: "https://school-portal-aivn.onrender.com",
    },
    {
      id:'dc8db54f-175c-481d-83b1-13d3330416bb',
      image: "/images/portfolio/cocoa.PNG",
      name: "Sikadua Cocoa",
      type: "Web App",
      description: "A system for managing Cocoa sales and inventory.",
      technologies: ["ReactJs", "ExpressJs", "Nodejs", "Mongo DB"],
      link: "https://cocoa-system.onrender.com/",
    },
  ];
  return (
    <section id="portfolio">
      <Content>
        <Title title="Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              name={project.name}
              type={project.type}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </div>

        <div className="flex justify-center items-center pt-10">
          <PostButton to="/portfolio">View More</PostButton>
        </div>
      </Content>
    </section>
  );
}

export default Portfolio;
