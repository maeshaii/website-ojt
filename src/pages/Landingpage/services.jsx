import React from "react";
import { Link } from "react-router-dom";
import "../Css/services.css";

import { servicesData } from "../../data/services";

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <h2>Our Services</h2>
        <p className="subtitle">
          Solutions That Fit Every Stage of Your Journey
        </p>
        <p className="description">
          Whether you're just starting out or scaling upa, we've got your back.
        </p>
      </div>

<div className="services-grid">
  {servicesData.map((service, index) => (
    
    <Link
      key={service.id}
      to={`/services/${service.slug}`}
      className="service-link"
    >

      <div
        className={`service-card ${
          index % 2 === 0 ? "image-left" : "image-right"
        }`}
      >
        <div className="service-image">
          {service.image ? (
            <img src={service.image} alt={service.title} />
          ) : (
            <div className="placeholder-image" />
          )}
        </div>

        <div className="service-info">

          <div className="service-icon">
            {service.icon}
          </div>

          <h3>
            <span className="service-number">
              {index + 1 < 10
                ? `0${index + 1}`
                : index + 1}
            </span>{" "}
            {service.title}
          </h3>

          <p>{service.description}</p>

          <span className="view-all">
            View All →
          </span>

        </div>
      </div>

    </Link>
  ))}
</div>
    </section>
  );
}