import { cn } from "@/utils/cn";
import { useState, useEffect } from "react";
import { PhoneCall } from "lucide-react";
import Menu from "@/components/custom/Menu";
import { motion, useScroll, useSpring } from "framer-motion";

// Sections for navigation
const navLinks = [
  { id: "home", href: "/#", label: "Home" },
  { id: "about", href: "/#about", label: "About" },
  { id: "services", href: "/#services", label: "Services" },
  { id: "skills", href: "/#skills", label: "Skills" },
  { id: "resume", href: "/#resume", label: "Resume" },
  { id: "projects", href: "/#projects", label: "Projects" },
  { id: "reviews", href: "/#reviews", label: "Reviews" },
  { id: "contact", href: "/#contact", label: "Contact" },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } // section is active when 60% is visible
    );

    sections.forEach((section) => observer.observe(section));

    function onScroll() {
      setIsScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
    console.log(activeSection)
  }, []);

  const closeNav = () => setIsOpen(false);

  const { scrollYProgress } = useScroll(); // gives 0 to 1 based on scroll
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-[999] transition-all duration-500 ease-in-out",
        isScrolled || isOpen ? "bg-secondary-900 shadow-lg" : "bg-transparent"
      )}
    >
      <nav className="relative w-full max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
        {/* Logo */}
        <a href="/#" className="flex items-center space-x-2">
          <img
            src="/images/logo/logo.svg"
            className="size-10 md:size-14"
            alt="logo"
          />
          <h3 className="text-xl md:text-2xl font-bold text-white">
            Nana Akwasi
          </h3>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <motion.a
              key={link.id}
              href={link.href}
              className={cn(
                "relative text-sm md:text-base uppercase transition-colors duration-300",
                activeSection === link.id
                  ? "text-primary-400 font-semibold"
                  : "text-gray-300 hover:text-primary-300"
              )}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 mx-auto h-[2px] w-full bg-primary-400 rounded-full"
                />
              )}
            </motion.a>
          ))}

          <span className="text-gray-500">|</span>
          <div className="flex items-center space-x-2 text-primary-400">
            <PhoneCall className="text-white" />
            <a
              href="tel:+233543772591"
              className="hover:text-primary-200 transition-colors"
            >
              +233 543 772 591
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Menu open={isOpen} setOpen={setIsOpen} />
        </div>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="fixed left-0 top-16 right-0 bottom-0 bg-secondary-900 flex flex-col items-center justify-start py-10 gap-6 lg:hidden"
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.id}
              href={link.href}
              onClick={closeNav}
              className={cn(
                "text-2xl uppercase transition-colors",
                activeSection === link.id
                  ? "text-primary-400 font-semibold"
                  : "text-gray-300 hover:text-primary-200"
              )}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      )}

      {/* Scroll progress bar */}
      <motion.div
        className="h-1 rounded-4xl bg-gradient-to-r from-secondary-500 via-teal-500 to-primary-500 origin-left"
        style={{ scaleX }}
      />
    </header>
  );
}

export default Header;
