// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import "flowbite";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

const PrintPlot = () => {
  useEffect(() => {
    document.title = " Printers-and-Plotters | Carbon Craft";
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-[3.6rem]">
      <section className="bg-printplot bg-cover">
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
              Printers and <br />
              Plotters
            </h1>
          </div>
        </div>
      </section>

      <section className="py-[6rem] bg-secondary">
        <div className="container mx-auto">
          <div className="">
            <span className="text-xl font-heading font-bold text-primary mb-3">
              Printers
            </span>
            
          </div>

          <div className="mt-[2.5rem]">
            <h1 className="text-3xl md:text-[3.3rem] font-bold font-heading text-gray-800 leading-tight my-3 ">
              Best in Class MFP&#39;s for Offices and Events
            </h1>

            <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="mb-5 md:pb-0">
                <div className="max-w-sm bg-white border-2 border-white rounded-2xl shadow-md">
                  <img
                    className="rounded-3xl p-3"
                    src="/images/Printers-Plotters/C256-C356.webp"
                    alt=""
                  />

                  <div className="flex flex-col items-center lg:items-start p-5 pt-1">
                    <h5 className="mb-2 text-sm md:text-md lg:text-md xl:text-xl text-center lg:text-left font-heading font-semibold tracking-tight text-gray-900 h-20 md:h-auto">
                      Canon imageRUNNER ADVANCE C256/C356
                    </h5>

                    <NavLink
                      to="/enquire/Printers"
                      className="inline-flex items-center px-2 md:px-3 py-2 text-sm font-body font-medium text-center text-white bg-primary rounded-lg hover:bg-accent focus:ring-1 focus:outline-none focus:ring-blue-300"
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
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="mb-5 md:pb-0">
                <div className="max-w-sm bg-white border-2 border-white rounded-2xl shadow-md">
                  <img
                    className="rounded-3xl p-3"
                    src="/images/Printers-Plotters/eC5500.webp"
                    alt=""
                  />
                  <div className="flex flex-col items-center lg:items-start p-5 pt-1">
                    <h5 className="mb-2 text-sm md:text-md lg:text-md xl:text-xl text-center lg:text-left font-heading font-semibold tracking-tight text-gray-900 h-20 md:h-auto">
                      Canon imageRUNNER Advance C5500 Series
                    </h5>

                    <NavLink
                      to="/enquire/Printers"
                      className="inline-flex items-center px-2 md:px-3 py-2 text-sm font-body font-medium text-center text-white bg-primary rounded-lg hover:bg-accent focus:ring-1 focus:outline-none focus:ring-blue-300"
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
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="mb-5 md:pb-0">
                <div className="max-w-sm bg-white border-2 border-white rounded-2xl shadow-md">
                  <img
                    className="rounded-3xl p-3"
                    src="/images/Printers-Plotters/C5200.webp"
                    alt=""
                  />

                  <div className="flex flex-col items-center lg:items-start p-5 pt-1">
                    <h5 className="mb-2 text-sm md:text-md lg:text-md xl:text-xl text-center lg:text-left font-heading font-semibold tracking-tight text-gray-900 h-20 md:h-auto">
                      Canon imageRUNNER Advance C5200 Series
                    </h5>

                    <NavLink
                      to="/enquire/Printers"
                      className="inline-flex items-center px-2 md:px-3 py-2 text-sm font-body font-medium text-center text-white bg-primary rounded-lg hover:bg-accent focus:ring-1 focus:outline-none focus:ring-blue-300"
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
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="mb-5 md:pb-0">
                <div className="max-w-sm bg-white border-2 border-white rounded-2xl shadow-md">
                  <img
                    className="rounded-3xl p-3"
                    src="/images/Printers-Plotters/C554-C654-C754.webp"
                    alt=""
                  />

                  <div className="flex flex-col items-center lg:items-start p-5 pt-1">
                    <h5 className="mb-2 text-sm md:text-md lg:text-md xl:text-xl text-center lg:text-left font-heading font-semibold tracking-tight text-gray-900 h-20 md:h-auto">
                      Konica Minolta <br />
                      C554, C654, C754
                    </h5>

                    <NavLink
                      to="/enquire/Printers"
                      className="inline-flex items-center px-2 md:px-3 py-2 text-sm font-body font-medium text-center text-white bg-primary rounded-lg hover:bg-accent focus:ring-1 focus:outline-none focus:ring-blue-300"
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
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="mb-5 md:pb-0">
                <div className="max-w-sm bg-white border-2 border-white rounded-2xl shadow-md">
                  <img
                    className="rounded-3xl p-3"
                    src="/images/Printers-Plotters/C7100s-C7110s.webp"
                    alt=""
                  />

                  <div className="flex flex-col items-center lg:items-start p-5 pt-1">
                    <h5 className="mb-2 text-sm md:text-md lg:text-md xl:text-xl text-center lg:text-left font-heading font-semibold tracking-tight text-gray-900 h-20 md:h-auto">
                      RICOH Pro <br />
                      C7100s, C7110s
                    </h5>

                    <NavLink
                      to="/enquire/Printers"
                      className="inline-flex items-center px-2 md:px-3 py-2 text-sm font-body font-medium text-center text-white bg-primary rounded-lg hover:bg-accent focus:ring-1 focus:outline-none focus:ring-blue-300"
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
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="mb-5 md:pb-0">
                <div className="max-w-sm bg-white border-2 border-white rounded-2xl shadow-md">
                  <img
                    className="rounded-3xl p-3"
                    src="/images/Printers-Plotters/MFC-L3760.webp"
                    alt=""
                  />

                  <div className="flex flex-col items-center lg:items-start p-5 pt-1">
                    <h5 className="mb-2 text-sm md:text-md lg:text-md xl:text-xl text-center lg:text-left font-heading font-semibold tracking-tight text-gray-900 h-20 md:h-auto">
                      Brother MFC-L3760 Color LaserJet Printer
                    </h5>

                    <NavLink
                      to="/enquire/Printers"
                      className="inline-flex items-center px-2 md:px-3 py-2 text-sm font-body font-medium text-center text-white bg-primary rounded-lg hover:bg-accent focus:ring-1 focus:outline-none focus:ring-blue-300"
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
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="mb-5 md:pb-0">
                <div className="max-w-sm bg-white border-2 border-white rounded-2xl shadow-md">
                  <img
                    className="rounded-3xl p-3"
                    src="/images/Printers-Plotters/MFP-M477.webp"
                    alt=""
                  />

                  <div className="flex flex-col items-center lg:items-start p-5 pt-1">
                    <h5 className="mb-2 text-sm md:text-md lg:text-md xl:text-xl text-center lg:text-left font-heading font-semibold tracking-tight text-gray-900 h-20 md:h-auto md:h-auto">
                      HP Colour LaserJet Pro MFP M477 fwd
                    </h5>

                    <NavLink
                      to="/enquire/Printers"
                      className="inline-flex items-center px-2 md:px-3 py-2 text-sm font-body font-medium text-center text-white bg-primary rounded-lg hover:bg-accent focus:ring-1 focus:outline-none focus:ring-blue-300"
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
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="mb-5 md:pb-0">
                <div className="max-w-sm bg-white border-2 border-white rounded-2xl shadow-md">
                  <img
                    className="rounded-3xl p-3"
                    src="/images/Printers-Plotters/5003i-5004i.webp"
                    alt=""
                  />

                  <div className="flex flex-col items-center lg:items-start p-5 pt-1">
                    <h5 className="mb-2 text-sm md:text-md lg:text-md xl:text-xl text-center lg:text-left font-heading font-semibold tracking-tight text-gray-900 h-20 md:h-auto">
                      Kyocera TASKalpha 5003i, 5004i
                    </h5>

                    <NavLink
                      to="/enquire/Printers"
                      className="inline-flex items-center px-2 md:px-3 py-2 text-sm font-body font-medium text-center text-white bg-primary rounded-lg hover:bg-accent focus:ring-1 focus:outline-none focus:ring-blue-300"
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
                    </NavLink>
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
