import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiTool,
  FiZap,
  FiDroplet,
  FiEdit,
  FiHome,
  FiTrash2,
} from "react-icons/fi";
import Navbar from "../../Components/Navbar";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  // List of Services with their paths & icons
  const services = [
    { name: "Technician", path: "/services/technician", icon: <FiTool /> },
    { name: "Electrician", path: "/services/electrician", icon: <FiZap /> },
    { name: "Plumber", path: "/services/plumber", icon: <FiDroplet /> },
    { name: "Painter", path: "/services/painter", icon: <FiEdit /> },
    { name: "Carpenter", path: "/services/carpenter", icon: <FiHome /> },
    { name: "Cleaning Services", path: "/services/cleaning", icon: <FiTrash2 /> },
  ];

  return (
    <div className="bg-gray-50">
      {/* Navbar at the top */}
      <Navbar />

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center font-poppins">
          Our <span className="text-blue-600">Services</span>
        </h2>

        {/* Service Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              className="relative p-8 bg-white/90 backdrop-blur-md shadow-lg rounded-xl flex flex-col items-center transition-all cursor-pointer 
                        hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 hover:text-gray-900 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-blue-500 hover:text-gray-800 text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.name}</h3>
              <Link to={service.path} className="absolute inset-0"></Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
