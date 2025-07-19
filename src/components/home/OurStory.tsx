import React from "react";
import Image from "next/image";

const OurStory = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-gray-300 pb-40">
      <h1 className="text-6xl text-[#172E73] flex justify-center font-semibold py-36">
        OUR STORY
      </h1>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <Image
          src="/glass.jpg"
          alt="Papa"
          width="3000"
          height="300"
          className="w-full ml-8 shadow-xl rounded-3xl"
        />
        <p className="ml-20 mt-20 mr-8 text-4xl text-[#172E73] font-semibold">
          We have serviced San Bernardino and cities across the Inland Empire
          for over 10 years. From sudden business break-ins to the most worn
          down windows, we aim to give our customers top-notch glass repair
          solutions with a personalized touch.
        </p>
      </div>
    </div>
  );
};

export default OurStory;
