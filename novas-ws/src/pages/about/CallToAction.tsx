// src/pages/about/CallToAction.tsx
import React from "react";

const CallToAction: React.FC = () => {
  return (
    <div className="bg-gray-600 text-white py-16 px-8 md:px-20 2xl:px-80">
      <div className="container mx-auto text-center space-y-8">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg md:text-xl text-gray-200">
          Partner with NOVAS to unlock your brand’s full potential. Let’s build
          a future where innovation meets excellence.
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
            Contact Us
          </button>
          <button className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition duration-300">
            Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
