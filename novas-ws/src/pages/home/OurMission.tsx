// src/pages/OurMission.tsx
import React from "react";
import { ArrowRight } from "lucide-react";

const OurMission: React.FC = () => {
  return (
    <div className="bg-[#111827] text-white py-12 px-4 md:px-8">
      <div className="container mx-auto flex flex-col space-y-8 xl:max-w-4xl">
        {/* First Row: Title */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
        </div>

        {/* Second Row: Description */}
        <div className="text-center">
          <p className="text-gray-300 leading-snug">
            Empowering businesses to thrive in the digital age through
            innovative solutions, tailored strategies, and unmatched creativity.
            We are committed to helping you succeed by turning ideas into
            impactful realities.
          </p>
        </div>

        {/* Third Row: Button */}
        <div className="text-center">
          <button className="flex items-center justify-center mx-auto space-x-2 px-6 py-3 bg-white text-[#111827] font-semibold rounded-lg shadow hover:bg-gray-100 transition duration-300">
            <span>Learn More</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
