// src/pages/services/CallToAction.tsx
import React from "react";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CallToAction: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-8 md:px-20 2xl:px-80">
      <div className="container mx-auto text-center space-y-8">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Let's Build Something Extraordinary
        </h2>
        <p className="text-lg md:text-xl text-gray-200">
          Discover how NOVAS can take your business to the next level with our
          tailored digital solutions. Your success is just a step away!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300 space-x-2">
            <Phone className="w-5 h-5" />
            <span>Contact Us</span>
          </button>
          <button className="flex items-center justify-center px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition duration-300 space-x-2">
            <ArrowRight className="w-5 h-5" />
            <span>Explore Services</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
