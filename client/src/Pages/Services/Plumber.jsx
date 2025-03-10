import React from "react";

const Plumber = () => {
  // Plumbing services data with proper image URLs
  const services = [
    {
      id: 1,
      name: "Leak Repair",
      description: "Fix leaking pipes, faucets, and valves to prevent water damage.",
      image: "https://images.pexels.com/photos/6195089/pexels-photo-6195089.jpeg", // Leak repair image
      price: "₹800",
    },
    {
      id: 2,
      name: "Pipe Installation",
      description: "Installation of new pipes for water supply, drainage, and gas lines.",
      image: "https://images.pexels.com/photos/6195089/pexels-photo-6195089.jpeg", // Pipe installation image
      price: "₹1500",
    },
    {
      id: 3,
      name: "Drain Cleaning",
      description: "Unclog and clean blocked drains to restore proper water flow.",
      image: "https://images.pexels.com/photos/6195089/pexels-photo-6195089.jpeg", // Drain cleaning image
      price: "₹1200",
    },
    {
      id: 4,
      name: "Water Heater Repair",
      description: "Repair and maintenance of water heaters for optimal performance.",
      image: "https://images.pexels.com/photos/6195089/pexels-photo-6195089.jpeg", // Water heater repair image
      price: "₹2000",
    },
    {
      id: 5,
      name: "Bathroom Plumbing",
      description: "Installation and repair of bathroom fixtures, including sinks, showers, and toilets.",
      image: "https://images.pexels.com/photos/6195089/pexels-photo-6195089.jpeg", // Bathroom plumbing image
      price: "₹2500",
    },
    {
      id: 6,
      name: "Kitchen Plumbing",
      description: "Installation and repair of kitchen sinks, faucets, and dishwashers.",
      image: "https://images.pexels.com/photos/6195089/pexels-photo-6195089.jpeg", // Kitchen plumbing image
      price: "₹2200",
    },
    {
      id: 7,
      name: "Sewer Line Repair",
      description: "Repair and replacement of damaged sewer lines to prevent backups.",
      image: "https://images.pexels.com/photos/6195089/pexels-photo-6195089.jpeg", // Sewer line repair image
      price: "₹3500",
    },
    {
      id: 8,
      name: "Water Pump Installation",
      description: "Installation of water pumps for homes and offices.",
      image: "https://images.pexels.com/photos/6195089/pexels-photo-6195089.jpeg", // Water pump installation image
      price: "₹3000",
    },
    {
      id: 9,
      name: "Gas Line Repair",
      description: "Repair and installation of gas lines for safety and efficiency.",
      image: "https://images.pexels.com/photos/6195089/pexels-photo-6195089.jpeg", // Gas line repair image
      price: "₹2800",
    },
    {
      id: 10,
      name: "Pipe Replacement",
      description: "Replace old or damaged pipes to ensure a reliable water supply.",
      image: "https://images.pexels.com/photos/6195089/pexels-photo-6195089.jpeg", // Pipe replacement image
      price: "₹1800",
    },
    {
      id: 11,
      name: "Water Tank Cleaning",
      description: "Cleaning and maintenance of water tanks for clean and safe water storage.",
      image: "https://images.pexels.com/photos/6195089/pexels-photo-6195089.jpeg", // Water tank cleaning image
      price: "₹1500",
    },
    {
      id: 12,
      name: "Emergency Plumbing",
      description: "24/7 emergency plumbing services for urgent repairs.",
      image: "https://images.pexels.com/photos/6195089/pexels-photo-6195089.jpeg", // Emergency plumbing image
      price: "₹3000",
    },
    {
      id: 13,
      name: "Fixture Installation",
      description: "Installation of plumbing fixtures like faucets, showers, and sinks.",
      image: "https://images.pexels.com/photos/6195089/pexels-photo-6195089.jpeg", // Fixture installation image
      price: "₹1000",
    },
    {
      id: 14,
      name: "Water Filtration System",
      description: "Installation of water filtration systems for clean drinking water.",
      image: "https://images.pexels.com/photos/6195089/pexels-photo-6195089.jpeg", // Water filtration system image
      price: "₹4000",
    },
    {
      id: 15,
      name: "Sump Pump Installation",
      description: "Installation of sump pumps to prevent basement flooding.",
      image: "https://images.pexels.com/photos/6195089/pexels-photo-6195089.jpeg", // Sump pump installation image
      price: "₹3500",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">Plumber Services</h1>
      <p className="text-gray-600 mb-8 text-center text-lg">
        Reliable plumbing services for your home, office, and more. From leak repairs to sewer line maintenance, we cover it all!
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

export default Plumber;