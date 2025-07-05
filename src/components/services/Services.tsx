import React from "react";
import WhatWeOffer from "@/components/services/WhatWeOffer";
import whatweoffer from "@/data/whatweoffer";

const Services = () => {
  return (
    <div className="flex justify-center flex-col text-[#172E73] ">
      <h1 className="uppercase text-center text-6xl font-semibold mt-22">
        Services
      </h1>
      <p className="uppercase text-center text-5xl font-semibold mt-22">
        What We Offer
      </p>
      {whatweoffer.map(
        (
          { header, service, acm, pText, textColor, linkColor, link },
          index,
        ) => (
          <WhatWeOffer
            key={index}
            header={header}
            service={service}
            acm={acm}
            pText={pText}
            textColor={textColor}
            linkColor={linkColor}
            link={link}
          />
        ),
      )}
    </div>
  );
};

export default Services;
