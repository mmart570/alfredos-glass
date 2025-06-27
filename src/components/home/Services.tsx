import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="flex flex-col items-stretch justify-center gap-6 px-2 sm:px-8 md:flex-row">
      <ServiceCard
        title="Windows"
        description="Windows of all styles."
        index={1}
      />
      <ServiceCard
        title="Screens"
        description="Screens of all styles."
        index={2}
      />
      <ServiceCard
        title="Shower Doors"
        description="Shower doors of all styles."
        index={3}
      />
      <ServiceCard
        title="Commercial Doors & Locks"
        description="Commercial Doors & Locks of all styles."
        index={4}
      />
    </div>
  );
};

export default Services;
