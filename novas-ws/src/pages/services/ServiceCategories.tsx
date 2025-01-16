// src/pages/services/ServiceCategories.tsx
import React from "react";
import {
  Code,
  Globe,
  BarChart,
  ShoppingCart,
  Smartphone,
  Brush,
} from "lucide-react";

const categories = [
  {
    title: "Web Development",
    description: "Build responsive and modern websites tailored to your needs.",
    icon: <Code className="w-12 h-12 text-blue-600" />,
  },
  {
    title: "Digital Marketing",
    description: "Increase your online presence with targeted strategies.",
    icon: <BarChart className="w-12 h-12 text-green-600" />,
  },
  {
    title: "SEO & Analytics",
    description: "Optimize your site to rank higher and track performance.",
    icon: <Globe className="w-12 h-12 text-purple-600" />,
  },
  {
    title: "E-Commerce Solutions",
    description: "Create seamless shopping experiences for your customers.",
    icon: <ShoppingCart className="w-12 h-12 text-orange-600" />,
  },
  {
    title: "Mobile App Development",
    description: "Design and develop apps for iOS and Android platforms.",
    icon: <Smartphone className="w-12 h-12 text-red-600" />,
  },
  {
    title: "Branding & Design",
    description: "Craft visually stunning designs that define your brand.",
    icon: <Brush className="w-12 h-12 text-cyan-600" />,
  },
];

const ServiceCategories: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-8 md:px-20 2xl:px-80 pt-20 md:pt-32 ">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Services
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Explore our range of services designed to elevate your digital
          presence.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">{category.icon}</div>
            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800">
              {category.title}
            </h3>
            {/* Description */}
            <p className="text-gray-600 mt-2">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCategories;
