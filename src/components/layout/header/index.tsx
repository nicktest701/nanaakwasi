import { cn } from "@/utils/cn";
import { useState, useEffect } from "react";
import { PhoneCall } from "lucide-react";
import Menu from "@/components/custom/Menu";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeNav = () => setIsOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-[999] flex items-center justify-center bg-transparent transition-all duration-500 ease-in-out",
        (isScrolled || isOpen) && "bg-secondary-900"
      )}
    >
      <nav
        className={cn(
          "relative w-full max-w-screen-xl   flex justify-center items-center p-4 "
        )}
      >
        <a href="/#" className="flex items-center flex-1 flex-grow">
          <img
            src="/images/logo/logo.svg"
            className="size-14 md:size-20"
            alt="logo"
          />
          <h3 className="text-2xl md:text-4xl  text-white md:flex justify-center items-center ">
            Nana
          </h3>
        </a>
        <div className="lg:hidden">
          <Menu open={isOpen} setOpen={setIsOpen} />
        </div>

        <div className="hidden lg:flex lg:space-x-6 ">
          <a
            href="/#"
            className="text-gray-300 text-lg uppercase hover:text-primary-200"
          >
            Home
          </a>
          <a
            href="/#about"
            className="text-gray-300 text-lg uppercase hover:text-primary-200"
          >
            About
          </a>
          <a
            href="/#resume"
            className="text-gray-300 text-lg uppercase hover:text-primary-200"
          >
            Resume
          </a>
          <a
            href="/#portfolio"
            className="text-gray-300 text-lg uppercase hover:text-primary-200"
          >
            Portfolio
          </a>
          {/* <a
            href="/#blog"
            className="text-gray-300 text-lg uppercase hover:text-primary-200"
          >
            Blog
          </a>
          <a
            href="/#testimonial"
            className="text-gray-300 text-lg uppercase hover:text-primary-200"
          >
            Testimonial
          </a> */}
          <a
            href="/#contact"
            className="text-gray-300 text-lg uppercase hover:text-primary-200"
          >
            Contact
          </a>
          <span className="text-white">|</span>
          <div className="flex space-x-2 text-primary-500">
            <PhoneCall className="text-white" />
            <p>
              <a href="tel:+233543772591">
                +233{"  "}543{"  "}772{"  "}591
              </a>
            </p>
          </div>
        </div>

        {isOpen && (
          <div className=" fixed left-0 top-20 right-0 bottom-0  w-svw h-svh border-t border-white/20 translate-y-0 md:hidden bg-secondary-900 transition-all transform duration-500 ease-in-out flex flex-col gap-4  py-4">
            <a
              href="/#"
              className="block text-gray-300 hover:text-primary-200 px-4 text-2xl"
              onClick={closeNav}
            >
              Home
            </a>
            <a
              href="/#about"
              className="block text-gray-300 hover:text-primary-200 px-4 text-2xl"
              onClick={closeNav}
            >
              About
            </a>
            <a
              href="/#resume"
              className="block text-gray-300 hover:text-primary-200 px-4 text-2xl"
              onClick={closeNav}
            >
              Resume
            </a>
            <a
              href="/#portfolio"
              className="block text-gray-300 hover:text-primary-200 px-4 text-2xl"
              onClick={closeNav}
            >
              Portfolio
            </a>
            {/* <a
              href="/#blog"
              className="block text-gray-300 hover:text-primary-200 px-4 text-2xl"
              onClick={closeNav}
            >
              Blog
            </a>
            <a
              href="/#testimonial"
              className="block text-gray-300 hover:text-primary-200 px-4 text-2xl"
              onClick={closeNav}
            >
              Testimonial
            </a> */}
            <a
              href="/#contact"
              className="block text-gray-300 hover:text-primary-200 px-4 text-2xl"
              onClick={closeNav}
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
