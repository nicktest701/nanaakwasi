import CustomImage from "@/components/CustomImage";
import Content from "@/components/layout/content";
import Title from "@/components/title";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

function About() {
  return (
    <section id="about" className="relative bg-secondary-900 text-white py-16">
      <Content startDirection="right" className="">
        <Title title="About Me" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden group"
          >
            {/* Profile Image */}
            <CustomImage
              highQualitySrc="/images/me/me.png"
              lowQualitySrc="/images/me/me-5.JPG"
              alt="my profile"
              title="Profile Image"
              className="w-full h-[420px] md:h-[500px] scale-110 cursor-zoom-in object-contain rounded-2xl"
            />

            {/* Gradient Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition" />

            {/* Tech Icons Overlay */}
            {/* <div className="absolute bottom-4 left-4 flex space-x-3">
              <img
                src="/icons/react.svg"
                alt="React"
                className="w-8 h-8 drop-shadow-lg"
              />
              <img
                src="/icons/nextjs.svg"
                alt="Next.js"
                className="w-8 h-8 drop-shadow-lg"
              />
              <img
                src="/icons/typescript.svg"
                alt="TypeScript"
                className="w-8 h-8 drop-shadow-lg"
              />
              <img
                src="/icons/tailwind.svg"
                alt="Tailwind CSS"
                className="w-8 h-8 drop-shadow-lg"
              />
            </div> */}

            {/* Optional top-right badge */}
            <div className="absolute top-4 right-4 bg-white/90 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-md">
              Full-Stack Dev
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">
                Hi There! 👋 I'm{" "}
                <span className="text-primary-400">Nana Akwasi</span>
              </h3>
              <h4 className="text-lg text-primary-500 font-medium">
                Software Developer
              </h4>
            </div>

            <p className="text-gray-300 leading-relaxed">
              I'm a passionate software developer with experience building
              modern, scalable, and efficient software solutions. I love
              learning new technologies, solving problems creatively, and
              collaborating with others to build products that make a positive
              impact.
            </p>

            {/* Info grid */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base">
              <div className="flex items-center gap-3">
                <Calendar className="text-primary-400" size={18} />
                <p>
                  <span className="font-medium">Birthday:</span> 19th June 1995
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-primary-400" size={18} />
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  Kwasiowusuansah00@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary-400" size={18} />
                <p>
                  <span className="font-medium">Phone:</span> +233543772591
                </p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-primary-400" size={18} />
                <p>
                  <span className="font-medium">From:</span> Kronum, Kumasi
                </p>
              </div>
            </div> */}

            {/* Call to Action */}
            <div className="flex gap-4 pt-4">
              <a
                download={true}
                href="./resume/KWASI_OWUSU_ANSAH.pdf"
                target="_blank"
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-primary-500 text-secondary-900 font-semibold hover:bg-primary-600 transition"
              >
                <Download size={18} />My Resume
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3 rounded-lg border border-primary-500 text-primary-400 font-semibold hover:bg-primary-500/10 transition"
              >
                Let’s Talk
              </a>
            </div>
          </motion.div>
        </div>
      </Content>
    </section>
  );
}

export default About;
