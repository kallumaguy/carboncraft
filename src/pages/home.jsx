// eslint-disable-next-line no-unused-vars
import React from "react";
import "flowbite";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Default for large screens
    slidesToScroll: 1,
    centerMode: true, // Enables padding around slides
    centerPadding: "30px", // Adjusts the gap between slides
    responsive: [
      {
        breakpoint: 1024, // Tablet breakpoint
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const logos = [
    "/images/Home/Logos/acer.png",
    "/images/Home/Logos/amd.png",
    "/images/Home/Logos/apple.png",
    "/images/Home/Logos/asus.png",
    "/images/Home/Logos/brother.png",
    "/images/Home/Logos/canon.png",
  ];

  return (
    <>
      <div className="mt-[3.6rem]">
        {/* Hero section */}
        <section className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-background z-10">
          <div className="absolute top-10 right-0">
            <div className="absolute top-1/2 left-1/2 w-[30rem] h-[30rem] border-2 border-gray-300 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-3"></div>
            <div className="absolute top-1/2 left-1/2 w-[26rem] h-[26rem] border-2 border-gray-300 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-3"></div>
            <div className="absolute top-1/2 left-1/2 w-[22rem] h-[22rem] border-2 border-gray-300 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-3"></div>
            <div className="absolute top-1/2 left-1/2 w-72 h-72 border-2 border-gray-300 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-3"></div>
            <div className="absolute top-1/2 left-1/2 w-56 h-56 border-2 border-gray-300 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-3"></div>
            <div className="absolute top-1/2 left-1/2 w-40 h-40 border-2 border-gray-300 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-3"></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 border-2 border-gray-300 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-1"></div>
          </div>
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between ">
            {/* Left Section */}
            <div className="w-full md:w-1/2 text-center md:text-left font-heading">
              <span className="text-xl font-heading font-bold text-primary mb-3">
                Print Solutions
              </span>
              <h1 className="text-4xl md:text-[3.3rem] font-bold font-heading text-gray-800 leading-tight">
                Rent Printers, Enhance Your Workspace <br />
              </h1>
              <p className="text-xl text-gray-600 my-3">
                Our dedication to quality ensures the highest standards in all
                our offerings.
              </p>
              <ul className="text-lg mx-5 lg:mx-0 text-gray-600 leading-tight flex flex-col items-center justify-center md:items-start">
                <li className="flex justify-center md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 me-2 hidden lg:block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>{" "}
                  Trusted Provider of Quality Services
                </li>
                <li className="flex justify-center md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 me-2 hidden lg:block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>{" "}
                  Specializing in Printing, Office Equipment Rentals and
                  Transportation
                </li>
                <button
                  type="button"
                  className="flex text-white bg-primary border border-gray-300 focus:outline-none hover:bg-blue-prime focus:ring-4 focus:ring-gray-100 font-medium rounded-xl text-sm px-5 py-2.5 me-2 mt-5"
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
              </ul>
            </div>

            {/* Right Section */}
            <div className="relative w-full md:w-1/2 mt-10 md:mt-0 hidden lg:flex items-center justify-center">
              <div className="relative w-[28rem] h-[28rem] bg-gray-200 border border-gray-300 rounded-full flex items-center justify-center shadow-lg ">
                {/* Image for 3D effect */}
                <img
                  className=" bottom-8 max-w-[32rem] "
                  src="/images/Home/hero-3d.png"
                  alt="Office Image"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="relative z-20 mt-[100vh]  max-w-full overflow-hidden bg-background rounded-t-2xl">
        {/* Intro Section */}
        <section className="bg-blue-gradient rounded-t-2xl">
          <div className="container mx-auto flex flex-col md:flex-row py-5 md:py-[6rem]">
            <div className="md:w-5/12 w-full">
              <div className="rounded-2xl">
                <img
                  className="img rounded-2xl h-[26rem] w-full shrink-0 overflow-hidden object-cover lg:h-[30rem] lg:max-w-[30rem]"
                  src="/images/Home/Carboncraft-office.png"
                  alt="img"
                />
              </div>
            </div>
            <div className="md:w-7/12 w-full flex flex-col justify-center items-center">
              <div className="relative w-full px-4 m my-5 md:my-0">
                {/* Title Section */}
                <div className="relative inline-block">
                  <span className="text-xl font-heading font-bold text-primary mb-3">
                    Get to Know us!
                  </span>
                  <h1 className="text-4xl md:text-[3.3rem] font-bold font-heading text-background leading-tight my-3">
                    We’re UAE Based Printing Solutions Company
                  </h1>
                  <p className="font-heading text-xl text-background">
                    Welcome to Carbon Craft, your trusted partner for office and
                    event solutions across the UAE. We are dedicated to
                    excellence and customer satisfaction, providing high-quality
                    equipment and services for businesses and events in Dubai,
                    Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah,
                    and Fujairah.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="h-[0.12rem] w-full bg-gray-200"></div>

        {/* Specialities */}
        <section className="py-[6rem]">
          <div className="text-center">
            <span className="text-xl font-heading font-bold text-primary mb-3">
              What set&#39;s us apart
            </span>
            <h1 className="text-4xl md:text-[3.3rem] font-bold font-heading  text-gray-800 leading-tight my-3">
              Best Choice For Rentals
            </h1>
          </div>
          <div className="container mx-auto flex flex-col md:flex-row text-left mt-[4rem]">
            <div className="flex-1 mb-5 md:pb-0">
              <div className="mx-4 bg-blue-prime rounded-2xl p-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="primary"
                  className="size-14 stroke-blue-accent mb-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
                  />
                </svg>

                <h3 className="text-2xl md:text-2xl font-bold font-heading text-primary">
                  All-in-One
                </h3>
                <p className="text-body text-white">
                  We offer a broad range of solutions including printer, copier,
                  plotter, laptop, computer, and office furniture rentals and
                  sales, as well as annual maintenance contracts (AMC).
                </p>
              </div>
            </div>
            <div className="flex-1 mb-5 md:pb-0">
              <div className="mx-4 bg-blue-prime rounded-2xl p-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  className="size-14 stroke-blue-accent mb-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                  />
                </svg>

                <h3 className="text-2xl md:text-2xl font-bold font-heading text-primary">
                  Premium Products
                </h3>
                <p className="text-body text-white">
                  Our inventory features top-tier printers, copiers, computers,
                  laptops, and office furniture from well-known brands, ensuring
                  dependable performance.
                </p>
              </div>
            </div>
            <div className="flex-1 border-solid">
              <div className="mx-4 bg-blue-prime rounded-2xl p-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  className="size-14 stroke-blue-accent mb-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>

                <h3 className="text-2xl md:text-2xl font-bold font-heading text-primary">
                  Customer-Centric
                </h3>
                <p className="text-body text-white">
                  Our expert team is focused on understanding your specific
                  needs and delivering customized solutions. We aim for
                  excellence in every interaction with service and continuous
                  support.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="h-[0.12rem] w-full bg-gray-200"></div>

        {/* Our Services */}
        <section className="py-[6rem] bg-secondary">
          <div className="container mx-auto">
            <div className="text-center">
              <span className="text-xl font-heading font-bold text-primary mb-3">
                Latest Services
              </span>
              <h1 className="text-4xl md:text-[3.3rem] font-bold font-heading  text-gray-800 leading-tight my-3">
                Discover what we can do for you
              </h1>
            </div>
            <div className="mt-[4rem] sm:flex md:grid grid-cols-3 gap-4">
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
                      src="/images/Home/amc.png"
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
                      Comprehensive Annual Maintenance Contracts.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="max-w-sm bg-white border-2 border-white hover:border-primary rounded-2xl shadow-md">
                  <a href="#">
                    <img
                      className="rounded-3xl p-3"
                      src="/images/Home/office-equipments.png"
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
                      Equip Your Workspace with Quality Supplies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="h-[0.12rem] w-full bg-gray-200"></div>

        {/* Our Products */}
        <section className="container mx-auto py-[6rem]">
          <div className="text-center">
            <span className="text-xl font-heading font-bold text-primary mb-3">
              Our Products
            </span>
            <h1 className="text-4xl md:text-[3.3rem] font-bold font-heading text-gray-800 leading-tight my-3">
              Check out various items
            </h1>
          </div>
          <div className="mt-[4rem] sm:flex md:grid grid-cols-3 gap-4">
            <div className="mb-5 md:pb-0">
              <div className="max-w-sm border border-gray-200 rounded-2xl shadow-md relative overflow-hidden group">
                <div
                  className="bg-cover bg-center h-64"
                  style={{
                    backgroundImage: "url('images/Home/printers-plotters.png')",
                  }}
                ></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center p-5 bg-blue-prime/65 text-white opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight">
                    Printers & Plotters
                  </h5>
                </div>
              </div>
            </div>

            <div className="mb-5 md:pb-0">
              <div className="max-w-sm border border-gray-200 rounded-2xl shadow-md relative overflow-hidden group">
                <div
                  className="bg-cover bg-center h-64"
                  style={{
                    backgroundImage: "url('images/Home/Desktops-Laptops.png')",
                  }}
                ></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-5 bg-blue-prime/65 text-white opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight">
                      Desktops & Laptops
                    </h5>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="max-w-sm border border-gray-200 rounded-2xl shadow-md relative overflow-hidden group">
                <div
                  className="bg-cover bg-center h-64"
                  style={{
                    backgroundImage: "url('images/Home/Furnitures.png')",
                  }}
                ></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-5 bg-blue-prime/65 text-white opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight">
                      Furnitures
                    </h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="h-[0.12rem] w-full bg-gray-200"></div>

        {/* Brands */}
        <section className="container mx-auto py-[5.5rem]">
          <div className="text-center">
            <span className="text-xl font-heading font-bold text-primary mb-3">
              Brands
            </span>
            <h1 className="text-4xl md:text-[3.3rem] font-bold font-heading text-gray-800 leading-tight my-3">
              Explore Our Brand Partners
            </h1>
          </div>
          <div className="mt-[4rem]">
            <Slider {...settings}>
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="p-3 flex items-center justify-center "
                >
                  <img
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    className="bg-white border-2 rounded-md h-auto w-auto"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
