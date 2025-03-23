import React from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { contactDetails } from "../../config"; // Correct import path

const Contact = () => {
  // Predefined WhatsApp message template
  const whatsappMessage = `Hello FixEase Team,

I am interested in your services. Please send me more information about:

1. Home Repairs
2. Plumbing Services
3. Electrical Services
4. Appliance Maintenance
5. Cleaning Services

Thank you!`;

  // Function to handle phone call
  const handleCall = () => {
    window.location.href = `tel:${contactDetails.phoneNumber}`;
  };

  // Function to handle WhatsApp message
  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${contactDetails.whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  // Function to handle email
  const handleEmail = () => {
    window.location.href = `mailto:${contactDetails.email}`;
  };

  return (
    <div className="max-w-6xl mx-auto p-6 mt-20 text-center">
      {/* Heading Section */}
      <motion.h2
        className="text-5xl font-bold text-blue-700 mb-6 font-poppins"
        initial={{ opacity: 0, y: -20 }} // Initial animation state
        animate={{ opacity: 1, y: 0 }} // Animation on load
        transition={{ duration: 0.8 }} // Animation duration
      >
        Our Team
      </motion.h2>

      {/* Contact Section */}
      <motion.div
        className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl shadow-xl"
        initial={{ opacity: 0, y: 20 }} // Initial animation state
        animate={{ opacity: 1, y: 0 }} // Animation on load
        transition={{ duration: 1, delay: 0.7 }} // Animation duration and delay
      >
        <h3 className="text-4xl font-bold text-blue-700 mb-6 font-poppins">Contact Us</h3>
        <p className="text-gray-600 text-lg mb-8 font-inter">
          Feel free to reach out to us anytime! We're here to help.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 place-items-center">
  {/* Call Us Button */}
  <motion.button
    onClick={handleCall}
    className="flex items-center justify-center p-4 rounded-full hover:bg-blue-100 transition-all duration-300"
    whileHover={{ scale: 1.1 }}
  >
    <div className="bg-blue-600 p-4 rounded-full">
      <FaPhoneAlt className="text-2xl text-white" />
    </div>
  </motion.button>

  {/* WhatsApp Button */}
  <motion.button
    onClick={handleWhatsApp}
    className="flex items-center justify-center p-4 rounded-full hover:bg-green-100 transition-all duration-300"
    whileHover={{ scale: 1.1 }}
  >
    <div className="bg-green-600 p-4 rounded-full">
      <FaWhatsapp className="text-2xl text-white" />
    </div>
  </motion.button>

  {/* Email Button */}
  <motion.button
    onClick={handleEmail}
    className="flex items-center justify-center p-4 rounded-full hover:bg-red-100 transition-all duration-300"
    whileHover={{ scale: 1.1 }}
  >
    <div className="bg-red-600 p-4 rounded-full">
      <FaEnvelope className="text-2xl text-white" />
    </div>
  </motion.button>
</div>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }} // Initial animation state
        animate={{ opacity: 1, y: 0 }} // Animation on load
        transition={{ duration: 1, delay: 1.2 }} // Animation duration and delay
      >
        <p className="text-gray-600 text-lg mb-6 font-inter">
          Need more information? Reach out to us today!
        </p>
        <button
          onClick={handleWhatsApp}
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg"
        >
          Get in Touch
        </button>
      </motion.div>
    </div>
  );
};

export default Contact;