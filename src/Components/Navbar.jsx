import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiSearch, FiChevronDown } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search Query:", searchQuery);
  };
  // Fix: Ensure clicking on a service closes the dropdown and mobile menu
  const handleServiceClick = (service) => {
    console.log("Clicked on:", service);
    setIsDropdownOpen(false); // Close dropdown
    closeMenu(); // Close mobile menu
  };
  
  

  return (
    <nav className="w-full bg-white shadow-lg fixed top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between h-20">
        <div className="flex-shrink-0">
          <Link to="/" className="text-blue-700 text-4xl font-bold tracking-wide">
            FixBase
          </Link>
        </div>

        <div className="hidden md:flex space-x-6 text-lg">
          <Link to="/" className="text-gray-700 font-medium hover:text-blue-600 transition-all duration-300">
            Home
          </Link>

          <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center text-gray-700 font-medium hover:text-blue-600 transition-all duration-300">
              Services <FiChevronDown className="ml-1" />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 rounded-lg py-2">
                {["Technician", "Electrician", "Plumber", "Painter", "Carpenter", "Cleaning Services"].map((service) => (
  <Link
    key={service}
    to={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`} // Fix path formatting
    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
    onClick={() => handleServiceClick(service)}
  >
    {service}
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

        <div className="hidden md:flex items-center relative">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search services..."
              className="bg-gray-100 text-gray-800 rounded-full px-5 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-600 w-64"
            />
            <button type="submit" className="absolute right-3 top-2 text-blue-600 hover:text-blue-700">
              <FiSearch size={20} />
            </button>
          </form>
        </div>

        <div className="hidden md:block">
          <Link to="/CallUs" className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all duration-300">
            Call Us
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-600 focus:outline-none">
            {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </button>
        </div>
      </div>

      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={closeMenu}></div>}

      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 relative">
          <button onClick={closeMenu} className="absolute top-5 right-5 text-gray-700 hover:text-red-600 text-3xl">
            <FiX />
          </button>

          <Link to="/" onClick={closeMenu} className="text-gray-700 text-xl font-medium hover:text-blue-600 transition-all duration-300">
            Home
          </Link>

          <div className="relative w-full text-center">


            
          <button onClick={toggleDropdown} className="flex justify-center items-center w-full text-gray-700 text-xl font-medium hover:text-blue-600 transition-all duration-300">
  Services <FiChevronDown className="ml-1" />
</button>

isDropdownOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
          <Link
            to="/services/electrician"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={handleServiceClick}
          >
            Electrician
          </Link>
          <Link
            to="/services/cleaning"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={handleServiceClick}
          >
            Cleaning Services
          </Link>
          <Link
            to="/services/painter"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={handleServiceClick}
          >
            Painter
          </Link>
)

              </div>
            
          </div>

          <Link to="/about" onClick={closeMenu} className="text-gray-700 text-xl font-medium hover:text-blue-600 transition-all duration-300">
            About
          </Link>
          <Link to="/contact" onClick={closeMenu} className="text-gray-700 text-xl font-medium hover:text-blue-600 transition-all duration-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
















