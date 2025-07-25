"use client";
import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const VisitUs = () => {
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");

      const position = {
        lat: 34.116508985936534,
        lng: -117.26263771794464,
      };

      // map options
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 17,
        mapId: "MY_NEXTJS_MAPID",
      };

      //setup map
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
    };

    initMap();
  }, []);

  return <div style={{ height: "600px" }} ref={mapRef} />;
};

export default VisitUs;
