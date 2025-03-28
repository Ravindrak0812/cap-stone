import React from "react";
import Footer from "../../Components/Footer";

const Technician = () => {
  // Technician services data with proper image URLs
  const services = [
    {
      id: 1,
      name: "AC Repair",
      description: "Repair and maintenance of air conditioners for optimal cooling.",
      image: "https://images.pexels.com/photos/89775/air-conditioning-repair-air-conditioner-maintenance-89775.jpeg", // AC repair image
      price: "₹1200",
    },
    {
      id: 2,
      name: "Refrigerator Repair",
      description: "Fix issues with refrigerators to ensure proper cooling and functionality.",
      image: "https://images.pexels.com/photos/89775/air-conditioning-repair-air-conditioner-maintenance-89775.jpeg", // Refrigerator repair image
      price: "₹1000",
    },
    {
      id: 3,
      name: "Washing Machine Repair",
      description: "Repair and maintenance of washing machines for smooth operation.",
      image: "https://images.pexels.com/photos/89775/air-conditioning-repair-air-conditioner-maintenance-89775.jpeg", // Washing machine repair image
      price: "₹1500",
    },
    {
      id: 4,
      name: "Microwave Repair",
      description: "Fix issues with microwaves to ensure proper heating and functionality.",
      image: "https://images.pexels.com/photos/89775/air-conditioning-repair-air-conditioner-maintenance-89775.jpeg", // Microwave repair image
      price: "₹800",
    },
    {
      id: 5,
      name: "Television Repair",
      description: "Repair and maintenance of televisions for clear picture and sound.",
      image: "https://images.pexels.com/photos/89775/air-conditioning-repair-air-conditioner-maintenance-89775.jpeg", // Television repair image
      price: "₹2000",
    },
    {
      id: 6,
      name: "Laptop Repair",
      description: "Fix issues with laptops, including hardware and software problems.",
      image: "https://images.pexels.com/photos/89775/air-conditioning-repair-air-conditioner-maintenance-89775.jpeg", // Laptop repair image
      price: "₹2500",
    },
    {
      id: 7,
      name: "Printer Repair",
      description: "Repair and maintenance of printers for smooth printing.",
      image: "https://images.pexels.com/photos/89775/air-conditioning-repair-air-conditioner-maintenance-89775.jpeg", // Printer repair image
      price: "₹1000",
    },
    {
      id: 8,
      name: "Inverter Repair",
      description: "Fix issues with inverters to ensure uninterrupted power supply.",
      image: "https://images.pexels.com/photos/89775/air-conditioning-repair-air-conditioner-maintenance-89775.jpeg", // Inverter repair image
      price: "₹1800",
    },
    {
      id: 9,
      name: "Geyser Repair",
      description: "Repair and maintenance of geysers for proper heating.",
      image: "https://images.pexels.com/photos/89775/air-conditioning-repair-air-conditioner-maintenance-89775.jpeg", // Geyser repair image
      price: "₹1200",
    },
    {
      id: 10,
      name: "Chimney Repair",
      description: "Fix issues with chimneys to ensure proper ventilation.",
      image: "https://images.pexels.com/photos/89775/air-conditioning-repair-air-conditioner-maintenance-89775.jpeg", // Chimney repair image
      price: "₹1500",
    },
    {
      id: 11,
      name: "Water Purifier Repair",
      description: "Repair and maintenance of water purifiers for clean drinking water.",
      image: "https://images.pexels.com/photos/89775/air-conditioning-repair-air-conditioner-maintenance-89775.jpeg", // Water purifier repair image
      price: "₹1000",
    },
    {
      id: 12,
      name: "Home Theater Repair",
      description: "Repair and maintenance of home theater systems for immersive sound.",
      image: "https://images.pexels.com/photos/89775/air-conditioning-repair-air-conditioner-maintenance-89775.jpeg", // Home theater repair image
      price: "₹2200",
    },
    {
      id: 13,
      name: "Smartphone Repair",
      description: "Fix issues with smartphones, including screen and battery replacement.",
      image: "https://images.pexels.com/photos/89775/air-conditioning-repair-air-conditioner-maintenance-89775.jpeg", // Smartphone repair image
      price: "₹1500",
    },
    {
      id: 14,
      name: "Camera Repair",
      description: "Repair and maintenance of cameras for clear photography.",
      image: "https://images.pexels.com/photos/89775/air-conditioning-repair-air-conditioner-maintenance-89775.jpeg", // Camera repair image
      price: "₹1800",
    },
    {
      id: 15,
      name: "Electric Kettle Repair",
      description: "Fix issues with electric kettles for proper heating.",
      image: "https://images.pexels.com/photos/89775/air-conditioning-repair-air-conditioner-maintenance-89775.jpeg", // Electric kettle repair image
      price: "₹500",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">Technician Services</h1>
      <p className="text-gray-600 mb-8 text-center text-lg">
        We offer expert technical support for various appliances and systems at minimal rates.
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
      <section>
        <Footer/>
      </section>
    </div>
  );
};

export default Technician;