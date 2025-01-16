import React from "react";
import MissionVision from "./MissionVision";
import CoreValues from "./CoreValues";
import CompanyTimeline from "./CompanyTimeline";
import TeamSection from "./TeamSection";
import ClientSuccessStories from "./ClientSuccessStories";
import CallToAction from "./CallToAction";

const AboutUsPage: React.FC = () => {
  return (
    <div>
      {/* Page Content */}
      <MissionVision />
      <CoreValues />
      <CompanyTimeline />
      <TeamSection />
      <ClientSuccessStories />
      <CallToAction />
    </div>
  );
};

export default AboutUsPage;
