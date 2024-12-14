import React from "react";

function ContactMe() {
  return (
    <footer>
      <div id="contactMe" className="section contactMe">
        <h1 className="heading">Contact Me</h1>
        <div className="contactinfo">
          <i className="fa fa-phone"></i>
          <h3>Mobile No</h3>
          <p>0781616916</p>
        </div>
        <div className="contactinfo">
          <i className="fa fa-map-marker"></i>
          <h3>Location</h3>
          <p>Jordan-Amman</p>
        </div>
        <div className="contactinfo">
          <i className="fa fa-envelope"></i>
          <h3>Email</h3>
          <p>OmarFathiAbed@gmail.com</p>
        </div>
        <div className="contactinfo">
          <i className="fa fa-globe"></i>
          <h3>Website</h3>
          <p>https://github.com/OmarAbed16</p>
        </div>
        <form>
          <h2>
            Send Me A Message
            <div className="SocialLinks">
              <a
                href="https://github.com/OmarAbed16"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/omarabed-/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01e4636252f1186adb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-briefcase"></i>
              </a>
            </div>
          </h2>
          <input
            type="text"
            placeholder="Name"
            minLength="3"
            maxLength="15"
            required
          />
          <input type="email" placeholder="Email" required />
          <textarea
            rows="10"
            placeholder="Type your Message Here..."
            maxLength="500"
            required
          ></textarea>
          <button className="primary">Send</button>
        </form>
      </div>
    </footer>
  );
}

export default ContactMe;
