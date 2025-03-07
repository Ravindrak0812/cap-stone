import React from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import founderImage from "../../assets/radha.jpg"; // Ensure radha.jpg is in src/assets

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-20 text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Team</h2>
      <p className="text-gray-600 mb-6">Meet the amazing team behind FixEase.</p>

      {/* Founder Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <img
          src={founderImage}
          alt="Founder Radha Pal"
          className="w-60 h-80 mx-auto rounded-full border-4 border-blue-500 object-cover"
        />
        <h3 className="text-2xl font-semibold text-gray-800 mt-3">Radha Pal</h3>
        <p className="text-gray-600">Founder</p>
      </div>

      {/* Co-Founder Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <img
          src="https://imageio.forbes.com/specials-images/imageserve/6453f396aaf309a63dfb7275/0x0.jpg?format=jpg&crop=1920,1080,x0,y0,safe&height=900&width=1600&fit=bounds"
          alt="Co-Founder Anand Kumar"
          className="w-32 h-32 mx-auto rounded-full border-4 border-green-500 object-cover"
        />
        <h3 className="text-xl font-semibold text-gray-800 mt-3">Anand Kumar</h3>
        <p className="text-gray-600">Co-Founder</p>
      </div>

      {/* Employees Section */}
      <h3 className="text-2xl font-semibold text-blue-600 mt-6">Employees</h3>
      <p className="text-gray-600 mb-4">Ravinder, Abhishek, Shubham</p>

      {/* Contact Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-gray-800">Contact Us</h3>
        <p className="text-gray-600">Feel free to reach out to us anytime!</p>

        <div className="mt-4 flex flex-col items-center space-y-4">
          <p className="flex items-center space-x-2 text-gray-700">
            <FaPhoneAlt className="text-blue-600" />
            <span>+12345678900</span>
          </p>
          <p className="flex items-center space-x-2 text-gray-700">
            <FaWhatsapp className="text-green-600" />
            <span>+12345678900</span>
          </p>
          <p className="flex items-center space-x-2 text-gray-700">
            <FaEnvelope className="text-red-500" />
            <span>fixease@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
