import React, { useState } from "react";
import Cart from "../../Components/Cart"; // Adjust the path based on your folder structure

const Carpenter = () => {
  // Carpenter services data with image URLs
  const services = [
    {
      id: 1,
      name: "Furniture Repair",
      description: "Expert repair and restoration of damaged furniture for small rooms or large spaces.",
      image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg", // Furniture repair image
      price: 800, // Price as a number for calculation
    },
    {
      id: 2,
      name: "Custom Woodwork",
      description: "Custom-made wooden furniture tailored to your needs, from small shelves to large haveli designs.",
      image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg", // Custom woodwork image
      price: 1500, // Price as a number for calculation
    },
    {
      id: 3,
      name: "Cabinet Installation",
      description: "Professional installation of cabinets and shelves for kitchens, living rooms, and more.",
      image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg", // Cabinet installation image
      price: 1200, // Price as a number for calculation
    },
    {
      id: 4,
      name: "Door Repair",
      description: "Repair and replacement of damaged doors, including small room doors and large haveli entrances.",
      image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg", // Door repair image
      price: 1000, // Price as a number for calculation
    },
    {
      id: 5,
      name: "Wooden Flooring",
      description: "Installation and repair of wooden flooring for small rooms or expansive haveli spaces.",
      image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg", // Wooden flooring image
      price: 2000, // Price as a number for calculation
    },
    {
      id: 6,
      name: "Deck Building",
      description: "Design and construction of wooden decks for small balconies or large outdoor haveli areas.",
      image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg", // Deck building image
      price: 2500, // Price as a number for calculation
    },
    {
      id: 7,
      name: "Staircase Construction",
      description: "Custom wooden staircases for small homes or grand havelis.",
      image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg", // Staircase construction image
      price: 3000, // Price as a number for calculation
    },
    {
      id: 8,
      name: "Window Frames",
      description: "Design and installation of wooden window frames for any size of property.",
      image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg", // Window frames image
      price: 1800, // Price as a number for calculation
    },
    {
      id: 9,
      name: "Wooden Partitions",
      description: "Custom wooden partitions for small rooms or large haveli spaces.",
      image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg", // Wooden partitions image
      price: 2200, // Price as a number for calculation
    },
    {
      id: 10,
      name: "Outdoor Gazebo",
      description: "Construction of wooden gazebos for gardens or large outdoor haveli spaces.",
      image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg", // Outdoor gazebo image
      price: 3500, // Price as a number for calculation
    },
    {
      id: 11,
      name: "Wooden Ceiling",
      description: "Installation of wooden ceilings for small rooms or large haveli halls.",
      image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg", // Wooden ceiling image
      price: 2800, // Price as a number for calculation
    },
    {
      id: 12,
      name: "Custom Wardrobes",
      description: "Design and installation of custom wooden wardrobes for any room size.",
      image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg", // Custom wardrobes image
      price: 2400, // Price as a number for calculation
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
      <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">Carpenter Services</h1>
      <p className="text-gray-600 mb-8 text-center text-lg">
        From small rooms to grand havelis, we provide expert woodwork and furniture services tailored to your needs.
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
          Contact us today for reliable and professional carpenter services.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-poppins">
          Call Us Now
        </button>
      </div>
    </div>
  );
};

export default Carpenter;