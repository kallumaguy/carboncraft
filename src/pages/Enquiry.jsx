// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "flowbite";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const Enquiry = () => {
  const { item } = useParams(); // Get the path parameter
  const [selectedItem, setSelectedItem] = useState("default");
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    emirate: [],
    leasingPurpose: "",
    equipmentBrand: "",
    specialRequirements: "",
    monthlyUsage: "",
    files: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0]; // Get the selected file
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("upload_preset", "carbon_preset"); // Replace with your Cloudinary upload preset

      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dw4cqeetr/image/upload", // Replace with your Cloudinary URL
          formData
        );
        const imageUrl = response.data.secure_url; // Extract the uploaded image URL

        // Update the formData state with the image URL, keeping the other fields intact
        setFormData((prevFormData) => ({
          ...prevFormData,
          files: [...prevFormData.files, imageUrl], // Add the image URL to the `files` array
        }));

        alert("Image uploaded successfully!");
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Failed to upload image.");
      }
    }
  };

  const handleChange = (e) => {
    // eslint-disable-next-line no-unused-vars
    const { name, value, checked, type, files } = e.target;

    if (type === "file") {
      // If the input type is file, handle the file change separately
      handleFileChange(e);
    } else if (type === "checkbox") {
      // Handling checkbox input
      const currentValues = formData[name] || []; // Retrieve existing values for the checkbox group

      if (checked) {
        // Add value to the array if checked
        setFormData({
          ...formData,
          [name]: [...currentValues, value],
        });
      } else {
        // Remove value from the array if unchecked
        setFormData({
          ...formData,
          [name]: currentValues.filter((v) => v !== value),
        });
      }
    } else {
      // Handling other inputs (text, radio, etc.)
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  console.log(formData);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to the backend (Node.js with SendGrid)
      await axios.post("http://localhost:5000/send-email", {
        formName: selectedItem,
        formData: formData,
      });

      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email.");
    }
  };

  const forms = {
    Printers: (
      //Printer Form
      <form
        className="space-y-4 font-body p-4 "
        onSubmit={(e) => handleSubmit(e)}
      >
        {/* First Row: Name and Organization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block ">
            <span className="text-gray-800 font-semibold">Name</span>
            <input
              type="text"
              required
              name="name"
              onChange={handleChange}
              placeholder="Enter your name"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>
          <label className="block">
            <span className="text-gray-800 font-semibold">Organization</span>
            <input
              type="text"
              name="organization"
              onChange={handleChange}
              required
              placeholder="Enter your organization"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>
        </div>

        {/* Second Row: Email and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-gray-800 font-semibold">Email</span>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>
          <label className="block">
            <span className="text-gray-800 font-semibold">Phone</span>
            <input
              type="text"
              name="phone"
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>
        </div>

        {/* Emirate */}
        <div className="block">
          <span className="text-gray-800 font-semibold">Emirate</span>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-2">
            {[
              "Abu Dhabi",
              "Al Ain",
              "Abu Dhabi (West)",
              "Dubai",
              "Sharjah",
              "Ajman",
              "Fujairah",
              "RAK",
            ].map((emirate, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`emirate-${index}`}
                  name="emirate"
                  onChange={handleChange}
                  value={emirate}
                  className="mr-2 rounded border-gray-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
                <label
                  htmlFor={`emirate-${index}`}
                  className="ml-2 text-gray-700"
                >
                  {emirate}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Purpose of Leasing */}
        <label className="block font-semibold text-gray-800">
          Purpose of Leasing Machine *
        </label>
        <div className="flex items-center space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="leasingPurpose"
              onChange={handleChange}
              value="Office Use"
              className="form-radio text-gray-700 border-gray-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
            <span className="ml-2 text-gray-700">
              For Office use (Long Term)
            </span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="leasingPurpose"
              value="Event use"
              onChange={handleChange}
              className="form-radio text-gray-700 border-gray-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
            <span className="ml-2 text-gray-700">For Events (Short Term)</span>
          </label>
        </div>

        {/* Equipment Brand */}
        <div className="block">
          <span className="text-gray-800 font-semibold">Equipment Brand *</span>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-2">
            {[
              "HP",
              "Canon",
              "Epson",
              "Brother",
              "Xerox",
              "Ricoh",
              "Kyocera",
              "Samsung",
            ].map((brand, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`brand-${index}`}
                  name="equipmentBrand"
                  onChange={handleChange}
                  value={brand}
                  className="mr-2 rounded border-gray-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
                <label
                  htmlFor={`brand-${index}`}
                  className="ml-2 text-gray-700"
                >
                  {brand}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Special Requirements */}
        <label className="block">
          <span className="text-gray-800 font-semibold">
            Special Requirements
          </span>
          <textarea
            placeholder="Enter any special requirements here"
            name="specialRequirements"
            onChange={handleChange}
            rows="4"
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 resize-none"
          ></textarea>
        </label>

        {/* Approximate Monthly Usage */}
        <label className="block">
          <span className="text-gray-800 font-semibold">
            Approximate Monthly Usage of Colour and BW Prints/Copies
          </span>
          <input
            type="text"
            name="monthlyUsage"
            onChange={handleChange}
            placeholder="Enter the approximate number of monthly prints/copies"
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>

        {/* File Upload */}
        <label className="block">
          <span className="text-gray-800 font-semibold">
            Upload your Trade License & TRN Certificate
          </span>
          <p className="text-sm text-gray-500 mb-2">
            Upload up to 5 supported files: PDF, document, or image. Max 10 MB
            per file.
          </p>
          <input
            type="file"
            name="files"
            onChange={handleChange}
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            multiple
            className="block w-full mt-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-6 py-2 text-white font-body bg-primary rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    ),
    Systems: (
      //Desktop/laptop form
      <form className="space-y-4 font-body p-4 ">
        {/* First Row: Name and Organization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block ">
            <span className="text-gray-800 font-semibold">Name</span>
            <input
              type="text"
              required
              placeholder="Enter your name"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>
          <label className="block">
            <span className="text-gray-800 font-semibold">Organization</span>
            <input
              type="text"
              required
              placeholder="Enter your organization"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>
        </div>

        {/* Second Row: Email and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-gray-800 font-semibold">Email</span>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>
          <label className="block">
            <span className="text-gray-800 font-semibold">Phone</span>
            <input
              type="text"
              required
              placeholder="Enter your phone number"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>
        </div>

        {/* Emirate */}
        <label className="block">
          <span className="text-gray-800 font-semibold">Emirate</span>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-2">
            {[
              "Abu Dhabi",
              "Al Ain",
              "Abu Dhabi (West)",
              "Dubai",
              "Sharjah",
              "Ajman",
              "Fujairah",
              "RAK",
            ].map((emirate, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`emirate-${index}`}
                  className="mr-2 rounded border-gray-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
                <label htmlFor={`emirate-${index}`} className="text-gray-700">
                  {emirate}
                </label>
              </div>
            ))}
          </div>
        </label>

        {/* Rental Period */}
        <label className="block mt-4">
          <span className="text-gray-800 font-semibold">Rental Period</span>
          <div className="flex items-center space-x-4 mt-2">
            {["Long Term", "Short Term", "Purchase"].map((period, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`rental-${index}`}
                  className="mr-2 rounded border-gray-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
                <label htmlFor={`rental-${index}`} className="text-gray-700">
                  {period}
                </label>
              </div>
            ))}
          </div>
        </label>

        {/* Product */}
        <label className="block mt-4">
          <span className="text-gray-800 font-semibold">Product</span>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-2">
            {[
              "Laptop",
              "Gaming Laptop",
              "Chromebook",
              "Tablet",
              "Desktop",
              "Server ",
            ].map((product, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`product-${index}`}
                  className="mr-2 rounded border-gray-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
                <label htmlFor={`product-${index}`} className="text-gray-700">
                  {product}
                </label>
              </div>
            ))}

            {/* Other Option */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="product-other"
                className="mr-2 rounded border-gray-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                onChange={(e) => {
                  const otherInput = document.getElementById(
                    "product-other-input"
                  );
                  otherInput.style.display = e.target.checked
                    ? "block"
                    : "none";
                }}
              />
              <label htmlFor="product-other" className="text-gray-700">
                Other
              </label>
            </div>
          </div>

          {/* Textbox for "Other" */}
          <input
            type="text"
            id="product-other-input"
            placeholder="Please specify"
            className="block w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            style={{ display: "none" }} // Initially hidden
          />
        </label>

        {/* Preferred Brands */}
        <label className="block mt-4">
          <span className="text-gray-800 font-semibold">Preferred Brands</span>
          <select
            className="block  mt-2 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            required
          >
            <option value="" disabled selected>
              Select your preferred brand
            </option>
            {[
              "Apple",
              "Samsung",
              "HP",
              "Toshiba",
              "Dell",
              "Microsoft",
              "Asus",
            ].map((brand, index) => (
              <option key={index} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </label>

        {/* Special Requirements */}
        <label className="block">
          <span className="text-gray-800 font-semibold">
            Special Requirements
          </span>
          <textarea
            placeholder="Enter any special requirements here"
            rows="4"
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 resize-none"
          ></textarea>
        </label>

        {/* Third Section: File Upload */}
        <label className="block">
          <span className="text-gray-800 font-semibold">
            Upload your Trade License & TRN Certificate
          </span>
          <p className="text-sm text-gray-500 mb-2">
            Upload up to 5 supported files: PDF, document, or image. Max 10 MB
            per file.
          </p>
          <input
            type="file"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            multiple
            className="block w-full mt-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-6 py-2 text-white bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    ),
    Furnitures: (
      // Furniture Form
      <form className="space-y-4 font-body p-4 ">
        {/* First Row: Name and Organization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block ">
            <span className="text-gray-800 font-semibold">Name</span>
            <input
              type="text"
              required
              placeholder="Enter your name"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>
          <label className="block">
            <span className="text-gray-800 font-semibold">Organization</span>
            <input
              type="text"
              required
              placeholder="Enter your organization"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>
        </div>

        {/* Second Row: Email and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-gray-800 font-semibold">Email</span>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>
          <label className="block">
            <span className="text-gray-800 font-semibold">Phone</span>
            <input
              type="text"
              required
              placeholder="Enter your phone number"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>
        </div>

        {/* Emirate */}
        <label className="block">
          <span className="text-gray-800 font-semibold">Emirate</span>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-2">
            {[
              "Abu Dhabi",
              "Al Ain",
              "Abu Dhabi (West)",
              "Dubai",
              "Sharjah",
              "Ajman",
              "Fujairah",
              "RAK",
            ].map((emirate, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`emirate-${index}`}
                  className="mr-2 rounded border-gray-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
                <label htmlFor={`emirate-${index}`} className="text-gray-700">
                  {emirate}
                </label>
              </div>
            ))}
          </div>
        </label>

        {/* Rental Period */}
        <label className="block mt-4">
          <span className="text-gray-800 font-semibold">Rental Period</span>
          <div className="flex items-center space-x-4 mt-2">
            {["Long Term", "Short Term", "Purchase"].map((period, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`rental-${index}`}
                  className="mr-2 rounded border-gray-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
                <label htmlFor={`rental-${index}`} className="text-gray-700">
                  {period}
                </label>
              </div>
            ))}
          </div>
        </label>

        {/* Furniture Type */}
        <label className="block mt-4">
          <span className="text-gray-800 font-semibold">Furniture Type</span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
            {["Office", "Outdoor", "Custom"].map((furniture, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`furniture-${index}`}
                  className="mr-2 rounded border-gray-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
                <label htmlFor={`furniture-${index}`} className="text-gray-700">
                  {furniture}
                </label>
              </div>
            ))}

            {/* Other Option */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="furniture-other"
                className="mr-2 rounded border-gray-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                onChange={(e) => {
                  const otherInput = document.getElementById(
                    "furniture-other-input"
                  );
                  otherInput.style.display = e.target.checked
                    ? "block"
                    : "none";
                }}
              />
              <label htmlFor="furniture-other" className="text-gray-700">
                Other
              </label>
            </div>
          </div>

          {/* Textbox for "Other" */}
          <input
            type="text"
            id="furniture-other-input"
            placeholder="Please specify"
            className="block w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            style={{ display: "none" }} // Initially hidden
          />
        </label>

        {/* Specify Requirements */}
        <label className="block">
          <span className="text-gray-800 font-semibold">
            Specify Requirements
          </span>
          <textarea
            placeholder="Specify Requirements for furniture"
            rows="4"
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 resize-none"
          ></textarea>
        </label>

        {/* Special Requests */}
        <label className="block">
          <span className="text-gray-800 font-semibold">Special Requests</span>
          <textarea
            placeholder="Special Requests for furniture"
            rows="4"
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 resize-none"
          ></textarea>
        </label>

        {/* Third Section: File Upload */}
        <label className="block">
          <span className="text-gray-800 font-semibold">
            Upload your Trade License & TRN Certificate
          </span>
          <p className="text-sm text-gray-500 mb-2">
            Upload up to 5 supported files: PDF, document, or image. Max 10 MB
            per file.
          </p>
          <input
            type="file"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            multiple
            className="block w-full mt-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-6 py-2 text-white bg-primary rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    ),
    item4: (
      //Other form
      <form className="space-y-4 font-body p-4 ">
        {/* First Row: Name and Organization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block ">
            <span className="text-gray-800 font-semibold">Name</span>
            <input
              type="text"
              required
              placeholder="Enter your name"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>
          <label className="block">
            <span className="text-gray-800 font-semibold">Organization</span>
            <input
              type="text"
              required
              placeholder="Enter your organization"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>
        </div>

        {/* Second Row: Email and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-gray-800 font-semibold">Email</span>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>
          <label className="block">
            <span className="text-gray-800 font-semibold">Phone</span>
            <input
              type="text"
              required
              placeholder="Enter your phone number"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>
        </div>

        {/* Emirate */}
        <label className="block">
          <span className="text-gray-800 font-semibold">Emirate</span>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-2">
            {[
              "Abu Dhabi",
              "Al Ain",
              "Abu Dhabi (West)",
              "Dubai",
              "Sharjah",
              "Ajman",
              "Fujairah",
              "RAK",
            ].map((emirate, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`emirate-${index}`}
                  className="mr-2 rounded border-gray-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
                <label htmlFor={`emirate-${index}`} className="text-gray-700">
                  {emirate}
                </label>
              </div>
            ))}
          </div>
        </label>

        {/* Specify Requirements */}
        <label className="block">
          <span className="text-gray-800 font-semibold">
            Specify Requirements
          </span>
          <textarea
            placeholder="Specify office Requirements"
            rows="4"
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 resize-none"
          ></textarea>
        </label>

        {/* Third Section: File Upload */}
        <label className="block">
          <span className="text-gray-800 font-semibold">
            Upload your Trade License & TRN Certificate
          </span>
          <p className="text-sm text-gray-500 mb-2">
            Upload up to 5 supported files: PDF, document, or image. Max 10 MB
            per file.
          </p>
          <input
            type="file"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            multiple
            className="block w-full mt-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-6 py-2 text-white bg-primary rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    ),
  };

  const itemDisplayNames = {
    default: "Choose a product",
    Printers: "Printers",
    Systems: "Desktops/Laptops",
    Furnitures: "Furnitures",
    item4: "Other Equipments",
  };

  useEffect(() => {
    // Set item only if it is valid
    if (item && itemDisplayNames[item]) {
      setSelectedItem(item);
    } else {
      setSelectedItem("default");
    }
  }, [item]);

  return (
    <div className="mt-[3.6rem]">
      <section className="bg-enquiry-bg bg-center bg-cover">
        <div className="py-[6rem]">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-[3.3rem] font-medium font-heading text-background leading-tight my-3">
              Enquire <br />
              Your needs
            </h1>
          </div>
        </div>
      </section>
      <section className="bg-secondary">
        <div className="container mx-auto p-6">
          <h1 className="text-2xl font-body font-semibold my-4 leading-tight">
            Kindly fill the form, we will be sharing you the lease/rental
            quotation shortly!
          </h1>
          <div className="mb-6">
            <label className="block mb-2 font-body text-gray-800 font-semibold">
              Enquire for:
            </label>
            <select
              value={selectedItem}
              onChange={(e) => setSelectedItem(e.target.value)}
              className="block px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              <option value="default" disabled>
                {itemDisplayNames["default"]}
              </option>
              {Object.keys(itemDisplayNames).map(
                (key) =>
                  key !== "default" && (
                    <option key={key} value={key}>
                      {itemDisplayNames[key]}
                    </option>
                  )
              )}
            </select>
          </div>
          <div className="">
            {selectedItem !== "default" && forms[selectedItem]}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enquiry;
