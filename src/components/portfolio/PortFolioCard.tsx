import { cn } from "@/utils/cn";
import { ExternalLink } from "lucide-react";
// replace with the actual path to your image

type PortfolioCardProps = {
  name: string;
  type: string;
  description: string;
  technologies?: string[];
  image?: string;
  link: string;
  index: number;
};

const PortFolioCard = ({
  name,
  type,
  description,
  technologies,
  link,
  index,
}: PortfolioCardProps) => {
  return (
    <div
      data-aos="zoom-out-up"
      data-aos-easing="ease-in-out"
      data-aos-duration="500"
      data-aos-delay={"100"}
      className={cn(
        "bg-white/5 backdrop-blur rounded-md p-8   break-inside-avoid mb-4 text-white border border-white/15 cursor-pointer group transition-all duration-500 ease-in-out transform hover:scale-105 ",
        [5].includes(index) && "mt-8"
      )}
    >
      <p className="text-xs">{new Date().toDateString()}</p>
      <div className="flex  justify-between items-center group py-4">
        <h3 className="text-xl md:text-2xl font-bold">{name}</h3>
        {/* <h3 className="text-xl md:text-2xl font-bold">{index}</h3> */}
        <a
          target="_blank"
          title={name}
          href={link}
          className="hidden group-hover:inline-flex transition-all duration-500 ease-in-out transform "
        >
          <ExternalLink className="text-primary-500" />
        </a>
      </div>
      <p className="text-base">{type}</p>
      <p className="text-base">{description}</p>
      <div className=" mb-6 space-x-2">
        {technologies?.map((item, index) => (
          <span
            key={index}
            className="text-sm md:text-base text-primary-500 border-l border-opacity-25 px-1"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PortFolioCard;
