import React from "react";
import { Link } from "react-router-dom";
import "./Css/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">

        <Link to="/" className="logo">
          <img src="/images/flogo.png" alt="Logo" />
        </Link>

        <ul className="nav-links">
        <li>
          <a href="/#home" className="nav-link">
            Home
          </a>
        </li>          
        <li>
          <a href="/#about" className="nav-link">
            About Us
          </a>
        </li>
          <li>
            <a href="/#services" className="nav-link">
              Our Services
            </a>
          </li>

          <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
        </ul>

      </div>
    </nav>
  );
}