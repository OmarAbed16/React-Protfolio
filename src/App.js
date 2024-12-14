import React from "react";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import ImageSequance from "./components/imageSequance";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Highlights from "./components/Highlights";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <Router>
      <ImageSequance />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/services" element={<Services />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/highlights" element={<Highlights />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
