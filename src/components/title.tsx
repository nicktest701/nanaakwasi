const Title = ({ title }: { title: string }) => {
  return (
    <div data-aos="fade-zoom-in" className="relative w-full mx-auto py-20">
      <h1 className="hidden md:block md:text-7xl text-center text-white/10 uppercase">
        {title}
      </h1>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h3 className="text-2xl uppercase pb-1 text-primary-500">{title}</h3>
        <div className="relative w-[150px] mx-auto">
          <div className=" divider h-[1px]  bg-white/20 w-[150px] mx-auto flex items-center justify-center"></div>
          <div className="absolute -top-[1px] right-0 left-0   divider  bg-primary-500 h-[3px] w-[60px] mx-auto  " />
        </div>
      </div>
    </div>
  );
};

export default Title;
