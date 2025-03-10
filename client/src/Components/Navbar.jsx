import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown, FiSearch, FiPhone, FiMail } from "react-icons/fi"; // Added FiPhone and FiMail
import { FaWhatsapp } from "react-icons/fa";
import { contactDetails } from "../config"; // Import contact details

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const dropdownRef = useRef(null);
  const enquiryRef = useRef(null);

  const services = [
    { name: "Technician", path: "/services/technician" },
    { name: "Electrician", path: "/services/electrician" },
    { name: "Plumber", path: "/services/plumber" },
    { name: "Painter", path: "/services/painter" },
    { name: "Carpenter", path: "/services/carpenter" },
    { name: "Cleaning Services", path: "/services/cleaning" },
  ];

  const handleMouseEnterServices = () => setIsDropdownOpen(true);
  const handleMouseLeaveServices = () => setIsDropdownOpen(false);

  const handleMouseEnterEnquiry = () => setIsEnquiryOpen(true);
  const handleMouseLeaveEnquiry = () => setIsEnquiryOpen(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        (dropdownRef.current && !dropdownRef.current.contains(event.target)) &&
        (enquiryRef.current && !enquiryRef.current.contains(event.target))
      ) {
        setIsDropdownOpen(false);
        setIsEnquiryOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-white shadow-lg fixed top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="text-blue-700 text-4xl font-bold tracking-wide">
            FixBase
          </Link>
        </div>

        {/* Main Navigation */}
        <div className="flex space-x-6 text-lg">
          <Link to="/" className="text-gray-700 font-medium hover:text-blue-600 transition-all duration-300">
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnterServices}
            onMouseLeave={handleMouseLeaveServices}
          >
            <button className="flex items-center text-gray-700 font-medium hover:text-blue-600 transition-all duration-300">
              Services <FiChevronDown className="ml-1" />
            </button>

            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 rounded-lg py-2">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/about" className="text-gray-700 font-medium hover:text-blue-600 transition-all duration-300">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 font-medium hover:text-blue-600 transition-all duration-300">
            Contact
          </Link>
          <Link to="/signup" className="text-gray-700 font-medium hover:text-blue-600 transition-all duration-300">
            SignUp
          </Link>
          <Link to="/login" className="text-gray-700 font-medium hover:text-blue-600 transition-all duration-300">
            Login
          </Link>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search services..."
            className="bg-gray-100 text-gray-800 rounded-full px-5 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-600 w-64"
          />
          <FiSearch className="absolute right-3 top-2 text-blue-600" size={20} />
        </div>

        {/* Enquiry Button */}
        <div
          className="relative"
          ref={enquiryRef}
          onMouseEnter={handleMouseEnterEnquiry}
          onMouseLeave={handleMouseLeaveEnquiry}
        >
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2">
            Enquiry
          </button>

          {/* Enquiry Dropdown */}
          {isEnquiryOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 rounded-lg py-2">
              <button
                onClick={() => window.location.href = `tel:${contactDetails.phoneNumber}`}
                className="w-full flex items-center space-x-2 text-gray-700 hover:bg-gray-100 p-2 rounded-lg"
              >
                <FiPhone className="text-blue-600" />
                <span>Call Us</span>
              </button>
              <button
                onClick={() => window.open(`https://wa.me/${contactDetails.whatsappNumber}`, "_blank")}
                className="w-full flex items-center space-x-2 text-gray-700 hover:bg-gray-100 p-2 rounded-lg"
              >
                <FaWhatsapp className="text-green-600" />
                <span>WhatsApp</span>
              </button>
              <button
                onClick={() => window.location.href = `mailto:${contactDetails.email}`}
                className="w-full flex items-center space-x-2 text-gray-700 hover:bg-gray-100 p-2 rounded-lg"
              >
                <FiMail className="text-red-600" />
                <span>Email Us</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
