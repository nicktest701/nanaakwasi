import Content from "@/components/layout/content";
import BlogCard from "@/components/blog/BlogCard";
import Title from "@/components/title";

function Blog() {
  const projects = [
    {
      id: "e317ff95-a05e-48d5-b726-9e2c14b6ac87",
      image: "/images/blog1.jpg",
      title: "Blog Website",
      caption: "A personal blog website showcasing my work and skills.",
      author: "Mobile App",
      createdAt: new Date()?.toUTCString(),
    },
    {
      id: "bb2cc061-e7a7-477b-acbf-541ea8fd4c52",
      image: "/images/blog1.jpg",
      title: "E-commerce Store",
      caption: "An e-commerce website built with React and Node.js.",
      author: "Desktop App",
      createdAt: new Date()?.toUTCString(),
    },
    {
      id: "66426b50-f91f-4719-8cea-7ba80908c74d",
      image: "/images/blog1.jpg",
      title: "E-commerce Store",
      caption: "An e-commerce website built with React and Node.js.",
      author: "Web App",
      createdAt: new Date()?.toUTCString(),
    },
  ];
  return (
    <section id="blog">
      <Content>
        <Title title="Blog" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4">
          {projects.map((project, index) => (
            <BlogCard
              key={project?.id}
              id={project?.id}
              image={project.image}
              title={project.title}
              author={project.author}
              caption={project.caption}
              createdAt={project.createdAt}
            />
          ))}
        </div>
      </Content>
    </section>
  );
}

export default Blog;
