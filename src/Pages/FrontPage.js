import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Service from './Service';
import Skills from './Skills';
import Testimonials from './Testimonials';
import Home from './Home';
import Contact from './Contact';

const FrontPage = () => {
  return (
    <>
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Service />
      <Testimonials />
      <Contact />
    </>
  );
};

export default FrontPage;
