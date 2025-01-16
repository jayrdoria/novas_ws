import React from "react";
import ServiceCategories from "./ServiceCategories";
import DetailedFeatures from "./DetailedFeatures";
import Process from "./Process";
import IndustriesServed from "./IndustriesServed";
import CaseStudies from "./CaseStudies";
import PricingPlans from "./PricingPlans";
import CallToAction from "./CallToAction";

const Services: React.FC = () => {
  return (
    <div>
      {/* Page Content */}
      <ServiceCategories />
      <DetailedFeatures />
      <Process />
      <IndustriesServed />
      <CaseStudies />
      <PricingPlans />
      <CallToAction />
    </div>
  );
};

export default Services;
