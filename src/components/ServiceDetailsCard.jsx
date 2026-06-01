// ServiceDetailsCard.jsx

import React, { useEffect, useState } from "react";
import {
  Star,
  ShieldCheck,
  BadgeCheck,
  Sparkles,
  ArrowLeft,
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";

import "../components/Css/ServiceDetailsCard.css";

export default function ServiceDetailsCard() {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ FULL DATA FROM CLICK
  const {
    serviceTitle,
    serviceSlug,
    subService,
  } = location.state || {};

  const [hoveredStar, setHoveredStar] = useState(0);
  const [selectedStar, setSelectedStar] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const rating = subService?.reviews?.rating || 0;
  const reviewCount = subService?.reviews?.count || 0;

  return (
    <div className="serviceDetailsWrapper">
      <div className="serviceDetailsCard">

        {/* LEFT SIDE */}
        <div className="leftSection">

         {/* MAIN IMAGE */}
          <div className="mainImage">
            {subService?.image ? (
              <img
                src={subService.image}
                alt={subService.title}
                className="serviceMainImage"
              />
            ) : (
              <div className="fallbackImage">
                <Sparkles size={18} />
                Sub Service Preview
              </div>
            )}
          </div>

           <div className="thumbnailRow">
          <div className="thumbnailCard activeThumb">
            {subService?.image ? (
              <img
                src={subService.image}
                alt={subService.title}
                className="thumbImage"
              />
            ) : (
              <div className="thumbPlaceholder">
                No Image Available
              </div>
            )}
          </div>
        </div>


        </div>

        {/* RIGHT SIDE */}
        <div className="rightSection">

          {/* BACK BUTTON */}
          <button
            className="backButton"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={18} />
            Back
          </button>

       
          {/* TITLE */}
          <div className="titleRow">
            <h1 className="title">
              {subService?.title}
            </h1>

            <div className="verifiedBadge">
              <BadgeCheck size={18} />
              Verified
            </div>
          </div>

          {/* RATING */}
          <div className="rating">
            <div className="starsWrap">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  fill={
                    i < rating ? "#facc15" : "none"
                  }
                  color="#facc15"
                />
              ))}
            </div>

            <span>
              {rating.toFixed(1)} • {reviewCount} reviews
            </span>
          </div>

          {/* PRICE */}
          <div className="priceCard">
            <div>
              <p className="startingText">
                Starting Price
              </p>

              <h2 className="price">
                {subService?.price || "Custom Quote"}
              </h2>
            </div>

            <div className="secureTag">
              <ShieldCheck size={18} />
              Secure Booking
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="description">
            {subService?.desc}
          </p>

          {/* FEATURES */}
          <div className="featureList">
            <div className="featureItem">✔ Professional Team</div>
            <div className="featureItem">✔ Fast Response</div>
            <div className="featureItem">✔ 24/7 Support</div>
            <div className="featureItem">✔ Quality Guaranteed</div>
          </div>

          {/* BUTTONS */}
          <div className="buttonRow">
            <button className="ctaButton">
              CONTACT AGENT
            </button>

            <button className="secondaryBtn">
              Get Quote
            </button>
          </div>

          {/* PAYMENTS */}
          <div className="payments">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>Apple Pay</span>
          </div>

        </div>
      </div>

      {/* REVIEW SECTION */}
      <div className="reviewSection">
        <h3>Share Your Experience</h3>

        <p className="reviewSubtitle">
          Your feedback helps others make better decisions.
        </p>

        <div className="inputRow">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
        </div>

        <div className="ratingInput">
          <p>Your Rating</p>

          <div className="stars">
            {[...Array(5)].map((_, i) => {
              const ratingValue = i + 1;

              return (
                <Star
                  key={i}
                  size={24}
                  className="interactiveStar"
                  fill={
                    ratingValue <=
                    (hoveredStar || selectedStar)
                      ? "#facc15"
                      : "none"
                  }
                  color="#facc15"
                  onMouseEnter={() =>
                    setHoveredStar(ratingValue)
                  }
                  onMouseLeave={() =>
                    setHoveredStar(0)
                  }
                  onClick={() =>
                    setSelectedStar(ratingValue)
                  }
                />
              );
            })}
          </div>
        </div>

        <textarea placeholder="Tell us what you liked about this service..." />

        <button className="submitBtn">
          Submit Feedback
        </button>
      </div>
    </div>
  );
}