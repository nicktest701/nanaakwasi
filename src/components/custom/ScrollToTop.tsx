import { cn } from "@/utils/cn";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

function ScrollToTop() {
  // const [scrolling, setScrolling] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // let timeout: number;

    const handleScroll = () => {
      // setScrolling(true);
      setScrollPosition(window.scrollY);

      // clearTimeout(timeout);
      // setTimeout(() => {
      //   // setScrolling(false);
      // }, 200); // Time after the scroll stops
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // clearTimeout(timeout);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: animated scroll
    });
  };

  return (
    <div
      onClick={handleScrollToTop}
      className={cn(
        "fixed bottom-10 right-10 p-2 z-9999 bg-primary-500 rounded-full transition-all duration-700 ease-in-out cursor-pointer",
        scrollPosition < 600 && "opacity-0",
        // scrolling && "hidden"
      )}
    >
      <ArrowUp className="text-secondary-500 size-5" />
    </div>
  );
}

export default ScrollToTop;
