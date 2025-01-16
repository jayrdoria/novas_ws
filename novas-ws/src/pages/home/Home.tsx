import React from "react";
import Banner from "./Banner";
import WhyChoosePage from "./WhyChoosePage";
import OurProductsPage from "./OurProductsPage";
import OurMission from "./OurMission";
import CustomerReviewsPage from "./CustomerReviewsPage";
import AnimatedCounter from "./AnimatedCounter";
import FAQAccordion from "./FAQAccordion";
import CallToAction from "./CallToAction";

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <WhyChoosePage />
      <OurMission />
      <OurProductsPage />
      <AnimatedCounter />
      <CustomerReviewsPage />
      <FAQAccordion />
      <CallToAction />
    </div>
  );
};

export default Home;
