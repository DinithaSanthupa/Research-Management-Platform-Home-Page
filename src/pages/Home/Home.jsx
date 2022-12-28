import React from 'react';

import Showcase from './Components/Showcase/Showcase';
import About from './Components/About/About';
import Resercheer from './Components/Researcher/Researcher';
import Company from './Components/Company/Company';
import Footer from './Components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Showcase />
      <About />
      <Resercheer />
      <Company />
      <Footer />
    </div>
  );
};

export default Home;
