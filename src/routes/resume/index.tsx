import Content from "@/components/layout/content";
import Title from "@/components/title";
import { cn } from "@/utils/cn";
import { Briefcase, School2Icon } from "lucide-react";

const Resume = () => {
  const educationData = [
    {
      title: "Bachelor of Information Technology",
      year: "2017 - 2021",
      institution: "University of Education, Winneba",
      description: "",
    },
    {
      title: "General Science",
      year: "2010 - 2013",
      institution: "Prempeh College",
      description: "",
    },
  ];

  const experienceData = [
    {
      title: "✔	Facilitator and Tech Support",
      year: "August 2024 - Present",
      company: "Akaal Skill Development Academy | Ejisu, Ghana",
      description:
        "● Trained and developed students’ skills in word-processing, spreadsheet and database programs.",
    },
    {
      title: "✔	IT Specialist and Tech Support",
      year: "November 2022 - Present",
      company: "Kumawu Technical Institute | Kumawu, Ghana",
      description:
        "● Support in technical and administrative work in student enrollment.",
    },

    {
      title: "✔	Programmer and Tech Support",
      year: "September 2021 - September 2022",
      company: "Kodie District Assembly | Kumasi, Ghana",
      description:
        "● Completed redesign of existing website and Supported in technical and administrative tasks.",
    },
  ];

  return (
    <section id="resume" className="bg-secondary-900 text-white py-12 ">
      <Content className='px-6'>
        <Title title="Resume" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
