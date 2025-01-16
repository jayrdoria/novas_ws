import React from "react";
import {
  Code,
  Globe,
  ShieldCheck,
  Users,
  TrendingUp,
  Layers,
} from "lucide-react";

const WhyChoosePage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-5 md:px-32">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Why Choose Our Digital Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Unlock the power of technology with our cutting-edge digital solutions
          designed to transform your business.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-4 md:py-10">
        {/* Feature 1: Expertise */}
        <div className="flex flex-col items-center">
          <Code className="h-16 w-16 text-blue-500 mb-4 pb-2" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Technical Expertise
          </h3>
          <p className="text-gray-600">
            Our team of experts delivers high-quality digital solutions with
            precision and creativity.
          </p>
        </div>

        {/* Feature 2: Global Reach */}
        <div className="flex flex-col items-center">
          <Globe className="h-16 w-16 text-green-500 mb-4 pb-2" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Global Reach
          </h3>
          <p className="text-gray-600">
            Expand your business worldwide with solutions tailored for a global
            audience.
          </p>
        </div>

        {/* Feature 3: Security */}
        <div className="flex flex-col items-center">
          <ShieldCheck className="h-16 w-16 text-purple-500 mb-4 pb-2" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Secure Solutions
          </h3>
          <p className="text-gray-600">
            Rest assured with our secure platforms, protecting your data and
            ensuring reliability.
          </p>
        </div>

        {/* Feature 4: Seamless Collaboration */}
        <div className="flex flex-col items-center">
          <Users className="h-16 w-16 text-yellow-500 mb-4 pb-2" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Seamless Collaboration
          </h3>
          <p className="text-gray-600">
            Work closely with us to build solutions that perfectly match your
            goals.
          </p>
        </div>

        {/* Feature 5: Scalable Solutions */}
        <div className="flex flex-col items-center">
          <Layers className="h-16 w-16 text-cyan-500 mb-4 pb-2" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Scalable Solutions
          </h3>
          <p className="text-gray-600">
            Our solutions grow with your business, ensuring long-term success.
          </p>
        </div>

        {/* Feature 6: Business Growth */}
        <div className="flex flex-col items-center">
          <TrendingUp className="h-16 w-16 text-orange-500 mb-4 pb-2" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Business Growth
          </h3>
          <p className="text-gray-600">
            Drive measurable growth with strategies that deliver real results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoosePage;
