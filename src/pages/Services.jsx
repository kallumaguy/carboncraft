// eslint-disable-next-line no-unused-vars
import React from "react";
import "flowbite";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

const Services = () => {
  return (
    <div className="mt-[3.6rem]">
      <section className="py-[6rem] bg-blue-gradient">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-[3.3rem] font-medium font-heading  text-background leading-tight my-3">
            Our services, <br />
            Your needs
          </h1>
        </div>
      </section>

      <section className="py-[6rem] bg-secondary">
        <div className="container mx-auto ">
          <div className="text-center">
            <span className="text-xl font-heading font-bold text-primary mb-3">
              Rent Printers
            </span>
            <h1 className="text-4xl md:text-[3.3rem] font-bold font-heading  text-gray-800 leading-tight my-3">
              Printer Rentals Made Easy
            </h1>
          </div>

          <div className="flex justify-center items-center mt-[4rem]">
            <div className="sm:flex md:grid grid-cols-2 gap-4">
              <div className="mb-5 md:pb-0">
                <div className="max-w-lg bg-white border-2 border-white hover:border-primary rounded-2xl shadow-md">
                  <a href="#">
                    <img
                      className="rounded-3xl p-3"
                      src="/images/Home/rent-printer.png"
                      alt="Rent Printer"
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        For Office
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Streamline your office tasks with our efficient printer
                      rentals. Designed for reliability and high performance,
                      they handle all your business printing needs with ease and
                      flexibility.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-5 md:pb-0">
                <div className="max-w-lg bg-white border-2 border-white hover:border-primary rounded-2xl shadow-md">
                  <a href="#">
                    <img
                      className="rounded-3xl p-3"
                      src="/images/Home/amc.png"
                      alt="AMC"
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        For Events
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Ensure smooth event operations with our portable printer
                      rentals. Perfect for tickets, registrations, or documents,
                      they offer convenience and reliability for any event size.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-[0.12rem] w-full bg-gray-200"></div>

      {/* AMC */}
      <section className="py-[6rem] ">
        <div className="container mx-auto ">
          <div className="text-center">
            <span className="text-xl font-heading font-bold text-primary mb-3">
              AMC
            </span>
            <h1 className="text-4xl md:text-[3.3rem] font-bold font-heading  text-gray-800 leading-tight my-3">
              Contracted care for your printers and copiers.
            </h1>
          </div>
        </div>
      </section>

      <div className="h-[0.12rem] w-full bg-gray-200"></div>

      <section className="py-[6rem] ">
        <div className="container mx-auto ">
          <div className="text-center">
            <span className="text-xl font-heading font-bold text-primary mb-3">
              Office Essentials
            </span>
            <h1 className="text-4xl md:text-[3.3rem] font-bold font-heading  text-gray-800 leading-tight my-3">
              Hassle-free Equipments Leasing
            </h1>
          </div>

          <div className="mt-[4rem] sm:flex md:grid grid-cols-4 gap-4">
            <div className="mb-5 md:pb-0">
              <div className="max-w-sm bg-white border-2 border-gray-100 hover:border-primary rounded-2xl shadow-md">
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

                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Furniture Options
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    A wide selection of desks, chairs, tables, cabinets, and
                    more.
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-5 md:pb-0">
              <div className="max-w-sm bg-white border-2 border-gray-100 hover:border-primary rounded-2xl shadow-md">
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

                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Customization
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Customize furniture with options for colors and materials.
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-5 md:pb-0">
              <div className="max-w-sm bg-white border-2 border-gray-100 hover:border-primary rounded-2xl shadow-md">
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

                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Installation
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    We manage delivery and installation for a seamless
                    experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-5 md:pb-0">
              <div className="max-w-sm bg-white border-2 border-gray-100 hover:border-primary rounded-2xl shadow-md">
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

                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Maintenance 
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Ongoing repairs, and replacements throughout
                    your lease.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
