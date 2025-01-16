// src/pages/services/Process.tsx
import React from "react";
import {
  CheckCircle,
  ArrowRightCircle,
  FileCode,
  Globe,
  Monitor,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "We discuss your business needs and goals to understand your unique challenges and opportunities.",
    icon: <ArrowRightCircle className="w-10 h-10 text-blue-600" />,
  },
  {
    step: "02",
    title: "Strategic Planning",
    description:
      "Our experts craft a tailored strategy designed to deliver measurable results for your business.",
    icon: <Monitor className="w-10 h-10 text-green-600" />,
  },
  {
    step: "03",
    title: "Development & Design",
    description:
      "We create custom digital solutions, combining functionality with stunning design.",
    icon: <FileCode className="w-10 h-10 text-orange-600" />,
  },
  {
    step: "04",
    title: "Implementation",
    description:
      "We deploy the solution and ensure seamless integration into your existing systems.",
    icon: <CheckCircle className="w-10 h-10 text-purple-600" />,
  },
  {
    step: "05",
    title: "Optimization & Support",
    description:
      "We continuously monitor, optimize, and provide ongoing support to keep you ahead of the curve.",
    icon: <Globe className="w-10 h-10 text-teal-600" />,
  },
];

const Process: React.FC = () => {
  return (
    <div className="bg-white py-16 px-8 md:px-20 2xl:px-80">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          How We Work
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Our streamlined process ensures that every project is a success from
          start to finish.
        </p>
      </div>

      {/* Timeline Design */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute inset-0 md:left-1/2 w-1 bg-blue-100 transform md:translate-x-[-50%]" />

        <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8 relative ${
                index % 2 === 0 ? "md:justify-end" : ""
              }`}
            >
              {/* Step Icon */}
              <div className="flex-shrink-0">{step.icon}</div>

              {/* Content */}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>

              {/* Connector */}
              <div
                className={`absolute hidden md:block w-4 h-4 bg-blue-600 rounded-full ${
                  index % 2 === 0
                    ? "right-[calc(50%-8px)]"
                    : "left-[calc(50%-8px)]"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
