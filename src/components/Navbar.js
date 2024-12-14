import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav>
        <a href="#hero" id="nav-logo">
          <img id="logo" src="Media/logo.png" alt="logo" />
        </a>
        <div className="nav-sections">
          <a href="#hero">About me</a>
          <a href="#Services">Services</a>
          <a href="#Projects">Projects</a>
          <a href="#Testimonials">Testimonials</a>
          <a href="#Highlights">Highlight</a>
          <a href="#contactMe">Contact Me</a>
        </div>

        <div
          id="nav-dropdown"
          onClick={toggleDropdown}
          role="button"
          aria-label="Toggle menu"
        >
          <div className="nav-sections">
            <a href="#hero">About me</a>
            <a href="#Services">Services</a>
            <a href="#Projects">Projects</a>
            <a href="#Testimonials">Testimonials</a>
            <a href="#Highlights">Highlight</a>
            <a href="#contactMe">Contact Me</a>
          </div>
          <span className="hamburger">&#9776;</span>
        </div>

        {isOpen && (
          <div className="dropdown-menu">
            <a href="#hero">About me</a>
            <a href="#Services">Services</a>
            <a href="#Projects">Projects</a>
            <a href="#Testimonials">Testimonials</a>
            <a href="#Highlights">Highlight</a>
            <a href="#contactMe">Contact Me</a>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
