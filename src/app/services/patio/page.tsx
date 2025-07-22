import React from "react";
import Image from "next/image";

//TURD: space out each service mini card

const GlassReplacement = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center uppercase text-[#172E73] ">
      <h1 className="text-6xl font-semibold py-10">patio doors</h1>
      <Image
        src="/glass.jpg"
        alt="Papa"
        width="900"
        height="900"
        className="shadow-xl rounded-xl"
      />
      <div className="relative my-16 grid grid-cols-1 place-items-center gap-16 overflow-x-clip px-[10%] md:grid-cols-2">
        <Image
          src="/glass.jpg"
          alt="Papa"
          width="3000"
          height="300"
          className="z-20 order-2 rounded-3xl md:order-1"
        />
        <div className="z-10 order-1 flex flex-col justify-start text-center text-xl md:order-2 md:text-left md:text-3xl">
          <p className="pb-2 text-3xl font-bold md:text-5xl">
            retrofit patio doors
          </p>
        </div>

        <p className="z-10 order-3 text-center text-3xl font-bold md:text-right md:text-5xl">
          track cleaning and tune-ups
        </p>
        <Image
          src="/glass.jpg"
          alt="Papa"
          width="3000"
          height="300"
          className="z-10 order-4 rounded-3xl"
        />

        <Image
          src="/glass.jpg"
          alt="Papa"
          width="3000"
          height="300"
          className="z-20 order-6 rounded-3xl md:order-5"
        />
        <div className="z-10 order-5 flex flex-col justify-start text-center text-xl md:order-6 md:text-left md:text-3xl">
          <p className="pb-2 text-3xl font-bold md:text-5xl">
            broken insulated glass unit installation
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlassReplacement;
