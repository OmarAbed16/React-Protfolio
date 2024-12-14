import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav>
        <Link to="/" id="nav-logo">
          <img id="logo" src="Media/logo.png" alt="logo" />
        </Link>
        <div className="nav-sections">
          <Link to="/">About me</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/highlights">Highlights</Link>
          <Link to="/contact">Contact Me</Link>
        </div>

        <div
          id="nav-dropdown"
          onClick={toggleDropdown}
          role="button"
          aria-label="Toggle menu"
        >
          <span className="hamburger">&#9776;</span>
        </div>

        {isOpen && (
          <div className="dropdown-menu">
            <Link to="/" onClick={toggleDropdown}>
              About me
            </Link>
            <Link to="/services" onClick={toggleDropdown}>
              Services
            </Link>
            <Link to="/projects" onClick={toggleDropdown}>
              Projects
            </Link>
            <Link to="/testimonials" onClick={toggleDropdown}>
              Testimonials
            </Link>
            <Link to="/highlights" onClick={toggleDropdown}>
              Highlights
            </Link>
            <Link to="/contact" onClick={toggleDropdown}>
              Contact Me
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
