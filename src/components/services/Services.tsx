import React from "react";
import WhatWeOffer from "@/components/services/WhatWeOffer";
import whatweoffer from "@/data/whatweoffer";

// what we offer layout derived from ACM Atlas
// https://github.com/acm-ucr/acm-atlas
const Services = () => {
  return (
    <div className="flex justify-center flex-col text-white">
      <h1 className="uppercase text-center text-6xl md:text-8xl text-[#172E73] font-semibold mt-22">
        Services
      </h1>
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
