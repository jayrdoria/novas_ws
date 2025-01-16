// src/pages/about/ClientSuccessStories.tsx
import React from "react";
import { Quote } from "lucide-react";

const successStories = [
  {
    clientName: "Tech Innovators Inc.",
    feedback:
      "Working with NOVAS was a game-changer for our business. Their innovative solutions increased our online presence by 200%.",
    logo: "https://placehold.co/150x50",
    project: "Custom Web Development",
  },
  {
    clientName: "Green Energy Solutions",
    feedback:
      "The NOVAS team delivered exceptional results, optimizing our digital marketing strategy and boosting leads by 150%.",
    logo: "https://placehold.co/150x50",
    project: "Digital Marketing Campaign",
  },
  {
    clientName: "EduPro Systems",
    feedback:
      "NOVAS helped us transform our outdated platform into a seamless digital experience, increasing user engagement by 300%.",
    logo: "https://placehold.co/150x50",
    project: "Platform Modernization",
  },
  {
    clientName: "Retail Experts Co.",
    feedback:
      "NOVAS revamped our e-commerce platform, streamlining customer experience and increasing sales by 250%.",
    logo: "https://placehold.co/150x50",
    project: "E-commerce Platform Revamp",
  },
];

const ClientSuccessStories: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12 px-8 md:px-20 2xl:px-80 lg:py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Client Success Stories
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Our clients' success is our greatest achievement. See how we’ve
          transformed businesses with our innovative solutions.
        </p>
      </div>

      {/* Success Stories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {successStories.map((story, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Client Logo */}
            <div className="flex justify-center mb-4">
              <img
                src={story.logo}
                alt={`${story.clientName} logo`}
                className="h-12"
              />
            </div>
            {/* Feedback */}
            <div className="text-gray-800 text-center space-y-4">
              <Quote className="w-10 h-10 mx-auto text-gray-400" />
              <p className="italic text-gray-600">"{story.feedback}"</p>
              <h3 className="font-semibold">{story.clientName}</h3>
              <p className="text-sm text-gray-500">{story.project}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientSuccessStories;
