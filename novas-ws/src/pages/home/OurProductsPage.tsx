// src/pages/OurProductsPage.tsx
import React from "react";

const OurProductsPage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-20 px-4 md:px-8 flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://placehold.co/800x600"
            alt="Our Products"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 md:pl-8">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Explore Our Products
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-6">
            From innovative solutions to sustainable products, we deliver
            quality and excellence to meet your needs. Connect with us to learn
            how our offerings can benefit you.
          </p>

          {/* Button */}
          <div>
            <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-3xl shadow hover:bg-blue-600 transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProductsPage;
