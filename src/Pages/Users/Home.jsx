import React from 'react';
import Navbar from '../../Components/Navbar';
import About from './About';
import Contact from './Contact'; // Import Contact component

const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Contact /> {/* Add Contact section inside Home */}
    </div>
  );
};

export default Home;
