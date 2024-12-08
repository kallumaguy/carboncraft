// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "flowbite";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Enquiry = () => {
  const [selectedItem, setSelectedItem] = useState("Item 1");

  const forms = {
    "Item 1": (
      <form className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            placeholder="Enter your name"
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            placeholder="Enter your email"
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
      </form>
    ),
    "Item 2": (
      <form className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Phone</span>
          <input
            type="text"
            placeholder="Enter your phone number"
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
      </form>
    ),
    "Item 3": (
      <form className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Address</span>
          <textarea
            placeholder="Enter your address"
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          ></textarea>
        </label>
      </form>
    ),
    "Item 4": (
      <form className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Date of Birth</span>
          <input
            type="date"
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
      </form>
    ),
  };

  return (
    <div className="mt-[3.6rem]">
      <section className="bg-services bg-cover">
        <div className="py-[6rem] ">
          <div className="container mx-auto ">
            <h1 className="text-4xl md:text-[3.3rem] font-medium font-heading  text-background leading-tight my-3">
              Enquire <br />
              Your needs
            </h1>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container mx-auto p-6">
          <h1 className="text-2xl font-bold mb-4">Dynamic Form</h1>
          {/* Dropdown for selecting list item */}
          <div className="mb-6">
            <label className="block mb-2 text-gray-700 font-medium">
              Select an Item
            </label>
            <select
              value={selectedItem}
              onChange={(e) => setSelectedItem(e.target.value)}
              className="block px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              {Object.keys(forms).map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          {/* Display the corresponding form */}
          <div className="p-4 border rounded-md shadow-md bg-gray-50">
            {forms[selectedItem]}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enquiry;
