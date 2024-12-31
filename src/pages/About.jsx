// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import "flowbite";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 900, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
      offset: 50, // Offset (in pixels) from the original trigger point
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);

  return (
    <main className="mt-[3.5rem]">
      <div className="w-full h-screen flex items-end justify-center bg-about-bg-mob md:bg-about-bg bg-cover md:bg-bottom ">
        <div className=" flex flex-col items-center">
          <h1 className="text-4xl font-medium font-heading text-gray-800 leading-tight mb-[7rem] mx-6 md:mx-0" data-aos="fade-up">
            Elevate your workspace effortlessly
          </h1>
        </div>
      </div>

      {/* About us */}
      <section className="container mx-auto py-6 md:py-[6rem]">
        <div className="">
          <span
            className="text-xl font-heading font-bold text-primary mb-3"
            data-aos="fade-up"
          >
            About us
          </span>
          <h1
            className="text-2xl md:text-[2.5rem] font-bold font-heading text-gray-800 leading-tight my-3"
            data-aos="fade-up"
          >
            We simplify your workspace needs with comprehensive rental services
            for printers, copiers and other office equipments.
          </h1>
          <p
            className="text-lg md:text-xl text-gray-700 font-heading"
            data-aos="fade-up"
          >
            Our mission is to eliminate downtime and the stress of equipment
            ownership by offering hassle-free contracts that include free
            maintenance, spare parts, and toners. We are dedicated to enhancing
            business productivity by streamlining office operations with
            reliable, top-quality solutions. With Carbon Craft, you can focus on
            what truly matters—your work—while we take care of your equipment
            needs. Choose us for seamless, efficient office solutions that let
            you work without interruptions.
          </p>
        </div>
      </section>

      <div className="h-[0.12rem] w-full bg-gray-200"></div>

      {/* Contact us */}
      <section className="bg-background pt-[6rem] pb-[5.5rem]">
        <div className="container mx-auto">
          <div className="text-center">
            <span
              className="text-xl font-heading font-bold text-primary mb-3"
              data-aos="fade-up"
            >
              Contact us
            </span>
            <h1
              className="text-3xl md:text-[3.3rem] font-bold font-heading  text-gray-800 leading-tight my-3"
              data-aos="fade-up"
            >
              Let us know how we can help
            </h1>
          </div>

          <div className="mt-[4rem] sm:flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4" data-aos="fade-up">
            <div className="mb-5 md:pb-0">
              <a href="tel:+971 543917731">
                <div className="max-w-sm bg-white border-2 border-gray-100 hover:border-primary rounded-2xl shadow-md transition-colors duration-400">
                  <div className="p-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-10 mb-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Call us
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Speak to our friendly team.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="mb-5 md:pb-0">
              <a href="mailto:info@carboncraftuae.com">
                <div className="max-w-sm bg-white border-2 border-gray-100 hover:border-primary rounded-2xl shadow-md transition-colors duration-400">
                  <div className="p-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-10 mb-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                      />
                    </svg>

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Chat support
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      We&#39;re here to help.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="mb-5 md:pb-0">
              <a href="https://www.google.com/maps/d/u/4/viewer?mid=1i25rbWlSZtvGYkvabvAx68JF_xnD8MI&ll=24.73145818186758%2C55.01983265&z=8">
                <div className="max-w-sm bg-white border-2 border-gray-100 hover:border-primary rounded-2xl shadow-md transition-colors duration-400">
                  <div className="p-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-10 mb-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Our Premises
                    </h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Our Service Zones.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="mb-5 md:pb-0">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScqe3xOvEcJEmmolElbsGHHRPqCJLCaMV4L5VxVUx1ZZ8XqvA/viewform">
                <div className="max-w-sm bg-white border-2 border-gray-100 hover:border-primary rounded-2xl shadow-md transition-colors duration-400">
                  <div className="p-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-10 mb-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                      />
                    </svg>

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Join with us
                    </h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Career opportunity for you.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
