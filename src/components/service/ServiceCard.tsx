import  { ReactNode } from "react";

type ServiceCardProps = {
  title: string;
  content: string;
  icon: ReactNode;
  delay: string;
};
function ServiceCard({ title, content, icon, delay }: ServiceCardProps) {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-easing="ease-in-out"
      data-aos-duration="500"
      data-aos-delay={delay}
      className="bg-white/5 backdrop-blur rounded-md p-8 text-white border border-white/15 cursor-pointer group transition-all duration-500 ease-in-out transform hover:scale-105 "
    >
      <div className="flex flex-col justify-center items-center space-y-4">
        <div className="p-8 rounded-full bg-secondary-700 border border-white/15 text-center group-hover:border-primary-500">
          {icon}
        </div>
        <p className="text-2xl group-hover:text-primary-500">{title}</p>
        <p className="text-center line-clamp-4">{content}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
