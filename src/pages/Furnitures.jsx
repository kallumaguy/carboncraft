// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import "flowbite";
import { NavLink } from "react-router-dom";

const Furnitures = () => {
  useEffect(() => {
    document.title = " Furnitures | Carbon Craft";
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-[3.6rem]">
      <section className="bg-furniture-bg bg-center bg-cover">
      <style>
          {`
           /* Keyframe for fade-in animation */
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

       .animate-fadeIn {
        animation: fadeIn 0.8s ease-in-out forwards;
        opacity: 0;
      }
          `}
        </style>
        <div className="py-[6rem] ">
          <div className="container mx-auto ">
            <h1 className="text-4xl md:text-[3.3rem] font-medium font-heading  text-background leading-tight my-3 animate-fadeIn">
              Furnitures
            </h1>
          </div>
        </div>
      </section>

      <section className="py-[6rem]">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl xl:text-[3.3rem] font-bold font-heading  text-gray-800 leading-tight my-3">
              Find your perfect workstation
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-1 bg-orange-gradient rounded-3xl shadow-md my-[4rem]">
            <div className="p-3 md:p-5">
              <img
                className="hidden lg:block xl:hidden lg:max-w-md xl:max-w-lg rounded-2xl border-2"
                src="/images/Furnitures/office-furnitures.webp"
                alt="Rent Printer"
              />
              <img
                className="block lg:hidden xl:block xl:max-w-lg rounded-2xl border-2"
                src="/images/Furnitures/office-furnitures-mob.webp"
                alt=""
              />
            </div>
            <div className="p-5">
              <h5 className="mb-2 text-2xl lg:text-3xl font-heading font-bold tracking-tight text-white">
                Office, Workspace Furnitures
              </h5>
              <p className="text-lg font-normal text-white ">
                Enhance your office with our premium furniture collection. From
                ergonomic chairs and sleek desks to versatile storage solutions,
                we offer stylish and functional pieces designed to improve
                comfort and productivity in any workspace.
              </p>
              <NavLink to="/enquire/Furnitures">
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

          <div className="flex flex-col-reverse lg:flex-row items-center gap-1 bg-orange-gradient rounded-3xl shadow-md my-[4rem]">
            <div className="p-5">
              <h5 className="mb-2 text-2xl lg:text-3xl font-heading font-bold tracking-tight text-white">
                Outdoor Furnitures
              </h5>
              <p className="text-lg font-normal text-white">
                Explore our range of outdoor furniture, perfect for creating a
                stylish and comfortable outdoor space. From durable seating and
                tables to weatherresistant loungers, we offer high-quality
                pieces designed to withstand the elements while adding elegance
                to your patio, garden, or balcony.
              </p>
              <NavLink to="/enquire/Furnitures">
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
            <div className="p-3 md:p-5">
              <img
                className="hidden lg:block xl:hidden lg:max-w-md xl:max-w-lg rounded-2xl border-2"
                src="/images/Furnitures/outdoor-furnitures-lg.webp"
                alt="Rent Printer"
              />

              <img
                className=" block lg:hidden xl:block xl:max-w-lg rounded-2xl border-2"
                src="/images/Furnitures/outdoor-furnitures.webp"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-1 bg-orange-gradient rounded-3xl shadow-md my-[4rem]">
            <div className="p-3 md:p-5">
              <img
                className="hidden lg:block xl:hidden lg:max-w-md xl:max-w-lg rounded-2xl border-2"
                src="/images/Furnitures/customized-furnitures-lg.webp"
                alt="Rent Printer"
              />
              <img
                className=" block lg:hidden xl:block xl:max-w-lg rounded-2xl border-2"
                src="/images/Furnitures/customized-furnitures.webp"
                alt=""
              />
            </div>
            <div className="p-5">
              <h5 className="mb-2 text-2xl lg:text-3xl font-heading font-bold tracking-tight text-white leading-normal">
                Customised Furnitures
              </h5>
              <p className="text-base font-body font-normal text-white">
                Create the perfect workspace or home environment with our
                customized furniture. Tailored to your specific needs and style,
                we offer bespoke solutions for desks, seating, storage, and
                more, ensuring a unique and functional design that fits your
                space perfectly
              </p>
              <NavLink to="/enquire/Furnitures">
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
      </section>
    </div>
  );
};

export default Furnitures;
