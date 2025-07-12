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
    <div className="grid w-full grid-cols-1 items-center px-40 pt-6 md:grid-cols-2 md:py-20">
      <div className="col-span-2 relative w-full aspect-[6/3]">
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
        <div className="absolute inset-0 bg-black opacity-50 z-1 rounded-lg" />
        <div className="absolute inset-80 z-10 flex flex-wrap justify-center text-center text-2xl font-bold md:text-6xl">
          <p>{header}</p>
          <p className={`${textColor} font-bold`}>&nbsp;{service}&nbsp;</p>
          <p>?</p>
          <div className="w-full py-8 text-center text-xl font-semibold md:text-2xl">
            <p className="inline">{pText}</p>
          </div>
          <div className="mt-6">
            <Link
              href={link}
              className={`${linkColor} flex items-center justify-center rounded-lg px-4 py-2 text-xl font-semibold`}
            >
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
