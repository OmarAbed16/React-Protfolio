import React from "react";

function Projects() {
  const projects = [
    {
      icon: "fa-code",
      title: "Buildez: Advanced CSS Editor",
      description:
        "A full-stack editor enabling users to create shapes and CSS art with features like curves drawing and customizable animations.",
      link: "https://buildez.free.nf/",
    },
    {
      icon: "fa-users",
      title: "Tabadol: Collaborative Platform for YouTubers",
      description:
        "A platform to help new YouTubers meet requirements, featuring community engagement and social sharing tools.",
      link: "https://tabadol.free.nf/",
    },
    {
      icon: "fa-download",
      title: "Tik-Saver: TikTok Data Downloader",
      description:
        "A dual-part solution with a browser extension and Python script for efficient TikTok data downloading.",
      link: "https://www.youtube.com/watch?v=CsmdHHq5CZk&ab_channel=MrHow",
    },
  ];

  return (
    <div id="Projects" className="section Projects">
      <h1 className="heading">Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="Project">
          <div className="Project-icon">
            <i className={`fa ${project.icon}`}></i>
          </div>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a href={project.link} target="_blank">
            <button className="primary">Visit</button>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
