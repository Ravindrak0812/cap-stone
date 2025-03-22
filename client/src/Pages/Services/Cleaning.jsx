import React, { useState } from "react";
import Cart from "../../Components/Cart"; // Adjust the path based on your folder structure

const Cleaning = () => {
  // Cleaning services data with image URLs
  const services = [
    {
      id: 1,
      name: "1BHK Cleaning",
      description: "Thorough cleaning for 1BHK apartments, including living room, kitchen, and bathroom.",
      image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // 1BHK cleaning image
      price: 1500, // Price as a number for calculation
    },
    {
      id: 2,
      name: "2BHK Cleaning",
      description: "Complete cleaning for 2BHK apartments, including all rooms, kitchen, and bathrooms.",
      image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // 2BHK cleaning image
      price: 2500, // Price as a number for calculation
    },
    {
      id: 3,
      name: "3BHK Cleaning",
      description: "Deep cleaning for 3BHK apartments, covering all rooms, kitchen, bathrooms, and balconies.",
      image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // 3BHK cleaning image
      price: 3500, // Price as a number for calculation
    },
    {
      id: 4,
      name: "4BHK Cleaning",
      description: "Comprehensive cleaning for 4BHK apartments, including all rooms, kitchen, bathrooms, and terraces.",
      image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // 4BHK cleaning image
      price: 4500, // Price as a number for calculation
    },
    {
      id: 5,
      name: "5BHK Cleaning",
      description: "Full cleaning for 5BHK apartments, covering all rooms, kitchen, bathrooms, terraces, and more.",
      image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // 5BHK cleaning image
      price: 5500, // Price as a number for calculation
    },
    {
      id: 6,
      name: "Garden Cleaning",
      description: "Professional cleaning for gardens, including lawn care, pruning, and waste removal.",
      image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // Garden cleaning image
      price: 2000, // Price as a number for calculation
    },
    {
      id: 7,
      name: "Roof Cleaning",
      description: "Cleaning and maintenance of roofs, including moss removal and waterproofing.",
      image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // Roof cleaning image
      price: 3000, // Price as a number for calculation
    },
    {
      id: 8,
      name: "Terrace Cleaning",
      description: "Deep cleaning for terraces, including sweeping, mopping, and stain removal.",
      image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // Terrace cleaning image
      price: 2500, // Price as a number for calculation
    },
    {
      id: 9,
      name: "Bathroom Cleaning",
      description: "Sanitization and deep cleaning of bathrooms, including tiles, fixtures, and drains.",
      image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // Bathroom cleaning image
      price: 1000, // Price as a number for calculation
    },
    {
      id: 10,
      name: "Washroom Cleaning",
      description: "Thorough cleaning of washrooms, including toilets, sinks, and mirrors.",
      image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // Washroom cleaning image
      price: 1000, // Price as a number for calculation
    },
    {
      id: 11,
      name: "Water Tank Cleaning",
      description: "Cleaning and disinfection of water tanks to ensure safe and clean water supply.",
      image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // Water tank cleaning image
      price: 4000, // Price as a number for calculation
    },
    {
      id: 12,
      name: "Water Purifier Cleaning",
      description: "Maintenance and cleaning of water purifiers for optimal performance.",
      image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // Water purifier cleaning image
      price: 1500, // Price as a number for calculation
    },
    {
      id: 13,
      name: "AC Cleaning",
      description: "Deep cleaning of air conditioners, including filters, coils, and ducts.",
      image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // AC cleaning image
      price: 2000, // Price as a number for calculation
    },
    {
      id: 14,
      name: "Office Cleaning",
      description: "Professional cleaning for offices, including desks, floors, and common areas.",
      image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // Office cleaning image
      price: 5000, // Price as a number for calculation
    },
    {
      id: 15,
      name: "Post-Construction Cleaning",
      description: "Cleaning after construction, including debris removal and deep cleaning.",
      image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // Post-construction cleaning image
      price: 6000, // Price as a number for calculation
    },
  ];

  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    customService: "", // For custom service description
  });

  // State for cart (selected services)
  const [cart, setCart] = useState([]);

  // State for form errors
  const [errors, setErrors] = useState({});

  // State for booking confirmation
  const [isSubmitted, setIsSubmitted] = useState(false);

  // State to control visibility of the booking form
  const [showBookingForm, setShowBookingForm] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear errors when input changes
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  // Add service to cart
  const addToCart = (service, quantity = 1) => {
    const isServiceInCart = cart.some((item) => item.id === service.id);
    if (!isServiceInCart) {
      setCart([...cart, { ...service, quantity, totalPrice: service.price * quantity }]);
    } else {
      alert("Service already added to cart!");
    }
  };

  // Remove service from cart
  const removeFromCart = (serviceId) => {
    setCart(cart.filter((item) => item.id !== serviceId));
  };

  // Update quantity of a service in the cart
  const updateQuantity = (serviceId, quantity) => {
    const updatedCart = cart.map((item) =>
      item.id === serviceId
        ? { ...item, quantity: parseInt(quantity, 10), totalPrice: item.price * parseInt(quantity, 10) }
        : item
    );
    setCart(updatedCart);
  };

  // Calculate total price of all services in the cart
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.totalPrice || 0), 0);
  };

  // Handle "Proceed for booking" button click
  const handleBookNow = () => {
    if (cart.length === 0) {
      alert("Please add at least one service to the cart.");
      return;
    }
    setShowBookingForm(true); // Show the booking form
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (cart.some((item) => item.name === "Other") && !formData.customService) {
      newErrors.customService = "Please describe your custom service (minimum 3 words).";
    } else if (
      cart.some((item) => item.name === "Other") &&
      formData.customService.split(" ").length < 3
    ) {
      newErrors.customService = "Please enter at least 3 words.";
    }

    // If there are errors, set them and stop submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If no errors, proceed with booking
    setIsSubmitted(true); // Show confirmation message
    console.log("Booking Details:", {
      ...formData,
      cart,
      totalPrice: calculateTotalPrice(),
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">Cleaning Services</h1>
      <p className="text-gray-600 mb-8 text-center text-lg">
        Professional cleaning services for homes, offices, gardens, and more. From 1BHK to 5BHK, we cover it all!
      </p>

      {/* Services in Card Format */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {services.map((service) => {
          const isInCart = cart.some((item) => item.id === service.id);
          const [quantity, setQuantity] = useState(1); // State for quantity input

          return (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-lg font-semibold text-blue-700">₹{service.price}</p>
                <div className="flex items-center gap-2 mt-4">
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-16 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 font-inter"
                  />
                  {isInCart ? (
                    <button
                      onClick={() => removeFromCart(service.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-300 font-inter"
                    >
                      Remove
                    </button>
                  ) : (
                    <button
                      onClick={() => addToCart(service, quantity)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 font-inter"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cart Section */}
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        totalPrice={calculateTotalPrice()}
        onBookNow={handleBookNow}
      />

      {/* Booking and Enquiry Form */}
      {showBookingForm && !isSubmitted && (
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">Enter details</h3>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className={`w-full px-4 py-2 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 font-inter`}
                required
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className={`w-full px-4 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 font-inter`}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Your Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className={`w-full px-4 py-2 border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 font-inter`}
                required
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
            {cart.some((item) => item.name === "Other") && (
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Describe Your Custom Service
                </label>
                <textarea
                  name="customService"
                  value={formData.customService}
                  onChange={handleInputChange}
                  placeholder="Please describe your requirements (minimum 3 words)..."
                  rows="4"
                  className={`w-full px-4 py-2 border ${
                    errors.customService ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 font-inter`}
                ></textarea>
                {errors.customService && (
                  <p className="text-red-500 text-sm mt-1">{errors.customService}</p>
                )}
              </div>
            )}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Additional Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Any additional details or instructions..."
                rows="4"
                className={`w-full px-4 py-2 border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 font-inter`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 font-poppins"
            >
              Proceed for booking
            </button>
          </form>
        </div>
      )}

      {/* Booking Confirmation */}
      {isSubmitted && (
        <div className="bg-green-100 p-6 rounded-lg shadow-md text-green-700 font-inter mb-12">
          <p className="text-lg font-semibold">Thank you for your booking!</p>
          <p>We will contact you shortly to confirm your booking.</p>
        </div>
      )}

      {/* Call to Action */}
      <div className="text-center bg-blue-100 p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-blue-700 mb-4">Ready to Get Started?</h3>
        <p className="text-gray-600 mb-6">
          Contact us today for reliable and professional cleaning services.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-poppins">
          Call Us Now
        </button>
      </div>
    </div>
  );
};

export default Cleaning;