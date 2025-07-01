import React from "react";
import Services from "./Services";

const OurServices = () => {
  return (
    <div className="flex flex-col items-center justify-center py-36 text-center text-[#172E73]">
      <h1 className="text-center text-4xl font-bold py-15 md:text-6xl">
        OUR SERVICES
      </h1>
      <Services />
    </div>
  );
};

export default OurServices;
