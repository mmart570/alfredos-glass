"use client";
import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

// TURD: ADD GET DIRECTIONS BUTTON

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
      <h1 className="text-6xl text-[#172E73] italic font-serif flex justify-center font-semibold pt-36 pb-10">
        VISIT US
      </h1>
      <div style={{ height: "600px" }} ref={mapRef} />
    </div>
  );
};

export default VisitUs;
