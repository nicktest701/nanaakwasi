import CustomImage from "@/components/CustomImage";
import Content from "@/components/layout/content";
import Title from "@/components/title";

function About() {
  return (
    <section id="about" className="relative bg-secondary-500 text-white">
      <Content startDirection="right">
        <Title title="About Me" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="p-2  overflow-hidden ">
            <CustomImage
              highQualitySrc="/images/me/me-5.JPG"
              lowQualitySrc="/images/me/me-5.JPG"
              alt="my profile"
              title="Profile Image"
              className=" md:h-[500px] object-contain"
            />
            {/* <img
              src="/images/me/me-3.jpg"
              alt=""
              className="w-full h-full md:h-[500px] object-contain"
              loading="lazy"
            /> */}
          </div>
          {/* about me  */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-2xl md:text-4xl">
                Hi There! I'm Nana Akwasi
              </h3>
              <h4 className="text-lg text-primary-500 pb-2">
                Software Developer
              </h4>
            </div>
            <p className="font-light text-gray-300 ">
              I'm a software developer with a passion for building scalable and
              efficient software solutions. I'm always eager to learn and
              improve my skills, and I'm excited to collaborate with like-minded
              individuals on projects that make a positive impact.
            </p>
            <div className="space-y-4 pb-6">
              <div className="flex flex-col md:flex-row items-start md:items-center ">
                <p className="w-24">Birthday</p>
                <p>
                  <span className="hidden md:inline-flex">:</span> 19th June
                  1995
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center ">
                <p className="w-24">Email</p>
                <p>
                  <span className="hidden md:inline-flex">:</span>
                  Kwasiowusuansah00@gmail.com
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center ">
                <p className="w-24">Phone</p>
                <p>
                  <span className="hidden md:inline-flex">:</span>
                  {"  "}+233543772591
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center ">
                <p className="w-24">From</p>
                <p>
                  <span className="hidden md:inline-flex">:</span>
                  {"  "}Kronum,Kumasi
                </p>
              </div>
            </div>
            <div>
              <a
                download={true}
                href="./resume/KWASI_OWUSU_ANSAH.pdf"
                target="_blank"
                className="px-4 py-4 rounded-full text-secondary-500 bg-primary-500 font-medium cursor-pointer hover:bg-secondary-500 hover:text-primary-500 hover:border hover:border-primary-500"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </Content>
    </section>
  );
}

export default About;
