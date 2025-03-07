import React from "react";

const Carpenter = () => {
  // Carpenter services data with image URLs
  const services = [
    {
      id: 1,
      name: "Furniture Repair",
      description: "Expert repair and restoration of damaged furniture for small rooms or large spaces.",
      image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg", // Furniture repair image
      price: "₹800",
    },
    {
      id: 2,
      name: "Custom Woodwork",
      description: "Custom-made wooden furniture tailored to your needs, from small shelves to large haveli designs.",
      image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg", // Custom woodwork image
      price: "₹1500",
    },
    {
      id: 3,
      name: "Cabinet Installation",
      description: "Professional installation of cabinets and shelves for kitchens, living rooms, and more.",
      image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg", // Cabinet installation image
      price: "₹1200",
    },
    {
      id: 4,
      name: "Door Repair",
      description: "Repair and replacement of damaged doors, including small room doors and large haveli entrances.",
      image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg", // Door repair image
      price: "₹1000",
    },
    {
      id: 5,
      name: "Wooden Flooring",
      description: "Installation and repair of wooden flooring for small rooms or expansive haveli spaces.",
      image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg", // Wooden flooring image
      price: "₹2000",
    },
    {
      id: 6,
      name: "Deck Building",
      description: "Design and construction of wooden decks for small balconies or large outdoor haveli areas.",
      image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg", // Deck building image
      price: "₹2500",
    },
    {
      id: 7,
      name: "Staircase Construction",
      description: "Custom wooden staircases for small homes or grand havelis.",
      image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg", // Staircase construction image
      price: "₹3000",
    },
    {
      id: 8,
      name: "Window Frames",
      description: "Design and installation of wooden window frames for any size of property.",
      image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg", // Window frames image
      price: "₹1800",
    },
    {
      id: 9,
      name: "Wooden Partitions",
      description: "Custom wooden partitions for small rooms or large haveli spaces.",
      image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg", // Wooden partitions image
      price: "₹2200",
    },
    {
      id: 10,
      name: "Outdoor Gazebo",
      description: "Construction of wooden gazebos for gardens or large outdoor haveli spaces.",
      image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg", // Outdoor gazebo image
      price: "₹3500",
    },
    {
      id: 11,
      name: "Wooden Ceiling",
      description: "Installation of wooden ceilings for small rooms or large haveli halls.",
      image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg", // Wooden ceiling image
      price: "₹2800",
    },
    {
      id: 12,
      name: "Custom Wardrobes",
      description: "Design and installation of custom wooden wardrobes for any room size.",
      image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg", // Custom wardrobes image
      price: "₹2400",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">Carpenter Services</h1>
      <p className="text-gray-600 mb-8 text-center text-lg">
        From small rooms to grand havelis, we provide expert woodwork and furniture services tailored to your needs.
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

export default Carpenter;