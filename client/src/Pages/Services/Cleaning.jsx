// const Cleaning = () => {
//     return (
//       <div className="p-6">
//         <h1 className="text-3xl font-bold text-blue-600">Cleaning Services</h1>
//         <p>Professional cleaning services for homes and offices.</p>
//       </div>
//     );
//   };
  
//   export default Cleaning;
  

import React from "react";

const Cleaning = () => {
  // Cleaning services data with image URLs
  const services = [
    {
      id: 1,
      name: "1BHK Cleaning",
      description: "Thorough cleaning for 1BHK apartments, including living room, kitchen, and bathroom.",
      image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // 1BHK cleaning image
      price: "₹1500",
    },
    {
      id: 2,
      name: "2BHK Cleaning",
      description: "Complete cleaning for 2BHK apartments, including all rooms, kitchen, and bathrooms.",
      image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // 2BHK cleaning image
      price: "₹2500",
    },
    {
      id: 3,
      name: "3BHK Cleaning",
      description: "Deep cleaning for 3BHK apartments, covering all rooms, kitchen, bathrooms, and balconies.",
      image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // 3BHK cleaning image
      price: "₹3500",
    },
    {
      id: 4,
      name: "4BHK Cleaning",
      description: "Comprehensive cleaning for 4BHK apartments, including all rooms, kitchen, bathrooms, and terraces.",
      image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // 4BHK cleaning image
      price: "₹4500",
    },
    {
      id: 5,
      name: "5BHK Cleaning",
      description: "Full cleaning for 5BHK apartments, covering all rooms, kitchen, bathrooms, terraces, and more.",
      image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // 5BHK cleaning image
      price: "₹5500",
    },
    {
      id: 6,
      name: "Garden Cleaning",
      description: "Professional cleaning for gardens, including lawn care, pruning, and waste removal.",
      image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // Garden cleaning image
      price: "₹2000",
    },
    {
      id: 7,
      name: "Roof Cleaning",
      description: "Cleaning and maintenance of roofs, including moss removal and waterproofing.",
      image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // Roof cleaning image
      price: "₹3000",
    },
    {
      id: 8,
      name: "Terrace Cleaning",
      description: "Deep cleaning for terraces, including sweeping, mopping, and stain removal.",
      image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // Terrace cleaning image
      price: "₹2500",
    },
    {
      id: 9,
      name: "Bathroom Cleaning",
      description: "Sanitization and deep cleaning of bathrooms, including tiles, fixtures, and drains.",
      image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // Bathroom cleaning image
      price: "₹1000",
    },
    {
      id: 10,
      name: "Washroom Cleaning",
      description: "Thorough cleaning of washrooms, including toilets, sinks, and mirrors.",
      image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // Washroom cleaning image
      price: "₹1000",
    },
    {
      id: 11,
      name: "Water Tank Cleaning",
      description: "Cleaning and disinfection of water tanks to ensure safe and clean water supply.",
      image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // Water tank cleaning image
      price: "₹4000",
    },
    {
      id: 12,
      name: "Water Purifier Cleaning",
      description: "Maintenance and cleaning of water purifiers for optimal performance.",
      image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // Water purifier cleaning image
      price: "₹1500",
    },
    {
      id: 13,
      name: "AC Cleaning",
      description: "Deep cleaning of air conditioners, including filters, coils, and ducts.",
      image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // AC cleaning image
      price: "₹2000",
    },
    {
      id: 14,
      name: "Office Cleaning",
      description: "Professional cleaning for offices, including desks, floors, and common areas.",
      image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // Office cleaning image
      price: "₹5000",
    },
    {
      id: 15,
      name: "Post-Construction Cleaning",
      description: "Cleaning after construction, including debris removal and deep cleaning.",
      image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // Post-construction cleaning image
      price: "₹6000",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">Cleaning Services</h1>
      <p className="text-gray-600 mb-8 text-center text-lg">
        Professional cleaning services for homes, offices, gardens, and more. From 1BHK to 5BHK, we cover it all!
      </p>

      {/* Services in Card Format */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cleaning;