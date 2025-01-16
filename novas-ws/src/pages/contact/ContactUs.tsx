import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 via-white to-gray-200 min-h-screen pt-10 md:pt-14">
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Get in Touch with Us
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Contact Information
            </h2>
            <p className="text-gray-600 mb-8">
              Reach out to us anytime, and we’ll happily answer your questions.
            </p>
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Mail className="w-8 h-8 text-blue-500" />
                <div>
                  <p className="text-gray-800 font-medium">Email</p>
                  <a
                    href="mailto:info@novas.com"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    info@novas.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-8 h-8 text-green-500" />
                <div>
                  <p className="text-gray-800 font-medium">Phone</p>
                  <a
                    href="tel:+1234567890"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    (123) 456-7890
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-8 h-8 text-red-500" />
                <div>
                  <p className="text-gray-800 font-medium">Address</p>
                  <p className="text-gray-600">
                    789 Novas Lane
                    <br />
                    Innovation City, IN 45678
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-pink-600 transition"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-400 transition"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
