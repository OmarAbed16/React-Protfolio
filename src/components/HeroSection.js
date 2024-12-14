// HeroSection.js
import React from "react";
import useIframe from "./useIframe";

const HeroSection = () => {
  const { createIframe } = useIframe(
    "https://my.spline.design/colorfulsmokemousefolloweffectcopy-b5dee91fa2d45d52a6c70bb0a62198c8/"
  );

  return (
    <>
      <div id="hero" className="section hero-section">
        <div className="HeroContent">
          <h1>
            Hi! I'm <span className="main-name">Omar</span>,
          </h1>
          <h2>
            A <span className="specializing">Web Developer</span>
          </h2>
          <p className="heroline">
            Welcome to My Portfolio! I’m a Full Stack Web Developer skilled in
            WordPress Elementor, Thrive, UI/UX design, Photoshop, After Effects
            and Blender. Let’s create unique brand identities together!
          </p>
          <div
            className="buttonGroup"
            style={{ zIndex: "5", position: "relative" }}
          >
            <a
              href="https://www.upwork.com/freelancers/~01e4636252f1186adb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Hire Me</button>
            </a>
            <a href="#contactMe">
              <button>Contact Me</button>
            </a>
          </div>
        </div>
        <div className="SideImg">
          <div className="top-right-corner">
            <hr className="hr1" />
            <hr className="hr2" />
          </div>
          <img src="Media/Omar.png" alt="Omar's Portrait" />
          <div className="bottom-left-corner">
            <hr className="hr1" />
            <hr className="hr2" />
          </div>
        </div>
        {createIframe()}
      </div>
    </>
  );
};

export default HeroSection;
