import React, { useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaClock, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import founderImage from "../../assets/images/ravi.jpg";
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

  const teamMembers = [
    {
      name: "Ravindra Kumar",
      role: "Founder & CEO",
      image: founderImage,
      bio: "With over 10 years of experience in home services, Ravindra founded FixEase to revolutionize how people access quality home maintenance."
    },
    {
      name: "Anju Sharma",
      role: "Operations Manager",
      image: teamImage1,
      bio: "Ensuring seamless service delivery and customer satisfaction across all our operations."
    },
    {
      name: "Radha Kumari",
      role: "Technical Lead",
      image: teamImage2,
      bio: "Oversees our team of skilled technicians and maintains our high service standards."
    },
    {
      name: "Neha Gupta",
      role: "Customer Support",
      image: teamImage3,
      bio: "Leads our 24/7 customer support team to ensure your queries are always addressed."
    }
  ];

  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 mt-20 text-center">
      {/* Heading Section */}
      <motion.h2
        className="text-5xl font-bold text-blue-700 mb-6 font-poppins"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Team
      </motion.h2>
      <motion.p
        className="text-gray-600 mb-8 text-lg font-inter"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Meet the amazing team behind FixEase.
      </motion.p>

      {/* Founder Section */}
      <motion.div
        className="bg-white shadow-xl rounded-xl p-8 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <img
          src={founderImage}
          alt="Founder Ravindra Kumar"
          className="w-60 h-80 mx-auto rounded-full border-4 border-blue-500 object-cover"
        />
        <h3 className="text-2xl font-semibold text-gray-800 mt-4 font-poppins">Ravindra Kumar</h3>
        <p className="text-gray-600 font-inter">Founder</p>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <h3 className="text-4xl font-bold text-blue-700 mb-6 font-poppins">Contact Us</h3>
        <p className="text-gray-600 text-lg mb-8 font-inter">
          Feel free to reach out to us anytime! We're here to help.
        </p>

        {/* Contact Buttons */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Call Us Button */}
          <motion.button
            onClick={handleCall}
            className="flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-blue-600 p-4 rounded-full mb-4">
              <FaPhoneAlt className="text-2xl text-white" />
            </div>
            <h4 className="text-xl font-semibold text-blue-700 mb-2 font-poppins">Call Us</h4>
            <p className="text-gray-600 font-inter">{contactDetails.phoneNumber}</p>
          </motion.button>

          {/* WhatsApp Button */}
          <motion.button
            onClick={handleWhatsApp}
            className="flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-green-600 p-4 rounded-full mb-4">
              <FaWhatsapp className="text-2xl text-white" />
            </div>
            <h4 className="text-xl font-semibold text-blue-700 mb-2 font-poppins">WhatsApp</h4>
            <p className="text-gray-600 font-inter">{contactDetails.whatsappNumber}</p>
          </motion.button>

          {/* Email Button */}
          <motion.button
            onClick={handleEmail}
            className="flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-red-600 p-4 rounded-full mb-4">
              <FaEnvelope className="text-2xl text-white" />
            </div>
            <h4 className="text-xl font-semibold text-blue-700 mb-2 font-poppins">Email Us</h4>
            <p className="text-gray-600 font-inter">{contactDetails.email}</p>
          </motion.button>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
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