// src/pages/CustomerReviewsPage.tsx
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Digital Marketer",
    profileImage: "https://placehold.co/100x100",
    review:
      "Their digital solutions are top-notch. Our business saw measurable growth within months!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sophia Brown",
    role: "E-Commerce Entrepreneur",
    profileImage: "https://placehold.co/100x100",
    review:
      "A seamless experience from start to finish. The team's professionalism stands out.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Lee",
    role: "Tech Enthusiast",
    profileImage: "https://placehold.co/100x100",
    review:
      "Exceptional services that delivered real results for our digital transformation efforts.",
    rating: 4,
  },
];

const CustomerReviewsPage: React.FC = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const handleNext = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="px-7 bg-gray-100 text-gray-900 py-12 px-4 md:px-8">
      <div className="container mx-auto space-y-8">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            What Our Clients Say
          </h2>
        </div>

        {/* Review Section */}
        <div className="relative max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          {/* Row 1: Image and Details */}
          <div className="flex flex-col md:flex-row items-center text-center md:text-left md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <img
              src={reviews[currentReview].profileImage}
              alt={reviews[currentReview].name}
              className="w-24 h-24 rounded-full shadow-md mx-auto md:mx-0"
            />
            <div>
              <h3 className="text-xl font-semibold">
                {reviews[currentReview].name}
              </h3>
              <p className="text-sm text-gray-500">
                {reviews[currentReview].role}
              </p>
              <div className="flex justify-center md:justify-start space-x-1 mt-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    fill={
                      index < reviews[currentReview].rating
                        ? "currentColor"
                        : "none"
                    }
                    className={`w-5 h-5 ${
                      index < reviews[currentReview].rating
                        ? "text-yellow-400"
                        : "text-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Review */}
          <div className="mt-6">
            <p className="italic text-gray-600 text-center">
              "{reviews[currentReview].review}"
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute inset-y-0 left-[-20px] flex items-center">
            <button
              onClick={handlePrev}
              className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition duration-300"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-[-20px] flex items-center">
            <button
              onClick={handleNext}
              className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition duration-300"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReview(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentReview ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewsPage;
