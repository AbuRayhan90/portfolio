import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./Pages/FrontPage";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Service from "./Pages/Service";
import Testimonials from "./Pages/Testimonials";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/service" element={<Service />} />
        <Route path="/testimonial" element={<Testimonials />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
