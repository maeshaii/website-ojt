import React from "react";

import {
  FaProjectDiagram,
  FaSmile,
  FaBriefcase,
  FaArrowRight,
} from "react-icons/fa";

import "../Css/aboutus.css";

export default function AboutUs() {
  return (
    <section id="about" className="aboutus-section">

      {/* BACKGROUND GLOW */}
      <div className="about-glow about-glow-1"></div>
      <div className="about-glow about-glow-2"></div>

      <div className="aboutus-container">

        {/* LEFT SIDE */}
        <div className="aboutus-left">

          <div className="aboutus-badge">
            ABOUT OUR AGENCY
          </div>

          <h2 className="aboutus-title">
            Empowering Brands Through
            <span> Creative Digital Solutions</span>
          </h2>

          <p className="aboutus-description">
            At 411 Socials, we help businesses establish a powerful
            digital presence through strategic branding, content,
            and marketing solutions. Our mission is to transform
            ideas into impactful experiences that connect brands
            with their audiences.
          </p>

          {/* BUTTON */}
          <a href="#services" className="aboutus-button">
            Explore Services
            <FaArrowRight />
          </a>

        </div>

        {/* RIGHT SIDE */}
        <div className="aboutus-right">
          {/* FEATURES */}
          <div className="about-features">

            <div className="feature-card">
              <div className="feature-dot"></div>
              Creative Strategy & Branding
            </div>

            <div className="feature-card">
              <div className="feature-dot"></div>
              Social Media Growth
            </div>

            <div className="feature-card">
              <div className="feature-dot"></div>
              High-Converting Digital Campaigns
            </div>

          </div>
          {/* FEATURED CARD */}
          <div className="stat-card featured">

            <div className="stat-icon">
              <FaProjectDiagram />
            </div>


            <div>
              <h3>120+</h3>
              <p>Projects Completed</p>
            </div>

          </div>



          {/* GRID */}
          <div className="stats-grid">

            <div className="stat-card small">

              <div className="stat-icon">
                <FaSmile />
              </div>

              <h3>80+</h3>
              <p>Happy Clients</p>

            </div>

            <div className="stat-card small">

              <div className="stat-icon">
                <FaBriefcase />
              </div>

              <h3>15</h3>
              <p>Years Experience</p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}