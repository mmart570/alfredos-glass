"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import React from "react";

interface ServiceCardProps {
  title: string;
  altText?: string;
  index: number;
  image: string;
}

const dropInAnim = (index: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { y: 0, opacity: 1 },
  transition: { delay: index * 0.2, duration: 0.5 },
  viewport: { once: true },
});

const ServiceCard = ({ title, index, image }: ServiceCardProps) => {
  return (
    <motion.div {...dropInAnim(index)} className="w-full">
      <div className="relative overflow-hidden border-[#BF1736] border-8 flex w-full flex-col justify-center rounded-4xl p-6 shadow-md shadow-black sm:p-8 md:w-100 md:h-120">
        <Image
          src={image}
          alt={title}
          fill
          className="absolute object-cover object-center opacity-50"
        />
        <div className="text-[#253767] font-nunito z-0 uppercase text-xl font-bold sm:text-3xl">
          {title}
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
