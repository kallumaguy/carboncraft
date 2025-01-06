// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from "react";
import "flowbite";
import { NavLink } from "react-router-dom";

const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/Services",
    display: "Services",
  },
  {
    path: "/Products",
    display: "Products",
    submenu: [
      {
        path: "/Printers-and-Plotters",
        display: "Printers & Plotters",
      },
      {
        path: "/Desktops-and-Laptops",
        display: "Desktops & Laptops",
      },
      {
        path: "/Furnitures",
        display: "Furnitures",
      },
    ],
  },
  {
    path: "/About",
    display: "About",
  },
  {
    path: "/Enquiry",
    display: "Enquiry",
  },
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setShowMenu(false);
      setActiveSubMenu(null);
    }
  };

  const handleMenuItemClick = () => {
    setShowMenu(false);
    setActiveSubMenu(null);
  };

  const handleSubMenuClick = (index) => {
    setActiveSubMenu((prev) => (prev === index ? null : index));
  };

  const handleSubMenuHover = (index) => {
    if (!showMenu) setActiveSubMenu(index);
  };

  const handleSubMenuLeave = () => {
    if (!showMenu) setActiveSubMenu(null);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-50">
      <nav className="border-b border-gray-200 p-3 rounded">
        <div className="mx-4 md:mx-5 flex flex-wrap items-center justify-between">
          <NavLink to="/" className="flex">
            <img
              className="img"
              loading="lazy"
              decoding="async"
              src="images/Header/carboncraft-navlogo.webp"
              width={190}
              height={40}
              alt=""
            />
          </NavLink>
          <button
            ref={buttonRef}
            type="button"className={`md:hidden ml-3 text-gray-900 rounded-lg inline-flex items-center justify-center transition-all duration-500 ease-in-out ${
              showMenu ? "delay-300" : "delay-500"
            }`}
            onClick={() => setShowMenu((prev) => !prev)}
          >
            <span className="sr-only">Toggle Menu</span>
            {showMenu ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
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
            )}
          </button>

          <div
            ref={menuRef}
            className={`${
              showMenu ? "max-h-screen sm:max-h-screen" : "max-h-0 md:max-h-32"
            } md:block overflow-hidden md:overflow-visible transition-all duration-500 ease-in-out w-full md:w-auto`}
          >
            <ul className="flex-col md:flex-row flex md:space-x-4 mt-4 md:mt-0 font-body text-md font-medium">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="relative group"
                  onMouseEnter={() => handleSubMenuHover(index)}
                  onMouseLeave={handleSubMenuLeave}
                >
                  {link.submenu ? (
                    <>
                      <button
                        className={`flex items-center px-3 py-2 transition-all duration-300 ${
                          activeSubMenu === index ||
                          link.submenu.some((subLink) =>
                            window.location.pathname.startsWith(subLink.path)
                          )
                            ? "text-primary"
                            : "text-text hover:text-primary"
                        }`}
                        onClick={() => handleSubMenuClick(index)}
                      >
                        {link.display}
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
                      <ul
                        className={`${
                          activeSubMenu === index ? "block" : "hidden"
                        } md:absolute bg-white md:shadow-lg md:w-48 space-y-1 md:space-y-0 lg:border`}
                      >
                        {link.submenu.map((subLink, subIndex) => (
                          <li key={subIndex}>
                            <NavLink
                              to={subLink.path}
                              className={(navClass) =>
                                navClass.isActive
                                  ? "block px-4 py-2 text-[.9rem] font-body bg-primary text-white"
                                  : "block px-4 py-2 text-[.9rem] font-body text-text hover:bg-primary hover:text-white transition-all duration-400"
                              }
                              onClick={handleMenuItemClick}
                            >
                              {subLink.display}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={(navClass) =>
                        navClass.isActive
                          ? "block px-3 py-2 text-primary"
                          : "block px-3 py-2 text-text hover:text-primary"
                      }
                      onClick={handleMenuItemClick}
                    >
                      {link.display}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
