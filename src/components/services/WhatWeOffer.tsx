import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ServiceProps {
  header: string;
  service: string;
  pText: string;
  textColor: string;
  linkColor: string;
  image?: StaticImageData | string;
  link: string;
}

const WhatWeOffer = ({
  header,
  service,
  pText,
  textColor,
  linkColor,
  image,
  link,
}: ServiceProps) => {
  return (
    <div className="grid w-full grid-cols-1 items-center px-4 md:px-10 lg:px-40 pt-6 md:grid-cols-2 md:py-20">
      <div className="col-span-2 relative w-full aspect-[3/4] md:aspect-[6/3] h-auto">
        {image ? (
          <Image
            src={image}
            alt="program"
            fill
            className="object-cover z-0 rounded-lg shadow-2xl"
          />
        ) : (
          <div className="bg-gray-300 pt-50 pb-50" />
        )}
        <div className="absolute inset-0 bg-black opacity-50 z-0 rounded-lg" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4 md:px-10 lg:px-20 space-y-4 font-bold">
          <p className="text-3xl md:text-6xl">
            {header}
            <span className={`${textColor}`}> {service} ?</span>
          </p>
          <p className="mt-4 text-xl md:text-3xl">{pText}</p>
          <div>
            <Link
              href={link}
              className="{linkColor} flex items-center gap-4 rounded-full font-semibold z-10 mt-10 bg-[#F0E85C] px-10 py-5 text-xl md:text-4xl text-[#253767]"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
