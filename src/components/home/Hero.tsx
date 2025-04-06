import Typical from "react-typical";
import CustomParticles from "../CustomParticles";
import Content from "../layout/content";
import Instagram from "@/assets/svg/instagram";
import Linkedin from "@/assets/svg/linkedin";

import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { useEffect, useMemo } from "react";
import { cn } from "@/utils/cn";
import { MoveRight } from "lucide-react";
import Tiktok from "@/assets/svg/tiktok";

const Hero = () => {
  const COLORS_TOP = useMemo(
    () => ["#5ce0e6", "#13FFAA", "#1E67C6", "#CE84CF"],
    []
  );

  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color, COLORS_TOP]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <div className="relative overflow-hidden bg-secondary-900">
      <motion.div
        id="home"
        className="relative min-h-screen bg-secondary-900 bg-cover bg-center flex items-center justify-center  pt-20"
        style={{
          backgroundImage,
        }}
      >
        <div className="absolute inset-0 bg-cover opacity-10 bg-secondary-900">
          <img
            src="/images/bg/bg-1.jpg"
            className="w-full h-full object-cover filter grayscale"
            alt="profile"
          />
        </div>

        {/* {/* Hero content */}

        <Content className=" w-full h-full  mx-auto  flex flex-col justify-center items-center text-center space-y-4 overflow-clip  ">
          {/* <div className="rounded-full bg-white/20 p-2 backdrop-blur overflow-hidden flex items-center justify-center mb-8">
            <img
              src="/images/me/me-5.JPG"
              // width={160}
              // height={160}
              className="rounded-full size-28 md:size-44 object-cover filter grayscale"
              alt="profile"
            />
          </div> */}

          <div className="space-y-4 my-8">
            <h1 className="text-white text-4xl md:text-6xl font-bold ">Hi, </h1>
            <motion.p
              className={cn(
                "w-full block text-2xl sm:text-4xl md:text-6xl  text-primary-500 "
              )}
              style={{
                color,
              }}
            >
              <Typical
                steps={[
                  "I am Nana Akwasi.",
                  5000,
                  "I am a Software Developer.",
                  5000,
                ]}
                loop={Infinity}
              />
            </motion.p>
            <p className="text-gray-300 text-base md:text-xl mt-4 shadow-md w-full max-w-screen-md">
              I'm a self-taught and passionate software developer who enjoys
              solving complex problems by building efficient, innovative, and
              user-focused applications.
            </p>
          </div>

          <div className="w-full flex items-center justify-center gap-4 py-8 ">
            <a
              href="https://www.instagram.com/nana_akwasio?igsh=dDNoam5rYnZ3dHJx&utm_source=qr"
              target="_blank"
              rel="noopener"
              className={cn(
                "cursor-pointer p-2 rounded-full  group  flex items-center justify-center transition-transform duration-500"
              )}
            >
              <Instagram className="size-8 fill-white/50 group-hover:fill-primary-500  transition-transform duration-500" />
              {/* <span className="w-0 opacity-0 transition-transform duration-0 linear group-hover:w-full group-hover:text-primary-500  group-hover:opacity-100  ">
                Instagram
              </span> */}
            </a>
            <a
              href="https://linkedin.com/in/kwasi-owusu-ansah-24484b238"
              target="_blank"
              rel="noopener"
              className={cn(
                "cursor-pointer p-2 rounded-full  group  flex items-center justify-center transition-transform duration-500"
              )}
            >
              <Linkedin className="size-8 fill-white/50 group-hover:fill-primary-500  transition-transform duration-500" />
              {/* <span className="w-0 opacity-0 transition-transform duration-0 linear group-hover:w-full group-hover:text-primary-500  group-hover:opacity-100  ">
                Linkedin
              </span> */}
            </a>
            <a
              href="https://www.tiktok.com/@nana_akwasi_o?_t=8qTo0f1tkTG&_r=1"
              target="_blank"
              rel="noopener"
              className={cn(
                "cursor-pointer p-2 rounded-full  group  flex items-center justify-center transition-transform duration-500"
              )}
            >
              <Tiktok className="size-8 fill-white/50 group-hover:fill-primary-500  transition-transform duration-500" />
              {/* <span className="w-0 opacity-0 transition-transform duration-0 linear group-hover:w-full group-hover:text-primary-500  group-hover:opacity-100  ">
                Tik Tok
              </span> */}
            </a>

            <>
      <a className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full  font-medium text-neutral-200  transition-all duration-300 hover:w-32">
        <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100">
          Visit
        </div>
        <div className="absolute right-3.5">
        <Tiktok className="size-8 fill-white/50 group-hover:fill-primary-500" />
        </div>
      </a>
    </>
          </div>
          <motion.button
            style={{
              border,
              boxShadow,
            }}
            whileHover={{
              scale: 1.2,
            }}
            whileTap={{
              scale: 0.985,
            }}
            className="flex justify-center gap-2 py-3 items-center mx-auto shadow-xl text-lg bg-transparent backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4  overflow-hidden border-2 rounded-full group"
          >
            <a href="#contact" className="flex text-white">
              Hire Me
              <MoveRight className="ml-2 transition-transform group-hover:rotate-90 group-active:-rotate-90" />
            </a>
          </motion.button>
        </Content>
      </motion.div>
      <div className="absolute h-[400px] w-full  overflow-clip">
        <CustomParticles />
      </div>
    </div>
  );
};

export default Hero;
