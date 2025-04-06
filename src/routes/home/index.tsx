import Hero from "@/components/home/Hero";
import About from "../about/about";
import Service from "../service";
import Skills from "../skills";
import Resume from "../resume";
import Contact from "../contact";
import Portfolio from "../portfolio";
// import Blog from "../blog";
import BottomFade from "@/components/bottom-fade";
import MarqueeDemo from "@/components/MarqueeDemo";

function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />

      <div className=" bg-secondary-500 relative ">
        <About />
        <Service />
        <Skills />
        <Resume />
        <Portfolio />
        <MarqueeDemo/>
        {/* <Testimonials /> */}
        {/* <Blog /> */}
        <Contact />
      </div>
      <BottomFade />
    </div>
  );
}

export default Home;
