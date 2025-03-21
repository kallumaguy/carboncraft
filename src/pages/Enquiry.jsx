// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "flowbite";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { IoIosCheckmarkCircle } from "react-icons/io"; // Tick icon

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

  const [systemFormData, setSystemFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    emirate: [],
    rentalPeriod: "",
    product: [],
    brand: [],
    specialRequirements: "",
    files: "",
  });

  const [furnitureFormData, setFurnitureFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    emirate: [], // Array to hold selected emirates
    enquireFor: "", // Single value for rental or purchase
    furnitureTypes: [], // Array to hold selected furniture types
    requirements: "", // Specify requirements textarea
    specialRequests: "", // Special requests textarea
    files: "", // For file uploads
  });

  const [otherFormData, setOtherFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    emirate: [],
    Requirements: "",
    files: "",
  });

  const [isUploading, setIsUploading] = useState(false); // State to track upload progress
  const [fileUrl, setFileUrl] = useState(""); // State to store the uploaded file URL
  const [uploadError, setUploadError] = useState(""); // State to store upload errors
  const [loading, setLoading] = useState(false); // State to manage loading

  useEffect(() => {
    document.title = " Enquiry | Carbon Craft";
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFileChange = async (e) => {
    const selectedFiles = Array.from(e.target.files); // Convert FileList to Array
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
    const maxSize = 5 * 1024 * 1024; // 5MB

    setIsUploading(true); // Set uploading state to true to show loading UI

    selectedFiles.forEach(async (file) => {
      if (!allowedTypes.includes(file.type)) {
        alert(
          `Invalid file type: ${file.name}. Only images and PDFs are allowed.`
        );
        setIsUploading(false); // Stop loading spinner on error
        return;
      }

      if (file.size > maxSize) {
        alert(`File size exceeds the 5MB limit: ${file.name}`);
        setIsUploading(false); // Stop loading spinner on error
        return;
      }

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "carbon_preset");

      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dw4cqeetr/image/upload",
          formData
        );
        const fileUrl = response.data.secure_url;

        setFormData((prevFormData) => ({
          ...prevFormData,
          files: [...(prevFormData.files || []), fileUrl], // Update formData with file URL
        }));

        setFileUrl(fileUrl); // Save the uploaded file URL
        setIsUploading(false); // Stop the loading UI after upload
      } catch (error) {
        console.error(`Error uploading ${file.name}:`, error);
        setUploadError(`Failed to upload ${file.name}.`);
        setIsUploading(false); // Stop loading spinner on error
      }
    });
  };

  const handleChange = (e) => {
    // eslint-disable-next-line no-unused-vars
    const { name, value, checked, type, files } = e.target;

    if (type === "file") {
      handleFileChange(e); // Handle file upload change
    } else if (type === "checkbox") {
      // Handling checkbox input
      const currentValues = formData[name] || [];
      if (checked) {
        setFormData({
          ...formData,
          [name]: [...currentValues, value],
        });
      } else {
        setFormData({
          ...formData,
          [name]: currentValues.filter((v) => v !== value),
        });
      }
    } else {
      // Handling other input types (text, radio, etc.)
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSystemChange = async (e) => {
    const { name, value, checked, type, files } = e.target;

    if (type === "file") {
      // Handle file uploads
      const selectedFiles = Array.from(files); // Convert FileList to Array
      const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
      const maxSize = 5 * 1024 * 1024; // 5MB

      setIsUploading(true); // Set uploading state to true to show loading UI

      for (const file of selectedFiles) {
        if (!allowedTypes.includes(file.type)) {
          alert(
            `Invalid file type: ${file.name}. Only images and PDFs are allowed.`
          );
          setIsUploading(false); // Stop loading spinner on error
          return;
        }

        if (file.size > maxSize) {
          alert(`File size exceeds the 5MB limit: ${file.name}`);
          setIsUploading(false); // Stop loading spinner on error
          return;
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "carbon_preset");

        try {
          const response = await axios.post(
            "https://api.cloudinary.com/v1_1/dw4cqeetr/image/upload",
            formData
          );
          const fileUrl = response.data.secure_url;

          setSystemFormData((prevFormData) => ({
            ...prevFormData,
            files: [...(prevFormData.files || []), fileUrl], // Update formData with file URL
          }));

          setFileUrl(fileUrl); // Save the uploaded file URL
        } catch (error) {
          console.error(`Error uploading ${file.name}:`, error);
          setUploadError(`Failed to upload ${file.name}.`);
        } finally {
          setIsUploading(false); // Stop the loading UI after upload or error
        }
      }
    } else if (type === "checkbox") {
      // Handling checkbox input
      const currentValues = systemFormData[name] || [];
      if (checked) {
        setSystemFormData({
          ...systemFormData,
          [name]: [...currentValues, value],
        });
      } else {
        setSystemFormData({
          ...systemFormData,
          [name]: currentValues.filter((v) => v !== value),
        });
      }
    } else {
      // Handling other input types (text, radio, etc.)
      setSystemFormData({
        ...systemFormData,
        [name]: value,
      });
    }
  };

  const handleFurnitureChange = async (e) => {
    const { name, value, checked, type, files } = e.target;

    if (type === "file") {
      // Handle file uploads
      const selectedFiles = Array.from(files); // Convert FileList to Array
      const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
      const maxSize = 5 * 1024 * 1024; // 5MB

      setIsUploading(true); // Set uploading state to true to show loading UI

      for (const file of selectedFiles) {
        if (!allowedTypes.includes(file.type)) {
          alert(
            `Invalid file type: ${file.name}. Only images and PDFs are allowed.`
          );
          setIsUploading(false); // Stop loading spinner on error
          return;
        }

        if (file.size > maxSize) {
          alert(`File size exceeds the 5MB limit: ${file.name}`);
          setIsUploading(false); // Stop loading spinner on error
          return;
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "carbon_preset");

        try {
          const response = await axios.post(
            "https://api.cloudinary.com/v1_1/dw4cqeetr/image/upload",
            formData
          );
          const fileUrl = response.data.secure_url;

          setFurnitureFormData((prevFormData) => ({
            ...prevFormData,
            files: [...(prevFormData.files || []), fileUrl], // Update formData with file URL
          }));

          setFileUrl(fileUrl); // Save the uploaded file URL
        } catch (error) {
          console.error(`Error uploading ${file.name}:`, error);
          setUploadError(`Failed to upload ${file.name}.`);
        } finally {
          setIsUploading(false); // Stop the loading UI after upload or error
        }
      }
    } else if (type === "checkbox") {
      // Handling checkbox input
      const currentValues = furnitureFormData[name] || [];
      if (checked) {
        setFurnitureFormData({
          ...furnitureFormData,
          [name]: [...currentValues, value],
        });
      } else {
        setFurnitureFormData({
          ...furnitureFormData,
          [name]: currentValues.filter((v) => v !== value),
        });
      }
    } else {
      // Handling other input types (text, radio, etc.)
      setFurnitureFormData({
        ...furnitureFormData,
        [name]: value,
      });
    }
  };

  const handleOtherChange = async (e) => {
    const { name, value, checked, type, files } = e.target;

    if (type === "file") {
      // Handle file uploads
      const selectedFiles = Array.from(files); // Convert FileList to Array
      const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
      const maxSize = 5 * 1024 * 1024; // 5MB

      setIsUploading(true); // Set uploading state to true to show loading UI

      for (const file of selectedFiles) {
        if (!allowedTypes.includes(file.type)) {
          alert(
            `Invalid file type: ${file.name}. Only images and PDFs are allowed.`
          );
          setIsUploading(false); // Stop loading spinner on error
          return;
        }

        if (file.size > maxSize) {
          alert(`File size exceeds the 5MB limit: ${file.name}`);
          setIsUploading(false); // Stop loading spinner on error
          return;
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "carbon_preset");

        try {
          const response = await axios.post(
            "https://api.cloudinary.com/v1_1/dw4cqeetr/image/upload",
            formData
          );
          const fileUrl = response.data.secure_url;

          setOtherFormData((prevFormData) => ({
            ...prevFormData,
            files: [...(prevFormData.files || []), fileUrl], // Update formData with file URL
          }));

          setFileUrl(fileUrl); // Save the uploaded file URL
        } catch (error) {
          console.error(`Error uploading ${file.name}:`, error);
          setUploadError(`Failed to upload ${file.name}.`);
        } finally {
          setIsUploading(false); // Stop the loading UI after upload or error
        }
      }
    } else if (type === "checkbox") {
      // Handling checkbox input
      const currentValues = otherFormData[name] || [];
      if (checked) {
        setOtherFormData({
          ...otherFormData,
          [name]: [...currentValues, value],
        });
      } else {
        setOtherFormData({
          ...otherFormData,
          [name]: currentValues.filter((v) => v !== value),
        });
      }
    } else {
      // Handling other input types (text, radio, etc.)
      setOtherFormData({
        ...otherFormData,
        [name]: value,
      });
    }
  };

  // console.log(formData);
  // console.log(systemFormData);
  // console.log(furnitureFormData);
  // console.log(otherFormData);

  // eslint-disable-next-line react/prop-types
  const Toast = ({ message, onClose }) => (
    <div className="fixed top-5 right-5 bg-green-500 text-white px-5 py-2.5 rounded shadow-lg z-50 flex items-center">
      {message}
      <button
        onClick={onClose}
        className="ml-2 bg-transparent border-none text-white cursor-pointer"
      >
        ✖
      </button>
    </div>
  );

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true when submission starts

    try {
      let payload = {};

      if (selectedItem === "Systems") {
        payload = {
          formName: selectedItem,
          formData: systemFormData, // Your actual system form data state
        };
      } else if (selectedItem === "Furnitures") {
        payload = {
          formName: selectedItem,
          formData: furnitureFormData, // Your actual furniture form data state
        };
      } else if (selectedItem === "other") {
        payload = {
          formName: selectedItem,
          formData: otherFormData,
        };
      } else {
        payload = {
          formName: selectedItem,
          formData, // Default to the printer formData state
        };
      }

      // Send the selected form data to the backend
      await axios.post("https://carboncraft.onrender.com/send-email", payload);

      // Set the toast message for success
      setToastMessage("Form submitted successfully!");
      setShowToast(true);

      // Redirect after a delay
      setTimeout(() => {
        navigate("/");
        setShowToast(false); // Hide toast
      }, 3000);
    } catch (error) {
      console.error("Error sending email:", error);

      setToastMessage("Failed to submit the form. Please try again.");
      setShowToast(true);

      // Automatically close toast after 3 seconds
      setTimeout(() => setShowToast(false), 3000);
    } finally {
      setLoading(false); // Reset loading state once the operation is complete
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
            <span className="text-gray-800 font-semibold">Name *</span>
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
            <span className="text-gray-800 font-semibold">Organization *</span>
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
            <span className="text-gray-800 font-semibold">Email *</span>
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
            <span className="text-gray-800 font-semibold">Phone *</span>
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
          <span className="text-gray-800 font-semibold">Emirate *</span>
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
        <div className="block mt-4">
          <span className="text-gray-800 font-semibold">
            Purpose of Leasing Machine *
          </span>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-2">
            {[
              { label: "For Office use (Long Term)", value: "Office Use" },
              { label: "For Events (Short Term)", value: "Event use" },
            ].map((purpose, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="radio"
                  id={`leasing-purpose-${index}`}
                  name="leasingPurpose"
                  value={purpose.value}
                  onChange={handleChange}
                  className="mr-2 rounded-full border-gray-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  required
                />
                <label
                  htmlFor={`leasing-purpose-${index}`}
                  className="ml-2 text-gray-700"
                >
                  {purpose.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment Brand */}
        <div className="block">
          <span className="text-gray-800 font-semibold">Equipment Brand *</span>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-2">
            {[
              "Canon",
              "Konika Minolta",
              "Kyocera",
              "HP",
              "Brother",
              "Xerox",
              "Ricoh",
              "Epson",
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
            Upload supported image files (JPEG, PNG), Max size 5 MB per file.
          </p>
          <input
            type="file"
            name="files"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleChange}
            multiple
            className="block w-full mt-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>

        {/* Loading UI while file is uploading */}
        {isUploading && (
          <div className="mt-4 flex items-center space-x-2">
            <div className="spinner-border animate-spin border-blue-500 border-2 border-t-transparent rounded-full h-6 w-6" />
            <p className="text-sm text-gray-600">Uploading...</p>
          </div>
        )}

        {/* Success: Show tick icon after file is uploaded */}
        {fileUrl && !isUploading && (
          <div className="mt-2 flex items-center space-x-2">
            <IoIosCheckmarkCircle className="text-green-500 w-9 h-9 " />
            <p className="text-sm text-gray-600">File selected!</p>
          </div>
        )}

        {/* Error message */}
        {uploadError && (
          <div className="mt-2">
            <p className="text-sm text-red-600">{uploadError}</p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading} // Disable button when loading
          className={`px-6 py-2 text-white font-body rounded-md shadow focus:outline-none focus:ring ${loading
              ? "bg-gray-400 cursor-not-allowed" // Styles for loading state
              : "bg-primary focus:bg-orange-700 focus:ring-blue-300 focus:ring-opacity-50"
            }`}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

        {showToast && (
          <Toast message={toastMessage} onClose={() => setShowToast(false)} />
        )}
      </form>
    ),
    Systems: (
      //Desktop/laptop form
      <form
        className="space-y-4 font-body p-4 "
        onSubmit={(e) => handleSubmit(e)}
      >
        {/* First Row: Name and Organization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block ">
            <span className="text-gray-800 font-semibold">Name *</span>
            <input
              type="text"
              required
              name="name"
              onChange={handleSystemChange}
              placeholder="Enter your name"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>
          <label className="block">
            <span className="text-gray-800 font-semibold">Organization *</span>
            <input
              type="text"
              name="organization"
              onChange={handleSystemChange}
              required
              placeholder="Enter your organization"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>
        </div>

        {/* Second Row: Email and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-gray-800 font-semibold">Email *</span>
            <input
              type="email"
              name="email"
              onChange={handleSystemChange}
              placeholder="Enter your email"
              required
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>
          <label className="block">
            <span className="text-gray-800 font-semibold">Phone *</span>
            <input
              type="text"
              name="phone"
              onChange={handleSystemChange}
              required
              placeholder="Enter your phone number"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>
        </div>

        {/* Emirate */}
        <div className="block">
          <span className="text-gray-800 font-semibold">Emirate *</span>
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
                  onChange={handleSystemChange}
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

        {/* Rental Period */}
        <div className="block mt-4">
          <span className="text-gray-800 font-semibold">Rental Period</span>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-2">
            {["Short Term", "Long Term", "Purchase"].map((period, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="radio"
                  id={`rental-${index}`}
                  name="rentalPeriod"
                  value={period}
                  onChange={handleSystemChange}
                  className="mr-2 rounded-full border-gray-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
                <label
                  htmlFor={`rental-${index}`}
                  className="ml-2 text-gray-700"
                >
                  {period}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Product */}
        <div className="block mt-4">
          <span className="text-gray-800 font-semibold">Product</span>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-2">
            {[
              "Laptop",
              "Gaming System",
              "Chromebook",
              "Tablet",
              "Desktop",
              "Server System",
            ].map((product, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`product-${index}`}
                  name="product"
                  onChange={handleSystemChange}
                  value={product}
                  className="mr-2 rounded border-gray-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
                <label
                  htmlFor={`product-${index}`}
                  className="ml-2 text-gray-700"
                >
                  {product}
                </label>
              </div>
            ))}

            {/* Other Option */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="product-other"
                name="product"
                value="Other"
                className="mr-2 rounded border-gray-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                onChange={(e) => {
                  const otherInput = document.getElementById(
                    "product-other-input"
                  );
                  otherInput.style.display = e.target.checked
                    ? "block"
                    : "none";
                  if (!e.target.checked) {
                    otherInput.value = ""; // Clear the input value when unchecked
                  }
                }}
              />
              <label htmlFor="product-other" className="ml-2 text-gray-700">
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
            onBlur={(e) => {
              const value = e.target.value.trim();
              const otherCheckbox = document.getElementById("product-other");
              if (value && otherCheckbox.checked) {
                // Dynamically update the checkbox value
                otherCheckbox.value = value;
                handleSystemChange({
                  target: {
                    name: "product",
                    value,
                    checked: true,
                    type: "checkbox",
                  },
                });
              }
            }}
          />
        </div>

        {/* Preferred Brands */}
        <div className="block mt-4">
          <span className="text-gray-800 font-semibold">Preferred Brands</span>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-2">
            {[
              "Apple",
              "Samsung",
              "HP",
              "Toshiba",
              "Dell",
              "Microsoft",
              "Asus",
            ].map((brand, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`brand-${index}`}
                  name="brand"
                  onChange={handleSystemChange}
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
            onChange={handleSystemChange}
            rows="4"
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 resize-none"
          ></textarea>
        </label>

        {/* File Upload */}
        <label className="block">
          <span className="text-gray-800 font-semibold">
            Upload your Trade License & TRN Certificate
          </span>
          <p className="text-sm text-gray-500 mb-2">
            Upload supported image files (JPEG, PNG), Max size 5 MB per file.
          </p>
          <input
            type="file"
            name="files"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleSystemChange}
            multiple
            className="block w-full mt-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>

        {/* Loading UI while file is uploading */}
        {isUploading && (
          <div className="mt-4 flex items-center space-x-2">
            <div className="spinner-border animate-spin border-blue-500 border-2 border-t-transparent rounded-full h-6 w-6" />
            <p className="text-sm text-gray-600">Uploading...</p>
          </div>
        )}

        {/* Success: Show tick icon after file is uploaded */}
        {fileUrl && !isUploading && (
          <div className="mt-2 flex items-center space-x-2">
            <IoIosCheckmarkCircle className="text-green-500 w-9 h-9 " />
            <p className="text-sm text-gray-600">File selected!</p>
          </div>
        )}

        {/* Error message */}
        {uploadError && (
          <div className="mt-2">
            <p className="text-sm text-red-600">{uploadError}</p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading} // Disable button when loading
          className={`px-6 py-2 text-white font-body rounded-md shadow focus:outline-none focus:ring ${loading
              ? "bg-gray-400 cursor-not-allowed" // Styles for loading state
              : "bg-primary focus:bg-orange-700 focus:ring-blue-300 focus:ring-opacity-50"
            }`}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
        {showToast && (
          <Toast message={toastMessage} onClose={() => setShowToast(false)} />
        )}
      </form>
    ),
    Furnitures: (
      // Furniture Form
      <form
        className="space-y-4 font-body p-4 "
        onSubmit={(e) => handleSubmit(e)}
      >
        {/* First Row: Name and Organization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block ">
            <span className="text-gray-800 font-semibold">Name *</span>
            <input
              type="text"
              required
              name="name"
              onChange={handleFurnitureChange}
              placeholder="Enter your name"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>
          <label className="block">
            <span className="text-gray-800 font-semibold">Organization *</span>
            <input
              type="text"
              name="organization"
              onChange={handleFurnitureChange}
              required
              placeholder="Enter your organization"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>
        </div>

        {/* Second Row: Email and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-gray-800 font-semibold">Email *</span>
            <input
              type="email"
              name="email"
              onChange={handleFurnitureChange}
              placeholder="Enter your email"
              required
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>
          <label className="block">
            <span className="text-gray-800 font-semibold">Phone *</span>
            <input
              type="text"
              name="phone"
              onChange={handleFurnitureChange}
              required
              placeholder="Enter your phone number"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>
        </div>

        {/* Emirate */}
        <div className="block">
          <span className="text-gray-800 font-semibold">Emirate *</span>
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
                  onChange={handleFurnitureChange}
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

        {/* Enquire for */}
        <div className="block mt-4">
          <span className="text-gray-800 font-semibold">Enquire for</span>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-2">
            {["Rental", "Purchase"].map((period, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="radio"
                  id={`enquire-${index}`}
                  name="enquireFor"
                  value={period}
                  onChange={handleFurnitureChange}
                  className="mr-2 rounded-full border-gray-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
                <label
                  htmlFor={`enquire-${index}`}
                  className="ml-2 text-gray-700"
                >
                  {period}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Furniture Type */}
        <label className="block mt-4">
          <span className="text-gray-800 font-semibold">Furniture Type</span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
            {["Office", "Outdoor", "Custom"].map((furniture, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`furniture-${index}`}
                  name="furnitureTypes"
                  onChange={handleFurnitureChange}
                  value={furniture}
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
                name="furnitureTypes"
                value="Other"
                className="mr-2 rounded border-gray-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                onChange={(e) => {
                  const otherInput = document.getElementById(
                    "furniture-other-input"
                  );
                  otherInput.style.display = e.target.checked
                    ? "block"
                    : "none";
                  if (!e.target.checked) {
                    otherInput.value = ""; // Clear the input value when unchecked
                  }
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
            onBlur={(e) => {
              const value = e.target.value.trim();
              const otherCheckbox = document.getElementById("furniture-other");
              if (value && otherCheckbox.checked) {
                // Dynamically update the checkbox value
                otherCheckbox.value = value;
                handleFurnitureChange({
                  target: {
                    name: "furnitureTypes",
                    value,
                    checked: true,
                    type: "checkbox",
                  },
                });
              }
            }}
          />
        </label>

        {/* Specify Requirements */}
        <label className="block">
          <span className="text-gray-800 font-semibold">
            Specify Requirements
          </span>
          <textarea
            placeholder="Specify your requirements here"
            name="requirements"
            onChange={handleFurnitureChange}
            rows="4"
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 resize-none"
          ></textarea>
        </label>

        {/* Special Requests */}
        <label className="block">
          <span className="text-gray-800 font-semibold">Special Requests</span>
          <textarea
            placeholder="Special Requests for furniture"
            name="specialRequests"
            onChange={handleFurnitureChange}
            rows="4"
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 resize-none"
          ></textarea>
        </label>

        {/* File Upload */}
        <label className="block">
          <span className="text-gray-800 font-semibold">
            Upload your Trade License & TRN Certificate
          </span>
          <p className="text-sm text-gray-500 mb-2">
            Upload supported image files (JPEG, PNG), Max size 5 MB per file.
          </p>
          <input
            type="file"
            name="files"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleFurnitureChange}
            multiple
            className="block w-full mt-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>

        {/* Loading UI while file is uploading */}
        {isUploading && (
          <div className="mt-4 flex items-center space-x-2">
            <div className="spinner-border animate-spin border-blue-500 border-2 border-t-transparent rounded-full h-6 w-6" />
            <p className="text-sm text-gray-600">Uploading...</p>
          </div>
        )}

        {/* Success: Show tick icon after file is uploaded */}
        {fileUrl && !isUploading && (
          <div className="mt-2 flex items-center space-x-2">
            <IoIosCheckmarkCircle className="text-green-500 w-9 h-9 " />
            <p className="text-sm text-gray-600">File selected!</p>
          </div>
        )}

        {/* Error message */}
        {uploadError && (
          <div className="mt-2">
            <p className="text-sm text-red-600">{uploadError}</p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading} // Disable button when loading
          className={`px-6 py-2 text-white font-body rounded-md shadow focus:outline-none focus:ring ${loading
              ? "bg-gray-400 cursor-not-allowed" // Styles for loading state
              : "bg-primary focus:bg-orange-700 focus:ring-blue-300 focus:ring-opacity-50"
            }`}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
        {showToast && (
          <Toast message={toastMessage} onClose={() => setShowToast(false)} />
        )}
      </form>
    ),
    other: (
      //Other form
      <form
        className="space-y-4 font-body p-4 "
        onSubmit={(e) => handleSubmit(e)}
      >
        {/* First Row: Name and Organization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block ">
            <span className="text-gray-800 font-semibold">Name *</span>
            <input
              type="text"
              required
              name="name"
              onChange={handleOtherChange}
              placeholder="Enter your name"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>
          <label className="block">
            <span className="text-gray-800 font-semibold">Organization *</span>
            <input
              type="text"
              name="organization"
              onChange={handleOtherChange}
              required
              placeholder="Enter your organization"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>
        </div>

        {/* Second Row: Email and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-gray-800 font-semibold">Email *</span>
            <input
              type="email"
              name="email"
              onChange={handleOtherChange}
              placeholder="Enter your email"
              required
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>
          <label className="block">
            <span className="text-gray-800 font-semibold">Phone *</span>
            <input
              type="text"
              name="phone"
              onChange={handleOtherChange}
              required
              placeholder="Enter your phone number"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>
        </div>

        {/* Emirate */}
        <div className="block">
          <span className="text-gray-800 font-semibold">Emirate *</span>
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
                  onChange={handleOtherChange}
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

        {/* Requirements */}
        <label className="block">
          <span className="text-gray-800 font-semibold">Requirements</span>
          <textarea
            placeholder="Enter any requirements here"
            name="Requirements"
            onChange={handleOtherChange}
            rows="4"
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 resize-none"
          ></textarea>
        </label>

        {/* File Upload */}
        <label className="block">
          <span className="text-gray-800 font-semibold">
            Upload your Trade License & TRN Certificate
          </span>
          <p className="text-sm text-gray-500 mb-2">
            Upload supported image files (JPEG, PNG), Max size 5 MB per file.
          </p>
          <input
            type="file"
            name="files"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleOtherChange}
            multiple
            className="block w-full mt-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>

        {/* Loading UI while file is uploading */}
        {isUploading && (
          <div className="mt-4 flex items-center space-x-2">
            <div className="spinner-border animate-spin border-blue-500 border-2 border-t-transparent rounded-full h-6 w-6" />
            <p className="text-sm text-gray-600">Uploading...</p>
          </div>
        )}

        {/* Success: Show tick icon after file is uploaded */}
        {fileUrl && !isUploading && (
          <div className="mt-2 flex items-center space-x-2">
            <IoIosCheckmarkCircle className="text-green-500 w-9 h-9 " />
            <p className="text-sm text-gray-600">File selected!</p>
          </div>
        )}

        {/* Error message */}
        {uploadError && (
          <div className="mt-2">
            <p className="text-sm text-red-600">{uploadError}</p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading} // Disable button when loading
          className={`px-6 py-2 text-white font-body rounded-md shadow focus:outline-none focus:ring ${loading
              ? "bg-gray-400 cursor-not-allowed" // Styles for loading state
              : "bg-primary focus:bg-orange-700 focus:ring-blue-300 focus:ring-opacity-50"
            }`}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
        {showToast && (
          <Toast message={toastMessage} onClose={() => setShowToast(false)} />
        )}
      </form>
    ),
  };

  const itemDisplayNames = {
    default: "Choose a product",
    Printers: "Printers",
    Systems: "Desktops/Laptops",
    Furnitures: "Furnitures",
    other: "Other Equipments",
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
        <div className="py-[6rem]">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-[3.3rem] font-medium font-heading text-background leading-tight my-3 animate-fadeIn">
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
