import React from "react";
import "../Css/hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero-section">

      <div className="hero-content">

        {/* SMALL LABEL */}
        <div className="hero-tag">
          Creative Digital Agency
        </div>

        {/* TITLE */}
        <h1 className="hero-title">
          Build.
          <br />
          <span>Grow.</span>
          <br />
          Stand Out.
        </h1>

        {/* SUBTITLE */}
        <p className="hero-subtitle">
          From strategy to execution, 411 Socials helps brands
          create impactful digital experiences that connect,
          inspire, and convert audiences online.
        </p>

        {/* BUTTONS */}
        <div className="hero-actions">

          <a href="#services" className="hero-button">
            View Our Services
          </a>

          <a href="#about" className="hero-secondary-btn">
            Learn More
          </a>

        </div>
      </div>


    </section>
  );
}