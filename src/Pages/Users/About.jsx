import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FiCheckCircle, FiDollarSign } from "react-icons/fi";  // From Feather Icons
import { BiLeaf } from "react-icons/bi";

const anjuImg = new URL("/src/assets/images/anju.jpg", import.meta.url).href;
const nehaImg = new URL("/src/assets/images/neha.jpg", import.meta.url).href;
const adityaImg = new URL("/src/assets/images/aditya.jpg", import.meta.url).href;
const riyaImg = new URL("/src/assets/images/riya.jpg", import.meta.url).href;
const priyaImg = new URL("/src/assets/images/priya.jpg", import.meta.url).href;

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-6">
      {/* Animated Heading Section */}
      <motion.h1
        className="text-5xl font-bold text-gray-900 mb-8 text-center font-poppins"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        About <span className="text-blue-600">FixBase</span>
      </motion.h1>

      {/* Introduction Section */}
     {/* Enhanced Introduction Section with Visual Appeal */}
<motion.div
  className="relative py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-white"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.5 }}
>
  {/* Decorative Background Elements */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-24 h-24 bg-blue-100 rounded-full opacity-20 blur-2xl animate-float"></div>
    <div className="w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-2xl animate-float-delay"></div>
  </div>

  {/* Content */}
  <motion.p
    className="text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto text-center leading-relaxed font-inter tracking-wide px-6 sm:px-0 relative z-10"
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5, delay: 0.5 }}
  >
    <span className="font-bold text-gray-900 text-3xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
      Welcome to FixBase
    </span>
    , your{" "}
    <span className="font-semibold text-blue-600 underline decoration-wavy decoration-blue-300">
      go-to solution
    </span>{" "}
    for premium home services in{" "}
    <span className="text-blue-600 font-semibold">Jalandhar</span>.
    <br />
    <br />
    We specialize in{" "}
    <span className="font-semibold text-gray-900">expert repairs</span>,{" "}
    <span className="font-semibold text-gray-900">deep cleaning</span>, and{" "}
    <span className="font-semibold text-gray-900">top-tier maintenance</span>—
    delivering unmatched quality{" "}
    <span className="font-semibold text-blue-600">right at your doorstep</span>.
    <br />
    <br />
    With a{" "}
    <span className="font-semibold text-gray-900">team of 100+ skilled professionals</span>, we guarantee{" "}
    <span className="font-semibold text-gray-900">reliability</span>,{" "}
    <span className="font-semibold text-gray-900">efficiency</span>, and{" "}
    <span className="font-semibold text-gray-900">excellence</span> in every service we provide.{" "}
    <span className="font-semibold text-blue-600">Your comfort, our priority.</span>
  </motion.p>

  {/* Call-to-Action Button */}
  <motion.div
    className="mt-8 flex justify-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 1 }}
  >
    <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
      Book Now
    </button>
  </motion.div>
</motion.div>



     {/* Feature Cards Section */}
<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
  {[
    { 
      title: "Verified Professionals", 
      text: "Our team consists of certified, trained experts providing exceptional service.", 
      icon: <FiCheckCircle className="text-blue-600 text-5xl mb-4" /> 
    },
    { 
      title: "Eco-Friendly Solutions", 
      text: "We prioritize 100% eco-friendly products and advanced technologies.", 
      icon: <BiLeaf className="text-green-500 text-5xl mb-4" />  // ✅ Use BiLeaf
    },
    { 
      title: "Affordable Pricing", 
      text: "Transparent and competitive pricing with no hidden charges.", 
      icon: <FiDollarSign className="text-yellow-500 text-5xl mb-4" /> 
    },
  ].map((feature, index) => (
    <motion.div
      key={index}
      className="bg-white border border-gray-200 p-8 rounded-xl text-center shadow-md hover:shadow-2xl hover:bg-blue-50 transition-all"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 * index }}
    >
      {feature.icon}
      <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">{feature.title}</h3>
      <p className="text-gray-600 font-inter">{feature.text}</p>
    </motion.div>
  ))}
</div>

      {/* Testimonials Carousel */}
      <motion.div
        className="mt-20 max-w-4xl w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">What Our Customers Say</h2>
        <Carousel 
          showThumbs={false} 
          autoPlay 
          infiniteLoop 
          interval={3000} 
          showArrows 
          renderArrowPrev={(onClickHandler, hasPrev) => (
            hasPrev && (
              <button 
                onClick={onClickHandler} 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700"
              >
                ❮
              </button>
            )
          )}
          renderArrowNext={(onClickHandler, hasNext) => (
            hasNext && (
              <button 
                onClick={onClickHandler} 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700"
              >
                ❯
              </button>
            )
          )}
        >
          {[
            { name: "Anju Sharma", feedback: "FixBase exceeded my expectations! Their service was incredibly fast, efficient, and highly professional. The staff was friendly, and they ensured that every detail was perfect. I will definitely use their services again and highly recommend FixBase to anyone looking for reliable home solutions.", img: anjuImg },
            { name: "Neha", feedback: "I love their eco-friendly approach. Highly recommended!", img: nehaImg },
            { name: "Aditya Pathaniya", feedback: "Affordable, reliable, and top-quality service!", img: adityaImg },
            { name: "Riya Mehta", feedback: "Super smooth booking process. Definitely using FixBase again!", img: riyaImg },
            { name: "Priya Kapoor", feedback: "Professional team and great service quality!", img: priyaImg },
          ].map((review, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-md text-center">
              <div className="flex justify-center">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-40 h-220 object-cover rounded-full border-2 border-gray-300 shadow-md"
                />
              </div>
              <p className="text-gray-700 italic mt-4">“{review.feedback}”</p>
              <h4 className="text-lg font-bold mt-2 text-gray-900">- {review.name}</h4>
            </div>
          ))}
        </Carousel>

        <div className="flex justify-center mt-6">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            View More Reviews
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
