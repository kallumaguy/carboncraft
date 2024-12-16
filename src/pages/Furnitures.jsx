// eslint-disable-next-line no-unused-vars
import React from "react";
import "flowbite";

const Furnitures = () => {
  return (
    <div className="mt-[3.6rem]">
      <section className="bg-furniture-bg bg-center bg-cover">
        <div className="py-[6rem] ">
          <div className="container mx-auto ">
            <h1 className="text-4xl md:text-[3.3rem] font-medium font-heading  text-background leading-tight my-3">
              Furnitures
            </h1>
          </div>
        </div>
      </section>

      <section className="py-[6rem]">
        <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-[3.3rem] font-bold font-heading  text-gray-800 leading-tight my-3">
            Find your perfect workstation
          </h1>
        </div>
          <div className="flex flex-col lg:flex-row items-center gap-1 bg-primary rounded-3xl shadow-md my-[4rem]">
            <a href="#" className="p-3 md:p-5">
              <img
                className="md:max-w-xl rounded-2xl border-2  "
                src="/images/Furnitures/office-furnitures.png"
                alt="Rent Printer"
              />
            </a>
            <p className="text-xl font-normal text-white p-5">
              Enhance your office with our premium furniture collection. From
              ergonomic chairs and sleek desks to versatile storage solutions,
              we offer stylish and functional pieces designed to improve comfort
              and productivity in any workspace.
            </p>
          </div>

          <div className="flex flex-col-reverse lg:flex-row items-center gap-1 bg-primary rounded-3xl shadow-md my-[4rem]">
            <p className="text-xl font-normal text-white p-5">
              Explore our range of outdoor furniture, perfect for creating a
              stylish and comfortable outdoor space. From durable seating and
              tables to weatherresistant loungers, we offer high-quality pieces
              designed to withstand the elements while adding elegance to your
              patio, garden, or balcony.
            </p>
            <a href="#" className="p-3 md:p-5">
              <img
                className="md:max-w-xl rounded-2xl border-2  "
                src="/images/Furnitures/outdoor-furnitures.png"
                alt="Rent Printer"
              />
            </a>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-1 bg-primary rounded-3xl shadow-md my-[4rem]">
            <a href="#" className="p-3 md:p-5">
              <img
                className="md:max-w-xl rounded-2xl border-2  "
                src="/images/Furnitures/customized-furnitures.png"
                alt="Rent Printer"
              />
            </a>
            <p className="text-xl font-normal text-white p-5">
              Create the perfect workspace or home environment with our
              customized furniture. Tailored to your specific needs and style,
              we offer bespoke solutions for desks, seating, storage, and more,
              ensuring a unique and functional design that fits your space
              perfectly
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Furnitures;
