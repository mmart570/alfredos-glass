"use client";
import React from "react";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";
import Link from "next/link";

const ButtonAnimation = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  whileHover: { scale: 1.03, opacity: 0.8 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

const Services = () => {
  return (
    <div>
      <motion.div {...ButtonAnimation} className="flex justify-center">
        <Link
          href="/services"
          className="rounded-lg font-semibold bg-[#172E73] px-4 py-2 mt-2 text-4xl text-white"
        >
          Learn more →
        </Link>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8 place-items-center">
        <ServiceCard
          title="Glass Replacement"
          index={1}
          image="/glassreplace.jpg"
        />
        <ServiceCard
          title="Retrofit Windows"
          index={2}
          image="/retrofit.webp"
        />
        <ServiceCard title="Screens" index={3} image="/screenmats.jpg" />
        <ServiceCard title="Shower Doors" index={4} image="/showerdoor2.webp" />
        <ServiceCard title="Entry Doors" index={5} image="/patiodoor.jpg" />
        <ServiceCard
          title="Commercial Doors & Locks"
          index={6}
          image="/doorlock.jpg"
        />
      </div>
    </div>
  );
};

export default Services;
