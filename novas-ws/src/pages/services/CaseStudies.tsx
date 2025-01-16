// src/pages/services/CaseStudies.tsx
import React from "react";
import { ArrowRightCircle } from "lucide-react";

const caseStudies = [
  {
    clientName: "Tech Innovators Inc.",
    projectTitle: "Custom Web Development",
    challenge: "Outdated platform and poor user experience.",
    solution: "Designed and developed a modern, responsive website.",
    results: "Increased user engagement by 200%.",
    emoji: "💻",
  },
  {
    clientName: "Green Energy Solutions",
    projectTitle: "Digital Marketing Campaign",
    challenge: "Low lead conversion rates.",
    solution: "Optimized digital ads and created engaging content.",
    results: "Boosted leads by 150%.",
    emoji: "🌱",
  },
  {
    clientName: "EduPro Systems",
    projectTitle: "Platform Modernization",
    challenge: "Inefficient and outdated learning platform.",
    solution: "Developed a seamless, user-friendly platform.",
    results: "Enhanced user engagement by 300%.",
    emoji: "📚",
  },
];

const CaseStudies: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16 px-8 md:px-20 2xl:px-80">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Case Studies
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Discover how we’ve helped businesses overcome challenges and achieve
          remarkable success with tailored solutions.
        </p>
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {caseStudies.map((caseStudy, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col justify-between"
          >
            {/* Emoji Header */}
            <div className="flex items-center justify-center text-5xl mb-4">
              <span role="img" aria-label={`${caseStudy.clientName} emoji`}>
                {caseStudy.emoji}
              </span>
            </div>

            {/* Content */}
            <div className="space-y-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {caseStudy.projectTitle}
              </h3>
              <p className="text-sm text-gray-500">
                <strong>Client:</strong> {caseStudy.clientName}
              </p>
              <p className="text-sm text-gray-500">
                <strong>Challenge:</strong> {caseStudy.challenge}
              </p>
              <p className="text-sm text-gray-500">
                <strong>Solution:</strong> {caseStudy.solution}
              </p>
              <p className="text-sm text-gray-500">
                <strong>Results:</strong> {caseStudy.results}
              </p>
            </div>

            {/* Learn More Button */}
            <div className="flex justify-center mt-6">
              <button className="flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-700 transition-colors">
                <span>Learn More</span>
                <ArrowRightCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
