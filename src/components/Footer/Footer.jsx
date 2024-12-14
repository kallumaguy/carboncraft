// eslint-disable-next-line no-unused-vars
import React from "react";
import "flowbite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className=" relative z-20">
      <section className="bg-blue-prime hover:bg-[#1e3a8a]">
        <a href="https://api.whatsapp.com/send/?phone=%2B971543917731&text&type=phone_number&app_absent=0">
        <div className="container mx-auto px-4 py-[4.8rem] md:py-[6rem]">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-[3.3rem] font-medium font-heading text-white leading-tight my-3 me-3">
              Connect with us
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="size-6 md:size-10 stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </div>
        </a>
      </section>

      <section className="bg-primary pt-12 pb-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-3 md:mb-0">
              <ul className="flex md:space-x-4 justify-center space-x-2 font-heading text-background">
                <li className="">
                  <a href="/index.html" className="nav-link px-1 px-xl-3">
                    Home
                  </a>
                </li>
                <li className="">
                  <a href="/safari.html" className="nav-link px-1 px-xl-3">
                    Products
                  </a>
                </li>
                <li className="">
                  <a href="/safari.html" className="nav-link px-1 px-xl-3">
                    About
                  </a>
                </li>
                <li className="">
                  <a href="/contact.html" className="nav-link px-1 px-xl-3">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex space-x-5 text-background">
              <a href="https://www.linkedin.com/company/carboncraftequipments">
                <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
              </a>
              <a href="https://api.whatsapp.com/send/?phone=%2B971543917731&text&type=phone_number&app_absent=0">
                <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/people/Carbon-Craft-Equipments-Trading/61563072509008/?mibextid=ZbWKwL">
                <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/carboncraft_uae/">
                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row"></div>
          <div className="container-fluid flex flex-col md:flex-row items-center justify-center py-6 md:py-[3.5rem] text-[4.5rem] md:text-[5.5rem] lg:text-[7.5rem] xl:text-[11rem]">
            <div className="relative font-logo font-medium tracking-[-0.02em] text-orange-200 leading-none md:leading-[7rem]/[18.75rem]">
              CARBON
            </div>
            <div className="relative font-logo font-bold tracking-[0.03em] text-orange-200 leading-none md:leading-[6rem]">
              CRAFT
            </div>
          </div>

          <div className="text-center mt-xl-0 mt-3">
            <p className="text-sm text-background">
              Carbon Craft Equipments Trading L.L.C-FZ <br className="md:hidden" /> © All Rights Reserved -
              2024
            </p>
          </div>
          <hr className="h-px my-3 bg-background border-0" />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
