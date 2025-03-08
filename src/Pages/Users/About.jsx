import React from "react";
import { motion } from "framer-motion"; // Import motion for animations

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-6">
      {/* Heading Section */}
      <motion.h1
        className="text-5xl font-bold text-gray-900 mb-8 text-center font-poppins"
        initial={{ opacity: 0, y: -20 }} // Initial animation state
        animate={{ opacity: 1, y: 0 }} // Animation when component mounts
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
      >
        About <span className="text-blue-600">FixBase</span>
      </motion.h1>

      {/* Description Section */}
      <motion.p
        className="text-gray-600 text-lg max-w-3xl text-center leading-relaxed font-inter"
        initial={{ opacity: 0, y: 20 }} // Initial animation state
        animate={{ opacity: 1, y: 0 }} // Animation when component mounts
        transition={{ duration: 1, delay: 0.3 }} // Smooth transition with delay
      >
        Welcome to <span className="font-semibold text-gray-900">FixBase</span>, a leading service provider in Jalandhar. 
        We specialize in offering top-notch solutions for home repairs, cleaning, and maintenance. With a team of 100+ 
        trained professionals, we provide hassle-free services at your doorstep, ensuring quality and reliability.
      </motion.p>

      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        {/* Feature 1 */}
        <motion.div
          className="bg-white border border-gray-200 p-8 rounded-xl text-center hover:shadow-lg transition-shadow"
          whileHover={{ scale: 1.02 }} // Slight scale on hover
          initial={{ opacity: 0, y: 20 }} // Initial animation state
          animate={{ opacity: 1, y: 0 }} // Animation when component mounts
          transition={{ duration: 0.8, delay: 0.5 }} // Smooth transition with delay
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
            Verified Professionals
          </h3>
          <p className="text-gray-600 font-inter">
            Our team consists of verified, well-trained, and experienced professionals who ensure top-notch service.
          </p>
        </motion.div>

        {/* Feature 2 */}
        <motion.div
          className="bg-white border border-gray-200 p-8 rounded-xl text-center hover:shadow-lg transition-shadow"
          whileHover={{ scale: 1.02 }} // Slight scale on hover
          initial={{ opacity: 0, y: 20 }} // Initial animation state
          animate={{ opacity: 1, y: 0 }} // Animation when component mounts
          transition={{ duration: 0.8, delay: 0.7 }} // Smooth transition with delay
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
            Eco-Friendly Solutions
          </h3>
          <p className="text-gray-600 font-inter">
            We use 100% eco-friendly products and advanced technologies to ensure a clean and safe environment.
          </p>
        </motion.div>

        {/* Feature 3 */}
        <motion.div
          className="bg-white border border-gray-200 p-8 rounded-xl text-center hover:shadow-lg transition-shadow"
          whileHover={{ scale: 1.02 }} // Slight scale on hover
          initial={{ opacity: 0, y: 20 }} // Initial animation state
          animate={{ opacity: 1, y: 0 }} // Animation when component mounts
          transition={{ duration: 0.8, delay: 0.9 }} // Smooth transition with delay
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
            Affordable Pricing
          </h3>
          <p className="text-gray-600 font-inter">
            Transparent and competitive pricing with no hidden charges. We ensure complete value for your money.
          </p>
        </motion.div>
      </div>

      {/* Why Choose Us Section */}
      <motion.div
        className="mt-20 max-w-6xl w-full"
        initial={{ opacity: 0, y: 20 }} // Initial animation state
        animate={{ opacity: 1, y: 0 }} // Animation when component mounts
        transition={{ duration: 1, delay: 1.2 }} // Smooth transition with delay
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">
          Why Choose FixBase?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Verified Professionals",
            "Fully Equipped Mechanism",
            "100% Satisfaction Guaranteed",
            "100% Eco-friendly Products",
            "100% Quality Assured",
            "Well Trained & Groomed Professionals",
            "Minimum usage of water for cleaning services",
            "Easy & Hassle-Free Booking",
            "Transparent & Affordable Pricing",
            "No Hidden Charges",
            "24x7 Customer Support",
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.02 }} // Slight scale on hover
              initial={{ opacity: 0, y: 20 }} // Initial animation state
              animate={{ opacity: 1, y: 0 }} // Animation when component mounts
              transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }} // Smooth transition with delay
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-poppins">
                {feature}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Mission and Vision Section */}
      <motion.div
        className="mt-20 max-w-6xl w-full"
        initial={{ opacity: 0, y: 20 }} // Initial animation state
        animate={{ opacity: 1, y: 0 }} // Animation when component mounts
        transition={{ duration: 1, delay: 1.5 }} // Smooth transition with delay
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">
          Our Mission & Vision
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <motion.div
            className="bg-white border border-gray-200 p-8 rounded-xl"
            whileHover={{ scale: 1.02 }} // Slight scale on hover
            initial={{ opacity: 0, y: 20 }} // Initial animation state
            animate={{ opacity: 1, y: 0 }} // Animation when component mounts
            transition={{ duration: 0.8, delay: 0.5 }} // Smooth transition with delay
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
              Our Mission
            </h3>
            <p className="text-gray-600 font-inter">
              To be the finest service provider in Jalandhar, delivering consistent, quality customer service with a 
              commitment to excellence in all lines of business.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="bg-white border border-gray-200 p-8 rounded-xl"
            whileHover={{ scale: 1.02 }} // Slight scale on hover
            initial={{ opacity: 0, y: 20 }} // Initial animation state
            animate={{ opacity: 1, y: 0 }} // Animation when component mounts
            transition={{ duration: 0.8, delay: 0.7 }} // Smooth transition with delay
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
              Our Vision
            </h3>
            <p className="text-gray-600 font-inter">
              To be a leading professional service provider recognized for creating and maintaining an exceptional, 
              innovative, and eco-friendly environment.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Services Section */}
      <motion.div
        className="mt-20 max-w-6xl w-full"
        initial={{ opacity: 0, y: 20 }} // Initial animation state
        animate={{ opacity: 1, y: 0 }} // Animation when component mounts
        transition={{ duration: 1, delay: 1.8 }} // Smooth transition with delay
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">
          Our Services in Jalandhar
        </h2>
        <p className="text-gray-600 text-lg text-center mb-8 font-inter">
          FixBase is a key industry vertical providing quality services in Jalandhar. We focus on recruiting the right 
          talent, training them, and continuously motivating them to ensure a superior customer experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Home Repairs",
            "Cleaning Services",
            "Plumbing Services",
            "Electrical Services",
            "Appliance Maintenance",
            "Interior Services",
            "Event Organization",
            "Commercial Cleaning",
            "Office Cleaning",
            "Deep Cleaning",
            "Water Tank Cleaning",
            "Sewage Cleaning",
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.02 }} // Slight scale on hover
              initial={{ opacity: 0, y: 20 }} // Initial animation state
              animate={{ opacity: 1, y: 0 }} // Animation when component mounts
              transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }} // Smooth transition with delay
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-poppins">
                {service}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 20 }} // Initial animation state
        animate={{ opacity: 1, y: 0 }} // Animation when component mounts
        transition={{ duration: 1, delay: 2.1 }} // Smooth transition with delay
      >
        <a
          href="/contact"
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg"
        >
          Get in Touch
        </a>
      </motion.div>
    </div>
  );
};

export default About;