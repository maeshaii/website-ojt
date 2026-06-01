// ServiceDetails.jsx

import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { servicesData } from "../data/services";

import "../components/Css/serviceDetails.css";

export default function ServiceDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = servicesData.find(
    (item) => item.slug === slug
  );

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    navigate("/");

    setTimeout(() => {
      const section =
        document.getElementById("services");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  const handleSubServiceClick = (sub) => {
    navigate(`/services-card/${service.slug}`, {
      state: {
        serviceTitle: service.title,
        serviceSlug: service.slug,
        subService: {
          title: sub.title,
          desc: sub.desc,
          price: sub.price,
          reviews: sub.reviews,
          image: sub.image,
        },
      },
    });
  };

  if (!service) {
    return (
      <div className="notFound">
        <h1>Service not found</h1>

        <button
          onClick={handleBack}
          className="backButton"
        >
          ← Go back
        </button>
      </div>
    );
  }

  return (
    <div className="servicePage">
      {/* HERO */}
      <div className="heroSection">
        <button
          onClick={handleBack}
          className="backButton"
        >
          ← Back to Services
        </button>

        <div className="heroContent">
          <div className="leftContent">
            <h1 className="title">
              {service.title}
            </h1>

            <p className="description">
              {service.description}
            </p>

            <div className="stats">
              {service.stats?.map((stat, index) => (
                <div
                  key={index}
                  className="statItem"
                >
                  <stat.icon size={20} />
                  <span>{stat.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rightContent">
            <img
              src={service.image}
              alt={service.title}
              className="heroImage"
            />
          </div>
        </div>
      </div>

      {/* SUB SERVICES */}
      <div className="servicesSection">
        <p className="smallTitle">
          SUB SERVICES
        </p>

        <h2 className="sectionTitle">
          What We Offer
        </h2>

        <div className="grid">
          {service.subServices?.map(
            (sub, index) => (
              <div
                key={index}
                className="card"
                onClick={() =>
                  handleSubServiceClick(sub)
                }
              >
                <div className="iconWrapper">
                  <sub.icon size={26} />
                </div>

                <h3>{sub.title}</h3>

                <p>{sub.desc}</p>

                <div className="arrow">
                  <ArrowRight size={20} />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}