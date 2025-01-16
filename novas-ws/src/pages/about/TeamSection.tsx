// src/pages/about/TeamSection.tsx
import React from "react";
import { Linkedin, Twitter, Facebook } from "lucide-react";

const teamMembers = [
  {
    name: "Alice Johnson",
    position: "CEO & Founder",
    image: "https://placehold.co/300x300",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    name: "Bob Smith",
    position: "CTO",
    image: "https://placehold.co/300x300",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    name: "Clara Davis",
    position: "Head of Marketing",
    image: "https://placehold.co/300x300",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    name: "David Lee",
    position: "Lead Developer",
    image: "https://placehold.co/300x300",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    name: "Emma White",
    position: "UI/UX Designer",
    image: "https://placehold.co/300x300",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    name: "Frank Black",
    position: "Content Strategist",
    image: "https://placehold.co/300x300",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    name: "Grace Brown",
    position: "Project Manager",
    image: "https://placehold.co/300x300",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    name: "Henry Green",
    position: "Full Stack Developer",
    image: "https://placehold.co/300x300",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
];

const TeamSection: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12 px-8 md:px-20 2xl:px-80">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Meet Our Team
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Our passionate and dedicated team drives innovation and delivers
          exceptional results for our clients.
        </p>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
          >
            {/* Profile Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full shadow-md mb-4"
            />
            {/* Name & Position */}
            <h3 className="text-xl font-semibold text-gray-800">
              {member.name}
            </h3>
            <p className="text-gray-600 mb-4">{member.position}</p>
            {/* Social Links */}
            <div className="flex justify-center space-x-4">
              {member.social.linkedin && (
                <a
                  href={member.social.linkedin}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {member.social.twitter && (
                <a
                  href={member.social.twitter}
                  className="text-gray-600 hover:text-blue-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              )}
              {member.social.facebook && (
                <a
                  href={member.social.facebook}
                  className="text-gray-600 hover:text-blue-700 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
