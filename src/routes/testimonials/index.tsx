import Content from "@/components/layout/content";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
import Title from "@/components/title";
function Testimonials() {
  return (
    <section id='testimonial'>
      <Content>
        <Title title="Testimonials" />
        <div className="relative">
          <TestimonialCard />
        </div>
      </Content>
    </section>
  );
}

export default Testimonials;
