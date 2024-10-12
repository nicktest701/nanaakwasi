import  { useState, useEffect } from "react";
import { cn } from "@/utils/cn";

type CustomImageProps = {
  title?: string;
  lowQualitySrc: string;
  highQualitySrc: string;
  alt: string;
  className?: string;
};

const CustomImage = ({
  title,
  lowQualitySrc,
  highQualitySrc,
  alt,
  className,
}: CustomImageProps) => {
  const [loadedHighRes, setLoadedHighRes] = useState(false); // Track if the high-quality image is loaded

  useEffect(() => {
    const img = new Image();
    img.src = highQualitySrc;
    img.onload = () => setLoadedHighRes(true); // Set the high-quality image as loaded once it's fully loaded
  }, [highQualitySrc]);

  return (
    <div className="relative">
      {/* Low-quality image (blurred effect) */}
      <img
        title={title}
        src={lowQualitySrc}
        alt={alt}
        className={cn(
          "transition-opacity duration-500 ease-in-out opacity-100 blur-[5px]",
          loadedHighRes && "opacity-0",
          className
        )}
        // style={{ filter: "blur(5px)" }}
      />

      {/* High-quality image (lazy-loaded) */}
      {loadedHighRes && (
        <img
          src={highQualitySrc}
          alt={alt}
          className={cn(
            "absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-100",
            className
          )}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default CustomImage;
