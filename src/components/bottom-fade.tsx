import React, { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

function BottomFade() {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Current vertical scroll position
      const windowHeight = window.innerHeight; // Height of the visible window
      const documentHeight = document.documentElement.scrollHeight; // Total height of the document

      // Check if the user has scrolled to the bottom (allowing for a small margin)
      if (scrollTop + windowHeight >= documentHeight - 10) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    };
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed pointer-events-none bottom-0 left-0 right-0  h-80 w-full z-20 bg-gradient-to-t from-secondary-900  to-transparent transition-colors transform duration-500 ease-in-out",
        isBottom && "opacity-0 bg-transparent "
      )}
    ></div>
  );
}

export default BottomFade;
