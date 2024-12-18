// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import "flowbite";

const DeskLap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-[3.6rem]">
      <section className="bg-desklap bg-cover">
        <div className="py-[6rem]">
          <div className="container mx-auto ">
            <h1 className="text-4xl md:text-[3.3rem] font-medium font-heading text-background leading-tight my-3">
              Desktops and <br />
              Laptops
            </h1>
          </div>
        </div>
      </section>

      <section className="py-[6rem] bg-secondary">
        <div className="container mx-auto">
          <div className="">
            <span className="text-xl font-heading font-bold text-primary mb-3">
              Desktops & Laptops
            </span>
          </div>

          <div className="mt-[2.5rem]">
            <h1 className="text-4xl md:text-[3.3rem] font-bold font-heading text-gray-800 leading-tight my-3">
              High Performance Computer Devices
            </h1>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="mb-5 md:pb-0">
              <div className="max-w-sm bg-white border-2 border-white rounded-2xl shadow-md">
                <a href="#">
                  <img
                    className="rounded-3xl p-3"
                    src="/images/Desktops-Laptops/laptop-pc.png"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold font-heading tracking-tight text-gray-900 dark:text-white">
                      Laptop PC&#39;s
                    </h5>
                  </a>
                  <p className="mb-3 font-normal font-body text-gray-700 dark:text-gray-400">
                    Explore our range of Laptop PCs, offering powerful
                    performance and sleek designs. Whether for business or
                    personal use, find the perfect laptop to meet your needs
                    with reliable, high-quality options.
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
              <div className="max-w-sm bg-white border-2 border-white rounded-2xl shadow-md">
                <a href="#">
                  <img
                    className="rounded-3xl p-3"
                    src="/images/Desktops-Laptops/desktop-pc.png"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold font-heading tracking-tight text-gray-900 dark:text-white">
                      Desktop PC&#39;s
                    </h5>
                  </a>
                  <p className="mb-3 font-normal font-body text-gray-700 dark:text-gray-400">
                    Shop our selection of Desktop PCs, featuring
                    high-performance models for any business or home office.
                    From reliable everyday use to powerful workstations, find
                    the perfect desktop to suit your needs.
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
              <div className="max-w-sm bg-white border-2 border-white rounded-2xl shadow-md">
                <a href="#">
                  <img
                    className="rounded-3xl p-3"
                    src="/images/Desktops-Laptops/gaming-system.png"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold font-heading tracking-tight text-gray-900 dark:text-white">
                      Gaming Systems
                    </h5>
                  </a>
                  <p className="mb-3 font-normal font-body text-gray-700 dark:text-gray-400">
                    Discover our high-performance Gaming PC’s, built for
                    immersive gameplay. With powerful processors, advanced
                    graphics, and custom designs, these PCs are perfect for
                    Gamers &{" "}
                    <span className="lg:hidden">
                      , video editors and graphic
                    </span>{" "}
                    Designers.
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
              <div className="max-w-sm bg-white border-2 border-white rounded-2xl shadow-md">
                <a href="#">
                  <img
                    className="rounded-3xl p-3"
                    src="/images/Desktops-Laptops/chromebook.png"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold font-heading tracking-tight text-gray-900 dark:text-white">
                      Chromebooks
                    </h5>
                  </a>
                  <p className="mb-3 font-normal font-body text-gray-700 dark:text-gray-400">
                    Explore our extensive range of fast, affordable Chromebooks
                    today. Perfect for work or study, these reliable and durable
                    laptops offer long battery life, quick performance, and easy
                    cloud access. Get yours now!
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
              <div className="max-w-sm bg-white border-2 border-white rounded-2xl shadow-md">
                <a href="#">
                  <img
                    className="rounded-3xl p-3"
                    src="/images/Desktops-Laptops/tablets.png"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold font-heading tracking-tight text-gray-900 dark:text-white">
                      Tablets
                    </h5>
                  </a>
                  <p className="mb-3 font-normal font-body text-gray-700 dark:text-gray-400">
                    Browse our selection of high-performance tablets, perfect
                    for work, entertainment, and beyond. Sleek, portable, and
                    incredibly powerful, our tablets offer versatility,
                    convenience and value at great prices.
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
              <div className="max-w-sm bg-white border-2 border-white rounded-2xl shadow-md">
                <a href="#">
                  <img
                    className="rounded-3xl p-3"
                    src="/images/Desktops-Laptops/server-systems.png"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold font-heading tracking-tight text-gray-900 dark:text-white">
                      Server System
                    </h5>
                  </a>
                  <p className="mb-3 font-normal font-body text-gray-700 dark:text-gray-400">
                    Boost your business with our reliable server systems.
                    Designed for performance and scalability, our servers offer
                    secure, efficient solutions to meet your company’s growing
                    needs. Reliable, highquality server systems!
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeskLap;
