import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-wrap">
      <div className="footer-wrap">
        <div className="footer-wrap-1">
          <div className="footer-section">
            <h1>
              Electronic{" "}
              <span style={{ color: "rgb(158, 172, 255)" }}>Store</span>
            </h1>
            <p>
              A personal ecommerce web project that demonstrates the selling of
              consumer electronic products. You can register for the system,
              manage your personal shopping cart and enjoy a responsive and
              interactive design.
            </p>
          </div>
        </div>
        <div className="footer-wrap-2">
          <div className="line"></div>
          <div className="social-link">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={require("./images/fb.png")} alt="Facebook" />
            </a>
            <a
              href="https://github.com/MielKadosh"
              target="_blank"
              rel="noreferrer"
            >
              <img src={require("./images/github.png")} alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/miel-kadosh-2a4a8b254/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={require("./images/linkedin.png")} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="first-box">
          <Link to="/terms-and-conditions">Terms & Conditions</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
        <div className="last-box">
          <span>Copyright &copy; 2023. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
