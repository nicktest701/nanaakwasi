import Content from "@/components/layout/content";
import Title from "@/components/title";
import { cn } from "@/utils/cn";
import { Briefcase, School2Icon } from "lucide-react";

const Resume = () => {
  const educationData = [
    {
      title: "Master of Computer Science",
      year: "2015 - 2016",
      institution: "University of XYZ",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Bachelor of Computer Science",
      year: "2010 - 2014",
      institution: "University of ABC",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const experienceData = [
    {
      title: "Senior Software Developer",
      year: "Jan 2020 - Present",
      company: "Tech Solutions Inc.",
      description:
        "Developing scalable web applications and leading a team of developers.",
    },
    {
      title: "Junior Developer",
      year: "Jan 2016 - Dec 2019",
      company: "InnovateX",
      description:
        "Contributed to the development of several projects using React and Node.js.",
    },
  ];

  return (
    <section id="resume" className="bg-secondary-900 text-white py-12 px-6">
      <Content startDirection="left" className="container mx-auto">
        <Title title="Resume" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education Section */}
          <div
            data-aos="zoom-out-up"
            data-aos-easing="ease-in"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            <div className="flex items-center gap-4  mb-6">
              <School2Icon className="text-white/20  size-12" />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            <ul>
              {educationData.map((edu, index) => (
                <li key={index} className="relative pb-10 pl-6 group">
                  <div className="absolute left-0 top-0 h-full w-0 border-opacity-30 border border-white/10"></div>
                  <div
                    className={cn(
                      "absolute -left-1.5 h-4 w-4 bg-secondary-900 border border-white/10  border-opacity-40 rounded-full transition-colors duration-700 ease-in-out",
                      "group-hover:bg-primary-500"
                    )}
                  ></div>
                  <h3 className="text-xl font-semibold">{edu.title}</h3>
                  <p className="text-primary-400">{edu.year}</p>
                  <p className="text-lg">{edu.institution}</p>
                  <p className="text-sm text-gray-400">{edu.description}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience Section */}
          <div
            data-aos="zoom-out-up"
            data-aos-easing="ease-in"
            data-aos-duration="500"
            data-aos-delay="400"
          >
            <div className="flex items-center gap-4  mb-6">
              <Briefcase className="text-white/20  size-12" />
              <h2 className="text-3xl font-bold">Experience</h2>
            </div>
            <ul>
              {experienceData.map((exp, index) => (
                <li key={index} className="relative pb-10 pl-6 group">
                  <div className="absolute left-0 top-0 h-full w-0 border-opacity-30 border border-white/10"></div>
                  <div
                    className={cn(
                      "absolute -left-1.5 h-4 w-4 bg-secondary-900 border border-white/10  border-opacity-40 rounded-full transition-colors duration-700 ease-in-out",
                      "group-hover:bg-primary-500"
                    )}
                  ></div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-primary-400">{exp.year}</p>
                  <p className="text-lg">{exp.company}</p>
                  <p className="text-sm text-gray-400">{exp.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Content>
    </section>
  );
};

export default Resume;
