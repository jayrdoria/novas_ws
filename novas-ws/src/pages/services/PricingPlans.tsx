// src/pages/services/PricingPlans.tsx
import React from "react";

const plans = [
  {
    name: "Basic Plan",
    price: "$29",
    duration: "/month",
    features: [
      "5 Projects",
      "Basic Analytics",
      "Community Support",
      "Limited Customization",
    ],
    buttonText: "Get Started",
    bgColor: "bg-gray-100",
    borderColor: "border-gray-300",
    textColor: "text-gray-800",
    highlight: false,
  },
  {
    name: "Professional Plan",
    price: "$99",
    duration: "/month",
    features: [
      "Unlimited Projects",
      "Advanced Analytics",
      "Priority Support",
      "Full Customization",
    ],
    buttonText: "Upgrade Now",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-500",
    textColor: "text-blue-800",
    highlight: true,
  },
  {
    name: "Enterprise Plan",
    price: "Custom",
    duration: "Pricing",
    features: [
      "Dedicated Account Manager",
      "Tailored Solutions",
      "On-Demand Support",
      "Complete Customization",
    ],
    buttonText: "Contact Us",
    bgColor: "bg-gray-100",
    borderColor: "border-gray-300",
    textColor: "text-gray-800",
    highlight: false,
  },
];

const PricingPlans: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16 px-8 md:px-20 2xl:px-80">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Find the Right Plan for You
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Choose a plan that suits your business needs and scale effortlessly
          with our tailored pricing options.
        </p>
      </div>

      {/* Pricing Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-lg shadow-lg border-2 p-8 transition-transform transform hover:scale-105 ${
              plan.bgColor
            } ${plan.borderColor} ${
              plan.highlight ? "shadow-xl border-blue-600" : ""
            }`}
          >
            {/* Ribbon for Highlighted Plan */}
            {plan.highlight && (
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-bl-lg">
                Most Popular
              </div>
            )}

            {/* Plan Name */}
            <h3 className={`text-2xl font-bold text-center ${plan.textColor}`}>
              {plan.name}
            </h3>

            {/* Price */}
            <div className="text-center my-6">
              <span className={`text-5xl font-extrabold ${plan.textColor}`}>
                {plan.price}
              </span>
              <span className="text-lg text-gray-500">{plan.duration}</span>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-6">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center text-gray-700 space-x-2"
                >
                  <span className="inline-block w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="text-center">
              <button
                className={`px-6 py-3 font-semibold rounded-lg transition-colors ${
                  plan.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
