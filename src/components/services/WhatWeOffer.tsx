import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ServiceProps {
  header: string;
  service: string;
  acm: string;
  pText: string;
  textColor: string;
  linkColor: string;
  link: string;
}

const WhatWeOffer = ({
  header,
  service,
  acm,
  pText,
  textColor,
  linkColor,
  link,
}: ServiceProps) => {
  return (
    <div className="grid w-9/12 grid-cols-1 items-center px-4 pt-6 md:grid-cols-3 md:py-12">
      <div className="col-span-2">
        <div className="flex flex-wrap justify-center text-center text-2xl font-bold md:justify-start md:text-left md:text-4xl">
          <p>{header}</p>
          <p className={`${textColor} font-bold`}>&nbsp;{service}&nbsp;</p>
          <p>?</p>
        </div>
        <div className="w-full py-8 text-center text-xl font-semibold md:w-4/5 md:text-left md:text-2xl">
          <p className="inline">Join</p>
          <p className="inline font-bold">&nbsp;{acm}&nbsp;</p>
          <p className="inline">{pText}</p>
        </div>
        <div>
          <Link
            href={link}
            className={`${linkColor} flex items-center justify-center rounded-lg px-4 py-2 text-xl font-semibold text-acm-gray-500`}
          >
            Learn More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
