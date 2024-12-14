import React from "react";

function Services() {
  const services = [
    {
      icon: "fa-code",
      title: "Web Development",
      description: "Custom websites and applications tailored to your needs.",
    },
    {
      icon: "fa-wordpress",
      title: "WordPress Development",
      description:
        "Custom responsive websites using WordPress, Thrive, and Elementor.",
    },
    {
      icon: "fa-cogs",
      title: "Automation (Extensions)",
      description:
        "Creating automated solutions and browser extensions to enhance productivity.",
    },
    {
      icon: "fa-paint-brush",
      title: "Graphic Design (Photoshop & After Effects)",
      description:
        "Professional graphic designs and motion graphics using Photoshop and After Effects.",
    },
    {
      icon: "fa-facebook",
      title: "Facebook Ads Management",
      description:
        "Effective Facebook ad campaigns to boost visibility and sales.",
    },
    {
      icon: "fa-cube",
      title: "3D Design (Blender)",
      description:
        "Stunning 3D models and animations for various applications.",
    },
  ];

  return (
    <div id="Services" className="section services">
      <h1 className="heading">Services</h1>
      {services.map((service, index) => (
        <div key={index} className="service">
          <div className="service-icon">
            <i className={`fa ${service.icon}`}></i>
          </div>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Services;
