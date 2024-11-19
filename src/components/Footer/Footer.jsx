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
    <>
      <footer className="bg-accent pt-12 pb-5">

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
              <a href="">
                <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
              </a>
              <a>
                <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6" />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="flex-1">
              <img
                className="img w-[300px] mx-sm-auto"
                src="images/Footer/carbon-craft-logo-2.png"
                alt="image"
              />
            </div>
            <div className="flex-1"></div>
          </div>


          <div className="text-center mt-xl-0 mt-3">
            <p className="text-sm text-background">
              Carbon Craft Equipments Trading L.L.C-FZ © All Rights Reserved -
              2024
            </p>
          </div>
          <hr className="h-px my-3 bg-background border-0" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
