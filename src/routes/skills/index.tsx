import Content from "@/components/layout/content";
import SkillsCategories from "@/components/skills/SkillsCategories";
import Title from "@/components/title";
function Skills() {





    
  return (
    <section
      id="skills"
      className="bg-secondary-500 flex flex-col items-center justify-center text-white"
    >
      <Content> 
        <Title title="Skills" />

        <div className="w-full overflow-clip">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-4xl text-center">
              Skills & Expertise{" "}
            </h3>
            <h4 className="text-lg text-primary-500 pb-6 text-center">
              Explore some skills I'm proficient in to deliver high-quality
              solutions.
            </h4>
          </div>

          <SkillsCategories/>
        </div>
      </Content>
    </section>
  );
}

export default Skills;
