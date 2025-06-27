"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  altText?: string;
  index: number;
}

const dropInAnim = (index: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { y: 0, opacity: 1 },
  transition: { delay: index * 0.2, duration: 0.5 },
  viewport: { once: true },
});

const ButtonAnimation = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  whileHover: { scale: 1.03, opacity: 0.8 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

const ServiceCard = ({ title, description, index }: ServiceCardProps) => {
  return (
    <motion.div {...dropInAnim(index)}>
      <div className="flex justify-center px-4 sm:px-0">
        <div className="bg-[#BF1736] flex w-full flex-col items-center rounded-4xl p-6 text-wrap shadow-md shadow-black sm:p-8 md:w-100 md:h-50">
          <div className="text-[#253767] font-nunito uppercase text-xl font-bold sm:text-3xl">
            {title}
          </div>
          <p className="text-[#D9A404] font-sans-nunito mt-3 text-center">
            {description}
          </p>
          <motion.div {...ButtonAnimation}>
            <Link
              href="/services"
              className="rounded-full bg-white px-4 inline-block py-1 mt-2 text-sm text-[#253767]"
            >
              Learn more →
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
