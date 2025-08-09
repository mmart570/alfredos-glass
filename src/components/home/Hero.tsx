"use client";
import { motion } from "motion/react";
import Link from "next/link";

import CircularText from "@/components/home/CircularText"; // TURD: delete if unused
import Image from "next/image";

const ButtonAnimation = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  whileHover: { scale: 1.03, opacity: 0.8 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

const Hero = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
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
        <div className="relative z-10 h-200 flex flex-col items-center justify-center text-center pt-20">
          <h1 className="text-6xl font-serif italic md:text-8xl uppercase font-semibold text-[#BF1736]">
            Commercial and Residential <br /> Glass Repair
          </h1>
          <p className="mt-8 mb-20 text-[#253767] text-4xl font-semibold text-pretty">
            Providing quality glass services across the Inland Empire at an
            affordable price!
          </p>
        </div>
        <motion.div {...ButtonAnimation} className="flex justify-center">
          <Link
            href="/services"
            className="rounded-lg font-semibold z-10 bg-[#172E73] px-4 py-2 mt-2 text-4xl text-white"
          >
            SCHEDULE YOUR NEXT REPAIR TODAY!
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
