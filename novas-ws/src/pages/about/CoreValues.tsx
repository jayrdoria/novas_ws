import React from "react";
import { Star, Heart, ShieldCheck, Rocket, Smile, Globe } from "lucide-react";

const CoreValues: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-5 md:px-32">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Core Values
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          The principles that guide every action, decision, and success we
          achieve.
        </p>
      </div>

      {/* Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-4 md:py-10">
        {/* Value 1: Excellence */}
        <div className="flex flex-col items-center">
          <Star className="h-16 w-16 text-yellow-500 mb-4 pb-2" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Excellence
          </h3>
          <p className="text-gray-600">
            We strive for the highest quality in everything we do.
          </p>
        </div>

        {/* Value 2: Integrity */}
        <div className="flex flex-col items-center">
          <ShieldCheck className="h-16 w-16 text-blue-500 mb-4 pb-2" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Integrity
          </h3>
          <p className="text-gray-600">
            We foster trust with transparency and accountability.
          </p>
        </div>

        {/* Value 3: Innovation */}
        <div className="flex flex-col items-center">
          <Rocket className="h-16 w-16 text-red-500 mb-4 pb-2" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Innovation
          </h3>
          <p className="text-gray-600">
            Our forward-thinking solutions drive industry-leading success.
          </p>
        </div>

        {/* Value 4: Collaboration */}
        <div className="flex flex-col items-center">
          <Smile className="h-16 w-16 text-green-500 mb-4 pb-2" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Collaboration
          </h3>
          <p className="text-gray-600">
            Together, we achieve extraordinary outcomes with our partners.
          </p>
        </div>

        {/* Value 5: Sustainability */}
        <div className="flex flex-col items-center">
          <Globe className="h-16 w-16 text-purple-500 mb-4 pb-2" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Sustainability
          </h3>
          <p className="text-gray-600">
            Committed to practices that benefit people and the planet.
          </p>
        </div>

        {/* Value 6: Empathy */}
        <div className="flex flex-col items-center">
          <Heart className="h-16 w-16 text-pink-500 mb-4 pb-2" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Empathy</h3>
          <p className="text-gray-600">
            We listen, understand, and prioritize the needs of our clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
