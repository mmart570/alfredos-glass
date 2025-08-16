"use client";
import React from "react";
import Image from "next/image";
import Count from "@/components/count";
import { motion } from "framer-motion";

// NOTE: credit to ACM website development **URL**
const dropInAnim = {
  initial: { opacity: 0, y: 30 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 1, ease: "easeOut" as const },
  viewport: { once: true },
};

const OurStory = () => {
  return (
    <div className="flex w-screen flex-col items-center justify-center bg-gray-300 pb-40">
      <h1 className="text-6xl text-[#172E73] flex justify-center font-semibold py-36">
        OUR STORY
      </h1>
      <div className="flex flex-col items-center xl:flex-row">
        <Image
          src="/glass.jpg"
          alt="Papa"
          width="500"
          height="70"
          className="shadow-xl rounded-3xl mx-auto w-[400px] md:w-[600px] lg:w-[700px] xl:ml-8 xl:w-[4000px] h-auto"
        />
        <div className="flex flex-col ml-20 mt-20 mr-8 text-center gap-10">
          <Count
            end={10}
            label="years of servicing the Inland Empire"
            duration={0.9}
            color="text-[#172E73]"
            numberSize="text-5xl md:text-7xl"
            labelSize="text-2xl md:text-3xl"
          />
          <motion.p
            {...dropInAnim}
            className="text-[#172E73] text-3xl md:text-5xl"
          >
            We are a Hispanic family-owned business that
            <span className="font-bold italic"> knows </span>
            how to do the job right.
            <span className="font-bold"> Alfredo's Glass Services </span>
            is dedicated to giving our customers top-notch glass repair
            solutions with great customer service .
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
