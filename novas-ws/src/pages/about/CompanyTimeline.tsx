import React from "react";
import { Calendar, Flag, TrendingUp, Globe } from "lucide-react";

const milestones = [
  {
    year: "2015",
    title: "The Beginning",
    description:
      "Our journey started with a vision to revolutionize the digital landscape. With just a small team, we embarked on this incredible adventure.",
    icon: <Flag className="w-8 h-8 text-blue-600" />,
  },
  {
    year: "2017",
    title: "First Big Success",
    description:
      "We delivered our first large-scale project, earning recognition for our innovative solutions and client-centric approach.",
    icon: <TrendingUp className="w-8 h-8 text-green-600" />,
  },
  {
    year: "2020",
    title: "Global Expansion",
    description:
      "With a growing portfolio of international clients, we expanded our operations to serve a global audience.",
    icon: <Globe className="w-8 h-8 text-orange-600" />,
  },
  {
    year: "2023",
    title: "Leader in Digital Innovation",
    description:
      "Recognized as a leader in digital transformation, we continue to push boundaries with cutting-edge solutions.",
    icon: <Calendar className="w-8 h-8 text-purple-600" />,
  },
];

const CompanyTimeline: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 py-12 px-8 md:px-20 xl:px-80">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Our Journey</h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          From humble beginnings to industry leadership, here’s a look at the
          milestones that define our journey.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l-4 border-blue-300">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="mb-10 ml-8 flex items-start space-x-4 relative"
          >
            {/* Icon */}
            <div className="flex-shrink-0">{milestone.icon}</div>
            {/* Content */}
            <div>
              <h3 className="text-lg font-semibold">
                {milestone.year} - {milestone.title}
              </h3>
              <p className="text-gray-600 mt-2">{milestone.description}</p>
            </div>
            {/* Connector Line */}
            {index < milestones.length - 1 && (
              <div className="absolute left-[-1.125rem] top-10 h-full w-0.5 bg-blue-300"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyTimeline;
