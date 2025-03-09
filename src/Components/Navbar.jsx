import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown, FiSearch, FiMessageCircle, FiPhone, FiMail, FiUser } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon from react-icons/fa
import { contactDetails } from "../config"; // Import contact details

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false); // State for user dropdown
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredServices, setFilteredServices] = useState([]);
  const dropdownRef = useRef(null);
  const enquiryRef = useRef(null);
  const searchRef = useRef(null);
  const userRef = useRef(null);

  const services = [
    { name: "Technician", path: "/services/technician" },
    { name: "Electrician", path: "/services/electrician" },
    { name: "Plumber", path: "/services/plumber" },
    { name: "Painter", path: "/services/painter" },
    { name: "Carpenter", path: "/services/carpenter" },
    { name: "Cleaning Services", path: "/services/cleaning" },
  ];

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleEnquiry = () => setIsEnquiryOpen(!isEnquiryOpen);
  const toggleUserDropdown = () => setIsUserDropdownOpen(!isUserDropdownOpen); // Toggle user dropdown

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    if (query) {
      const results = services.filter((service) =>
        service.name.toLowerCase().includes(query)
      );
      setFilteredServices(results);
    } else {
      setFilteredServices([]);
    }
  };

  const handleSearchClick = (servicePath) => {
    setSearchQuery("");
    setFilteredServices([]);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        (dropdownRef.current && !dropdownRef.current.contains(event.target)) &&
        (searchRef.current && !searchRef.current.contains(event.target)) &&
        (enquiryRef.current && !enquiryRef.current.contains(event.target)) &&
        (userRef.current && !userRef.current.contains(event.target))
      ) {
        setIsDropdownOpen(false);
        setFilteredServices([]);
        setIsEnquiryOpen(false);
        setIsUserDropdownOpen(false); // Close user dropdown
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-white shadow-lg fixed top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="text-blue-700 text-4xl font-bold tracking-wide hover:text-blue-800 transition-all duration-300">
            FixBase
          </Link>
        </div>

        {/* Main Navigation */}
        <div className="flex space-x-6 text-lg">
          <Link to="/" className="text-gray-700 font-medium hover:text-blue-600 transition-all duration-300">
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center text-gray-700 font-medium hover:text-blue-600 transition-all duration-300"
            >
              Services <FiChevronDown className="ml-1" />
            </button>

            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg border border-gray-100 rounded-lg py-2">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-all duration-300"
                    onClick={() => setIsDropdownOpen(false)}
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
        </div>

        {/* Search Bar */}
        <div className="relative" ref={searchRef}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search services..."
            className="bg-gray-50 text-gray-800 rounded-full px-5 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-100 w-64 transition-all duration-300"
          />
          <FiSearch className="absolute right-3 top-2 text-blue-600" size={20} />

          {/* Search Results Dropdown */}
          {filteredServices.length > 0 && (
            <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg border border-gray-100 rounded-lg py-2">
              {filteredServices.map((service) => (
                <Link
                  key={service.name}
                  to={service.path}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-all duration-300"
                  onClick={() => handleSearchClick(service.path)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Enquiry Button */}
        <div className="relative" ref={enquiryRef}>
          <button
            onClick={toggleEnquiry}
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2"
          >
            <FiMessageCircle className="text-xl" />
            <span>Enquiry</span>
          </button>

          {/* Enquiry Dropdown */}
          {isEnquiryOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg border border-gray-100 rounded-lg py-2">
              <button
                onClick={() => window.location.href = `tel:${contactDetails.phoneNumber}`}
                className="w-full flex items-center space-x-2 text-gray-700 hover:bg-gray-50 p-2 rounded-lg transition-all duration-300"
              >
                <FiPhone className="text-blue-600" />
                <span>Call Us</span>
              </button>
              <button
                onClick={() => window.open(`https://wa.me/${contactDetails.whatsappNumber}`, "_blank")}
                className="w-full flex items-center space-x-2 text-gray-700 hover:bg-gray-50 p-2 rounded-lg transition-all duration-300"
              >
                <FaWhatsapp className="text-green-600" />
                <span>WhatsApp</span>
              </button>
              <button
                onClick={() => window.location.href = `mailto:${contactDetails.email}`}
                className="w-full flex items-center space-x-2 text-gray-700 hover:bg-gray-50 p-2 rounded-lg transition-all duration-300"
              >
                <FiMail className="text-red-600" />
                <span>Email Us</span>
              </button>
            </div>
          )}
        </div>

        {/* User Icon for Login/Signup */}
        <div className="relative" ref={userRef}>
          <button
            onClick={toggleUserDropdown}
            className="text-gray-700 hover:text-blue-600 transition-all duration-300"
          >
            <FiUser className="text-2xl" />
          </button>

          {/* User Dropdown */}
          {isUserDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg border border-gray-100 rounded-lg py-2">
              <Link
                to="/login"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-all duration-300"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-all duration-300"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}