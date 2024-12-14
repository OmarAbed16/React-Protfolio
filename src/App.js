import React from "react";
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
    <>
      <ImageSequance />
      <Navbar />
      <main>
        <HeroSection />
        <Services />
        <Skills />
        <Testimonials />
        <Highlights />
        <Projects />
      </main>
      <ContactMe />
    </>
  );
}

export default App;
