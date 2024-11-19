// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "flowbite";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-50">
      <nav className="border-b border-gray-200 p-2 rounded">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex">
            <img
              className="img"
              src="images/Header/navbar-icon.png"
              width={50}
              height={40}
              alt=""
            />
            <span className="self-center text-lg font-heading font-semibold whitespace-nowrap">
              CarbonCraft
            </span>
          </a>

          {/* Hamburger Button */}
          <button
            type="button"
            className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span className="sr-only">Toggle Menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          {/* Navbar Links */}
          <div
            className={`${
              showMenu ? "block" : "hidden"
            } md:block w-full md:w-auto`}
          >
            <ul className="flex-col md:flex-row flex md:space-x-4 mt-4 md:mt-0 font-body font-medium">
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 text-primary transition-all duration-200"
                >
                  Home
                </a>
              </li>

              {/* Services Menu */}
              <li className="relative group md:static">
                <button className="flex items-center px-3 py-2 text-text hover:text-primary transition-all duration-200">
                  Services
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <ul className="hidden group-hover:block md:absolute bg-white md:py-1 md:w-48 space-y-1 md:space-y-0 md:pl-0 pl-md-6 md:border border-gray-200">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-text hover:bg-primary hover:text-white transition-all duration-200"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-text hover:bg-primary hover:text-white transition-all duration-200"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-text hover:bg-primary hover:text-white transition-all duration-200"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
              </li>

              {/* Products Menu */}
              <li className="relative group md:static">
                <button className="flex items-center px-3 py-2 text-text hover:text-primary transition-all duration-200">
                  Products
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <ul className="hidden group-hover:block md:absolute bg-white shadow-lg md:py-1 md:w-48 space-y-1 md:space-y-0 md:pl-0 pl-6">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-text hover:bg-primary hover:text-white transition-all duration-200"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-text hover:bg-primary hover:text-white transition-all duration-200"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-text hover:bg-primary hover:text-white transition-all duration-200"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  href="#"
                  className="block px-3 py-2 text-text hover:text-primary transition-all duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 text-text hover:text-primary transition-all duration-200"
                >
                  Enquiry
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
