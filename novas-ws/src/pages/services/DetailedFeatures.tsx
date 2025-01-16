// src/pages/services/DetailedFeatures.tsx
import React from "react";
import { Code, BarChart, Smartphone, Brush } from "lucide-react";

const features = [
  {
    title: "Custom Web Development",
    description:
      "Our team crafts responsive, user-friendly websites tailored to your brand. From e-commerce platforms to business portfolios, we deliver high-quality, scalable solutions.",
    icon: <Code className="w-12 h-12 text-blue-600" />,
    image: "https://placehold.co/400x300",
  },
  {
    title: "Data-Driven Digital Marketing",
    description:
      "Leverage targeted marketing campaigns designed to boost engagement, increase conversions, and drive measurable growth.",
    icon: <BarChart className="w-12 h-12 text-green-600" />,
    image: "https://placehold.co/400x300",
  },
  {
    title: "Mobile App Development",
    description:
      "Develop sleek and powerful mobile applications for iOS and Android, providing seamless user experiences on the go.",
    icon: <Smartphone className="w-12 h-12 text-red-600" />,
    image: "https://placehold.co/400x300",
  },
  {
    title: "Creative Branding & Design",
    description:
      "Elevate your brand with stunning visuals, logos, and designs that captivate your audience and leave a lasting impression.",
    icon: <Brush className="w-12 h-12 text-cyan-600" />,
    image: "https://placehold.co/400x300",
  },
];

const DetailedFeatures: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-8 md:px-20 2xl:px-80">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Detailed Features
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Discover how each service is designed to meet your unique needs and
          help your business thrive.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image */}
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full lg:w-1/2 object-cover"
            />
            {/* Content */}
            <div className="p-6 text-center lg:text-left lg:w-1/2">
              <div className="flex justify-center lg:justify-start mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailedFeatures;
