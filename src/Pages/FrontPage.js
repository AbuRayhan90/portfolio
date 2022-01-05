import React from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Service from "./Service";
import Skills from "./Skills";
import Testimonials from "./Testimonials";
import Home from "./Home";
import Contact from "./Contact";

const FrontPage = () => {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Service />
      <Testimonials />
      <Portfolio />
      <Contact />
    </>
  );
};

export default FrontPage;
