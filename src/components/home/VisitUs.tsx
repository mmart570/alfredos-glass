"use client";
import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { motion } from "motion/react";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";

// animation and layout credit to ACM Atlas
// https://github.com/acm-ucr/acm-atlas
const ButtonAnimation = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  whileHover: { scale: 1.03, opacity: 0.8 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

const VisitUs = () => {
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");
      // init a marker
      const { Marker } = (await loader.importLibrary(
        "marker",
      )) as google.maps.MarkerLibrary;

      const position = {
        lat: 34.11631,
        lng: -117.2626,
      };

      // map options
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 15,
        mapId: "MY_NEXTJS_MAPID",
      };

      //setup map
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      // put up a marker
      const marker = new Marker({
        map: map,
        position: position,
      });
    };

    initMap();
  }, []);

  return (
    <div>
      <h1 className="text-6xl text-[#172E73] italic font-serif flex justify-center font-semibold pt-36">
        VISIT US
      </h1>
      <motion.div {...ButtonAnimation} className="flex justify-center">
        <Link
          href="https://www.google.com/maps/dir//Alfredo's+Glass+Services,+1180+E+9th+St,+San+Bernardino,+CA+92410/@34.1163067,-117.3037942,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80c3554dcfdb6a35:0xb9b3eac3b148e556!2m2!1d-117.2626012!2d34.1163136?authuser=0&entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
          className="flex items-center rounded-full gap-4 m-10 font-semibold z-10 bg-[#F0E85C] px-10 py-5 text-xl md:text-4xl text-[#253767]"
        >
          <FaLocationArrow />
          Get Directions
        </Link>
      </motion.div>
      <div style={{ height: "600px" }} ref={mapRef} />
    </div>
  );
};

export default VisitUs;
