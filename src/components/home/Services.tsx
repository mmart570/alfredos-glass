import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="flex flex-col items-stretch justify-center gap-6 px-2 sm:px-8 md:flex-row">
      <ServiceCard title="Windows" description="Windows of all styles." />
      <ServiceCard title="Screens" description="Screens of all styles." />
      <ServiceCard
        title="Shower Doors"
        description="Shower doors of all styles"
      />
    </div>
  );
};

export default Services;
