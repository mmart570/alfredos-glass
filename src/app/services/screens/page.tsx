import React from "react";
import Image from "next/image";

//TURD: space out each service mini card

const GlassReplacement = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center uppercase text-[#172E73] ">
      <h1 className="text-6xl font-semibold py-10">Screens</h1>
      <Image
        src="/screens.jpg"
        alt="Papa"
        width="900"
        height="900"
        className="shadow-xl rounded-xl"
      />
      <div className="relative my-16 grid grid-cols-1 place-items-center gap-16 overflow-x-clip px-[10%] md:grid-cols-2">
        <Image
          src="/re-screen.jpg"
          alt="Papa"
          width="3000"
          height="300"
          className="z-20 order-2 rounded-3xl md:order-1"
        />
        <div className="z-10 order-1 flex flex-col justify-start text-center text-xl md:order-2 md:text-left md:text-3xl">
          <p className="pb-2 text-3xl font-bold md:text-5xl">Rescreening</p>
        </div>

        <div className="z-10 order-3 text-center text-3xl font-bold md:text-right md:text-5xl">
          <p>New Screens</p>
          <p className="text-xl">
            Made in-shop. White, Aluminum, and Bronze frame colors offered.
          </p>
        </div>

        <Image
          src="/screens2.jpg"
          alt="Papa"
          width="3000"
          height="300"
          className="z-10 order-4 rounded-3xl"
        />

        <p className="z-10 order-5 md:order-6 text-center text-3xl font-bold md:text-right md:text-5xl">
          Screen Patio Doors
        </p>
        <Image
          src="/spatiodoor.jpg"
          alt="Papa"
          width="3000"
          height="300"
          className="z-10 order-6 md:order-5 rounded-3xl"
        />
      </div>
    </div>
  );
};

export default GlassReplacement;
