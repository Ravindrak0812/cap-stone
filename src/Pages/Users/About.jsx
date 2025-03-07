import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      {/* Heading Section */}
      <motion.h1
        className="text-4xl font-bold text-blue-600 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About FixBase
      </motion.h1>

      {/* Description Section */}
      <motion.p
        className="text-gray-700 text-lg max-w-3xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to <span className="font-bold text-blue-500">FixBase</span>, your go-to platform for seamless and reliable solutions.  
        We specialize in providing top-notch services to help individuals and businesses solve technical challenges with ease.  
        Whether you're looking for **IT support, web development, or technical consulting**, we've got you covered!
      </motion.p>

      {/* Features Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        {/* Feature 1 */}
        <motion.div
          className="bg-white shadow-lg p-6 rounded-xl text-center"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold text-blue-600">Expert Support</h3>
          <p className="text-gray-600 mt-2">Our professionals provide 24/7 support to solve your issues quickly.</p>
        </motion.div>

        {/* Feature 2 */}
        <motion.div
          className="bg-white shadow-lg p-6 rounded-xl text-center"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold text-blue-600">Fast & Reliable</h3>
          <p className="text-gray-600 mt-2">We ensure quick solutions without compromising on quality.</p>
        </motion.div>

        {/* Feature 3 */}
        <motion.div
          className="bg-white shadow-lg p-6 rounded-xl text-center"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold text-blue-600">Affordable Pricing</h3>
          <p className="text-gray-600 mt-2">Premium services at budget-friendly rates for businesses & individuals.</p>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <a
          href="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-700 transition"
        >
          Get in Touch
        </a>
      </motion.div>
    </div>
  );
};

export default About;
