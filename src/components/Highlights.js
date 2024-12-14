import React from "react";

function Highlights() {
  const highlights = [
    {
      icon: "fa-trophy",
      title: "100% Job Success Freelancer on Upwork",
      description:
        "Achieved a 100% job success rate, delivering high-quality results for clients.",
    },
    {
      icon: "fa-eye",
      title: "Professional Logo Design for a TV Presenter",
      description:
        "Designed a logo for an Iraqi TV presenter with 361,000 Facebook followers and a YouTube channel with 73.3K subscribers.",
    },
    {
      icon: "fa-graduation-cap",
      title: "Orange Coding Academy Bootcamp",
      description:
        "Currently part of the 5th cohort, enhancing my skills in web development and design through intensive training and hands-on projects.",
    },
  ];

  return (
    <div id="Highlights" className="section Highlights">
      <h1 className="heading">Highlights</h1>
      {highlights.map((highlight, index) => (
        <div key={index} className="light">
          <div className="light-icon">
            <i className={`fa ${highlight.icon}`}></i>
          </div>
          <h2>{highlight.title}</h2>
          <p>{highlight.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Highlights;
