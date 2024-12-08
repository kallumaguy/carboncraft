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
    <div className="max-w-4xl mx-auto p-6 mt-[3.6rem]">
      <h1 className="text-2xl font-bold mb-4">Enquiry Form</h1>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-6">
        {Object.keys(forms).map((item) => (
          <li key={item}>
            <button
              className={`px-4 py-2 rounded-md ${
                selectedItem === item
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setSelectedItem(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
      <div className="p-4 border rounded-md shadow-md bg-gray-50">
        {forms[selectedItem]}
      </div>
    </div>
  );
};

export default Enquiry;
