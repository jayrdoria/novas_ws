// src/pages/services/IndustriesServed.tsx
import React from "react";
import {
  Building,
  Monitor,
  ShoppingCart,
  Stethoscope,
  Book,
  Globe,
} from "lucide-react";

const industries = [
  {
    name: "Technology",
    description: "Empowering tech companies with innovative digital solutions.",
    icon: <Monitor className="w-12 h-12" />,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    name: "E-Commerce",
    description:
      "Driving growth for online businesses with seamless platforms.",
    icon: <ShoppingCart className="w-12 h-12" />,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    name: "Healthcare",
    description: "Transforming patient care through cutting-edge technology.",
    icon: <Stethoscope className="w-12 h-12" />,
    bgColor: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    name: "Education",
    description: "Enhancing learning experiences with advanced digital tools.",
    icon: <Book className="w-12 h-12" />,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    name: "Finance",
    description:
      "Creating secure and efficient solutions for the financial sector.",
    icon: <Building className="w-12 h-12" />,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    name: "Global Enterprises",
    description:
      "Scaling businesses with global operations and localized strategies.",
    icon: <Globe className="w-12 h-12" />,
    bgColor: "bg-teal-100",
    iconColor: "text-teal-600",
  },
];

const IndustriesServed: React.FC = () => {
  return (
    <div className="bg-white py-16 px-8 md:px-20 2xl:px-80">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Industries We Serve
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Transforming businesses across multiple sectors with tailored
          solutions.
        </p>
      </div>

      {/* Industries Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg group transform hover:scale-105 transition-transform duration-300"
          >
            {/* Background Color */}
            <div className={`${industry.bgColor} p-6 flex justify-center`}>
              <div className={`${industry.iconColor}`}>{industry.icon}</div>
            </div>

            {/* Content */}
            <div className="p-6 bg-gray-50 relative z-10">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                {industry.name}
              </h3>
              <p className="text-gray-600 mt-2">{industry.description}</p>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>

            {/* Decorative Border */}
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-600 group-hover:w-full transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesServed;
