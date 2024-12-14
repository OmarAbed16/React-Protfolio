import React from "react";

function Testimonials() {
  const feedbacks = [
    "1 (1).png",
    "1 (4).png",
    "1 (5).png",
    "1 (6).png",
    "1 (7).png",
    "1 (8).png",
  ];

  return (
    <div id="Testimonials" className="section testimonials">
      <h1 className="heading">Testimonials</h1>
      {feedbacks.map((feedback, index) => (
        <div key={index} className="feedbacks">
          <a
            href="https://www.upwork.com/freelancers/~01e4636252f1186adb"
            target="_blank"
          >
            <img src={`Feedbacks/${feedback}`} alt="Testimonials" />
          </a>
        </div>
      ))}
    </div>
  );
}

export default Testimonials;
