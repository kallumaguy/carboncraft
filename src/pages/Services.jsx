// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import "flowbite";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <p className="text-xl font-heading text-gray-600 my-3 md:px-6">
              Explore how CarbonCraft can enhance your office environment or
              event setup with our comprehensive range of services. Contact us
              today to discuss your needs and discover why we are the preferred
              choice for businesses across the UAE.
            </p>
          </div>

          <div className="flex justify-center items-center mt-[4rem]">
            <div className="flex flex-col md:grid grid-cols-2 gap-4">
              <div className="mb-5 md:pb-0">
                <div className="max-w-xl bg-orange-gradient rounded-2xl shadow-md">
                  <img
                    className="rounded-3xl p-3"
                    src="/images/Services/for-office.png"
                    alt="Rent Printer"
                  />
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-heading font-bold tracking-tight text-white">
                      For Office
                    </h5>
                    <p className="mb-3 font-body font-normal text-white">
                      Streamline your office tasks with our efficient printer
                      rentals. Designed for reliability and high performance,
                      they handle all your business printing needs with ease and
                      flexibility.
                    </p>
                    <NavLink to="/enquire/Printers">
                      <button
                        type="button"
                        className="flex text-white bg-blue-prime border-2 border-blue-prime focus:outline-none focus:ring-1 focus:ring-gray-100 font-medium font-body rounded-xl shadow-md text-sm px-4 py-2.5 me-2 mt-5"
                      >
                        Enquire Now{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4 ms-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="mb-5 md:pb-0">
                <div className="max-w-xl bg-orange-gradient rounded-2xl shadow-md">
                  <img
                    className="rounded-3xl p-3 "
                    src="/images/Services/for-events.png"
                    alt="AMC"
                  />
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-heading font-bold tracking-tight text-white">
                      For Events
                    </h5>
                    <p className="mb-3 font-body font-normal text-white">
                      Ensure smooth event operations with our portable printer
                      rentals. Perfect for tickets, registrations, or documents,
                      they offer convenience and reliability for any event size.
                    </p>
                    <NavLink to="/enquire/Printers">
                      <button
                        type="button"
                        className="flex text-white bg-blue-prime border-2 border-blue-prime focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium font-body rounded-xl shadow-md text-sm px-4 py-2.5 me-2 mt-5"
                      >
                        Enquire Now{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4 ms-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </button>
                    </NavLink>
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

          <div className="flex flex-col lg:flex-row-reverse items-center gap-1 bg-orange-gradient rounded-3xl shadow-md my-[4rem]">
            <div className="p-3 md:p-5">
              <img
                className="lg:max-w-lg rounded-2xl"
                src="/images/Services/AMC.png"
                alt="Rent Printer"
              />
            </div>
            <div className="p-5 lg:p-6">
              <h5 className="mb-2 text-2xl lg:text-3xl font-heading font-bold tracking-tight text-white">
                Annual Maintainance Contract
              </h5>
              <p className="mb-2 text-lg font-body font-normal text-white leading-normal">
                Our contract for printers and photocopiers is designed to ensure
                your equipment remains in top condition, offering long-lasting
                durability and consistent performance. With regular servicing
                and prompt repairs, we help minimize downtime and extend the
                lifespan of your devices, providing you with peace of mind and
                reliable operation over time.
              </p>
              <a
                href=""
                className="inline-flex items-center px-3 py-2 text-md font-body font-medium text-center text-white bg-blue-prime rounded-lg shadow-md focus:ring-1 focus:outline-none focus:ring-gray-300"
              >
                Get Quote
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
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

          <div className="flex flex-col lg:flex-row items-center gap-1 bg-white border-2 border-primary rounded-3xl shadow-lg my-[4rem]">
            <a href="#" className="p-3 md:p-5">
              <img
                className="lg:max-w-lg rounded-2xl"
                src="/images/Services/contract-info.png"
                alt="Rent Printer"
              />
            </a>
            <div className="p-5">
              <span className="text-xl font-heading font-bold text-primary mb-3">
                Contract Info
              </span>
              <h1 className="text-2xl md:text-4xl font-bold font-heading  text-gray-800 leading-tight my-3">
                Our AMC includes
              </h1>
              <p className="text-xl font-body font-normal text-gray-700">
                <ul className=" mt-2 space-y-2">
                  {[
                    "Periodic check-up to ensure trouble-free operation.",
                    "Services and Consumables covered under the contract.",
                    "Payment terms and conditions.",
                    "Conditions for contract termination.",
                    "Agreed Seal and signatures of both parties.",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      {/* Custom SVG arrow */}
                      <svg
                        className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#1B1871"
                      >
                        <path d="M10 17l5-5-5-5v10z" />
                      </svg>
                      <span className="ml-2 text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-[0.12rem] w-full bg-gray-200"></div>

      {/* Office Equipments */}
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

          <div className="mt-[4rem] flex flex-col md:grid grid-cols-2 xl:grid-cols-4 gap-4">
            <div className="mb-5 md:pb-0">
              <div className="lg:max-w-xl bg-white border-2 border-primary rounded-2xl shadow-md min-h-[350px]">
                <NavLink to="/Desktops-and-Laptops">
                  <img
                    className="rounded-3xl p-3"
                    src="/images/Services/desktops-and-laptops.png"
                    alt="Rent Printer"
                  />
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Desktops & Laptops
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Top-quality desktops and laptops for sale or rent,
                      customized to meet your business requirements. Whether you
                      need reliable devices for short-term projects or long-term
                      solutions, we offer flexible options to keep your
                      operations running smoothly.
                    </p>
                  </div>
                </NavLink>
              </div>
            </div>

            <div className="mb-5 md:pb-0">
              <div className="lg:max-w-xl bg-white border-2 border-primary rounded-2xl shadow-md min-h-[350px]">
                <NavLink to="/Furnitures">
                  <img
                    className="rounded-3xl p-3"
                    src="/images/Services/furnitures.png"
                    alt="Rent Printer"
                  />
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Furnitures
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Discover our range of ergonomic chairs and modern desks,
                      thoughtfully designed to provide maximum comfort and
                      improve productivity. Perfect for creating a workspace
                      that supports focus, efficiency, and overall well-being.
                    </p>
                  </div>
                </NavLink>
              </div>
            </div>

            <div className="mb-5 md:pb-0">
              <div className="lg:max-w-xl bg-white border-2 border-primary rounded-2xl shadow-md min-h-[350px]">
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
                    From pens and paper to binders and filing systems, we
                    provide high-quality office essentials to keep your
                    workspace organized and running efficiently. Stock up on
                    everything you need to support seamless daily operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-5 md:pb-0">
              <div className="lg:max-w-xl bg-white border-2 border-primary rounded-2xl shadow-md min-h-[350px]">
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
                    From cartridges and toner to premium paper and other
                    essential printer consumables, we offer reliable,
                    high-quality supplies to keep your printers running smoothly
                    and ensuring consistent results for all your printing needs.
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
