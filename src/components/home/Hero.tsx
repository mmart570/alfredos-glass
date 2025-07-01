"use client";

import CircularText from "@/components/home/CircularText"; // TURD: delete if unused
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="relative h-300 w-full">
        <Image
          src="/papa.jpg"
          alt="Papa"
          width="300"
          height="300"
          className="absolute h-full w-full object-cover opacity-80 z-0"
          priority
        />
        <div className="bg-blue-200 absolute inset-0 opacity-80 z-0" />
        <div className="relative z-10 h-200 flex flex-col items-center justify-center text-center pt-20">
          <h1 className="text-4xl md:text-6xl uppercase font-semibold text-[#BF1736]">
            Commercial and Residential <br /> Glass Repair
          </h1>
          <p className="mt-8 mb-20 text-[#253767] text-xl font-semibold text-pretty">
            Providing quality glass services across the Inland Empire at an
            affordable price!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
