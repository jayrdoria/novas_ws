// src/pages/home/CallToAction.tsx
import React from "react";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CallToAction: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-green-600 text-white py-16 px-8 md:px-20 2xl:px-80">
      <div className="container mx-auto text-center space-y-8">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Start Your Journey with NOVAS
        </h2>
        <p className="text-lg md:text-xl text-gray-200">
          Let’s collaborate to unlock the full potential of your business. With
          NOVAS, innovation is just a step away.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="flex items-center justify-center px-6 py-3 bg-white text-teal-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300 space-x-2">
            <Phone className="w-5 h-5" />
            <span>Contact Us</span>
          </button>
          <button className="flex items-center justify-center px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-600 transition duration-300 space-x-2">
            <ArrowRight className="w-5 h-5" />
            <span>Learn More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
