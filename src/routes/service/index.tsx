import DesktopDevelopment from "@/assets/svg/desktop-development";
import MobileDevelopment from "@/assets/svg/mobile-development";
import WebDevelopment from "@/assets/svg/web-development";
import Content from "@/components/layout/content";
import ServiceCard from "@/components/service/ServiceCard";
import Title from "@/components/title";

function Service() {
  const services = [
    {
      id: "3b50221b-0d56-4478-86fb-22cf72a50d6c",
      title: "Web Development",
      content:
        "From dynamic web applications to enterprise-grade solutions, I specialize in building responsive, secure, and scalable web applications using the latest technologies like React, Node.js, and Next.js. Let’s bring your vision to life on the web.",
      icon: (
        <WebDevelopment className="fill-white/20 group-hover:fill-primary-500 size-12" />
      ),
      delay: "200",
    },
    {
      id: "4d145644-e240-4fa8-9a31-cb5e0720571c",
      title: "Mobile App Development",
      content:
        "I create powerful, intuitive mobile applications that deliver seamless user experiences across iOS and Android. Whether it's a simple app or a complex solution with offline capabilities, I ensure your mobile app meets modern standards and your business needs.",
      icon: (
        <MobileDevelopment className="fill-white/20 group-hover:fill-primary-500 size-12" />
      ),
      delay: "300",
    },
    {
      id: "42c3193f-1e67-4d8f-991f-96183a9092f1",
      title: "Desktop Development",
      content:
        "Need a desktop solution? I develop custom desktop applications that are fast, reliable, and user-friendly. Whether you’re looking for cross-platform apps or a native experience, I have the tools and expertise to build software that fits your workflow.",
      icon: (
        <DesktopDevelopment className="fill-white/20 group-hover:fill-primary-500 size-12" />
      ),
      delay: "400",
    },
  ];

  return (
    <section id="services" className="bg-secondary-700">
      <Content>
        <Title title="Service" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service) => {
            return (
              <ServiceCard
                key={service?.id}
                title={service?.title}
                content={service?.content}
                icon={service?.icon}
                delay={service?.delay}
              />
            );
          })}
        </div>
      </Content>
    </section>
  );
}

export default Service;
