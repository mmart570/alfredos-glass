"use client";

import CircularText from "@/components/home/CircularText"; // TURD: delete if unused
import Image from "next/image";

const Hero = () => {
  return (
    <div className="font-serif flex w-full flex-col items-center justify-center">
      <div className="relative h-250 w-full">
        <Image
          src="/papa.jpg"
          alt="Papa"
          width="300"
          height="300"
          className="absolute h-full w-full object-cover opacity-80 z-0"
          priority
        />
        <div className="bg-blue-200 absolute inset-0 opacity-80 z-0" />
        <div className="relative z-10  h-full flex flex-col items-center justify-center text-center pt-20">
          <h1 className="text-4xl md:text-6xl text-red-700">
            Commercial and Residential <br /> Glass Repair
          </h1>
          <p className="mt-8 mb-20 text-xl text-pretty">
            Providing quality service across the Inland Empire at an affordable
            price!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
