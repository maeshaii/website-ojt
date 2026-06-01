import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./Css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">

        {/* Branding */}
        <div className="footer-left">
          <h3 className="footer-logo">411 Socials</h3>
          <p className="footer-description">
            Creating versatile, high-quality digital solutions that drive real impact.
          </p>
        </div>

        {/* Links */}
        <div className="footer-nav">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Refund Policy</a>
        </div>

        {/* Social Icons */}
        <div className="footer-socials">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} 411 Socials. All rights reserved.
      </div>
    </footer>
  );
}