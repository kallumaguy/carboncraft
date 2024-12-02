// eslint-disable-next-line no-unused-vars
import React from "react";
import "flowbite";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrintPlot = () => {
  return (
    <div className="mt-[3.6rem]">
      <section className="py-[6rem] bg-blue-gradient">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-[3.3rem] font-medium font-heading text-background leading-tight my-3">
            Printers and <br />
            Plotters
          </h1>
        </div>
      </section>

      <section className="py-[6rem] bg-secondary">
        <div className="container mx-auto">
          <div className="">
            <span className="text-xl font-heading font-bold text-primary mb-3">
              Printers
            </span>
            {/* <h1 className="text-4xl md:text-[3.3rem] font-bold font-heading text-gray-800 leading-tight my-3">
              Printer Rentals Made Easy
            </h1> */}
          </div>

          <div className="mt-[2.5rem]">
            <h1 className="text-4xl md:text-[3.3rem] font-bold font-heading text-gray-800 leading-tight my-3">
              Printer brand name
            </h1>

            <div className=" grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="mb-5 md:pb-0">
                <div className="max-w-sm bg-white border-2 border-white rounded-2xl shadow-md">
                  <a href="#">
                    <img
                      className="rounded-3xl p-3"
                      src="/images/Home/rent-printer.png"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Model Name
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Model Description
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-body font-medium text-center text-white bg-primary rounded-lg hover:bg-accent focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                      Enquire now
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
              </div>
              <div className="mb-5 md:pb-0">
                <div className="max-w-sm bg-white border-2 border-white hover:border-primary rounded-2xl shadow-md">
                  <a href="#">
                    <img
                      className="rounded-3xl p-3"
                      src="/images/Home/rent-printer.png"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Rent Printers
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Affordable Printer Rentals for Every Need.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-5 md:pb-0">
                <div className="max-w-sm bg-white border-2 border-white hover:border-primary rounded-2xl shadow-md">
                  <a href="#">
                    <img
                      className="rounded-3xl p-3"
                      src="/images/Home/rent-printer.png"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Rent Printers
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Affordable Printer Rentals for Every Need.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-5 md:pb-0">
                <div className="max-w-sm bg-white border-2 border-white hover:border-primary rounded-2xl shadow-md">
                  <a href="#">
                    <img
                      className="rounded-3xl p-3"
                      src="/images/Home/rent-printer.png"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Rent Printers
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Affordable Printer Rentals for Every Need.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrintPlot;
