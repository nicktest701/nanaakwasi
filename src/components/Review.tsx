import { StarIcon, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Title from "./title";

// ✅ Define testimonial type
interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  rating: number;
  avatar: string;
}

function Review() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      content:
        "Working with Nana Akwasi was a fantastic experience. He delivered our web site ahead of schedule and exceeded our expectations in both design and functionality.",
      author: "Dr. Ben Bamfo",
      role: "CEO, Bamfo Herbal Center",
      rating: 5,
      avatar: "/images/reviews/bamfo.jpg",
    },
    {
      id: 2,
      content:
        "Nana's attention to detail and problem-solving skills helped us launch a seamless e-commerce platform. Communication was clear and professional throughout.",
      author: "Mr. Gabriel Addai Bediako",
      role: "CEO, Gab Powerful Consult",
      rating: 4,
      avatar: "/images/reviews/gabs.jpg",
    },
    {
      id: 3,
      content:
        "Nana consistently delivered robust and maintainable projects. His collaborative approach and technical insight added great value to our team.",
      author: "Mr. Gordon Owusu Yeboah",
      role: "Principal, Kumawu Technical Institute",
      rating: 4,
      avatar: "/images/reviews/kuti.webp",
    },
    {
      id: 4,
      content:
        "I highly recommend Nana for any React or TypeScript project. He quickly understood our requirements and implemented robust solutions that scaled perfectly.",
      author: "Kwame Donkor",
      role: "Project Manager, Vincere Consult",
      rating: 5,
      avatar: "/images/reviews/kwame_donkor.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) =>
  //     prev === 0 ? testimonials.length - 1 : prev - 1
  //   );
  // };

  // Auto-advance slides
  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovering]);

  return (
    <section id="reviews" className="py-16 md:py-24 bg-secondary-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-(--color-secondary-500)"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-(--color-primary-500)"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-(--color-secondary-500)"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Title title=" Client Reviews" />
        </motion.div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Testimonial cards */}
          <div className="relative h-[320px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={`absolute inset-0 p-8 bg-gray-100 backdrop-blur-sm shadow-xl transition-all duration-500 ${
                  index === currentSlide ? "z-10" : "z-0"
                }`}
                initial={{ opacity: 0, x: index > currentSlide ? 100 : -100 }}
                animate={{
                  opacity: index === currentSlide ? 1 : 0,
                  x:
                    index === currentSlide
                      ? 0
                      : index > currentSlide
                      ? 100
                      : -100,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col h-full">
                  <Quote className="text-(--color-secondary-800) opacity-30 w-16 h-16 absolute top-4 right-4" />

                  <div className="flex-grow">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating
                              ? "text-amber-400 fill-amber-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    <p className="md:text-lg text-gray-700 italic mb-6">
                      &quot;{testimonial.content}&quot;
                    </p>
                  </div>

                  <div className="flex items-center">
                    <div className="relative">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-16 h-16 rounded-full object-cover border-4 border-(--color-secondary-100)"
                      />
                      <div className="absolute bottom-0 right-0 w-6 h-6 bg-(--color-secondary-500) rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900 mb-0">
                        {testimonial.author}
                      </h4>
                      <p className="text-(--color-secondary-800)">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation controls */}
          {/* <motion.button
            className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-lg hover:bg-green-800 hover:text-white transition-all"
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button> */}

          {/* <motion.button
            className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-lg hover:bg-green-800 hover:text-white transition-all"
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button> */}

          {/* Pagination indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-(--color-secondary-100) w-8"
                    : "bg-(--color-primary-200)"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
