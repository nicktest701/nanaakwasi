import { Toaster, toast } from "sonner";
import Content from "@/components/layout/content";
import Title from "@/components/title";
import { PhoneIcon } from "lucide-react";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useState } from "react";
import Tiktok from "@/assets/svg/tiktok";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm("service_xz0gbfm", "template_ij1o85e", e.currentTarget, {
        publicKey: "JQ9M1nWARe1bnp95W",
      })
      .then(
        () => {
          toast.success("Message Sent!", {
            position: "top-right",
            description: "Your request has been received.",
            descriptionClassName: "text-white",
            className: "p-4 bg-secondary-900 text-primary-500",
          });

          if (formRef.current) {
            formRef.current?.reset();
          }
        },
        () => {
          toast.error("Failed!", {
            position: "top-right",
            description: "Could not send message.Try again later!",
            descriptionClassName: "text-white",
            className: "p-4 bg-secondary-900 text-red-500",
          });
        }
      )
      .catch((error) => {
        toast.error("Failed!", {
          position: "top-right",
          description: error.message,
          descriptionClassName: "text-white",
          className: "p-4 bg-secondary-900 text-red-500",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section id="contact" className="bg-secondary-900">
      <Toaster />
      <Content>
        <Title title="Contact Me" />

        <div className=" text-white py-8">
          <div className="container mx-auto flex flex-wrap justify-between">
            {/* Contact Form */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold mb-6">Just say Hello</h2>
              <form className="space-y-4" ref={formRef} onSubmit={sendEmail}>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full p-4 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:border-primary-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full p-4 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:border-primary-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Your Subject"
                    className="w-full p-4 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:border-primary-500"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    name="message"
                    rows={5}
                    className="w-full p-4 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:border-primary-500"
                  ></textarea>
                </div>
                <button
                  disabled={isLoading}
                  type="submit"
                  className="px-4 py-4 rounded-full text-secondary-500 bg-primary-500 font-medium cursor-pointer hover:bg-secondary-500 hover:text-primary-500 hover:border hover:border-primary-500"
                >
                  {isLoading ? "Please Wait..." : "  Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="w-full lg:w-1/3 text-gray-400">
              <h2 className="text-3xl font-bold mb-6">Contact Info</h2>
              <p className="mb-6">
                Feel free to reach out! I’m here to help you bring your ideas to
                life.
              </p>

              <div className="mb-4 flex items-start gap-4">
                <span className="p-3  mr-2 flex items-center justify-center border border-primary-500 border-opacity-30 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 text-primary-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 01-8 0 4 4 0 018 0zM12 14a8 8 0 00-8 8v2h16v-2a8 8 0 00-8-8z"
                    />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-xl">Email</p>
                  <p className="flex items-center ">
                    <a href="mailto:kwasiowusuansah00@gmail.com">
                      kwasiowusuansah00@gmail.com{" "}
                    </a>
                  </p>
                  <p>
                    {" "}
                    <a href="mailto:frebbytechconsults@gmail.com">
                      frebbytechconsults@gmail.com{" "}
                    </a>
                  </p>
                </div>
              </div>
              <div className="mb-4 flex items-start gap-4">
                <span className="p-3  mr-2 flex items-center justify-center border border-primary-500 border-opacity-30 rounded-full">
                  <PhoneIcon className="text-primary-500" />
                </span>
                <div>
                  <p className="font-semibold text-xl">Phone</p>
                  <p className="flex items-center ">+233 543 772 591 </p>
                  <p>+233 560 372 844 </p>
                </div>
              </div>
              <div className="mb-4 flex items-start gap-4">
                <span className="p-3  mr-2 flex items-center justify-center border border-primary-500 border-opacity-30 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 text-primary-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 01-8 0 4 4 0 018 0zM12 14a8 8 0 00-8 8v2h16v-2a8 8 0 00-8-8z"
                    />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-xl">Address</p>
                  <p className="flex items-center ">Plot 15,Block D</p>
                  <p>Kronum Kwaprah</p>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="mt-6">
                <p className="mb-4">
                  Visit my social profile and get connected
                </p>
                <div className="flex space-x-4">
                  <a
                  title="facebook profile url"
                    href="#"
                    className="bg-gray-800 p-3 rounded-full hover:bg-primary-500 transition group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-6 h-6 group-hover:fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.482v-9.294H9.694v-3.622h3.113V8.413c0-3.1 1.893-4.786 4.659-4.786 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.762v2.311h3.589l-.467 3.622h-3.122V24h6.116C23.406 24 24 23.406 24 22.675V1.325C24 .593 23.406 0 22.675 0z" />
                    </svg>
                  </a>
                  <a
                    title="tiktok profile url"
                    href="https://www.tiktok.com/@nana_akwasi_o?_t=8qTo0f1tkTG&_r=1"
                    target="_blank"
                    rel="noopener"
                    className="bg-gray-800 p-3 rounded-full hover:bg-primary-500 transition group"
                  >
                    <Tiktok className="w-6 h-6 group-hover:fill-white" />
                  </a>
                  <a
                  title='profile url'
                    href="#"
                    className="bg-gray-800 p-3 rounded-full hover:bg-primary-500 transition group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-6 h-6 group-hover:fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557a9.8 9.8 0 01-2.828.775 4.937 4.937 0 002.165-2.724 9.863 9.863 0 01-3.127 1.196 4.92 4.92 0 00-8.384 4.482 13.955 13.955 0 01-10.141-5.14 4.92 4.92 0 001.524 6.573A4.902 4.902 0 01.964 8.874v.061a4.922 4.922 0 003.946 4.827 4.935 4.935 0 01-2.212.084 4.923 4.923 0 004.598 3.416A9.868 9.868 0 010 19.54 13.901 13.901 0 007.548 22c9.142 0 14.307-7.721 14.307-14.414 0-.22-.006-.437-.016-.654A10.18 10.18 0 0024 4.557z" />
                    </svg>
                  </a>
                  <a
                    title="linkedin profile url"
                    href="https://linkedin.com/in/kwasi-owusu-ansah-24484b238"
                    target="_blank"
                    rel="noopener"
                    className="bg-gray-800 p-3 rounded-full hover:bg-primary-500 transition group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-6 h-6 group-hover:fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.23 0H1.77C.792 0 0 .793 0 1.77v20.459C0 23.207.792 24 1.77 24h20.459c.978 0 1.77-.793 1.77-1.771V1.771C24 .793 23.208 0 22.23 0zM7.19 20.339H3.561V9.006H7.19v11.333zm-1.815-12.9c-1.17 0-1.91-.784-1.91-1.751 0-.992.755-1.751 1.949-1.751 1.194 0 1.911.758 1.911 1.751 0 .967-.717 1.751-1.95 1.751zm15.229 12.9h-3.626V15.13c0-1.236-.442-2.08-1.548-2.08-.844 0-1.346.57-1.566 1.119-.08.2-.099.479-.099.758v5.413H9.812s.046-8.779 0-9.694h3.626v1.373c.482-.746 1.341-1.809 3.27-1.809 2.387 0 4.174 1.563 4.174 4.924v6.206z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </section>
  );
};

export default Contact;
