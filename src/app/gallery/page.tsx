"use client";
import { motion } from "motion/react";
import { FaPhoneVolume } from "react-icons/fa6";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const ButtonAnimation = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  whileHover: { scale: 1.03, opacity: 0.8 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

const Gallery = () => {
  // save images into array
  const images = [
    {
      src: "/job1.jpg",
      alt: "1st Image",
    },
    {
      src: "/job2.jpg",
      alt: "2nd Image",
    },
    {
      src: "/job3.jpg",
      alt: "3rd Image",
    },
    {
      src: "/job4.jpg",
      alt: "4th Image",
    },
    {
      src: "/job5.jpg",
      alt: "5th Image",
    },
    {
      src: "/job6.jpg",
      alt: "6th Image",
    },
    {
      src: "/job7.jpg",
      alt: "7th Image",
    },
    {
      src: "/papa.jpg",
      alt: "8th Image",
    },
  ];
  return (
    <div className="w-5/6 mx-auto py-10">
      <h1 className="text-6xl md:text-8xl text-center font-semibold uppercase text-[#253767]">
        Gallery{" "}
      </h1>
      {/*Map all images in grid display */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 mb-10">
        {images.map((image, i) => (
          <div key={i} className="overflow-hidden rounded-xl cursor-pointer">
            <Image
              src={image.src}
              width={1000}
              height={800}
              alt={image.alt}
              className="hover:scale-105"
            />
          </div>
        ))}
      </div>
      <motion.div {...ButtonAnimation} className="flex justify-center">
        <Link
          href="tel:909-913-3642"
          className="flex items-center gap-4 rounded-full font-semibold z-10 bg-[#172E73] px-5 py-5 md:px-7 md:py-10 text-xl md:text-4xl text-white"
        >
          <FaPhoneVolume className="text-4xl" />
          SCHEDULE YOUR NEXT PROJECT TODAY!
        </Link>
      </motion.div>
    </div>
  );
};

export default Gallery;
