import { cn } from "@/utils/cn";
import React, { useState, useEffect } from "react";
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

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-[999] flex items-center justify-center bg-transparent transition-all duration-500 ease-in-out",

        isScrolled && "bg-secondary-900"
      )}
    >
      <nav
        className={cn(
          "realtive w-full max-w-screen-xl   flex justify-center items-center py-2 md:py-4 "
        )}
      >
        <div className="flex flex-1 flex-grow">
          <img
            src="/images/logo/logo.svg"
            className="size-16 md:size-20"
            alt="logo"
          />
          <h3 className="text-2xl md:text-4xl text-white flex justify-center items-center ">
            Nana
          </h3>
        </div>
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
          <a
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
          </a>
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
          <div className=" absolute left-0 top-full w-full border-t border-white/20 translate-y-0 md:hidden bg-secondary-900 transition-all transform duration-500 ease-in-out">
            <a
              href="/#"
              className="block text-gray-300 hover:text-primary-200 px-4 py-2"
            >
              Home
            </a>
            <a
              href="/#about"
              className="block text-gray-300 hover:text-primary-200 px-4 py-2"
            >
              About
            </a>
            <a
              href="/#resume"
              className="block text-gray-300 hover:text-primary-200 px-4 py-2"
            >
              Resume
            </a>
            <a
              href="/#portfolio"
              className="block text-gray-300 hover:text-primary-200 px-4 py-2"
            >
              Portfolio
            </a>
            <a
              href="/#blog"
              className="block text-gray-300 hover:text-primary-200 px-4 py-2"
            >
              Blog
            </a>
            <a
              href="/#testimonial"
              className="block text-gray-300 hover:text-primary-200 px-4 py-2"
            >
              Testimonial
            </a>
            <a
              href="/#contact"
              className="block text-gray-300 hover:text-primary-200 px-4 py-2"
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
