import React, { useState } from "react";

const Electrician = () => {
  // Service data with image URLs
  const services = [
    {
      id: 1,
      name: "Fan Installation",
      description: "Installation of ceiling, table, or exhaust fans.",
      image: "https://images.pexels.com/photos/6077368/pexels-photo-6077368.jpeg", // Fan installation image
      price: "₹500",
    },
    {
      id: 2,
      name: "Light Fitting",
      description: "Installation of LED lights, chandeliers, and bulbs.",
      image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg", // Light fitting image
      price: "₹350",
    },
    {
      id: 3,
      name: "Wiring Repair",
      description: "Repair and replacement of faulty wiring.",
      image: "https://images.pexels.com/photos/4792719/pexels-photo-4792719.jpeg", // Wiring repair image
      price: "₹700",
    },
    {
      id: 4,
      name: "Switchboard Repair",
      description: "Repair and replacement of switchboards and circuit breakers.",
      image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg", // Switchboard repair image
      price: "₹600",
    },
    {
      id: 5,
      name: "Electrical Inspection",
      description: "Comprehensive inspection of electrical systems.",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg", // Electrical inspection image
      price: "₹1000",
    },
    {
      id: 6,
      name: "Generator Setup",
      description: "Installation and setup of backup generators.",
      image: "https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg", // Generator setup image
      price: "₹1500",
    },
  ];

  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // State for booking confirmation
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setIsSubmitted(true); // Show confirmation message
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-blue-700 mb-6 text-center">Electrician Services</h2>
      <p className="text-gray-600 mb-8 text-center text-lg">
        We offer professional electrical services at affordable prices. Our certified electricians ensure safe and reliable solutions for all your electrical needs.
      </p>

      {/* Image Banner */}
      <div className="mb-8">
        <img
          src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg" // Electrician banner image
          alt="Electrician Services"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Services in Card Format */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-2">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-lg font-semibold text-blue-700">{service.price}</p>
              <button
                onClick={() =>
                  setFormData({ ...formData, service: service.name })
                }
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-blue-700 mb-4">Why Choose Us?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg" // Certified electricians image
              alt="Certified Electricians"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-blue-700 mb-2">Certified Electricians</h4>
            <p className="text-gray-600">Our team consists of certified and experienced electricians.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg" // Affordable pricing image
              alt="Affordable Pricing"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-blue-700 mb-2">Affordable Pricing</h4>
            <p className="text-gray-600">We offer competitive and transparent pricing for all services.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg" // 24/7 support image
              alt="24/7 Support"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-blue-700 mb-2">24/7 Support</h4>
            <p className="text-gray-600">Emergency services available round the clock.</p>
          </div>
        </div>
      </div>

      {/* Booking and Enquiry Form */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-blue-700 mb-4">Book a Service or Enquire</h3>
        {isSubmitted ? (
          <div className="bg-green-100 p-6 rounded-lg shadow-md text-green-700">
            <p className="text-lg font-semibold">Thank you for your enquiry!</p>
            <p>We will contact you shortly to confirm your booking.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Your Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Select Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service.id} value={service.name}>
                    {service.name} - {service.price}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Additional Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Describe your requirements..."
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              Submit Enquiry
            </button>
          </form>
        )}
      </div>

      {/* Call to Action */}
      <div className="text-center bg-blue-100 p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-blue-700 mb-4">Ready to Get Started?</h3>
        <p className="text-gray-600 mb-6">Contact us today for reliable and professional electrical services.</p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300">
          Call Us Now
        </button>
      </div>
    </div>
  );
};

export default Electrician;