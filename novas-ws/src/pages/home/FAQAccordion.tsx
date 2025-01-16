// src/components/home/FAQAccordion.tsx
import React, { useState, useMemo } from "react";
import { ChevronDown, Search } from "lucide-react";

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
  isPopular: boolean;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "We provide a wide range of digital services, including web development, SEO, social media marketing, and custom software solutions tailored to your business needs.",
    category: "Services",
    isPopular: true,
  },
  {
    id: 2,
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on the complexity and scope. However, most projects are completed within 4-12 weeks.",
    category: "Process",
    isPopular: true,
  },
  {
    id: 3,
    question: "What is your pricing structure?",
    answer:
      "Our pricing is based on project scope and complexity. We offer flexible pricing models, including fixed-price and hourly-based billing.",
    category: "Pricing",
    isPopular: true,
  },
  {
    id: 4,
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, we offer post-project support and maintenance services to ensure your digital assets run smoothly.",
    category: "Support",
    isPopular: false,
  },
  {
    id: 5,
    question: "Can you handle large-scale projects?",
    answer:
      "Absolutely! We have the resources and expertise to manage large-scale projects with multiple stakeholders.",
    category: "Services",
    isPopular: true,
  },
  {
    id: 6,
    question: "What industries do you specialize in?",
    answer:
      "We have experience across various industries, including e-commerce, healthcare, finance, and education.",
    category: "Industries",
    isPopular: false,
  },
  {
    id: 7,
    question: "How do you ensure data security?",
    answer:
      "We follow industry-standard security protocols, including encryption, regular audits, and GDPR compliance, to protect your data.",
    category: "Security",
    isPopular: true,
  },
  {
    id: 8,
    question: "Can you improve my website's search engine ranking?",
    answer:
      "Yes, our SEO experts use proven strategies to enhance your website's visibility and rankings on search engines.",
    category: "SEO",
    isPopular: true,
  },
  {
    id: 9,
    question: "Do you offer content creation services?",
    answer:
      "Yes, we have a team of skilled content creators who can develop high-quality blogs, videos, and graphics for your brand.",
    category: "Services",
    isPopular: false,
  },
  {
    id: 10,
    question: "What tools and technologies do you use?",
    answer:
      "We use the latest tools and technologies, including React, Node.js, WordPress, HubSpot, and Google Analytics, to deliver cutting-edge solutions.",
    category: "Technology",
    isPopular: false,
  },
];

const categories = [
  "All",
  ...faqs.reduce<string[]>((acc, faq) => {
    if (!acc.includes(faq.category)) {
      acc.push(faq.category);
    }
    return acc;
  }, []),
];

const FAQAccordion: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || faq.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="px-4 bg-[#f3f4f6] min-h-screen py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our digital services? Explore our FAQ to find
            the answers you're looking for.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => (
            <div key={faq.id} className="border rounded-lg overflow-hidden">
              <button
                onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{faq.question}</span>
                  {faq.isPopular && (
                    <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    activeId === faq.id ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeId === faq.id ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="p-4 bg-gray-50 border-t">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No FAQs found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQAccordion;
