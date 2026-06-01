// ServiceDetailsCardPage.jsx

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { servicesData } from "../data/services";

import ServiceDetailsCard from "./ServiceDetailsCard";

export default function ServiceDetailsCardPage() {
  const { slug } = useParams();

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const service = servicesData.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return <h1>Service not found</h1>;
  }

  return (
    <ServiceDetailsCard
      service={service}
    />
  );
}