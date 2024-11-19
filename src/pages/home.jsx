// eslint-disable-next-line no-unused-vars
import React from "react";
import "flowbite";

const Home = () => {
  return (
    <>
      <div className="mt-[3.5rem]">
        {/* Hero Silder */}
        <div className="container-fluid">
          <div
            id="default-carousel"
            className="relative w-full mt-4"
            data-carousel="slide"
          >
            {/* Carousel wrapper */}
            <div className="relative h-64 overflow-hidden md:h-[26rem]">
              {/* Item 1 */}
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="/public/images/Home/banner-1.jpg"
                  className="absolute hidden md:block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="Banner 1"
                />
                <img className="block md:hidden" 
                src="/public/images/Home/banner-1-mob.jpg"
                alt="banner-1"/>
              </div>
              {/* Item 2 */}
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="/public/images/Home/banner-2.jpg"
                  className="hidden md:block w-full h-full "
                  alt="Banner 2"
                />
                <img className="block md:hidden" 
                src="/public/images/Home/banner-2-mob.jpg"
                alt="banner-1"/>
              </div>
              {/* Item 3 */}
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="/public/images/Home/banner-3.jpg"
                  className="hidden md:block w-full h-full "
                  alt="Banner 3"
                />
                <img className="block md:hidden" 
                src="/public/images/Home/banner-3-mob.jpg"
                alt="banner-1"/>
              </div>
              {/* Item 4 */}
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="/public/images/Home/banner-4.jpg"
                  className="hidden md:block w-full h-full "
                  alt="Banner 4"
                />
                 <img className="block md:hidden" 
                src="/public/images/Home/banner-4-mob.jpg"
                alt="banner-1"/>
              </div>
            </div>
            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="true"
                aria-label="Slide 1"
                data-carousel-slide-to="0"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to="1"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to="2"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 4"
                data-carousel-slide-to="3"
              ></button>
            </div>
          </div>
        </div>

        {/* Intro Section */}
        <div className="flex flex-col md:flex-row my-5">
          <div className="md:w-5/12 w-full"></div>
          <div className="md:w-7/12 w-full flex flex-col justify-center items-center">
            <div className="relative w-full px-4">
              {/* Title Section */}
              <div className="relative inline-block">
                <h1 className="text-2xl md:text-4xl font-bold font-heading">
                  Get to Know us!
                </h1>
                <p className="font-body">
                  Welcome to Carbon Craft, your trusted partner for office and
                  event solutions across the UAE. We are dedicated to excellence
                  and customer satisfaction, providing high-quality equipment
                  and services for businesses and events in Dubai, Abu Dhabi,
                  Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Specialities */}
        <section className="">
          <h1 className="text-2xl md:text-4xl font-bold font-heading text-center color-text">
            What sets us apart!
          </h1>
          <div className="container mx-auto flex flex-col md:flex-row text-center my-5">
            <div className="flex-1 mb-5 md:pb-0">
              <div className="mx-5 bg-secondary rounded-2xl p-5">
                <h3 className="text-2xl md:text-2xl font-bold font-heading text-primary">
                  All-in-One
                </h3>
                <p className="text-body text-text">
                  We offer a broad range of solutions including printer, copier,
                  plotter, laptop, computer, and office furniture rentals and
                  sales, as well as annual maintenance contracts (AMC).
                </p>
              </div>
            </div>
            <div className="flex-1 mb-5 md:pb-0">
              <div className="mx-5 bg-secondary rounded-2xl p-5">
                <h3 className="text-2xl md:text-2xl font-bold font-heading text-primary">
                  Premium Products
                </h3>
                <p className="text-body">
                  Our inventory features top-tier printers, copiers, computers,
                  laptops, and office furniture from well-known brands, ensuring
                  dependable performance.
                </p>
              </div>
            </div>
            <div className="flex-1 border-solid">
              <div className="mx-5 bg-secondary rounded-2xl p-5">
                <h3 className="text-2xl md:text-2xl font-bold font-heading text-primary">
                  Customer-centric
                </h3>
                <p className="text-body">
                  Our expert team is focused on understanding your specific
                  needs and delivering customized solutions. We aim for
                  excellence in every interaction with prompt service and
                  continuous support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="m-5 container mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold font-heading text-center color-text ">
            Our Services
          </h1>
          <div className="mt-5 sm:flex md:grid grid-cols-3 gap-4">
            <div className="mb-5 md:pb-0">
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src="/docs/images/blog/image-1.jpg"
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
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
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
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src="/docs/images/blog/image-1.jpg"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      AMC
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
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

            <div>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src="/docs/images/blog/image-1.jpg"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Office Essentials
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
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
          </div>
        </section>

        {/* Contact us */}
        <section className="bg-blue">
          <div>
            <h2 className="text-white">
              Contact us
            </h2>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
