import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FrontPage from './Pages/FrontPage';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Service from './Pages/Service';
import Testimonials from './Pages/Testimonials';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import GridLoader from 'react-spinners/GridLoader';
import './App.css';
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <>
      {loading ? (
        <div className="bg-white w-full h-screen flex justify-items-center items-center justify-center">
          <GridLoader color="#FA0B13" loading={loading} size={15} />
        </div>
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/service" element={<Service />} />
            <Route path="/testimonial" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
