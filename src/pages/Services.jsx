// eslint-disable-next-line no-unused-vars
import React from "react";
import "flowbite";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

const Services = () => {
  return (
    <div className="mt-[3.6rem]">
      <section className="bg-services bg-cover">
        <div className="py-[6rem] ">
          <div className="container mx-auto ">
            <h1 className="text-4xl md:text-[3.3rem] font-medium font-heading  text-background leading-tight my-3">
              Our services, <br />
              Your needs
            </h1>
          </div>
        </div>
      </section>

      {/* Rent Printers */}
      <section className="py-[6rem] bg-background">
        <div className="container mx-auto ">
          <div className="text-center">
            <span className="text-xl font-heading font-bold text-primary mb-3">
              Rent Printers
            </span>
            <h1 className="text-4xl md:text-[3.3rem] font-bold font-heading  text-gray-800 leading-tight my-3">
              Printer Rentals Made Easy
            </h1>
            <p className="text-xl text-gray-600 my-3 md:px-6">
              Explore how CarbonCraft can enhance your office environment or
              event setup with our comprehensive range of services. Contact us
              today to discuss your needs and discover why we are the preferred
              choice for businesses across the UAE.
            </p>
          </div>

          <div className="flex justify-center items-center mt-[4rem]">
            <div className="sm:flex md:grid grid-cols-2 gap-4">
              <div className="mb-5 md:pb-0">
                <div className="max-w-lg bg-primary rounded-2xl shadow-md">
                  <a href="#">
                    <img
                      className="rounded-3xl p-3"
                      src="/images/Home/rent-printer.png"
                      alt="Rent Printer"
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                        For Office
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-white">
                      Streamline your office tasks with our efficient printer
                      rentals. Designed for reliability and high performance,
                      they handle all your business printing needs with ease and
                      flexibility.
                    </p>
                    <button
                      type="button"
                      className="flex text-white bg-primary border-2 border-gray-300 focus:outline-none hover:bg-blue-prime focus:ring-4 focus:ring-gray-100 font-medium rounded-xl text-sm px-5 py-2.5 me-2 mt-5"
                    >
                      Enquire Now{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4 ms-1 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="mb-5 md:pb-0">
                <div className="max-w-lg bg-primary rounded-2xl shadow-md">
                  <a href="#">
                    <img
                      className="rounded-3xl p-3"
                      src="/images/Home/amc.png"
                      alt="AMC"
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                        For Events
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-white">
                      Ensure smooth event operations with our portable printer
                      rentals. Perfect for tickets, registrations, or documents,
                      they offer convenience and reliability for any event size.
                    </p>
                    <button
                      type="button"
                      className="flex text-white bg-primary border-2 border-gray-300 focus:outline-none hover:bg-blue-prime focus:ring-4 focus:ring-gray-100 font-medium rounded-xl text-sm px-5 py-2.5 me-2 mt-5"
                    >
                      Enquire Now{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4 ms-1 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-[0.12rem] w-full bg-gray-200"></div>

      {/* AMC */}
      <section className="py-[6rem] bg-secondary">
        <div className="container mx-auto ">
          <div className="text-center mb-6">
            <span className="text-xl font-heading font-bold text-primary mb-3">
              AMC
            </span>
            <h1 className="text-4xl md:text-[3.3rem] font-bold font-heading  text-gray-800 leading-tight my-3">
              Contracted care for your printers and copiers.
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-1 bg-primary rounded-2xl shadow-md my-[4rem]">
            <a href="#">
              <img
                className="md:max-w-lg rounded-3xl p-3 md:p-5"
                src="/images/Services/AMC.png"
                alt="Rent Printer"
              />
            </a>
            <p className="text-xl font-normal text-white p-5">
              Our Annual Maintenance Contract for printers and photocopiers is
              designed to ensure your equipment remains in top condition,
              offering long-lasting durability and consistent performance. With
              regular servicing and prompt repairs, we help minimize downtime
              and extend the lifespan of your devices, providing you with peace
              of mind and reliable operation over time.
            </p>
          </div>

          <div className="my-[4rem] text-center">
            <h1 className="text-4xl md:text-[2.5rem] font-bold font-heading  text-gray-800 leading-tight my-3">
              Why Choose an AMC with us?
            </h1>
            <p className="text-xl font-normal font-heading text-gray-600 py-5">
              Choose CarbonCraft for expert support, cost-effective solutions,
              and reliable performance for your printers and copiers. Our
              proactive servicing reduces the risk of breakdowns, extends
              equipment life, and ensures quick repairs with minimal downtime.
              With Carbon Craft, you get peace of mind, knowing your devices are
              in good hands, allowing you to focus on your business while We
              take care of the rest.
            </p>
          </div>
        </div>
      </section>

      <div className="h-[0.12rem] w-full bg-gray-200"></div>

      <section className="py-[6rem] bg-background">
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
              <div className="max-w-sm bg-white border-2 border-gray-100 hover:border-blue-prime rounded-2xl shadow-md">
                <a href="#">
                  <img
                    className="rounded-3xl p-3"
                    src="/images/Services/desktops-and-laptops.png"
                    alt="Rent Printer"
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Desktops & Laptops
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Top-quality desktops and laptops for sale or rent, tailored
                    to your business needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-5 md:pb-0">
              <div className="max-w-sm bg-white border-2 border-gray-100 hover:border-primary rounded-2xl shadow-md">
                <a href="#">
                  <img
                    className="rounded-3xl p-3"
                    src="/images/Services/furnitures.png"
                    alt="Rent Printer"
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Furnitures
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    From ergonomic chairs to modern desks, designed for comfort
                    and productivity.
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-5 md:pb-0">
              <div className="max-w-sm bg-white border-2 border-gray-100 hover:border-blue-prime rounded-2xl shadow-md">
                <a href="#">
                  <img
                    className="rounded-3xl p-3"
                    src="/images/Services/office-stationary.png"
                    alt="Rent Printer"
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Office Stationary
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    From pens and paper to binders and filing systems. Stock up
                    quality essentials to keep your office running smoothly.
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-5 md:pb-0">
              <div className="max-w-sm bg-white border-2 border-gray-100 hover:border-primary rounded-2xl shadow-md">
                <a href="#">
                  <img
                    className="rounded-3xl p-3"
                    src="/images/Services/printer-consumables.png"
                    alt="Rent Printer"
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Printer Consumables
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Browse our selection of printer consumables, Cartridges,
                    toner, paper, and more Keep your printers running at peak
                    performance with high-quality supplies designed for
                    efficiency and reliability.
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
