import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about/AboutUs";
import Services from "./pages/services/Services";
import Footer from "./components/Footer";
import ContactUs from "./pages/contact/ContactUs";

const App: React.FC = () => {
  return (
    <Router basename="/novas">
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<ContactUs />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
