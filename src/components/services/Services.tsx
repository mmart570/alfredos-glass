import React from "react";
import WhatWeOffer from "@/components/services/WhatWeOffer";
import whatweoffer from "@/data/whatweoffer";

const Services = () => {
  return (
    <div className="flex justify-center flex-col text-white">
      <h1 className="uppercase text-center text-6xl text-[#172E73] font-semibold mt-22">
        Services
      </h1>
      <p className="uppercase text-center text-5xl text-[#172E73] font-semibold mt-22">
        What We Offer
      </p>
      {whatweoffer.map(
        (
          { header, service, pText, textColor, linkColor, image, link },
          index,
        ) => (
          <WhatWeOffer
            key={index}
            header={header}
            service={service}
            pText={pText}
            textColor={textColor}
            linkColor={linkColor}
            image={image}
            link={link}
          />
        ),
      )}
    </div>
  );
};

export default Services;
