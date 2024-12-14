import React from "react";

function Skills() {
  return (
    <div id="Skills" className="section Skills">
      <h1 className="heading">Skills</h1>
      <div className="skill">
        <div className="skill-icon">
          <i className="fa fa-code"></i>
        </div>
        <h2>Web Development</h2>
        <h3 style={{ color: "orange" }}>Frontend</h3>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>jQuery</li>
        </ul>

        <h3 style={{ color: "orange" }}>Backend</h3>
        <ul>
          <li>Laravel</li>
          <li>PHP</li>
          <li>AJAX</li>
        </ul>

        <h3 style={{ color: "orange" }}>MySQL</h3>
        <ul>
          <li>MySQL</li>
        </ul>

        <h3 style={{ color: "orange" }}>Other Libraries</h3>
        <ul>
          <li>Spline</li>
          <li>SweetAlert.js</li>
        </ul>
      </div>
      <div className="skill">
        <div className="skill-icon">
          <i className="fa fa-cubes"></i>
        </div>
        <h2>Graphic Designer</h2>
        <ul>
          <li>Adobe Photoshop</li>
          <li>Adobe After Effects</li>
          <li>Blender</li>
          <li>CapCut</li>
          <li>AI Tools</li>
        </ul>
      </div>
      <div className="skill">
        <div className="skill-icon">
          <i className="fa fa-facebook"></i>
        </div>
        <h2>Facebook Ads</h2>
        <ul>
          <li>Audience Targeting</li>
          <li>Ad Creation</li>
          <li>Performance Analytics</li>
          <li>Budget Management</li>
          <li>Retargeting Strategies</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
