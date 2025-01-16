import React from "react";

const MissionVision: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12 px-5 md:px-8 pt-20 md:pt-32">
      <div className="container mx-auto max-w-6xl space-y-16">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">Mission & Vision</h2>
          <p className="text-gray-600 mt-4">
            Driving innovation and building bridges between technology and
            communities.
          </p>
        </div>

        {/* Mission and Vision Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">
              Our Mission
            </h3>
            <p className="text-gray-600 mt-2">
              To empower businesses with tailored digital strategies that drive
              growth, efficiency, and innovation.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8">
              Our Vision
            </h3>
            <p className="text-gray-600 mt-2">
              To create a future where technology bridges brands and communities
              seamlessly, fostering growth and innovation globally.
            </p>
          </div>

          <img
            src="https://placehold.co/800x600"
            alt="Mission and Vision"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
